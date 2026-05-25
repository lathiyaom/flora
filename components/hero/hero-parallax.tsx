"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || !ref.current) return;

    let ctx: { revert: () => void } | null = null;

    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.to(ref.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6
          }
        });
      }, ref);
    })();

    return () => {
      ctx?.revert();
    };
  }, [reduced]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 z-[2] opacity-40"
      aria-hidden
      style={{
        background:
          "radial-gradient(circle at 65% 35%, rgba(255,255,255,.25) 0%, transparent 45%), radial-gradient(circle at 25% 75%, rgba(232,213,184,.35) 0%, transparent 40%)"
      }}
    />
  );
}
