import Image from "next/image";
import Link from "next/link";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";
import type { Project } from "@/data/site";
import { blurProps } from "@/lib/blur";

export default function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="card group h-full overflow-hidden rounded-[20px] transition-[border-color,box-shadow] duration-300 hover:border-lime hover:shadow-[0_0_40px_rgba(178,236,54,0.2)]">
      <Link href={`/work/${p.slug}`} className="relative block h-[256px] overflow-hidden" tabIndex={-1} aria-hidden="true">
        <Image
          src={p.image}
          alt=""
          fill
          sizes="(min-width: 1292px) 610px, (min-width: 1024px) calc(50vw - 48px), calc(100vw - 40px)"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.08]" {...blurProps(p.image)} />
        {/* hover overlay with a centered case study button */}
        <span className="absolute inset-0 flex items-center justify-center bg-ink-deep/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex h-24 w-24 scale-90 flex-col items-center justify-center rounded-full bg-lime text-center text-[12px] font-semibold leading-tight text-ink shadow-lime transition-transform duration-300 group-hover:scale-100">
            <ArrowUpRight size={20} />
            View case study
          </span>
        </span>
      </Link>
      <div className="p-8">
        <p className="text-[13px] uppercase tracking-wide text-lime">{p.category}</p>
        <h3 className="mt-3 font-heading text-[24px] font-semibold">{p.title}</h3>
        <p className="mt-3 text-[14px] leading-6 text-body">{p.text}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t, i) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/5 px-3.5 py-2 text-[12px] text-white/80 transition-transform duration-300 group-hover:-translate-y-0.5"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {t}
            </span>
          ))}
        </div>
        <Link href={`/work/${p.slug}`} className="btn-small mt-6 px-5 py-2 text-[13px]">
          View Project Details <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
