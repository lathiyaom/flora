"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Play, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { mediaItems } from "@/data/media-list";
import { MediaPlayer } from "@/components/ui/media-player";
import { Section } from "@/components/ui/section";
import { socials } from "@/data/site";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "collections", label: "Collections" },
  { id: "wedding", label: "Wedding" },
  { id: "valentines-day", label: "Valentine's" },
  { id: "corporate", label: "Corporate" },
  { id: "instagram", label: "Instagram" },
  { id: "videos", label: "Videos" }
] as const;

export function Gallery() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [active, setActive] = useState<(typeof mediaItems)[number] | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const whatsappLink = socials.find(s => s.label === "WhatsApp")?.href || "https://wa.me/9724639134";

  // Filter items
  const filteredItems = mediaItems.filter(item => {
    if (activeTab === "all") return true;
    if (activeTab === "videos") return item.type === "video";
    return item.category === activeTab;
  });

  const visibleItems = filteredItems.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setVisibleCount(12); // Reset count when tab changes
  };

  return (
    <Section id="gallery" eyebrow="Interactive gallery" title="A living archive of handmade romance.">
      {/* Category Tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
        {CATEGORIES.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => handleTabChange(tab.id)}
            className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === tab.id
                ? "bg-wine text-ivory shadow-luxury"
                : "bg-white/60 text-wine/70 hover:bg-wine/10 border border-wine/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="masonry min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item, index) => (
            <motion.button
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              type="button"
              key={item.src}
              onClick={() => setActive(item)}
              className="masonry-item group relative block w-full overflow-hidden rounded-[1.2rem] text-left shadow-[0_20px_60px_rgba(74,15,31,.09)] cursor-pointer"
            >
              <div className={index % 3 === 0 ? "relative h-[440px]" : index % 3 === 1 ? "relative h-[340px]" : "relative h-[520px]"}>
                <MediaPlayer 
                  src={item.src} 
                  type={item.type} 
                  alt={item.name} 
                  className="transition duration-700 group-hover:scale-105" 
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                  controls={false}
                />
                
                {/* Video Play Icon Indicator overlay */}
                {item.type === "video" && (
                  <div className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-wine/80 text-ivory backdrop-blur-md shadow-md">
                    <Play size={14} fill="currentColor" className="ml-0.5" />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-wine/70 via-wine/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <p className="absolute bottom-5 left-5 right-5 translate-y-3 font-dm text-2xl text-ivory opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.name}
                </p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More Button */}
      {visibleCount < filteredItems.length && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={handleLoadMore}
            className="group flex items-center gap-2 rounded-full border border-wine/20 bg-white/40 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-wine transition-all duration-300 cursor-pointer hover:bg-wine hover:text-ivory hover:border-wine hover:shadow-luxury"
          >
            <span>View More Creations</span>
            <ChevronDown size={14} className="transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {active && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[90] grid place-items-center bg-wine/85 p-5 backdrop-blur-xl" 
            onClick={() => setActive(null)}
          >
            <button 
              type="button" 
              aria-label="Close gallery" 
              className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-ivory text-wine hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <X size={18} />
            </button>
            <motion.div 
              layoutId={active.src} 
              className="relative h-[80vh] w-full max-w-5xl overflow-hidden rounded-[1.5rem] bg-charcoal/95 flex flex-col justify-end" 
              onClick={(event) => event.stopPropagation()}
            >
              <MediaPlayer 
                src={active.src} 
                type={active.type} 
                alt={active.name} 
                autoPlay={true}
                controls={true}
                muted={active.type === "video" ? false : true} // Play audio if it's a video!
                loop={true}
                playsInline={true}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-wine/95 via-wine/70 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-champagne">
                    {active.category.replace("-", " ")}
                  </span>
                  <h3 className="mt-1 font-dm text-2xl sm:text-3xl text-ivory leading-tight">
                    {active.name}
                  </h3>
                </div>
                
                <a
                  href={`${whatsappLink}?text=${encodeURIComponent(
                    `Hi! I am inquiring about pricing and availability for this creation: "${active.name}" (${active.src})`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-ivory px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-wine shadow-lg hover:bg-champagne hover:scale-[1.02] transition-all duration-300 shrink-0"
                >
                  <MessageCircle size={16} fill="currentColor" />
                  <span>Inquire with Atelier</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
