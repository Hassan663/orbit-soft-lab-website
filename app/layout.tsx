import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/motion/ScrollProgress";
import ClientExtras from "@/components/motion/ClientExtras";
import RevealObserver from "@/components/motion/RevealObserver";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

// Self-hosted at build time by next/font: no render-blocking request to Google, and
// size-adjusted fallback fonts are generated automatically so swapping causes no layout shift.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-poppins",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});
// Offline fallback (if next/font cannot reach Google at build time), restore in <head>:
// <link rel="preconnect" href="https://fonts.googleapis.com" />
// <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
// <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;600;700&display=swap" />

const title = "Orbit Soft Lab | We Build Digital Products That Move Business Forward";
const description =
  "Orbit Soft Lab is a digital product studio. Strategy, UX/UI design, development and launch under one roof.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s | Orbit Soft Lab" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/hero.webp", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/hero.webp"] },
};

export const viewport: Viewport = { themeColor: "#131514" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        {/* without JavaScript nothing would trigger the entrances, so show everything */}
        <noscript>
          <style>{`.reveal,.stagger>*,.pop-in{opacity:1!important}.text-reveal .word>span,.draw-line{translate:none!important;scale:none!important}.clip-reveal{clip-path:none!important}.step-arc{stroke-dashoffset:0!important}`}</style>
        </noscript>
        <ScrollProgress />
        {children}
        <RevealObserver />
        <ClientExtras />
      </body>
    </html>
  );
}
