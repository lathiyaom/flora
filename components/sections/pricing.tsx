"use client";

import { Check } from "lucide-react";
import { tiers } from "@/data/site";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Section } from "@/components/ui/section";

export function Pricing() {
  return (
    <Section id="pricing" eyebrow="Collections and pricing" title="Choose the scale of the feeling.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {tiers.map((tier, index) => (
          <article key={tier.name} className={`rounded-[1.3rem] border p-7 ${index === 2 ? "border-rosegold bg-wine text-ivory shadow-luxury" : "border-wine/10 bg-white/58 text-charcoal"}`}>
            <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${index === 2 ? "text-champagne" : "text-wine/50"}`}>{tier.best}</p>
            <h3 className="mt-6 font-cormorant text-4xl leading-none">{tier.name}</h3>
            <p className="mt-5 font-dm text-2xl uppercase tracking-wider">{tier.price}</p>
            <p className={`mt-5 min-h-20 text-sm leading-6 ${index === 2 ? "text-ivory/72" : "text-charcoal/68"}`}>{tier.detail}</p>
            <div className="mt-7 flex items-center gap-3 text-sm">
              <Check size={16} />
              <span>Handmade to order</span>
            </div>
            <a
              href={`https://wa.me/9724639134?text=${encodeURIComponent(
                `Hi! I would like to inquire about commission options for the "${tier.name}" tier.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 block w-full text-center py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition duration-300 ${
                index === 2
                  ? "bg-ivory text-wine hover:bg-champagne"
                  : "bg-wine text-ivory hover:bg-wine-light"
              }`}
            >
              Inquire Tier
            </a>
          </article>
        ))}
      </div>
      <div className="mt-10">
        <MagneticButton href="#contact">Begin a Commission</MagneticButton>
      </div>
    </Section>
  );
}
