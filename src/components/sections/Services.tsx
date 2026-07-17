import { services, additionalServices, expectations } from "@/lib/data/services";
import { Building2, CheckCircle2, Sparkles } from "lucide-react";

export function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="section-eyebrow">Our Services</p>
      <h2 className="section-title-line mt-3 text-4xl">Comprehensive design and delivery</h2>
      <p className="mt-4 max-w-4xl text-base leading-7 text-[var(--color-muted)]">
        We offer a comprehensive range of architecture, interior, construction, and landscape design services. From concept to completion, we deliver thoughtful solutions that combine creativity, functionality, and technical excellence.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="card-surface rounded-3xl p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-[var(--color-gold)]/10 p-2 text-[var(--color-gold)]"><Building2 className="h-5 w-5" /></div>
              <h3 className="text-2xl">{service.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {service.bullets.map((bullet) => (
                <span key={bullet} className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs text-[var(--color-muted)]">{bullet}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {additionalServices.map((service) => (
          <div key={service} className="card-surface rounded-2xl p-4 text-sm font-medium text-[var(--color-ink)]">{service}</div>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {expectations.map((expectation) => (
          <div key={expectation.title} className="card-surface rounded-2xl p-5">
            <div className="mb-3 inline-flex rounded-full bg-[var(--color-gold)]/10 p-2 text-[var(--color-gold)]"><CheckCircle2 className="h-5 w-5" /></div>
            <h3 className="mb-2 text-lg font-semibold">{expectation.title}</h3>
            <p className="text-sm leading-6 text-[var(--color-muted)]">{expectation.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
