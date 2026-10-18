"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeartIcon } from "@heroicons/react/24/solid";
import { getLoveCount, postLove } from "@/lib/api";

interface LoveButtonProps {
  floating?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  showLabel?: boolean;
}

export default function LoveButton({
  floating = false,
  size = "md",
  className = "",
  showLabel = true,
}: LoveButtonProps) {
  const [count, setCount] = useState<number>(48);
  const [loved, setLoved] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [burstHearts, setBurstHearts] = useState<
    { id: number; x: number; y: number; scale: number; rot: number }[]
  >([]);

  useEffect(() => {
    setMounted(true);
    const storedLoved = localStorage.getItem("portfolio_loved") === "true";
    const storedCount = localStorage.getItem("portfolio_love_count");

    if (storedLoved) {
      setLoved(true);
    }

    if (storedCount) {
      setCount(parseInt(storedCount, 10));
    }

    getLoveCount()
      .then((data) => {
        if (data && typeof data.count === "number") {
          setCount(data.count);
          localStorage.setItem("portfolio_love_count", data.count.toString());
        }
      })
      .catch(() => {
        if (!storedCount) {
          setCount(48);
        }
      });

    // Listen for custom cross-component updates so all like buttons stay in sync
    const handleSync = (e: Event) => {
      const customEvent = e as CustomEvent<{ count: number; loved: boolean }>;
      if (customEvent.detail) {
        setCount(customEvent.detail.count);
        setLoved(customEvent.detail.loved);
      }
    };
    window.addEventListener("portfolio_love_updated", handleSync);

    // Scroll listener for floating mode to avoid covering hero action buttons
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > 240);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("portfolio_love_updated", handleSync);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = useCallback(async () => {
    if (loved) {
      setTooltipMessage("Already recorded! Thank you ❤️");
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2200);
      return;
    }

    // Trigger multi-heart particle burst animation
    const newBurst = Array.from({ length: 8 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 80,
      y: -30 - Math.random() * 50,
      scale: Math.random() * 0.5 + 0.8,
      rot: (Math.random() - 0.5) * 45,
    }));
    setBurstHearts(newBurst);
    setTimeout(() => setBurstHearts([]), 900);

    // Optimistic UI update
    const newCount = count + 1;
    setCount(newCount);
    setLoved(true);
    localStorage.setItem("portfolio_loved", "true");
    localStorage.setItem("portfolio_love_count", newCount.toString());

    // Broadcast update to all other LoveButtons on the page
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("portfolio_love_updated", {
          detail: { count: newCount, loved: true },
        })
      );
    }

    setTooltipMessage("Thanks for loving the design! ✨");
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2400);

    try {
      const data = await postLove();
      if (data && typeof data.count === "number") {
        setCount(data.count);
        localStorage.setItem("portfolio_love_count", data.count.toString());
      }
    } catch {
      // Kept optimistic count in localStorage for 100% smooth user experience
    }
  }, [loved, count]);

  const isSmall = size === "sm";

  const buttonContent = (
    <div className={`relative inline-block select-none ${className}`}>
      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        onClick={handleClick}
        className={`group relative flex items-center transition-all duration-300 cursor-pointer border ${
          isSmall
            ? "gap-1.5 rounded-full px-3 py-1 text-xs"
            : "gap-2.5 rounded-full px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium tracking-wider uppercase"
        } ${
          mounted && loved
            ? "border-rose-500/60 bg-rose-500/15 text-rose-300 shadow-[0_0_25px_rgba(244,63,94,0.35)]"
            : "border-[#D7E2EA]/20 bg-[#161616]/90 text-[#D7E2EA] hover:border-rose-500/40 hover:text-rose-300 hover:shadow-[0_0_20px_rgba(244,63,94,0.2)]"
        }`}
        aria-label={`Like the design. Current count: ${count}`}
      >
        <motion.div
          animate={
            mounted && loved
              ? { scale: [1, 1.3, 1] }
              : { scale: [1, 1.15, 1] }
          }
          transition={{
            duration: mounted && loved ? 0.4 : 2,
            repeat: mounted && loved ? 0 : Infinity,
            ease: "easeInOut",
          }}
          className="shrink-0"
        >
          <HeartIcon
            className={`transition-colors duration-200 ${
              isSmall ? "h-3.5 w-3.5" : "h-4 w-4 sm:h-5 sm:w-5"
            } ${
              mounted && loved
                ? "text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]"
                : "text-rose-400/80 group-hover:text-rose-500"
            }`}
          />
        </motion.div>

        {showLabel && (
          <span className="font-medium tracking-wide">
            {mounted && loved ? "Liked Design" : "Like Design"}
          </span>
        )}

        <span
          className={`font-mono text-xs px-2 py-0.5 rounded-full border transition-colors ${
            mounted && loved
              ? "bg-rose-500/20 border-rose-500/40 text-rose-200"
              : "bg-[#202020] border-[#D7E2EA]/15 text-[#D7E2EA]/80 group-hover:border-rose-500/30 group-hover:text-rose-300"
          }`}
        >
          {count}
        </span>
      </motion.button>

      {/* Floating Burst Hearts Animation */}
      <AnimatePresence>
        {burstHearts.map((h) => (
          <motion.span
            key={h.id}
            initial={{ opacity: 1, scale: 0.3, x: 0, y: 0 }}
            animate={{
              opacity: 0,
              scale: h.scale,
              x: h.x,
              y: h.y,
              rotate: h.rot,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center text-rose-500 select-none z-50"
          >
            <HeartIcon
              className={`${
                isSmall ? "h-4 w-4" : "h-5 w-5"
              } drop-shadow-[0_0_10px_rgba(244,63,94,0.9)]`}
            />
          </motion.span>
        ))}
      </AnimatePresence>

      {/* Interactive Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-rose-500/40 bg-[#161616]/95 backdrop-blur-md px-3.5 py-1.5 text-xs font-medium text-rose-300 shadow-[0_4px_20px_rgba(0,0,0,0.8)] z-50 pointer-events-none"
          >
            {tooltipMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  if (floating) {
    return (
      <AnimatePresence>
        {scrolledPastHero && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="fixed bottom-6 right-6 z-40 pointer-events-auto"
          >
            {buttonContent}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return buttonContent;
}
