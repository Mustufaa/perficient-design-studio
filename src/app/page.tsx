import Link from "next/link";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { TrustedBrands } from "@/components/sections/TrustedBrands";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="rounded-[32px] border border-[var(--color-line)] bg-white/95 px-8 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">Projects</p>
          <h2 className="mt-4 text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
            250+ projects done
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            Trusted by clients across architecture, interiors, construction, and landscape design. Explore our project work to see how we bring ideas to life.
          </p>
          <Link
            href="/projects"
            className="mt-8 inline-flex rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#8f6d43]"
          >
            View projects
          </Link>
        </div>
      </section>
      <TrustedBrands />
    </main>
  );
}
