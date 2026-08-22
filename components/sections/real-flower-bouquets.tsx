import { mediaItems } from "@/data/media-list";
import { galleryInquiry } from "@/lib/whatsapp";
import { Reveal } from "@/components/motion/reveal";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Section } from "@/components/ui/section";

export function RealFlowerBouquets() {
  const bouquets = mediaItems.filter(
    (item) => item.category === "real_flowers_buqutes" && item.type === "image"
  );

  return (
    <Section
      id="real-flowers"
      eyebrow="Real flower bouquets"
      title="The natural side of forever."
      subtitle="Fresh flowers, gathered and arranged with the same care as every handmade keepsake. Explore the full botanical archive, then tell the studio what you would love to receive."
      tone="ivory"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {bouquets.map((item, index) => (
          <Reveal
            key={item.src}
            delay={Math.min(index * 0.025, 0.2)}
            as="article"
            className="group relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-wine shadow-[0_20px_60px_rgba(74,15,31,.08)] ring-1 ring-wine/5 transition duration-500 hover:shadow-luxury hover:ring-wine/15"
          >
            <a
              href={galleryInquiry(item.name, item.src)}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label={`Enquire about ${item.name}`}
            />
            <LuxuryImage
              src={item.src}
              alt={`Real flower bouquet ${index + 1}`}
              sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wine/65 via-transparent to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
              <p className="font-cormorant text-2xl leading-none text-ivory md:text-3xl">Real flower {index + 1}</p>
              <span className="shrink-0 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-champagne">
                Enquire
              </span>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <MagneticButton
          href={galleryInquiry("real flower bouquet", bouquets[0]?.src ?? "")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Enquire about real flowers
        </MagneticButton>
        <a href="#gallery" className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-wine/55 transition hover:text-wine">
          Browse the full gallery
        </a>
      </div>
    </Section>
  );
}
