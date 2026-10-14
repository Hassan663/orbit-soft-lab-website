import Link from "next/link";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import SectionHeading from "./SectionHeading";
import { processSteps } from "@/data/site";

export default function ProcessStrip() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              A process built for <span className="text-lime">clarity</span>
            </>
          }
        />
        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((s) => (
            <li key={s.n} className="card relative rounded-[18px] p-6 transition hover:border-lime/60">
              <span className="font-heading text-[36px] font-semibold text-lime">{s.n}</span>
              <h3 className="mt-2 font-heading text-[17px] font-semibold">{s.title}</h3>
              <p className="mt-2 text-[13px] leading-5 text-body">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex justify-center">
          <Link href="/process" className="btn-outline">
            See Our Full Process <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
