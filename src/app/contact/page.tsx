"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email(),
  projectType: z.string(),
  message: z.string().min(5),
});

export default function ContactPage() {
  const { register, handleSubmit } = useForm({ resolver: zodResolver(contactSchema) });

  const onSubmit = (values: z.infer<typeof contactSchema>) => {
    console.log("Contact submission", values);
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="section-eyebrow">Contact</p>
        <h1 className="section-title-line mt-3 text-5xl">Let’s shape your next space</h1>
      </div>
      <section className="grid gap-6 lg:grid-cols-[1fr_0.82fr]">
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/10 p-6 shadow-[0_12px_40px_rgba(10,10,10,0.05)]">
          <div className="grid gap-4">
            <input placeholder="Name" {...register("name")} className="rounded-xl border border-[var(--color-gold)]/40 bg-white/90 p-3" />
            <input placeholder="Phone" {...register("phone")} className="rounded-xl border border-[var(--color-gold)]/40 bg-white/90 p-3" />
            <input placeholder="Email" type="email" {...register("email")} className="rounded-xl border border-[var(--color-gold)]/40 bg-white/90 p-3" />
            <select {...register("projectType")} className="rounded-xl border border-[var(--color-gold)]/40 bg-white/90 p-3">
              <option>Residential</option>
              <option>Commercial</option>
              <option>Interior</option>
              <option>Landscape</option>
            </select>
            <textarea placeholder="Message" {...register("message")} className="min-h-36 rounded-xl border border-[var(--color-gold)]/40 bg-white/90 p-3" />
            <button type="submit" className="rounded-full bg-[var(--color-gold)] px-4 py-3 font-semibold text-white transition hover:bg-[#8f6d43]">Submit</button>
          </div>
        </form>

        <aside className="rounded-3xl border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/10 p-6 shadow-[0_12px_40px_rgba(10,10,10,0.05)]">
          <div className="mb-5 overflow-hidden rounded-2xl border border-[var(--color-line)]">
            <iframe
              title="Perficient Design Studio location"
              src="https://www.google.com/maps?q=Lucknow%20Uttar%20Pradesh&z=12&output=embed"
              className="h-[240px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-3 text-sm text-[var(--color-ink)]">
            <a href="tel:+919369806672" className="block rounded-xl border border-[var(--color-line)] bg-white/70 px-3 py-3 transition hover:border-[var(--color-gold)]">
              Phone: +91 93698 06672
            </a>
            <a href="mailto:perficientdesignstidios@gmail.com" className="block rounded-xl border border-[var(--color-line)] bg-white/70 px-3 py-3 transition hover:border-[var(--color-gold)]">
              Email: perficientdesignstidios@gmail.com
            </a>
            <div className="rounded-xl border border-[var(--color-line)] bg-white/70 px-3 py-3">
              Office: Lucknow, Uttar Pradesh
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
