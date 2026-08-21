import type { Metadata } from "next";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import { experiences } from "@/lib/data";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Experience — Abhinav Mitra",
  description: "Work history, software engineering roles, and contributions of Abhinav Mitra.",
};

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        {/* Header */}
        <SectionReveal>
          <div className="mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Career
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-primary mt-2 mb-4">
              Work Experience & Impact
            </h1>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl">
              Proven track record engineering high-throughput backends, integrating AI architectures, and building production interfaces.
            </p>
          </div>
        </SectionReveal>

        {/* Timeline */}
        <div className="relative border-l-2 border-border/80 pl-6 sm:pl-10 space-y-12 sm:space-y-16">
          {experiences.map((exp, i) => (
            <SectionReveal key={exp.company + exp.period} delay={i * 0.1}>
              <div className="relative group">
                {/* Timeline node dot */}
                <div className="absolute -left-[1.95rem] sm:-left-[2.95rem] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-bg shadow-[0_0_12px_rgba(99,102,241,0.5)] transition-transform duration-300 group-hover:scale-125">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </div>

                {/* Company & Role header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3.5">
                    {/* Logo container */}
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/80 bg-surface/60 shadow-sm">
                      {exp.logo ? (
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <span className="font-display text-lg font-bold text-accent">
                          {exp.company[0]}
                        </span>
                      )}
                    </div>

                    <div>
                      <h2 className="font-display text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                        {exp.role}
                      </h2>
                      <p className="text-sm font-medium text-text-secondary">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center self-start sm:self-center rounded-full border border-border/60 bg-surface/50 px-3.5 py-1 text-xs font-semibold tracking-wide text-accent backdrop-blur-sm">
                    {exp.period}
                  </span>
                </div>

                {/* Bullet details card */}
                <div className="rounded-2xl border border-border/60 bg-surface/40 p-5 sm:p-6 backdrop-blur-sm transition-colors hover:border-accent/30 hover:bg-surface/60">
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed"
                      >
                        <span className="text-accent mt-1 shrink-0 font-bold">›</span>
                        <span>{bullet}</span>
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
