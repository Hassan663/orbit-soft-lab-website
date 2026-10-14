"use client";

import { useEffect } from "react";

// The first page load renders without an entrance so the hero paints immediately (no LCP delay);
// later client-side navigations get a quick CSS fade/slide.
let hasNavigated = false;

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const animateIn = hasNavigated;
  useEffect(() => {
    hasNavigated = true;
  }, []);
  return <div className={animateIn ? "animate-page-in" : undefined}>{children}</div>;
}
