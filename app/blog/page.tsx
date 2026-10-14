import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import PostCard from "@/components/PostCard";
import CTA from "@/components/CTA";
import { pageHeroes, posts } from "@/data/site";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Insights on product design, engineering, AI and security from the Orbit Soft Lab team.",
  path: "/blog",
  image: "/images/page-blog.webp",
});

export default function BlogPage() {
  return (
    <PageShell>
      <PageHero {...pageHeroes.blog} crumbs={[{ label: "Blog" }]} />
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="glow left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2" />
        <Stagger className="container-x relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <StaggerItem key={p.slug}>
              <PostCard post={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <CTA />
    </PageShell>
  );
}
