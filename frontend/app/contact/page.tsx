import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import ContactForm from "@/components/ContactForm";
import { bio, socialLinks } from "@/lib/data";
import { EnvelopeIcon, MapPinIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Contact — Abhinav Mitra",
  description: "Get in touch with Abhinav Mitra for software engineering opportunities and technical collaboration.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        {/* Header */}
        <SectionReveal>
          <div className="mb-12 max-w-2xl border-b border-border pb-6">
            <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider block mb-1">
              Connect
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-text-primary mb-2">
              Let us start a conversation.
            </h1>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Actively interviewing for full-time Software Engineer and Full Stack roles. Open to relocate or discuss technical systems.
            </p>
          </div>
        </SectionReveal>

        <div className="grid gap-8 lg:grid-cols-[1fr,320px] items-start">
          {/* Form */}
          <SectionReveal>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <ContactForm />
            </div>
          </SectionReveal>

          {/* Sidebar cards */}
          <SectionReveal delay={0.1}>
            <div className="space-y-3">
              {/* Availability Status Card */}
              <div className="rounded-xl border border-border bg-surface p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="font-display text-sm font-bold text-text-primary">
                    Currently Interviewing
                  </span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Ready to join as a Full Stack Software Engineer. Deep expertise in Java, Spring Boot, React, and AWS Serverless architectures.
                </p>
              </div>

              {/* Direct email card */}
              <div className="flex items-center gap-3.5 rounded-xl border border-border bg-surface p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-hover text-accent">
                  <EnvelopeIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-text-muted uppercase">Direct Email</p>
                  <a
                    href={`mailto:${bio.email}`}
                    className="text-xs font-semibold text-text-primary hover:text-accent transition-colors"
                  >
                    {bio.email}
                  </a>
                </div>
              </div>

              {/* Location card */}
              <div className="flex items-center gap-3.5 rounded-xl border border-border bg-surface p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-hover text-accent">
                  <MapPinIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-text-muted uppercase">Location</p>
                  <p className="text-xs font-semibold text-text-primary">{bio.location}</p>
                </div>
              </div>

              {/* LeetCode link */}
              <div className="rounded-xl border border-border bg-surface p-4 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-mono text-text-muted uppercase">LeetCode (300+ Solved)</p>
                  <p className="text-xs font-semibold text-text-primary">Algorithms Practice</p>
                </div>
                <a
                  href={socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-amber-500 transition-colors"
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </PageTransition>
  );
}
