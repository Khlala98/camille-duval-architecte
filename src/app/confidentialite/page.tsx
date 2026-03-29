import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreadcrumbJsonLd } from "@/components/layout/JsonLd";

export const metadata: Metadata = {
  title: `Politique de confidentialité | ${siteConfig.name}`,
  description: `Politique de confidentialité et RGPD du site ${siteConfig.url}. Vos droits et la gestion de vos données personnelles.`,
};

export default function ConfidentialitePage() {
  return (
    <>
    <BreadcrumbJsonLd items={[{ name: "Accueil", href: "/" }, { name: "Confidentialité", href: "/confidentialite" }]} />
    <main className="pt-28 pb-24 lg:pb-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="font-serif text-hero text-dark mb-12">
            Politique de confidentialité
          </h1>
        </ScrollReveal>

        <ScrollReveal>
          <div className="prose prose-warmgray max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-xl text-dark mb-3">
                Responsable du traitement
              </h2>
              <p className="text-warmgray text-sm leading-relaxed">
                {siteConfig.legal.companyName}
                <br />
                {siteConfig.contact.fullAddress}
                <br />
                Email : {siteConfig.contact.email}
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-dark mb-3">
                Données collectées
              </h2>
              <p className="text-warmgray text-sm leading-relaxed">
                Lorsque vous utilisez le formulaire de contact, nous collectons
                les données suivantes : nom, prénom, adresse email, numéro de
                téléphone (facultatif), type de projet, budget estimé, ville
                et message. Ces données sont nécessaires au traitement de votre
                demande.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-dark mb-3">
                Finalité du traitement
              </h2>
              <p className="text-warmgray text-sm leading-relaxed">
                Vos données personnelles sont collectées uniquement dans le but
                de :
              </p>
              <ul className="text-warmgray text-sm leading-relaxed list-disc pl-5 mt-2 space-y-1">
                <li>Répondre à votre demande de contact</li>
                <li>Vous proposer un devis personnalisé</li>
                <li>Assurer le suivi de votre projet</li>
              </ul>
              <p className="text-warmgray text-sm leading-relaxed mt-2">
                Conformément au RGPD (Règlement Général sur la Protection des
                Données), le traitement est fondé sur votre consentement
                (article 6.1.a).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-dark mb-3">
                Durée de conservation
              </h2>
              <p className="text-warmgray text-sm leading-relaxed">
                Vos données sont conservées pendant une durée maximale de 3 ans
                à compter de votre dernière interaction avec{" "}
                {siteConfig.name}. Passé ce délai, vos données sont
                supprimées de notre base de données.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-dark mb-3">
                Partage des données
              </h2>
              <p className="text-warmgray text-sm leading-relaxed">
                Vos données personnelles ne sont jamais vendues, échangées ou
                louées à des tiers. Elles peuvent être transmises à nos
                sous-traitants techniques (hébergeur, service d&apos;envoi
                d&apos;emails) dans le strict cadre de l&apos;exécution de nos
                services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-dark mb-3">Vos droits</h2>
              <p className="text-warmgray text-sm leading-relaxed">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="text-warmgray text-sm leading-relaxed list-disc pl-5 mt-2 space-y-1">
                <li>
                  <strong>Droit d&apos;accès</strong> : obtenir la confirmation
                  que vos données sont traitées et en recevoir une copie
                </li>
                <li>
                  <strong>Droit de rectification</strong> : corriger des données
                  inexactes
                </li>
                <li>
                  <strong>Droit à l&apos;effacement</strong> : demander la
                  suppression de vos données
                </li>
                <li>
                  <strong>Droit à la portabilité</strong> : recevoir vos données
                  dans un format structuré
                </li>
                <li>
                  <strong>Droit d&apos;opposition</strong> : vous opposer au
                  traitement de vos données
                </li>
              </ul>
              <p className="text-warmgray text-sm leading-relaxed mt-3">
                Pour exercer ces droits, contactez-nous à{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gold hover:text-gold-dark underline"
                >
                  {siteConfig.contact.email}
                </a>
                . Vous pouvez également introduire une réclamation auprès de la
                CNIL (Commission Nationale de l&apos;Informatique et des
                Libertés).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-dark mb-3">Cookies</h2>
              <p className="text-warmgray text-sm leading-relaxed">
                Ce site utilise uniquement des cookies techniques nécessaires à
                son bon fonctionnement. Aucun cookie publicitaire ou de
                tracking n&apos;est utilisé. Les cookies d&apos;analyse
                éventuels sont anonymisés conformément aux recommandations de
                la CNIL.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-dark mb-3">
                Mise à jour
              </h2>
              <p className="text-warmgray text-sm leading-relaxed">
                Cette politique de confidentialité peut être mise à jour à tout
                moment. La dernière mise à jour date du 1er janvier 2026.
              </p>
            </section>
          </div>
        </ScrollReveal>
      </div>
    </main>
    </>
  );
}
