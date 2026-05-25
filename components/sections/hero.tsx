"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { brand } from "@/data/brand";
import { imagePaths } from "@/data/site";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { MagneticButton } from "@/components/ui/magnetic-button";

const HeroParallax = dynamic(() => import("@/components/hero/hero-parallax").then((m) => m.HeroParallax), {
  ssr: false
});

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.45], [0, reduced ? 0 : 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.82]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, reduced ? 1 : 1.06]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0">
        <LuxuryImage
          src={imagePaths.hero}
          alt={`${brand.name} handmade luxury bouquet`}
          priority
          sizes="100vw"
          imageClassName="opacity-[0.82]"
          reveal={false}
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(248,244,240,.97)_0%,rgba(248,244,240,.72)_42%,rgba(74,15,31,.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_78%_18%,rgba(212,168,161,.42),transparent_50%)]" />
      </motion.div>

      {!reduced && <HeroParallax />}
      {!reduced && <FloatingPetals />}

      <div className="ambient-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-28 pt-32 md:px-8 md:pb-32 md:pt-36">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.42em] text-wine/58"
          >
            {brand.tagline}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-cormorant text-balance text-[clamp(2.75rem,8vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.02em] text-wine"
          >
            Love, held in bloom forever.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-lg leading-[1.75] text-charcoal/70 md:text-xl"
          >
            {brand.name} transforms humble pipe cleaners into sculptural bouquets—tender, collectible, and made to
            keep the feeling long after the moment passes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <MagneticButton href="#collections">Explore Collections</MagneticButton>
            <MagneticButton href="#contact" variant="light">
              Gift for Someone Special
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <a
        href="#story"
        aria-label="Scroll to story"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-wine/60 transition hover:text-wine"
      >
        <span className="mb-2 text-[10px] uppercase tracking-[0.32em]">Discover</span>
        <ChevronDown className={reduced ? "" : "animate-bounce"} size={20} aria-hidden />
      </a>
    </section>
  );
}

function FloatingPetals() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden>
      {Array.from({ length: 10 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-2.5 w-6 rounded-[999px_999px_999px_0] bg-rosegold/30"
          initial={{ y: "105vh", x: `${(index * 19) % 100}vw`, rotate: index * 21, opacity: 0 }}
          animate={{ y: "-8vh", rotate: index * 21 + 100, opacity: [0, 0.4, 0] }}
          transition={{ duration: 18 + (index % 4) * 2, delay: index * 0.9, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}
