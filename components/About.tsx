import Image from "next/image";
import CalendarDays from "lucide-react/dist/esm/icons/calendar-days";
import Plus from "lucide-react/dist/esm/icons/plus";
import Users from "lucide-react/dist/esm/icons/users";
import ClipReveal from "./motion/ClipReveal";
import Counter from "./motion/Counter";
import PopIn from "./motion/PopIn";
import Reveal from "./motion/Reveal";
import Stagger from "./motion/Stagger";
import StaggerItem from "./motion/StaggerItem";
import TextReveal from "./motion/TextReveal";
import { stats } from "@/data/site";
import { blurProps } from "@/lib/blur";

const icons = { calendar: CalendarDays, plus: Plus, users: Users };

export function StatsRow({ className = "" }: { className?: string }) {
  return (
    <Stagger className={`grid gap-3 sm:grid-cols-3 ${className}`}>
      {stats.map((s) => {
        const Icon = icons[s.icon as keyof typeof icons];
        return (
          <StaggerItem key={s.label}>
            <div className="card group flex h-full items-center gap-4 rounded-[14px] px-4 py-3 transition duration-300 hover:-translate-y-1 hover:border-lime/60 hover:shadow-lime">
              <span className="flip-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime transition-colors duration-300 group-hover:bg-lime group-hover:text-ink">
                <Icon size={22} />
              </span>
              <span className="h-12 w-px bg-white/10" />
              <div className="text-center">
                <div className="font-heading text-[22px] font-bold text-lime">
                  <Counter value={s.value} />
                </div>
                <div className="text-[11px] text-body">{s.label}</div>
              </div>
            </div>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}

export default function About() {
  return (
    <section id="about" className="cv-auto [contain-intrinsic-size:auto_900px] relative overflow-hidden py-24 sm:py-36">
      <div className="container-x grid items-center gap-16 lg:grid-cols-[528px_1fr] lg:gap-20">
        {/* image collage */}
        <div className="relative mx-auto w-full max-w-[528px]">
          <div className="grid grid-cols-2 gap-5">
            <div className="mt-20">
              <ClipReveal className="relative h-[420px] overflow-hidden rounded-[30px] sm:h-[482px]">
                <Image src="/images/about-1.webp" alt="Orbit Soft Lab team working together in the office" fill quality={60} sizes="(min-width: 568px) 254px, calc(50vw - 30px)" className="object-cover" {...blurProps("/images/about-1.webp")} />
              </ClipReveal>
            </div>
            <div className="flex flex-col gap-5">
              <ClipReveal delay={0.12} className="relative h-[230px] overflow-hidden rounded-[30px] sm:h-[270px]">
                <Image src="/images/about-2.webp" alt="Developer working at multiple screens" fill quality={60} sizes="(min-width: 568px) 254px, calc(50vw - 30px)" className="object-cover" {...blurProps("/images/about-2.webp")} />
              </ClipReveal>
              <ClipReveal delay={0.24} className="relative h-[230px] overflow-hidden rounded-[30px] sm:h-[270px]">
                <Image src="/images/about-3.webp" alt="Two colleagues reviewing work on a laptop" fill quality={60} sizes="(min-width: 568px) 254px, calc(50vw - 30px)" className="object-cover" {...blurProps("/images/about-3.webp")} />
              </ClipReveal>
            </div>
          </div>
          {/* lime disc */}
          <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2">
            <PopIn delay={0.35} className="flex h-[168px] w-[168px] items-center justify-center rounded-full bg-ink-deep">
              <div className="h-[110px] w-[110px] animate-float rounded-full bg-lime shadow-lime" />
            </PopIn>
          </div>
        </div>

        {/* copy */}
        <div>
          <Reveal>
            <p className="eyebrow">About Orbit Soft Lab</p>
          </Reveal>
          <TextReveal
            as="h2"
            delay={0.1}
            className="mt-5 font-heading text-[32px] font-semibold uppercase leading-[1.2] sm:text-[40px] lg:text-[44px]"
          >
            We don&apos;t just build software. We build what comes <span className="text-lime">next.</span>
          </TextReveal>
          <Reveal delay={0.2} className="mt-8 space-y-5 text-[17px] leading-7 text-body sm:text-[18px]">
            <p>Orbit Soft Lab is a digital product studio focused on turning ambitious ideas into meaningful digital experiences.</p>
            <p>
              From strategy and UX/UI design to development and launch, we bring everything together under one roof so ideas
              move faster from concept to reality.
            </p>
          </Reveal>

          <StatsRow className="mt-12" />
        </div>
      </div>
    </section>
  );
}
