"use client";

import React from "react";
import FadeIn from "@/components/FadeIn";
import Magnet from "@/components/Magnet";
import ContactButton from "@/components/ContactButton";
import LiveProjectButton from "@/components/LiveProjectButton";
import { siteConfig } from "@/lib/data";

export default function HeroSection() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: siteConfig.resumeUrl, external: true },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <section
      className="h-screen w-full flex flex-col justify-between relative bg-[#0C0C0C] select-none"
      style={{ overflowX: "clip" }}
    >
      {/* ── Top Navigation Bar ─────────────────────── */}
      <FadeIn delay={0} y={-20} duration={0.6}>
        <nav className="w-full flex items-center justify-between px-6 md:px-12 pt-6 md:pt-8 z-30 relative">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-lg transition-opacity duration-200 hover:opacity-70 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* ── Hero Heading ───────────────────────────── */}
      <div className="w-full overflow-hidden flex justify-center z-0 mt-2 sm:mt-0 md:-mt-6 px-6 sm:px-10">
        <FadeIn delay={0.15} y={40} duration={0.8} className="w-full flex justify-center">
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-center"
            style={{ fontSize: "clamp(2rem, 9.4vw, 150px)" }}
          >
            Hi, i&apos;m abhinav
          </h1>
        </FadeIn>
      </div>

      {/* ── Magnetic Portrait of Abhinav Mitra ─────── */}
      <FadeIn
        delay={0.5}
        y={30}
        duration={0.9}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[220px] sm:w-[280px] md:w-[340px] lg:w-[380px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto"
      >
        <Magnet
          padding={140}
          strength={2.5}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <div className="relative rounded-[50px] sm:rounded-[60px] md:rounded-[70px] overflow-hidden border-2 border-[#D7E2EA]/20 bg-[#141414] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt="Abhinav Mitra - Full Stack Software Engineer"
              className="w-full h-auto object-cover block pointer-events-none brightness-95 contrast-105"
            />
            {/* Subtle bottom vignette to merge into the dark section */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D7E2EA]/80 font-medium px-3 py-1 rounded-full bg-[#0C0C0C]/60 backdrop-blur-sm border border-[#D7E2EA]/10">
                Software Engineer
              </span>
            </div>
          </div>
        </Magnet>
      </FadeIn>

      {/* ── Bottom Bar ─────────────────────────────── */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-12 z-20 mt-auto gap-4 sm:gap-0">
        {/* Left tagline text */}
        <FadeIn delay={0.35} y={20} duration={0.7}>
          <div className="flex flex-col gap-1.5 max-w-[280px] sm:max-w-[340px] md:max-w-[380px]">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-emerald-400 font-medium">
                Open to Full-Time Roles
              </span>
            </div>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
              style={{ fontSize: "clamp(0.75rem, 1.25vw, 1.35rem)" }}
            >
              Full Stack Software Engineer building distributed systems & autonomous AI agents
            </p>
          </div>
        </FadeIn>

        {/* Right Contact + Resume Action Buttons */}
        <FadeIn delay={0.5} y={20} duration={0.7}>
          <div className="flex items-center gap-3">
            <LiveProjectButton
              href={siteConfig.resumeUrl}
              label="Resume ↗"
              className="px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm"
            />
            <ContactButton href="#contact" label="Contact Me" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
