"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2),
  brandName: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email(),
  projectType: z.string(),
  message: z.string().min(5),
});

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm({ resolver: zodResolver(contactSchema) });
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    setFeedback(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setFeedback({
          type: "error",
          message: data.message ?? "Something went wrong. Please try again.",
        });
        return;
      }

      reset();
      setFeedback({
        type: "success",
        message: "Thank you. Your message has been submitted successfully and our team will reach out shortly.",
      });
    } catch {
      setFeedback({
        type: "error",
        message: "Unable to send your message right now. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      {feedback?.type === "success" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="mx-4 max-w-2xl rounded-2xl bg-white p-8 text-center shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold">Thank you</h2>
            <p className="mb-6 text-sm text-[var(--color-ink)]">{feedback.message}</p>
            <div className="flex justify-center">
              <button
                onClick={() => setFeedback(null)}
                className="rounded-full bg-[var(--color-gold)] px-5 py-2 font-semibold text-white transition hover:opacity-90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="mb-10">
        <p className="section-eyebrow">Contact</p>
        <h1 className="section-title-line mt-3 text-5xl">Let’s shape your next space</h1>
      </div>
      <section className="grid gap-6 lg:grid-cols-[1fr_0.82fr]">
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/10 p-6 shadow-[0_12px_40px_rgba(10,10,10,0.05)]">
          {feedback && (
            <div
              aria-live="polite"
              className={`mb-4 rounded-2xl border px-4 py-3 text-sm font-medium ${
                feedback.type === "success"
                  ? "border-emerald-700/20 bg-emerald-50 text-emerald-900"
                  : "border-rose-700/20 bg-rose-50 text-rose-900"
              }`}
            >
              {feedback.message}
            </div>
          )}

          <div className="grid gap-4">
            <input placeholder="Name" {...register("name")} className="rounded-xl border border-[var(--color-gold)]/40 bg-white/90 p-3" />
            <input placeholder="Phone" {...register("phone")} className="rounded-xl border border-[var(--color-gold)]/40 bg-white/90 p-3" />
            <input placeholder="Brand / Company Name" {...register("brandName")} className="rounded-xl border border-[var(--color-gold)]/40 bg-white/90 p-3" />
            <input placeholder="Email" type="email" {...register("email")} className="rounded-xl border border-[var(--color-gold)]/40 bg-white/90 p-3" />
            <select {...register("projectType")} className="rounded-xl border border-[var(--color-gold)]/40 bg-white/90 p-3">
              <option>Residential</option>
              <option>Commercial</option>
              <option>Interior</option>
              <option>Landscape</option>
              <option>Construction</option>
              <option>Turnkey Construction</option>
            </select>
            <textarea placeholder="Message" {...register("message")} className="min-h-36 rounded-xl border border-[var(--color-gold)]/40 bg-white/90 p-3" />
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-[var(--color-gold)] px-4 py-3 font-semibold text-white transition hover:bg-[#8f6d43] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
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
              Phone: +91 9369806672
            </a>
            <a href="tel:+919919001159" className="block rounded-xl border border-[var(--color-line)] bg-white/70 px-3 py-3 transition hover:border-[var(--color-gold)]">
              Phone: +91 9919001159
            </a>
            <a href="mailto:perficientdesignstudios@gmail.com" className="block rounded-xl border border-[var(--color-line)] bg-white/70 px-3 py-3 transition hover:border-[var(--color-gold)]">
              Email: perficientdesignstudios@gmail.com
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=102%2C+Vijaykhand%2C+Gomti+Nagar%2C+Lucknow" target="_blank" rel="noreferrer" className="block rounded-xl border border-[var(--color-line)] bg-white/70 px-3 py-3 transition hover:border-[var(--color-gold)]">
              Office: 102, Vijaykhand, Gomti Nagar, Lucknow, Uttar Pradesh
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
}
