import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/data/projects";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      <div className="relative h-[420px] overflow-hidden rounded-[32px]">
        <Image src={project.images[0]} alt={project.title} fill className="object-cover" />
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/60 p-4 text-sm">Location: {project.location}</div>
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/60 p-4 text-sm">Category: {project.category}</div>
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/60 p-4 text-sm">Area: {project.builtUpArea ?? project.plotArea ?? "—"}</div>
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/60 p-4 text-sm">Status: {project.status ?? "—"}</div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <h1 className="text-5xl">{project.title}</h1>
          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{project.overview}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.keyFeatures.map((feature) => (
              <div key={feature} className="rounded-2xl border border-[var(--color-line)] bg-white/60 p-4 text-sm">{feature}</div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-charcoal)] p-6 text-white">
          <h2 className="text-2xl">Start a Similar Project</h2>
          <p className="mt-4 text-sm leading-6 text-white/80">Tell us about your brief and we’ll help you plan the right architectural, interior, or construction approach.</p>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-[var(--color-gold)] px-4 py-2 text-sm font-semibold text-white">Book a Consultation</Link>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {project.images.map((image, index) => (
          <div key={`${project.slug}-${index}`} className="relative h-72 overflow-hidden rounded-3xl border border-[var(--color-line)]">
            <Image src={image} alt={`${project.title} view ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </main>
  );
}
