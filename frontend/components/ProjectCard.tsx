"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRightIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import type { Project } from "@/lib/data";

const typeBadge: Record<string, { label: string; className: string }> = {
  flagship: {
    label: "Core Architecture",
    className: "bg-blue-500/10 text-blue-500 dark:text-blue-400 border-blue-500/20",
  },
  client: {
    label: "Production Client",
    className: "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border-emerald-500/20",
  },
  openSource: {
    label: "Open Source",
    className: "bg-sky-500/10 text-sky-500 dark:text-sky-400 border-sky-500/20",
  },
  personal: {
    label: "Distributed System",
    className: "bg-slate-500/10 text-slate-500 dark:text-slate-400 border-slate-500/20",
  },
};

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const badge = typeBadge[project.type] || typeBadge.personal;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-[1.75rem] border border-border/80 bg-white/[0.02] p-1.5 transition-all duration-300 hover:border-accent/40"
    >
      {/* Inner Core: Concentric calculated radius */}
      <div className="relative flex flex-col justify-between h-full rounded-[calc(1.75rem-0.375rem)] bg-surface p-5 sm:p-6 border border-white/[0.04] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
        <div>
          {/* Thumbnail Preview */}
          {project.thumbnail && (
            <div className="relative mb-5 h-48 w-full overflow-hidden rounded-xl bg-muted border border-border/60">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-103"
              />
            </div>
          )}

          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${badge.className}`}
            >
              {badge.label}
            </span>
            {project.metrics && (
              <span className="inline-flex items-center rounded-full border border-border bg-surface-hover px-2.5 py-0.5 text-[11px] font-mono text-text-secondary">
                {project.metrics}
              </span>
            )}
          </div>

          {/* Title & Tagline */}
          <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-text-primary mb-1 transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <p className="text-xs font-medium text-text-muted mb-3">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Bullet highlights if available */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="mb-4 space-y-1.5 border-l-2 border-border pl-3 text-xs text-text-secondary">
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
                  className="rounded-md border border-border/80 bg-surface-hover/80 px-2 py-0.5 text-[11px] font-mono text-text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Links with Button-in-Button micro styling */}
        <div className="flex items-center justify-between pt-4 border-t border-border/70 mt-2">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 rounded-full bg-accent/10 hover:bg-accent/20 border border-accent/20 px-3.5 py-1.5 text-xs font-semibold text-accent transition-all duration-200"
            >
              <span>Explore Live</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                <ArrowUpRightIcon className="h-3 w-3 stroke-[2.5]" />
              </span>
            </a>
          ) : (
            <span className="text-[11px] text-text-muted italic">
              Verified Production Deploy
            </span>
          )}

          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              <CodeBracketIcon className="h-4 w-4" />
              <span>Source</span>
            </a>
          ) : (
            <span className="text-[11px] text-text-muted">
              Client NDA Protected
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
