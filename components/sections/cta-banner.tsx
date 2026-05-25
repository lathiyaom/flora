import { brand } from "@/data/brand";
import { socials } from "@/data/site";
import { Reveal } from "@/components/motion/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function CtaBanner() {
  const whatsapp = socials.find((s) => s.label === "WhatsApp");

  return (
    <section className="section-shell" aria-labelledby="cta-heading">
      <div className="section-inner">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-wine px-8 py-14 text-ivory md:px-14 md:py-20">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-rosegold/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 left-1/4 h-48 w-48 rounded-full bg-champagne/15 blur-3xl"
            aria-hidden
          />
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-champagne/90">Begin your story</p>
          <h2 id="cta-heading" className="mt-4 max-w-3xl font-cormorant text-4xl leading-[0.95] md:text-6xl">
            Ready to gift something that never fades?
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75 md:text-lg">
            Share the moment, palette, and feeling. The {brand.name} atelier will compose a keepsake made to be kept.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            {whatsapp && <MagneticButton href={whatsapp.href}>Start on WhatsApp</MagneticButton>}
            <MagneticButton href="#corporate" variant="light">
              Corporate enquiry
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
