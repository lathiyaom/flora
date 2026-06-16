# EternalPetal Web Showroom

This is a fast Next.js static website for **EternalPetal**. It shows handmade pipe cleaner flower bouquets.

It uses React, Next.js, Tailwind CSS, and Framer Motion.

---

## Table of Contents
1. Quick start
2. Image folders
3. Image sizes and formats
4. Change image paths in `data/site.ts`
5. Image fallback behavior
6. Project structure

---

## Quick start

### 1. Install dependencies
```bash
npm install
```

### 2. Run the site locally
```bash
npm run dev
```
Open `http://localhost:3000/flora` in your browser.

### 3. Build the static site
```bash
npm run build
```
The site files will be saved to the `out/` folder.

### 4. Preview the static site
```bash
npx serve out
```

---

## GitHub Pages

1. Push to the `main` branch.
2. Set GitHub Pages source to GitHub Actions.
3. The workflow in `.github/workflows/deploy.yml` builds and deploys the `out/` folder.
4. Your live site will be:
   `https://lathiyaom.github.io/flora/`

> GitHub Pages must serve the `out/` folder. If it serves the repo root, it will show `README.md` instead of the site.

---

## Image folders

Put image files in `public/images/`.

Use this folder layout:

```text
public/
└── images/
    ├── hero/
    │   └── eternalpetal-hero.webp
    ├── story/
    │   └── artisan-hands.webp
    ├── collections/
    │   ├── romantic-whispers.webp
    │   ├── opulent-legacy.webp
    │   ├── tender-moments.webp
    │   ├── creators-studio.webp
    │   ├── bespoke-creations.webp
    │   └── bespoke-customizer.webp
    ├── wedding/
    │   └── eternal-vows.webp
    ├── corporate/
    │   └── timeless-gestures.webp
    ├── valentines-day/
    │   └── festival-of-hearts.webp
    ├── gallery/
    │   ├── petal-study-01.webp
    │   ├── petal-study-02.webp
    │   └── petal-study-08.webp
    ├── testimonials/
    │   ├── amelia.webp
    │   ├── maya-julien.webp
    │   └── noor.webp
    ├── process/
    │   ├── palette-ritual.webp
    │   ├── petal-sculpting.webp
    │   ├── bouquet-composition.webp
    │   └── gift-ceremony.webp
    └── instagram/
        ├── reel-01.webp
        ├── reel-02.webp
        ├── reel-03.webp
        └── reel-04.webp
```

---

## Image sizes and formats

Use WebP for images when possible.

If you need another format:
- `.jpg` or `.jpeg` for photos
- `.png` only for images with transparency

If you change the file extension, update the path in `data/site.ts`.

### Recommended image sizes

- Hero and story images: about `1920 x 1080` or `1000 x 1200`
- Collections and gallery images: about `800 x 1000`
- Process images: about `600 x 800`
- Testimonial avatars: about `300 x 300`

### File size tips

- Keep hero and story images under `300 KB`.
- Keep collections and gallery images under `150 KB`.
- Keep process and testimonial images under `60 KB`.
- Use compression tools like [Squoosh](https://squoosh.app) or [TinyPNG](https://tinypng.com).

---

## Change image paths in code

The site uses `data/site.ts` for image paths.

If you rename a file or change its format, update the matching path in `data/site.ts`.

### Example: change the hero image

```typescript
export const imagePaths = {
  hero: "/flora/images/hero/new-hero-bg.jpg",
  story: "/flora/images/story/artisan-hands.webp",
  customizer: "/flora/images/collections/bespoke-customizer.webp"
};
```

### Example: change a collection image

```typescript
export const collections = [
  {
    name: "Romantic Whispers",
    slug: "romantic-whispers",
    tone: "Soft pink bouquets for anniversaries, proposals, and daily love.",
    image: "/flora/images/collections/my-new-rose-photo.webp"
  }
];
```

---

## Image fallback behavior

If an image file is missing or does not load, the site uses a custom `<LocalImage>` component in `components/ui/local-image.tsx`.

Instead of showing a broken image icon, it shows a smooth gradient background and keeps the page layout stable.

---

## Project structure

- `app/`: Next.js app layout and home page.
- `components/`: UI parts for the page.
  - `sections/`: page sections like Hero, About, Gallery, FAQ, and Contact.
  - `ui/`: reusable UI components.
- `data/site.ts`: text, lists, and image paths.
- `public/`: static assets such as images.
- `next.config.ts`: Next.js settings.
- `tsconfig.json`: TypeScript settings.
