import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Briefcase from "lucide-react/dist/esm/icons/briefcase";
import Check from "lucide-react/dist/esm/icons/check";
import MapPin from "lucide-react/dist/esm/icons/map-pin";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { contentIcons } from "@/components/icons";
import { benefits, careersEmail, culture, jobs, pageHeroes } from "@/data/site";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import ClipReveal from "@/components/motion/ClipReveal";
import { blurProps } from "@/lib/blur";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Careers",
  description:
    "Join Orbit Soft Lab. Open roles in engineering, design, AI and delivery across Dubai, Lahore and remote.",
  path: "/careers",
  image: "/images/page-careers.webp",
});

export default function CareersPage() {
  return (
    <PageShell>
      <PageHero {...pageHeroes.careers} crumbs={[{ label: "Careers" }]} />

      {/* open positions */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Open Positions"
            title={
              <>
                Find your next <span className="text-lime">role</span>
              </>
            }
            text={`${jobs.length} open roles. Don't see a fit? Send your CV to ${careersEmail}.`}
          />
          <Stagger as="ul" className="mx-auto mt-16 max-w-[1000px] space-y-4">
            {jobs.map((j) => (
              <StaggerItem as="li"
                key={j.title}
                className="card flex flex-col gap-5 rounded-[18px] p-6 transition hover:border-lime/60 sm:flex-row sm:items-center sm:justify-between sm:p-7"
              >
                <div>
                  <p className="text-[12px] uppercase tracking-wide text-lime">{j.department}</p>
                  <h3 className="mt-1.5 font-heading text-[19px] font-semibold">{j.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-body">
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={15} className="text-lime" /> {j.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={15} className="text-lime" /> {j.location}
                    </span>
                  </div>
                </div>
                <a
                  href={`mailto:${careersEmail}?subject=${encodeURIComponent(`Application: ${j.title}`)}`}
                  className="btn-small shrink-0 self-start px-5 py-2 sm:self-center"
                >
                  Apply Now <ArrowRight size={16} />
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* benefits */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="glow left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2" />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Benefits"
            title={
              <>
                We take care of our <span className="text-lime">people</span>
              </>
            }
          />
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => {
              const Icon = contentIcons[b.icon as keyof typeof contentIcons];
              return (
                <StaggerItem key={b.title} className="card group flex gap-5 p-7 transition duration-300 hover:-translate-y-1.5 hover:border-lime/60 hover:shadow-lime">
                  <span className="flip-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-lime text-ink">
                    <Icon size={26} />
                  </span>
                  <div>
                    <h3 className="font-heading text-[18px] font-semibold">{b.title}</h3>
                    <p className="mt-2 text-[14px] leading-6 text-body">{b.text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* culture */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="grid grid-cols-2 gap-5">
            {culture.images.map((src, i) => (
              <ClipReveal key={src} delay={i * 0.12} className={`relative h-[300px] overflow-hidden rounded-[30px] sm:h-[380px] ${i === 0 ? "mt-14" : ""}`}>
                <Image src={src} alt="The Orbit Soft Lab team at work" fill sizes="(min-width: 1292px) 283px, (min-width: 1024px) calc(25vw - 40px), calc(50vw - 30px)" className="object-cover brightness-[.8]" {...blurProps(src)} />
              </ClipReveal>
            ))}
          </div>
          <div>
            <p className="eyebrow">{culture.eyebrow}</p>
            <h2 className="mt-5 font-heading text-[30px] font-semibold uppercase leading-[1.2] sm:text-[36px] lg:text-[40px]">
              {culture.title} <span className="text-lime">{culture.highlight}</span>
            </h2>
            <div className="mt-8 space-y-5 text-[17px] leading-7 text-body">
              {culture.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {culture.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[14px] leading-6 text-body">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="relative overflow-hidden bg-ink-deep py-28">
        <Image src="/images/cta.webp" alt="" fill sizes="100vw" className="object-cover opacity-80" {...blurProps("/images/cta.webp")} />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/80 to-transparent" />
        <div className="container-x relative max-w-[1292px]">
          <div className="max-w-[760px]">
            <p className="eyebrow">Not seeing the right role?</p>
            <h2 className="mt-5 font-heading text-[30px] font-semibold uppercase leading-tight sm:text-[36px]">
              Let&apos;s <span className="text-lime">talk</span> anyway
            </h2>
            <p className="mt-6 text-[17px] leading-7 text-body sm:text-[18px]">
              We are always happy to meet talented people. Tell us what you do best and how you would like to grow.
            </p>
            <Link href="/contact" className="btn-primary mt-10">
              Get in Touch <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
