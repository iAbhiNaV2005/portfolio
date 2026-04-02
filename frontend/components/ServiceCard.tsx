"use client";

import { motion } from "framer-motion";
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative rounded-xl border border-border bg-surface/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-surface hover:shadow-[0_0_25px_rgba(99,102,241,0.12),0_0_50px_rgba(99,102,241,0.06)]"
    >
      {/* Icon */}
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
        <Icon className="h-5 w-5" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-text-primary mb-2">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        {service.description}
      </p>

      {/* Highlights */}
      <div className="flex flex-wrap gap-2">
        {service.highlights.map((h) => (
          <span
            key={h}
            className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-text-muted transition-colors group-hover:text-text-secondary"
          >
            {h}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
