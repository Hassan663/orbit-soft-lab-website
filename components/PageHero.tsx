import Image from "next/image";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import Parallax from "./motion/Parallax";
import Reveal from "./motion/Reveal";
import TextReveal from "./motion/TextReveal";

type Props = {
  eyebrow: string;
  title: string;
  highlight: string;
  text?: string;
  image?: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
};

// Internal page hero: title is rendered with the highlight word in lime at the end.
export default function PageHero({ eyebrow, title, highlight, text, image, crumbs, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink-deep pb-20 pt-40 sm:pb-24 sm:pt-52">
      {image && (
        <>
          <Parallax mode="hero" offset={60}>
            <Image src={image} alt="" fill priority fetchPriority="high" sizes="100vw" className="object-cover object-center opacity-60" />
          </Parallax>
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "linear-gradient(74deg, rgb(11,11,11) 30%, rgba(11,11,11,0.55) 70%, rgba(11,11,11,0.35) 100%)" }}
          />
        </>
      )}
      <div aria-hidden="true" className="glow animate-drift -left-32 top-24 h-[470px] w-[420px]" />
      <div className="glow right-0 top-0 h-[520px] w-[520px] translate-x-1/3 -translate-y-1/3" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />

      <div className="container-x relative">
        <Reveal immediate duration={0.5}>
          <Breadcrumbs items={crumbs} />
        </Reveal>
        <div className="mt-8 max-w-[820px]">
          <Reveal immediate delay={0.05} duration={0.5} className="flex items-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-lime sm:w-20" />
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>
          <TextReveal
            as="h1"
            immediate
            delay={0.1}
            className="mt-5 font-heading text-[34px] font-semibold uppercase leading-[1.2] sm:text-[44px] lg:text-[52px]"
          >
            {title} <span className="text-lime">{highlight}</span>
          </TextReveal>
          {text ? (
            <Reveal as="p" immediate delay={0.3} className="mt-6 max-w-[640px] text-[17px] leading-7 text-body sm:text-[20px] sm:leading-8">
              {text}
            </Reveal>
          ) : null}
          {children ? (
            <Reveal immediate delay={0.4}>
              {children}
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
