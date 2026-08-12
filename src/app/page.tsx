import Link from "next/link";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { TrustedBrands } from "@/components/sections/TrustedBrands";

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Main SEO Heading */}
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
            Interior Design, Architecture & Construction in Lucknow and Across India
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
            Perficient Design Studio delivers premium interior design,
            architecture, construction, and landscaping solutions for
            residential and commercial projects in Lucknow and across India.
          </p>
        </div>
      </section>

      <About />

      <Services />

      {/* Services SEO Content */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-[var(--color-line)] bg-white p-6">
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">
              Interior Design
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              Residential and commercial interior design solutions focused on
              functional, elegant, and contemporary spaces.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--color-line)] bg-white p-6">
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">
              Architecture
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              Architectural planning and design solutions for modern
              residential and commercial projects.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--color-line)] bg-white p-6">
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">
              Construction
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              Complete construction solutions with a focus on quality,
              planning, execution, and modern design.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--color-line)] bg-white p-6">
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">
              Landscaping
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              Landscape design solutions that create beautiful and functional
              outdoor environments for homes and commercial spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="rounded-[32px] border border-[var(--color-line)] bg-white/95 px-8 py-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
            250+ Projects Done
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            Trusted by clients across architecture, interiors, construction,
            and landscape design. Explore our project work to see how we bring
            ideas to life.
          </p>

          <Link
            href="/projects"
            className="mt-8 inline-flex rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#8f6d43]"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* Location SEO */}
      <section className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">
          Design & Construction Services in Lucknow and Across India
        </h2>

        <p className="mt-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
          Based in Lucknow, Uttar Pradesh, Perficient Design Studio provides
          interior design, architecture, construction, and landscaping
          services for residential and commercial projects. We work with
          clients in Lucknow and across India to create thoughtfully designed,
          functional, and distinctive spaces.
        </p>
      </section>

      <TrustedBrands />
    </main>
  );
}