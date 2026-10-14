import Image from "next/image";
import Link from "next/link";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Calendar from "lucide-react/dist/esm/icons/calendar";
import Clock from "lucide-react/dist/esm/icons/clock";
import type { Post } from "@/data/site";
import { formatDate } from "@/lib/format";
import { blurProps } from "@/lib/blur";

export default function PostCard({ post: p }: { post: Post }) {
  return (
    <article className="card group flex flex-col overflow-hidden rounded-[20px] transition hover:border-lime/60">
      <Link href={`/blog/${p.slug}`} className="relative block h-[210px] overflow-hidden" tabIndex={-1} aria-hidden="true">
        <Image src={p.cover} alt="" fill sizes="(min-width: 1292px) 396px, (min-width: 1024px) calc(33vw - 32px), (min-width: 768px) calc(50vw - 48px), calc(100vw - 40px)" className="object-cover transition duration-500 group-hover:scale-105" {...blurProps(p.cover)} />
        <span className="absolute left-4 top-4 rounded-full bg-lime px-3 py-1 text-[12px] font-semibold text-ink">{p.category}</span>
      </Link>
      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-body">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} className="text-lime" /> <time dateTime={p.date}>{formatDate(p.date)}</time>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} className="text-lime" /> {p.readTime}
          </span>
        </div>
        <h3 className="mt-4 font-heading text-[20px] font-semibold leading-snug">
          <Link href={`/blog/${p.slug}`} className="transition hover:text-lime">
            {p.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-[14px] leading-6 text-body">{p.excerpt}</p>
        <Link href={`/blog/${p.slug}`} className="btn-small mt-6 self-start px-5 py-2">
          Read Article <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
