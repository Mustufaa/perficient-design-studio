import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const canvas = document.getElementById('hero3d');
if (!canvas) {
  console.warn('hero-3d canvas not found');
} else {
  const hero = canvas.closest('section');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;

  try {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 5.2, 19);
    camera.lookAt(0, 2.4, 0);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const ambient = new THREE.AmbientLight(0xf3ead8, 0.88);
    const directional = new THREE.DirectionalLight(0xfff7eb, 1.05);
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
    scene.add(buildingGroup);

    const roomShellConfigs = [
      { width: 4.8, depth: 3.2, height: 4.4, x: -5.2, z: 1.2 },
      { width: 4.1, depth: 2.8, height: 3.6, x: -0.9, z: -1.0 },
      { width: 3.4, depth: 2.3, height: 5.9, x: 2.8, z: 0.7 },
      { width: 3.7, depth: 2.5, height: 3.8, x: 5.6, z: -1.0 },
    ];

    const riseTargets = [];
    for (let index = 0; index < roomShellConfigs.length; index += 1) {
      const config = roomShellConfigs[index];
      const baseGeometry = new THREE.BoxGeometry(config.width, 1, config.depth);
      const mesh = new THREE.Mesh(
        baseGeometry,
        new THREE.MeshBasicMaterial({ color: 0xf8f6f2, transparent: true, opacity: 0.06 })
      );
      mesh.position.set(config.x, 0, config.z);
      mesh.scale.set(1, 0.001, 1);
      mesh.userData.targetScaleY = config.height;
      mesh.userData.delay = index * 0.12;
      mesh.userData.baseY = config.height;

      const edges = new THREE.LineSegments(
        new THREE.WireframeGeometry(baseGeometry),
        new THREE.LineBasicMaterial({ color: 0xc9a876, transparent: true, opacity: 0.56 })
      );
      edges.position.copy(mesh.position);
      edges.scale.set(1, 0.001, 1);

      buildingGroup.add(mesh, edges);
      riseTargets.push({ mesh, edges, delay: mesh.userData.delay });
    }

    const particleCount = prefersReducedMotion || isMobile ? 0 : 18;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 16;
      particlePositions[i * 3 + 1] = Math.random() * 10 + 0.5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 11;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: 0xa9895c,
        size: 0.05,
        transparent: true,
        opacity: 0.35,
        depthWrite: false,
      })
    );
    scene.add(particles);

    let frame = 0;
    let isInView = true;
    let mouseX = 0;
    let mouseY = 0;
    const baseCamera = new THREE.Vector3(0, 4.2, 18);
    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const observer = new IntersectionObserver((entries) => {
      isInView = entries[0]?.isIntersecting ?? true;
    }, { threshold: 0.2 });
    if (hero) observer.observe(hero);

    function resize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function render() {
      const elapsed = frame * 16;
      const animatedY = prefersReducedMotion ? 1 : Math.min(elapsed / 1500, 1);

      if (!prefersReducedMotion && !isMobile) {
        const moveX = (mouseX - 0.5) * 1.6;
        const moveY = (mouseY - 0.5) * 0.9;
        camera.position.x += (baseCamera.x + moveX * 1.8 - camera.position.x) * 0.05;
        camera.position.y += (baseCamera.y + moveY * 1.2 - camera.position.y) * 0.05;
        camera.position.z += (baseCamera.z - camera.position.z) * 0.05;
        camera.lookAt(0, 2.5, 0);
      }

      if (!prefersReducedMotion) {
        buildingGroup.rotation.y = Math.sin(elapsed * 0.00015) * 0.18;
      }

      for (const item of riseTargets) {
        const progress = Math.min((animatedY - item.delay * 0.18) / 0.7, 1);
        const eased = easeOutExpo(progress);
        const height = item.mesh.userData.targetScaleY * eased;
        item.mesh.scale.y = 0.001 + height;
        item.mesh.position.y = (0.001 + height) / 2 - 0.15;
        item.edges.scale.y = item.mesh.scale.y;
        item.edges.position.y = item.mesh.position.y;
      }

      if (particles) {
        particles.rotation.y += 0.0008;
      }

      if (isInView) {
        renderer.render(scene, camera);
      }

      frame += 1;
      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', (event) => {
      if (window.innerWidth >= 768) {
        mouseX = event.clientX / window.innerWidth;
        mouseY = event.clientY / window.innerHeight;
      }
    });
  } catch (error) {
    console.warn('Hero 3D scene unavailable:', error);
  }
}
