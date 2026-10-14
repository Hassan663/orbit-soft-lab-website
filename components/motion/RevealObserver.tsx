"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// One IntersectionObserver for every scroll-triggered entrance on the page ([data-io] elements).
// It only toggles a class; all motion is CSS, so hundreds of reveals cost no hydration work.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-inview");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -80px 0px" }
    );
    const observeAll = () => document.querySelectorAll("[data-io]:not(.is-inview)").forEach((el) => io.observe(el));
    observeAll();
    // client-rendered content can appear later; react only to added elements, at most once per frame
    let queued = false;
    const mo = new MutationObserver((records) => {
      if (queued || !records.some((r) => Array.from(r.addedNodes).some((n) => n.nodeType === 1))) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        observeAll();
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
