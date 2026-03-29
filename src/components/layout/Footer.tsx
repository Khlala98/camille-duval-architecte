import Link from "next/link";
import { siteConfig } from "@/config/site";

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

function HouzzIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
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
    <footer className="bg-dark text-cream" role="contentinfo" aria-label="Pied de page">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo + tagline */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label={`${siteConfig.name} — Accueil`} className="font-serif text-2xl font-bold text-cream">
              {siteConfig.name}
            </Link>
            <p className="mt-4 text-cream/60 text-sm leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/40 mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/40 mb-6">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="hover:text-gold transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="text-cream/50">
                {siteConfig.contact.address}
                <br />
                {siteConfig.contact.postalCode} {siteConfig.contact.city}
              </li>
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/40 mb-6">
              Zones d&apos;intervention
            </h3>
            <div className="flex flex-wrap gap-2">
              {siteConfig.zones.map((zone) => (
                <span
                  key={zone}
                  className="text-xs text-cream/50 border border-cream/10 rounded-full px-3 py-1"
                >
                  {zone}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-cream/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social */}
            <div className="flex items-center gap-5">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={siteConfig.social.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-gold transition-colors"
                aria-label="Pinterest"
              >
                <PinterestIcon />
              </a>
              <a
                href={siteConfig.social.houzz}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-gold transition-colors"
                aria-label="Houzz"
              >
                <HouzzIcon />
              </a>
            </div>

            {/* Legal links */}
            <div className="flex items-center gap-6 text-xs text-cream/40">
              <Link href="/mentions-legales" className="hover:text-cream/70 transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="hover:text-cream/70 transition-colors">
                Confidentialité
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-xs text-cream/30">
              &copy; 2026 {siteConfig.legal.companyName}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
