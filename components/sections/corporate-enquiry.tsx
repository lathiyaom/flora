"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { brand } from "@/data/brand";
import { imagePaths } from "@/data/site";
import { corporateInquiry } from "@/lib/whatsapp";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { Section } from "@/components/ui/section";

export function CorporateEnquiry() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const url = corporateInquiry({
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      occasion: String(data.get("occasion") || ""),
      quantity: String(data.get("quantity") || ""),
      message: String(data.get("message") || "")
    });
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("ready");
  };

  return (
    <Section
      id="corporate"
      eyebrow="Corporate and bulk enquiry"
      title="Gifting made to stay."
      className="bg-wine text-ivory"
      inverted
    >
      <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative min-h-[min(480px,55vh)] overflow-hidden rounded-[1.75rem]">
          <LuxuryImage src={imagePaths.customizer} alt="Bespoke bouquet commission preview" sizes="(min-width:1024px) 45vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-wine/85 via-wine/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="font-cormorant text-3xl leading-snug md:text-4xl">Create your color set</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/72">
              Tell us the occasion, quantity, and feeling—we will make a custom set for weddings, launches, and client gifts.
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 rounded-[1.75rem] border border-ivory/10 bg-white/[0.06] p-6 backdrop-blur-md md:p-8"
          aria-label="Corporate enquiry form"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" required />
            <Field label="Email" name="email" placeholder="you@example.com" type="email" required />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Occasion" name="occasion" placeholder="Wedding, client gifts, launch" />
            <Field label="Quantity" name="quantity" placeholder="12 bouquets" />
          </div>
          <label className="grid gap-2 text-sm font-medium text-ivory/85">
            Message
            <textarea
              name="message"
              required
              className="min-h-36 resize-none rounded-2xl border border-ivory/12 bg-ivory/8 px-4 py-3 text-ivory placeholder:text-ivory/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
              placeholder="Tell us the feeling, colors, deadline, and delivery city."
            />
          </label>
          <button
            type="submit"
            className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ivory px-7 py-3 text-sm font-semibold text-wine transition duration-300 hover:bg-champagne focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
          >
            <Send size={16} aria-hidden />
            Send in WhatsApp
          </button>
          {status === "ready" && (
            <p className="text-sm text-champagne/90" role="status">
              Your enquiry opens in WhatsApp—send the message to reach the {brand.name} studio.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-ivory/85">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="h-12 rounded-full border border-ivory/12 bg-ivory/8 px-4 text-ivory placeholder:text-ivory/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
        placeholder={placeholder}
      />
    </label>
  );
}
