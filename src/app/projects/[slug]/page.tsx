import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/data/projects";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const designHighlights = project.designHighlights?.length ? project.designHighlights : project.keyFeatures;
  const materialsUsed = project.materialsUsed?.length ? project.materialsUsed : [];

  return (
    <main className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      <div className="relative h-[420px] overflow-hidden rounded-[32px]">
        <Image src={project.images[0]} alt={project.title} fill className="object-cover" />
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/60 p-4 text-sm"><span className="font-semibold text-[var(--color-ink)]">Location:</span> {project.location}</div>
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/60 p-4 text-sm"><span className="font-semibold text-[var(--color-ink)]">Category:</span> {project.category}</div>
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/60 p-4 text-sm"><span className="font-semibold text-[var(--color-ink)]">Area:</span> {project.builtUpArea ?? project.plotArea ?? "—"}</div>
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/60 p-4 text-sm"><span className="font-semibold text-[var(--color-ink)]">Status:</span> {project.status ?? "—"}</div>
      </div>

      <div className="mt-8">
        <div>
          <p className="section-eyebrow">Project Detail</p>
          <h1 className="mt-3 text-[clamp(34px,4vw,58px)] leading-none">{project.title}</h1>
          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{project.overview}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--color-line)] bg-white/60 p-4 text-sm">
              <div className="font-semibold text-[var(--color-ink)]">Completion Date</div>
              <div className="mt-2 text-[var(--color-muted)]">{project.completionDate ?? "—"}</div>
            </div>
            <div className="rounded-2xl border border-[var(--color-line)] bg-white/60 p-4 text-sm">
              <div className="font-semibold text-[var(--color-ink)]">Client Details</div>
              <div className="mt-2 text-[var(--color-muted)]">{project.clientDetails ?? "Private project"}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-[var(--color-line)] bg-white/60 p-6">
          <h2 className="text-2xl">Design Highlights</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
            {designHighlights.map((item) => (
              <li key={item} className="flex gap-2"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-gold)]" />{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-[var(--color-line)] bg-white/60 p-6">
          <h2 className="text-2xl">Materials Used</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {materialsUsed.length > 0 ? materialsUsed.map((material) => (
              <span key={material} className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs text-[var(--color-muted)]">{material}</span>
            )) : (
              <span className="text-sm text-[var(--color-muted)]">Materials information will be added for this project.</span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-[var(--color-line)] bg-white/60 p-6">
        <h2 className="text-2xl">Project Gallery</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {project.images.map((image, index) => (
            <div key={`${project.slug}-${index}`} className="relative h-72 overflow-hidden rounded-3xl border border-[var(--color-line)]">
              <Image src={image} alt={`${project.title} view ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-[var(--color-line)] bg-[var(--color-paper)] p-6 text-[var(--color-ink)]">
        <h2 className="text-2xl">Start a Similar Project</h2>
        <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">Tell us about your brief and we’ll help you plan the right architectural, interior, or construction approach.</p>
        <Link href="/contact" className="mt-6 inline-flex rounded-full bg-[var(--color-gold)] px-4 py-2 text-sm font-semibold text-white">Book a Consultation</Link>
      </div>
    </main>
  );
}
