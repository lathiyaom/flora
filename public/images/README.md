# Flora Image Folders

Drop your final images into these folders and keep the same file names referenced in `data/site.ts`.

## Folders

- `hero/` — hero and OG images
- `story/` — about section
- `collections/` — signature collection cards and gallery
- `keychain/` — Petit Charms photos (small pipe-cleaner pieces: keychains, bag charms, desk minis, and more)
- `wedding/`, `valentines-day/`, `corporate/`, `instagram/`, `gallery/` — category archives

After adding images, drop files into `public/images/keychain/` and run `npm run dev` so `generate-media-list.js` refreshes the Gallery and Petit Charms section.

Use `.webp` when possible. If you prefer `.jpg` or `.png`, update the paths in `data/site.ts`.
