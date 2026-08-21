import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import { bio, skills, siteConfig } from "@/lib/data";
import {
  MapPinIcon,
  EnvelopeIcon,
  ArrowDownTrayIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "About — Abhinav Mitra",
  description:
    "Full Stack Developer specializing in performant web applications, cloud architecture, and modern digital products.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        {/* Header */}
        <SectionReveal>
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Biography
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-primary mt-2">
              Engineering with precision, designing for impact.
            </h1>
          </div>
        </SectionReveal>

        {/* Profile + Bio Asymmetric Grid */}
        <SectionReveal>
          <div className="grid gap-10 md:grid-cols-[280px,1fr] items-start mb-16">
            {/* Profile Avatar Card */}
            <div className="relative mx-auto md:mx-0 w-full max-w-[280px]">
              <div className="relative h-72 w-full rounded-2xl overflow-hidden border border-border/80 bg-surface/50 shadow-xl">
                <Image
                  src="/profile.jpg"
                  alt="Abhinav Mitra"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display font-bold text-white text-lg">
                    {siteConfig.name}
                  </p>
                  <p className="text-xs text-white/80">Full Stack Developer</p>
                </div>
              </div>
            </div>

            {/* Bio text & Quick Facts */}
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-text-primary leading-relaxed font-medium">
                {bio.short}
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                I enjoy tackling end-to-end engineering challenges: from designing responsive user interfaces to deploying containerized microservices and automated CI/CD pipelines on AWS.
              </p>

              {/* Quick Info Badges */}
              <div className="grid gap-3 sm:grid-cols-2 pt-4">
                <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-surface/50 p-4 backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <MapPinIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Based In</p>
                    <p className="text-sm font-semibold text-text-primary">{bio.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-surface/50 p-4 backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <EnvelopeIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Direct Email</p>
                    <a
                      href={`mailto:${bio.email}`}
                      className="text-sm font-semibold text-text-primary hover:text-accent transition-colors"
                    >
                      {bio.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Skills & Technologies */}
        <SectionReveal>
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <SparklesIcon className="h-5 w-5 text-accent" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Technical Toolkit
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="rounded-2xl border border-border/60 bg-surface/40 p-6 backdrop-blur-sm transition-colors hover:border-accent/30 hover:bg-surface/60"
                >
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-accent mb-3.5">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-border/60 bg-surface/80 px-3 py-1.5 text-xs font-medium text-text-secondary transition-all duration-200 hover:border-accent/50 hover:text-accent hover:scale-105 select-none cursor-default"
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl border border-border/80 bg-surface/60 p-6 sm:p-8 backdrop-blur-md">
            <div>
              <h3 className="font-display text-lg font-bold text-text-primary">
                Need a comprehensive overview?
              </h3>
              <p className="text-sm text-text-secondary mt-1">
                View my complete work history, education, and technical experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/resume"
                className="rounded-xl border border-border/80 bg-surface px-5 py-2.5 text-sm font-semibold text-text-primary hover:border-accent/40 transition-colors"
              >
                View Online
              </Link>
              <a
                href={siteConfig.resumeDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent/20 hover:bg-accent-hover transition-colors"
              >
                <ArrowDownTrayIcon className="h-4 w-4" />
                Download PDF
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </PageTransition>
  );
}
