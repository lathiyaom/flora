"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/site";
import { Section } from "@/components/ui/section";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <Section eyebrow="FAQ" title="Details, softly answered.">
      <div className="mx-auto max-w-4xl divide-y divide-wine/10">
        {faqs.map(([question, answer], index) => (
          <div key={question}>
            <button type="button" onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-6 py-7 text-left">
              <span className="font-dm text-2xl text-wine">{question}</span>
              <Plus className={`shrink-0 text-rosegold transition ${open === index ? "rotate-45" : ""}`} />
            </button>
            <AnimatePresence>
              {open === index && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <p className="pb-7 text-lg leading-8 text-charcoal/68">{answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
}
