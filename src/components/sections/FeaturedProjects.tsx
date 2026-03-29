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

        {/* First project — full width hero */}
        {projects[0] && (
          <ProjectCard
            title={projects[0].title}
            slug={projects[0].slug}
            category={projects[0].category}
            mainImage={projects[0].mainImage}
            featured
            aspectClass="aspect-[16/9]"
          />
        )}

        {/* Next 3 projects — 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {projects.slice(1, 4).map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              slug={project.slug}
              category={project.category}
              mainImage={project.mainImage}
              aspectClass="aspect-[4/3]"
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button href="/projets" variant="outline">
            Voir tous les projets
          </Button>
        </div>
      </div>
    </section>
  );
}
