import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import { bio, skills, siteConfig } from "@/lib/data";
import {
  MapPinIcon,
  EnvelopeIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Abhinav Mitra",
  description:
    "Full Stack Developer specializing in web applications, cloud architecture, and digital products.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Heading */}
        <SectionReveal>
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            About Me
          </h1>
          <div className="h-1 w-12 rounded-full bg-accent mb-10" />
        </SectionReveal>

        {/* Bio */}
        <SectionReveal>
          <p className="text-text-secondary leading-relaxed max-w-2xl mb-12 text-lg">
            {bio.short}
          </p>
        </SectionReveal>

        {/* Quick facts — no phone, no education */}
        <SectionReveal>
          <div className="grid gap-4 sm:grid-cols-2 mb-12">
            <div className="flex items-center gap-3 rounded-lg border border-border bg-surface/50 p-4">
              <MapPinIcon className="w-5 h-5 text-accent shrink-0" />
              <span className="text-sm text-text-secondary">
                {bio.location}
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-surface/50 p-4">
              <EnvelopeIcon className="w-5 h-5 text-accent shrink-0" />
              <a
                href={`mailto:${bio.email}`}
                className="text-sm text-text-secondary hover:text-accent transition-colors"
              >
                {bio.email}
              </a>
            </div>
          </div>
        </SectionReveal>

        {/* Skills */}
        <SectionReveal>
          <h2 className="text-xl font-semibold text-text-primary mb-6">
            Skills & Technologies
          </h2>
          <div className="space-y-6 mb-12">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-medium text-text-muted mb-2 uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-text-secondary transition-all duration-200 hover:scale-110 hover:border-accent/50 hover:text-accent hover:bg-accent/5 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Resume link for recruiters */}
        <SectionReveal>
          <div className="rounded-lg border border-border bg-surface/50 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-text-primary">
                Looking for my resume?
              </p>
              <p className="text-sm text-text-muted mt-1">
                Download or view my full resume with education and experience
                details.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/resume"
                className="text-sm text-accent hover:text-accent-hover transition-colors underline underline-offset-4"
              >
                View Resume
              </Link>
              <a
                href={siteConfig.resumeDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors"
              >
                <ArrowDownTrayIcon className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </PageTransition>
  );
}
