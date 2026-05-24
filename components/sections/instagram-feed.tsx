"use client";

import { instagram } from "@/data/site";
import { LocalImage } from "@/components/ui/local-image";
import { Section } from "@/components/ui/section";

export function InstagramFeed() {
  return (
    <Section eyebrow="Atelier notes" title="A live-feeling glimpse from the studio." className="bg-beige/65">
      <div className="grid gap-5 md:grid-cols-4">
        {instagram.map((src, index) => (
          <article key={src} className="group relative aspect-[9/14] overflow-hidden rounded-[1.4rem] shadow-[0_18px_50px_rgba(74,15,31,.08)]">
            <LocalImage src={src} alt={`flora_.bouquets_ studio snapshot ${index + 1}`} className="transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-wine/65 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 font-dm text-2xl text-ivory">Atelier snapshot {index + 1}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
