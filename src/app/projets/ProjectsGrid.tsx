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
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`relative pb-2 text-sm font-light tracking-wide transition-colors duration-500 ${
              active === f
                ? "text-dark"
                : "text-warmgray hover:text-dark"
            }`}
          >
            {f}
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-500 ease-out ${
                active === f ? "w-full" : "w-0"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <ProjectCard
                title={project.title}
                slug={project.slug}
                category={project.category}
                mainImage={project.mainImage}
                featured={i === 0}
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
