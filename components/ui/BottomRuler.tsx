"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * BottomRuler inspired by Compsych Design Guidelines (compsych.konpo.co)
 * Uses linear-gradient repeating tick pattern with major column divisions
 * and the editorial text-cursor indicator "I" at ~80.5% width.
 */
export default function BottomRuler() {
  const [activeX, setActiveX] = useState<number | null>(null);
  const cursorX = useMotionValue(80.5); // Default 80.5% (~1545px / 1920px)
  const smoothX = useSpring(cursorX, { damping: 28, stiffness: 220 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = ((e.clientX - rect.left) / rect.width) * 100;
    cursorX.set(Math.min(Math.max(percent, 2), 98));
    setActiveX(percent);
  };

  const handleMouseLeave = () => {
    cursorX.set(80.5); // Snap back to Figma position
    setActiveX(null);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-14 flex flex-col justify-end px-6 sm:px-10 select-none cursor-crosshair group pb-2"
    >
      {/* 16-Column Major Division Ticks (Grid alignment) */}
      <div className="absolute inset-x-6 sm:inset-x-10 bottom-2 h-7 flex justify-between pointer-events-none z-0">
        {Array.from({ length: 17 }).map((_, i) => (
          <div
            key={i}
            className={`w-[1px] bg-black transition-opacity ${
              i === 0 || i === 16
                ? "h-6 opacity-60"
                : i === 3 || i === 13
                ? "h-5 opacity-50 bg-black"
                : "h-4 opacity-30"
            }`}
          />
        ))}
      </div>

      {/* Compsych Repeating Gradient Ticks: 1px line every 10px (9px gap) */}
      <div
        className="w-full h-3 opacity-40 group-hover:opacity-65 transition-opacity"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(18, 18, 18, 0.7) 1px, transparent 1px)",
          backgroundPosition: "0 100%",
          backgroundRepeat: "repeat-x",
          backgroundSize: "10px 100%",
        }}
      />

      {/* Text Cursor "I" Indicator matching Figma */}
      <motion.div
        className="absolute bottom-2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-10"
        style={{ left: `${80.5}%` }}
        animate={{
          opacity: [1, 0.15, 1],
        }}
        transition={{
          duration: 1.1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="8"
          height="24"
          viewBox="0 0 8 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#121212]"
        >
          {/* Top serif */}
          <line x1="0.5" y1="1" x2="7.5" y2="1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square" />
          {/* Vertical stem */}
          <line x1="4" y1="1" x2="4" y2="23" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square" />
          {/* Bottom serif */}
          <line x1="0.5" y1="23" x2="7.5" y2="23" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square" />
        </svg>
      </motion.div>
    </div>
  );
}
