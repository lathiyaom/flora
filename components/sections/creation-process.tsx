import { process } from "@/data/site";
import { Reveal } from "@/components/motion/reveal";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { Section } from "@/components/ui/section";

export function CreationProcess() {
  return (
    <Section eyebrow="The art of creation" title="Four quiet rituals, one unforgettable object." className="bg-white/40">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {process.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.06} as="article">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.25rem] shadow-[0_18px_50px_rgba(74,15,31,.08)]">
              <LuxuryImage src={step.image} alt={step.title} sizes="(min-width:1280px) 25vw, 50vw" />
            </div>
            <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-rosegold">
              Step {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 font-cormorant text-4xl tracking-tight text-wine">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/68">{step.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
