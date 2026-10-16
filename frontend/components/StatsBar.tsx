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
            className="flex flex-col justify-between rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
          >
            <div>
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text-primary block mb-1">
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
        ))}
      </div>
    </motion.div>
  );
}
