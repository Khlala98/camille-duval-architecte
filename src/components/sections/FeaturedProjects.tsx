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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={project.id} className={i === 0 ? "md:col-span-2" : ""}>
              <ProjectCard
                title={project.title}
                slug={project.slug}
                category={project.category}
                mainImage={project.mainImage}
                featured={i === 0}
              />
            </div>
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
