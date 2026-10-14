import Reveal from "./motion/Reveal";
import TextReveal from "./motion/TextReveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  align?: "center" | "left";
  size?: "lg" | "xl";
};

export default function SectionHeading({ eyebrow, title, text, align = "center", size = "lg" }: Props) {
  const center = align === "center";
  return (
    <div className={`flex flex-col gap-4 ${center ? "items-center text-center" : "items-start text-left"}`}>
      <Reveal className="flex items-center gap-3">
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-lime sm:w-20" />
        <span className="eyebrow">{eyebrow}</span>
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-lime sm:w-20" />
      </Reveal>
      <TextReveal
        as="h2"
        delay={0.1}
        className={`font-heading font-semibold uppercase leading-[1.15] ${
          size === "xl" ? "text-[32px] sm:text-[40px] lg:text-[48px]" : "text-[30px] sm:text-[36px] lg:text-[40px]"
        }`}
      >
        {title}
      </TextReveal>
      {text ? (
        <Reveal as="p" delay={0.25} className="max-w-[560px] text-[16px] leading-7 text-body sm:text-[18px]">
          {text}
        </Reveal>
      ) : null}
    </div>
  );
}
