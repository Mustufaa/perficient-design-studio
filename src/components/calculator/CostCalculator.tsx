"use client";

import { useMemo, useState } from "react";
import { RATES } from "@/lib/data/pricing";
import Link from "next/link";

const serviceOptions = [
  { value: "architecture", label: "Architecture Design Only", note: "Plans, 3D Elevations, Structural Drawings" },
  { value: "turnkey", label: "Complete Turnkey Construction", note: "Design + Materials + End-to-End Construction" },
  { value: "interior", label: "Interior Design & Execution", note: "Custom woodwork, furniture, lighting" },
];

const locations = ["Gomti Nagar / Extension", "Hazratganj / Mahanagar", "Aliganj / Indira Nagar", "Other Lucknow Areas"];
const qualityOptions = ["Standard", "Premium", "Luxury"] as const;

export function CostCalculator() {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState<(keyof typeof RATES) | "">("turnkey");
  const [area, setArea] = useState(1200);
  const [location, setLocation] = useState(locations[0]);
  const [tier, setTier] = useState<(typeof qualityOptions)[number]>("Premium");

  const estimate = useMemo(() => {
    const base = serviceType ? RATES[serviceType][tier.toLowerCase() as keyof (typeof RATES)[keyof typeof RATES]] : 0;
    const lower = Math.round(area * base * 0.95);
    const upper = Math.round(area * base * 1.10);
    return { lower, upper, base };
  }, [area, serviceType, tier]);

  const next = () => setStep((current) => Math.min(current + 1, 4));
  const prev = () => setStep((current) => Math.max(current - 1, 1));

  const whastappUrl = `https://wa.me/919369806672?text=${encodeURIComponent(
    `Hi Perficient Design Studio, I want a quote for ${serviceType} in ${location} with ${tier} tier for ${area} sq.ft.`
  )}`;

  return (
    <div className="rounded-[30px] border border-[var(--color-line)] bg-white/70 p-4 shadow-sm sm:p-6">
      <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
        <span>Step {step} of 4</span>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <h3 className="text-2xl">Step 1 — Service type</h3>
          <div className="grid gap-3 md:grid-cols-3">
            {serviceOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  setServiceType(option.value as keyof typeof RATES);
                  next();
                }}
                className={`rounded-2xl border p-4 text-left transition ${
                  serviceType === option.value ? "border-[var(--color-gold)] bg-[var(--color-gold)]/10" : "border-[var(--color-line)]"
                }`}
              >
                <div className="mb-2 font-semibold">{option.label}</div>
                <div className="text-sm text-[var(--color-muted)]">{option.note}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h3 className="text-2xl">Step 2 — Project details</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-medium">
              Total Area (sq.ft)
              <input value={area} onChange={(e) => setArea(Number(e.target.value || 0))} className="mt-2 w-full rounded-xl border border-[var(--color-line)] p-3" />
            </label>
            <label className="text-sm font-medium">
              Project Location
              <select value={location} onChange={(e) => setLocation(e.target.value)} className="mt-2 w-full rounded-xl border border-[var(--color-line)] p-3">
                {locations.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
          </div>
          <div className="flex gap-3">
            <button onClick={prev} className="rounded-full border border-[var(--color-line)] px-4 py-2">Back</button>
            <button onClick={next} className="rounded-full bg-[var(--color-gold)] px-4 py-2 text-white">Continue</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h3 className="text-2xl">Step 3 — Quality tier</h3>
          <div className="grid gap-3 md:grid-cols-3">
            {qualityOptions.map((option) => (
              <button
                key={option}
                onClick={() => { setTier(option); next(); }}
                className={`rounded-2xl border p-4 text-center transition ${
                  tier === option ? "border-[var(--color-gold)] bg-[var(--color-gold)]/10" : "border-[var(--color-line)]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-5">
          <h3 className="text-2xl">Step 4 — Summary + Estimate</h3>
          <div className="rounded-2xl bg-[var(--color-paper)] p-4">
            <div className="text-sm text-[var(--color-muted)]">Your Project Outline</div>
            <div className="mt-2 grid gap-2 text-sm sm:grid-cols-3">
              <div><strong>Service Type:</strong> {serviceType}</div>
              <div><strong>Location:</strong> {location}</div>
              <div><strong>Quality Tier:</strong> {tier}</div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--color-line)] p-4">
            <div className="text-sm text-[var(--color-muted)]">Estimated investment range</div>
            <div className="mt-2 text-3xl font-semibold text-[var(--color-ink)]">₹{estimate.lower.toLocaleString("en-IN")} – ₹{estimate.upper.toLocaleString("en-IN")}</div>
            <p className="mt-3 text-sm text-[var(--color-muted)]">This is a baseline estimate based on prevailing market rates. Final cost depends on specific material selections, site conditions, and approval scope. Book a free consultation for an accurate quote.</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={whastappUrl} target="_blank" rel="noreferrer" className="rounded-full bg-[var(--color-gold)] px-5 py-3 text-center text-sm font-semibold text-white">Get a Detailed Quote on WhatsApp</Link>
            <Link href="/contact" className="rounded-full border border-[var(--color-line)] px-5 py-3 text-center text-sm font-semibold">Book a Site Visit</Link>
          </div>

          <div className="rounded-2xl border border-[var(--color-line)] p-4">
            <h4 className="mb-3 text-lg">Standard Pricing Index</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-[var(--color-muted)]">
                    <th className="pb-2 pr-4">Service Category</th>
                    <th className="pb-2 pr-4">Package Tier</th>
                    <th className="pb-2">Base Rate per sq.ft</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(RATES).flatMap(([service, rateMap]) =>
                    Object.entries(rateMap).map(([tierName, rate]) => (
                      <tr key={`${service}-${tierName}`} className="border-t border-[var(--color-line)]">
                        <td className="py-2 pr-4">{service}</td>
                        <td className="py-2 pr-4">{tierName}</td>
                        <td className="py-2">₹{rate}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
