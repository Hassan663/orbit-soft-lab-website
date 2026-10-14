"use client";

import { useEffect, useRef, useState } from "react";

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

// Animates the numeric part of values like "5+", "96%", "3.2x", "-45%", "01" once it scrolls into view.
// Plain IntersectionObserver + requestAnimationFrame: no animation library needed.
export default function Counter({ value, duration = 1.4, className }: { value: string; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, prefix, num, suffix] = match;
    const target = parseFloat(num);
    const decimals = num.includes(".") ? num.split(".")[1].length : 0;
    const pad = num.startsWith("0") && !num.includes(".") ? num.length : 0;
    const fmt = (n: number) => {
      const s = n.toFixed(decimals);
      return `${prefix}${pad ? s.padStart(pad, "0") : s}${suffix}`;
    };

    let frame = 0;
    // only reset to zero if the number is still off screen, so nothing visible flickers
    const rect = el.getBoundingClientRect();
    if (rect.top > window.innerHeight) setDisplay(fmt(0));

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / (duration * 1000));
          setDisplay(fmt(target * easeOut(t)));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  // the invisible final value reserves the width so counting never shifts layout
  return (
    <span ref={ref} className={`relative inline-block tabular-nums ${className ?? ""}`}>
      <span className="invisible">{value}</span>
      <span className="absolute inset-0 text-center" aria-hidden="true">
        {display}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
