"use client";

import { useState } from "react";
import ChevronDown from "lucide-react/dist/esm/icons/chevron-down";
import Stagger from "./motion/Stagger";
import StaggerItem from "./motion/StaggerItem";

type Props = {
  items: { q: string; a: string }[];
  columns?: 1 | 2;
  className?: string;
};

export default function Accordion({ items, columns = 1, className = "" }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Stagger stagger={0.06} className={`grid gap-3 ${columns === 2 ? "lg:grid-cols-2 lg:items-start" : ""} ${className}`}>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <StaggerItem key={f.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className={`card group w-full rounded-[12px] px-6 py-4 text-left transition-colors duration-300 ${isOpen ? "border-lime/60" : "hover:border-lime/50"}`}
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[13px] font-bold transition-colors duration-300 ${
                    isOpen ? "bg-lime text-ink" : "bg-white/5 text-white group-hover:bg-lime group-hover:text-ink"
                  }`}
                >
                  Q
                </span>
                <span className="flex-1 font-heading text-[16px] font-medium">{f.q}</span>
                <ChevronDown
                  size={20}
                  className={`transition-[transform,color] duration-300 ${isOpen ? "rotate-180 text-lime" : "text-white/70"}`}
                />
              </div>
              {/* grid-rows 0fr -> 1fr animates to the content's natural height without measuring */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="overflow-hidden pl-[52px] text-[13px] leading-5 text-body">
                  <span className="block pt-2">{f.a}</span>
                </p>
              </div>
            </button>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
