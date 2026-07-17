import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="section-eyebrow">Projects</p>
        <h1 className="section-title-line mt-3 text-5xl">Selected work and case studies</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.slug} className="overflow-hidden rounded-3xl border border-[var(--color-line)] bg-white/60">
            <div className="relative h-64 overflow-hidden">
              <Image src={project.images[0]} alt={project.title} fill className="object-cover transition duration-500 hover:scale-105" />
            </div>
            <div className="p-5">
              <div className="mb-2 text-xs uppercase tracking-[0.22em] text-[var(--color-gold)]">{project.category}</div>
              <h2 className="text-2xl">{project.title}</h2>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{project.location}</p>
              <Link href={`/projects/${project.slug}`} className="mt-4 inline-flex rounded-full bg-[var(--color-gold)] px-4 py-2 text-sm font-semibold text-white">View Project</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
