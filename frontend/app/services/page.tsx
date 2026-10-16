import type { Metadata } from "next";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Engineering Capabilities — Abhinav Mitra",
  description:
    "Full stack software engineering, backend architectures, AI agent systems, and cloud-native solutions.",
};

const capabilities = [
  {
    title: "Backend & Distributed Systems",
    description:
      "High-throughput RESTful services, database optimizations, and role-based access control built with Java (Spring Boot) and TypeScript.",
    metrics: "22% SQL latency reduction on SaaS reports",
    tech: ["Spring Boot", "Express.js", "PostgreSQL", "DynamoDB"],
  },
  {
    title: "Cloud Native & AWS Serverless",
    description:
      "Zero-EC2 overhead serverless architectures. Automated deployment pipelines and containerized Lambda workloads with sub-2s processing times.",
    metrics: "100% serverless auto-scaling on image ingest",
    tech: ["AWS Lambda", "AWS SAM", "S3", "Docker"],
  },
  {
    title: "AI & Agentic Systems (RAG + MCP)",
    description:
      "Autonomous coding agents and semantic search engines utilizing AST chunking, pgvector similarity search, and LangGraph multi-step loops.",
    metrics: "Sub-3s retrieval · 40% LLM token reduction",
    tech: ["pgvector", "LangChain", "LangGraph", "MCP"],
  },
  {
    title: "Production E-Commerce & Payment Flow",
    description:
      "High-concurrency client platforms handling automated webhook reconciliation and financial transactions at scale.",
    metrics: "INR 100,000+ live transactions · 100% success rate",
    tech: ["Next.js 14", "TypeScript", "Cashfree Gateway", "Firebase"],
  },
];

export default function ServicesRedirectPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <SectionReveal>
          <div className="mb-12">
            <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider block mb-1">
              Engineering Profile
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-text-primary mb-3">
              Core Engineering Capabilities
            </h1>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl">
              Specialized full-stack and systems engineering focused on backend reliability, AI workflows, and verified client production execution.
            </p>
          </div>
        </SectionReveal>

        <div className="grid gap-4 sm:grid-cols-2 mb-12">
          {capabilities.map((cap, i) => (
            <SectionReveal key={cap.title} delay={i * 0.05}>
              <div className="rounded-xl border border-border bg-surface p-6 h-full flex flex-col justify-between">
                <div>
                  <h2 className="font-display text-lg font-bold text-text-primary mb-2">
                    {cap.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                    {cap.description}
                  </p>
                  <div className="rounded-md border border-border bg-surface-hover px-2.5 py-1 text-xs font-mono text-accent mb-4">
                    {cap.metrics}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                  {cap.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-muted px-2 py-0.5 text-[11px] font-mono text-text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <div className="rounded-2xl border border-border bg-surface p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="font-display text-lg font-bold text-text-primary">
                Looking for technical architecture blueprints?
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary mt-1">
                Explore our interactive system designs and DSA metrics in Skills & Systems.
              </p>
            </div>
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-xs font-semibold text-white hover:bg-accent-hover transition-colors shrink-0"
            >
              <span>Explore Systems & Stack</span>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </PageTransition>
  );
}
