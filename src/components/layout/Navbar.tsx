"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, MessageCircleMore, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/calculator", label: "Calculator" },
  { href: "/lda-approval", label: "LDA Approval" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-[var(--color-paper)]/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Perficient Design Studio logo" width={56} height={56} className="rounded-full bg-white/90 p-1" />
        </Link>

        <div className="flex justify-center">
          <span className="max-w-[120px] whitespace-nowrap text-center font-display text-[9px] uppercase tracking-[0.18em] text-[var(--color-ink)]/75 sm:max-w-[180px] sm:text-[11px] md:max-w-[260px] md:text-xs lg:max-w-none lg:text-[0.74rem] xl:text-base">
            Perficient Design Studio
          </span>
        </div>

        <div className="hidden items-center justify-end gap-6 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-[var(--color-ink)]/80 transition hover:text-[var(--color-gold)]">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-full bg-[var(--color-gold)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#8f6d43]">
            Book a Consultation
          </Link>
          <Link href="https://wa.me/919369806672?text=Hi%20Perficient%20Design%20Studio%2C%20I%27d%20like%20to%20discuss%20a%20project" target="_blank" rel="noreferrer" className="rounded-full border border-[var(--color-line)] p-2.5 text-[var(--color-ink)] transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]">
            <MessageCircleMore className="h-4 w-4" />
          </Link>
        </div>

        <button className="justify-self-end lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div
          style={{ backgroundColor: "var(--color-gold)" }}
          className="border-t border-[var(--color-gold)] px-4 py-4 text-[var(--color-ink)] lg:hidden"
        >
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-sm font-medium text-[var(--color-ink)]/85 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
