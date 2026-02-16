import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import ContactForm from "@/components/ContactForm";
import { bio } from "@/lib/data";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Contact — Abhinav Mitra",
  description: "Get in touch with Abhinav Mitra.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-6 py-16">
        <SectionReveal>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Get in Touch</h1>
          <div className="h-1 w-12 rounded-full bg-accent mb-4" />
          <p className="text-text-secondary mb-12 max-w-xl">
            Have a question or want to collaborate? Send me a message and I&apos;ll
            get back to you as soon as I can.
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
                <PhoneIcon className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-text-primary">Phone</p>
                  <p className="text-sm text-text-secondary">{bio.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-text-primary">Location</p>
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
