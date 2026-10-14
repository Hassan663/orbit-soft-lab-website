"use client";

import { useRef } from "react";

const MAX = 6;

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article";
};

// Subtle 3D tilt (max 6deg) with a lime radial highlight that follows the cursor.
// Pointer position is written to CSS variables; the transform and glow are pure CSS (.tilt in globals.css).
export default function Tilt({ children, className = "", as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.setProperty("--ry", `${((px - 0.5) * 2 * MAX).toFixed(2)}deg`);
    el.style.setProperty("--rx", `${(-(py - 0.5) * 2 * MAX).toFixed(2)}deg`);
  };
  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`tilt group/tilt relative ${className}`}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
      <span aria-hidden="true" className="tilt-glow pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100" />
    </Tag>
  );
}
