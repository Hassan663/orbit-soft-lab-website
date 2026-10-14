// Server component: a lime line that draws from left to right once in view (CSS in globals.css).
export default function DrawLine({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" data-io="" className={`draw-line ${className}`} />;
}
