"use client";

import { LuxuryImage } from "@/components/ui/luxury-image";
import { LazyVideo } from "@/components/ui/lazy-video";
import { cn } from "@/lib/utils";

type MediaPlayerProps = {
  src: string;
  type: "image" | "video";
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  mode?: "thumbnail" | "player";
};

export function MediaPlayer({
  src,
  type,
  alt,
  className,
  priority,
  sizes,
  mode = "thumbnail"
}: MediaPlayerProps) {
  if (type === "video") {
    return <LazyVideo src={src} alt={alt} className={className} mode={mode} autoPlayInPlayer={mode === "player"} />;
  }

  return (
    <LuxuryImage
      src={src}
      alt={alt}
      className={className}
      priority={priority}
      sizes={sizes}
      imageClassName={cn(mode === "player" && "scale-100")}
    />
  );
}
