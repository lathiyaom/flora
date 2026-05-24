"use client";

import { motion } from "framer-motion";
import { process } from "@/data/site";
import { LocalImage } from "@/components/ui/local-image";
import { Section } from "@/components/ui/section";

export function CreationProcess() {
  return (
    <Section eyebrow="The art of creation" title="Four quiet rituals, one unforgettable object." className="bg-white/48">
      <div className="grid gap-8 lg:grid-cols-4">
        {process.map((step, index) => (
          <motion.article key={step.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06, duration: 0.75 }} className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.2rem]">
              <LocalImage src={step.image} alt={step.title} />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-rosegold">Step {String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 font-cormorant text-4xl text-wine">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-charcoal/68">{step.body}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
