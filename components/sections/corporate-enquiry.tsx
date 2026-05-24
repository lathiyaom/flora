"use client";

import { Send } from "lucide-react";
import { imagePaths } from "@/data/site";
import { LocalImage } from "@/components/ui/local-image";
import { Section } from "@/components/ui/section";

export function CorporateEnquiry() {
  return (
    <Section id="corporate" eyebrow="Corporate and bulk enquiry" title="Gifting, elevated into memory." className="bg-wine text-ivory">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[480px] overflow-hidden rounded-[1.6rem]">
          <LocalImage src={imagePaths.customizer} alt="Bespoke bouquet customizer preview" />
          <div className="absolute inset-0 bg-gradient-to-t from-wine/80 to-transparent" />
          <div className="absolute bottom-7 left-7 right-7">
            <p className="font-dm text-3xl">Interactive bouquet customizer</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-ivory/72">A teaser for palette, size, message, occasion, and wrapping selections.</p>
          </div>
        </div>
        <form className="grid gap-4 rounded-[1.6rem] border border-ivory/10 bg-white/[0.06] p-6 backdrop-blur md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name" placeholder="Your name" />
            <Field label="Email" placeholder="you@example.com" type="email" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Occasion" placeholder="Wedding, client gifts, launch" />
            <Field label="Quantity" placeholder="12 bouquets" />
          </div>
          <label className="grid gap-2 text-sm font-medium text-ivory/82">
            Message
            <textarea className="min-h-36 resize-none rounded-2xl border border-ivory/12 bg-ivory/8 px-4 py-3 text-ivory placeholder:text-ivory/38" placeholder="Tell us about the feeling, palette, deadline, and delivery city." />
          </label>
          <button type="button" className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ivory px-7 py-3 text-sm font-semibold text-wine transition hover:bg-champagne">
            <Send size={16} />
            Send Enquiry
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-ivory/82">
      {label}
      <input type={type} className="h-12 rounded-full border border-ivory/12 bg-ivory/8 px-4 text-ivory placeholder:text-ivory/38" placeholder={placeholder} />
    </label>
  );
}
