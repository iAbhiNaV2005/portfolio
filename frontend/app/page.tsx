"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LoveButton from "@/components/LoveButton";
import TechMarquee from "@/components/TechMarquee";
import StatsBar from "@/components/StatsBar";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import SectionReveal from "@/components/SectionReveal";
import { siteConfig, services, projects } from "@/lib/data";

export default function HomePage() {
  // Show client work first in featured section
  const featured = projects
    .filter((p) => p.type === "client" || p.thumbnail)
    .slice(0, 3);

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="flex flex-col items-center justify-center px-6 text-center py-16 sm:py-24">
        {/* Animated gradient keyframes */}
        <style>{`
          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          @keyframes glow-pulse {
            0%, 100% { text-shadow: 0 0 20px rgba(99, 102, 241, 0.0); }
            50% { text-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
          }
        `}</style>

        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-3 text-sm tracking-widest uppercase text-accent"
        >
          {"Available for work".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.03, duration: 0.3 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary"
        >
          Hi — I&apos;m{" "}
          <span
            style={{
              backgroundImage:
                "linear-gradient(270deg, #6366f1, #a855f7, #ec4899, #6366f1)",
              backgroundSize: "200% 200%",
              animation: "gradient-shift 4s ease-in-out infinite",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {siteConfig.name}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-4 max-w-2xl text-text-secondary text-lg leading-relaxed"
          style={{ animation: "glow-pulse 3s ease-in-out infinite" }}
        >
          I design and build{" "}
          <span className="text-text-primary font-medium">
            premium web applications
          </span>{" "}
          for businesses and startups — from idea to production.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/projects"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            View My Work
          </Link>

          <Link
            href="/contact"
            className="rounded-lg border border-border bg-surface/60 px-6 py-3 text-sm font-medium text-text-primary backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-surface"
          >
            Let&apos;s Talk
          </Link>

          <LoveButton />
        </motion.div>

        {/* Tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 w-full max-w-3xl"
        >
          <TechMarquee />
        </motion.div>
      </section>

      {/* ── Stats Bar ───────────────────────────────────────── */}
      <section className="px-6">
        <StatsBar />
      </section>

      {/* ── Services Preview ────────────────────────────────── */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
                What I Do
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto">
                End-to-end development services — from clean UI to scalable
                backends.
              </p>
            </div>
          </SectionReveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>

          <SectionReveal>
            <div className="text-center mt-8">
              <Link
                href="/services"
                className="text-sm text-accent hover:text-accent-hover transition-colors underline underline-offset-4"
              >
                Learn more about my services →
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Featured Work ───────────────────────────────────── */}
      <section className="px-6 py-16 sm:py-20 bg-surface/30">
        <div className="mx-auto max-w-5xl">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
                Featured Work
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto">
                Selected projects and client work that showcase what I build.
              </p>
            </div>
          </SectionReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>

          <SectionReveal>
            <div className="text-center mt-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-6 py-3 text-sm font-medium text-text-primary backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-surface"
              >
                View All Work →
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── CTA Section ─────────────────────────────────────── */}
      <section className="px-6 py-16 sm:py-24">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Have a project in mind?
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Whether you need a web application, a landing page, or a complete
              digital product — let&apos;s discuss how I can help bring your
              vision to life.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-accent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                Start a Conversation
              </Link>
              <Link
                href="/services"
                className="rounded-lg border border-border bg-surface/60 px-8 py-3 text-sm font-medium text-text-primary backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-surface"
              >
                View Services
              </Link>
            </div>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
