"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type MediaPlayerProps = {
  src: string;
  type: "image" | "video";
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
};

export function MediaPlayer({
  src,
  type,
  alt,
  className,
  priority,
  sizes = "100vw",
  autoPlay = true,
  controls = false,
  muted = true,
  loop = true,
  playsInline = true,
}: MediaPlayerProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex h-full min-h-[220px] w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_30%_20%,rgba(232,199,200,.8),transparent_30%),linear-gradient(135deg,#f8f4f0,#ede4d8_48%,#d4a8a1)]",
          className
        )}
      >
        <div className="h-24 w-24 rounded-full border border-white/60 bg-white/25 shadow-[0_0_80px_rgba(255,255,255,.42)]" />
      </div>
    );
  }

  if (type === "video") {
    return (
      <video
        src={src}
        className={cn("h-full w-full object-cover", className)}
        autoPlay={autoPlay}
        controls={controls}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={cn("object-cover", className)}
      onError={() => setFailed(true)}
    />
  );
}
