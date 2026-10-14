import Image from "next/image";
import StripParallax from "./motion/StripParallax";
import { imageStrip } from "@/data/site";
import { blurProps } from "@/lib/blur";

// Full-bleed photo strip with a subtle parallax (handled by the small StripParallax client wrapper).
export default function ImageStrip() {
  return (
    <section aria-label="Life at Orbit Soft Lab" className="cv-auto relative overflow-hidden bg-ink-deep [contain-intrinsic-size:auto_400px]">
      <StripParallax className="grid grid-cols-1 sm:grid-cols-3">
        {imageStrip.map((img, i) => (
          <div key={img.src} className="relative h-[220px] overflow-hidden sm:h-[320px] lg:h-[400px]">
            <div data-parallax className="absolute inset-0 scale-[1.15]">
              <Image src={img.src} alt={img.alt} fill quality={60} sizes="(min-width: 640px) 34vw, 100vw" className="object-cover" {...blurProps(img.src)} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/80 via-ink-deep/30 to-ink-deep/50" />
            {i > 0 && (
              <span className="absolute inset-x-0 top-0 h-[2px] bg-lime shadow-lime sm:inset-y-0 sm:left-0 sm:right-auto sm:h-auto sm:w-[2px]" />
            )}
          </div>
        ))}
      </StripParallax>
      <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-lime to-transparent" />
      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-lime to-transparent" />
    </section>
  );
}
