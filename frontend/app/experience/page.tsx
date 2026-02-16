import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import { experiences } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience — Abhinav Mitra",
  description: "Work experience and internships of Abhinav Mitra.",
};

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-6 py-16">
        <SectionReveal>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Experience</h1>
          <div className="h-1 w-12 rounded-full bg-accent mb-10" />
        </SectionReveal>

        {/* Timeline */}
        <div className="relative border-l-2 border-border pl-6 sm:pl-8 space-y-10 sm:space-y-12">
          {experiences.map((exp, i) => (
            <SectionReveal key={i}>
              <div className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[1.85rem] sm:-left-[2.55rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />

                <p className="text-xs uppercase tracking-wider text-accent mb-1">
                  {exp.period}
                </p>
                <h3 className="text-lg font-semibold text-text-primary">
                  {exp.role}
                </h3>
                <p className="text-sm text-text-muted mb-3">{exp.company}</p>

                <ul className="space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-sm text-text-secondary leading-relaxed flex gap-2"
                    >
                      <span className="text-accent mt-1 shrink-0">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
