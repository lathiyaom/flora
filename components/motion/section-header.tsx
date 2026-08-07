"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { luxuryEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  inverted?: boolean;
};

export function SectionHeader({ eyebrow, title, subtitle, className, inverted }: SectionHeaderProps) {
  const reduced = usePrefersReducedMotion();

  if (!eyebrow && !title) return null;

  const content = (
    <>
      {eyebrow && (
        <p
          className={cn(
            "editorial-rule mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.38em]",
            inverted ? "text-champagne/80" : "text-wine/55"
          )}
        >
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          className={cn(
            "font-cormorant max-w-4xl text-balance text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[0.94] tracking-[-0.02em] lg:text-7xl",
            inverted ? "text-ivory" : "text-wine"
          )}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={cn("mt-5 max-w-2xl text-lg leading-relaxed", inverted ? "text-ivory/72" : "text-charcoal/65")}>
          {subtitle}
        </p>
      )}
    </>
  );

  if (reduced) {
    return <div className={cn("mb-12 max-w-3xl md:mb-14", className)}>{content}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: luxuryEase }}
      className={cn("mb-12 max-w-3xl md:mb-14", className)}
    >
      {content}
    </motion.div>
  );
}
