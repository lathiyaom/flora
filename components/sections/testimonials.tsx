"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/data/site";
import { LocalImage } from "@/components/ui/local-image";
import { Section } from "@/components/ui/section";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  return (
    <Section eyebrow="Love stories" title="Kept by the people who gave them.">
      <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] shadow-luxury">
          <AnimatePresence mode="wait">
            <motion.div key={active.image} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.55 }} className="absolute inset-0">
              <LocalImage src={active.image} alt={`${active.name} portrait`} />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="relative">
          <Quote className="mb-8 text-rosegold" size={48} />
          <AnimatePresence mode="wait">
            <motion.div key={active.name} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.45 }}>
              <p className="font-cormorant text-4xl leading-tight text-wine md:text-6xl">&ldquo;{active.quote}&rdquo;</p>
              <p className="mt-8 font-semibold text-charcoal">{active.name}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.24em] text-wine/45">Verified buyer / {active.location}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-10 flex gap-3">
            <button aria-label="Previous testimonial" className="grid h-12 w-12 place-items-center rounded-full border border-wine/15 text-wine transition hover:bg-wine hover:text-ivory" onClick={() => setIndex((value) => (value - 1 + testimonials.length) % testimonials.length)}>
              <ChevronLeft size={18} />
            </button>
            <button aria-label="Next testimonial" className="grid h-12 w-12 place-items-center rounded-full border border-wine/15 text-wine transition hover:bg-wine hover:text-ivory" onClick={() => setIndex((value) => (value + 1) % testimonials.length)}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
