import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { projects } from "@/data/site";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import Counter from "@/components/motion/Counter";
import Reveal from "@/components/motion/Reveal";
import { blurProps } from "@/lib/blur";
import { pageMetadata } from "@/lib/seo";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return pageMetadata({ title: `${project.title} Case Study`, description: project.text, path: `/work/${project.slug}`, image: project.image });
}

export default function CaseStudyPage({ params }: Props) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  const words = project.title.split(" ");
  const highlight = words.pop() ?? "";

  const sections = [
    { label: "Overview", text: project.overview },
    { label: "The Challenge", text: project.challenge },
    { label: "Our Solution", text: project.solution },
    { label: "The Results", text: project.results },
  ];

  const meta = [
    { label: "Client", value: project.client },
    { label: "Category", value: project.filter },
    { label: "Year", value: project.year },
    { label: "Duration", value: project.duration },
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow={project.category}
        title={words.join(" ")}
        highlight={highlight}
        text={project.text}
        image={project.image}
        crumbs={[{ label: "Work", href: "/work" }, { label: project.title }]}
      />

      {/* cover + meta */}
      <section className="relative pb-8">
        <div className="container-x">
          <div className="relative h-[260px] rounded-[30px] border border-lime/30 sm:h-[420px] lg:h-[560px] overflow-hidden">
            <Image src={project.image} alt={`${project.title} cover`} fill sizes="(min-width: 1292px) 1252px, calc(100vw - 40px)" className="object-cover" {...blurProps(project.image)} />
          </div>
          <Stagger as="dl" className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {meta.map((m) => (
              <StaggerItem key={m.label} className="card rounded-[16px] px-5 py-4">
                <dt className="text-[12px] uppercase tracking-wide text-lime">{m.label}</dt>
                <dd className="mt-1 font-heading text-[15px] font-medium">{m.value}</dd>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* story */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="glow -left-40 top-1/3 h-[420px] w-[420px]" />
        <div className="container-x relative space-y-14">
          {sections.map((s, i) => (
            <Reveal key={s.label} className="grid gap-4 border-t border-white/10 pt-10 lg:grid-cols-[320px_1fr] lg:gap-16">
              <div>
                <span className="font-heading text-[14px] font-semibold text-lime">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-2 font-heading text-[26px] font-semibold uppercase sm:text-[30px]">{s.label}</h2>
              </div>
              <p className="text-[17px] leading-8 text-body sm:text-[18px]">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* results stats */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <Stagger className="container-x grid gap-6 sm:grid-cols-3">
          {project.resultStats.map((s) => (
            <StaggerItem key={s.label} className="card flex flex-col items-center px-6 py-10 text-center">
              <span className="font-heading text-[44px] font-bold leading-none text-lime sm:text-[52px]">
                <Counter value={s.value} />
              </span>
              <span className="mt-3 text-[14px] text-body">{s.label}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* gallery */}
      <section className="relative py-16 sm:py-24">
        <div className="container-x">
          <h2 className="font-heading text-[26px] font-semibold uppercase sm:text-[30px]">
            Project <span className="text-lime">gallery</span>
          </h2>
          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2">
            {project.gallery.map((src, i) => (
              <StaggerItem key={src} className="relative h-[240px] rounded-[24px] border border-lime/20 sm:h-[320px] overflow-hidden">
                <Image src={src} alt={`${project.title} screen ${i + 1}`} fill sizes="(min-width: 1292px) 614px, (min-width: 640px) calc(50vw - 44px), calc(100vw - 40px)" className="object-cover" {...blurProps(src)} />
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-12 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="rounded-md border border-white/10 bg-white/5 px-3.5 py-2 text-[12px] text-white/80">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* next project */}
      <section className="relative pb-24">
        <div className="container-x">
          <Link
            href={`/work/${next.slug}`}
            className="card group flex flex-col gap-6 overflow-hidden p-8 transition hover:border-lime/60 sm:flex-row sm:items-center sm:justify-between sm:p-10"
          >
            <div>
              <p className="eyebrow">Next Project</p>
              <p className="mt-3 font-heading text-[26px] font-semibold uppercase sm:text-[34px]">{next.title}</p>
              <p className="mt-1 text-[14px] text-body">{next.category}</p>
            </div>
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-lime text-ink transition group-hover:translate-x-1 group-hover:shadow-lime">
              <ArrowRight size={28} />
            </span>
          </Link>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
