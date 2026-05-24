"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative px-5 py-20 md:px-8 md:py-28", className)}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 max-w-3xl"
          >
            {eyebrow && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-wine/60">{eyebrow}</p>}
            {title && <h2 className="font-cormorant text-5xl font-medium leading-[0.96] text-wine md:text-7xl">{title}</h2>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
