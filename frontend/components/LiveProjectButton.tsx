"use client";

import React from "react";
import { motion } from "framer-motion";

interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  label?: string;
  target?: string;
}

export default function LiveProjectButton({
  href = "#",
  onClick,
  className = "",
  label = "Live Project",
  target = "_blank",
}: LiveProjectButtonProps) {
  const content = (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm transition-colors hover:bg-[#D7E2EA]/10 inline-flex items-center gap-2 justify-center cursor-pointer select-none ${className}`}
    >
      {label}
    </motion.button>
  );

  if (href && !onClick) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return content;
}
