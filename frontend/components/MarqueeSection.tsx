"use client";

import React, { useRef, useState, useEffect } from "react";

interface ShowcaseItem {
  title: string;
  category: string;
  metric: string;
  image?: string;
  gradient?: string;
  tagline: string;
}

const row1Items: ShowcaseItem[] = [
  {
    title: "Eleveon Platform",
    category: "Full Stack & FinTech",
    metric: "INR 100K+ Live Volume",
    image: "/eleveon-thumb.png",
    tagline: "Next.js 14, Cashfree Webhooks, 1,000+ Users",
  },
  {
    title: "CodeRAG Engine",
    category: "Autonomous AI Agent",
    metric: "Sub-3s Vector Retrieval",
    image: "/coderag.png",
    tagline: "Spring Boot, pgvector, Custom MCP Server",
  },
  {
    title: "Grabpic Vision",
    category: "AWS Serverless Cloud",
    metric: "< 2s Face Indexing",
    image: "/image.png",
    tagline: "AWS Lambda, Docker, DLib, Amazon S3",
  },
  {
    title: "DentalCare Portal",
    category: "Client Production",
    metric: "Healthcare Booking Flow",
    image: "/dentalcare.png",
    tagline: "Next.js, Tailwind CSS, Responsive Design",
  },
  {
    title: "Distributed Backend Architecture",
    category: "Java & Spring Boot",
    metric: "Zero-Downtime Idempotency",
    gradient: "linear-gradient(135deg, #18011F 0%, #350849 50%, #7621B0 100%)",
    tagline: "Atomic Firestore Transactions, REST APIs, JPA",
  },
  {
    title: "ZipTales RAG Filter",
    category: "Open Source AI",
    metric: "AI Verification System",
    image: "/ziptales-thumb.png",
    tagline: "React, Supabase, Vector Search Pipelines",
  },
];

const row2Items: ShowcaseItem[] = [
  {
    title: "ai-job-search CLI",
    category: "Open Source Contributor",
    metric: "41k+ ⭐ Contributor",
    gradient: "linear-gradient(135deg, #091724 0%, #0F3354 50%, #175485 100%)",
    tagline: "Authored 35+ Bun Unit Tests & Parser Scrapers",
  },
  {
    title: "Loopless Mobile Agency",
    category: "Client Showcase",
    metric: "60fps Fluid Motion",
    image: "/loopless.png",
    tagline: "React, Framer Motion, Tailwind CSS",
  },
  {
    title: "Noodiyos AI QSR",
    category: "Internship Delivery",
    metric: "Sub-400ms UI Latency",
    image: "/Noodiyos.png",
    tagline: "LangChain, OpenAI Embeddings, Vector Search",
  },
  {
    title: "Neximprove SaaS",
    category: "Internship Delivery",
    metric: "22% SQL Query Speedup",
    image: "/Neximprove.png",
    tagline: "Express.js REST APIs, RBAC Admin Console",
  },
  {
    title: "300+ LeetCode DSA Solved",
    category: "Core Computer Science",
    metric: "Data Structures & Algos",
    gradient: "linear-gradient(135deg, #1A1305 0%, #4D340A 50%, #B8860B 100%)",
    tagline: "Graphs, Dynamic Programming, Trees & Heaps",
  },
  {
    title: "FitFlex Platform",
    category: "Personal Engineering",
    metric: "RapidAPI Integration",
    image: "/fitflex-thumb.png",
    tagline: "React.js, Express.js, Search Filtering",
  },
];

// Tripled lists to create continuous seamless parallax scrolling
const row1Tripled = [...row1Items, ...row1Items, ...row1Items];
const row2Tripled = [...row2Items, ...row2Items, ...row2Items];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const calcOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.28;
      setOffset(calcOffset);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-36 pb-12 overflow-hidden w-full relative"
    >
      <div className="flex flex-col gap-4">
        {/* Row 1: Moves RIGHT on scroll (translateX(offset - 200)) */}
        <div
          className="flex gap-4 flex-nowrap"
          style={{
            transform: `translateX(${offset - 250}px)`,
            willChange: "transform",
          }}
        >
          {row1Tripled.map((item, idx) => (
            <div
              key={`row1-${idx}`}
              className="w-[360px] sm:w-[420px] h-[240px] sm:h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#141414] border border-[#D7E2EA]/10 relative group hover:border-[#D7E2EA]/40 transition-colors"
            >
              {item.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-2xl select-none pointer-events-none group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div
                  className="w-full h-full p-6 flex flex-col justify-between"
                  style={{ background: item.gradient }}
                >
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/80 font-medium">
                    {item.category}
                  </span>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#D7E2EA]/80 font-light">{item.tagline}</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 tracking-wider">
                    {item.metric}
                  </span>
                </div>
              )}

              {/* Overlay card info for image cards */}
              {item.image && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/95 via-[#0C0C0C]/30 to-transparent flex flex-col justify-end p-5 select-none pointer-events-none">
                  <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/70 font-medium">
                    {item.category}
                  </span>
                  <div className="flex items-center justify-between gap-2 mt-0.5">
                    <h4 className="text-base sm:text-lg font-bold uppercase tracking-wide text-white">
                      {item.title}
                    </h4>
                    <span className="text-[11px] font-semibold text-emerald-400 shrink-0">
                      {item.metric}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#D7E2EA]/70 font-light truncate mt-0.5">
                    {item.tagline}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll (translateX(-(offset - 200))) */}
        <div
          className="flex gap-4 flex-nowrap"
          style={{
            transform: `translateX(${-(offset - 250)}px)`,
            willChange: "transform",
          }}
        >
          {row2Tripled.map((item, idx) => (
            <div
              key={`row2-${idx}`}
              className="w-[360px] sm:w-[420px] h-[240px] sm:h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#141414] border border-[#D7E2EA]/10 relative group hover:border-[#D7E2EA]/40 transition-colors"
            >
              {item.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-2xl select-none pointer-events-none group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div
                  className="w-full h-full p-6 flex flex-col justify-between"
                  style={{ background: item.gradient }}
                >
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/80 font-medium">
                    {item.category}
                  </span>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#D7E2EA]/80 font-light">{item.tagline}</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 tracking-wider">
                    {item.metric}
                  </span>
                </div>
              )}

              {/* Overlay card info for image cards */}
              {item.image && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/95 via-[#0C0C0C]/30 to-transparent flex flex-col justify-end p-5 select-none pointer-events-none">
                  <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/70 font-medium">
                    {item.category}
                  </span>
                  <div className="flex items-center justify-between gap-2 mt-0.5">
                    <h4 className="text-base sm:text-lg font-bold uppercase tracking-wide text-white">
                      {item.title}
                    </h4>
                    <span className="text-[11px] font-semibold text-emerald-400 shrink-0">
                      {item.metric}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#D7E2EA]/70 font-light truncate mt-0.5">
                    {item.tagline}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
