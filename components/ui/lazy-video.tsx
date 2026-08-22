"use client";

import { Play } from "lucide-react";
import { useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type LazyVideoProps = {
  src: string;
  alt: string;
  className?: string;
  poster?: string;
  mode?: "thumbnail" | "player";
  autoPlayInPlayer?: boolean;
};

export function LazyVideo({
  src,
  alt,
  className,
  poster,
  mode = "thumbnail",
  autoPlayInPlayer = true
}: LazyVideoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex h-full min-h-[220px] w-full items-center justify-center bg-[linear-gradient(135deg,#f8f4f0,#ede4d8_48%,#d4a8a1)]",
          className
        )}
        role="img"
        aria-label={alt}
      />
    );
  }

  if (mode === "thumbnail") {
    return (
      <div ref={ref} className={cn("relative h-full w-full overflow-hidden", className)} aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#2f2a2a,#4a0f1f)]" />
        {poster ? (
          <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        ) : null}
        <video
          src={src}
          poster={poster}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay={!reduced}
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          onError={() => setFailed(true)}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-wine/90 text-ivory shadow-luxury backdrop-blur-md">
            <Play size={20} fill="currentColor" className="ml-0.5" />
          </span>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-wine/50 via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <div ref={ref} className={cn("relative flex h-full w-full items-center justify-center overflow-hidden bg-charcoal", className)}>
      <video
        src={src}
        poster={poster}
        className="h-full w-full object-contain"
        autoPlay={autoPlayInPlayer && !reduced}
        controls
        muted={false}
        playsInline
        preload="metadata"
        aria-label={alt}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
