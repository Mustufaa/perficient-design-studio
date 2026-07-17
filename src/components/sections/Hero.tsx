"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrame = 0;
    let renderer: any = null;
    let disposed = false;

    const initScene = async () => {
      try {
        const THREE = await import("three");
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth < 1024;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          isMobile ? 48 : isTablet ? 45 : 42,
          window.innerWidth / window.innerHeight,
          0.1,
          100
        );
        camera.position.set(0, isMobile ? 4.2 : 4.6, isMobile ? 20 : 18);
        camera.lookAt(0, 2.4, 0);

        renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(canvas.clientWidth || window.innerWidth, canvas.clientHeight || window.innerHeight, false);

        const ambient = new THREE.AmbientLight(0xf3ead8, 0.92);
        const directional = new THREE.DirectionalLight(0xfff7eb, 1.08);
        directional.position.set(4, 8, 5);
        scene.add(ambient, directional);

        const plane = new THREE.Mesh(
          new THREE.PlaneGeometry(24, 24),
          new THREE.MeshBasicMaterial({ color: 0xf5efe4, transparent: true, opacity: 0.82 })
        );
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = -0.22;
        scene.add(plane);

        const grid = new THREE.GridHelper(24, 24, 0xd8b275, 0xe8dfd0);
        grid.material.transparent = true;
        grid.material.opacity = 0.24;
        grid.position.y = -0.2;
        scene.add(grid);

        const buildingGroup = new THREE.Group();
        buildingGroup.scale.set(
          isMobile ? 0.84 : isTablet ? 0.92 : 1,
          isMobile ? 0.84 : isTablet ? 0.92 : 1,
          isMobile ? 0.84 : isTablet ? 0.92 : 1
        );
        scene.add(buildingGroup);

        const roomShellConfigs = [
          { width: 4.8, depth: 3.2, height: 4.4, x: -5.2, z: 1.2 },
          { width: 4.1, depth: 2.8, height: 3.6, x: -0.9, z: -1.0 },
          { width: 3.4, depth: 2.3, height: 5.9, x: 2.8, z: 0.7 },
          { width: 3.7, depth: 2.5, height: 3.8, x: 5.6, z: -1.0 },
        ];

        const riseTargets: Array<{ mesh: any; edges: any; delay: number; targetScaleY: number }> = [];

        roomShellConfigs.forEach((config, index) => {
          const baseGeometry = new THREE.BoxGeometry(config.width, 1, config.depth);
          const mesh = new THREE.Mesh(
            baseGeometry,
            new THREE.MeshBasicMaterial({ color: 0xf8f6f2, transparent: true, opacity: 0.08 })
          );
          mesh.position.set(config.x, 0, config.z);
          mesh.scale.set(1, 0.001, 1);
          mesh.userData.targetScaleY = config.height;

          const edges = new THREE.LineSegments(
            new THREE.WireframeGeometry(baseGeometry),
            new THREE.LineBasicMaterial({ color: 0xc9a876, transparent: true, opacity: 0.56 })
          );
          edges.position.copy(mesh.position);
          edges.scale.set(1, 0.001, 1);

          buildingGroup.add(mesh, edges);
          riseTargets.push({ mesh, edges, delay: index * 0.12, targetScaleY: config.height });
        });

        const renderLoop = () => {
          if (disposed) return;

          const elapsed = performance.now() * 0.001;
          const motionScale = isMobile ? 0.22 : isTablet ? 0.28 : 0.36;
          const orbitStrength = isMobile ? 0.28 : isTablet ? 0.42 : 0.8;
          const cameraDrift = isMobile ? 0.18 : 0.45;

          buildingGroup.rotation.y = Math.sin(elapsed * 0.5) * motionScale;

          riseTargets.forEach((item) => {
            const progress = Math.min((elapsed - item.delay * 0.45) / (isMobile ? 1.2 : 0.9), 1);
            const eased = progress < 1 ? 1 - Math.pow(2, -10 * progress) : 1;
            const height = item.targetScaleY * eased;
            item.mesh.scale.y = 0.001 + height;
            item.mesh.position.y = (0.001 + height) / 2 - 0.15;
            item.edges.scale.y = item.mesh.scale.y;
            item.edges.position.y = item.mesh.position.y;
          });

          camera.position.x = Math.sin(elapsed * 0.35) * orbitStrength;
          camera.position.y = (isMobile ? 4.2 : 4.6) + Math.sin(elapsed * 0.5) * cameraDrift;
          camera.lookAt(0, 2.5, 0);
          renderer.render(scene, camera);
          animationFrame = window.requestAnimationFrame(renderLoop);
        };

        const handleResize = () => {
          if (!canvas) return;
          const width = canvas.clientWidth || window.innerWidth;
          const height = canvas.clientHeight || window.innerHeight;
          const nextIsMobile = window.innerWidth < 768;
          const nextIsTablet = window.innerWidth < 1024;

          camera.fov = nextIsMobile ? 48 : nextIsTablet ? 45 : 42;
          camera.aspect = width / height;
          camera.position.z = nextIsMobile ? 20 : 18;
          buildingGroup.scale.set(
            nextIsMobile ? 0.84 : nextIsTablet ? 0.92 : 1,
            nextIsMobile ? 0.84 : nextIsTablet ? 0.92 : 1,
            nextIsMobile ? 0.84 : nextIsTablet ? 0.92 : 1
          );
          camera.updateProjectionMatrix();
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, nextIsMobile ? 1.5 : 2));
          renderer.setSize(width, height, false);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        animationFrame = window.requestAnimationFrame(renderLoop);

        return () => {
          disposed = true;
          window.cancelAnimationFrame(animationFrame);
          window.removeEventListener("resize", handleResize);
          renderer.dispose();
        };
      } catch (error) {
        console.warn("Hero 3D scene unavailable:", error);
      }
    };

    initScene();

    return () => {
      disposed = true;
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <section className="hero-grid relative flex min-h-screen items-center overflow-hidden bg-[var(--color-paper)] text-[var(--color-ink)]">
      <canvas
        ref={canvasRef}
        id="hero3d"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
      <div className="absolute inset-0 opacity-60">
        <div className="absolute right-[-10%] top-[-5%] h-72 w-72 rounded-full bg-[var(--color-gold)]/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-px w-56 bg-[var(--color-line)]" />
        <div className="absolute bottom-0 left-10 h-56 w-px bg-[var(--color-line)]" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-4 py-24 sm:px-6 lg:px-8">
        <p className="section-eyebrow text-[var(--color-muted)]">Company Profile</p>
        <h1 className="max-w-4xl text-5xl leading-none text-[var(--color-ink)] sm:text-6xl lg:text-7xl">DELIVERING QUALITY, TRUST, EXPERIENCE</h1>
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">
          <span className="h-px w-12 bg-[var(--color-line)]" />
          <span>ARCHITECTURE / CONSTRUCTION / INTERIOR / LANDSCAPING</span>
          <span className="h-px w-12 bg-[var(--color-line)]" />
        </div>
        <div className="flex flex-wrap gap-3 pt-4">
          <Link href="/contact" className="rounded-full bg-[var(--color-gold)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#8f6d43]">Book a Consultation</Link>
          <Link href="/projects" className="rounded-full border border-[var(--color-line)] bg-white/70 px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]">Explore Projects</Link>
        </div>
        <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
          <ArrowDown className="h-4 w-4" /> Scroll Down
        </div>
      </div>
    </section>
  );
}
