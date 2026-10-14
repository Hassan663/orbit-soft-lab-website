// Server component: a direct child of <Stagger>. Its entrance is driven entirely by the parent's CSS.
type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article" | "span";
};

export default function StaggerItem({ children, className, as: Tag = "div" }: Props) {
  return <Tag className={className}>{children}</Tag>;
}
