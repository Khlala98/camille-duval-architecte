import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreadcrumbJsonLd } from "@/components/layout/JsonLd";

export const metadata: Metadata = {
  title: `Mentions légales | ${siteConfig.name}`,
  description: `Mentions légales du site ${siteConfig.url}. Éditeur : ${siteConfig.legal.companyName}, SIRET ${siteConfig.legal.siret}.`,
};

export default function MentionsLegalesPage() {
  return (
    <>
    <BreadcrumbJsonLd items={[{ name: "Accueil", href: "/" }, { name: "Mentions légales", href: "/mentions-legales" }]} />
    <main className="pt-28 pb-24 lg:pb-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="font-serif text-hero text-dark mb-12">
            Mentions légales
          </h1>
        </ScrollReveal>

        <ScrollReveal>
          <div className="prose prose-warmgray max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-xl text-dark mb-3">
                Éditeur du site
              </h2>
              <p className="text-warmgray text-sm leading-relaxed">
                {siteConfig.legal.companyName}
                <br />
                {siteConfig.legal.legalForm}
                <br />
                SIRET : {siteConfig.legal.siret}
                <br />
                {siteConfig.contact.fullAddress}
                <br />
                Téléphone : {siteConfig.contact.phone}
                <br />
                Email : {siteConfig.contact.email}
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-dark mb-3">
                Directrice de la publication
              </h2>
              <p className="text-warmgray text-sm leading-relaxed">
                {siteConfig.name}, en qualité de gérante.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-dark mb-3">
                Hébergement
              </h2>
              <p className="text-warmgray text-sm leading-relaxed">
                Ce site est hébergé par Vercel Inc.
                <br />
                440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
                <br />
                Site web : vercel.com
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-dark mb-3">
                Propriété intellectuelle
              </h2>
              <p className="text-warmgray text-sm leading-relaxed">
                L&apos;ensemble du contenu de ce site (textes, images,
                photographies, logos, vidéos) est protégé par le droit
                d&apos;auteur. Toute reproduction, même partielle, est
                interdite sans l&apos;autorisation écrite préalable de{" "}
                {siteConfig.name}.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-dark mb-3">
                Responsabilité
              </h2>
              <p className="text-warmgray text-sm leading-relaxed">
                Les informations contenues sur ce site sont aussi précises que
                possible et régulièrement mises à jour. Cependant,{" "}
                {siteConfig.name} ne peut garantir l&apos;exactitude,
                l&apos;exhaustivité ou l&apos;actualité des informations
                diffusées. En conséquence, l&apos;utilisateur reconnaît
                utiliser ces informations sous sa seule responsabilité.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-dark mb-3">
                Crédits photographiques
              </h2>
              <p className="text-warmgray text-sm leading-relaxed">
                Les photographies de projets présentes sur ce site sont la
                propriété de {siteConfig.legal.companyName} ou utilisées avec
                l&apos;autorisation de leurs auteurs. Photos d&apos;ambiance :
                Unsplash.
              </p>
            </section>
          </div>
        </ScrollReveal>
      </div>
    </main>
    </>
  );
}
