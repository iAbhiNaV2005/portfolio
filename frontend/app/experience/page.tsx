import type { Metadata } from "next";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import { experiences, siteConfig } from "@/lib/data";
import { ArrowDownTrayIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Experience — Abhinav Mitra",
  description:
    "Work history, software engineering roles, and open-source contributions of Abhinav Mitra.",
};

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        {/* Header */}
        <SectionReveal>
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-6">
            <div>
              <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider block mb-1">
                Career History
              </span>
              <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
                Work Experience & Impact
              </h1>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mt-1 max-w-xl">
                Engineering track record spanning client production systems, AI RAG pipelines, high-star open source contributions, and SaaS backends.
              </p>
            </div>

            <a
              href={siteConfig.resumeDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2 text-xs font-semibold text-text-primary hover:border-accent hover:text-accent transition-colors shrink-0"
            >
              <ArrowDownTrayIcon className="h-3.5 w-3.5" />
              <span>Resume (PDF)</span>
            </a>
          </div>
        </SectionReveal>

        {/* Timeline */}
        <div className="relative border-l border-border pl-6 sm:pl-8 space-y-8 sm:space-y-10">
          {experiences.map((exp, i) => (
            <SectionReveal key={exp.company + exp.period} delay={i * 0.06}>
              <div className="relative">
                {/* Timeline node dot */}
                <div className="absolute -left-[1.85rem] sm:-left-[2.35rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-border bg-surface">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </div>

                {/* Company & Role header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <div className="flex items-center gap-3">
                    {exp.logo && (
                      <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-surface">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="font-display text-base sm:text-lg font-bold text-text-primary">
                          {exp.role}
                        </h2>
                        {exp.website && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-accent transition-colors"
                            aria-label={`Visit ${exp.company} website`}
                          >
                            <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                      <p className="text-xs font-medium text-text-muted">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="rounded-md border border-border bg-surface-hover px-2 py-0.5 text-[10px] font-mono text-accent">
                      {exp.tag}
                    </span>
                    <span className="text-xs font-mono text-text-muted">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Card with punchy impact and concise bullets */}
                <div className="rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/40">
                  <p className="text-xs sm:text-sm font-semibold text-text-primary mb-2.5">
                    {exp.impact}
                  </p>
                  <ul className="space-y-1.5 border-l border-border pl-3">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-xs text-text-secondary leading-relaxed"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
