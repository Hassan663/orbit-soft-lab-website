import type { Metadata } from "next";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://orbitsoftlab.com").replace(/\/$/, "");
export const SITE_NAME = "Orbit Soft Lab";
const DEFAULT_IMAGE = "/images/hero.webp";

type Args = { title: string; description: string; path: string; image?: string; type?: "website" | "article" };

// Per-page metadata with canonical URL, Open Graph and Twitter card.
// (Next replaces a parent's openGraph object entirely, so every page sets its own.)
export function pageMetadata({ title, description, path, image = DEFAULT_IMAGE, type = "website" }: Args): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      siteName: SITE_NAME,
      type,
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title: `${title} | ${SITE_NAME}`, description, images: [image] },
  };
}
