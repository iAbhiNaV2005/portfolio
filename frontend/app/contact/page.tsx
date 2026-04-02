import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import ContactForm from "@/components/ContactForm";
import { bio } from "@/lib/data";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Contact — Abhinav Mitra",
  description: "Get in touch with Abhinav Mitra for projects, collaborations, or opportunities.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-6 py-16">
        <SectionReveal>
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Get in Touch
          </h1>
          <div className="h-1 w-12 rounded-full bg-accent mb-4" />
          <p className="text-text-secondary mb-12 max-w-xl">
            Whether you have a project idea, a job opportunity, or just want to
            say hello — I&apos;d love to hear from you.
          </p>
        </SectionReveal>

        <div className="grid gap-12 md:grid-cols-[1fr,280px]">
          {/* Form */}
          <SectionReveal>
            <ContactForm />
          </SectionReveal>

          {/* Sidebar */}
          <SectionReveal>
            <div className="space-y-5">
              {/* Availability status */}
              <div className="rounded-lg border border-accent/30 bg-accent/5 p-4 mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-text-primary">
                    Available for new projects
                  </span>
                </div>
                <p className="text-xs text-text-muted">
                  Currently accepting freelance work and full-time opportunities.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <EnvelopeIcon className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-text-primary">Email</p>
                  <a
                    href={`mailto:${bio.email}`}
                    className="text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    {bio.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    Location
                  </p>
                  <p className="text-sm text-text-secondary">{bio.location}</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </PageTransition>
  );
}
