import Image from "next/image";
import Link from "next/link";
import { Globe2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const services = [
  "Architecture Design",
  "Interior Design",
  "Construction Services",
  "Landscape Design",
];

const explore = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Calculator", href: "/calculator" },
  { label: "LDA Approval", href: "/lda-approval" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-gold)] text-[var(--color-ink)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        {/* TODO: Replace placeholder phone, email, WhatsApp, and office address before launch. */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image src="/logo.png" alt="Perficient Design Studio logo" width={72} height={72} className="rounded-full bg-white p-2" />
          </div>
          <p className="mb-4 max-w-md text-sm text-[var(--color-ink)]/80">Designing Spaces with Precision & Purpose</p>
          <div className="flex gap-3 text-[var(--color-ink)]/80">
            <a href="#" aria-label="Instagram" className="rounded-full border border-[var(--color-ink)]/20 bg-white/80 p-2"><Globe2 className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="rounded-full border border-[var(--color-ink)]/20 bg-white/80 p-2"><Globe2 className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-[var(--color-ink)]/20 bg-white/80 p-2"><Globe2 className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)]/70">Services</h3>
          <ul className="space-y-2 text-sm text-[var(--color-ink)]/80">
            {services.map((item) => (<li key={item}>{item}</li>))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)]/70">Explore</h3>
          <ul className="space-y-2 text-sm text-[var(--color-ink)]/80">
            {explore.map((item) => (<li key={item.href}><Link href={item.href}>{item.label}</Link></li>))}
          </ul>
          <div className="mt-6 space-y-2 text-sm text-[var(--color-ink)]/80">
            <a href="tel:+919369806672" className="flex items-center gap-2 transition hover:text-[var(--color-gold)]">
              <Phone className="h-4 w-4" /> +91 93698 06672
            </a>
            <a href="mailto:perficientdesignstidios@gmail.com" className="flex items-center gap-2 transition hover:text-[var(--color-gold)]">
              <Mail className="h-4 w-4" /> perficientdesignstidios@gmail.com
            </a>
            <a href="https://wa.me/919369806672" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-[var(--color-gold)]">
              <MessageCircle className="h-4 w-4" /> +91 93698 06672
            </a>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Lucknow, Uttar Pradesh</p>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-ink)]/15 text-center text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink)]/70">
        <p className="py-3">ARCHITECTURE / CONSTRUCTION / INTERIOR / LANDSCAPING</p>
      </div>
      <div className="px-4 pb-6 text-center text-sm text-[var(--color-ink)]/70">
        © {new Date().getFullYear()} Perficient Design Studio
      </div>
    </footer>
  );
}
