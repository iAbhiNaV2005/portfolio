"use client";

import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, PlayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import type { Project } from "@/lib/data";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const handleCardClick = () => {
    if (project.live) {
      window.open(project.live, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onClick={handleCardClick}
      className={`group rounded-xl border border-border bg-surface/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-surface hover:shadow-[0_0_25px_rgba(99,102,241,0.15),0_0_50px_rgba(99,102,241,0.08)] ${project.live ? "cursor-pointer" : ""}`}
    >
      {/* Thumbnail */}
      <div className="mb-4 h-36 rounded-lg bg-muted/50 flex items-center justify-center overflow-hidden">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={400}
            height={144}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <span className="text-3xl font-bold text-text-muted/30 select-none">
            {project.title[0]}
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-text-primary mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-text-secondary mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Tech badges */}
      {project.tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-4">
        {project.live && (
          <span
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            <PlayIcon className="w-3.5 h-3.5" />
            Live demo
          </span>
        )}
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            View code
            <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
          </a>
        ) : !project.live ? (
          <span className="inline-flex items-center gap-1.5 text-sm text-text-muted italic">
            🚧 Currently in progress
          </span>
        ) : null}
      </div>
    </motion.article>
  );
}
