import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { BreadcrumbJsonLd } from "@/components/layout/JsonLd";

export const metadata: Metadata = {
  title: `À propos — Parcours et philosophie | ${siteConfig.name}`,
  description: `Découvrez le parcours et la philosophie de ${siteConfig.name}, architecte d'intérieur DPLG à ${siteConfig.contact.city}. 12 ans d'expérience, diplômée de l'école Camondo.`,
  openGraph: {
    title: `À propos | ${siteConfig.name}`,
    description: `Parcours et philosophie de ${siteConfig.name}, architecte d'intérieur à ${siteConfig.contact.city}.`,
    url: `${siteConfig.url}/a-propos`,
  },
};

const certifications = [
  { label: "DPLG", full: "Diplômée par le Gouvernement" },
  { label: "CFAI", full: "Conseil Français des Architectes d'Intérieur" },
  {
    label: "Ordre",
    full: "Inscrite à l'Ordre des Architectes d'Intérieur",
  },
];

export default function AProposPage() {
  return (
    <>
    <BreadcrumbJsonLd items={[{ name: "Accueil", href: "/" }, { name: "À propos", href: "/a-propos" }]} />
    <main className="pt-28 pb-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 lg:pb-32">
        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Photo */}
          <ScrollReveal>
            <div className="relative">
              <div className="relative aspect-[3/4] bg-border rounded-lg overflow-hidden">
                {/* Placeholder photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-dark/5 flex items-center justify-center">
                  <span className="font-serif text-2xl text-warmgray/40">
                    Portrait
                  </span>
                </div>
              </div>
              {/* Gold offset frame */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-gold/30 rounded-lg -z-10" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <div>
            <ScrollReveal>
              <h1 className="font-serif text-hero text-dark">
                {siteConfig.name}
              </h1>
              <p className="text-gold font-medium tracking-wide text-sm uppercase mt-2 mb-8">
                Architecte d&apos;intérieur DPLG
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-5 text-warmgray leading-relaxed mb-12">
                <p>
                  Diplômée de l&apos;école Camondo, je conçois des intérieurs
                  depuis plus de 12 ans. Mon parcours m&apos;a menée des
                  grandes agences parisiennes aux ateliers lyonnais, avant de
                  fonder mon propre studio à {siteConfig.contact.city} en
                  2014.
                </p>
                <p>
                  Chaque projet est pour moi une rencontre. J&apos;aime
                  comprendre qui sont mes clients, comment ils vivent, ce qui
                  les fait vibrer. C&apos;est de cette écoute que naissent les
                  espaces les plus justes — ceux où l&apos;on se sent
                  immédiatement chez soi.
                </p>
                <p>
                  Mon approche mêle rigueur technique et sensibilité
                  artistique. Je crois qu&apos;un bel intérieur est celui qui
                  raconte une histoire, qui vieillit bien, et qui s&apos;adapte
                  à la vie de ceux qui l&apos;habitent. Pas de tendances
                  éphémères, mais un design intemporel qui vous ressemble.
                </p>
              </div>
            </ScrollReveal>

            {/* Philosophy */}
            <ScrollReveal delay={0.2}>
              <div className="mb-12">
                <h2 className="font-serif text-2xl text-dark mb-6">
                  Philosophie
                </h2>
                <blockquote className="border-l-2 border-gold pl-6 py-2">
                  <p className="font-serif text-lg italic text-dark/80 leading-relaxed">
                    &laquo;&nbsp;Un intérieur réussi est un espace où chaque
                    détail a du sens, où la lumière dialogue avec les matières,
                    et où l&apos;on ressent, sans pouvoir l&apos;expliquer, que
                    tout est à sa place.&nbsp;&raquo;
                  </p>
                  <footer className="mt-4 text-sm text-warmgray">
                    — {siteConfig.name}
                  </footer>
                </blockquote>
              </div>
            </ScrollReveal>

            {/* Certifications */}
            <ScrollReveal delay={0.3}>
              <div>
                <h2 className="font-serif text-2xl text-dark mb-6">
                  Certifications
                </h2>
                <div className="flex flex-wrap gap-3">
                  {certifications.map((cert) => (
                    <div
                      key={cert.label}
                      className="border border-border rounded-lg px-5 py-3 text-center"
                    >
                      <p className="font-serif text-lg text-gold font-bold">
                        {cert.label}
                      </p>
                      <p className="text-xs text-warmgray mt-1">{cert.full}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <CTABanner />
    </main>
    </>
  );
}
