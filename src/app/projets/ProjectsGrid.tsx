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

  // Asymmetric layout: project 0 = full, 1-2 = 2 cols, 3-5 = 3 cols, then repeat
  function getGridClasses(index: number): { colSpan: string; aspectClass: string } {
    const pos = index % 6;
    if (pos === 0) return { colSpan: "md:col-span-6", aspectClass: "aspect-[16/9]" };
    if (pos <= 2) return { colSpan: "md:col-span-3", aspectClass: "aspect-[4/3]" };
    return { colSpan: "md:col-span-2", aspectClass: "aspect-[4/3]" };
  }

  return (
    <>
      {/* Filters — minimal text style */}
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`relative pb-2 text-sm tracking-wide transition-colors duration-300 ${
              active === f
                ? "text-dark font-normal"
                : "text-warmgray font-light hover:text-dark"
            }`}
          >
            {f}
            <span
              className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gold transition-all duration-300 ease-out ${
                active === f ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Asymmetric grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-6 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => {
            const { colSpan, aspectClass } = getGridClasses(i);
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
                className={colSpan}
              >
                <ProjectCard
                  title={project.title}
                  slug={project.slug}
                  category={project.category}
                  mainImage={project.mainImage}
                  featured={i === 0}
                  aspectClass={aspectClass}
                />
              </motion.div>
            );
          })}
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
