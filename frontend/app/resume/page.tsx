import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import { siteConfig, bio, education, skills, experiences } from "@/lib/data";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Resume — Abhinav Mitra",
  description: "Resume of Abhinav Mitra, CS student at Central University of Haryana.",
};

export default function ResumePage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <SectionReveal>
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-text-primary mb-2">Resume</h1>
              <div className="h-1 w-12 rounded-full bg-accent" />
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              <ArrowDownTrayIcon className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </SectionReveal>

        {/* Header */}
        <SectionReveal>
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-text-primary">{siteConfig.name}</h2>
            <p className="text-text-secondary mt-1">{siteConfig.tagline}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-sm text-text-muted">
              <span>{bio.location}</span>
              <span>{bio.email}</span>
              <span>{bio.phone}</span>
            </div>
          </div>
        </SectionReveal>

        {/* Education */}
        <SectionReveal>
          <section className="mb-10">
            <h3 className="text-sm uppercase tracking-wider text-accent mb-4 font-medium">
              Education
            </h3>
            <div className="border-l-2 border-border pl-5">
              <p className="font-semibold text-text-primary">{education.degree}</p>
              <p className="text-sm text-text-secondary">
                {education.institution}{education.period ? ` · ${education.period}` : ""}
              </p>
            </div>
          </section>
        </SectionReveal>

        {/* Experience */}
        <SectionReveal>
          <section className="mb-10">
            <h3 className="text-sm uppercase tracking-wider text-accent mb-4 font-medium">
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <div key={i} className="border-l-2 border-border pl-5">
                  <p className="font-semibold text-text-primary">{exp.role}</p>
                  <p className="text-sm text-text-muted mb-2">
                    {exp.company} · {exp.period}
                  </p>
                  <ul className="space-y-1">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-text-secondary flex gap-2">
                        <span className="text-accent shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </SectionReveal>

        {/* Skills */}
        <SectionReveal>
          <section>
            <h3 className="text-sm uppercase tracking-wider text-accent mb-4 font-medium">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[...new Set(Object.values(skills).flat())].map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-3 py-1 text-sm text-text-secondary"
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
