"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactButton from "@/components/ContactButton";
import LiveProjectButton from "@/components/LiveProjectButton";
import LoveButton from "@/components/LoveButton";
import FadeIn from "@/components/FadeIn";
import { siteConfig, socialLinks } from "@/lib/data";

export default function Home() {
  return (
    <main
      className="w-full bg-[#0C0C0C] text-[#D7E2EA] min-h-screen relative selection:bg-[#B600A8] selection:text-white"
      style={{ overflowX: "clip" }}
    >
      {/* ── Persistent Floating "Like the Design" Button ── */}
      <LoveButton floating={true} />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Services / Capabilities Section */}
      <ServicesSection />

      {/* 5. Flagship Projects Section */}
      <ProjectsSection />

      {/* ── Contact & Footer Section (Anchor for #contact) ── */}
      <footer
        id="contact"
        className="w-full bg-[#0C0C0C] border-t border-[rgba(215,226,234,0.1)] py-20 sm:py-28 px-6 md:px-12 text-center relative z-20"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
          <FadeIn delay={0} y={30} duration={0.8}>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light mb-3 block">
              Initiate Contact · Full-Time Roles
            </span>
            <h2
              className="hero-heading font-black uppercase tracking-tight leading-none mb-6"
              style={{ fontSize: "clamp(2.75rem, 8vw, 6rem)" }}
            >
              Let&apos;s Connect
            </h2>
            <p className="text-[#D7E2EA]/80 max-w-lg mx-auto text-sm sm:text-base mb-8 font-light leading-relaxed">
              Open to Full-Time Software Engineering roles in Delhi or open to relocate. Let&apos;s build scalable distributed backends, resilient cloud systems, and autonomous AI agents.
            </p>

            {/* Email & Resume Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <ContactButton href={`mailto:${siteConfig.email}`} label="Email Abhinav" />
              <LiveProjectButton
                href={siteConfig.resumeUrl}
                label="View Resume ↗"
                className="px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm"
              />
            </div>

            {/* "Like the Design" Feature in Footer */}
            <div className="flex flex-col items-center gap-2 mb-10 pt-4 border-t border-[rgba(215,226,234,0.08)] w-full max-w-md mx-auto">
              <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/50 font-light">
                Enjoyed the experience? Drop a heart!
              </span>
              <LoveButton />
            </div>

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/80 hover:text-white hover:border-[#D7E2EA] transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/80 hover:text-white hover:border-[#D7E2EA] transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/80 hover:text-white hover:border-[#D7E2EA] transition-colors"
              >
                LeetCode (300+ Solved) ↗
              </a>
              <a
                href={siteConfig.resumeDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-[#D7E2EA]/20 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/10 transition-colors"
              >
                PDF Download ↓
              </a>
            </div>
          </FadeIn>

          <div className="mt-20 pt-8 border-t border-[rgba(215,226,234,0.08)] w-full flex flex-col sm:flex-row items-center justify-between text-xs text-[#D7E2EA]/50 font-light gap-4">
            <span className="uppercase tracking-wider">
              © {new Date().getFullYear()} ABHINAV MITRA — FULL STACK SOFTWARE ENGINEER.
            </span>
            <div className="flex items-center gap-6">
              <a
                href="#about"
                className="hover:text-[#D7E2EA] transition-colors uppercase tracking-wider"
              >
                About
              </a>
              <a
                href="#services"
                className="hover:text-[#D7E2EA] transition-colors uppercase tracking-wider"
              >
                Expertise
              </a>
              <a
                href="#projects"
                className="hover:text-[#D7E2EA] transition-colors uppercase tracking-wider"
              >
                Projects
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="hover:text-[#D7E2EA] transition-colors uppercase tracking-wider"
              >
                Back To Top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
