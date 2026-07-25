'use client';

import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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

const residentialPackages = [
  {
    title: "Essential Luxury",
    price: "₹3,500 / Sq.ft",
    featured: false,
    items: [
      "Bricks (Avval)",
      "Cement (UltraTech / Ambuja / ACC)",
      "Steel (Kamdhenu / Rathi / Amba)",
      "All rooms & bathrooms false ceiling",
      "Premium floor tiles (2' × 4')",
      "Bathroom ceiling tiles (2' × 2')",
      "Front & back elevation tiles (2' × 4')",
      "Main door (Sagwan) 3' × 6'",
      "Flush doors with veneer",
      "Door hardware (Dorset or equivalent)",
      "Bathroom fittings (Kohler / Jaguar or equivalent)",
      "Chinaware (Hindware)",
      "Electrical wires (RR / Havells)",
      "Modular switches (Legrand / Schneider)",
      "Front elevation as per drawing",
    ],
  },
  {
    title: "Signature Residence",
    price: "₹4,000 / Sq.ft",
    featured: true,
    items: [
      "Everything in Essential Luxury",
      "Beds with side tables in all bedrooms",
      "Bed mattresses",
      "Chairs with tables",
      "Premium flush doors with veneer",
      "Premium bathroom fittings",
      "Premium chinaware",
      "Premium electrical accessories",
      "Enhanced interior finishing",
      "Front elevation as per drawing",
    ],
  },
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
  const [packagesVisible, setPackagesVisible] = useState(false);
  const packagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = packagesRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPackagesVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

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

        <div
          ref={packagesRef}
          className={`space-y-5 rounded-[28px] border border-[var(--color-line)] bg-white/70 p-5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-700 ease-out sm:p-6 lg:p-8 ${packagesVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <div className="text-center">
            <p className="section-eyebrow">Residential Construction Packages</p>
            <h3 className="mt-3 text-3xl text-[var(--color-ink)] sm:text-4xl">
              Premium packages crafted for timeless living.
            </h3>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[24px] border border-[var(--color-line)] bg-[var(--color-paper)] p-5">
              <img
                src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury residential house exterior"
                className="h-56 w-full rounded-[18px] object-cover sm:h-64"
              />
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                From structural essentials to luxury finishing touches, every package is designed to balance quality, efficiency, and elevated craftsmanship.
              </p>
            </div>

            <div className="space-y-4">
              {residentialPackages.map((pkg, index) => (
                <div
                  key={pkg.title}
                  className={`rounded-[24px] border p-5 transition-all duration-700 ease-out ${pkg.featured ? "border-[var(--color-gold)] bg-[var(--color-paper)]" : "border-[var(--color-line)] bg-white"} ${packagesVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] ${pkg.featured ? "bg-[var(--color-gold)]/15 text-[var(--color-ink)]" : "bg-[var(--color-ink)]/5 text-[var(--color-ink)]"}`}>
                        {pkg.featured ? <Sparkles className="h-3.5 w-3.5" /> : <CheckCircle2 className="h-3.5 w-3.5" />}
                        {pkg.featured ? "Featured" : "Standard"}
                      </div>
                      <h4 className="mt-3 text-xl text-[var(--color-ink)]">{pkg.title}</h4>
                    </div>
                    <div className="rounded-full bg-[var(--color-gold)]/15 px-3 py-2 text-sm font-semibold text-[var(--color-ink)]">
                      {pkg.price}
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {pkg.items.slice(0, 6).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-6 text-[var(--color-muted)]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition-transform duration-300 hover:-translate-y-1"
          >
            Get Quote
            <ArrowRight className="h-4 w-4" />
          </a>
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