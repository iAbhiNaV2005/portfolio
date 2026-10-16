"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import LoveButton from "@/components/LoveButton";
import TechMarquee from "@/components/TechMarquee";
import StatsBar from "@/components/StatsBar";
import ProjectCard from "@/components/ProjectCard";
import SectionReveal from "@/components/SectionReveal";
import { siteConfig, bio, projects, experiences, architectures } from "@/lib/data";
import {
  ArrowRightIcon,
  ArrowDownTrayIcon,
  CommandLineIcon,
  ServerStackIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

export default function HomePage() {
  // Show flagship & client work
  const featured = projects.slice(0, 4);

  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-20">
      {/* ── Hero Section ────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center px-6 text-center pt-8 sm:pt-14">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-semibold text-text-primary tracking-tight">
            {bio.statusBadge} · {bio.location}
          </span>
        </motion.div>

        {/* Profile Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative mb-6"
        >
          <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden border-2 border-border bg-surface">
            <Image
              src="/profile.jpg"
              alt="Abhinav Mitra"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="font-display max-w-3xl text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary leading-[1.12]"
        >
          Full Stack Software Engineer building high-throughput systems and AI agents.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.45 }}
          className="mt-5 max-w-2xl text-sm sm:text-base text-text-secondary leading-relaxed"
        >
          I am <strong className="font-semibold text-text-primary">{siteConfig.name}</strong>. Specialized in Java (Spring Boot), TypeScript, React, Next.js, and AWS Serverless architectures. Proven delivery in production RAG systems, autonomous MCP agents, and payment pipelines processing INR 100,000+ at 100% success rate.
        </motion.p>

        {/* Action Group */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.45 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
          >
            <span>Explore Projects</span>
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="/skills"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-xs sm:text-sm font-semibold text-text-primary hover:border-accent hover:text-accent transition-colors"
          >
            <ServerStackIcon className="h-4 w-4" />
            <span>Systems & Architecture</span>
          </Link>

          <a
            href={siteConfig.resumeDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-xs sm:text-sm font-semibold text-text-primary hover:border-accent hover:text-accent transition-colors"
          >
            <ArrowDownTrayIcon className="h-4 w-4" />
            <span>Resume (PDF)</span>
          </a>

          <LoveButton />
        </motion.div>

        {/* Tech Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-12 w-full max-w-4xl"
        >
          <TechMarquee />
        </motion.div>
      </section>

      {/* ── Engineering Metrics Section ───────────────────────────── */}
      <section className="px-6">
        <StatsBar />
      </section>

      {/* ── Core Architecture Spotlight ──────────────────────────── */}
      <section className="px-6">
        <div className="mx-auto max-w-5xl">
          <SectionReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-border pb-4">
              <div>
                <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider block mb-1">
                  System Design Highlights
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                  Architectural Blueprints
                </h2>
              </div>
              <Link
                href="/skills"
                className="group inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
              >
                <span>View Full System Details</span>
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {architectures.map((arch, i) => (
              <SectionReveal key={arch.id} delay={i * 0.08}>
                <div className="rounded-xl border border-border bg-surface p-5 flex flex-col justify-between h-full hover:border-accent/40 transition-colors">
                  <div>
                    <span className="font-mono text-xs text-accent font-semibold block mb-1.5">
                      Blueprint 0{i + 1}
                    </span>
                    <h3 className="font-display text-base font-bold text-text-primary mb-2">
                      {arch.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed mb-4">
                      {arch.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border flex flex-wrap gap-1">
                    {arch.techStack.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded bg-surface-hover px-2 py-0.5 text-[10px] font-mono text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Work Section ────────────────────────────────── */}
      <section className="px-6">
        <div className="mx-auto max-w-5xl">
          <SectionReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-border pb-4">
              <div>
                <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider block mb-1">
                  Selected Work
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                  Production Systems & Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
              >
                <span>All Projects ({projects.length})</span>
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {featured.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience Timeline Snapshot ─────────────────────────── */}
      <section className="px-6">
        <div className="mx-auto max-w-5xl">
          <SectionReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-border pb-4">
              <div>
                <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider block mb-1">
                  Career Trajectory
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                  Work History & Impact
                </h2>
              </div>
              <Link
                href="/experience"
                className="group inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
              >
                <span>Full Experience Timeline</span>
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </SectionReveal>

          <div className="space-y-4">
            {experiences.slice(0, 3).map((exp, i) => (
              <SectionReveal key={exp.company + exp.period} delay={i * 0.05}>
                <div className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div className="flex items-center gap-2.5">
                      <h3 className="font-display text-base font-bold text-text-primary">
                        {exp.role}
                      </h3>
                      <span className="text-xs text-text-muted">@ {exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-md border border-border bg-surface-hover px-2 py-0.5 text-[11px] font-mono text-text-secondary">
                        {exp.tag}
                      </span>
                      <span className="text-xs font-mono text-text-muted">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {exp.bullets[0]}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Direct Call To Action for SWE Hiring ──────────────────── */}
      <section className="px-6">
        <SectionReveal>
          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-surface p-8 sm:p-12 text-center">
            <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider block mb-2">
              Ready to Contribute
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-text-primary mb-3">
              Actively Interviewing for Software Engineering Roles
            </h2>
            <p className="text-text-secondary mb-6 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Available for full-time Full Stack and Backend Software Engineer positions. Ready to relocate or join high-velocity engineering teams.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-lg bg-accent px-6 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/resume"
                className="rounded-lg border border-border bg-surface-hover px-6 py-2.5 text-xs sm:text-sm font-semibold text-text-primary hover:border-accent hover:text-accent transition-colors"
              >
                View Full Resume
              </Link>
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}
