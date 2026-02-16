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
  const [burst, setBurst] = useState(false);

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

    // Trigger burst animation
    setBurst(true);
    setTimeout(() => setBurst(false), 600);

    // Optimistic UI
    setCount((prev) => (prev ?? 42) + 1);
    setLoved(true);
    localStorage.setItem("loveGiven", "true");

    try {
      const data = await postLove();
      setCount(data.count);
    } catch {
      // keep optimistic count
    }
  }, [loved]);

  return (
    <div className="relative inline-block">
      <motion.button
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.05 }}
        onClick={handleClick}
        className="flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm backdrop-blur-sm transition-colors hover:border-heart/40 hover:bg-surface cursor-pointer"
        aria-label={`Love the design. Current count: ${count ?? "..."}`}
      >
        <HeartIcon
          className={`w-4 h-4 transition-colors ${
            mounted && loved ? "text-heart" : "text-text-muted"
          }`}
        />
        <span className="text-text-secondary">
          {count !== null ? count : "..."}
        </span>
      </motion.button>

      {/* Heart burst animation */}
      <AnimatePresence>
        {burst && (
          <motion.span
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 1.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <span className="text-2xl">❤️</span>
          </motion.span>
        )}
      </AnimatePresence>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 w-max max-w-50 text-center rounded-md bg-surface border border-border px-3 py-1.5 text-xs text-text-secondary shadow-lg"
          >
            Thanks — you already loved this ❤️
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
