import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { siteConfig } from "@/config/site";
import { ProjectsGrid } from "./ProjectsGrid";
import { BreadcrumbJsonLd } from "@/components/layout/JsonLd";

export const metadata: Metadata = {
  title: `Réalisations — Projets d'architecture intérieure | ${siteConfig.name}`,
  description: `Découvrez les réalisations de ${siteConfig.name}, architecte d'intérieur à ${siteConfig.contact.city}. Projets résidentiels, commerciaux et hôteliers haut de gamme.`,
  openGraph: {
    title: `Réalisations | ${siteConfig.name}`,
    description: `Projets d'architecture intérieure par ${siteConfig.name} à ${siteConfig.contact.city}.`,
    url: `${siteConfig.url}/projets`,
  },
};

export default function ProjetsPage() {
  return (
    <>
    <BreadcrumbJsonLd items={[{ name: "Accueil", href: "/" }, { name: "Projets", href: "/projets" }]} />
    <main className="pt-32 pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="font-serif text-hero text-dark tracking-tight font-normal">Réalisations</h1>
          <p className="mt-6 text-warmgray font-light tracking-wide max-w-xl mx-auto leading-relaxed">
            Chaque projet est une histoire unique, un espace transformé avec
            soin et passion.
          </p>
        </div>

        <ProjectsGrid projects={projects} />
      </div>
    </main>
    </>
  );
}
