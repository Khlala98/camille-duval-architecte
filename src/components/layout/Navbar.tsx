"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { label: "Projets", href: "/projets" },
  { label: "À propos", href: "/a-propos" },
  { label: "Services", href: "/services" },
  { label: "Processus", href: "/processus" },
  { label: "Journal", href: "/journal" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showDark = !isHome || scrolled;

  return (
    <>
      <nav
        aria-label="Navigation principale"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showDark
            ? "bg-cream/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              aria-label={`${siteConfig.name} — Accueil`}
              className={`font-serif text-xl font-bold tracking-tight transition-colors duration-300 ${
                showDark ? "text-dark" : "text-white"
              }`}
            >
              {siteConfig.name}
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70 ${
                    showDark ? "text-dark" : "text-white"
                  } ${pathname === link.href ? "opacity-70" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:inline-flex bg-gold text-dark rounded-full px-6 py-2 text-sm font-medium tracking-wide hover:bg-gold-dark transition-colors duration-300"
              >
                Contact
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
                aria-label="Ouvrir le menu"
              >
                <span
                  className={`block h-0.5 w-6 transition-colors duration-300 ${
                    showDark ? "bg-dark" : "bg-white"
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 transition-colors duration-300 ${
                    showDark ? "bg-dark" : "bg-white"
                  }`}
                />
                <span
                  className={`block h-0.5 w-4 self-end transition-colors duration-300 ${
                    showDark ? "bg-dark" : "bg-white"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
