import type { Metadata } from "next";
import Link from "next/link";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <PageShell>
      <section className="relative flex min-h-[760px] items-center overflow-hidden bg-ink-deep pb-24 pt-40 sm:pt-52">
        <div className="glow left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2" />
        <div className="container-x relative flex flex-col items-center text-center">
          <div className="relative flex h-[168px] w-[168px] items-center justify-center rounded-full bg-ink">
            <div className="h-[110px] w-[110px] animate-float rounded-full bg-lime shadow-lime" />
          </div>
          <p className="mt-10 font-heading text-[90px] font-bold leading-none text-gradient sm:text-[130px]">404</p>
          <p className="eyebrow mt-4">Lost in orbit</p>
          <h1 className="mt-4 font-heading text-[28px] font-semibold uppercase sm:text-[38px]">
            This page drifted <span className="text-lime">away</span>
          </h1>
          <p className="mt-5 max-w-[520px] text-[17px] leading-7 text-body">
            The page you are looking for does not exist or has been moved. Let&apos;s get you back on course.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary">
              Back to Home <ArrowRight size={22} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
