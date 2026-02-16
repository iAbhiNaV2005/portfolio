import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — Abhinav Mitra",
  description: "Selected projects by Abhinav Mitra.",
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-6 py-16">
        <SectionReveal>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Projects</h1>
          <div className="h-1 w-12 rounded-full bg-accent mb-4" />
          <p className="text-text-secondary mb-10 max-w-xl">
            A few things I&apos;ve built. Each one taught me something new.
          </p>
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
