import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Abhinav Mitra",
  description:
    "Full stack web development, cloud architecture, UI/UX development, and backend systems. Professional development services by Abhinav Mitra.",
};

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We discuss your goals, requirements, and timeline to define a clear project scope.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "I create wireframes and prototypes to establish the look, feel, and user flow before writing code.",
  },
  {
    step: "03",
    title: "Develop",
    description:
      "Clean, tested code built iteratively — with regular updates so you always know the progress.",
  },
  {
    step: "04",
    title: "Deploy",
    description:
      "Launch to production with CI/CD pipelines, monitoring, and post-launch support.",
  },
];

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <SectionReveal>
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Services
          </h1>
          <div className="h-1 w-12 rounded-full bg-accent mb-4" />
          <p className="text-text-secondary mb-12 max-w-2xl">
            I offer end-to-end development services for businesses, startups,
            and individuals who need reliable, production-quality software.
          </p>
        </SectionReveal>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2 mb-20">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* How I Work */}
        <SectionReveal>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-3">
              How I Work
            </h2>
            <p className="text-text-secondary max-w-xl">
              A straightforward, transparent process from first conversation to
              final delivery.
            </p>
          </div>
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {processSteps.map((step, i) => (
            <SectionReveal key={step.step}>
              <div className="relative rounded-xl border border-border bg-surface/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-surface">
                <span className="text-3xl font-bold text-accent/20 absolute top-4 right-5 select-none">
                  {step.step}
                </span>
                <h3 className="text-base font-semibold text-text-primary mb-2 mt-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* CTA */}
        <SectionReveal>
          <div className="rounded-xl border border-border bg-surface/50 p-8 sm:p-12 text-center backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-text-primary mb-3">
              Ready to start your project?
            </h2>
            <p className="text-text-secondary mb-6 max-w-lg mx-auto">
              Tell me about your idea and I&apos;ll get back to you with a
              tailored plan and timeline.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Get in Touch
            </Link>
          </div>
        </SectionReveal>
      </div>
    </PageTransition>
  );
}
