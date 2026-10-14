"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  /** max vertical travel in px */
  offset?: number;
  /** "hero" sections start at the top of the page; "section" ones scroll through the viewport */
  mode?: "hero" | "section";
  className?: string;
};

// Slow vertical drift for background layers. Passive scroll listener + requestAnimationFrame, only while
// the section is on screen; will-change is set only during that time. The layer is oversized by `offset`.
export default function Parallax({ children, offset = 60, mode = "section", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const inner = layer.current;
    if (!el || !inner || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // hero: 0 at page top -> 1 when scrolled past; section: 0 entering at the bottom -> 1 leaving at the top
      const progress = mode === "hero" ? -r.top / r.height : (vh - r.top) / (vh + r.height);
      const p = Math.min(1, Math.max(0, progress));
      const y = mode === "hero" ? p * offset : (p * 2 - 1) * offset;
      inner.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        inner.style.willChange = "transform";
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
      } else {
        inner.style.willChange = "";
        window.removeEventListener("scroll", onScroll);
      }
    });
    io.observe(el);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [mode, offset]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <div ref={layer} className="absolute inset-x-0" style={{ top: -offset, bottom: -offset }}>
        {children}
      </div>
    </div>
  );
}
