"use client";

import { useState } from "react";
import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import type { ProjectType } from "@/lib/data";

const filters: { label: string; value: ProjectType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Client Work", value: "client" },
  { label: "Personal", value: "personal" },
  { label: "Open Source", value: "openSource" },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectType | "all">("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-6 py-16">
        <SectionReveal>
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            My Work
          </h1>
          <div className="h-1 w-12 rounded-full bg-accent mb-4" />
          <p className="text-text-secondary mb-8 max-w-xl">
            Selected projects and client work. Each one solved a real problem.
          </p>
        </SectionReveal>

        {/* Filter tabs */}
        <SectionReveal>
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === f.value
                    ? "bg-accent text-white"
                    : "border border-border bg-surface/50 text-text-secondary hover:border-accent/40 hover:text-text-primary"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Project grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-text-muted py-12">
            No projects in this category yet.
          </p>
        )}
      </div>
    </PageTransition>
  );
}
