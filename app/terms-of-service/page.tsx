import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { legalPages } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

const page = legalPages.terms;

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    page.description,
  path: "/terms-of-service",
  image: page.image,
});

export default function TermsofServicePage() {
  return <LegalLayout page={page} crumb="Terms of Service" />;
}
