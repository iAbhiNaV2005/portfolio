"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export default function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto w-full max-w-5xl"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="group rounded-2xl border border-border/80 bg-white/[0.02] p-1 transition-all duration-300 hover:border-accent/40"
          >
            <div className="flex flex-col justify-between h-full rounded-[calc(1rem-0.25rem)] bg-surface p-4 sm:p-5 border border-white/[0.04] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
              <div>
                <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text-primary block mb-1 group-hover:text-accent transition-colors">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-text-primary block leading-snug">
                  {stat.label}
                </span>
              </div>
              <p className="mt-2 text-[11px] text-text-muted leading-relaxed">
                {stat.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
