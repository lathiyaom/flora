"use client";

import { brand } from "@/data/brand";
import { mediaItems } from "@/data/media-list";
import { petitCharmInquiry } from "@/lib/whatsapp";
import { Reveal } from "@/components/motion/reveal";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Section } from "@/components/ui/section";

const FEATURED_COUNT = 9;
const HERO_SRC = "/images/keychain/image.png";

function charmItems() {
  const fromFolder = mediaItems.filter(
    (item) => item.category === "keychain" && item.type === "image" && item.src !== HERO_SRC
  );
  const hero = mediaItems.find((item) => item.src === HERO_SRC);
  const rest = fromFolder.map((item, index) => ({
    src: item.src,
    name: shortenCharmName(item.name, index + 2)
  }));

  return [
    {
      src: HERO_SRC,
      name: hero ? shortenCharmName(hero.name, 1) : "Sunflower Charm"
    },
    ...rest
  ].filter((item, index, all) => all.findIndex((entry) => entry.src === item.src) === index);
}

function shortenCharmName(name: string, index: number): string {
  if (!name || name.startsWith("Flora:") || name === "Image") {
    return `Petit Charm ${index}`;
  }
  return name;
}

export function PetitCharms() {
  const charms = charmItems();
  const featured = charms.slice(0, FEATURED_COUNT);
  const hasMore = charms.length > FEATURED_COUNT;

  return (
    <Section
      id="charms"
      eyebrow="Petit Charms"
      title="Small blooms, made by hand."
      subtitle="Tiny pipe-cleaner creations—keychains, bag charms, desk minis, and little keepsakes for everyday gifts."
      tone="default"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((item, index) => (
          <Reveal
            key={item.src}
            delay={Math.min(index * 0.04, 0.2)}
            as="article"
            className="group relative aspect-[4/5] overflow-hidden rounded-[1.35rem] shadow-[0_20px_60px_rgba(74,15,31,.08)] ring-1 ring-wine/5 transition duration-500 hover:shadow-luxury hover:ring-wine/15"
          >
            <a
              href={petitCharmInquiry(item.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label={`Order ${item.name} on WhatsApp`}
            />
            <LuxuryImage
              src={item.src}
              alt={`${brand.name} ${item.name}`}
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wine/75 via-wine/10 to-transparent opacity-90 transition duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
              <p className="font-cormorant text-2xl text-ivory md:text-3xl">{item.name}</p>
              <span className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-champagne">
                Order
              </span>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <MagneticButton href={petitCharmInquiry()} target="_blank" rel="noopener noreferrer">
          Order a petit charm
        </MagneticButton>
        {hasMore ? (
          <a
            href="#gallery"
            className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-wine/55 transition hover:text-wine"
          >
            Browse all in gallery
          </a>
        ) : null}
      </div>
    </Section>
  );
}
