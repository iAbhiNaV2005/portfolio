"use client";

import React from "react";
import FadeIn from "@/components/FadeIn";
import AnimatedText from "@/components/AnimatedText";
import ContactButton from "@/components/ContactButton";
import LiveProjectButton from "@/components/LiveProjectButton";
import { siteConfig } from "@/lib/data";

export default function AboutSection() {
  const aboutText =
    "I am Abhinav Mitra, a Full Stack Software Engineer focused on architecting resilient distributed backends, autonomous AI agents, and serverless cloud systems. With production delivery spanning idempotent payment engines processing INR 100K+ and AST-powered RAG systems, I build software engineered for scale and speed.";

  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-12 py-24 sm:py-28 bg-[#0C0C0C] select-none"
      style={{ overflowX: "clip" }}
    >
      {/* ── 4 Decorative 3D Images in Corners (Spatial Depth) ───────────── */}
      {/* Top-left: Moon Icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none w-[110px] sm:w-[150px] md:w-[200px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon 3D icon"
          className="w-full h-auto object-contain drop-shadow-2xl opacity-80"
        />
      </FadeIn>

      {/* Bottom-left: 3D Object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[8%] z-10 pointer-events-none w-[90px] sm:w-[130px] md:w-[170px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D object"
          className="w-full h-auto object-contain drop-shadow-2xl opacity-75"
        />
      </FadeIn>

      {/* Top-right: Lego Icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none w-[110px] sm:w-[150px] md:w-[200px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego 3D icon"
          className="w-full h-auto object-contain drop-shadow-2xl opacity-80"
        />
      </FadeIn>

      {/* Bottom-right: 3D Group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[8%] z-10 pointer-events-none w-[120px] sm:w-[160px] md:w-[210px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D group element"
          className="w-full h-auto object-contain drop-shadow-2xl opacity-75"
        />
      </FadeIn>

      {/* ── Content Container ─────────────────────────── */}
      <div className="flex flex-col items-center justify-center text-center z-20 max-w-4xl mx-auto">
        {/* Section Tag */}
        <FadeIn delay={0} y={20} duration={0.6}>
          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-light mb-4 block">
            Software Engineer · Systems Architect
          </span>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1} y={40} duration={0.8}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 11vw, 150px)" }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="h-8 sm:h-12 md:h-14" />

        {/* Animated paragraph: character-by-character scroll opacity */}
        <AnimatedText
          text={aboutText}
          className="text-[#D7E2EA] font-normal text-center leading-relaxed max-w-[680px]"
          style={{ fontSize: "clamp(1.05rem, 2vw, 1.45rem)" }}
        />

        {/* Key Metrics Quick Row */}
        <FadeIn delay={0.25} y={30} duration={0.8} className="w-full mt-12 sm:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto w-full">
            <div className="rounded-2xl border border-[#D7E2EA]/15 bg-[#121212]/60 p-4 text-center">
              <span className="text-2xl sm:text-3xl font-black text-white block">INR 100K+</span>
              <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-light mt-1 block">
                Payment Volume Processed
              </span>
            </div>
            <div className="rounded-2xl border border-[#D7E2EA]/15 bg-[#121212]/60 p-4 text-center">
              <span className="text-2xl sm:text-3xl font-black text-white block">300+ Solved</span>
              <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-light mt-1 block">
                LeetCode Algorithms
              </span>
            </div>
            <div className="rounded-2xl border border-[#D7E2EA]/15 bg-[#121212]/60 p-4 text-center">
              <span className="text-2xl sm:text-3xl font-black text-white block">41K+ ⭐</span>
              <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-light mt-1 block">
                Open Source Contributor
              </span>
            </div>
          </div>
        </FadeIn>

        <div className="h-12 sm:h-16" />

        {/* Action Button Row */}
        <FadeIn delay={0.35} y={30} duration={0.7}>
          <div className="flex items-center gap-4">
            <ContactButton href="#contact" label="Let's Talk" />
            <LiveProjectButton
              href={siteConfig.resumeUrl}
              label="View Resume ↗"
              className="px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
