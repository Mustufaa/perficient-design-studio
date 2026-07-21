import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data/projects";

export function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-8 flex flex-col items-center gap-4 text-center">
        <div>
          <p className="section-eyebrow">Featured Projects</p>
          <h2 className="section-title-line mt-3 text-[clamp(28px,3.2vw,44px)]">Selected case studies</h2>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.slice(0, 6).map((project) => (
          <article key={project.slug} className="flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--color-line)] bg-white/50">
            <div className="relative h-64 overflow-hidden">
              <Image src={project.images[0]} alt={project.title} fill className="object-cover transition duration-500 hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">{project.category}</div>
              <h3 className="mb-3 text-2xl leading-tight">{project.title}</h3>

              <div className="space-y-2 text-sm text-[var(--color-muted)]">
                <p>
                  <span className="font-semibold text-[var(--color-ink)]">Address:</span> {project.location}
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-ink)]">Owner:</span> {project.owner}
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-ink)]">Review:</span> {project.review}
                </p>
              </div>

              <div className="mt-auto pt-5">
                <Link href={`/projects/${project.slug}`} className="inline-flex rounded-full bg-[var(--color-gold)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#8f6d43]">View Project</Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="/projects" className="rounded-full border border-[var(--color-line)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]">View all projects</Link>
      </div>
    </section>
  );
}
