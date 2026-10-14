import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Check from "lucide-react/dist/esm/icons/check";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ProcessStrip from "@/components/ProcessStrip";
import CTA from "@/components/CTA";
import { serviceIcons } from "@/components/icons";
import { pageHeroes, services } from "@/data/site";
import Reveal from "@/components/motion/Reveal";
import { blurProps } from "@/lib/blur";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Custom software, UI/UX design, mobile apps, websites, AI automation and cybersecurity from Orbit Soft Lab.",
  path: "/services",
  image: "/images/page-services.webp",
});

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero {...pageHeroes.services} crumbs={[{ label: "Services" }]} />

      <section className="relative overflow-hidden pt-24 sm:pt-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                Six disciplines. One <span className="text-lime">team.</span>
              </>
            }
            text="Pick a single service or combine them. Either way, you work with one accountable team from strategy to support."
          />
        </div>
      </section>

      {services.map((s, i) => {
        const Icon = serviceIcons[s.icon as keyof typeof serviceIcons];
        const reverse = i % 2 === 1;
        return (
          <section key={s.slug} id={s.slug} className="relative overflow-hidden py-16 sm:py-24">
            {i % 2 === 0 && <div className="glow -left-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2" />}
            <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal direction={reverse ? "left" : "right"} className={`relative ${reverse ? "lg:order-2" : ""}`}>
                <div className="relative h-[300px] rounded-[30px] rounded-tr-[110px] border border-lime/40 sm:h-[420px] overflow-hidden">
                  <Image src={s.image} alt={s.title} fill sizes="(min-width: 1292px) 586px, (min-width: 1024px) calc(50vw - 72px), calc(100vw - 40px)" className="object-cover" {...blurProps(s.image)} />
                </div>
                <span className="absolute -bottom-6 left-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-lime text-ink shadow-lime">
                  <Icon size={38} strokeWidth={1.75} />
                </span>
              </Reveal>

              <Reveal delay={0.1} direction={reverse ? "right" : "left"} className={reverse ? "lg:order-1" : ""}>
                <p className="eyebrow">{String(i + 1).padStart(2, "0")} / Service</p>
                <h2 className="mt-4 font-heading text-[28px] font-semibold uppercase leading-[1.2] sm:text-[34px]">{s.title}</h2>
                <p className="mt-5 text-[16px] leading-7 text-body sm:text-[17px]">{s.overview[0]}</p>

                <h3 className="mt-8 font-heading text-[16px] font-semibold uppercase tracking-wide">What we deliver</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-[14px] leading-6 text-body">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {s.tech.map((t) => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/5 px-3.5 py-2 text-[12px] text-white/80">
                      {t}
                    </span>
                  ))}
                </div>

                <Link href={`/services/${s.slug}`} className="btn-outline mt-9">
                  Learn More <ArrowRight size={20} />
                </Link>
              </Reveal>
            </div>
          </section>
        );
      })}

      <ProcessStrip />
      <CTA />
    </PageShell>
  );
}
