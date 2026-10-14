import type { MetadataRoute } from "next";
import { posts, projects, services } from "@/data/site";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/services",
    "/work",
    "/process",
    "/contact",
    "/careers",
    "/blog",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
  ];
  const now = new Date();
  return [
    ...staticPaths.map((p) => ({ url: `${SITE_URL}${p}`, lastModified: now, priority: p === "" ? 1 : 0.7 })),
    ...services.map((s) => ({ url: `${SITE_URL}/services/${s.slug}`, lastModified: now, priority: 0.6 })),
    ...projects.map((p) => ({ url: `${SITE_URL}/work/${p.slug}`, lastModified: now, priority: 0.6 })),
    ...posts.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: new Date(p.date), priority: 0.5 })),
  ];
}
