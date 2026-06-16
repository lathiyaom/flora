import { Check } from "lucide-react";
import { commissions } from "@/data/site";
import { commissionInquiry } from "@/lib/whatsapp";
import { Reveal } from "@/components/motion/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

export function Commissions() {
  return (
    <Section
      id="commissions"
      eyebrow="Commissions"
      title="Every piece is made for your story."
      subtitle="Each bouquet is made to order. Share the occasion, colors, and feeling—the studio will guide you from the first talk to the finished keepsake."
      tone="alt"
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {commissions.map((tier, index) => (
          <Reveal
            key={tier.name}
            delay={index * 0.05}
            as="article"
            className={cn(
              "rounded-[1.35rem] border p-7 transition duration-500",
              index === 2
                ? "border-rosegold/40 bg-wine text-ivory shadow-luxury"
                : "border-wine/10 bg-white/55 text-charcoal hover:border-wine/20 hover:shadow-[0_20px_50px_rgba(74,15,31,.06)]"
            )}
          >
            <p
              className={cn(
                "text-[0.65rem] font-semibold uppercase tracking-[0.28em]",
                index === 2 ? "text-champagne" : "text-wine/50"
              )}
            >
              {tier.best}
            </p>
            <h3 className="mt-6 font-cormorant text-4xl leading-none tracking-tight">{tier.name}</h3>
            <p className={cn("mt-5 min-h-20 text-sm leading-relaxed", index === 2 ? "text-ivory/72" : "text-charcoal/68")}>
              {tier.detail}
            </p>
            <div className="mt-7 flex items-center gap-3 text-sm">
              <Check size={16} aria-hidden />
              <span>Handmade to order</span>
            </div>
            <a
              href={commissionInquiry(tier.name)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "mt-6 block w-full rounded-full py-3 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] transition duration-300",
                index === 2
                  ? "bg-ivory text-wine hover:bg-champagne"
                  : "bg-wine text-ivory hover:bg-wine-light"
              )}
            >
              Begin commission
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-12">
        <MagneticButton href="#contact">Talk to the studio</MagneticButton>
      </Reveal>
    </Section>
  );
}
