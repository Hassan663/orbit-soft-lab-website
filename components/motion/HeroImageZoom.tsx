// Server component: slow 1.05 -> 1 settle on load (CSS animation). The image is visible from the first
// paint, so it never delays LCP.
export default function HeroImageZoom({ children }: { children: React.ReactNode }) {
  return <div className="hero-zoom absolute inset-0">{children}</div>;
}
