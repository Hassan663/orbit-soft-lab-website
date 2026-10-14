"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, [role='button'], summary, label, select, [data-cursor='hover']";

// Desktop-only cursor: a lime dot plus a lagging ring that grows over interactive elements.
// Positions are written straight to transforms inside requestAnimationFrame (no React re-renders).
export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce || !dot.current || !ring.current) return;

    const d = dot.current;
    const r = ring.current;
    const html = document.documentElement;
    html.classList.add("has-custom-cursor");

    let x = -100, y = -100, rx = -100, ry = -100, frame = 0, running = false;

    const loop = () => {
      rx += (x - rx) * 0.2;
      ry += (y - ry) * 0.2;
      d.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      r.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      if (Math.abs(x - rx) > 0.1 || Math.abs(y - ry) > 0.1) frame = requestAnimationFrame(loop);
      else running = false;
    };
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      html.dataset.cursor = (e.target as Element | null)?.closest?.(INTERACTIVE) ? "hover" : "on";
      if (!running) {
        running = true;
        frame = requestAnimationFrame(loop);
      }
    };
    const leave = () => (html.dataset.cursor = "off");

    window.addEventListener("pointermove", move, { passive: true });
    html.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      html.removeEventListener("pointerleave", leave);
      html.classList.remove("has-custom-cursor");
      delete html.dataset.cursor;
    };
  }, []);

  return (
    <>
      <div ref={dot} aria-hidden="true" className="cursor-dot" />
      <div ref={ring} aria-hidden="true" className="cursor-ring" />
    </>
  );
}
