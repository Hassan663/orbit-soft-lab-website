import Award from "lucide-react/dist/esm/icons/award";
import Eye from "lucide-react/dist/esm/icons/eye";
import Headset from "lucide-react/dist/esm/icons/headset";
import Zap from "lucide-react/dist/esm/icons/zap";
import SectionHeading from "./SectionHeading";
import Stagger from "./motion/Stagger";
import StaggerItem from "./motion/StaggerItem";
import { whyUs } from "@/data/site";

const icons = { award: Award, eye: Eye, zap: Zap, headset: Headset };

export default function WhyUs() {
  return (
    <section className="cv-auto [contain-intrinsic-size:auto_600px] relative overflow-hidden py-24 sm:py-32">
      <div className="glow left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Why Orbit Soft Lab"
          title={
            <>
              The difference is in how we <span className="text-lime">build</span>
            </>
          }
          text="We combine expertise, transparency, and dedication to deliver exceptional results"
        />

        <Stagger className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w) => {
            const Icon = icons[w.icon as keyof typeof icons];
            return (
              <StaggerItem
                key={w.title}
                className="card group flex flex-col items-center px-8 py-9 text-center transition duration-300 hover:-translate-y-1.5 hover:border-lime/60 hover:shadow-lime"
              >
                <span className="flip-icon flex h-16 w-16 items-center justify-center rounded-2xl bg-lime text-ink">
                  <Icon size={32} />
                </span>
                <h3 className="mt-8 font-heading text-[18px] font-semibold">{w.title}</h3>
                <p className="mt-3 text-[14px] leading-5 text-body">{w.text}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
