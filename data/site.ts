import {
  BadgeCheck,
  Box,
  Gem,
  Globe2,
  Heart,
  Infinity
} from "lucide-react";
import { brand } from "@/data/brand";
import { whatsappUrl } from "@/lib/whatsapp";

export const iconPaths = {
  whatsapp: "/icons/whatsapp.png",
  instagram: "/icons/instagram.png"
};

export const navItems = [
  { label: "Story", href: "#story" },
  { label: "Real Flowers", href: "#real-flowers" },
  { label: "Collections", href: "#collections" },
  { label: "Charms", href: "#charms" },
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
    tone: "Soft pink bouquets for anniversaries, proposals, and daily love.",
    image: "/images/collections/099f26e7ac091b04ac87c30b96c55afa.jpg"
  },
  {
    name: "Eternal Vows",
    slug: "eternal-vows",
    tone: "Wedding bouquets and keepsakes made to last beyond the day.",
    image: "/images/wedding/68bc7315d093c80c2189fe8ab2de47aa.jpg"
  },
  {
    name: "Opulent Legacy",
    slug: "opulent-legacy",
    tone: "Bold art-like arrangements for big gifts and collectors.",
    image: "/images/collections/130e9522700e1d8f644e26551ac0a4b2.jpg"
  },
  {
    name: "Tender Moments",
    slug: "tender-moments",
    tone: "Small bouquets for desks, bedside tables, and calm moments.",
    image: "/images/collections/2d72ea8f1fd10a7567fd34cbf15a6f24.jpg"
  },
  {
    name: "Creator's Studio",
    slug: "creators-studio",
    tone: "DIY kits with chosen materials, color sets, and simple steps.",
    image: "/images/collections/4858439501fbb2d53d94cb204234a423.jpg"
  },
  {
    name: "Timeless Gestures",
    slug: "timeless-gestures",
    tone: "Work gifts for launches, clients, and leaders.",
    image: "/images/corporate/035f8a925ccb65eb3abff27ec368a96f.jpg"
  },
  {
    name: "Festival of Hearts",
    slug: "festival-of-hearts",
    tone: "Seasonal love in wine, pink, light gold, and rose.",
    image: "/images/valentines-day/0b7f2f932986c81e565da7d69831666b.jpg"
  },
  {
    name: "Bespoke Creations",
    slug: "bespoke-creations",
    tone: "One-of-a-kind bouquets made from a memory, color, or love story.",
    image: "/images/collections/4b0d1dcc2b5011a0a93817dd4ce4c232.jpg"
  },
  {
    name: "Garden Gatherings",
    slug: "garden-gatherings",
    tone: "Real flower bouquets arranged with the natural movement of a just-picked garden.",
    image: "/images/real_flowers_buqutes/0eb705004910efa54e401e228901b4cd.jpg"
  },
  {
    name: "Seasonal Stems",
    slug: "seasonal-stems",
    tone: "Fresh seasonal flowers selected for color, texture, and the feeling of the moment.",
    image: "/images/real_flowers_buqutes/11a5df6b4f3a1b618e7ed9c705be19af.jpg"
  },
  {
    name: "Wildflower Notes",
    slug: "wildflower-notes",
    tone: "Loose, expressive arrangements that keep the charm of flowers gathered in the open air.",
    image: "/images/real_flowers_buqutes/12fb08946804443e50788aba6947e3bd.jpg"
  },
  {
    name: "Botanical Ceremony",
    slug: "botanical-ceremony",
    tone: "Real blooms for weddings, celebrations, and the photographs you will return to.",
    image: "/images/real_flowers_buqutes/1ab5583a6bf76de8096fde8a457b0c32.jpg"
  },
  {
    name: "The Flower Table",
    slug: "the-flower-table",
    tone: "Centerpieces and statement bunches that bring a room to life without losing softness.",
    image: "/images/real_flowers_buqutes/24d103b39a024f05f1286e7453e25483.jpg"
  },
  {
    name: "Petal Keepsakes",
    slug: "petal-keepsakes",
    tone: "Thoughtful real-flower gifts made for birthdays, thank-yous, and quiet milestones.",
    image: "/images/real_flowers_buqutes/263e77761b2bdc98e84ca93e2e9aa1ce.jpg"
  },
  {
    name: "Rose Room",
    slug: "rose-room",
    tone: "Romantic roses and rich botanical color for gestures that deserve to be remembered.",
    image: "/images/real_flowers_buqutes/29b5e352f409873798ef38df85f436f7.jpg"
  },
  {
    name: "Morning Bloom",
    slug: "morning-bloom",
    tone: "Light, airy flowers for a fresh beginning, a new home, or an ordinary day made special.",
    image: "/images/real_flowers_buqutes/3142a84c0b3fcddd685f3f4a6197c339.jpg"
  }
];

/** Gallery alt captions — used by generate-media-list.js */
export const galleryCaptions: Record<string, string> = {
  "/images/collections/4b7f18fd6f3082e6964f22b510983348.jpg": "A pink rose kept in bloom",
  "/images/collections/4bebbaed489330a5dbe4e43bdd07d1bb.jpg": "Champagne stems set like art",
  "/images/collections/500cc932e86045579b27f4c0b796c33a.jpg": "A handmade bridal keepsake",
  "/images/collections/5b1e51e610ca7a3f6b07c23405b67c3f.jpg": "Wine red petals for a night gift",
  "/images/valentines-day/335537dc9e68a0302d744d48637fafb3.jpg": "Studio light on the soft handmade details",
  "/images/valentines-day/4097982f80c4545456459fcb25bdc1e1.jpg": "Studio light on the soft handmade details",
  "/images/valentines-day/59315cf2d82ffca396fbdea6aa4a44d8.jpg": "A keepsake bouquet wrapped in soft ivory",
  "/images/valentines-day/905dd639db017f29bc39e9bb8411e67d.jpg": "Seasonal romance made softly"
};

export const why = [
  { icon: Infinity, title: "Forever Blooming", body: "Each petal keeps its shape, color, and meaning for a long time." },
  { icon: Heart, title: "Handcrafted with Soul", body: "No two bouquets are the same. Every stem shows the maker's care and attention." },
  { icon: Box, title: "Thoughtfully Packaged", body: "The box is wrapped with soft ivory and a note to make opening feel special." },
  { icon: Globe2, title: "Ships Worldwide", body: "Made for safe shipping anywhere, and arrival that feels special from the first look." },
  { icon: BadgeCheck, title: "Made for Memories", body: "A special alternative to fresh flowers for proposals, weddings, milestones, and keepsakes." }
];

export const testimonials = [
  {
    quote: "I bought it for our first anniversary. She cried before opening the card. It felt more personal than flowers.",
    name: "Amelia R.",
    location: "New York",
    image: "/images/wedding/11c5185375f68959d98ab2080d678fc8.jpg"
  },
  {
    quote: "Our wedding bouquet became part of our home. Guests still ask who made it.",
    name: "Maya & Julien",
    location: "Paris",
    image: "/images/wedding/878cdeda675fb8e620960b76b6c3bf85.jpg"
  },
  {
    quote: "We ordered 80 gifts for clients. The packaging, detail, and their reaction were amazing.",
    name: "Noor S.",
    location: "Dubai",
    image: "/images/instagram/b201a62cb59786445b4d6af0689e728f.jpg"
  }
];

export const process = [
  { title: "Palette Ritual", body: "We begin with mood, event, and feeling, choosing colors that keep the memory.", image: "/images/corporate/2786570c117c22fc65d20efe7646047e.jpg" },
  { title: "Petal Sculpting", body: "Every pipe cleaner is curved, layered, and softened by hand until it looks like a flower.", image: "/images/corporate/8c97142718d7b74a042fa6df3c94eaa7.jpg" },
  { title: "Bouquet Composition", body: "Stems are balanced like art, with shape, height, and feeling.", image: "/images/corporate/96308920f10d9eff9899f35ddd8401f1.jpg" },
  { title: "Gift Ceremony", body: "The final bouquet is wrapped, protected, and ready for its first special moment.", image: "/images/corporate/9b99751e42cac6b852bd3925f876c5c4.jpg" }
];

export const commissions = [
  {
    name: "Petite Keepsake",
    detail: "Small bouquets, single stems, and desk pieces made to order.",
    best: "Everyday romance"
  },
  {
    name: "Signature Bouquet",
    detail: "Layered arrangements with nice wrapping and a handwritten note.",
    best: "Anniversaries and gifting"
  },
  {
    name: "Heirloom Atelier",
    detail: "Wedding, proposal, and keepsake pieces made with extra personal detail.",
    best: "Milestone love"
  },
  {
    name: "Maison Bespoke",
    detail: "Private orders, work gifts, and larger custom gifting.",
    best: "One-of-one stories"
  }
];

export const faqs = [
  ["Are these real flowers?", "They are handmade pipe cleaner flowers shaped to look like plants and last for years."],
  ["Do you make small pipe cleaner pieces?", "Yes. Petit Charms are tiny handmade blooms and keepsakes—keychains, bag charms, desk minis, and other small gifts made from pipe cleaners."],
  ["Can I add my own images later?", "Yes. Add your files to the right folder in public/images and use the same file names shown in data/site.ts."],
  ["Do you make wedding bouquets?", "Yes. Eternal Vows is made for bridal bouquets, bridesmaids, corsages, and ceremony gifts."],
  ["Can I request a custom color palette?", "Yes. Bespoke Creations can match a color, dress, invitation, room, or memory."],
  ["Do you support bulk or corporate orders?", "Yes. Timeless Gestures can be used for client gifts, launches, event tables, and keepsakes for leaders."]
];

export const instagram = [
  "/images/instagram/0f3ef2def024c952c2a93cee8db53feb.jpg",
  "/images/instagram/2ea3f61c529f48a4829b3143c0996111.jpg",
  "/images/instagram/94c506f096ac3585b946429749807eed.jpg",
  "/images/instagram/a6f7c3d9ac07888762c0c1ecaaefb86f.jpg"
];

export const socials = [
  { label: "WhatsApp", href: whatsappUrl(`Hello ${brand.name}! I would love to start a conversation.`), iconPath: iconPaths.whatsapp },
  { label: "Instagram", href: brand.instagram, iconPath: iconPaths.instagram },
  { label: "Atelier", href: `mailto:${brand.email}`, icon: Gem }
];
