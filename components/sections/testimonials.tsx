"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/data/site";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { Section } from "@/components/ui/section";

export function Testimonials() {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  return (
    <Section eyebrow="Love stories" title="Kept by the people who gave them.">
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-luxury">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.image}
              initial={reduced ? false : { opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduced ? undefined : { opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <LuxuryImage src={active.image} alt={`${active.name} portrait`} sizes="(min-width:1024px) 40vw, 100vw" />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="relative">
          <Quote className="mb-8 text-rosegold/90" size={44} aria-hidden />
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote>
                <p className="font-cormorant text-4xl leading-[1.1] tracking-tight text-wine md:text-5xl lg:text-6xl">
                  &ldquo;{active.quote}&rdquo;
                </p>
              </blockquote>
              <footer className="mt-8">
                <cite className="not-italic">
                  <p className="font-semibold text-charcoal">{active.name}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.22em] text-wine/45">
                    Verified buyer · {active.location}
                  </p>
                </cite>
              </footer>
            </motion.div>
          </AnimatePresence>
          <div className="mt-10 flex gap-3" role="group" aria-label="Testimonial navigation">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="grid h-12 w-12 place-items-center rounded-full border border-wine/12 text-wine transition duration-300 hover:bg-wine hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosegold"
              onClick={() => setIndex((v) => (v - 1 + testimonials.length) % testimonials.length)}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              className="grid h-12 w-12 place-items-center rounded-full border border-wine/12 text-wine transition duration-300 hover:bg-wine hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosegold"
              onClick={() => setIndex((v) => (v + 1) % testimonials.length)}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
