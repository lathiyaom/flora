"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type LuxuryImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  reveal?: boolean;
};

export function LuxuryImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw",
  reveal = true
}: LuxuryImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

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
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      {!loaded && <div className="absolute inset-0 image-shimmer" aria-hidden />}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        decoding="async"
        sizes={sizes}
        className={cn(
          "object-cover transition-[opacity,transform] duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)]",
          reveal && "scale-[1.03] group-hover:scale-105",
          loaded ? "opacity-100" : "opacity-0",
          imageClassName
        )}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
