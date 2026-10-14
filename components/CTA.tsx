import Image from "next/image";
import Link from "next/link";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Magnetic from "./motion/Magnetic";
import Parallax from "./motion/Parallax";
import Reveal from "./motion/Reveal";
import TextReveal from "./motion/TextReveal";
import { blurProps } from "@/lib/blur";

export default function CTA() {
  return (
    <section id="contact" className="cv-auto relative overflow-hidden bg-ink-deep py-28 [contain-intrinsic-size:auto_560px]">
      <Parallax offset={60}>
        <Image src="/images/cta.webp" alt="" fill sizes="100vw" className="object-cover opacity-80" {...blurProps("/images/cta.webp")} />
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/80 to-transparent" />

      <div className="container-x relative">
        <div className="max-w-[929px]">
          <Reveal>
            <p className="eyebrow">Let&apos;s build something great</p>
          </Reveal>
          <TextReveal as="h2" delay={0.1} className="mt-5 font-heading text-[30px] font-semibold uppercase leading-tight sm:text-[36px]">
            Your vision. Your code
          </TextReveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-[18px] leading-7 text-white sm:text-[20px]">
              From concept to launch, we build scalable solutions designed to move your business forward.
            </p>
            <p className="mt-4 text-[16px] leading-6 text-body sm:text-[18px] sm:leading-7">
              We turn ambitious ideas into modern digital products through thoughtful design and powerful technology.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-12">
            <Magnetic>
              <Link href="/contact" className="btn-primary">
                Start Your Project <ArrowRight size={22} />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
