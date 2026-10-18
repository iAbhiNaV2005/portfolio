"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import LiveProjectButton from "@/components/LiveProjectButton";

interface ProjectItem {
  number: string;
  name: string;
  category: string;
  tagline: string;
  metric: string;
  tech: string[];
  bullets: string[];
  liveUrl?: string;
  githubUrl?: string;
  mainImage: string;
  secondaryImage?: string;
}

const flagshipProjects: ProjectItem[] = [
  {
    number: "01",
    name: "CodeRAG",
    category: "Autonomous AI Agent · RAG",
    tagline: "Natural Language Codebase Search & Custom MCP Server",
    metric: "Sub-3s retrieval · 40% token savings",
    tech: ["Spring Boot", "FastAPI", "pgvector", "DynamoDB", "LangGraph", "MCP"],
    bullets: [
      "AST semantic chunking via Tree-sitter stored in pgvector for sub-3s vector retrieval.",
      "Commit-keyed DynamoDB caching that cut redundant LLM token overhead by 40%.",
      "Exposed repository search tools via a custom Model Context Protocol (MCP) server executed by LangGraph.",
    ],
    liveUrl: "https://codrag-xi.vercel.app/",
    githubUrl: "https://github.com/iAbhiNav2005/CodeRAG",
    mainImage: "/coderag.png",
  },
  {
    number: "02",
    name: "Eleveon",
    category: "Full Stack & FinTech",
    tagline: "High-Throughput E-Commerce & Learning Platform",
    metric: "INR 100K+ volume · 1,000+ users",
    tech: ["Next.js 14", "TypeScript", "Cashfree Gateway", "Firebase", "Tailwind CSS"],
    bullets: [
      "Built with Next.js 14 and Firebase for 1,000+ concurrent learners; cut First Contentful Paint by 35%.",
      "Integrated Cashfree Payment Gateway with signature-verified webhooks and atomic idempotency keys.",
      "Processed INR 100,000+ in live transactions with a 100% automated reconciliation success rate.",
    ],
    liveUrl: "https://eleveon.in",
    mainImage: "/eleveon-thumb.png",
  },
  {
    number: "03",
    name: "Grabpic",
    category: "AWS Serverless Cloud",
    tagline: "Event-Driven Serverless Facial Recognition Search",
    metric: "< 2s face indexing · 100% serverless",
    tech: ["AWS Lambda", "Amazon S3", "API Gateway", "AWS SAM", "Docker", "Python"],
    bullets: [
      "S3-triggered event pipeline via AWS SAM removing 100% of static EC2 server maintenance costs.",
      "Packaged Python computer vision (DLib + NumPy) inside a containerized AWS Lambda image.",
      "128-dimensional facial embedding extraction and cosine distance indexing in under 2 seconds.",
    ],
    liveUrl: "https://grab-pic-one.vercel.app/",
    githubUrl: "https://github.com/iAbhiNav2005/grabpic",
    mainImage: "/image.png",
  },
  {
    number: "04",
    name: "ai-job-search & DSA",
    category: "Open Source & Algorithms",
    tagline: "High-Scale Scraper Engine & Algorithmic Problem Solving",
    metric: "41k+ ⭐ Contributor · 300+ LeetCode Solved",
    tech: ["TypeScript", "Bun", "Regex Parsers", "CI/CD", "Algorithms"],
    bullets: [
      "Fixed URL parsing and crash bugs across 4 international scrapers with regex normalization.",
      "Authored 35+ Bun unit tests maintaining 100% pass rate across 290+ CLI test suites.",
      "Solved 300+ data structures & algorithms problems spanning dynamic programming, graphs, and trees.",
    ],
    githubUrl: "https://github.com/iAbhiNav2005/portfolio",
    liveUrl: "https://leetcode.com/u/NWP618qAOp",
    mainImage: "/dentalcare.png",
  },
];

function StickyProjectCard({
  project,
  index,
  totalCards,
}: {
  project: ProjectItem;
  index: number;
  totalCards: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky min-h-[85vh] flex items-center justify-center w-full mb-12 sm:mb-16"
      style={{
        top: `calc(4.5rem + ${index * 26}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-all"
      >
        {/* ── Top Row: Header, Badges, and Action Buttons ─────────────── */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none shrink-0"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.2rem)" }}
            >
              {project.number}
            </span>

            {/* Category + Project Name */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-light uppercase tracking-wider text-[#D7E2EA] text-xs sm:text-sm opacity-70">
                  [{project.category}]
                </span>
                <span className="text-[11px] font-semibold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  {project.metric}
                </span>
              </div>
              <h3 className="font-medium uppercase tracking-wide text-[#D7E2EA] text-lg sm:text-2xl md:text-3xl mt-0.5">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Action buttons (Live Demo + GitHub) */}
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA] px-4 py-2 sm:px-5 sm:py-2.5 text-xs uppercase tracking-wider font-medium hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Code</span>
                <span>↗</span>
              </a>
            )}
            {project.liveUrl && (
              <LiveProjectButton
                href={project.liveUrl}
                label="Live Demo ↗"
                className="px-5 py-2 sm:px-7 sm:py-2.5 text-xs sm:text-sm"
              />
            )}
          </div>
        </div>

        {/* ── Bottom Row: Two-column layout ─────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Left Column (5 of 12 columns): Technical highlights + Stack */}
          <div className="md:col-span-5 flex flex-col justify-between gap-4">
            <div className="rounded-[28px] sm:rounded-[36px] bg-[#141414] border border-[#D7E2EA]/15 p-5 sm:p-6 flex flex-col justify-between flex-1">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#D7E2EA]/50 font-medium block mb-3">
                  Architecture & Impact
                </span>
                <ul className="flex flex-col gap-2.5 text-[#D7E2EA]/85 text-xs sm:text-sm font-light leading-relaxed">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold shrink-0 mt-0.5">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Badges */}
              <div className="mt-5 pt-4 border-t border-[#D7E2EA]/10">
                <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/50 font-medium block mb-2">
                  Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full bg-[#D7E2EA]/10 text-[#D7E2EA] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 of 12 columns): High-res Project Showcase Image */}
          <div className="md:col-span-7 rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#141414] border border-[#D7E2EA]/15 min-h-[260px] sm:min-h-[340px] md:min-h-[420px] relative group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.mainImage}
              alt={`${project.name} preview`}
              loading="lazy"
              className="w-full h-full object-cover rounded-[28px] sm:rounded-[36px] group-hover:scale-[1.02] transition-transform duration-500"
            />
            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-5 right-5 pointer-events-none">
              <span className="text-xs uppercase tracking-wider text-white/90 font-medium bg-[#0C0C0C]/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                {project.tagline}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 pt-20 sm:pt-24 md:pt-28 pb-32 px-4 sm:px-8 md:px-10"
      style={{ overflowX: "clip" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Subtitle */}
        <FadeIn delay={0} y={20} duration={0.6}>
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light mb-3 block text-center">
            Selected Works & Systems
          </span>
        </FadeIn>

        {/* Heading: "Projects" */}
        <FadeIn delay={0.1} y={40} duration={0.8}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-24"
            style={{ fontSize: "clamp(2.75rem, 11vw, 150px)" }}
          >
            Projects
          </h2>
        </FadeIn>

        {/* Sticky-stacking project cards */}
        <div className="relative w-full">
          {flagshipProjects.map((proj, idx) => (
            <StickyProjectCard
              key={proj.number}
              project={proj}
              index={idx}
              totalCards={flagshipProjects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
