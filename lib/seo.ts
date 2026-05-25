import type { Metadata } from "next";
import { absoluteUrl, brand } from "@/data/brand";

export function createMetadata(): Metadata {
  const ogImage = absoluteUrl(brand.ogImage);

  return {
    metadataBase: new URL(brand.siteUrl),
    title: {
      default: `${brand.name} | Handmade Eternal Flower Bouquets`,
      template: `%s | ${brand.name}`
    },
    description: brand.description,
    keywords: [
      brand.name,
      "handmade bouquet",
      "pipe cleaner flowers",
      "luxury eternal flowers",
      "wedding bouquet",
      "bespoke floral art",
      "luxury gifting"
    ],
    alternates: {
      canonical: "/"
    },
    openGraph: {
      title: `${brand.name} | Eternal Flowers, Handmade by Heart`,
      description: brand.description,
      url: absoluteUrl("/"),
      siteName: brand.name,
      images: [
        {
          url: ogImage,
          width: 1920,
          height: 1080,
          alt: `${brand.name} luxury handmade bouquet`
        }
      ],
      locale: brand.locale,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${brand.name} | Eternal Flowers, Handmade by Heart`,
      description: brand.description,
      images: [ogImage]
    },
    robots: {
      index: true,
      follow: true
    }
  };
}
