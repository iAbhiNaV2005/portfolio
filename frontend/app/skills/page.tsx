"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import { skills, architectures, socialLinks } from "@/lib/data";
import {
  CommandLineIcon,
  CpuChipIcon,
  ServerStackIcon,
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function SkillsPage() {
  const [activeArch, setActiveArch] = useState(architectures[0].id);
  const currentArch = architectures.find((a) => a.id === activeArch) || architectures[0];

  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        {/* Header */}
        <SectionReveal>
          <div className="mb-12">
            <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider block mb-1">
              Architecture & Fundamentals
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-text-primary mb-3">
              Technical Stack & System Architectures
            </h1>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl">
              Specialized in distributed backend systems with Java and Spring Boot, serverless cloud architectures on AWS, autonomous RAG agents, and verified high-concurrency client platforms.
            </p>
          </div>
        </SectionReveal>

        {/* LeetCode & DSA Banner */}
        <SectionReveal>
          <div className="mb-14 rounded-2xl border border-border bg-surface p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-500">
                <CpuChipIcon className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg font-bold text-text-primary">
                    Data Structures & Algorithms
                  </h3>
                  <span className="rounded-md border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                    300+ Solved
                  </span>
                </div>
                <p className="text-xs text-text-secondary mt-0.5">
                  Consistent practice in Graph Algorithms, Dynamic Programming, Trees, and Array Patterns.
                </p>
              </div>
            </div>

            <a
              href={socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-hover px-4 py-2 text-xs font-semibold text-text-primary hover:border-accent hover:text-accent transition-colors shrink-0"
            >
              <span>View LeetCode Profile</span>
              <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </SectionReveal>

        {/* System Architecture Deep-Dive Showcase */}
        <SectionReveal>
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-2">
              <ServerStackIcon className="h-5 w-5 text-accent" />
              <h2 className="font-display text-2xl font-bold tracking-tight text-text-primary">
                System Design & Pipeline Deep Dives
              </h2>
            </div>
            <p className="text-sm text-text-secondary mb-6">
              Production blueprints demonstrating end-to-end data flow, serverless scaling, and agentic workflows.
            </p>

            {/* Architecture Selector Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-border pb-3">
              {architectures.map((arch) => {
                const isActive = activeArch === arch.id;
                return (
                  <button
                    key={arch.id}
                    onClick={() => setActiveArch(arch.id)}
                    className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                      isActive
                        ? "bg-accent text-white"
                        : "border border-border bg-surface text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {arch.title.split(":")[0]}
                  </button>
                );
              })}
            </div>

            {/* Active Architecture Display Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentArch.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <h3 className="font-display text-xl font-bold text-text-primary">
                    {currentArch.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {currentArch.techStack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-surface-hover px-2.5 py-0.5 text-xs font-mono text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {currentArch.summary}
                </p>

                {/* Step Pipeline Visualization */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-3">
                    Pipeline Execution Stages
                  </h4>
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {currentArch.diagram.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 rounded-lg border border-border bg-surface-hover/70 p-3"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-accent/10 font-mono text-xs font-bold text-accent">
                          {idx + 1}
                        </span>
                        <span className="text-xs font-medium text-text-primary leading-tight">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tradeoffs & Engineering rationale */}
                <div className="rounded-xl border border-accent/20 bg-accent/5 p-4">
                  <span className="text-xs font-mono font-bold text-accent block mb-1">
                    Engineering Decision & Trade-offs
                  </span>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {currentArch.tradeoffs}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </SectionReveal>

        {/* Technical Skills Matrix */}
        <SectionReveal>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <CommandLineIcon className="h-5 w-5 text-accent" />
              <h2 className="font-display text-2xl font-bold tracking-tight text-text-primary">
                Technical Stack & Domain Competencies
              </h2>
            </div>
            <p className="text-sm text-text-secondary mb-8">
              Full breakdown of languages, backend platforms, cloud infrastructure, and AI engineering tools.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
                >
                  <h3 className="font-display text-xs font-bold font-mono uppercase tracking-wider text-accent mb-3">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-border bg-surface-hover px-2.5 py-1 text-xs font-medium text-text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </PageTransition>
  );
}
