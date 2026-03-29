import Link from "next/link";
import { siteConfig } from "@/config/site";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

function HouzzIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.5 3L5 7.5V21h5.5v-6.5H14V21h5V7.5L12.5 3z" />
    </svg>
  );
}

const footerNav = [
  { label: "Projets", href: "/projets" },
  { label: "Services", href: "/services" },
  { label: "À propos", href: "/a-propos" },
  { label: "Processus", href: "/processus" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-dark text-cream border-t border-warmgray/10" role="contentinfo" aria-label="Pied de page">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        {/* Centered vertical layout */}
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Link
            href="/"
            aria-label={`${siteConfig.name} — Accueil`}
            className="text-sm uppercase tracking-[0.2em] font-light text-cream"
          >
            {siteConfig.name}
          </Link>

          {/* Navigation links — single line */}
          <nav className="mt-10 flex flex-wrap justify-center gap-8">
            {footerNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-cream/50 hover:text-gold transition-colors duration-500 font-light tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="mt-10 flex items-center gap-6">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 hover:text-gold transition-colors duration-500"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href={siteConfig.social.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 hover:text-gold transition-colors duration-500"
              aria-label="Pinterest"
            >
              <PinterestIcon />
            </a>
            <a
              href={siteConfig.social.houzz}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 hover:text-gold transition-colors duration-500"
              aria-label="Houzz"
            >
              <HouzzIcon />
            </a>
          </div>

          {/* Legal + Copyright */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-cream/30">
            <Link href="/mentions-legales" className="hover:text-cream/60 transition-colors duration-500">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-cream/60 transition-colors duration-500">
              Confidentialité
            </Link>
          </div>

          <p className="mt-6 text-[11px] text-cream/20">
            &copy; 2026 {siteConfig.legal.companyName}
          </p>
        </div>
      </div>
    </footer>
  );
}
