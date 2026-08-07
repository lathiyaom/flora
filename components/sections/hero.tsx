"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { brand } from "@/data/brand";
import { imagePaths } from "@/data/site";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { luxuryEase } from "@/lib/motion";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.45], [0, reduced ? 0 : 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.88]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, reduced ? 1 : 1.04]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0 hero-vignette">
        <LuxuryImage
          src={imagePaths.hero}
          alt={`${brand.name} handmade luxury bouquet`}
          priority
          sizes="100vw"
          imageClassName="opacity-90"
          reveal={false}
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(248,244,240,.96)_0%,rgba(248,244,240,.55)_42%,rgba(74,15,31,.28)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_78%_18%,rgba(212,168,161,.28),transparent_52%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-28 pt-32 md:px-8 md:pb-32 md:pt-36">
        <div className="max-w-4xl">
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: luxuryEase }}
            className="editorial-rule mb-5 font-cormorant text-3xl tracking-tight text-wine md:text-4xl"
          >
            {brand.legalName}
          </motion.p>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.65, ease: luxuryEase }}
            className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.42em] text-wine/55"
          >
            {brand.tagline}
          </motion.p>
          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: luxuryEase }}
            className="font-cormorant text-balance text-[clamp(2.75rem,8vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.03em] text-wine"
          >
            Love kept in <span className="italic text-rosegold/90">bloom</span> forever.
          </motion.h1>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7, ease: luxuryEase }}
            className="mt-6 max-w-xl text-lg leading-[1.7] text-charcoal/70 md:text-xl"
          >
            Handmade pipe-cleaner bouquets and petit charms—keepsake pieces for moments you want to remember.
          </motion.p>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.65, ease: luxuryEase }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <MagneticButton href="#collections">Explore collections</MagneticButton>
            <MagneticButton href="#charms" variant="light">
              See petit charms
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <a
        href="#story"
        aria-label="Scroll to story"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-wine/50 transition hover:text-wine"
      >
        <span className="mb-2 text-[10px] uppercase tracking-[0.32em]">Discover</span>
        <ChevronDown
          className={reduced ? "" : "animate-[pulse_2.8s_ease-in-out_infinite]"}
          size={20}
          aria-hidden
        />
      </a>
    </section>
  );
}
