"use client";

import { motion, useMotionValue, useSpring, useTransform, type MotionStyle, type MotionValue } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "wine" | "light";
  className?: string;
};

export function MagneticButton({ href, children, variant = "wine", className }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 190, damping: 18 });
  const springY = useSpring(y, { stiffness: 190, damping: 18 });
  const glowX = useTransform(springX, [-20, 20], ["20%", "80%"]);
  const style: MotionStyle & { "--glow-x": MotionValue<string> } = {
    x: springX,
    y: springY,
    "--glow-x": glowX
  };

  return (
    <motion.a
      href={href}
      style={style}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={cn(
        "group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-7 py-3 text-sm font-medium transition duration-500",
        "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_var(--glow-x)_50%,rgba(255,255,255,.42),transparent_32%)] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        variant === "wine"
          ? "bg-wine text-ivory shadow-[0_18px_48px_rgba(74,15,31,.24)] hover:bg-[#5c1528]"
          : "border border-wine/20 bg-white/55 text-wine backdrop-blur-xl hover:border-rosegold hover:bg-white/80",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
