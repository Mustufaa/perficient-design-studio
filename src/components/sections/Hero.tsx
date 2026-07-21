"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80",
    alt: "Elegant villa exterior",
    tone: "dark" as const,
  },
  {
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80",
    alt: "Boutique living room",
    tone: "dark" as const,
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=80",
    alt: "Elegant kitchen interior",
    tone: "light" as const,
  },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTone = slides[activeIndex]?.tone ?? "dark";

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-hero-tone", activeTone);
  }, [activeTone]);

  return (
    <section className="relative h-[100vh] min-h-[640px] overflow-hidden bg-[#221b15] text-white">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-[2400ms] ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-[rgba(38,32,26,0.35)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/45" />

      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-6 h-px w-16 bg-white/70" />
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.38em] text-white/80">
            Architecture · Interior · Landscape
          </p>
          <h1 className="font-display text-[clamp(42px,7vw,96px)] font-light italic leading-[0.95] tracking-[0.01em] text-white">
            Designing spaces
            <br />
            with precision & purpose.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-[15.5px]">
            A boutique design practice in Lucknow — quietly luxurious architecture and interiors,
            shaped around comfort, material honesty and long-term value.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/projects"
              className={`rounded-full border px-6 py-3 text-[11.5px] font-semibold uppercase tracking-[0.18em] transition ${
                activeTone === "dark"
                  ? "border-white/80 text-white hover:bg-white hover:text-[#2f2419]"
                  : "border-[#2f2419]/70 bg-white/80 text-[#2f2419] hover:bg-[#2f2419] hover:text-white"
              }`}
            >
              Discover the Studio
            </Link>
            <Link
              href="/contact"
              className={`rounded-full border px-6 py-3 text-[11.5px] font-semibold uppercase tracking-[0.18em] transition ${
                activeTone === "dark"
                  ? "border-white/80 text-white hover:bg-white hover:text-[#2f2419]"
                  : "border-[#2f2419]/70 bg-white/80 text-[#2f2419] hover:bg-[#2f2419] hover:text-white"
              }`}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 w-2.5 rounded-full border border-white/70 transition ${
              index === activeIndex ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-7 left-4 z-10 hidden items-center gap-2 text-[10.5px] uppercase tracking-[0.3em] text-white/75 md:flex">
        <ArrowDown className="h-4 w-4" />
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
