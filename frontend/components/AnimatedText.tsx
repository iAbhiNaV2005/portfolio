"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface CharacterSpanProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function CharacterSpan({ char, progress, range }: CharacterSpanProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const displayChar = char === " " ? "\u00A0" : char;

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none" aria-hidden="true">
        {displayChar}
      </span>
      <motion.span style={{ opacity }} className="absolute inset-0">
        {displayChar}
      </motion.span>
    </span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className = "", style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const totalChars = text.length;

  // Split by words to preserve natural line wrapping, while assigning global character index
  const words = text.split(" ");
  let globalCharIndex = 0;

  return (
    <p ref={containerRef} className={className} style={style}>
      {words.map((word, wordIdx) => {
        const wordChars = word.split("");
        const spans = (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {wordChars.map((char) => {
              const i = globalCharIndex++;
              const start = i / totalChars;
              const end = Math.min(1, (i + 1) / totalChars);
              return (
                <CharacterSpan
                  key={i}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );

        // Account for space after word (except last word)
        let spaceSpan = null;
        if (wordIdx < words.length - 1) {
          const spaceIdx = globalCharIndex++;
          const start = spaceIdx / totalChars;
          const end = Math.min(1, (spaceIdx + 1) / totalChars);
          spaceSpan = (
            <CharacterSpan
              key={`space-${wordIdx}`}
              char=" "
              progress={scrollYProgress}
              range={[start, end]}
            />
          );
        }

        return (
          <React.Fragment key={wordIdx}>
            {spans}
            {spaceSpan}
          </React.Fragment>
        );
      })}
    </p>
  );
}
