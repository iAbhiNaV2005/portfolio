import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import { bio, education, skills } from "@/lib/data";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "About — Abhinav Mitra",
  description: "Learn more about Abhinav Mitra — Full Stack Developer, Cloud, and Low Level System Design.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Heading */}
        <SectionReveal>
          <h1 className="text-3xl font-bold text-text-primary mb-2">About Me</h1>
          <div className="h-1 w-12 rounded-full bg-accent mb-10" />
        </SectionReveal>

        {/* Bio */}
        <SectionReveal>
          <p className="text-text-secondary leading-relaxed max-w-2xl mb-12">
            {bio.short}
          </p>
        </SectionReveal>

        {/* Quick facts */}
        <SectionReveal>
          <div className="grid gap-4 sm:grid-cols-2 mb-12">
            <div className="flex items-center gap-3 rounded-lg border border-border bg-surface/50 p-4">
              <MapPinIcon className="w-5 h-5 text-accent shrink-0" />
              <span className="text-sm text-text-secondary">{bio.location}</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-surface/50 p-4">
              <EnvelopeIcon className="w-5 h-5 text-accent shrink-0" />
              <span className="text-sm text-text-secondary">{bio.email}</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-surface/50 p-4">
              <PhoneIcon className="w-5 h-5 text-accent shrink-0" />
              <span className="text-sm text-text-secondary">{bio.phone}</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-surface/50 p-4">
              <AcademicCapIcon className="w-5 h-5 text-accent shrink-0" />
              <div className="text-sm text-text-secondary">
                <span className="font-medium text-text-primary">{education.degree}</span>
                <br />
                {education.institution}{education.period ? ` · ${education.period}` : ""}
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Skills */}
        <SectionReveal>
          <h2 className="text-xl font-semibold text-text-primary mb-6">Skills</h2>
          <div className="space-y-6">
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
      </div>
    </PageTransition>
  );
}
