"use client";

import { Mail, MapPin, MessageCircle } from "lucide-react";
import { socials } from "@/data/site";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Section } from "@/components/ui/section";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Tell us what love should look like.">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.6rem] bg-white/62 p-8 shadow-[0_20px_60px_rgba(74,15,31,.08)] md:p-10">
          <p className="max-w-2xl text-xl leading-9 text-charcoal/72">
            Whether it is a wedding bouquet, a Valentine&apos;s Day gesture, a corporate suite, or a private commission, the atelier begins with a story.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href="mailto:hello@eternalpetal.com">Email the Atelier</MagneticButton>
            <MagneticButton href={socials[0].href} variant="light">WhatsApp</MagneticButton>
          </div>
        </div>
        <div className="grid gap-4">
          <Info icon={Mail} title="Email" body="hello@eternalpetal.com" />
          <Info icon={MessageCircle} title="WhatsApp" body="+972 463 9134" />
          <Info icon={MapPin} title="Atelier" body="Made by hand, shipping worldwide" />
        </div>
      </div>
    </Section>
  );
}

function Info({ icon: Icon, title, body }: { icon: typeof Mail; title: string; body: string }) {
  return (
    <div className="flex items-center gap-5 rounded-[1.2rem] border border-wine/10 bg-ivory/70 p-6">
      <div className="grid h-12 w-12 place-items-center rounded-full bg-wine text-ivory">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-wine/46">{title}</p>
        <p className="mt-1 font-medium text-charcoal">{body}</p>
      </div>
    </div>
  );
}
