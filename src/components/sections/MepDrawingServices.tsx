'use client';

import { useEffect, useRef, useState } from "react";

const drawings = [
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

export function MepDrawingServices() {
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
      className={`mx-auto max-w-[1100px] px-4 py-10 transition-all duration-700 ease-out sm:px-6 lg:px-8 lg:py-14 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      aria-labelledby="mep-drawings-title"
    >
      <div className="rounded-[32px] border border-[var(--color-line)] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:p-8 lg:p-10">
        <div className="text-center">
          <p className="section-eyebrow">MEP Drawing Services</p>
          <h2 id="mep-drawings-title" className="mt-3 text-3xl font-semibold leading-tight text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
            9 Types of MEP Drawings Used in Construction Projects
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            Precision-driven documentation that supports coordination, installation, and long-term operation across modern construction workflows.
          </p>
        </div>

        <ol className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-2 xl:grid-cols-3">
          {drawings.map((drawing, index) => (
            <li
              key={drawing}
              className="rounded-[24px] border border-[var(--color-line)] bg-[var(--color-paper)] p-5 shadow-[0_10px_24px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)]/10 text-sm font-semibold text-[var(--color-gold)]">
                  {index + 1}
                </span>
                <p className="text-base font-medium leading-7 text-[var(--color-ink)]">{drawing}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
