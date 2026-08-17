import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ContactPopup } from "@/components/layout/ContactPopup";
import { LOGO_SRC } from "@/lib/brand";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://perficientdesignstudio.com"),

  title:
    "Interior Design, Architecture & Construction in India | Perficient Design Studio",

  description:
    "Perficient Design Studio is an India-based design and construction studio offering interior design, architecture, construction, landscaping, and complete residential and commercial solutions in Lucknow and across India.",

  alternates: {
    canonical: "https://perficientdesignstudio.com/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: [
      { url: LOGO_SRC, type: "image/png", sizes: "any" },
    ],
    apple: LOGO_SRC,
  },

  openGraph: {
    title:
      "Interior Design, Architecture & Construction in India | Perficient Design Studio",
    description:
      "Interior design, architecture, construction and landscaping solutions for residential and commercial projects in Lucknow and across India.",
    url: "https://perficientdesignstudio.com/",
    siteName: "Perficient Design Studio",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Interior Design, Architecture & Construction in India | Perficient Design Studio",
    description:
      "Interior design, architecture, construction and landscaping solutions in Lucknow and across India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-paper)] text-[var(--color-ink)]">
        <Navbar />

        <div className="flex-1">{children}</div>

        <Footer />

        <WhatsAppButton />

        <ContactPopup />
      </body>
    </html>
  );
}