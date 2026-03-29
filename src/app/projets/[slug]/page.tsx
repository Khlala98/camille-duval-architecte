import type { Metadata } from "next";
import { SafeImage } from "@/components/ui/SafeImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/data";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/layout/JsonLd";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.mainImage }],
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) notFound();

  const galleryImages: string[] = JSON.parse(project.galleryImages);

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  const infoItems = [
    project.surfaceArea && { label: "Surface", value: project.surfaceArea },
    project.budgetRange && { label: "Budget", value: project.budgetRange },
    project.duration && { label: "Durée", value: project.duration },
    project.city && { label: "Lieu", value: project.city },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
    <BreadcrumbJsonLd items={[{ name: "Accueil", href: "/" }, { name: "Projets", href: "/projets" }, { name: project.title, href: `/projets/${project.slug}` }]} />
    <main className="pt-20">
      {/* Hero image — edge-to-edge, no border-radius */}
      <div className="relative w-full max-h-[75vh] overflow-hidden">
        <SafeImage
          src={project.mainImage}
          alt={project.title}
          width={1920}
          height={1080}
          className="w-full h-auto max-h-[75vh] object-cover"
          priority
        />
      </div>

      {/* Large white space */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 pt-16 pb-20 lg:pb-28">
        {/* Title */}
        <ScrollReveal>
          <h1 className="font-serif text-hero text-dark tracking-tight font-normal mb-20">
            {project.title}
          </h1>
        </ScrollReveal>

        {/* Info bar — horizontal with vertical pipe separators */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center gap-0 mb-20">
            {infoItems.map((item, i) => (
              <div key={item.label} className="flex items-center">
                {i > 0 && (
                  <span className="text-warmgray/30 mx-6 hidden sm:inline">|</span>
                )}
                <span className="text-xs uppercase tracking-[0.15em] text-warmgray">
                  {item.label} : {item.value}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Brief */}
        <ScrollReveal>
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-10 h-[1px] bg-gold" />
              <h2 className="text-sm uppercase tracking-[0.15em] text-warmgray font-light">Le brief</h2>
            </div>
            <p className="text-base leading-[1.8] text-warmgray mb-6">
              {project.description}
            </p>
            {project.brief && (
              <p className="text-base leading-[1.8] text-warmgray mb-6">
                {project.brief}
              </p>
            )}
            {project.constraints && (
              <div className="bg-white border border-border p-6 mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-dark mb-2">
                  Contraintes
                </h3>
                <p className="text-warmgray text-sm leading-relaxed">
                  {project.constraints}
                </p>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Gallery — alternating rhythm, no border-radius */}
        {galleryImages.length > 0 && (
          <ScrollReveal>
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <span className="block w-10 h-[1px] bg-gold" />
                <h2 className="text-sm uppercase tracking-[0.15em] text-warmgray font-light">Galerie</h2>
              </div>
              <div className="space-y-4">
                {galleryImages.map((img, i) => {
                  const isFullWidth = i % 3 === 0;
                  if (isFullWidth) {
                    return (
                      <div
                        key={i}
                        className="relative overflow-hidden aspect-[16/9]"
                      >
                        <SafeImage
                          src={img}
                          alt={`${project.title} — vue ${i + 1}`}
                          fill
                          className="object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                    );
                  }
                  if (i % 3 === 1) {
                    const pairImg = galleryImages[i + 1];
                    return (
                      <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative overflow-hidden aspect-[4/3]">
                          <SafeImage
                            src={img}
                            alt={`${project.title} — vue ${i + 1}`}
                            fill
                            className="object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
                            sizes="(max-width: 768px) 100vw, 400px"
                          />
                        </div>
                        {pairImg && (
                          <div className="relative overflow-hidden aspect-[4/3]">
                            <SafeImage
                              src={pairImg}
                              alt={`${project.title} — vue ${i + 2}`}
                              fill
                              className="object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
                              sizes="(max-width: 768px) 100vw, 400px"
                            />
                          </div>
                        )}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Design choices */}
        {project.designChoices && (
          <ScrollReveal>
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-6">
                <span className="block w-10 h-[1px] bg-gold" />
                <h2 className="text-sm uppercase tracking-[0.15em] text-warmgray font-light">Nos choix</h2>
              </div>
              <p className="text-base leading-[1.8] text-warmgray">
                {project.designChoices}
              </p>
            </div>
          </ScrollReveal>
        )}

        {/* Prev / Next */}
        <div className="flex items-center justify-between py-8 border-t border-border mb-20">
          {prev ? (
            <Link
              href={`/projets/${prev.slug}`}
              className="group flex items-center gap-2 text-sm text-warmgray hover:text-dark transition-colors duration-500"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:-translate-x-1 transition-transform duration-500">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">{prev.title}</span>
              <span className="sm:hidden">Précédent</span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/projets/${next.slug}`}
              className="group flex items-center gap-2 text-sm text-warmgray hover:text-dark transition-colors duration-500"
            >
              <span className="hidden sm:inline">{next.title}</span>
              <span className="sm:hidden">Suivant</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform duration-500">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center bg-white border border-border p-12 lg:p-16">
            <h2 className="font-serif text-section text-dark mb-4">
              Ce projet vous inspire ?
            </h2>
            <p className="text-warmgray mb-8 max-w-md mx-auto leading-relaxed">
              Parlons du vôtre. Chaque intérieur mérite une attention
              particulière.
            </p>
            <Button href="/contact">Me contacter</Button>
          </div>
        </ScrollReveal>
      </div>
    </main>
    </>
  );
}
