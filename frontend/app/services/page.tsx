import type { Metadata } from "next";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Services — Abhinav Mitra",
  description:
    "Full stack web development, cloud architecture, UI/UX engineering, and API backend systems.",
};

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "Aligning on system architecture, database schema, user flows, and technical scope to ensure a reliable foundation.",
  },
  {
    step: "02",
    title: "Prototyping & Design",
    description:
      "Crafting high-fidelity, accessible interfaces with interactive micro-animations before writing production code.",
  },
  {
    step: "03",
    title: "Full Stack Development",
    description:
      "Engineering clean, modular TypeScript code with robust tests, secure authentication, and optimized API latency.",
  },
  {
    step: "04",
    title: "Deployment & Scale",
    description:
      "Configuring containerized pipelines, cloud infrastructure on AWS, monitoring tools, and zero-downtime releases.",
  },
];

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        {/* Header */}
        <SectionReveal>
          <div className="mb-14 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Offerings
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-primary mt-2 mb-4">
              Comprehensive Engineering Services
            </h1>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              From conception to high-scale production, delivering digital products that are fast, dependable, and maintainable.
            </p>
          </div>
        </SectionReveal>

        {/* Service Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 mb-24">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Execution Workflow */}
        <SectionReveal>
          <div className="mb-12 text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Process
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mt-2 mb-3">
              How Projects Come to Life
            </h2>
            <p className="text-sm sm:text-base text-text-secondary">
              A transparent, iterative execution methodology keeping you in full control every step of the way.
            </p>
          </div>
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-24">
          {processSteps.map((step, i) => (
            <SectionReveal key={step.step} delay={i * 0.08}>
              <div className="group relative flex flex-col justify-between rounded-2xl border border-border/70 bg-surface/50 p-6 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-surface hover:shadow-[0_10px_30px_rgba(99,102,241,0.06)] h-full">
                <div>
                  <span className="font-display text-4xl font-black text-accent/20 transition-colors group-hover:text-accent/35 select-none block mb-4">
                    {step.step}
                  </span>
                  <h3 className="font-display text-lg font-bold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* CTA */}
        <SectionReveal>
          <div className="rounded-3xl border border-border/80 bg-surface/50 p-8 sm:p-14 text-center backdrop-blur-xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-3">
              Ready to kick off your project?
            </h2>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto text-base">
              Let us map out the technical roadmap, timelines, and execution strategy together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-hover transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </PageTransition>
  );
}
