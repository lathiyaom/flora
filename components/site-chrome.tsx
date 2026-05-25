"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { brand } from "@/data/brand";
import { navItems, socials } from "@/data/site";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

export function SiteChrome({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const whatsapp = socials.find((s) => s.label === "WhatsApp");

  return (
    <>
      {!reduced && (
        <motion.div
          style={{ scaleX }}
          className="fixed left-0 top-0 z-[70] h-[2px] w-full origin-left bg-gradient-to-r from-rosegold via-champagne to-rosegold"
          aria-hidden
        />
      )}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled ? "glass-nav shadow-[0_8px_40px_rgba(74,15,31,.06)]" : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 md:h-20 md:px-8"
          aria-label="Primary"
        >
          <a href="#" className="font-cormorant text-2xl font-semibold tracking-tight text-wine md:text-3xl">
            {brand.name}
          </a>
          <div className="hidden items-center gap-9 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-wide text-charcoal/68 transition-colors duration-300 hover:text-wine"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#corporate"
            className="hidden rounded-full border border-wine/12 bg-white/40 px-5 py-2.5 text-sm font-medium text-wine backdrop-blur-md transition duration-300 hover:border-wine/25 hover:bg-wine hover:text-ivory md:inline-flex"
          >
            Bespoke Enquiry
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-wine/12 bg-white/55 text-wine backdrop-blur-md md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
        {open && (
          <div id="mobile-nav" className="border-t border-champagne/50 bg-ivory/95 px-5 pb-8 pt-2 backdrop-blur-xl md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-wine/8 py-4 text-base font-medium text-wine"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#corporate"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-full bg-wine py-3.5 text-center text-sm font-semibold text-ivory"
            >
              Bespoke Enquiry
            </a>
          </div>
        )}
      </header>
      {!reduced && <DesktopCursor />}
      <main id="main">{children}</main>
      {whatsapp && (
        <a
          href={whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-wine text-ivory shadow-luxury transition duration-300 hover:scale-[1.03] hover:shadow-luxury-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosegold md:bottom-8 md:right-8"
          aria-label="Chat on WhatsApp"
        >
          {(() => {
            const Icon = whatsapp.icon;
            return <Icon size={22} />;
          })()}
        </a>
      )}
    </>
  );
}

function DesktopCursor() {
  const [points, setPoints] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let id = 0;
    const move = (event: MouseEvent) => {
      const next = { x: event.clientX, y: event.clientY, id: id++ };
      setPoints((items) => [...items.slice(-5), next]);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block" aria-hidden>
      {points.map((point, index) => (
        <motion.span
          key={point.id}
          initial={{ opacity: 0.28, scale: 0.15 }}
          animate={{ opacity: 0, scale: 1.4 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="absolute h-1.5 w-1.5 rounded-full bg-rosegold/80"
          style={{
            left: point.x,
            top: point.y,
            translateX: "-50%",
            translateY: "-50%",
            filter: `blur(${index * 0.35}px)`
          }}
        />
      ))}
    </div>
  );
}
