import Image from "next/image";
import Star from "lucide-react/dist/esm/icons/star";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";
import { testimonials } from "@/data/site";
import { blurProps } from "@/lib/blur";

export default function Testimonials() {
  return (
    <section id="testimonials" className="cv-auto [contain-intrinsic-size:auto_800px] relative overflow-hidden py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Client success <span className="text-lime">stories</span>
            </>
          }
          text="Hear from the leaders who trust us with their digital future"
        />

        <div className="mt-24 grid gap-14 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => {
            const base = i * 0.12;
            return (
              <div key={t.name} className="group relative transition-transform duration-300 hover:-translate-y-1.5">
                {/* lime arrow tab drops in from above */}
                <div className="absolute left-1/2 -top-[58px] h-[85px] w-[96px] -translate-x-1/2">
                  <Reveal direction="down" delay={base} className="h-full w-full">
                    <div
                      className="h-full w-full bg-lime"
                      style={{ clipPath: "polygon(50% 0, 100% 40%, 75% 40%, 75% 100%, 25% 100%, 25% 40%, 0 40%)" }}
                    />
                  </Reveal>
                </div>

                {/* bubble */}
                <Reveal delay={base + 0.1}>
                  <div className="card relative rounded-[22px] bg-[#101211] px-5 pb-10 pt-12 text-center transition-[border-color,box-shadow] duration-300 group-hover:border-lime/60 group-hover:shadow-lime">
                    <h3 className="font-heading text-[20px] font-semibold">{t.heading}</h3>
                    <div className="mt-3 flex justify-center gap-1 text-[#FFB800]">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} size={18} fill="currentColor" className="twinkle" style={{ animationDelay: `${s * 80}ms` }} />
                      ))}
                    </div>
                    <p className="mt-5 text-[15px] leading-6 text-body">&quot;{t.quote}&quot;</p>
                    {/* tail */}
                    <span
                      className="absolute -bottom-[34px] left-10 h-10 w-16 bg-[#101211]"
                      style={{ clipPath: "polygon(0 0, 100% 0, 40% 100%)" }}
                    />
                    <span
                      className="absolute -bottom-[36px] left-[38px] -z-10 h-[42px] w-[68px] bg-lime-dark/70"
                      style={{ clipPath: "polygon(0 0, 100% 0, 40% 100%)" }}
                    />
                  </div>
                </Reveal>

                <Reveal delay={base + 0.2} className="mt-12 flex items-center gap-4">
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-lime/60">
                    <Image src={t.avatar} alt={t.name} fill sizes="48px" className="object-cover" {...blurProps(t.avatar)} />
                  </span>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-[13px] text-body">{t.role}</div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
