"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import type { Project } from "@/lib/data";

const typeBadge: Record<string, { label: string; className: string }> = {
  flagship: {
    label: "Core Architecture Flagship",
    className: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  client: {
    label: "Verified Client Delivery",
    className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  openSource: {
    label: "Open Source Contributor",
    className: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
  },
  personal: {
    label: "Full Stack Application",
    className: "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20",
  },
};

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const badge = typeBadge[project.type] || typeBadge.personal;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent/50"
    >
      <div>
        {/* Thumbnail Preview */}
        {project.thumbnail && (
          <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl bg-muted border border-border">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-102"
            />
          </div>
        )}

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${badge.className}`}
          >
            {badge.label}
          </span>
          {project.metrics && (
            <span className="inline-flex items-center rounded-md border border-border bg-surface-hover px-2.5 py-0.5 text-[11px] font-mono text-text-secondary">
              {project.metrics}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="font-display text-xl font-bold tracking-tight text-text-primary mb-1 transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="text-xs font-medium text-text-muted mb-3">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Bullet highlights if available */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mb-4 space-y-1.5 border-l border-border pl-3 text-xs text-text-secondary">
            {project.highlights.slice(0, 2).map((highlight, hIdx) => (
              <li key={hIdx} className="leading-snug">
                {highlight}
              </li>
            ))}
          </ul>
        )}

        {/* Tech tags */}
        {project.tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-surface-hover px-2 py-0.5 text-[11px] font-mono text-text-secondary"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Links */}
      <div className="flex items-center gap-4 pt-4 border-t border-border">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline transition-colors"
          >
            Live Demo
            <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
          </a>
        )}
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            <CodeBracketIcon className="h-3.5 w-3.5" />
            Source Code
          </a>
        ) : (
          <span className="text-[11px] text-text-muted">
            Private Client Repository
          </span>
        )}
      </div>
    </motion.article>
  );
}
