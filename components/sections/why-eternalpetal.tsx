"use client";

import { motion } from "framer-motion";
import { why } from "@/data/site";
import { Section } from "@/components/ui/section";

export function WhyEternalPetal() {
  return (
    <Section eyebrow="Why flora_.bouquets_" title="Because some gestures should not fade." className="bg-wine text-ivory">
      <div className="grid gap-4 md:grid-cols-5">
        {why.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.7 }}
              className="rounded-[1.2rem] border border-ivory/12 bg-white/[0.06] p-6 backdrop-blur"
            >
              <Icon className="mb-8 text-champagne" />
              <h3 className="font-dm text-2xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-ivory/70">{item.body}</p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
