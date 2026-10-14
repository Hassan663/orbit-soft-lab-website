import PageHero from "./PageHero";
import PageShell from "./PageShell";
import type { LegalPage } from "@/data/site";
import { formatDate } from "@/lib/format";

export default function LegalLayout({ page, crumb }: { page: LegalPage; crumb: string }) {
  return (
    <PageShell>
      <PageHero eyebrow="Legal" title={page.title} highlight={page.highlight} text={page.description} image={page.image} crumbs={[{ label: crumb }]} />

      <section className="relative py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-36 lg:self-start">
            <div className="card rounded-[18px] p-6">
              <p className="eyebrow text-[12px]">On this page</p>
              <ol className="mt-4 space-y-2.5">
                {page.sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="flex gap-2 text-[14px] text-body transition hover:text-lime">
                      <span className="text-lime/70">{String(i + 1).padStart(2, "0")}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <article className="prose-dark max-w-[760px]">
            <p className="text-[14px]">Last updated: {formatDate(page.updated)}</p>
            {page.sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-36">
                <h2>{s.title}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </section>
            ))}
          </article>
        </div>
      </section>
    </PageShell>
  );
}
