"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, MessageCircle, Play, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { MediaItem } from "@/data/media-list";
import { mediaItems } from "@/data/media-list";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useLenis } from "@/components/providers/smooth-scroll-provider";
import { galleryInquiry } from "@/lib/whatsapp";
import { luxuryEase } from "@/lib/motion";
import { MediaPlayer } from "@/components/ui/media-player";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "real_flowers_buqutes", label: "Real Flowers" },
  { id: "collections", label: "Collections" },
  { id: "keychain", label: "Petit Charms" },
  { id: "wedding", label: "Wedding" },
  { id: "valentines-day", label: "Valentine's" },
  { id: "corporate", label: "Corporate" },
  { id: "instagram", label: "Instagram" },
  { id: "videos", label: "Videos" }
] as const;

const HEIGHTS = ["h-[380px]", "h-[460px]", "h-[520px]", "h-[400px]"] as const;

export function Gallery() {
  const reduced = usePrefersReducedMotion();
  const lenis = useLenis();
  const [activeTab, setActiveTab] = useState("all");
  const [active, setActive] = useState<MediaItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredItems = useMemo(
    () =>
      mediaItems.filter((item) => {
        if (activeTab === "all") return true;
        if (activeTab === "videos") return item.type === "video";
        return item.category === activeTab;
      }),
    [activeTab]
  );

  const visibleItems = filteredItems.slice(0, visibleCount);

  const activeIndex = active ? filteredItems.findIndex((i) => i.src === active.src) : -1;

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setVisibleCount(12);
    setActive(null);
  };

  const closeLightbox = useCallback(() => setActive(null), []);

  const goTo = useCallback(
    (delta: number) => {
      if (activeIndex < 0 || !filteredItems.length) return;
      const next = (activeIndex + delta + filteredItems.length) % filteredItems.length;
      setActive(filteredItems[next]);
    },
    [activeIndex, filteredItems]
  );

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goTo(1);
      if (e.key === "ArrowLeft") goTo(-1);
    };
    document.body.style.overflow = "hidden";
    lenis?.stop();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [active, closeLightbox, goTo, lenis]);

  return (
    <Section
      id="gallery"
      eyebrow="Studio archive"
      title="A gallery of handmade love."
      subtitle="Careful studies from the studio—each piece made by hand for love, celebration, and keepsakes."
      tone="alt"
      className="overflow-hidden"
    >
      <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3" role="tablist" aria-label="Gallery categories">
        {CATEGORIES.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={cn(
              "rounded-full px-5 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] transition-all duration-500",
              activeTab === tab.id
                ? "bg-wine text-ivory shadow-luxury"
                : "border border-wine/10 bg-white/50 text-wine/70 hover:border-wine/20 hover:bg-white/80"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="masonry min-h-[320px]">
        <AnimatePresence mode="sync">
          {visibleItems.map((item, index) => (
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.025, 0.18), ease: luxuryEase }}
              key={item.src}
              role="button"
              tabIndex={0}
              onClick={() => setActive(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(item);
                }
              }}
              className="masonry-item group relative block w-full cursor-pointer overflow-hidden rounded-[1.25rem] text-left shadow-[0_24px_70px_rgba(74,15,31,.08)] ring-1 ring-wine/5 transition duration-500 hover:shadow-luxury hover:ring-wine/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosegold"
              aria-label={`View ${item.name}`}
            >
              <div className={cn("relative overflow-hidden", HEIGHTS[index % HEIGHTS.length])}>
                <MediaPlayer
                  src={item.src}
                  type={item.type}
                  alt={item.name}
                  mode="thumbnail"
                  sizes="(min-width:1280px) 25vw, (min-width:768px) 33vw, 50vw"
                />
                {item.type === "video" && (
                  <div className="pointer-events-none absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-wine/85 text-ivory backdrop-blur-md">
                    <Play size={14} fill="currentColor" className="ml-0.5" aria-hidden />
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-wine/80 via-wine/35 to-transparent px-4 pb-4 pt-12">
                  <p className="font-cormorant text-xl leading-tight text-ivory sm:text-2xl">{item.name}</p>
                  <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-champagne/80">
                    {item.category === "keychain" ? "Petit Charms" : item.category.replace(/-/g, " ")}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {visibleCount < filteredItems.length && (
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((n) => n + 12)}
            className="group inline-flex items-center gap-2 rounded-full border border-wine/15 bg-white/45 px-8 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-wine transition duration-500 hover:border-wine hover:bg-wine hover:text-ivory hover:shadow-luxury"
          >
            View more creations
            <ChevronDown size={14} className="transition group-hover:translate-y-0.5" aria-hidden />
          </button>
        </div>
      )}

      <AnimatePresence>
        {active && activeIndex >= 0 && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${active.name} — gallery view`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[90] grid place-items-center bg-wine/90 p-4 backdrop-blur-2xl sm:p-6"
            onClick={closeLightbox}
          >
            <button
              type="button"
              aria-label="Close gallery"
              className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-ivory text-wine transition hover:scale-105 sm:right-6 sm:top-6"
              onClick={closeLightbox}
            >
              <X size={18} />
            </button>

            {filteredItems.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(-1);
                  }}
                  className="absolute left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-ivory/90 text-wine shadow-lg transition hover:bg-ivory sm:left-6"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(1);
                  }}
                  className="absolute right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-ivory/90 text-wine shadow-lg transition hover:bg-ivory sm:right-6"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            <motion.div
              key={active.src}
              initial={reduced ? false : { opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, scale: 0.98, y: 12 }}
              transition={{ duration: 0.5, ease: luxuryEase }}
              className="relative flex max-h-[min(90vh,960px)] w-full max-w-6xl flex-col overflow-hidden rounded-[1.5rem] bg-charcoal shadow-luxury-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex h-[min(60vh,720px)] min-h-[320px] w-full shrink-0 items-center justify-center bg-charcoal sm:min-h-[420px]">
                <div className="absolute inset-0">
                  <MediaPlayer src={active.src} type={active.type} alt={active.name} mode="player" sizes="100vw" />
                </div>
              </div>
              <div className="relative z-10 flex shrink-0 flex-col gap-4 border-t border-ivory/10 bg-wine p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-champagne/90">
                    {active.category.replace("-", " ")} · {activeIndex + 1} / {filteredItems.length}
                  </p>
                  <h3 className="mt-1 font-cormorant text-2xl text-ivory sm:text-3xl">{active.name}</h3>
                </div>
                <a
                  href={galleryInquiry(active.name, active.src)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-ivory px-6 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-wine transition hover:bg-champagne"
                >
                  <MessageCircle size={16} aria-hidden />
                  Talk to the studio
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
