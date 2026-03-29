import type { Metadata } from "next";
import { getFeaturedProjects } from "@/lib/data";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: `Décoration intérieure en Rhône-Alpes | ${siteConfig.name}`,
  description: `${siteConfig.name}, architecte d'intérieur intervenant dans toute la région Rhône-Alpes : Lyon, Villefranche-sur-Saône, Annecy, Chambéry, Saint-Étienne. Design sur mesure et rénovation haut de gamme.`,
  openGraph: {
    title: `Décoration intérieure en Rhône-Alpes | ${siteConfig.name}`,
    description: `Architecture d'intérieur et décoration haut de gamme en Rhône-Alpes.`,
    url: `${siteConfig.url}/decoration-interieure-rhone-alpes`,
  },
};

export default function DecoRhoneAlpesPage() {
  const featuredProjects = getFeaturedProjects(3);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Décoration intérieure Rhône-Alpes", item: `${siteConfig.url}/decoration-interieure-rhone-alpes` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <main className="pt-28 pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <h1 className="font-serif text-hero text-dark mb-6">
                Décoration intérieure en Rhône-Alpes
              </h1>
              <div className="space-y-5 text-warmgray leading-relaxed">
                <p>
                  Basée à{" "}
                  <strong className="text-dark">{siteConfig.contact.city}</strong>,
                  j&apos;interviens dans l&apos;ensemble de la région Rhône-Alpes
                  pour des projets d&apos;architecture intérieure et de décoration
                  haut de gamme. Mon rayon d&apos;action s&apos;étend de la
                  métropole lyonnaise aux villes et campagnes environnantes, avec
                  une connaissance fine des spécificités locales.
                </p>
                <p>
                  À <strong className="text-dark">Villefranche-sur-Saône</strong>{" "}
                  et dans le <strong className="text-dark">Beaujolais</strong>, je
                  rénove des maisons de caractère en pierres dorées, alliant le
                  cachet de la pierre locale à un design contemporain. Du côté
                  d&apos;<strong className="text-dark">Annecy</strong>, je conçois
                  des intérieurs qui dialoguent avec le paysage lacustre — bois
                  naturels, teintes minérales et grandes ouvertures.
                </p>
                <p>
                  À <strong className="text-dark">Chambéry</strong>, mes projets
                  s&apos;inscrivent dans l&apos;histoire architecturale savoyarde :
                  rénovation d&apos;appartements dans le centre historique,
                  aménagement de chalets de montagne ou création d&apos;espaces
                  commerciaux. Et à{" "}
                  <strong className="text-dark">Saint-Étienne</strong>, ville de
                  design par excellence, je puise dans l&apos;héritage industriel
                  pour créer des intérieurs contemporains au caractère affirmé.
                </p>
                <p>
                  Chaque région a son identité, ses matériaux, sa lumière. Mon rôle
                  est de les comprendre et de les sublimer dans un design sur mesure
                  qui s&apos;ancre dans son territoire. Que ce soit pour une maison
                  dans les{" "}
                  <strong className="text-dark">Monts d&apos;Or</strong>, un
                  appartement à{" "}
                  <strong className="text-dark">Villeurbanne</strong> ou un chalet à{" "}
                  <strong className="text-dark">Megève</strong>, j&apos;apporte la
                  même exigence et la même passion.
                </p>
                <p>
                  Mon accompagnement est complet : de la première visite au suivi
                  de chantier, je gère votre projet avec rigueur et créativité,
                  en m&apos;appuyant sur un réseau d&apos;artisans qualifiés dans
                  toute la région.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Projects */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="font-serif text-section text-dark mb-8">
                Projets en Rhône-Alpes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    slug={project.slug}
                    category={project.category}
                    mainImage={project.mainImage}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Zones */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="font-serif text-section text-dark mb-6">
                Zones d&apos;intervention
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Lyon et métropole",
                  "Villefranche-sur-Saône",
                  "Annecy",
                  "Chambéry",
                  "Saint-Étienne",
                  "Monts d'Or",
                  "Beaujolais",
                  "Villeurbanne",
                ].map((zone) => (
                  <div
                    key={zone}
                    className="bg-white border border-border rounded-lg px-4 py-3 text-center text-sm text-dark"
                  >
                    {zone}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div className="text-center bg-white border border-border rounded-lg p-10 lg:p-14">
              <h2 className="font-serif text-section text-dark mb-4">
                Un projet en Rhône-Alpes ?
              </h2>
              <p className="text-warmgray mb-8 max-w-md mx-auto">
                Je me déplace dans toute la région pour une première consultation.
                Parlons de votre projet.
              </p>
              <Button href="/contact">Me contacter</Button>
            </div>
          </ScrollReveal>
        </div>
      </main>
    </>
  );
}
