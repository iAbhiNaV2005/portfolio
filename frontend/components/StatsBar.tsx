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
    if (!isInView) return;

    let current = 0;
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / numericPart), 30);
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
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="flex items-center justify-center gap-6 sm:gap-12 md:gap-16 py-8">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            {i > 0 && (
              <div className="hidden" aria-hidden="true" />
            )}
            <span className="text-3xl sm:text-4xl font-bold text-accent">
              <AnimatedNumber value={stat.value} />
            </span>
            <span className="text-xs sm:text-sm text-text-muted mt-1 whitespace-nowrap">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
