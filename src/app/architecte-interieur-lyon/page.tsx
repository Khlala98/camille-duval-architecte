import type { Metadata } from "next";
import { getProjectsByCity } from "@/lib/data";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: `Architecte d'intérieur à Lyon | ${siteConfig.name}`,
  description: `${siteConfig.name}, architecte d'intérieur à Lyon. Conception et rénovation d'espaces résidentiels et commerciaux dans tous les arrondissements lyonnais : Presqu'île, Confluence, Croix-Rousse, Part-Dieu.`,
  openGraph: {
    title: `Architecte d'intérieur à Lyon | ${siteConfig.name}`,
    description: `${siteConfig.name}, architecte d'intérieur à Lyon. Conception et rénovation d'espaces sur mesure.`,
    url: `${siteConfig.url}/architecte-interieur-lyon`,
  },
};

export default function ArchitecteLyonPage() {
  const lyonProjects = getProjectsByCity("Lyon", 3);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Architecte d'intérieur Lyon", item: `${siteConfig.url}/architecte-interieur-lyon` },
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
                Votre architecte d&apos;intérieur à Lyon
              </h1>
              <div className="space-y-5 text-warmgray leading-relaxed">
                <p>
                  Installée au coeur de Lyon depuis plus de 12 ans, je conçois des
                  intérieurs sur mesure pour des particuliers et des professionnels
                  dans tous les arrondissements de la ville. De la{" "}
                  <strong className="text-dark">Presqu&apos;île</strong> avec ses
                  immeubles haussmanniens aux lofts industriels de la{" "}
                  <strong className="text-dark">Confluence</strong>, chaque quartier
                  lyonnais a son identité — et chaque projet mérite un design qui lui
                  est propre.
                </p>
                <p>
                  Mon studio, situé{" "}
                  <strong className="text-dark">
                    {siteConfig.contact.fullAddress}
                  </strong>
                  , est le point de départ de chaque collaboration. J&apos;interviens
                  dans le <strong className="text-dark">1er</strong>,{" "}
                  <strong className="text-dark">2e</strong>,{" "}
                  <strong className="text-dark">3e</strong>,{" "}
                  <strong className="text-dark">6e</strong> et{" "}
                  <strong className="text-dark">7e arrondissement</strong>, ainsi que
                  dans les quartiers de la{" "}
                  <strong className="text-dark">Croix-Rousse</strong>, des{" "}
                  <strong className="text-dark">Brotteaux</strong>, de la{" "}
                  <strong className="text-dark">Part-Dieu</strong> et autour du{" "}
                  <strong className="text-dark">parc de la Tête d&apos;Or</strong>.
                </p>
                <p>
                  Que vous souhaitiez rénover un appartement ancien, aménager un
                  espace commercial ou repenser votre intérieur avec un regard neuf,
                  je vous accompagne de la conception à la livraison. Mon approche :
                  un design élégant et intemporel, des matériaux nobles, et une
                  attention obsessionnelle au détail. Chaque projet est pensé pour
                  sublimer votre espace tout en respectant votre budget et vos
                  contraintes.
                </p>
                <p>
                  Lyon est une ville de patrimoine et de création. Mon rôle est de
                  faire dialoguer ces deux dimensions dans chacun de vos espaces —
                  qu&apos;il s&apos;agisse d&apos;un studio dans le Vieux Lyon ou
                  d&apos;un penthouse face à la Tête d&apos;Or.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Projects */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="font-serif text-section text-dark mb-8">
                Projets réalisés à Lyon
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {lyonProjects.map((project) => (
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

          {/* Google Maps */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="font-serif text-section text-dark mb-8">
                Localisation
              </h2>
              <div className="aspect-[16/9] rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44541.18!2d4.8!3d45.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2sLyon!5e0!3m2!1sfr!2sfr!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Lyon"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div className="text-center bg-white border border-border rounded-lg p-10 lg:p-14">
              <h2 className="font-serif text-section text-dark mb-4">
                Un projet à Lyon ?
              </h2>
              <p className="text-warmgray mb-8 max-w-md mx-auto">
                Contactez-moi pour une première consultation gratuite. Je me
                déplace dans tous les arrondissements lyonnais.
              </p>
              <Button href="/contact">Me contacter</Button>
            </div>
          </ScrollReveal>
        </div>
      </main>
    </>
  );
}
