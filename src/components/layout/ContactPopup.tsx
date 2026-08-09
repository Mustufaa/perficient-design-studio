"use client";

import { useState, type FormEvent } from "react";
import { X } from "lucide-react";

type FeedbackState = { type: "success" | "error"; message: string } | null;

type FormState = {
  name: string;
  addressAndLocation: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  addressAndLocation: "",
  phone: "",
  email: "",
  projectType: "Construction",
  message: "",
};

export function ContactPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackState>(null);
  const [form, setForm] = useState<FormState>(initialForm);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          projectType: "General Inquiry",
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setFeedback({
          type: "error",
          message: data.message ?? "We could not send your request right now. Please try again.",
        });
        return;
      }

      setForm(initialForm);
      setFeedback({
        type: "success",
        message: "Thank you! We have received your enquiry and will reach out shortly.",
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

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 py-6">
      <div className="w-full max-w-lg sm:max-w-2xl rounded-3xl border border-[var(--color-gold)]/40 bg-[var(--color-paper)] p-6 shadow-[0_12px_40px_rgba(10,10,10,0.05)] max-h-[90vh] overflow-y-auto">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <p className="section-eyebrow">Let’s talk</p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--color-ink)] sm:text-3xl">
              Tell us about your requirement
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
              Share your idea and we will get back to you with the right plan.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-full border border-[var(--color-line)] p-2 text-[var(--color-muted)] transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
            aria-label="Close contact form"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

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

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            required
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Name"
            className="rounded-xl border border-[var(--color-gold)]/40 bg-white/90 p-3 outline-none ring-0"
          />
          <input
            required
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="Phone"
            className="rounded-xl border border-[var(--color-gold)]/40 bg-white/90 p-3 outline-none ring-0"
          />
          <input
            required
            value={form.addressAndLocation}
            onChange={(e) => handleChange("addressAndLocation", e.target.value)}
            placeholder="Address & Location"
            className="rounded-xl border border-[var(--color-gold)]/40 bg-white/90 p-3 outline-none ring-0"
          />
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Email"
            className="rounded-xl border border-[var(--color-gold)]/40 bg-white/90 p-3 outline-none ring-0"
          />
          <select
            required
            value={form.projectType}
            onChange={(e) => handleChange("projectType", e.target.value)}
            className="rounded-xl border border-[var(--color-gold)]/40 bg-white/90 p-3 outline-none ring-0"
          >
            <option value="Construction">Construction</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Interior">Interior</option>
            <option value="Landscape">Landscape</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            required
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Message"
            className="min-h-36 rounded-xl border border-[var(--color-gold)]/40 bg-white/90 p-3 outline-none ring-0"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-[var(--color-gold)] px-5 py-3 font-semibold text-white transition hover:bg-[#8f6d43] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
