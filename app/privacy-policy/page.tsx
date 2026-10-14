import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { legalPages } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

const page = legalPages.privacy;

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    page.description,
  path: "/privacy-policy",
  image: page.image,
});

export default function PrivacyPolicyPage() {
  return <LegalLayout page={page} crumb="Privacy Policy" />;
}
