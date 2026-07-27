'use client';

import { services, additionalServices, expectations } from "@/lib/data/services";

const serviceIconSrcs = [
  "/icon/icon-building.png",       // Architecture Design
  "/icon/icon-interior.png",       // Interior Design
  "/icon/icon-construction.png",   // Construction Services
  "/icon/icon-leaf.png",           // Landscape Design
  "/icon/icon-floorplan.png",      // Turnkey Construction
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

const mepDrawings = [
  "Mechanical / HVAC Drawings",
  "Plumbing Drawings",
  "Electrical Drawings",
  "Fire Protection Drawings",
  "Coordination Drawings",
  "Penetration Drawings",
  "MEP Shop Drawings",
  "Pipe Spool Drawings",
  "As-built Drawings",
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

        <div className="mx-auto space-y-10 max-w-[980px]">
          {services.map((service, index) => (
            <section
              key={service.title}
              className={`relative overflow-hidden rounded-[36px] border border-[var(--color-line)] bg-white/95 px-8 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.08)] ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col gap-8 lg:items-center lg:justify-between lg:gap-10`}
            >
              <div className="absolute -right-8 top-6 text-[10rem] font-[900] uppercase tracking-[-0.08em] text-[var(--color-ink)]/5 lg:-right-12 lg:text-[12rem]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10 flex-1 lg:w-5/12">
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">Service {index + 1}</div>
                <h3 className="mt-4 max-w-[26ch] text-3xl font-semibold text-[var(--color-ink)] leading-[1.05]">
                  {service.title}
                </h3>
                <p className="mt-5 max-w-[40ch] text-sm leading-7 text-[var(--color-muted)]">
                  {service.title === "Turnkey Construction"
                    ? "Complete residential construction services from concept planning through build delivery and finishing touches."
                    : "A focused, flexible service that brings clarity and craftsmanship to every project."}
                </p>
              </div>

              <div className="relative z-10 flex-1 lg:w-4/12 rounded-[28px] border border-[var(--color-line)] bg-[var(--color-paper)] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)]/70">What’s included</div>
                <div className="mt-6 space-y-4">
                  {service.bullets.map((bullet) => (
                    <div key={bullet} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]" />
                      <p className="text-sm leading-6 text-[var(--color-ink)]/80">{bullet}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-8 inline-flex rounded-full bg-[var(--color-gold)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)] transition hover:bg-[var(--color-ink)] hover:text-white"
                >
                  Contact
                </a>
              </div>
            </section>
          ))}
        </div>

        <div className="rounded-[20px] border border-[var(--color-line)] bg-white/70 p-3 shadow-[0_4px_14px_rgba(0,0,0,0.04)] sm:p-4 lg:p-5">
          <div className="text-center">
            <p className="section-eyebrow">MEP Drawing Services</p>
            <h3 className="mt-2 text-xl text-[var(--color-ink)] sm:text-2xl">
              9 Types of MEP Drawings Used in Construction Projects
            </h3>
            <p className="mx-auto mt-2 max-w-3xl text-sm leading-6 text-[var(--color-muted)]">
              Precision-driven documentation for coordination, installation, and long-term operation.
            </p>
          </div>

          <ol className="mx-auto mt-4 grid max-w-5xl gap-2 md:grid-cols-2 xl:grid-cols-3">
            {mepDrawings.map((drawing, index) => (
              <li key={drawing} className="rounded-[14px] border border-[var(--color-line)] bg-[var(--color-paper)] p-3">
                <div className="flex items-start gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)]/10 text-xs font-semibold text-[var(--color-gold)]">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium leading-5 text-[var(--color-ink)]">{drawing}</p>
                </div>
              </li>
            ))}
          </ol>
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