import Link from "next/link";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right";

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-[13px] text-body">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-2">
              {c.href && !last ? (
                <Link href={c.href} className="transition hover:text-lime">
                  {c.label}
                </Link>
              ) : (
                <span className={last ? "text-lime" : ""} aria-current={last ? "page" : undefined}>
                  {c.label}
                </span>
              )}
              {!last && <ChevronRight size={14} className="text-white/30" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
