"use client";

import Lenis from "lenis";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { navItems, socials } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteChrome({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.9 });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <motion.div style={{ scaleX }} className="fixed left-0 top-0 z-[70] h-0.5 w-full origin-left bg-rosegold" />
      <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "glass-nav" : "bg-transparent")}>
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#" className="font-cormorant text-3xl font-semibold text-wine">
            flora_.bouquets_
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-charcoal/70 transition hover:text-wine">
                {item.label}
              </a>
            ))}
          </div>
          <a href="#corporate" className="hidden rounded-full border border-wine/15 px-5 py-2 text-sm font-medium text-wine transition hover:bg-wine hover:text-ivory md:block">
            Bespoke Enquiry
          </a>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-wine/15 bg-white/50 text-wine md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
        {open && (
          <div className="border-t border-champagne/60 bg-ivory px-5 pb-6 md:hidden">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-wine/10 py-4 font-medium text-wine">
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>
      <DesktopCursor />
      <main>{children}</main>
      <a
        href={socials[0].href}
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-wine text-ivory shadow-luxury transition hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        {(() => {
          const Icon = socials[0].icon;
          return <Icon size={22} />;
        })()}
      </a>
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
      setPoints((items) => [...items.slice(-7), next]);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[80] hidden md:block">
      {points.map((point, index) => (
        <motion.span
          key={point.id}
          initial={{ opacity: 0.34, scale: 0.2 }}
          animate={{ opacity: 0, scale: 1.8 }}
          transition={{ duration: 0.9 }}
          className="absolute h-2 w-2 rounded-full bg-rosegold"
          style={{ left: point.x, top: point.y, translateX: "-50%", translateY: "-50%", filter: `blur(${index * 0.4}px)` }}
        />
      ))}
    </div>
  );
}
