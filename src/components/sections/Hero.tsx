"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    // Use the uploaded exterior/architecture image in public/
    image: "/hero-architecture.png",
    alt: "Elegant villa exterior",
    tone: "dark" as const,
    title: "Designing spaces with precision & purpose.",
    description: "Thoughtful architectural solutions that balance aesthetics with functionality. We create timeless spaces that inspire and endure.",
    service: "Architecture",
  },
  {
    // Use the uploaded interior image in public/
    image: "/hero-interior.png",
    alt: "Boutique living room",
    tone: "dark" as const,
    title: "Crafting interiors with heart & detail.",
    description: "Luxurious interior design that transforms spaces into personal sanctuaries. Every element chosen for comfort, elegance, and lasting value.",
    service: "Interior Design",
  },
  {
    // Use the uploaded construction image in public/
    image: "/hero-construction.png",
    alt: "Construction site with cranes",
    tone: "light" as const,
    title: "Building excellence from vision to reality.",
    description: "Quality construction services that bring your projects to life. Every project is handled with meticulous attention to detail, timely execution, and lasting value.",
    service: "Construction",
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
            {slides[activeIndex]?.service}
          </p>
          <h1 className="font-display text-[clamp(42px,7vw,96px)] font-light italic leading-[0.95] tracking-[0.01em] text-white transition-opacity duration-500">
            {slides[activeIndex]?.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-[15.5px] transition-opacity duration-500">
            {slides[activeIndex]?.description}
          </p>
          <p className="mx-auto mt-4 inline-flex max-w-fit items-center gap-2 rounded-full border border-[#f1d295]/40 bg-[#f1d295]/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#f8e4b7] shadow-[0_0_0_1px_rgba(255,255,255,0.05)] transition-opacity duration-500 sm:text-[13px]">
            <span className="text-white/80">Call us</span>
            <a href="tel:+919369806672" className="font-bold text-white underline decoration-[#f1d295]/70 underline-offset-4">
              +91 9369806672
            </a>
          </p>
          <div className="mx-auto mt-3 flex max-w-3xl flex-col gap-2 text-center text-base font-medium italic text-white/90 transition-opacity duration-500 sm:text-[17px]">
            <p>Best architecture, interior design & construction company.</p>
            <p>One stop solution for your dream space.</p>
          </div>
          {activeIndex === 2 && (
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80 italic sm:text-[15.5px] transition-opacity duration-500">
              <span className="font-semibold">We offer Turnkey Construction</span>
            </p>
          )}
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
