import { getFeaturedProjects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";

export function FeaturedProjects() {
  const projects = getFeaturedProjects(4);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-warmgray mb-4">
            Portfolio
          </h2>
          <p className="font-serif text-section text-dark">
            Réalisations sélectionnées
          </p>
        </div>

        {/* Magazine layout: 2/3 + 1/3 stacked, then cinematic full width */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* First project — 2/3 width */}
          {projects[0] && (
            <div className="lg:col-span-2 lg:row-span-2">
              <ProjectCard
                title={projects[0].title}
                slug={projects[0].slug}
                category={projects[0].category}
                mainImage={projects[0].mainImage}
                featured
                aspectClass="aspect-[4/3] lg:aspect-auto lg:h-full"
              />
            </div>
          )}
          {/* Second project — top right 1/3 */}
          {projects[1] && (
            <div className="lg:col-span-1">
              <ProjectCard
                title={projects[1].title}
                slug={projects[1].slug}
                category={projects[1].category}
                mainImage={projects[1].mainImage}
                aspectClass="aspect-[4/3]"
              />
            </div>
          )}
          {/* Third project — bottom right 1/3 */}
          {projects[2] && (
            <div className="lg:col-span-1">
              <ProjectCard
                title={projects[2].title}
                slug={projects[2].slug}
                category={projects[2].category}
                mainImage={projects[2].mainImage}
                aspectClass="aspect-[4/3]"
              />
            </div>
          )}
        </div>

        {/* Fourth project — cinematic full width */}
        {projects[3] && (
          <div className="mt-4">
            <ProjectCard
              title={projects[3].title}
              slug={projects[3].slug}
              category={projects[3].category}
              mainImage={projects[3].mainImage}
              aspectClass="aspect-[21/9]"
            />
          </div>
        )}

        <div className="text-center mt-16">
          <Button href="/projets" variant="outline">
            Voir tous les projets
          </Button>
        </div>
      </div>
    </section>
  );
}
