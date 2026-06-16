import { brand } from "@/data/brand";
import { socials, iconPaths } from "@/data/site";
import { Reveal } from "@/components/motion/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Section } from "@/components/ui/section";
import { Mail, MapPin } from "lucide-react";

export function Contact() {
  const whatsapp = socials.find((s) => s.label === "WhatsApp");

  return (
    <Section id="contact" eyebrow="Contact" title="Tell us how love looks to you.">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="glass-panel rounded-[1.75rem] p-8 md:p-10">
          <p className="max-w-2xl text-xl leading-[1.75] text-charcoal/72">
            Whether it is a wedding bouquet, a Valentine&apos;s gift, a work order, or a private custom piece, the studio
            starts with your story.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href={`mailto:${brand.email}`}>Email the studio</MagneticButton>
            {whatsapp && <MagneticButton href={whatsapp.href} variant="light">WhatsApp</MagneticButton>}
          </div>
        </Reveal>
        <div className="grid gap-4">
          <Info icon={Mail} title="Email" body={brand.email} />
          <Info iconPath={iconPaths.whatsapp} title="WhatsApp" body={brand.phoneDisplay} />
          <Info icon={MapPin} title="Atelier" body="Made by hand, shipping worldwide" />
        </div>
      </div>
    </Section>
  );
}

function Info({ 
  icon: Icon, 
  iconPath,
  title, 
  body 
}: { 
  icon?: typeof Mail; 
  iconPath?: string;
  title: string; 
  body: string 
}) {
  return (
    <Reveal className="flex items-center gap-5 rounded-[1.25rem] border border-wine/8 bg-ivory/75 p-6">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-wine text-ivory">
        {iconPath ? (
          <img src={iconPath} alt={title} className="h-5 w-5" />
        ) : Icon ? (
          <Icon size={18} aria-hidden />
        ) : null}
      </div>
      <div>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-wine/45">{title}</p>
        <p className="mt-1 font-medium text-charcoal">{body}</p>
      </div>
    </Reveal>
  );
}
