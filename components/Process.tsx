import SectionHeading from "./SectionHeading";
import { StepCircle } from "./motion/StepCircle";
import DrawLine from "./motion/DrawLine";
import Stagger from "./motion/Stagger";
import StaggerItem from "./motion/StaggerItem";
import { processSteps } from "@/data/site";

export { StepCircle };

export default function Process() {
  return (
    <section id="process" className="cv-auto [contain-intrinsic-size:auto_700px] relative overflow-hidden py-24 sm:py-32">
      <div className="glow left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Our Process"
          title={
            <>
              From first idea to <br className="hidden sm:block" />
              final <span className="text-lime">launch</span>
            </>
          }
        />

        <div className="relative mt-20">
          {/* connector between the circle centers (desktop only) */}
          <DrawLine className="absolute left-[10%] right-[10%] top-[77px] hidden h-[2px] bg-gradient-to-r from-lime via-lime/60 to-lime lg:block" />
          <Stagger stagger={0.12} className="relative grid gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((s, i) => (
              <StaggerItem key={s.n} className="flex flex-col items-center text-center">
                <StepCircle n={s.n} delay={0.2 + i * 0.12} />
                <h3 className="mt-6 font-heading text-[18px] font-semibold">{s.title}</h3>
                <p className="mt-2 max-w-[220px] text-[13px] leading-5 text-body">{s.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
