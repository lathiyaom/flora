"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { imagePaths } from "@/data/site";
import { LocalImage } from "@/components/ui/local-image";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 140]);

  return (
    <section className="relative min-h-screen overflow-hidden px-5 pt-28 md:px-8">
      <motion.div style={{ y }} className="absolute inset-0">
        <LocalImage src={imagePaths.hero} alt="flora_.bouquets_ handmade luxury bouquet" priority className="opacity-75" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,244,240,.98)_0%,rgba(248,244,240,.76)_38%,rgba(74,15,31,.14)_100%)]" />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(212,168,161,.5),transparent_24%),radial-gradient(circle_at_20%_70%,rgba(232,213,184,.72),transparent_28%)]" />
      <FloatingPetals />
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col justify-center pb-24">
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-6 text-xs font-semibold uppercase tracking-[0.42em] text-wine/62">
          Handmade eternal floral art
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-cormorant max-w-5xl text-6xl font-medium leading-[0.88] text-wine md:text-8xl lg:text-[9.5rem]"
        >
          Love, held in bloom forever.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.9 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-charcoal/72 md:text-xl"
        >
          flora_.bouquets_ transforms humble pipe cleaners into sculptural bouquets: tender, collectible, and made to keep the feeling long after the moment passes.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36, duration: 0.8 }} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <MagneticButton href="#collections">Explore Collections</MagneticButton>
          <MagneticButton href="#contact" variant="light">Gift for Someone Special</MagneticButton>
        </motion.div>
      </div>
      <a href="#story" aria-label="Scroll to story" className="absolute bottom-8 left-1/2 z-10 grid -translate-x-1/2 place-items-center text-wine/70">
        <span className="mb-3 text-[10px] uppercase tracking-[0.32em]">Scroll</span>
        <ChevronDown className="animate-bounce" size={20} />
      </a>
    </section>
  );
}

function FloatingPetals() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      {Array.from({ length: 16 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-3 w-7 rounded-[999px_999px_999px_0] bg-rosegold/35"
          initial={{ y: "105vh", x: `${(index * 17) % 100}vw`, rotate: index * 21, opacity: 0 }}
          animate={{ y: "-10vh", rotate: index * 21 + 120, opacity: [0, 0.5, 0] }}
          transition={{ duration: 16 + (index % 5) * 2, delay: index * 0.7, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}
