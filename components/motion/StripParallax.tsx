"use client";

import { useEffect, useRef } from "react";

// Moves every [data-parallax] child of the strip a little while it is on screen.
// Passive scroll + requestAnimationFrame; will-change is only set while the strip is visible.
export default function StripParallax({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const layers = Array.from(el.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      // -1 when the strip enters at the bottom, 1 when it leaves at the top
      const progress = ((window.innerHeight - rect.top) / (window.innerHeight + rect.height)) * 2 - 1;
      layers.forEach((l, i) => {
        l.style.transform = `translate3d(0, ${progress * (i % 2 === 0 ? 28 : -28)}px, 0) scale(1.15)`;
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        layers.forEach((l) => (l.style.willChange = "transform"));
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
      } else {
        layers.forEach((l) => (l.style.willChange = ""));
        window.removeEventListener("scroll", onScroll);
      }
    });
    io.observe(el);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
