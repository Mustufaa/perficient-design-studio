import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data/projects";

export function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="section-eyebrow">Featured Projects</p>
          <h2 className="section-title-line mt-3 text-4xl">Selected case studies</h2>
        </div>
        <Link href="/projects" className="rounded-full border border-[var(--color-line)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]">View all projects</Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.slice(0, 3).map((project) => (
          <article key={project.slug} className="overflow-hidden rounded-3xl border border-[var(--color-line)] bg-white/50">
            <div className="relative h-64 overflow-hidden">
              <Image src={project.images[0]} alt={project.title} fill className="object-cover transition duration-500 hover:scale-105" />
            </div>
            <div className="p-5">
              <div className="mb-2 flex items-center justify-between gap-2 text-xs uppercase tracking-[0.22em] text-[var(--color-gold)]">
                <span>{project.category}</span>
                <span>{project.location}</span>
              </div>
              <h3 className="mb-2 text-2xl">{project.title}</h3>
              <p className="mb-4 text-sm leading-6 text-[var(--color-muted)]">{project.overview}</p>
              <Link href={`/projects/${project.slug}`} className="text-sm font-semibold text-[var(--color-gold)]">View Project →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
