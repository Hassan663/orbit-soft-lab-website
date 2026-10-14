import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Check from "lucide-react/dist/esm/icons/check";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Accordion from "@/components/Accordion";
import CTA from "@/components/CTA";
import { serviceIcons } from "@/components/icons";
import { projects, services } from "@/data/site";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import { blurProps } from "@/lib/blur";
import { pageMetadata } from "@/lib/seo";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return pageMetadata({ title: service.title, description: service.text, path: `/services/${service.slug}`, image: service.image });
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
  const related = projects.filter((p) => service.relatedProjects.includes(p.slug));
  // split the title so the last word gets the lime highlight
  const words = service.title.split(" ");
  const highlight = words.pop() ?? "";

  return (
    <PageShell>
      <PageHero
        eyebrow="Service"
        title={words.join(" ")}
        highlight={highlight}
        text={service.text}
        image={service.image}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary">
            Start Your Project <ArrowRight size={22} />
          </Link>
          <Link href="/work" className="btn-outline">
            Explore Our Work <ArrowRight size={22} />
          </Link>
        </div>
      </PageHero>

      {/* overview */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative h-[300px] rounded-[30px] rounded-tr-[110px] border border-lime/40 sm:h-[420px] overflow-hidden">
              <Image src={service.image} alt={service.title} fill sizes="(min-width: 1292px) 586px, (min-width: 1024px) calc(50vw - 72px), calc(100vw - 40px)" className="object-cover" {...blurProps(service.image)} />
            </div>
            <span className="absolute -bottom-6 left-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-lime text-ink shadow-lime">
              <Icon size={38} strokeWidth={1.75} />
            </span>
          </div>
          <div>
            <p className="eyebrow">Overview</p>
            <h2 className="mt-4 font-heading text-[28px] font-semibold uppercase leading-[1.2] sm:text-[34px]">
              How we approach <span className="text-lime">{service.title}</span>
            </h2>
            <div className="mt-6 space-y-5 text-[16px] leading-7 text-body sm:text-[17px]">
              {service.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-[14px] leading-6 text-body">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-2">
              {service.tech.map((t) => (
                <span key={t} className="rounded-md border border-white/10 bg-white/5 px-3.5 py-2 text-[12px] text-white/80">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* key features */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="glow left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2" />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Key Features"
            title={
              <>
                What you <span className="text-lime">get</span>
              </>
            }
          />
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((f, i) => (
              <StaggerItem key={f.title} className="card group p-8 transition duration-300 hover:-translate-y-1.5 hover:border-lime/60 hover:shadow-lime">
                <span className="font-heading text-[14px] font-semibold text-lime">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-heading text-[19px] font-semibold">{f.title}</h3>
                <p className="mt-3 text-[14px] leading-6 text-body">{f.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* process */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Process"
            title={
              <>
                How we <span className="text-lime">deliver</span> it
              </>
            }
          />
          <Stagger as="ol" className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <StaggerItem as="li" key={p.title} className="relative">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-lime bg-ink-card font-heading text-[20px] font-semibold text-lime">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < service.process.length - 1 && (
                    <span className="hidden h-px flex-1 bg-gradient-to-r from-lime/60 to-transparent lg:block" />
                  )}
                </div>
                <h3 className="mt-5 font-heading text-[18px] font-semibold">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-body">{p.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* related projects */}
      {related.length > 0 && (
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="glow left-1/2 top-1/2 h-[376px] w-[376px] -translate-x-1/2 -translate-y-1/2" />
          <div className="container-x relative">
            <SectionHeading
              eyebrow="Related Work"
              title={
                <>
                  Projects using this <span className="text-lime">service</span>
                </>
              }
            />
            <Stagger className="mt-16 grid gap-8 lg:grid-cols-2">
              {related.map((p) => (
                <StaggerItem key={p.slug}>
                  <ProjectCard project={p} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* faq */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="container-x max-w-[900px]">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Common <span className="text-lime">questions</span>
              </>
            }
          />
          <Accordion items={service.faqs} className="mt-14" />
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
