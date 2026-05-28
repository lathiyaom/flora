import {
  BadgeCheck,
  Box,
  Gem,
  Globe2,
  Heart,
  Infinity,
  MessageCircle,
  Sparkles
} from "lucide-react";
import { brand } from "@/data/brand";
import { whatsappUrl } from "@/lib/whatsapp";

export const navItems = [
  { label: "Story", href: "#story" },
  { label: "Collections", href: "#collections" },
  { label: "Gallery", href: "#gallery" },
  { label: "Commissions", href: "#commissions" },
  { label: "Contact", href: "#contact" }
];

export const imagePaths = {
  hero: "/images/hero/4f724c847668ae8c650f471476361a5f.jpg",
  story: "/images/story/596ba07843b8b25ad09bd534e538a475.jpg",
  customizer: "/images/collections/07f36762802a87f5a22b03db12c46d7b.jpg"
};

export const collections = [
  {
    name: "Romantic Whispers",
    slug: "romantic-whispers",
    tone: "Soft blush declarations for anniversaries, proposals, and everyday devotion.",
    image: "/images/collections/099f26e7ac091b04ac87c30b96c55afa.jpg"
  },
  {
    name: "Eternal Vows",
    slug: "eternal-vows",
    tone: "Wedding bouquets and keepsakes crafted to outlive the aisle.",
    image: "/images/wedding/68bc7315d093c80c2189fe8ab2de47aa.jpg"
  },
  {
    name: "Opulent Legacy",
    slug: "opulent-legacy",
    tone: "Sculptural statement arrangements for collectors and grand gestures.",
    image: "/images/collections/130e9522700e1d8f644e26551ac0a4b2.jpg"
  },
  {
    name: "Tender Moments",
    slug: "tender-moments",
    tone: "Mini bouquets for desks, bedside tables, and quiet reminders.",
    image: "/images/collections/2d72ea8f1fd10a7567fd34cbf15a6f24.jpg"
  },
  {
    name: "Creator's Studio",
    slug: "creators-studio",
    tone: "DIY kits with curated materials, palettes, and guided rituals.",
    image: "/images/collections/4858439501fbb2d53d94cb204234a423.jpg"
  },
  {
    name: "Timeless Gestures",
    slug: "timeless-gestures",
    tone: "Corporate editions for launches, client love, and executive gifting.",
    image: "/images/corporate/035f8a925ccb65eb3abff27ec368a96f.jpg"
  },
  {
    name: "Festival of Hearts",
    slug: "festival-of-hearts",
    tone: "Seasonal romance in wine, blush, champagne, and rose gold.",
    image: "/images/valentines-day/0b7f2f932986c81e565da7d69831666b.jpg"
  },
  {
    name: "Bespoke Creations",
    slug: "bespoke-creations",
    tone: "One-of-one bouquets composed around a memory, color, or love story.",
    image: "/images/collections/4b0d1dcc2b5011a0a93817dd4ce4c232.jpg"
  }
];

/** Gallery alt captions — used by generate-media-list.js */
export const galleryCaptions: Record<string, string> = {
  "/images/collections/4b7f18fd6f3082e6964f22b510983348.jpg": "A blush rose held in permanent bloom",
  "/images/collections/4bebbaed489330a5dbe4e43bdd07d1bb.jpg": "Champagne stems arranged like sculpture",
  "/images/collections/500cc932e86045579b27f4c0b796c33a.jpg": "A bridal heirloom made by hand",
  "/images/collections/5b1e51e610ca7a3f6b07c23405b67c3f.jpg": "Wine red petals for evening gifting",
  "/images/valentines-day/335537dc9e68a0302d744d48637fafb3.jpg": "Mini gestures with maximal feeling",
  "/images/valentines-day/4097982f80c4545456459fcb25bdc1e1.jpg": "Studio light on handmade texture",
  "/images/valentines-day/59315cf2d82ffca396fbdea6aa4a44d8.jpg": "A keepsake bouquet wrapped in ivory",
  "/images/valentines-day/905dd639db017f29bc39e9bb8411e67d.jpg": "Seasonal romance, softly composed"
};

export const why = [
  { icon: Infinity, title: "Forever Blooming", body: "Each petal is shaped to keep its form, color, and meaning long after the day has passed." },
  { icon: Heart, title: "Handcrafted with Soul", body: "No two bouquets are identical. Every stem carries the touch, patience, and intention of its maker." },
  { icon: Box, title: "Thoughtfully Packaged", body: "Unboxing is treated as ceremony, with warm ivory wrapping and a message card made for memory." },
  { icon: Globe2, title: "Ships Worldwide", body: "Designed for safe travel, gifting, and arrival that feels considered from first glance." },
  { icon: BadgeCheck, title: "Made for Memories", body: "A luxury alternative to fresh flowers for proposals, weddings, milestones, and keepsakes." }
];

export const testimonials = [
  {
    quote: "I bought it for our first anniversary and she cried before opening the card. It felt personal in a way flowers never have.",
    name: "Amelia R.",
    location: "New York",
    image: "/images/wedding/11c5185375f68959d98ab2080d678fc8.jpg"
  },
  {
    quote: "Our wedding bouquet became a piece of our home. Guests still ask who made it.",
    name: "Maya & Julien",
    location: "Paris",
    image: "/images/wedding/878cdeda675fb8e620960b76b6c3bf85.jpg"
  },
  {
    quote: "We commissioned 80 client gifts. The packaging, detail, and emotional response were extraordinary.",
    name: "Noor S.",
    location: "Dubai",
    image: "/images/instagram/b201a62cb59786445b4d6af0689e728f.jpg"
  }
];

export const process = [
  { title: "Palette Ritual", body: "We begin with tone, occasion, and feeling, choosing shades that hold the memory.", image: "/images/corporate/2786570c117c22fc65d20efe7646047e.jpg" },
  { title: "Petal Sculpting", body: "Every pipe cleaner is curved, layered, and softened by hand until it becomes botanical.", image: "/images/corporate/8c97142718d7b74a042fa6df3c94eaa7.jpg" },
  { title: "Bouquet Composition", body: "Stems are balanced like a still life, with proportion, silhouette, and emotional rhythm.", image: "/images/corporate/96308920f10d9eff9899f35ddd8401f1.jpg" },
  { title: "Gift Ceremony", body: "The finished piece is wrapped, protected, and prepared for its first unforgettable moment.", image: "/images/corporate/9b99751e42cac6b852bd3925f876c5c4.jpg" }
];

export const commissions = [
  {
    name: "Petite Keepsake",
    detail: "Mini bouquets, single-stem gestures, and desk sculptures made to order.",
    best: "Everyday romance"
  },
  {
    name: "Signature Bouquet",
    detail: "Layered arrangements with premium wrapping and a handwritten message card.",
    best: "Anniversaries and gifting"
  },
  {
    name: "Heirloom Atelier",
    detail: "Wedding, proposal, and legacy pieces composed with deeper personalization.",
    best: "Milestone love"
  },
  {
    name: "Maison Bespoke",
    detail: "Private commissions, corporate suites, and considered large-volume gifting.",
    best: "One-of-one stories"
  }
];

export const faqs = [
  ["Are these real flowers?", "They are handmade pipe cleaner flowers, shaped to feel botanical and sculptural while lasting for years."],
  ["Can I add my own images later?", "Yes. Put your files inside the matching folder in public/images and keep the same file names used in data/site.ts."],
  ["Do you make wedding bouquets?", "Yes. Eternal Vows is designed for bridal bouquets, bridesmaid pieces, corsage-style keepsakes, and ceremony gifting."],
  ["Can I request a custom color palette?", "Absolutely. Bespoke Creations can be built around a color, dress, invitation suite, room, or shared memory."],
  ["Do you support bulk or corporate orders?", "Yes. Timeless Gestures supports client gifting, launches, event tables, and executive keepsakes."]
];

export const instagram = [
  "/images/instagram/0f3ef2def024c952c2a93cee8db53feb.jpg",
  "/images/instagram/2ea3f61c529f48a4829b3143c0996111.jpg",
  "/images/instagram/94c506f096ac3585b946429749807eed.jpg",
  "/images/instagram/a6f7c3d9ac07888762c0c1ecaaefb86f.jpg"
];

export const socials = [
  { label: "WhatsApp", href: whatsappUrl(`Hello ${brand.name}! I would love to start a conversation.`), icon: MessageCircle },
  { label: "Instagram", href: brand.instagram, icon: Sparkles },
  { label: "Atelier", href: `mailto:${brand.email}`, icon: Gem }
];
