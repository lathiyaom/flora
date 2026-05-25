"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title?: string;
  className?: string;
  inverted?: boolean;
};

export function SectionHeader({ eyebrow, title, className, inverted }: SectionHeaderProps) {
  const reduced = usePrefersReducedMotion();

  if (!eyebrow && !title) return null;

  const content = (
    <>
      {eyebrow && (
        <p
          className={cn(
            "mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.38em]",
            inverted ? "text-champagne/80" : "text-wine/55"
          )}
        >
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          className={cn(
            "font-cormorant max-w-4xl text-balance text-5xl font-medium leading-[0.94] md:text-6xl lg:text-7xl",
            inverted ? "text-ivory" : "text-wine"
          )}
        >
          {title}
        </h2>
      )}
    </>
  );

  if (reduced) {
    return <div className={cn("mb-12 max-w-3xl", className)}>{content}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={cn("mb-12 max-w-3xl md:mb-16", className)}
    >
      {content}
    </motion.div>
  );
}
