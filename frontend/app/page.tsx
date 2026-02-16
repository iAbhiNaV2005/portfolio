"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LoveButton from "@/components/LoveButton";
import { siteConfig } from "@/lib/data";

export default function HomePage() {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6 text-center">
      {/* Headline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mb-3 text-sm tracking-widest uppercase text-accent"
      >
        Welcome
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary"
      >
        Hi — I&apos;m{" "}
        <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
          {siteConfig.name}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="mt-4 max-w-xl text-text-secondary text-lg leading-relaxed"
      >
        {siteConfig.tagline}
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <Link
          href="/projects"
          className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          View Projects
        </Link>

        <Link
          href="/contact"
          className="rounded-lg border border-border bg-surface/60 px-6 py-3 text-sm font-medium text-text-primary backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-surface"
        >
          Message me
        </Link>

        <LoveButton />
      </motion.div>

      {/* Quick navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted"
      >
        {[
          { label: "About", href: "/about" },
          { label: "Experience", href: "/experience" },
          { label: "Resume", href: "/resume" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-text-secondary transition-colors underline underline-offset-4 decoration-border hover:decoration-accent"
          >
            {link.label}
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
