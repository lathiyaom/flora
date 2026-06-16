/**
 * Main brand identity, SEO, and contact info.
 * Set NEXT_PUBLIC_SITE_URL in production (for GitHub Pages or a custom domain).
 */
export const brand = {
  name: "flora_.bouquets_",
  legalName: "Flora Bouquets Atelier",
  tagline: "Handmade lasting floral art",
  description:
    "Handmade pipe cleaner bouquets that last for love, weddings, gifts, work events, and keepsakes.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lathiyaom.github.io/flora",
  email: "contact.florabouquets@gmail.com",
  phoneDisplay: "+91 97246 39134 · +91 7600 426 330",
  whatsappE164: "917600426330",
  instagram: "https://www.instagram.com/flora_.bouquets_/?hl=en",
  locale: "en_US",
  ogImage: "/images/hero/4f724c847668ae8c650f471476361a5f.jpg",
  address: {
    locality: "Atelier",
    country: "IL"
  }
} as const;

export function absoluteUrl(path = ""): string {
  const base = brand.siteUrl.replace(/\/$/, "");
  if (!path) return `${base}/`;
  return path.startsWith("http") ? path : `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
