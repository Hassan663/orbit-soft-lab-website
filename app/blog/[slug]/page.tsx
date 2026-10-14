import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Calendar from "lucide-react/dist/esm/icons/calendar";
import Clock from "lucide-react/dist/esm/icons/clock";
import User from "lucide-react/dist/esm/icons/user";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import PostCard from "@/components/PostCard";
import SectionHeading from "@/components/SectionHeading";
import { posts, type PostBlock } from "@/data/site";
import { formatDate } from "@/lib/format";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import { blurProps } from "@/lib/blur";
import { pageMetadata } from "@/lib/seo";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return pageMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}`, image: post.cover, type: "article" });
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "ul":
      return (
        <ul>
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      );
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    default:
      return <p>{block.text}</p>;
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const sameCategory = posts.filter((p) => p.slug !== post.slug && p.category === post.category);
  const related = [...sameCategory, ...posts.filter((p) => p.slug !== post.slug && p.category !== post.category)].slice(0, 3);

  return (
    <PageShell>
      {/* article hero: blog titles are full sentences, so this uses the PageHero layout without a split highlight */}
      <section className="relative overflow-hidden bg-ink-deep pb-16 pt-40 sm:pb-20 sm:pt-52">
        <Image src={post.cover} alt="" fill priority fetchPriority="high" sizes="50vw" className="object-cover opacity-40 blur-[2px]" />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "linear-gradient(74deg, rgb(11,11,11) 30%, rgba(11,11,11,0.6) 75%, rgba(11,11,11,0.4) 100%)" }}
        />
        <div className="glow -left-32 top-24 h-[470px] w-[420px]" />
        <div className="glow right-0 top-0 h-[520px] w-[520px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
        <div className="container-x relative">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
          <div className="mt-8 max-w-[860px]">
            <div className="flex items-center gap-3">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-lime sm:w-20" />
              <p className="eyebrow">{post.category}</p>
            </div>
            <h1 className="mt-5 font-heading text-[30px] font-semibold uppercase leading-[1.2] sm:text-[40px] lg:text-[46px]">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-body">
              <span className="flex items-center gap-2">
                <User size={15} className="text-lime" /> {post.author.name}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={15} className="text-lime" /> <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <span className="flex items-center gap-2">
                <Clock size={15} className="text-lime" /> {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="container-x">
          <div className="relative mx-auto h-[220px] max-w-[1000px] rounded-[30px] border border-lime/30 sm:h-[420px] overflow-hidden">
            <Image src={post.cover} alt={post.title} fill sizes="(min-width: 1040px) 1000px, calc(100vw - 40px)" className="object-cover" {...blurProps(post.cover)} />
          </div>
          <article className="prose-dark mx-auto mt-14 max-w-[740px]">
            <p className="text-[19px] text-white/90 sm:text-[21px]">{post.excerpt}</p>
            {post.content.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </article>

          <div className="card mx-auto mt-16 flex max-w-[740px] flex-col gap-5 p-7 sm:flex-row sm:items-center">
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-lime/30 to-lime-dark/10 text-lime">
              <User size={36} strokeWidth={1.5} />
            </span>
            <div>
              <p className="text-[12px] uppercase tracking-wide text-lime">Written by</p>
              <p className="mt-1 font-heading text-[19px] font-semibold">{post.author.name}</p>
              <p className="text-[14px] text-lime/80">{post.author.role}</p>
              <p className="mt-2 text-[14px] leading-6 text-body">{post.author.bio}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden pb-24 sm:pb-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Keep Reading"
            title={
              <>
                Related <span className="text-lime">articles</span>
              </>
            }
          />
          <Stagger className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <StaggerItem key={p.slug}>
                <PostCard post={p} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </PageShell>
  );
}
