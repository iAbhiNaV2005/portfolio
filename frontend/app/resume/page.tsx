import type { Metadata } from "next";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import { siteConfig, bio, education, skills, experiences, projects, socialLinks } from "@/lib/data";
import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  BriefcaseIcon,
  CommandLineIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Resume — Abhinav Mitra",
  description:
    "Curriculum Vitae of Abhinav Mitra — Full Stack Software Engineer | Java, Spring Boot, React, AWS Serverless.",
};

const topSkills = [
  "Java",
  "Spring Boot",
  "TypeScript",
  "React",
  "Next.js",
  "AWS Lambda",
  "AWS SAM",
  "Docker",
  "PostgreSQL",
  "pgvector",
  "DynamoDB",
  "LangChain",
  "MCP",
  "FastAPI",
  "Python",
  "SQL",
];

export default function ResumePage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        {/* Header */}
        <SectionReveal>
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b border-border mb-10">
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
                {siteConfig.name}
              </h1>
              <p className="text-sm font-semibold text-accent mt-1">
                Full Stack Software Engineer
              </p>
              <p className="text-xs text-text-muted mt-0.5">
                Java (Spring Boot) · TypeScript / React · AWS Serverless
              </p>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-3 text-xs text-text-secondary">
                <span>{bio.location}</span>
                <span>•</span>
                <a
                  href={`mailto:${bio.email}`}
                  className="hover:text-accent transition-colors underline-offset-2 hover:underline"
                >
                  {bio.email}
                </a>
                <span>•</span>
                <a
                  href={socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-500 transition-colors underline-offset-2 hover:underline"
                >
                  LeetCode (300+ Solved)
                </a>
              </div>
            </div>

            <a
              href={siteConfig.resumeDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-white hover:bg-accent-hover transition-colors shrink-0"
            >
              <ArrowDownTrayIcon className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </SectionReveal>

        {/* Experience Section */}
        <SectionReveal>
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <BriefcaseIcon className="h-4 w-4 text-accent" />
              <h2 className="font-display text-base font-bold text-text-primary tracking-tight">
                Work Experience & Impact
              </h2>
            </div>

            <div className="space-y-4">
              {experiences.map((exp) => (
                <div
                  key={exp.company + exp.period}
                  className="rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/40"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-sm font-bold text-text-primary">
                        {exp.role}
                      </span>
                      <span className="text-xs text-text-muted">· {exp.company}</span>
                    </div>
                    <span className="text-[11px] font-mono text-text-muted">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {exp.impact}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </SectionReveal>

        {/* Key Projects */}
        <SectionReveal>
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <CommandLineIcon className="h-4 w-4 text-accent" />
              <h2 className="font-display text-base font-bold text-text-primary tracking-tight">
                Flagship Systems
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {projects.slice(0, 2).map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl border border-border bg-surface p-4 flex flex-col justify-between hover:border-accent/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display text-sm font-bold text-text-primary">
                        {p.title}
                      </h3>
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-medium text-accent hover:underline flex items-center gap-0.5"
                        >
                          Live <ArrowTopRightOnSquareIcon className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed mb-3">
                      {p.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-2 border-t border-border">
                    {p.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded bg-surface-hover px-1.5 py-0.5 text-[10px] font-mono text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </SectionReveal>

        {/* Technical Stack */}
        <SectionReveal>
          <section className="mb-10 rounded-xl border border-border bg-surface p-5">
            <div className="flex items-center gap-2 mb-3">
              <WrenchScrewdriverIcon className="h-4 w-4 text-accent" />
              <h2 className="font-display text-base font-bold text-text-primary tracking-tight">
                Core Stack
              </h2>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {topSkills.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border bg-surface-hover px-2.5 py-1 text-xs font-mono text-text-secondary"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>
        </SectionReveal>

        {/* Education */}
        <SectionReveal>
          <section className="rounded-xl border border-border bg-surface p-5">
            <div className="flex items-center gap-2 mb-2">
              <AcademicCapIcon className="h-4 w-4 text-accent" />
              <h2 className="font-display text-base font-bold text-text-primary tracking-tight">
                Education
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <p className="text-xs sm:text-sm font-semibold text-text-primary">
                  {education.degree}
                </p>
                <p className="text-xs text-text-muted mt-0.5">
                  {education.institution} · <span className="font-mono">{education.grade}</span>
                </p>
              </div>
              <span className="text-xs font-mono text-text-muted">
                {education.period}
              </span>
            </div>
          </section>
        </SectionReveal>
      </div>
    </PageTransition>
  );
}
