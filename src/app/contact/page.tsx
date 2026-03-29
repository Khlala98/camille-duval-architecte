import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MultiStepForm } from "./MultiStepForm";
import { BreadcrumbJsonLd } from "@/components/layout/JsonLd";

export const metadata: Metadata = {
  title: `Contact — Demande de devis gratuit | ${siteConfig.name}`,
  description: `Contactez ${siteConfig.name}, architecte d'intérieur à ${siteConfig.contact.city}. Devis gratuit, consultation personnalisée. Réponse sous 48h.`,
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description: `Demandez un devis gratuit à ${siteConfig.name}, architecte d'intérieur à ${siteConfig.contact.city}.`,
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
    <BreadcrumbJsonLd items={[{ name: "Accueil", href: "/" }, { name: "Contact", href: "/contact" }]} />
    <main className="pt-28 pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="font-serif text-hero text-dark">
              Parlons de votre projet
            </h1>
            <p className="mt-4 text-warmgray max-w-xl mx-auto">
              Remplissez le formulaire ci-dessous et je vous recontacte sous
              48h pour échanger sur votre projet.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <MultiStepForm />
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div>
            <ScrollReveal delay={0.2}>
              <div className="bg-white border border-border rounded-lg p-8 mb-8">
                <h2 className="font-serif text-xl text-dark mb-6">
                  Coordonnées
                </h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C4A265"
                      strokeWidth="1.5"
                      className="shrink-0 mt-0.5"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <div>
                      <p className="text-xs text-warmgray uppercase tracking-wider mb-1">
                        Email
                      </p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-sm text-dark hover:text-gold transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C4A265"
                      strokeWidth="1.5"
                      className="shrink-0 mt-0.5"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <div>
                      <p className="text-xs text-warmgray uppercase tracking-wider mb-1">
                        Téléphone
                      </p>
                      <a
                        href={siteConfig.contact.phoneHref}
                        className="text-sm text-dark hover:text-gold transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C4A265"
                      strokeWidth="1.5"
                      className="shrink-0 mt-0.5"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div>
                      <p className="text-xs text-warmgray uppercase tracking-wider mb-1">
                        Adresse
                      </p>
                      <p className="text-sm text-dark">
                        {siteConfig.contact.address}
                        <br />
                        {siteConfig.contact.postalCode}{" "}
                        {siteConfig.contact.city}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Zones */}
              <div className="bg-white border border-border rounded-lg p-8 mb-8">
                <h2 className="font-serif text-xl text-dark mb-4">
                  Zones d&apos;intervention
                </h2>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.zones.map((zone) => (
                    <span
                      key={zone}
                      className="text-xs text-warmgray border border-border rounded-full px-3 py-1"
                    >
                      {zone}
                    </span>
                  ))}
                </div>
              </div>

              {/* Calendly placeholder */}
              <div className="bg-white border border-border rounded-lg p-8">
                <h2 className="font-serif text-xl text-dark mb-4">
                  Réserver un créneau
                </h2>
                <p className="text-sm text-warmgray mb-4">
                  Préférez un échange en direct ? Réservez directement un
                  créneau dans mon agenda.
                </p>
                <div className="aspect-[4/3] bg-cream border border-border rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-warmgray text-sm mb-2">
                      Calendly
                    </p>
                    <a
                      href={siteConfig.calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex bg-gold text-dark rounded-full px-5 py-2 text-sm font-medium hover:bg-gold-dark transition-colors"
                    >
                      Ouvrir l&apos;agenda
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
