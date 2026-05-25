import { brand } from "@/data/brand";
import { instagram } from "@/data/site";
import { Reveal } from "@/components/motion/reveal";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { Section } from "@/components/ui/section";

export function InstagramFeed() {
  return (
    <Section eyebrow="Atelier notes" title="A glimpse from the studio." className="bg-beige/50">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {instagram.map((src, index) => (
          <Reveal key={src} delay={index * 0.05} as="article" className="group relative aspect-[9/14] overflow-hidden rounded-[1.35rem] shadow-[0_20px_60px_rgba(74,15,31,.08)]">
            <LuxuryImage
              src={src}
              alt={`${brand.name} studio snapshot ${index + 1}`}
              sizes="(min-width:1024px) 25vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wine/70 via-transparent to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />
            <p className="absolute bottom-5 left-5 right-5 font-cormorant text-2xl text-ivory">Atelier snapshot {index + 1}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
