"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with Ken Burns */}
      <div
        className="absolute inset-0 animate-ken-burns bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80')",
        }}
      />

      {/* Gradient overlay — subtle, bottom-heavy */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

      {/* Content with parallax */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <h1 className="font-serif text-hero text-white max-w-5xl text-balance">
          {siteConfig.tagline}
        </h1>
        <p className="mt-8 text-white/70 text-lg font-light tracking-wide max-w-xl leading-relaxed">
          {siteConfig.description}
        </p>
        <Link
          href="/projets"
          className="mt-12 inline-flex items-center gap-2 bg-gold text-dark rounded-full px-10 py-4 text-base font-medium tracking-wide hover:bg-gold-dark transition-colors duration-500"
        >
          Découvrir mes réalisations
        </Link>
      </div>

      {/* Animated chevron */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-50"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
