"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  CodeBracketIcon,
  CloudIcon,
  SparklesIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";
import type { Service } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  code: CodeBracketIcon,
  cloud: CloudIcon,
  sparkles: SparklesIcon,
  server: ServerIcon,
};

interface Props {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: Props) {
  const Icon = iconMap[service.icon] || CodeBracketIcon;
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D perspective tilt values outside React state for 60fps
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative rounded-2xl border border-border/70 bg-surface/50 p-6 sm:p-8 backdrop-blur-md transition-colors duration-300 hover:border-accent/40 hover:bg-surface/80 hover:shadow-[0_10px_35px_rgba(99,102,241,0.08)]"
    >
      {/* Icon container */}
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
        <Icon className="h-6 w-6 transition-colors duration-300" />
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-bold tracking-tight text-text-primary mb-2.5">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Tech highlight pills */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
        {service.highlights.map((h) => (
          <span
            key={h}
            className="rounded-full bg-muted/60 px-3 py-1 text-xs font-medium text-text-secondary transition-colors group-hover:text-text-primary"
          >
            {h}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
