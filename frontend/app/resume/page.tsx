import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import { siteConfig, bio, education, skills, experiences } from "@/lib/data";
import { ArrowDownTrayIcon, AcademicCapIcon, BriefcaseIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Resume — Abhinav Mitra",
  description:
    "Curriculum Vitae of Abhinav Mitra — Full Stack Developer with expertise in React, Next.js, FastAPI, Spring Boot, and AWS.",
};

export default function ResumePage() {
  const allSkills = Array.from(new Set(Object.values(skills).flat()));

  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        {/* Header with Download Action */}
        <SectionReveal>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-10 border-b border-border/60 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Curriculum Vitae
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-primary mt-1">
                {siteConfig.name}
              </h1>
              <p className="text-sm text-text-secondary mt-1.5">{siteConfig.tagline}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-text-muted">
                <span>📍 {bio.location}</span>
                <span>✉️ {bio.email}</span>
              </div>
            </div>

            <a
              href={siteConfig.resumeDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center self-start sm:self-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-hover transition-colors"
            >
              <ArrowDownTrayIcon className="h-4 w-4" />
              Download PDF
            </a>
          </div>
        </SectionReveal>

        {/* Experience Section */}
        <SectionReveal>
          <section className="mb-14">
            <div className="flex items-center gap-2.5 mb-6">
              <BriefcaseIcon className="h-5 w-5 text-accent" />
              <h2 className="font-display text-2xl font-bold text-text-primary">
                Work Experience
              </h2>
            </div>

            <div className="space-y-8 border-l-2 border-border/80 pl-6">
              {experiences.map((exp, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h3 className="font-display text-lg font-bold text-text-primary">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-semibold text-accent">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-text-secondary mb-3">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-text-secondary leading-relaxed flex gap-2">
                        <span className="text-accent mt-0.5 font-bold">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </SectionReveal>

        {/* Education Section */}
        <SectionReveal>
          <section className="mb-14">
            <div className="flex items-center gap-2.5 mb-6">
              <AcademicCapIcon className="h-5 w-5 text-accent" />
              <h2 className="font-display text-2xl font-bold text-text-primary">
                Education
              </h2>
            </div>

            <div className="rounded-2xl border border-border/60 bg-surface/40 p-6 backdrop-blur-sm">
              <h3 className="font-display text-lg font-bold text-text-primary">
                {education.degree}
              </h3>
              <p className="text-sm text-text-secondary mt-1">
                {education.institution}
                {education.period ? ` · ${education.period}` : ""}
              </p>
            </div>
          </section>
        </SectionReveal>

        {/* Skills List */}
        <SectionReveal>
          <section>
            <div className="flex items-center gap-2.5 mb-6">
              <WrenchScrewdriverIcon className="h-5 w-5 text-accent" />
              <h2 className="font-display text-2xl font-bold text-text-primary">
                Skills & Technologies
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {allSkills.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-border/70 bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-text-secondary select-none"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>
        </SectionReveal>
      </div>
    </PageTransition>
  );
}
