"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type LocalImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function LocalImage({ src, alt, className, priority, sizes = "100vw" }: LocalImageProps) {
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
