import { brand } from "@/data/brand";
import { collections, navItems, socials, iconPaths } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-charcoal px-5 py-16 text-ivory md:px-8 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-cormorant text-5xl tracking-tight text-champagne md:text-6xl">{brand.name}</p>
          <p className="mt-5 max-w-md leading-relaxed text-ivory/65">
            Lasting flowers for the gifts that should stay. Handmade, gentle, and quiet.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-rosegold">Navigate</p>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="block py-2 text-ivory/65 transition hover:text-champagne">
              {item.label}
            </a>
          ))}
        </nav>
        <div>
          <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-rosegold">Collections</p>
          {collections.slice(0, 5).map((item) => (
            <a key={item.slug} href="#collections" className="block py-2 text-ivory/65 transition hover:text-champagne">
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="luxury-line mx-auto my-12 max-w-7xl opacity-30" />
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-ivory/50 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
        <div className="flex flex-wrap gap-5">
          {socials.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="transition hover:text-champagne flex items-center gap-2" 
              rel="noopener noreferrer"
              target={item.label !== "Atelier" ? "_blank" : undefined}
            >
              {item.iconPath ? (
                <img src={item.iconPath} alt={item.label} className="h-5 w-5" />
              ) : item.icon ? (
                <item.icon size={18} />
              ) : null}
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
