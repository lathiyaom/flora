import { ArrowUpRight } from "lucide-react";
import { collections } from "@/data/site";
import { collectionInquiry } from "@/lib/whatsapp";
import { Reveal } from "@/components/motion/reveal";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { Section } from "@/components/ui/section";

export function SignatureCollections() {
  return (
    <Section
      id="collections"
      eyebrow="Signature collections"
      title="Compositions for every kind of forever."
      subtitle="Each collection is a mood—composed by hand and made to order for the feeling you want to keep."
      tone="ivory"
    >
      <div className="snap-carousel -mx-5 flex gap-5 overflow-x-auto px-5 pb-3 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-4">
        {collections.map((item, index) => (
          <Reveal
            key={item.slug}
            delay={index * 0.04}
            as="article"
            className="group w-[min(82vw,300px)] shrink-0 snap-center overflow-hidden rounded-[1.35rem] bg-ivory shadow-[0_20px_60px_rgba(74,15,31,.07)] ring-1 ring-wine/5 transition duration-500 hover:shadow-luxury md:w-auto"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <LuxuryImage
                src={item.image}
                alt={`${item.name} bouquet collection`}
                sizes="(min-width:1280px) 25vw, (min-width:768px) 50vw, 85vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine/65 via-wine/5 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full border border-ivory/30 bg-wine/50 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-ivory backdrop-blur-md">
                Collection
              </span>
            </div>
            <div className="p-6 md:p-7">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-cormorant text-3xl leading-none tracking-tight text-wine">{item.name}</h3>
                <ArrowUpRight
                  className="mt-1 shrink-0 text-rosegold transition duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  size={20}
                  aria-hidden
                />
              </div>
              <p className="mt-4 min-h-[4.5rem] text-sm leading-relaxed text-charcoal/65">{item.tone}</p>
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-wine/8 pt-5">
                <a
                  href="#contact"
                  className="link-luxury text-sm font-semibold text-wine"
                >
                  Explore
                </a>
                <a
                  href={collectionInquiry(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-rosegold transition hover:text-wine"
                >
                  Commission
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-center text-[0.65rem] uppercase tracking-[0.24em] text-wine/40 md:hidden">
        Swipe to explore collections
      </p>
    </Section>
  );
}
