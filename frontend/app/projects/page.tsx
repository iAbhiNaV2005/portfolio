"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import type { ProjectType } from "@/lib/data";

const filters: { label: string; value: ProjectType | "all" }[] = [
  { label: "All Projects", value: "all" },
  { label: "Client Work", value: "client" },
  { label: "Products", value: "personal" },
  { label: "Open Source", value: "openSource" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectType | "all">("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        {/* Header */}
        <SectionReveal>
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Portfolio
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-primary mt-2 mb-4">
              Selected Work & Projects
            </h1>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              A curated catalog of client deliveries, full-stack applications, and open-source software built for performance.
            </p>
          </div>
        </SectionReveal>

        {/* Filter Pills */}
        <SectionReveal>
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {filters.map((f) => {
              const isActive = activeFilter === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-white"
                      : "border border-border/70 bg-surface/50 text-text-secondary hover:border-accent/40 hover:text-text-primary"
                  }`}
                >
                  <span className="relative z-10">{f.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-filter-pill"
                      className="absolute inset-0 z-0 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </SectionReveal>

        {/* Dynamic Project Grid with AnimatePresence */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-text-muted">
            No projects found in this category.
          </div>
        )}
      </div>
    </PageTransition>
  );
}
