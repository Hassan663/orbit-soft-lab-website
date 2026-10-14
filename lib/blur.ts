import "server-only";
import blurData from "@/data/blur.json";

const data = blurData as Record<string, string>;

// Spread onto next/image: {...blurProps(src)}. Server-only so the placeholder map never ships in client JS.
// Use it on lazy, below-the-fold images only: on a priority/LCP image the blurred SVG placeholder just adds
// paint work before the real image, which arrives almost immediately anyway.
export function blurProps(src: string) {
  const blurDataURL = data[src];
  return blurDataURL ? { placeholder: "blur" as const, blurDataURL } : {};
}
