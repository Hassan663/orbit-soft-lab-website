"use client";

import { useState } from "react";
import { projectFilters, type ProjectFilter } from "@/data/site";

type Item = { slug: string; filter: Exclude<ProjectFilter, "All">; card: React.ReactNode };

// Cards are rendered on the server and passed in, so this client island only holds the filter state.
export default function WorkGrid({ items }: { items: Item[] }) {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const visible = filter === "All" ? items : items.filter((p) => p.filter === filter);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Filter projects">
        {projectFilters.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className={`rounded-full border px-5 py-2 text-[14px] font-medium transition-colors duration-300 ${
                active ? "border-lime bg-lime text-ink" : "border-lime/40 bg-ink-card text-body hover:border-lime hover:text-white"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {visible.length ? (
        // keying the grid on the filter replays the CSS entrance for the new set of cards
        <div key={filter} className="mt-14 grid gap-8 lg:grid-cols-2">
          {visible.map((p, i) => (
            <div key={p.slug} className="animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              {p.card}
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-14 text-center text-body">No projects in this category yet. Check back soon.</p>
      )}
    </div>
  );
}
