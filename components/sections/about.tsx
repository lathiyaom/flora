import { brand } from "@/data/brand";
import { imagePaths } from "@/data/site";
import { Reveal } from "@/components/motion/reveal";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { Section } from "@/components/ui/section";

export function About() {
  return (
    <Section
      id="story"
      eyebrow="From our hands to yours"
      title="A bouquet should remember how the day felt."
      subtitle="Slow craft, close detail, and designs made to keep meaning, not just look nice."
    >
      <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal className="space-y-7 text-lg leading-[1.8] text-charcoal/72">
          <p>
            {brand.name} starts where fresh flowers stop: to keep a feeling alive. Every stem is twisted, softened,
            curved, and shaped by hand until simple material becomes something lasting and personal.
          </p>
          <p>
            The work is slow on purpose. We study color like memory, shape each petal like a small gift, and wrap every
            bouquet like it already belongs to someone.
          </p>
          <div className="luxury-line mt-10" />
          <div className="grid grid-cols-3 gap-6 pt-4">
            {["Handmade", "Everlasting", "Bespoke"].map((item) => (
              <div key={item}>
                <p className="font-cormorant text-3xl tracking-tight text-wine md:text-4xl">{item}</p>
                <p className="mt-2 text-[0.65rem] uppercase tracking-[0.24em] text-wine/45">Atelier value</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal
          delay={0.08}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-luxury sm:min-h-[480px] lg:min-h-[520px]"
        >
          <LuxuryImage
            src={imagePaths.story}
            alt="Artisan hands shaping handmade flowers"
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="absolute inset-0 h-full min-h-0 w-full"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-wine/30 via-transparent to-transparent" />
          <div className="glass-panel absolute bottom-6 left-6 right-6 z-10 rounded-2xl p-6 md:p-7">
            <p className="font-cormorant text-2xl leading-snug text-wine md:text-3xl">
              Each petal is a small act of devotion.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
