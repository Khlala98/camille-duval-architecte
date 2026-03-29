import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { BreadcrumbJsonLd } from "@/components/layout/JsonLd";

export const metadata: Metadata = {
  title: `Processus — De l'idée à la réalisation | ${siteConfig.name}`,
  description: `Découvrez les 5 étapes d'un projet avec ${siteConfig.name} : premier contact, conception, plans 3D, suivi de chantier et livraison de votre intérieur.`,
  openGraph: {
    title: `Processus | ${siteConfig.name}`,
    description: `Les 5 étapes d'un projet d'architecture intérieure avec ${siteConfig.name}.`,
    url: `${siteConfig.url}/processus`,
  },
};

export default async function ProcessusPage() {
  const steps = await prisma.processStep.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <>
    <BreadcrumbJsonLd items={[{ name: "Accueil", href: "/" }, { name: "Processus", href: "/processus" }]} />
    <main className="pt-28 pb-0">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 pb-24 lg:pb-32">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h1 className="font-serif text-hero text-dark">
              De l&apos;idée à la réalisation
            </h1>
            <p className="mt-4 text-warmgray max-w-xl mx-auto">
              Un processus clair et structuré pour que votre projet se déroule en toute sérénité, de la première rencontre à la livraison de votre intérieur.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gold/20 -translate-x-1/2" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;

            return (
              <ScrollReveal key={step.id} delay={i * 0.1}>
                <div
                  className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                    isLeft
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Circle number */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-cream border-2 border-gold flex items-center justify-center z-10">
                    <span className="font-serif text-lg text-gold font-bold">
                      {i + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-20 lg:ml-0 lg:w-[calc(50%-3rem)] ${
                      isLeft
                        ? "lg:mr-auto lg:pr-8 lg:text-right"
                        : "lg:ml-auto lg:pl-8 lg:text-left"
                    }`}
                  >
                    <h3 className="font-serif text-xl text-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="text-warmgray text-sm leading-relaxed mb-2">
                      {step.description}
                    </p>
                    {step.durationText && (
                      <span className="inline-block text-xs text-gold font-medium bg-gold/10 rounded-full px-3 py-1">
                        {step.durationText}
                      </span>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <CTABanner />
    </main>
    </>
  );
}
