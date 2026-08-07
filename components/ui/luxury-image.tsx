"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type LuxuryImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  reveal?: boolean;
  /** cover crops to fill; contain shows the full image (lightbox) */
  fit?: "cover" | "contain";
};

export function LuxuryImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw",
  reveal = true,
  fit = "cover"
}: LuxuryImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
  }, [src]);

  if (failed) {
    return (
      <div
        className={cn(
          "flex h-full min-h-[220px] w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_30%_20%,rgba(232,199,200,.8),transparent_30%),linear-gradient(135deg,#f8f4f0,#ede4d8_48%,#d4a8a1)]",
          className
        )}
        role="img"
        aria-label={alt}
      >
        <div className="h-24 w-24 rounded-full border border-white/60 bg-white/25 shadow-[0_0_80px_rgba(255,255,255,.42)]" />
      </div>
    );
  }

  return (
    <div className={cn("relative h-full min-h-[220px] w-full overflow-hidden bg-beige/80", className)}>
      {!loaded && <div className="absolute inset-0 image-shimmer bg-beige" aria-hidden />}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        decoding="async"
        sizes={sizes}
        className={cn(
          "transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          fit === "contain" ? "object-contain" : "object-cover",
          reveal && fit === "cover" && "scale-[1.01] group-hover:scale-[1.04]",
          loaded ? "opacity-100" : "opacity-0",
          imageClassName
        )}
        onLoad={() => setLoaded(true)}
        ref={(img) => {
          // Cached images may finish before onLoad attaches — show them anyway.
          if (img?.complete && img.naturalWidth > 0) {
            queueMicrotask(() => setLoaded(true));
          }
        }}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
