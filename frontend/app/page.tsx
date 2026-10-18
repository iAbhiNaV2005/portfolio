"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LoveButton from "@/components/LoveButton";
import TechMarquee from "@/components/TechMarquee";
import StatsBar from "@/components/StatsBar";
import InteractiveConsole from "@/components/InteractiveConsole";
import SectionReveal from "@/components/SectionReveal";
import { siteConfig, projects, experiences, architectures } from "@/lib/data";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ArrowDownTrayIcon,
  ServerStackIcon,
  CodeBracketIcon,
  CheckCircleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function HomePage() {
  const codeRag = projects.find((p) => p.title.includes("CodeRAG")) || projects[0];
  const eleveon = projects.find((p) => p.title.includes("Eleveon")) || projects[1];
  const grabpic = projects.find((p) => p.title.includes("Grabpic")) || projects[2];
  const openSource = projects.find((p) => p.title.includes("ai-job-search")) || projects[3];

  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-20">
      {/* ── 1. Editorial Split Hero ────────────────────────────── */}
      <section className="relative px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-2 sm:pt-6">
          {/* Left Column: Minimalist Typography & Direct Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Micro Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/80 px-3 py-1 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-mono font-medium tracking-wide text-text-primary">
                Software Engineer · Delhi / Remote
              </span>
            </motion.div>

            {/* Display Headline: Tight, Confident, 2 lines */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.1] mb-4 text-balance"
            >
              Building distributed systems & autonomous AI agents.
            </motion.h1>

            {/* Subtext: Minimal 1-Sentence High-Impact Statement */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.45 }}
              className="max-w-xl text-sm sm:text-base text-text-secondary leading-relaxed mb-7"
            >
              Specialized in Java (Spring Boot), AWS Serverless, and production MCP agents. From zero-downtime payments to sub-400ms vector search.
            </motion.p>

            {/* Action Group with Button-in-Button Trailing Icon Pill */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.45 }}
              className="flex flex-wrap items-center gap-3 w-full"
            >
              {/* Primary CTA: Button-in-Button */}
              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-3 rounded-full bg-accent hover:bg-accent-hover text-white pl-5 pr-2 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-98 shadow-sm hover:shadow-md"
              >
                <span>Explore Systems</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRightIcon className="h-3.5 w-3.5 stroke-[2.5]" />
                </span>
              </Link>

              {/* Secondary CTA: Double-Bezel Blueprint Pill */}
              <Link
                href="/skills"
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface px-4 py-2 text-xs sm:text-sm font-semibold text-text-primary hover:border-accent hover:text-accent transition-all duration-200"
              >
                <ServerStackIcon className="h-4 w-4" />
                <span>Architecture</span>
              </Link>

              {/* PDF Resume */}
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface px-4 py-2 text-xs sm:text-sm font-semibold text-text-primary hover:border-accent hover:text-accent transition-all duration-200"
              >
                <ArrowDownTrayIcon className="h-4 w-4" />
                <span>Resume</span>
              </a>

              <LoveButton />
            </motion.div>

            {/* Clean Metrics Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-8 pt-5 border-t border-border/70 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full"
            >
              <div>
                <span className="block font-display text-lg sm:text-xl font-bold text-text-primary">
                  INR 100K+
                </span>
                <span className="text-[11px] text-text-muted font-mono leading-tight block">
                  Cashfree Volume
                </span>
              </div>
              <div>
                <span className="block font-display text-lg sm:text-xl font-bold text-text-primary">
                  41k+ ★
                </span>
                <span className="text-[11px] text-text-muted font-mono leading-tight block">
                  Open Source
                </span>
              </div>
              <div>
                <span className="block font-display text-lg sm:text-xl font-bold text-text-primary">
                  300+
                </span>
                <span className="text-[11px] text-text-muted font-mono leading-tight block">
                  LeetCode DSA
                </span>
              </div>
              <div>
                <span className="block font-display text-lg sm:text-xl font-bold text-text-primary">
                  &lt;400ms
                </span>
                <span className="text-[11px] text-text-muted font-mono leading-tight block">
                  Vector Latency
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Architecture Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <InteractiveConsole />
          </motion.div>
        </div>
      </section>

      {/* ── 2. Real-Time Tech Marquee ──────────────────────────── */}
      <section className="w-full overflow-hidden border-y border-border/60 bg-surface/30 py-3.5">
        <TechMarquee />
      </section>

      {/* ── 3. Engineering Metrics Bar (Double-Bezel) ───────────── */}
      <section className="px-6">
        <StatsBar />
      </section>

      {/* ── 4. The Asymmetrical Bento Grid (Featured Systems) ──── */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <SectionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-border/80 pb-4">
            <div>
              <span className="text-[11px] font-mono font-semibold text-accent uppercase tracking-wider block mb-1">
                Featured Systems
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Production Architectures & Applications
              </h2>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
            >
              <span>All Systems ({projects.length})</span>
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </SectionReveal>

        {/* 12-Column Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Card 1: CodeRAG Flagship (Col Span 8) */}
          <div className="lg:col-span-8 group relative rounded-[2rem] border border-border/80 bg-white/[0.02] p-1.5 transition-all duration-300 hover:border-accent/40">
            <div className="flex flex-col justify-between h-full rounded-[calc(2rem-0.375rem)] bg-surface p-6 sm:p-7 border border-white/[0.04] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20 px-3 py-0.5 text-xs font-semibold">
                    Core Architecture Flagship
                  </span>
                  <span className="font-mono text-xs text-text-muted">
                    AST · Qdrant Vector DB
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {codeRag.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5 max-w-2xl">
                  Codebase intelligence engine indexing repositories into AST chunks with Qdrant vector retrieval exposed over Model Context Protocol (MCP).
                </p>

                {/* Visual Architecture Diagram Mini-Card */}
                <div className="mb-5 rounded-xl bg-surface-hover/80 border border-border/80 p-3.5 font-mono text-[11px]">
                  <div className="text-text-muted mb-2 font-semibold text-[10px]">SYSTEM_TOPOLOGY:</div>
                  <div className="flex flex-wrap items-center gap-2 text-text-secondary">
                    <span className="rounded bg-surface px-2 py-0.5 border border-border text-text-primary">Source AST</span>
                    <span>→</span>
                    <span className="rounded bg-surface px-2 py-0.5 border border-border text-accent">1536d Embeddings</span>
                    <span>→</span>
                    <span className="rounded bg-surface px-2 py-0.5 border border-border text-emerald-400">Qdrant Cluster</span>
                    <span>→</span>
                    <span className="rounded bg-surface px-2 py-0.5 border border-border text-blue-400">MCP Agent Context</span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {codeRag.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border/80 bg-surface-hover/80 px-2.5 py-0.5 text-[11px] font-mono text-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-border/70">
                {codeRag.live && (
                  <a
                    href={codeRag.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 rounded-full bg-accent/10 hover:bg-accent/20 border border-accent/20 px-3.5 py-1.5 text-xs font-semibold text-accent transition-all duration-200"
                  >
                    <span>Launch Interface</span>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                      <ArrowUpRightIcon className="h-3 w-3 stroke-[2.5]" />
                    </span>
                  </a>
                )}
                {codeRag.repo && (
                  <a
                    href={codeRag.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <CodeBracketIcon className="h-4 w-4" />
                    <span>Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Card 2: Eleveon Production Client (Col Span 4) */}
          <div className="lg:col-span-4 group relative rounded-[2rem] border border-border/80 bg-white/[0.02] p-1.5 transition-all duration-300 hover:border-accent/40">
            <div className="flex flex-col justify-between h-full rounded-[calc(2rem-0.375rem)] bg-surface p-6 sm:p-7 border border-white/[0.04] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 px-3 py-0.5 text-xs font-semibold">
                    Production Client
                  </span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-text-primary mb-1 group-hover:text-accent transition-colors">
                  {eleveon.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                  High-concurrency platform with automated Cashfree webhook reconciliation and serializable database locks.
                </p>

                {/* Clean Metric Tile */}
                <div className="mb-4 rounded-xl bg-surface-hover/80 border border-border/80 p-3.5">
                  <span className="block font-display text-2xl font-bold text-emerald-500 dark:text-emerald-400">
                    INR 100K+
                  </span>
                  <span className="text-xs font-semibold text-text-primary block">
                    Cashfree Payment Volume
                  </span>
                  <span className="text-[11px] text-text-muted mt-0.5 block">
                    1,000+ active users · 35% latency drop
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/70">
                {eleveon.live && (
                  <a
                    href={eleveon.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                  >
                    <span>eleveon.in</span>
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                )}
                <span className="text-[11px] text-text-muted">Verified Client Deploy</span>
              </div>
            </div>
          </div>

          {/* Card 3: Grabpic Serverless (Col Span 4) */}
          <div className="lg:col-span-4 group relative rounded-[2rem] border border-border/80 bg-white/[0.02] p-1.5 transition-all duration-300 hover:border-accent/40">
            <div className="flex flex-col justify-between h-full rounded-[calc(2rem-0.375rem)] bg-surface p-6 sm:p-7 border border-white/[0.04] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20 px-3 py-0.5 text-xs font-semibold">
                    AWS Serverless
                  </span>
                  <span className="font-mono text-xs text-text-muted">-80% vs EC2</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-text-primary mb-1 group-hover:text-accent transition-colors">
                  {grabpic.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                  Serverless facial recognition on AWS Lambda with containerized DLib and presigned S3 delivery.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {grabpic.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border/80 bg-surface-hover/80 px-2 py-0.5 text-[11px] font-mono text-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/70">
                {grabpic.live ? (
                  <a
                    href={grabpic.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                  >
                    <span>Live Architecture</span>
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] text-text-muted">AWS SAM Deployed</span>
                )}
                {grabpic.repo && (
                  <a
                    href={grabpic.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-text-secondary hover:text-text-primary"
                  >
                    <CodeBracketIcon className="h-3.5 w-3.5" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Card 4: ai-job-search & DSA Milestone (Col Span 8) */}
          <div className="lg:col-span-8 group relative rounded-[2rem] border border-border/80 bg-white/[0.02] p-1.5 transition-all duration-300 hover:border-accent/40">
            <div className="flex flex-col justify-between h-full rounded-[calc(2rem-0.375rem)] bg-surface p-6 sm:p-7 border border-white/[0.04] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="rounded-full bg-sky-500/10 text-sky-500 dark:text-sky-400 border border-sky-500/20 px-3 py-0.5 text-xs font-semibold">
                    Open Source & Algorithmic Engineering
                  </span>
                  <span className="font-mono text-xs text-text-muted">
                    41k+ Stars Ecosystem
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {openSource.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5 max-w-2xl">
                  Job scraping engine in a 41k+ star ecosystem with 35+ Bun unit tests and automated CI pipelines.
                </p>

                {/* Minimalist Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                  <div className="rounded-xl bg-surface-hover/80 border border-border/80 p-3">
                    <span className="block font-display text-lg font-bold text-text-primary">35+ Tests</span>
                    <span className="text-[11px] text-text-muted font-mono">Bun Runtime Suite</span>
                  </div>
                  <div className="rounded-xl bg-surface-hover/80 border border-border/80 p-3">
                    <span className="block font-display text-lg font-bold text-text-primary">300+ Solved</span>
                    <span className="text-[11px] text-text-muted font-mono">LeetCode (DP & Graphs)</span>
                  </div>
                  <div className="rounded-xl bg-surface-hover/80 border border-border/80 p-3 col-span-2 sm:col-span-1">
                    <span className="block font-display text-lg font-bold text-text-primary">Production CI</span>
                    <span className="text-[11px] text-text-muted font-mono">Automated Actions</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/70">
                {openSource.repo && (
                  <a
                    href={openSource.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                  >
                    <span>View Pull Requests</span>
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                )}
                <span className="text-[11px] text-text-muted font-mono">MIT Licensed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. System Design Blueprints (Double-Bezel) ──────────── */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <SectionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-border/80 pb-4">
            <div>
              <span className="text-[11px] font-mono font-semibold text-accent uppercase tracking-wider block mb-1">
                Architecture Blueprints
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                High-Reliability Backend Topologies
              </h2>
            </div>
            <Link
              href="/skills"
              className="group inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
            >
              <span>Full Specifications</span>
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </SectionReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {architectures.map((arch, i) => (
            <SectionReveal key={arch.id} delay={i * 0.08}>
              <div className="group rounded-[1.75rem] border border-border/80 bg-white/[0.02] p-1.5 transition-all duration-300 hover:border-accent/40 h-full">
                <div className="flex flex-col justify-between h-full rounded-[calc(1.75rem-0.375rem)] bg-surface p-5 sm:p-6 border border-white/[0.04] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                  <div>
                    <span className="font-mono text-xs text-accent font-semibold block mb-2">
                      Topology 0{i + 1}
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                      {arch.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed mb-4">
                      {arch.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/70 flex flex-wrap gap-1">
                    {arch.techStack.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded bg-surface-hover/80 px-2 py-0.5 text-[10px] font-mono text-text-secondary border border-border/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* ── 6. Experience Timeline (Minimalist Impact Cards) ─────── */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <SectionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-border/80 pb-4">
            <div>
              <span className="text-[11px] font-mono font-semibold text-accent uppercase tracking-wider block mb-1">
                Engineering History
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Work Experience & Outcomes
              </h2>
            </div>
            <Link
              href="/experience"
              className="group inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
            >
              <span>Full Chronology</span>
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </SectionReveal>

        <div className="space-y-4">
          {experiences.slice(0, 3).map((exp, i) => (
            <SectionReveal key={exp.company + exp.period} delay={i * 0.05}>
              <div className="group rounded-[1.75rem] border border-border/80 bg-white/[0.02] p-1.5 transition-all duration-300 hover:border-accent/40">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-[calc(1.75rem-0.375rem)] bg-surface p-5 sm:p-6 border border-white/[0.04] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="font-display text-base sm:text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-medium text-text-muted">
                        @ <strong className="text-text-primary">{exp.company}</strong>
                      </span>
                      <span className="text-[10px] font-mono rounded-full bg-surface-hover border border-border px-2 py-0.5 text-text-secondary">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-text-secondary max-w-3xl leading-relaxed">
                      {exp.impact}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-1.5 text-xs font-mono text-accent">
                    <CheckCircleIcon className="h-4 w-4 text-emerald-400" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* ── 7. Direct Engineering CTA Terminal ─────────────────── */}
      <section className="px-6 max-w-4xl mx-auto w-full">
        <SectionReveal>
          <div className="group relative rounded-[2rem] border border-border/80 bg-white/[0.02] p-1.5 shadow-2xl transition-all duration-300 hover:border-accent/40 text-center">
            <div className="rounded-[calc(2rem-0.375rem)] bg-surface p-7 sm:p-10 border border-white/[0.04] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] flex flex-col items-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent mb-3">
                <SparklesIcon className="h-4 w-4" />
                <span>Open for Roles</span>
              </span>

              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-text-primary max-w-lg mb-3">
                Let&apos;s build together.
              </h2>

              <p className="text-xs sm:text-sm text-text-secondary max-w-md leading-relaxed mb-6">
                Available for Software Engineer and Backend roles. Open to relocation across India and global remote.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group/btn inline-flex items-center gap-3 rounded-full bg-accent hover:bg-accent-hover text-white pl-5 pr-2 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-98 shadow-sm hover:shadow-md"
                >
                  <span>{siteConfig.email}</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-200 group-hover/btn:translate-x-0.5">
                    <ArrowUpRightIcon className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>

                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface px-4 py-2 text-xs sm:text-sm font-semibold text-text-primary hover:border-accent hover:text-accent transition-all duration-200"
                >
                  <ArrowDownTrayIcon className="h-4 w-4" />
                  <span>Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}
