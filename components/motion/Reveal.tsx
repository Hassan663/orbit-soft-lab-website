// Server component: fade + 24px slide when scrolled into view. The `is-inview` class is added by the
// single shared observer in RevealObserver.tsx; the motion itself is a CSS animation (globals.css).
type Direction = "up" | "down" | "left" | "right";

const from: Record<Direction, string> = {
  up: "0 24px",
  down: "0 -24px",
  left: "24px 0",
  right: "-24px 0",
};

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  /** play on page load instead of on scroll (above-the-fold content) */
  immediate?: boolean;
  as?: "div" | "li" | "section" | "span" | "p";
};

export default function Reveal({ children, className = "", delay = 0, duration = 0.6, direction = "up", immediate, as: Tag = "div" }: Props) {
  const style = {
    "--from": from[direction],
    "--d": `${delay * 1000}ms`,
    "--dur": `${duration * 1000}ms`,
  } as React.CSSProperties;
  return (
    <Tag className={`reveal ${immediate ? "reveal-load" : ""} ${className}`} data-io={immediate ? undefined : ""} style={style}>
      {children}
    </Tag>
  );
}
