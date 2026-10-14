// Server component: children reveal one after another (nth-child delays in globals.css) once in view.
type Props = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: "div" | "ul" | "ol" | "dl";
  immediate?: boolean;
};

export default function Stagger({ children, className = "", stagger = 0.08, delay = 0, as: Tag = "div", immediate }: Props) {
  const style = { "--stagger": `${stagger * 1000}ms`, "--d": `${delay * 1000}ms` } as React.CSSProperties;
  return (
    <Tag className={`stagger ${immediate ? "is-inview" : ""} ${className}`} data-io={immediate ? undefined : ""} style={style}>
      {children}
    </Tag>
  );
}
