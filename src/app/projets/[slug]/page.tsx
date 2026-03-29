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

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-gold">{icon}</div>
      <div>
        <p className="text-xs text-warmgray uppercase tracking-wider">
          {label}
        </p>
        <p className="text-sm font-medium text-dark">{value}</p>
      </div>
    </div>
  );
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

  return (
    <>
    <BreadcrumbJsonLd items={[{ name: "Accueil", href: "/" }, { name: "Projets", href: "/projets" }, { name: project.title, href: `/projets/${project.slug}` }]} />
    <main className="pt-20">
      {/* Hero image */}
      <div className="relative w-full max-h-[70vh] overflow-hidden">
        <SafeImage
          src={project.mainImage}
          alt={project.title}
          width={1920}
          height={1080}
          className="w-full h-auto max-h-[70vh] object-cover"
          priority
        />
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 lg:py-24">
        {/* Badges */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="text-xs uppercase tracking-[0.15em] text-gold font-medium bg-gold/10 rounded-full px-4 py-1.5">
              {project.category}
            </span>
            <span className="text-xs uppercase tracking-[0.15em] text-warmgray bg-cream rounded-full px-4 py-1.5 border border-border">
              {project.city}
            </span>
          </div>
        </ScrollReveal>

        {/* Title */}
        <ScrollReveal>
          <h1 className="font-serif text-hero text-dark mb-8">
            {project.title}
          </h1>
        </ScrollReveal>

        {/* Info bar */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-8 py-8 border-y border-border mb-12">
            {project.surfaceArea && (
              <InfoItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 12h18M12 3v18" />
                  </svg>
                }
                label="Surface"
                value={project.surfaceArea}
              />
            )}
            {project.budgetRange && (
              <InfoItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M14.5 9a3.5 3.5 0 00-5 0M9.5 15a3.5 3.5 0 005 0M12 6v2M12 16v2" />
                  </svg>
                }
                label="Budget"
                value={project.budgetRange}
              />
            )}
            {project.duration && (
              <InfoItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                }
                label="Durée"
                value={project.duration}
              />
            )}
          </div>
        </ScrollReveal>

        {/* Brief */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="font-serif text-2xl text-dark mb-4">Le brief</h2>
            <p className="text-warmgray leading-relaxed mb-6">
              {project.description}
            </p>
            {project.brief && (
              <p className="text-warmgray leading-relaxed mb-6">
                {project.brief}
              </p>
            )}
            {project.constraints && (
              <div className="bg-white border border-border rounded-lg p-6">
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

        {/* Gallery */}
        {galleryImages.length > 0 && (
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="font-serif text-2xl text-dark mb-6">Galerie</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {galleryImages.map((img, i) => (
                  <div
                    key={i}
                    className={`relative overflow-hidden rounded-lg ${
                      i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                    }`}
                  >
                    <SafeImage
                      src={img}
                      alt={`${project.title} — vue ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes={
                        i === 0
                          ? "(max-width: 768px) 100vw, 800px"
                          : "(max-width: 768px) 100vw, 400px"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Design choices */}
        {project.designChoices && (
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="font-serif text-2xl text-dark mb-4">Nos choix</h2>
              <p className="text-warmgray leading-relaxed">
                {project.designChoices}
              </p>
            </div>
          </ScrollReveal>
        )}

        {/* Prev / Next */}
        <div className="flex items-center justify-between py-8 border-t border-border mb-16">
          {prev ? (
            <Link
              href={`/projets/${prev.slug}`}
              className="group flex items-center gap-2 text-sm text-warmgray hover:text-dark transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:-translate-x-1 transition-transform">
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
              className="group flex items-center gap-2 text-sm text-warmgray hover:text-dark transition-colors"
            >
              <span className="hidden sm:inline">{next.title}</span>
              <span className="sm:hidden">Suivant</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center bg-white border border-border rounded-lg p-10 lg:p-14">
            <h2 className="font-serif text-section text-dark mb-4">
              Ce projet vous inspire ?
            </h2>
            <p className="text-warmgray mb-8 max-w-md mx-auto">
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
