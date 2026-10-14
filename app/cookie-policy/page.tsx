import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { legalPages } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

const page = legalPages.cookies;

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy",
  description:
    page.description,
  path: "/cookie-policy",
  image: page.image,
});

export default function CookiePolicyPage() {
  return <LegalLayout page={page} crumb="Cookie Policy" />;
}
