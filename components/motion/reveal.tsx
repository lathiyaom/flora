"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

const variants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "div" | "section" | "article";
};

export function Reveal({ children, className, delay = 0, duration = 0.6, as = "div" }: RevealProps) {
  const reduced = usePrefersReducedMotion();
  const Component = motion[as];

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px", amount: 0.15 }}
      variants={variants}
      transition={{ delay: Math.min(delay, 0.24), duration, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
