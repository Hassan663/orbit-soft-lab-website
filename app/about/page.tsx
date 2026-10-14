import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { StatsRow } from "@/components/About";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import { contentIcons } from "@/components/icons";
import { aboutStory, milestones, missionVision, pageHeroes, values } from "@/data/site";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import ClipReveal from "@/components/motion/ClipReveal";
import { blurProps } from "@/lib/blur";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Meet Orbit Soft Lab: a digital product studio of designers, engineers and strategists helping ambitious companies build what comes next.",
  path: "/about",
  image: "/images/page-about.webp",
});

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero {...pageHeroes.about} crumbs={[{ label: "About" }]} />

      {/* story */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="container-x grid items-center gap-16 lg:grid-cols-[1fr_528px] lg:gap-20">
          <div>
            <p className="eyebrow">{aboutStory.eyebrow}</p>
            <h2 className="mt-5 font-heading text-[30px] font-semibold uppercase leading-[1.2] sm:text-[36px] lg:text-[40px]">
              {aboutStory.title} <span className="text-lime">{aboutStory.highlight}</span>
            </h2>
            <div className="mt-8 space-y-5 text-[17px] leading-7 text-body sm:text-[18px]">
              {aboutStory.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <StatsRow className="mt-12" />
          </div>
          <div className="relative mx-auto grid w-full max-w-[528px] grid-cols-2 gap-5">
            {aboutStory.images.map((src, i) => (
              <ClipReveal
                key={src}
                delay={i * 0.12}
                className={`relative overflow-hidden rounded-[30px] ${i === 0 ? "col-span-2 h-[260px] sm:h-[300px]" : "h-[200px]"}`}
              >
                <Image
                  src={src}
                  alt="Inside the Orbit Soft Lab studio"
                  fill
                  sizes={i === 0 ? "(min-width: 568px) 528px, calc(100vw - 40px)" : "(min-width: 568px) 254px, calc(50vw - 30px)"}
                  className="object-cover brightness-[.8]" {...blurProps(src)} />
              </ClipReveal>
            ))}
          </div>
        </div>
      </section>

      {/* mission & vision */}
      <section className="relative overflow-hidden pb-24 sm:pb-32">
        <div className="glow left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2" />
        <Stagger className="container-x relative grid gap-8 md:grid-cols-2">
          {missionVision.map((m) => {
            const Icon = contentIcons[m.icon as keyof typeof contentIcons];
            return (
              <StaggerItem key={m.title} className="card group p-8 transition duration-300 hover:-translate-y-1.5 hover:border-lime/60 hover:shadow-lime sm:p-10">
                <span className="flip-icon flex h-16 w-16 items-center justify-center rounded-2xl bg-lime text-ink">
                  <Icon size={32} />
                </span>
                <h3 className="mt-8 font-heading text-[24px] font-semibold uppercase">{m.title}</h3>
                <p className="mt-4 text-[16px] leading-7 text-body">{m.text}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* values */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Values"
            title={
              <>
                What we <span className="text-lime">stand for</span>
              </>
            }
            text="The principles that shape how we work with clients and with each other."
          />
          <Stagger className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = contentIcons[v.icon as keyof typeof contentIcons];
              return (
                <StaggerItem key={v.title} className="card group flex flex-col items-center px-8 py-9 text-center transition duration-300 hover:-translate-y-1.5 hover:border-lime/60 hover:shadow-lime">
                  <span className="flip-icon flex h-16 w-16 items-center justify-center rounded-2xl bg-lime/15 text-lime">
                    <Icon size={30} />
                  </span>
                  <h3 className="mt-8 font-heading text-[18px] font-semibold">{v.title}</h3>
                  <p className="mt-3 text-[14px] leading-5 text-body">{v.text}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <Team />

      {/* timeline */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="glow left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2" />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Milestones"
            title={
              <>
                Our journey so <span className="text-lime">far</span>
              </>
            }
          />
          <Stagger as="ol" className="relative mx-auto mt-16 max-w-[900px]">
            <span className="absolute bottom-0 left-[19px] top-0 w-px bg-gradient-to-b from-lime via-lime/40 to-transparent md:left-1/2" />
            {milestones.map((m, i) => (
              <StaggerItem as="li"
                key={m.year}
                className={`relative mb-10 pl-14 last:mb-0 md:w-1/2 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-14 md:text-right" : "md:ml-auto md:pl-14"
                }`}
              >
                <span
                  className={`absolute left-3 top-6 h-4 w-4 rounded-full bg-lime shadow-lime ${
                    i % 2 === 0 ? "md:left-auto md:-right-2" : "md:-left-2"
                  }`}
                />
                <div className="card rounded-[18px] p-6 transition hover:border-lime/60">
                  <span className="font-heading text-[28px] font-semibold text-lime">{m.year}</span>
                  <h3 className="mt-1 font-heading text-[18px] font-semibold">{m.title}</h3>
                  <p className="mt-2 text-[14px] leading-6 text-body">{m.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
