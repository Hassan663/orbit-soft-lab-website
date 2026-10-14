import Image from "next/image";
import Link from "next/link";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Magnetic from "./motion/Magnetic";
import Parallax from "./motion/Parallax";
import Reveal from "./motion/Reveal";
import TextReveal from "./motion/TextReveal";
import HeroImageZoom from "./motion/HeroImageZoom";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[820px] overflow-hidden bg-ink-deep pt-40 sm:min-h-[900px] sm:pt-56">
      {/* background image + gradient fade */}
      <Parallax mode="hero" offset={80}>
        <HeroImageZoom>
          <Image
            src="/images/hero.webp"
            alt=""
            fill
            priority
            fetchPriority="high"
            // the photo sits under a dark gradient + 35% overlay, so q50 is visually identical and roughly
            // halves the bytes of the LCP request
            quality={50}
            sizes="100vw"
            className="object-cover object-[70%_center] opacity-90"
          />
        </HeroImageZoom>
      </Parallax>
      <div className="absolute inset-0 bg-ink-deep/35" />
      {/* gradient only: a full-width backdrop-blur here was expensive to paint on mobile */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "linear-gradient(74deg, rgb(11,11,11) 25%, rgba(11,11,11,0.25) 65%, rgba(11,11,11,0.1) 100%)" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      <div aria-hidden="true" className="glow animate-drift -left-40 top-40 h-[470px] w-[340px]" />

      <div className="container-x relative">
        <div className="max-w-[652px]">
          <Reveal immediate duration={0.5} className="glass inline-flex items-center gap-3 rounded-[20px] px-7 py-3 text-[14px] text-white">
            <span className="h-3 w-3 rounded-full bg-lime shadow-lime" />
            YOUR DIGITAL FUTURE. OUR MISSION
          </Reveal>

          <TextReveal
            as="h1"
            immediate
            delay={0.1}
            className="mt-6 font-heading text-[34px] font-semibold uppercase leading-[1.2] sm:text-[44px] lg:text-[48px] lg:leading-[57px]"
          >
            We build digital products that move business{" "}
            <span className="font-bold text-lime">
              forward<span className="italic">.</span>
            </span>
          </TextReveal>

          <Reveal
            as="p"
            immediate
            delay={0.3}
            className="mt-8 max-w-[652px] text-[20px] leading-8 text-white/90 sm:text-[26px] sm:leading-[38px] lg:text-[30px]"
          >
            We design and build digital products that turn ambitious ideas into meaningful experiences and help
            businesses move forward.
          </Reveal>

          <Reveal immediate delay={0.45} className="mt-10 flex flex-wrap gap-4">
            <Magnetic>
              <Link href="/contact" className="btn-primary">
                Start Your Project <ArrowRight size={22} />
              </Link>
            </Magnetic>
            <Link href="/work" className="btn-outline">
              Explore Our Work <ArrowRight size={22} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
