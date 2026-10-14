"use client";

import dynamic from "next/dynamic";

// The placeholder has the marquee's exact height so loading it late causes no layout shift.
const Marquee = dynamic(() => import("./Marquee"), {
  ssr: false,
  loading: () => <div aria-hidden="true" className="marquee-box border-y border-white/5 bg-ink-deep" />,
});

export default function LazyMarquee() {
  return <Marquee />;
}
