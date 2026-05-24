import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.instagram.com/flora_.bouquets_/"),
  title: {
    default: "flora_.bouquets_ | Handmade Eternal Flower Bouquets",
    template: "%s | flora_.bouquets_"
  },
  description:
    "flora_.bouquets_ creates luxury handmade pipe cleaner bouquets as eternal floral art for love, weddings, gifting, corporate gestures, and keepsake moments.",
  keywords: [
    "flora_.bouquets_",
    "handmade bouquet",
    "pipe cleaner flowers",
    "luxury flowers",
    "eternal bouquet",
    "wedding bouquet",
    "bespoke floral art"
  ],
  openGraph: {
    title: "flora_.bouquets_ | Eternal Flowers, Handmade by Heart",
    description:
      "Discover sculptural handmade bouquets that hold beauty, memory, and love long after fresh flowers fade.",
    url: "https://www.instagram.com/flora_.bouquets_/",
    siteName: "flora_.bouquets_",
    images: [
      {
        url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=90",
        width: 1600,
        height: 1067,
        alt: "Luxury floral bouquet in warm editorial light"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "flora_.bouquets_ | Eternal Flowers, Handmade by Heart",
    description: "Luxury handmade bouquets for the moments love refuses to let fade."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
