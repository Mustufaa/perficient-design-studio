'use client';

import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const packages = [
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

export function ResidentialConstructionPackages() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`mx-auto max-w-[1180px] px-4 py-10 transition-all duration-700 ease-out sm:px-6 lg:px-8 lg:py-16 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      aria-labelledby="residential-packages-title"
    >
      <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[#071a2d] shadow-[0_24px_80px_rgba(3,11,22,0.35)]">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] p-6 sm:p-8">
            <div>
              <p className="section-eyebrow text-[#c7a96a]">Residential Construction Packages</p>
              <h2 id="residential-packages-title" className="mt-3 text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                Premium residential packages crafted for timeless living.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
                From structural essentials to luxury finishing touches, every package is designed to balance quality, efficiency, and elevated craftsmanship.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-[0_14px_45px_rgba(0,0,0,0.18)]">
              <img
                src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury modern residential house exterior"
                className="h-[280px] w-full object-cover sm:h-[340px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {packages.map((pkg) => (
              <article
                key={pkg.title}
                className={`rounded-[28px] border p-5 shadow-[0_16px_45px_rgba(0,0,0,0.2)] sm:p-6 ${pkg.featured ? "border-[#c7a96a]/70 bg-white text-[#071a2d]" : "border-white/10 bg-white/95 text-[#071a2d]"}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] ${pkg.featured ? "bg-[#071a2d] text-[#f5e3bb]" : "bg-[#f4ebd8] text-[#071a2d]"}`}>
                      {pkg.featured ? <Sparkles className="h-3.5 w-3.5" /> : <CheckCircle2 className="h-3.5 w-3.5" />}
                      {pkg.featured ? "Featured Package" : "Standard Package"}
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold text-inherit">{pkg.title}</h3>
                  </div>
                  <div className={`rounded-2xl px-3 py-2 text-sm font-semibold ${pkg.featured ? "bg-[#f5e3bb] text-[#071a2d]" : "bg-[#071a2d] text-[#f5e3bb]"}`}>
                    {pkg.price}
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-6 text-inherit/80">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${pkg.featured ? "text-[#a9895c]" : "text-[#a9895c]"}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-[#c7a96a] px-6 py-3 text-sm font-semibold text-[#071a2d] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#e0bf7d]"
            >
              Get Quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
