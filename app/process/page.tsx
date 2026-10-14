import type { Metadata } from "next";
import Check from "lucide-react/dist/esm/icons/check";
import Clock from "lucide-react/dist/esm/icons/clock";
import Wrench from "lucide-react/dist/esm/icons/wrench";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { StepCircle } from "@/components/Process";
import CTA from "@/components/CTA";
import { contentIcons } from "@/components/icons";
import { pageHeroes, processSteps, processWhy } from "@/data/site";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import Reveal from "@/components/motion/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Process",
  description:
    "Discover, strategize, design, develop, launch: how Orbit Soft Lab takes products from first idea to final launch.",
  path: "/process",
  image: "/images/page-process.webp",
});

export default function ProcessPage() {
  return (
    <PageShell>
      <PageHero {...pageHeroes.process} crumbs={[{ label: "Process" }]} />

      {processSteps.map((s, i) => {
        const reverse = i % 2 === 1;
        return (
          <section key={s.n} className={`relative overflow-hidden py-16 sm:py-24 ${reverse ? "bg-ink-deep/60" : ""}`}>
            {!reverse && <div className="glow -left-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2" />}
            <div className="container-x relative grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
              <Reveal className={`flex flex-col items-center text-center lg:items-start lg:text-left ${reverse ? "lg:order-2" : ""}`}>
                <StepCircle n={s.n} />
                <p className="eyebrow mt-8">Step {s.n}</p>
                <h2 className="mt-3 font-heading text-[30px] font-semibold uppercase sm:text-[38px]">{s.title}</h2>
                <p className="mt-4 max-w-[440px] text-[16px] leading-7 text-body sm:text-[17px]">{s.text}</p>
              </Reveal>

              <Reveal delay={0.15} className={`card p-7 sm:p-10 ${reverse ? "lg:order-1" : ""}`}>
                <p className="text-[16px] leading-7 text-white/90 sm:text-[17px]">{s.details}</p>

                <h3 className="mt-8 font-heading text-[15px] font-semibold uppercase tracking-wide">Deliverables</h3>
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

                <div className="mt-8 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-[auto_1fr] sm:gap-10">
                  <div>
                    <p className="flex items-center gap-2 text-[12px] uppercase tracking-wide text-lime">
                      <Clock size={15} /> Duration
                    </p>
                    <p className="mt-2 font-heading text-[18px] font-semibold">{s.duration}</p>
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-[12px] uppercase tracking-wide text-lime">
                      <Wrench size={15} /> Tools
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {s.tools.map((t) => (
                        <span key={t} className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-[12px] text-white/80">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="glow left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2" />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Why It Works"
            title={
              <>
                Predictable process. Better <span className="text-lime">products.</span>
              </>
            }
          />
          <Stagger className="mt-16 grid gap-8 md:grid-cols-3">
            {processWhy.map((w) => {
              const Icon = contentIcons[w.icon as keyof typeof contentIcons];
              return (
                <StaggerItem key={w.title} className="card group flex flex-col items-center px-8 py-10 text-center transition duration-300 hover:-translate-y-1.5 hover:border-lime/60 hover:shadow-lime">
                  <span className="flip-icon flex h-16 w-16 items-center justify-center rounded-2xl bg-lime text-ink">
                    <Icon size={32} />
                  </span>
                  <h3 className="mt-8 font-heading text-[20px] font-semibold">{w.title}</h3>
                  <p className="mt-3 text-[14px] leading-6 text-body">{w.text}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
