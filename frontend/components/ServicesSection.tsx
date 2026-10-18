"use client";

import React from "react";
import FadeIn from "@/components/FadeIn";

const capabilities = [
  {
    num: "01",
    name: "Distributed Backends & Java",
    tags: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Idempotency"],
    description:
      "Architecting resilient backend microservices with Java and Spring Boot. Focused on atomic transactions, idempotent webhook reconciliation, sub-200ms API response latency, and bulletproof database schema design.",
  },
  {
    num: "02",
    name: "AWS Serverless & Cloud",
    tags: ["AWS Lambda", "Amazon S3", "API Gateway", "AWS SAM", "Docker"],
    description:
      "Engineering event-driven serverless architectures with zero idle infrastructure cost. Deploying containerized computer vision models on Lambda with sub-2 second indexing and auto-scaling image ingest pipelines.",
  },
  {
    num: "03",
    name: "Autonomous AI & RAG Agents",
    tags: ["RAG", "Model Context Protocol (MCP)", "LangGraph", "pgvector", "FastAPI"],
    description:
      "Designing production Retrieval-Augmented Generation (RAG) engines with AST semantic parsing and pgvector. Authoring custom Model Context Protocol (MCP) servers allowing agentic multi-step reasoning over codebases.",
  },
  {
    num: "04",
    name: "Full Stack & Next.js Systems",
    tags: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description:
      "Crafting high-conversion digital experiences and web platforms. Specializing in optimistic state updates, sub-400ms perceived UI latency, cutting First Contentful Paint by 35%, and scalable front-end state architectures.",
  },
  {
    num: "05",
    name: "Data Structures & Open Source",
    tags: ["300+ Solved", "Algorithms", "Bun Test Harness", "41k+ ⭐ Contributor"],
    description:
      "Deep computer science fundamentals with 300+ LeetCode algorithmic problems solved. Active contributor to ai-job-search (41k+ stars) authoring 35+ Bun unit test suites and resilient regex scraper parsers.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Tag */}
        <FadeIn delay={0} y={20} duration={0.6}>
          <span className="text-xs uppercase tracking-widest text-[#0C0C0C]/60 font-semibold mb-3 block text-center">
            Core Engineering Competencies
          </span>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1} y={40} duration={0.8}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: "clamp(2.75rem, 11vw, 150px)" }}
          >
            Expertise
          </h2>
        </FadeIn>

        {/* Vertical list of 5 capability items */}
        <div className="w-full flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {capabilities.map((item, i) => (
            <FadeIn key={item.num} delay={i * 0.08} y={30} duration={0.7}>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] gap-4 sm:gap-8 md:gap-16 group hover:bg-[#0C0C0C]/[0.02] transition-colors rounded-xl px-2">
                {/* Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0 w-[110px] sm:w-[160px] md:w-[200px] select-none group-hover:text-black transition-colors"
                  style={{ fontSize: "clamp(3rem, 9vw, 130px)" }}
                >
                  {item.num}
                </div>

                {/* Name + Description + Tags stacked vertically on the right */}
                <div className="flex flex-col flex-1 justify-center pt-1 sm:pt-3">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-[#0C0C0C]/10 text-[#0C0C0C]/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3
                    className="font-medium uppercase text-[#0C0C0C] mb-2 tracking-wide"
                    style={{ fontSize: "clamp(1.1rem, 2.2vw, 2.1rem)" }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]"
                    style={{
                      fontSize: "clamp(0.85rem, 1.5vw, 1.2rem)",
                      opacity: 0.7,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
