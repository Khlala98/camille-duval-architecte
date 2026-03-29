import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { ServiceCardList } from "./ServiceCardList";
import { BreadcrumbJsonLd } from "@/components/layout/JsonLd";

export const metadata: Metadata = {
  title: `Services — Conseil, architecture intérieure, suivi de chantier | ${siteConfig.name}`,
  description: `Les services de ${siteConfig.name} : conseil décoration dès 500€, architecture intérieure complète, suivi de chantier et home staging à ${siteConfig.contact.city}.`,
  openGraph: {
    title: `Services | ${siteConfig.name}`,
    description: `Conseil déco, architecture intérieure, suivi de chantier et home staging par ${siteConfig.name}.`,
    url: `${siteConfig.url}/services`,
  },
};

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    orderBy: { order: "asc" },
    include: { faqs: { orderBy: { order: "asc" } } },
  });

  return (
    <>
    <BreadcrumbJsonLd items={[{ name: "Accueil", href: "/" }, { name: "Services", href: "/services" }]} />
    <main className="pt-28 pb-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 lg:pb-32">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="font-serif text-hero text-dark">Mes services</h1>
            <p className="mt-4 text-warmgray max-w-xl mx-auto">
              Un accompagnement sur mesure, adapté à votre projet et à vos
              envies.
            </p>
          </div>
        </ScrollReveal>

        <ServiceCardList services={services} />
      </div>

      <CTABanner />
    </main>
    </>
  );
}
