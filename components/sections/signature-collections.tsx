"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { collections } from "@/data/site";
import { LocalImage } from "@/components/ui/local-image";
import { Section } from "@/components/ui/section";

export function SignatureCollections() {
  return (
    <Section id="collections" eyebrow="Signature collections" title="Compositions for every kind of forever." className="bg-white/45">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {collections.map((item, index) => (
          <motion.article
            key={item.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ delay: index * 0.04, duration: 0.75 }}
            className="group overflow-hidden rounded-[1.4rem] bg-ivory shadow-[0_18px_50px_rgba(74,15,31,.08)]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <LocalImage src={item.image} alt={`${item.name} bouquet collection`} className="transition duration-700 group-hover:scale-105" sizes="(min-width:1280px) 25vw, (min-width:768px) 50vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-wine/55 via-transparent to-transparent opacity-70" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-cormorant text-3xl leading-none text-wine">{item.name}</h3>
                <ArrowUpRight className="mt-1 shrink-0 text-rosegold transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="mt-4 min-h-20 text-sm leading-6 text-charcoal/68">{item.tone}</p>
              <div className="mt-5 flex items-center justify-between">
                <a href="#contact" className="text-sm font-semibold text-wine underline decoration-rosegold/50 underline-offset-4">
                  Explore
                </a>
                <a
                  href={`https://wa.me/9724639134?text=${encodeURIComponent(
                    `Hi! I would like to inquire about the pricing and design options for the "${item.name}" collection.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold uppercase tracking-wider text-rosegold hover:text-wine transition duration-300"
                >
                  Inquire
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
