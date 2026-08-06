"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LOGO_SRC } from "@/lib/brand";

function WhatsAppLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <path d="M12 3.2C6.9 3.2 2.8 7.1 2.8 12c0 1.7.4 3.3 1.2 4.8L3 21l4.3-1.1a8.7 8.7 0 0 0 4.7 1.2c5.1 0 9.2-3.9 9.2-8.8S17.1 3.2 12 3.2Z" fill="currentColor" />
      <path d="M8.8 7.9c-.2-.4-.4-.4-.6-.4h-.4c-.1 0-.3 0-.5.2-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.5 2.7 3.8 3.7 1.9.8 2.3.6 2.7.6.4 0 1.3-.5 1.5-.9.2-.5.2-.9.1-1l-.3-.3c-.2-.2-.5-.4-.9-.6-.4-.2-.8-.3-1.1-.1l-.3.1c-.3.1-.7.5-1 .8-.1.1-.3.1-.4 0-.2-.1-.7-.3-1.4-.8-.5-.4-1-1-1.1-1.2-.1-.2-.1-.4 0-.5l.2-.2c.2-.2.3-.3.4-.5.1-.2.1-.3 0-.4l-.3-.7c-.1-.2-.4-.5-.7-.8-.2-.2-.5-.4-.7-.5-.2-.1-.4-.1-.6 0l-.5.2c-.2.1-.5.5-.6.8-.1.3-.1.7 0 1.1.2.7.9 1.8 2.1 3.2 1.4 1.4 2.8 1.9 3.4 2.1.7.3 1.1.3 1.5.3.4 0 .8-.1 1.1-.2.4-.2.7-.5.8-.9.1-.3.1-.6 0-.8l-.3-.4c-.1-.2-.3-.2-.5-.3Z" fill="#25D366" />
    </svg>
  );
}

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/lda-approval", label: "LDA Approval" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroTone, setHeroTone] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const syncTone = () => {
      const tone = document.documentElement.getAttribute("data-hero-tone");
      if (tone === "light") {
        setHeroTone("light");
      } else {
        setHeroTone("dark");
      }
    };

    syncTone();
    const observer = new MutationObserver(syncTone);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-hero-tone"],
    });

    return () => observer.disconnect();
  }, []);

  const brandToneClass = scrolled
    ? "text-[var(--color-ink)]"
    : heroTone === "dark"
      ? "text-white"
      : "text-[var(--color-ink)]";

  const menuToneClass = scrolled
    ? "text-[var(--color-ink)]"
    : heroTone === "dark"
      ? "text-white"
      : "text-[var(--color-ink)]";

  const navLinkClass = scrolled
    ? "text-[var(--color-ink)]/80 hover:text-[var(--color-gold)]"
    : heroTone === "dark"
      ? "text-white/85 hover:text-[var(--color-gold)]"
      : "text-[var(--color-ink)]/80 hover:text-[var(--color-gold)]";

  const ctaClass = scrolled
    ? "bg-[var(--color-gold)] text-white hover:bg-[#8f6d43]"
    : heroTone === "dark"
      ? "bg-[var(--color-gold)] text-white hover:bg-[#8f6d43]"
      : "bg-[var(--color-gold)] text-white hover:bg-[#8f6d43]";

  const socialClass = scrolled
    ? "border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
    : heroTone === "dark"
      ? "border-white/60 text-white hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
      : "border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isOpen
          ? "bg-[var(--color-gold)]/95 shadow-sm"
          : scrolled
          ? "bg-[var(--color-paper)]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:px-8">
        <Link href="/" className="relative z-10 flex items-center gap-3 self-center pt-4">
          <Image
            src={LOGO_SRC}
            alt="Perficient Design Studio logo"
            width={96}
            height={96}
            unoptimized
            className="h-20 w-auto shrink-0 object-contain sm:h-24 md:h-28"
          />
        </Link>

        <div className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center lg:static lg:left-auto lg:top-auto lg:translate-x-0 lg:translate-y-0 lg:pointer-events-auto">
          <span className={`max-w-[160px] whitespace-nowrap text-center font-display text-[12px] font-semibold uppercase tracking-[0.16em] sm:max-w-[200px] sm:text-sm md:max-w-[260px] md:text-base lg:max-w-none lg:text-lg xl:text-xl ${brandToneClass}`}>
            Perficient Design Studio
          </span>
        </div>

        <div className="hidden items-center justify-end gap-6 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`text-sm font-medium transition ${navLinkClass}`}>
              {link.label}
            </Link>
          ))}
        </div>

        <button className={`z-10 justify-self-end lg:hidden ${menuToneClass}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-gold)]/95 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-sm font-medium text-white transition hover:text-white/90">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
