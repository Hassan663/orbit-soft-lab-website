import { Children, Fragment, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";

type Tag = "h1" | "h2" | "h3" | "p" | "span";

type Props = {
  children: ReactNode;
  as?: Tag;
  className?: string;
  delay?: number;
  /** play on page load (heroes) instead of on scroll */
  immediate?: boolean;
};

// Server component: every word gets a clipping mask and slides up, 50ms apart (CSS in globals.css).
// Element children such as <span className="text-lime"> are kept, so highlight colors survive.
function split(node: ReactNode, counter: { i: number }, key = "w"): ReactNode {
  if (typeof node === "string" || typeof node === "number") {
    return String(node)
      .split(/(\s+)/)
      .map((part, i) => {
        if (!part) return null;
        if (/^\s+$/.test(part)) return " ";
        const index = counter.i++;
        return (
          <span key={`${key}-${i}`} className="word">
            <span style={{ "--w": index } as React.CSSProperties}>{part}</span>
          </span>
        );
      });
  }
  if (isValidElement(node)) {
    const el = node as ReactElement<{ children?: ReactNode }>;
    if (el.type === "br" || el.props.children == null) return el;
    return cloneElement(el, undefined, split(el.props.children, counter, `${key}-e`));
  }
  if (Array.isArray(node)) {
    return Children.toArray(node).map((child, i) => <Fragment key={`${key}-${i}`}>{split(child, counter, `${key}-${i}`)}</Fragment>);
  }
  return node;
}

export default function TextReveal({ children, as: Comp = "h2", className = "", delay = 0, immediate }: Props) {
  return (
    <Comp
      className={`text-reveal ${immediate ? "reveal-load" : ""} ${className}`}
      data-io={immediate ? undefined : ""}
      style={{ "--d": `${delay * 1000}ms` } as React.CSSProperties}
    >
      {split(children, { i: 0 })}
    </Comp>
  );
}
