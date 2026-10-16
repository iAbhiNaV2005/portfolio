import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import { bio, skills, siteConfig, education } from "@/lib/data";
import {
  MapPinIcon,
  EnvelopeIcon,
  ArrowDownTrayIcon,
  AcademicCapIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "About — Abhinav Mitra",
  description:
    "Full Stack Software Engineer specializing in Java, Spring Boot, React, and AWS Serverless systems.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        {/* Header */}
        <SectionReveal>
          <div className="mb-10 border-b border-border pb-6">
            <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider block mb-1">
              Engineering Profile
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
              Engineering with precision, architecting for scale.
            </h1>
          </div>
        </SectionReveal>

        {/* Profile + Bio Grid */}
        <SectionReveal>
          <div className="grid gap-8 md:grid-cols-[240px,1fr] items-start mb-12">
            {/* Profile Avatar Card */}
            <div className="w-full max-w-[240px] mx-auto md:mx-0">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-border bg-surface">
                <Image
                  src="/profile.jpg"
                  alt="Abhinav Mitra"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-3 text-center md:text-left">
                <p className="font-display font-bold text-text-primary text-base">
                  {siteConfig.name}
                </p>
                <p className="text-xs text-text-muted">Full Stack Software Engineer</p>
              </div>
            </div>

            {/* Bio text & Quick Facts */}
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-text-primary leading-relaxed font-medium">
                Full Stack Software Engineer graduating in 2027 with internship, open-source, and client production engineering experience across Java (Spring Boot), TypeScript, React, and AWS Serverless architectures.
              </p>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Focused on building measurable, high-impact systems: from event-driven serverless pipelines indexing facial embeddings in under 2 seconds to production RAG engines delivering sub-400ms perceived UI latency and payment flows processing INR 100K+ at 100% success rate.
              </p>

              {/* Quick Info Badges */}
              <div className="grid gap-3 sm:grid-cols-2 pt-2">
                <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-hover text-accent">
                    <MapPinIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-text-muted uppercase">Location</p>
                    <p className="text-xs font-semibold text-text-primary">{bio.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-hover text-accent">
                    <EnvelopeIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-text-muted uppercase">Email</p>
                    <a
                      href={`mailto:${bio.email}`}
                      className="text-xs font-semibold text-text-primary hover:text-accent transition-colors"
                    >
                      {bio.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Education & Core CS Section */}
        <SectionReveal>
          <div className="mb-12 rounded-xl border border-border bg-surface p-6">
            <div className="flex items-center gap-2 mb-3">
              <AcademicCapIcon className="h-4 w-4 text-accent" />
              <h2 className="font-display text-base font-bold text-text-primary tracking-tight">
                Education & CS Foundations
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h3 className="font-display text-sm font-bold text-text-primary">
                {education.degree}
              </h3>
              <span className="text-xs font-mono font-semibold text-accent">
                {education.period}
              </span>
            </div>
            <p className="text-xs text-text-secondary mb-3">
              {education.institution} · <span className="font-mono">{education.grade}</span>
            </p>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
              {education.coursework.map((c) => (
                <span
                  key={c}
                  className="rounded bg-surface-hover px-2 py-0.5 text-xs text-text-secondary font-mono"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Technical Stack */}
        <SectionReveal>
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <CommandLineIcon className="h-4 w-4 text-accent" />
              <h2 className="font-display text-base font-bold text-text-primary tracking-tight">
                Technical Stack
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/40"
                >
                  <h3 className="font-mono text-xs font-bold text-accent uppercase mb-2">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded border border-border bg-surface-hover px-2 py-0.5 text-[11px] text-text-secondary font-mono"
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

        {/* Resume Banner */}
        <SectionReveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-border bg-surface p-5">
            <div>
              <h3 className="font-display text-sm font-bold text-text-primary">
                Looking for the formal 1-page resume?
              </h3>
              <p className="text-xs text-text-secondary mt-0.5">
                Download the verified PDF document or review the online summary.
              </p>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <Link
                href="/resume"
                className="rounded-lg border border-border bg-surface-hover px-3.5 py-1.5 text-xs font-semibold text-text-primary hover:border-accent hover:text-accent transition-colors"
              >
                View Online Resume
              </Link>
              <a
                href={siteConfig.resumeDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
              >
                <ArrowDownTrayIcon className="h-3.5 w-3.5" />
                <span>PDF Resume</span>
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </PageTransition>
  );
}
