import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import WorkGrid from "@/components/WorkGrid";
import ProjectCard from "@/components/ProjectCard";
import CTA from "@/components/CTA";
import { pageHeroes, projects } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Work",
  description:
    "Case studies from Orbit Soft Lab: web apps, mobile apps, e-commerce and AI powered SaaS products.",
  path: "/work",
  image: "/images/page-work.webp",
});

export default function WorkPage() {
  return (
    <PageShell>
      <PageHero {...pageHeroes.work} crumbs={[{ label: "Work" }]} />
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="glow left-1/2 top-1/2 h-[376px] w-[376px] -translate-x-1/2 -translate-y-1/2" />
        <div className="container-x relative">
          <WorkGrid items={projects.map((p) => ({ slug: p.slug, filter: p.filter, card: <ProjectCard project={p} /> }))} />
        </div>
      </section>
      <CTA />
    </PageShell>
  );
}
