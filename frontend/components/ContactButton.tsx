"use client";

import React from "react";
import { motion } from "framer-motion";

interface ContactButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  label?: string;
  target?: string;
}

export default function ContactButton({
  onClick,
  href = "#contact",
  className = "",
  label = "Contact Me",
  target,
}: ContactButtonProps) {
  const content = (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`rounded-full uppercase font-medium tracking-widest text-white transition-all cursor-pointer px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base select-none inline-flex items-center justify-center ${className}`}
      style={{
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
        outline: "2px solid #FFFFFF",
        outlineOffset: "-3px",
      }}
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
