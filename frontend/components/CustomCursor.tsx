"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouchDevice) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const pos = { x: -100, y: -100, targetX: -100, targetY: -100 };

    const onMouseMove = (e: MouseEvent) => {
      pos.targetX = e.clientX;
      pos.targetY = e.clientY;
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, textarea, select, [role="button"], [data-cursor="pointer"]'
        );
        setIsPointer(Boolean(interactive));
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    const updateCursor = () => {
      // Lerp ring
      pos.x += (pos.targetX - pos.x) * 0.18;
      pos.y += (pos.targetY - pos.y) * 0.18;

      if (cursorRef.current) {
        gsap.set(cursorRef.current, {
          x: pos.x,
          y: pos.y,
        });
      }
      if (cursorDotRef.current) {
        gsap.set(cursorDotRef.current, {
          x: pos.targetX,
          y: pos.targetY,
        });
      }
    };

    gsap.ticker.add(updateCursor);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      gsap.ticker.remove(updateCursor);
    };
  }, [isVisible]);

  if (isTouch) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Outer follow ring */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent transition-all duration-200 ease-out ${
          isPointer
            ? "h-12 w-12 bg-accent/15 border-accent scale-110"
            : "h-8 w-8 bg-transparent border-accent/40 scale-100"
        }`}
        style={{ willChange: "transform" }}
      />
      {/* Center sharp dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent transition-transform duration-100 ${
          isPointer ? "h-1.5 w-1.5 opacity-60" : "h-1 w-1 opacity-100"
        }`}
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
