// Server component: wipes its content in with a clip-path once in view (CSS in globals.css).
export default function ClipReveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <div className={`clip-reveal ${className}`} data-io="" style={{ "--d": `${delay * 1000}ms` } as React.CSSProperties}>
      {children}
    </div>
  );
}
