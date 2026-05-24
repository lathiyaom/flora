import { collections, navItems, socials } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-charcoal px-5 py-14 text-ivory md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-cormorant text-5xl text-champagne">flora_.bouquets_</p>
          <p className="mt-5 max-w-md leading-7 text-ivory/66">Eternal flowers for the gestures that deserve to remain. Handmade, poetic, and composed with quiet luxury.</p>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-rosegold">Navigate</p>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="block py-1.5 text-ivory/68 transition hover:text-champagne">
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-rosegold">Collections</p>
          {collections.slice(0, 5).map((item) => (
            <a key={item.slug} href="#collections" className="block py-1.5 text-ivory/68 transition hover:text-champagne">
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="luxury-line mx-auto my-10 max-w-7xl opacity-40" />
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-ivory/52 md:flex-row">
        <p>© 2026 flora_.bouquets_. All rights reserved.</p>
        <div className="flex gap-5">
          {socials.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-champagne">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
