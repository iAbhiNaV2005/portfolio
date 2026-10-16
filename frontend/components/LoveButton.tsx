"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeartIcon } from "@heroicons/react/24/solid";
import { getLoveCount, postLove } from "@/lib/api";

export default function LoveButton() {
  const [count, setCount] = useState<number | null>(null);
  const [loved, setLoved] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [burstHearts, setBurstHearts] = useState<{ id: number; x: number; y: number; scale: number; rot: number }[]>([]);

  useEffect(() => {
    setMounted(true);
    if (localStorage.getItem("loveGiven") === "true") {
      setLoved(true);
    }
    getLoveCount()
      .then((data) => setCount(data.count))
      .catch(() => setCount(42));
  }, []);

  const handleClick = useCallback(async () => {
    if (loved) {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
      return;
    }

    // Trigger multi-heart burst animation
    const newBurst = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 50,
      y: -30 - Math.random() * 35,
      scale: Math.random() * 0.4 + 0.8,
      rot: (Math.random() - 0.5) * 30,
    }));
    setBurstHearts(newBurst);
    setTimeout(() => setBurstHearts([]), 800);

    // Optimistic UI
    setCount((prev) => (prev ?? 42) + 1);
    setLoved(true);
    localStorage.setItem("loveGiven", "true");

    try {
      const data = await postLove();
      setCount(data.count);
    } catch {
      // Rollback
      setCount((prev) => (prev !== null ? prev - 1 : null));
      setLoved(false);
      localStorage.removeItem("loveGiven");
    }
  }, [loved]);

  return (
    <div className="relative inline-block">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className={`group relative flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors duration-150 cursor-pointer ${
          mounted && loved
            ? "border-rose-500/40 bg-rose-500/10 text-rose-500"
            : "border-border bg-surface text-text-secondary hover:border-rose-500/40 hover:text-rose-500"
        }`}
        aria-label={`Appreciate portfolio. Current count: ${count ?? "..."}`}
      >
        <HeartIcon
          className={`h-4 w-4 transition-colors ${
            mounted && loved ? "text-rose-500" : "text-text-muted group-hover:text-rose-500"
          }`}
        />
        <span className="tabular-nums font-mono">
          {count !== null ? count : "..."}
        </span>
      </motion.button>

      {/* Floating Burst Particles */}
      <AnimatePresence>
        {burstHearts.map((h) => (
          <motion.span
            key={h.id}
            initial={{ opacity: 1, scale: 0.2, x: 0, y: 0 }}
            animate={{
              opacity: 0,
              scale: h.scale,
              x: h.x,
              y: h.y,
              rotate: h.rot,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center text-rose-500 select-none"
          >
            <HeartIcon className="h-4 w-4" />
          </motion.span>
        ))}
      </AnimatePresence>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-surface px-2.5 py-1 text-[11px] font-medium text-text-primary"
          >
            Appreciation already recorded!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
