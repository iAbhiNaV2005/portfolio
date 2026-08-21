"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import type { Project } from "@/lib/data";

const typeBadge: Record<string, { label: string; className: string }> = {
  client: {
    label: "Client Project",
    className: "bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border-indigo-500/20",
  },
  personal: {
    label: "Product",
    className: "bg-muted text-text-secondary border-border/80",
  },
  openSource: {
    label: "Open Source",
    className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
};

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const badge = typeBadge[project.type] || typeBadge.personal;
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleCardClick = () => {
    if (project.live) {
      window.open(project.live, "_blank", "noopener,noreferrer");
    } else if (project.repo) {
      window.open(project.repo, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group relative flex flex-col justify-between rounded-2xl border border-border/70 bg-surface/50 p-6 backdrop-blur-md transition-colors duration-300 hover:border-accent/50 hover:bg-surface hover:shadow-[0_15px_40px_rgba(99,102,241,0.1)] ${
        project.live || project.repo ? "cursor-pointer" : ""
      }`}
    >
      <div>
        {/* Thumbnail Preview with clip-reveal & zoom */}
        <div className="relative mb-5 h-48 w-full overflow-hidden rounded-xl bg-muted/40 border border-border/40">
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-display text-4xl font-black text-text-muted/30 select-none">
              {project.title[0]}
            </div>
          )}
          {/* Subtle gradient vignette */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Type Badge */}
        <div className="mb-3">
          <span
            className={`inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-semibold tracking-wide ${badge.className}`}
          >
            {badge.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold tracking-tight text-text-primary mb-2 transition-colors group-hover:text-accent">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech tags */}
        {project.tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md bg-muted/60 px-2.5 py-1 text-xs text-text-muted transition-colors group-hover:text-text-secondary"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Links */}
      <div className="flex items-center gap-4 pt-4 border-t border-border/40">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            Live Demo
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        )}
        {project.repo && project.type !== "client" ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
          >
            <CodeBracketIcon className="h-4 w-4" />
            Code
          </a>
        ) : !project.live && !project.repo ? (
          <span className="text-xs text-text-muted italic">
            In active development
          </span>
        ) : null}
      </div>
    </motion.article>
  );
}
