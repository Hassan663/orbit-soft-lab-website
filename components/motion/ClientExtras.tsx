"use client";

import dynamic from "next/dynamic";

// Non-critical, interaction-only widgets: loaded after hydration and never server rendered.
const CustomCursor = dynamic(() => import("./CustomCursor"), { ssr: false });
const BackToTop = dynamic(() => import("./BackToTop"), { ssr: false });

export default function ClientExtras() {
  return (
    <>
      <BackToTop />
      <CustomCursor />
    </>
  );
}
