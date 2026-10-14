// Server component: well-damped scale-in once in view (CSS in globals.css).
export default function PopIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <div className={`pop-in ${className}`} data-io="" style={{ "--d": `${delay * 1000}ms` } as React.CSSProperties}>
      {children}
    </div>
  );
}
