"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { brand } from "@/data/brand";
import { navItems, socials } from "@/data/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { luxuryEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

const SECTION_IDS = ["story", "collections", "gallery", "commissions", "contact"];

export function SiteChrome({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  const navWithActive = useMemo(
    () =>
      navItems.map((item) => ({
        ...item,
        sectionId: item.href.replace("#", ""),
        isActive: item.href !== "#" && activeSection === item.href.replace("#", "")
      })),
    [activeSection]
  );

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
          <a
            href="#"
            className="font-cormorant text-2xl font-semibold tracking-tight text-wine transition hover:opacity-80 md:text-3xl"
          >
            {brand.name}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navWithActive.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "link-luxury text-sm font-medium tracking-wide transition-colors duration-300",
                  item.isActive ? "text-wine" : "text-charcoal/60 hover:text-wine"
                )}
                aria-current={item.isActive ? "location" : undefined}
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
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: luxuryEase }}
              className="overflow-hidden border-t border-champagne/50 bg-ivory/95 backdrop-blur-xl md:hidden"
            >
              <div className="px-5 pb-8 pt-2">
                {navWithActive.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block border-b border-wine/8 py-4 text-base font-medium",
                      item.isActive ? "text-wine" : "text-charcoal/75"
                    )}
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
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {!reduced && <DesktopCursor />}
      <main id="main">{children}</main>
      {whatsapp && (
        <a
          href={whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group fixed bottom-5 right-5 z-50 flex items-center gap-0 overflow-hidden rounded-full bg-wine text-ivory shadow-luxury transition-all duration-500 hover:gap-3 hover:shadow-luxury-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosegold md:bottom-8 md:right-8"
          aria-label="Chat on WhatsApp"
        >
          <span className="grid h-14 w-14 shrink-0 place-items-center">
            {whatsapp.iconPath ? (
              <img src={whatsapp.iconPath} alt="WhatsApp" className="h-6 w-6" />
            ) : whatsapp.icon ? (
              (() => {
                const Icon = whatsapp.icon;
                return <Icon size={22} />;
              })()
            ) : null}
          </span>
          <span className="max-w-0 overflow-hidden whitespace-nowrap pr-0 text-xs font-semibold uppercase tracking-[0.2em] opacity-0 transition-all duration-500 group-hover:max-w-[9rem] group-hover:pr-5 group-hover:opacity-100">
            Atelier chat
          </span>
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
      setPoints((items) => [...items.slice(-4), next]);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block" aria-hidden>
      {points.map((point, index) => (
        <motion.span
          key={point.id}
          initial={{ opacity: 0.24, scale: 0.12 }}
          animate={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.7, ease: luxuryEase }}
          className="absolute h-1.5 w-1.5 rounded-full bg-rosegold/75"
          style={{
            left: point.x,
            top: point.y,
            translateX: "-50%",
            translateY: "-50%",
            filter: `blur(${index * 0.3}px)`
          }}
        />
      ))}
    </div>
  );
}
