import { prisma } from "@/lib/prisma";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

export async function FeaturedProjects() {
  const projects = await prisma.project.findMany({
    where: { isFeatured: true },
    orderBy: { order: "asc" },
    take: 4,
  });

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="Réalisations sélectionnées"
          subtitle="Chaque projet est une histoire unique. Découvrez une sélection de mes réalisations les plus emblématiques."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              slug={project.slug}
              category={project.category}
              mainImage={project.mainImage}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/projets" variant="outline">
            Voir tous les projets
          </Button>
        </div>
      </div>
    </section>
  );
}
