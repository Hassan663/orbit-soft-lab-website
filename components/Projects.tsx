import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import Stagger from "./motion/Stagger";
import StaggerItem from "./motion/StaggerItem";
import { projects } from "@/data/site";

export default function Projects() {
  return (
    <section id="work" className="cv-auto [contain-intrinsic-size:auto_1500px] relative overflow-hidden py-24 sm:py-32">
      <div className="glow left-1/2 top-1/2 h-[376px] w-[376px] -translate-x-1/2 -translate-y-1/2" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Our Work"
          title={
            <>
              Featured <span className="text-lime">Projects</span>
            </>
          }
          text="Showcasing excellence through transformative digital solutions"
        />

        <Stagger className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((p) => (
            <StaggerItem key={p.slug}>
              <ProjectCard project={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
