"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";

function AnimatedNumber({ value }: { value: string }) {
  const numericPart = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/\d/g, "");
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView || isNaN(numericPart)) return;

    let current = 0;
    const duration = 1400;
    const stepTime = Math.max(Math.floor(duration / numericPart), 25);
    const increment = Math.max(1, Math.floor(numericPart / (duration / stepTime)));

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericPart) {
        current = numericPart;
        clearInterval(timer);
      }
      setCount(current);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, numericPart]);

  return (
    <span ref={ref} className="tabular-nums font-display">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto w-full max-w-4xl"
    >
      <div className="grid grid-cols-3 gap-4 rounded-2xl border border-border/60 bg-surface/40 p-6 sm:p-8 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center text-center ${
              i < stats.length - 1 ? "border-r border-border/50 pr-2 sm:pr-4" : ""
            }`}
          >
            <span className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-accent">
              <AnimatedNumber value={stat.value} />
            </span>
            <span className="mt-1.5 text-xs sm:text-sm font-medium text-text-secondary">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
