import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { LOGO_SRC } from "@/lib/brand";

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
            <Image src={LOGO_SRC} alt="Perficient Design Studio logo" width={120} height={120} className="h-20 w-auto object-contain sm:h-24 md:h-28" style={{ width: 'auto' }} />
          </div>
          <p className="mb-4 max-w-md text-sm text-[var(--color-ink)]/80">Designing Spaces with Precision & Purpose</p>
          <div className="flex gap-3 text-[var(--color-ink)]/80">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-[var(--color-ink)]/20 bg-white/80 p-2">
              <Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/perficient.design?igsh=aHM1NXVqZG1obG9u" target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full border border-[var(--color-ink)]/20 bg-white/80 p-2">
              <Image src="/instagram.png" alt="Instagram" width={20} height={20} className="h-4 w-4" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full border border-[var(--color-ink)]/20 bg-white/80 p-2">
              <Image src="/facebook.png" alt="Facebook" width={20} height={20} className="h-4 w-4" />
            </a>
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
              <Phone className="h-4 w-4" /> +91 9369806672
            </a>
            <a href="tel:+919919001159" className="flex items-center gap-2 transition hover:text-[var(--color-gold)]">
              <Phone className="h-4 w-4" /> +91 9919001159
            </a>
            <a href="mailto:perficientdesignstudios@gmail.com" className="flex items-center gap-2 transition hover:text-[var(--color-gold)]">
              <Mail className="h-4 w-4" /> perficientdesignstudios@gmail.com
            </a>
            <a href="https://wa.me/919369806672" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-[var(--color-gold)]">
              <MessageCircle className="h-4 w-4" /> +91 9369806672
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=102%2C+Vijaykhand%2C+Gomti+Nagar%2C+Lucknow" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-[var(--color-gold)]">
              <MapPin className="h-4 w-4" /> 102, Vijaykhand, Gomti Nagar, Lucknow, Uttar Pradesh 
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-ink)]/15 text-center text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink)]/70">
        <p className="py-3">ARCHITECTURE / CONSTRUCTION / INTERIOR / LANDSCAPING</p>
      </div>
      <div className="px-4 pb-6 text-center text-sm text-[var(--color-ink)]/70">
        <p>© {new Date().getFullYear()} Perficient Design Studio</p>
        <p className="mt-2">
          Design by{' '}
          <a
            href="https://www.linkedin.com/in/mohdmustufa"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-[var(--color-ink)]/40 underline-offset-4 transition hover:text-[var(--color-ink)]"
          >
            Mohd Mustufa
          </a>
        </p>
      </div>
    </footer>
  );
}
