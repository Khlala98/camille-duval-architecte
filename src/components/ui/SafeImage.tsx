"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

export function SafeImage({ alt, className, ...props }: ImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-cream ${className ?? ""}`}
        role="img"
        aria-label={alt as string}
        style={props.fill ? { position: "absolute", inset: 0 } : undefined}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C4C4C4"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      </div>
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}
