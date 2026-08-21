"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import LoveButton from "@/components/LoveButton";
import TechMarquee from "@/components/TechMarquee";
import StatsBar from "@/components/StatsBar";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import SectionReveal from "@/components/SectionReveal";
import { siteConfig, services, projects } from "@/lib/data";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function HomePage() {
  // Show client work & top products in featured section
  const featured = projects
    .filter((p) => p.type === "client" || p.thumbnail)
    .slice(0, 3);

  const headlineWords = "Building digital products that deliver real impact.".split(" ");

  return (
    <div className="flex flex-col gap-20 sm:gap-28 pb-20">
      {/* ── Hero Section ────────────────────────────────────────── */}
      <section className="relative flex min-h-[82vh] flex-col items-center justify-center px-6 text-center pt-8 sm:pt-14">
        {/* Subtle background ambient glow */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[380px] w-[380px] sm:h-[520px] sm:w-[520px] rounded-full opacity-20 blur-[100px]"
          style={{
            background: "radial-gradient(circle, #6366f1 0%, #a855f7 50%, transparent 70%)",
          }}
        />

        {/* Floating Avatar with spinning conic ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6"
          style={{ animation: "float-bob 5s ease-in-out infinite" }}
        >
          {/* Animated gradient ring */}
          <div
            className="absolute -inset-1 rounded-full"
            style={{
              background: "conic-gradient(from 0deg, #6366f1, #a855f7, #ec4899, #6366f1)",
              animation: "ring-spin 6s linear infinite",
              padding: "2px",
            }}
          >
            <div className="h-full w-full rounded-full bg-bg" />
          </div>

          <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden ring-2 ring-bg shadow-xl">
            <Image
              src="/profile.jpg"
              alt="Abhinav Mitra"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold tracking-wider uppercase text-accent">
            Available for new projects
          </span>
        </motion.div>

        {/* Main Headline with word-by-word reveal */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.04, delayChildren: 0.2 },
            },
          }}
          className="font-display max-w-4xl text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text-primary leading-[1.08]"
        >
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="inline-block mr-2.5 sm:mr-3.5"
            >
              {word === "real" || word === "impact." ? (
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
                  {word}
                </span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle / Value proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-text-secondary leading-relaxed"
        >
          I am{" "}
          <strong className="font-semibold text-text-primary">{siteConfig.name}</strong>
          , a full stack developer engineering scalable cloud architectures, high-performance APIs, and interactive web applications.
        </motion.p>

        {/* CTA Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(99,102,241,0.3)] transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_6px_25px_rgba(99,102,241,0.45)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Work</span>
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-surface/70 px-6 py-3.5 text-sm font-semibold text-text-primary backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:bg-surface hover:scale-[1.02] active:scale-[0.98]"
          >
            Get in Touch
          </Link>

          <LoveButton />
        </motion.div>

        {/* Tech Marquee integration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-14 w-full max-w-4xl"
        >
          <TechMarquee />
        </motion.div>
      </section>

      {/* ── Stats Metric Section ─────────────────────────────────── */}
      <section className="px-6">
        <StatsBar />
      </section>

      {/* ── Services Section ────────────────────────────────────── */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Capabilities
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mt-2 mb-4">
                What I Bring to the Table
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto text-base">
                Architecting scalable backend infrastructure and delivering pixel-perfect, responsive user interfaces.
              </p>
            </div>
          </SectionReveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>

          <SectionReveal>
            <div className="text-center mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors underline-offset-4 hover:underline"
              >
                View complete service details & workflow →
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Featured Work Section ────────────────────────────────── */}
      <section className="px-6 py-12 bg-surface/30 border-y border-border/40">
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  Portfolio Highlights
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mt-2">
                  Featured Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Direct Call To Action ────────────────────────────────── */}
      <section className="px-6">
        <SectionReveal>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border/80 bg-surface/50 p-8 sm:p-14 text-center backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <div
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 -z-10 h-48 w-96 opacity-25 blur-3xl"
              style={{
                background: "linear-gradient(90deg, #6366f1, #ec4899)",
              }}
            />

            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Have an idea or looking to hire?
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
              Whether you need end-to-end full stack execution, high-performance APIs, or a custom web app — let us build something exceptional.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98]"
              >
                Start a Conversation
              </Link>
              <Link
                href="/resume"
                className="rounded-xl border border-border/80 bg-surface/60 px-8 py-3.5 text-sm font-semibold text-text-primary backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-surface hover:scale-[1.02] active:scale-[0.98]"
              >
                View Resume
              </Link>
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}
