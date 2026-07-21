import { services, additionalServices, expectations } from "@/lib/data/services";

const serviceIconSrcs = [
  "/icon/icon-building.png",       // Architecture Design
  "/icon/icon-interior.png",       // Interior Design
  "/icon/icon-construction.png",   // Construction Services
  "/icon/icon-leaf.png",           // Landscape Design
];

const additionalIconSrcs = [
  "/icon/icon-building.png",
  "/icon/icon-interior.png",
  "/icon/icon-construction.png",
  "/icon/icon-floorplan.png",
  "/icon/icon-furniture.png",
  "/icon/icon-sitemanagement.png",
];

const expectationIconSrcs = [
  "/icon/icon-leaf.png",
  "/icon/icon-target.png",
  "/icon/icon-qualitybadge.png",
  "/icon/icon-refreshcheck.png",
];

export function Services() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="space-y-6">
        <div className="text-center">
          <p className="section-eyebrow">Our Services</p>
          <h2 className="section-title-line mt-3 text-4xl">Comprehensive design and delivery</h2>
          <p className="mx-auto mt-4 max-w-4xl text-base leading-7 text-[var(--color-muted)]">
            We offer a comprehensive range of architecture, interior, construction, and landscape design services. From concept to completion, we deliver thoughtful solutions that combine creativity, functionality, and technical excellence.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {services.map((service, index) => (
            <div key={service.title} className="card-surface rounded-3xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)]/10">
                  <img
                    src={serviceIconSrcs[index]}
                    alt={service.title}
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <h3 className="text-2xl">{service.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.bullets.map((bullet) => (
                  <span key={bullet} className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs text-[var(--color-muted)]">
                    {bullet}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-transparent">
          <div className="mb-6 text-center">
            <span className="inline-flex px-1 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#2b2b2b]">
              Additional Services
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-3 md:grid-cols-6">
            {additionalServices.map((service, index) => (
              <div key={service} className="flex flex-col items-center gap-2 px-1 text-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)]/10">
                  <img
                    src={additionalIconSrcs[index]}
                    alt={service}
                    className="h-9 w-9 object-contain"
                  />
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.02em] text-[#232323]">
                  {service}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[4px] bg-transparent text-[var(--color-ink)]">
          <div className="px-2 py-1 text-center">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#2b2b2b]">What You Can Expect</span>
          </div>

          <div className="grid grid-cols-1 gap-0 md:grid-cols-4">
            {expectations.map((expectation, index) => (
              <div
                key={expectation.title}
                className={`flex items-center gap-3 px-3 py-3 text-left ${index !== expectations.length - 1 ? "md:border-r md:border-[var(--color-ink)]/20" : ""}`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)]/10">
                  <img
                    src={expectationIconSrcs[index]}
                    alt={expectation.title}
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <div>
                  <div className="font-sans text-[10px] font-semibold uppercase tracking-[0.02em] text-[#232323]">{expectation.title}</div>
                  <p className="font-sans text-[9px] leading-4 text-[var(--color-ink)]/75">{expectation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}