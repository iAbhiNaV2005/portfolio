import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import ContactForm from "@/components/ContactForm";
import { bio, socialLinks } from "@/lib/data";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Contact — Abhinav Mitra",
  description: "Get in touch with Abhinav Mitra for project inquiries, engineering collaborations, or opportunities.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        {/* Header */}
        <SectionReveal>
          <div className="mb-14 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Connect
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-primary mt-2 mb-4">
              Let us build something great.
            </h1>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Have a project in mind, need technical leadership, or want to discuss full-time engineering roles? Drop a message below.
            </p>
          </div>
        </SectionReveal>

        <div className="grid gap-12 lg:grid-cols-[1fr,320px] items-start">
          {/* Form */}
          <SectionReveal>
            <div className="rounded-3xl border border-border/80 bg-surface/40 p-6 sm:p-10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
              <ContactForm />
            </div>
          </SectionReveal>

          {/* Sidebar cards */}
          <SectionReveal delay={0.1}>
            <div className="space-y-4">
              {/* Availability Status Card */}
              <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-display text-sm font-bold text-text-primary">
                    Currently Available
                  </span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Open for select freelance projects, consulting engagements, and full-time software engineering positions.
                </p>
              </div>

              {/* Direct email card */}
              <div className="flex items-center gap-3.5 rounded-2xl border border-border/60 bg-surface/50 p-5 backdrop-blur-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
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

              {/* Location card */}
              <div className="flex items-center gap-3.5 rounded-2xl border border-border/60 bg-surface/50 p-5 backdrop-blur-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <MapPinIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Location</p>
                  <p className="text-sm font-semibold text-text-primary">{bio.location}</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </PageTransition>
  );
}
