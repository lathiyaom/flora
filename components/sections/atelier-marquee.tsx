"use client";

import { atelierPillars } from "@/data/atelier";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function AtelierMarquee() {
  const reduced = usePrefersReducedMotion();
  const items = [...atelierPillars, ...atelierPillars];

  if (reduced) {
    return (
      <div className="border-y border-wine/8 bg-ivory/60 py-5" aria-hidden>
        <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-wine/50">
          {atelierPillars.join(" · ")}
        </p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden border-y border-wine/8 bg-ivory/50 py-4" aria-hidden>
      <div className="marquee-track flex w-max gap-12">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-12 text-[0.65rem] font-semibold uppercase tracking-[0.34em] text-wine/45"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-rosegold/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
