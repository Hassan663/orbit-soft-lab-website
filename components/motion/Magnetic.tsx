"use client";

import { useRef } from "react";

const RANGE = 12;

// Gently pulls its child toward the cursor (max 12px) and springs back on leave (CSS transition, see .magnetic).
export default function Magnetic({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const dx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width / 2)));
    const dy = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height / 2)));
    el.dataset.active = "";
    el.style.transform = `translate3d(${dx * RANGE}px, ${dy * RANGE}px, 0)`;
  };
  const reset = () => {
    const el = ref.current;
    if (!el) return;
    delete el.dataset.active;
    el.style.transform = "";
  };

  return (
    <span ref={ref} className={`magnetic inline-flex ${className}`} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </span>
  );
}
