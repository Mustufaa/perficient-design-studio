import Link from "next/link";

function WhatsAppLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="M12 3.2C6.9 3.2 2.8 7.1 2.8 12c0 1.7.4 3.3 1.2 4.8L3 21l4.3-1.1a8.7 8.7 0 0 0 4.7 1.2c5.1 0 9.2-3.9 9.2-8.8S17.1 3.2 12 3.2Z" fill="currentColor" />
      <path d="M8.8 7.9c-.2-.4-.4-.4-.6-.4h-.4c-.1 0-.3 0-.5.2-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.5 2.7 3.8 3.7 1.9.8 2.3.6 2.7.6.4 0 1.3-.5 1.5-.9.2-.5.2-.9.1-1l-.3-.3c-.2-.2-.5-.4-.9-.6-.4-.2-.8-.3-1.1-.1l-.3.1c-.3.1-.7.5-1 .8-.1.1-.3.1-.4 0-.2-.1-.7-.3-1.4-.8-.5-.4-1-1-1.1-1.2-.1-.2-.1-.4 0-.5l.2-.2c.2-.2.3-.3.4-.5.1-.2.1-.3 0-.4l-.3-.7c-.1-.2-.4-.5-.7-.8-.2-.2-.5-.4-.7-.5-.2-.1-.4-.1-.6 0l-.5.2c-.2.1-.5.5-.6.8-.1.3-.1.7 0 1.1.2.7.9 1.8 2.1 3.2 1.4 1.4 2.8 1.9 3.4 2.1.7.3 1.1.3 1.5.3.4 0 .8-.1 1.1-.2.4-.2.7-.5.8-.9.1-.3.1-.6 0-.8l-.3-.4c-.1-.2-.3-.2-.5-.3Z" fill="#25D366" />
    </svg>
  );
}

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/919369806672?text=Hi%20Perficient%20Design%20Studio%2C%20I%27d%20like%20to%20discuss%20a%20project"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:scale-105 hover:px-5"
      aria-label="Chat with Perficient Design Studio on WhatsApp"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
        <WhatsAppLogo />
      </span>
      <span className="hidden sm:inline">Chat with us</span>
    </Link>
  );
}
