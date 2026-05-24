"use client";

import { motion } from "framer-motion";
import { imagePaths } from "@/data/site";
import { LocalImage } from "@/components/ui/local-image";
import { Section } from "@/components/ui/section";

export function About() {
  return (
    <Section id="story" eyebrow="From our hands to your heart" title="A bouquet should remember what the day felt like.">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-7 text-lg leading-8 text-charcoal/72">
          <p>
            flora_.bouquets_ begins where fresh flowers end: with the desire to keep a feeling alive. Every stem is twisted, softened, curved, and composed by hand until a simple material becomes something intimate and enduring.
          </p>
          <p>
            The work is slow by design. We study color like memory, shape each petal like a gesture, and wrap every bouquet as if it were already part of someone&apos;s story.
          </p>
          <div className="luxury-line mt-10" />
          <div className="grid grid-cols-3 gap-4 pt-2">
            {["Handmade", "Everlasting", "Bespoke"].map((item) => (
              <div key={item}>
                <p className="font-cormorant text-3xl text-wine">{item}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-wine/45">Atelier value</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative min-h-[520px] overflow-hidden rounded-[2rem] shadow-luxury">
          <LocalImage src={imagePaths.story} alt="Artisan hands shaping handmade flowers" />
          <div className="absolute bottom-6 left-6 right-6 bg-ivory/78 p-6 backdrop-blur-xl">
            <p className="font-dm text-2xl text-wine">Each petal is a small act of devotion.</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
