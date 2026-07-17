import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/919369806672?text=Hi%20Perficient%20Design%20Studio%2C%20I%27d%20like%20to%20discuss%20a%20project"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:scale-105 hover:px-5"
      aria-label="Chat with Perficient Design Studio on WhatsApp"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
        <MessageCircleMore className="h-5 w-5" />
      </span>
      <span className="hidden sm:inline">Chat with us</span>
    </Link>
  );
}
