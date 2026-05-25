# EternalPetal Luxury Web Showroom

A premium, fast, and responsive Next.js static website for **EternalPetal**—a brand showcasing luxury handmade pipe cleaner floral bouquets.

This project is built using React, Next.js, Tailwind CSS (or custom styling config), and Framer Motion, presenting an editorial, high-end aesthetic.

---

## Table of Contents
1. [Quick Start & Commands](#quick-start--commands)
2. [Image Asset Directory Structure](#image-asset-directory-structure)
3. [Image Specifications & Guidelines](#image-specifications--guidelines)
4. [Configuring Images in Code (`data/site.ts`)](#configuring-images-in-code-datasitets)
5. [Automatic Graceful Image Fallbacks](#automatic-graceful-image-fallbacks)
6. [Project Structure](#project-structure)

---

## Quick Start & Commands

To set up the development server or build the website locally:

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### 3. Build & Export the Static Site
```bash
npm run build
npm run export
```
This command compiles the Next.js application and generates a fully-optimized static bundle in the `out/` directory.

> Note: If you are deploying to GitHub Pages, the site content must come from the exported static files in `out/` (or the `docs/` folder / `gh-pages` branch). If only the repository is published without deploying `out/`, GitHub Pages will show the repository README instead of your website.

### 4. Preview the Static Export
To test the exported static site locally, you can use a simple static server:
```bash
npx serve out
```

---

## Image Asset Directory Structure

All image assets are stored in the static public directory: `public/images/`.

To update the images shown on the website, save your new files in their respective folders under `public/images/` using the structure below:

```text
public/
└── images/
    ├── hero/
    │   └── eternalpetal-hero.webp         # Main background image for the top section
    ├── story/
    │   └── artisan-hands.webp             # Image showing the craft/hands in the about section
    ├── collections/
    │   ├── romantic-whispers.webp         # Image for the Romantic Whispers collection card
    │   ├── opulent-legacy.webp           # Image for the Opulent Legacy collection card
    │   ├── tender-moments.webp            # Image for the Tender Moments collection card
    │   ├── creators-studio.webp           # Image for the Creator's Studio DIY kit card
    │   ├── bespoke-creations.webp         # Image for the Bespoke Creations commission card
    │   └── bespoke-customizer.webp        # Card background for custom bouquet selection
    ├── wedding/
    │   └── eternal-vows.webp              # Image for the Eternal Vows wedding collection card
    ├── corporate/
    │   └── timeless-gestures.webp         # Image for the Timeless Gestures corporate card
    ├── valentines-day/
    │   └── festival-of-hearts.webp        # Image for the Festival of Hearts seasonal card
    ├── gallery/
    │   ├── petal-study-01.webp            # High-resolution gallery image 1
    │   ├── petal-study-02.webp            # High-resolution gallery image 2
    │   ├── ...
    │   └── petal-study-08.webp            # High-resolution gallery image 8
    ├── testimonials/
    │   ├── amelia.webp                    # Customer photo (Amelia R.)
    │   ├── maya-julien.webp               # Customer photo (Maya & Julien)
    │   └── noor.webp                      # Customer photo (Noor S.)
    ├── process/
    │   ├── palette-ritual.webp            # Image illustrating Step 1: Palette Ritual
    │   ├── petal-sculpting.webp           # Image illustrating Step 2: Petal Sculpting
    │   ├── bouquet-composition.webp       # Image illustrating Step 3: Bouquet Composition
    │   └── gift-ceremony.webp             # Image illustrating Step 4: Gift Ceremony
    └── instagram/
        ├── reel-01.webp                   # Atelier snapshot image 1 (portrait aspect ratio)
        ├── reel-02.webp                   # Atelier snapshot image 2 (portrait aspect ratio)
        ├── reel-03.webp                   # Atelier snapshot image 3 (portrait aspect ratio)
        └── reel-04.webp                   # Atelier snapshot image 4 (portrait aspect ratio)
```

---

## Image Specifications & Guidelines

To maintain the luxurious editorial aesthetic and quick page loading times, please follow these guidelines when preparing your images:

### 1. Recommended Formats
- **Primary recommendation**: Use **WebP** (`.webp`) for all images. WebP provides exceptional compression with smaller file sizes than JPEG or PNG without losing visible details.
- **Alternatives**: Standard `.jpg` / `.jpeg` (for photography) and `.png` (only if transparency/alpha channel is required). If you use a non-WebP format, make sure to update the file extensions in `data/site.ts`.

### 2. Dimension and Aspect Ratio Chart

| Section / Component | Recommended File Path | Target Dimensions | Aspect Ratio | Visual Style Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Background** | `hero/eternalpetal-hero.webp` | `1920 x 1080 px` | 16:9 | Landscape. Soft background details, works well with the dark wine/rose overlay gradient. |
| **Atelier Story** | `story/artisan-hands.webp` | `1000 x 1200 px` | 5:6 or 3:4 | Vertical Portrait. Close-up photo showing hands shaping flowers or raw materials. |
| **Collections** | `collections/*.webp` | `800 x 1000 px` | 4:5 | Vertical. Showcases individual bouquets isolated or on curated editorial backgrounds. |
| **Gallery Studies** | `gallery/petal-study-*.webp` | `800 x 1000 px` | 4:5 or 3:4 | Vertical. Crisp, detailed macro shots of petals, wrapping, or unique angles. |
| **Creation Process** | `process/*.webp` | `600 x 800 px` | 3:4 | Vertical. Shows step-by-step close-up shots of materials, shaping, wrapping, and finishing. |
| **Atelier Snapshots** | `instagram/reel-*.webp` | `900 x 1400 px` | 9:14 | Tall Portrait. Aesthetic snapshots from the studio, structured like mobile screenshots or stories. |
| **Testimonial Avatars** | `testimonials/*.webp` | `300 x 300 px` | 1:1 (Square) | Rounded / circle crop. Simple portrait or clean headshot of clients/creators. |

### 3. File Size & Optimization Tips
- **Hero & Story**: Keep files under **300 KB** to prevent slow Initial Page Load (LCP).
- **Collections & Gallery**: Keep files under **150 KB** each.
- **Process & Testimonial Avatars**: Keep files under **60 KB** each.
- **Tools for compression**: You can use free web tools like [Squoosh](https://squoosh.app) or [TinyPNG](https://tinypng.com) to compress your WebP/JPEG files before uploading.

---

## Configuring Images in Code (`data/site.ts`)

The website dynamic structure maps images via a central configurations file: `data/site.ts`. 

If you rename files, change file formats, or want to swap images, open [data/site.ts](file:///e:/flora/data/site.ts) and edit the paths.

### Examples:

#### A. Replacing the Hero Image
If you want to use a JPEG file named `new-hero-bg.jpg` instead of the default `.webp` file, save the file to `public/images/hero/new-hero-bg.jpg` and update the mapping in [data/site.ts](file:///e:/flora/data/site.ts):
```typescript
// data/site.ts (around line 20)
export const imagePaths = {
  hero: "/images/hero/new-hero-bg.jpg", // updated path
  story: "/images/story/artisan-hands.webp",
  customizer: "/images/collections/bespoke-customizer.webp"
};
```

#### B. Updating Collections
To change a collection image, edit the matching `image` key inside the `collections` array:
```typescript
// data/site.ts (around line 26)
export const collections = [
  {
    name: "Romantic Whispers",
    slug: "romantic-whispers",
    price: "From $95",
    tone: "Soft blush declarations for anniversaries, proposals, and everyday devotion.",
    image: "/images/collections/my-new-rose-photo.webp" // updated path
  },
  // ...
];
```

---

## Automatic Graceful Image Fallbacks

If a specific image file is not found or fails to load, the site uses a custom `<LocalImage>` component (located in [local-image.tsx](file:///e:/flora/components/ui/local-image.tsx)) to protect the layout.

Instead of showing a broken browser image icon, the component automatically displays a beautiful, smooth **CSS gradient mesh background** (`beige`/`rosegold`/`wine` palette) with a subtle glowing aura overlay. This ensures your website always looks premium, even during content updates!

---

## Project Structure

A brief map of key folders and files in the repository:

- [`app/`](file:///e:/flora/app): Next.js App Router root layout (`layout.tsx`) and home page view (`page.tsx`).
- [`components/`](file:///e:/flora/components):
  - [`sections/`](file:///e:/flora/components/sections): Landing page modules (Hero, About/Story, Collections, Process, Testimonials, FAQ, Gallery, Footer, Contact form, Instagram Snapshots).
  - [`ui/`](file:///e:/flora/components/ui): Reusable premium interface components (buttons, layout wrappers, fallback images).
- [`data/site.ts`](file:///e:/flora/data/site.ts): The central text copy, feature lists, pricing packages, FAQs, and image path mappings.
- [`public/`](file:///e:/flora/public): Contains public-facing static assets (images directory).
- [`next.config.ts`](file:///e:/flora/next.config.ts): Configuration settings for Next.js build and optimization.
- [`tsconfig.json`](file:///e:/flora/tsconfig.json): TypeScript compilation parameters.
