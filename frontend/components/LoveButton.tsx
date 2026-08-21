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
      x: (Math.random() - 0.5) * 60,
      y: -40 - Math.random() * 40,
      scale: Math.random() * 0.5 + 0.8,
      rot: (Math.random() - 0.5) * 40,
    }));
    setBurstHearts(newBurst);
    setTimeout(() => setBurstHearts([]), 900);

    // Optimistic UI
    setCount((prev) => (prev ?? 42) + 1);
    setLoved(true);
    localStorage.setItem("loveGiven", "true");

    try {
      const data = await postLove();
      setCount(data.count);
    } catch (err) {
      console.error("[LoveButton] postLove failed:", err);
      // Rollback
      setCount((prev) => (prev !== null ? prev - 1 : null));
      setLoved(false);
      localStorage.removeItem("loveGiven");
    }
  }, [loved]);

  return (
    <div className="relative inline-block">
      <motion.button
        whileTap={{ scale: 0.88 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={handleClick}
        className={`group relative flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm font-medium backdrop-blur-md transition-all duration-300 cursor-pointer ${
          mounted && loved
            ? "border-heart/40 bg-heart/10 text-heart shadow-[0_0_20px_rgba(244,63,94,0.2)]"
            : "border-border/70 bg-surface/60 text-text-secondary hover:border-heart/40 hover:text-heart hover:bg-surface"
        }`}
        aria-label={`Love the portfolio. Current count: ${count ?? "..."}`}
      >
        <motion.div
          animate={loved ? { scale: [1, 1.35, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <HeartIcon
            className={`h-4.5 w-4.5 transition-colors ${
              mounted && loved ? "text-heart" : "text-text-muted group-hover:text-heart"
            }`}
          />
        </motion.div>
        <span className="tabular-nums font-medium">
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
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center text-lg select-none"
          >
            ❤️
          </motion.span>
        ))}
      </AnimatePresence>

      {/* Already loved tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-primary shadow-xl"
          >
            Already received your love! ❤️
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
