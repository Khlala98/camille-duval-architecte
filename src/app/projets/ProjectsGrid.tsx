"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";

interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  mainImage: string;
}

const filters = ["Tous", "Résidentiel", "Commercial", "Hôtellerie"];

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("Tous");

  const filtered =
    active === "Tous"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${
              active === f
                ? "bg-gold text-dark"
                : "bg-transparent text-warmgray border border-border hover:border-gold hover:text-gold"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <ProjectCard
                title={project.title}
                slug={project.slug}
                category={project.category}
                mainImage={project.mainImage}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-warmgray mt-12">
          Aucun projet dans cette catégorie pour le moment.
        </p>
      )}
    </>
  );
}
