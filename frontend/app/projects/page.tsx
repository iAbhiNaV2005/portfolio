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
  { label: "Core Flagships", value: "flagship" },
  { label: "Client Production", value: "client" },
  { label: "Open Source", value: "openSource" },
  { label: "Personal", value: "personal" },
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
          <div className="mb-8 max-w-2xl">
            <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider block mb-1">
              Engineering Catalog
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-text-primary mb-2">
              Systems & Production Deliveries
            </h1>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Curated repository of serverless cloud pipelines, autonomous AI agents, verified client platforms, and high-scale open-source contributions.
            </p>
          </div>
        </SectionReveal>

        {/* Filter Pills */}
        <SectionReveal>
          <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-border pb-4">
            {filters.map((f) => {
              const isActive = activeFilter === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150 cursor-pointer ${
                    isActive
                      ? "bg-accent text-white"
                      : "border border-border bg-surface text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </SectionReveal>

        {/* Project Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-xs font-mono text-text-muted">
            No projects in this category.
          </div>
        )}
      </div>
    </PageTransition>
  );
}
