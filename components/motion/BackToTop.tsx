"use client";

import { useEffect, useState } from "react";
import ArrowUp from "lucide-react/dist/esm/icons/arrow-up";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      const next = window.scrollY > 600;
      // only touches React state when the threshold is crossed
      setShow((prev) => (prev === next ? prev : next));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      aria-hidden={!show}
      onClick={toTop}
      className={`fixed bottom-6 right-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-lime text-ink shadow-lime transition-[opacity,transform,box-shadow] duration-300 hover:-translate-y-[3px] hover:shadow-[0_0_50px_rgba(178,236,54,0.45)] active:scale-95 sm:bottom-8 sm:right-8 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp size={22} />
    </button>
  );
}
