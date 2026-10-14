import SectionHeading from "./SectionHeading";
import Stagger from "./motion/Stagger";
import StaggerItem from "./motion/StaggerItem";
import { techStack } from "@/data/site";

export default function TechStack() {
  return (
    <section className="cv-auto relative overflow-hidden py-24 sm:py-32 [contain-intrinsic-size:auto_520px]">
      <div className="container-x">
        <SectionHeading
          eyebrow="Tech Stack"
          title={
            <>
              Technologies we <span className="text-lime">master</span>
            </>
          }
          text="Cutting-edge tools and frameworks powering innovation"
        />

        <Stagger stagger={0.06} className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {techStack.map((t) => (
            <StaggerItem
              key={t.name}
              className="card group flex h-[119px] flex-col items-center justify-center gap-3 rounded-[16px] text-white transition-colors duration-300 hover:border-lime hover:text-lime"
            >
              {/* icons live in one cached sprite: public/icons.svg */}
              <svg aria-hidden="true" className="h-8 w-8 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[360deg]">
                <use href={`/icons.svg#${t.icon}`} />
              </svg>
              <span className="text-[14px] text-body transition-colors duration-300 group-hover:text-lime">{t.name}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
