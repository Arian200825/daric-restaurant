"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Media — renders an image when available, otherwise an elegant gradient
 * placeholder. If a configured `src` 404s (client hasn't added the file yet),
 * it falls back to the gradient automatically. This keeps the template looking
 * finished with zero image assets, while real images "just work" when dropped in.
 */
export function Media({
  src,
  alt,
  gradient = ["#3a2c1c", "#0c0a09"],
  className,
  imgClassName,
  eager = false,
}: {
  src?: string;
  alt: string;
  gradient?: [string, string];
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  return (
    <div
      className={cn("relative overflow-hidden bg-surface", className)}
      style={
        !showImage
          ? { backgroundImage: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }
          : undefined
      }
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      ) : (
        <span className="sr-only">{alt}</span>
      )}
    </div>
  );
}
