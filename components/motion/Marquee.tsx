import { marqueeItems } from "@/data/site";

// Pure CSS marquee (keyframes in globals.css). The list is rendered twice so the loop is seamless.
export default function Marquee() {
  return (
    <section aria-label="Technologies and partners" className="marquee marquee-box group relative flex items-center overflow-hidden border-y border-white/5 bg-ink-deep">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-deep to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-deep to-transparent sm:w-40" />
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1 ? true : undefined}>
            {marqueeItems.map((item) => (
              <li key={item} className="flex items-center gap-10 pr-10 font-heading text-[22px] font-semibold uppercase tracking-wide text-white/35 transition-colors duration-300 hover:text-lime sm:text-[28px]">
                {item}
                <span className="h-2.5 w-2.5 rounded-full bg-lime/70" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
