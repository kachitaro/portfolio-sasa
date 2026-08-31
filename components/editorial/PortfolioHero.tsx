"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import ThreeEditorialCanvas from "./ThreeEditorialCanvas";
import BottomRuler from "./BottomRuler";

interface PortfolioHeroProps {
  onOpenProjects?: () => void;
  onOpenAbout?: () => void;
}

export default function PortfolioHero({
  onOpenProjects,
  onOpenAbout,
}: PortfolioHeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 0.15 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle Parallax offsets for watermark layers
  const topWatermarkY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);
  const topWatermarkX = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

  const bottomWatermarkY = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const bottomWatermarkX = useTransform(smoothX, [-0.5, 0.5], [5, -5]);

  // Subtle 3D tilt for main title
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["1.5deg", "-1.5deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-1.5deg", "1.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const xPct = clientX / innerWidth - 0.5;
    const yPct = clientY / innerHeight - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("linhsa112@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen min-h-[680px] paper-texture flex flex-col justify-between select-none overflow-hidden"
    >
      {/* Three.js Interactive WebGL Light & Dust Layer */}
      <ThreeEditorialCanvas />

      {/* Grid Hairline Guides (matching exact Figma coordinates) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Vertical Guide 1 (Left Margin ~2%) */}
        <div className="absolute top-0 bottom-0 left-[2.2%] w-[1px] bg-black/[0.045]" />
        {/* Vertical Guide 2 (Left Inner Guide ~25.8%) */}
        <div className="absolute top-0 bottom-0 left-[25.8%] w-[1px] bg-black/[0.045]" />
        {/* Vertical Guide 3 (Center ~50%) */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-black/[0.045]" />
        {/* Vertical Guide 4 (Right Inner Guide ~74.2%) */}
        <div className="absolute top-0 bottom-0 left-[74.2%] w-[1px] bg-black/[0.045]" />
        {/* Vertical Guide 5 (Right Margin ~97.8%) */}
        <div className="absolute top-0 bottom-0 right-[2.2%] w-[1px] bg-black/[0.045]" />

        {/* Center Horizontal Line */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-black/[0.045]" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          1. TOP ROW: CORNER LABELS & PRECISION CROSSHAIRS
      ───────────────────────────────────────────────────────────── */}
      <header className="relative z-10 w-full px-6 sm:px-10 pt-6 sm:pt-8 flex items-center justify-between">
        {/* Top-Left: Category Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          onClick={onOpenProjects}
          className="text-xs sm:text-[13px] font-sans tracking-normal text-[#121212] font-normal cursor-pointer hover:opacity-70 transition-opacity"
        >
          Graphic Design/ UI/UX Design
        </motion.div>

        {/* Top Registration Crosshairs: at 25.8%, 50%, 74.2% */}
        <div className="absolute top-6 sm:top-8 left-[25.8%] -translate-x-1/2 pointer-events-none text-black/60 text-xs font-mono font-light select-none">
          +
        </div>
        <div className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 pointer-events-none text-black/60 text-xs font-mono font-light select-none">
          +
        </div>
        <div className="absolute top-6 sm:top-8 left-[74.2%] -translate-x-1/2 pointer-events-none text-black/60 text-xs font-mono font-light select-none">
          +
        </div>

        {/* Top-Right: Pure Email (Matching Figma without icons) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <button
            onClick={handleCopyEmail}
            className="text-xs sm:text-[13px] font-sans tracking-normal text-[#121212] font-normal hover:opacity-70 transition-opacity cursor-pointer relative"
          >
            linhsa112@gmail.com
            {copiedEmail && (
              <span className="absolute right-0 top-full mt-1 text-[10px] font-mono text-emerald-700 bg-white/80 px-1.5 py-0.5 rounded shadow-sm">
                copied!
              </span>
            )}
          </button>
        </motion.div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. MIDDLE ROW: FLANKING LABELS & CENTRAL "PORTFOLIO"
      ───────────────────────────────────────────────────────────── */}
      <main className="relative z-10 w-full flex-1 flex items-center justify-between px-6 sm:px-10">
        {/* Left Side: Margin Crosshair + "Sa Sa Nguyen" + Inner Crosshair */}
        <div className="flex items-center w-[25.8%] justify-between pr-4 z-20">
          <span className="text-black/60 text-xs font-mono select-none pointer-events-none -ml-1">
            +
          </span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onClick={onOpenAbout}
            className="text-xs sm:text-[13px] font-sans text-[#121212] font-normal whitespace-nowrap cursor-pointer hover:opacity-70 transition-opacity"
          >
            Sa Sa Nguyen
          </motion.div>
          <span className="text-black/60 text-xs font-mono select-none pointer-events-none -mr-1">
            +
          </span>
        </div>

        {/* Center: Triple-Layer Typographic "Portfolio" */}
        <div className="flex-1 flex items-center justify-center pointer-events-none z-10 relative">
          <div className="relative flex flex-col items-center justify-center w-full">
            {/* Top Ghost Watermark "Portfolio" */}
            <motion.div
              style={{
                y: topWatermarkY,
                x: topWatermarkX,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0 }}
              className="absolute -top-[16vw] sm:-top-[13vw] md:-top-[11vw] lg:-top-[140px] select-none pointer-events-none text-center"
            >
              <span className="font-editorial text-[18vw] sm:text-[16vw] lg:text-[200px] font-light text-black/[0.09] tracking-[-0.015em] leading-none block">
                Portfolio
              </span>
            </motion.div>

            {/* Central Solid Crisp Black "Portfolio" */}
            <motion.h1
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-10 font-editorial text-[19vw] sm:text-[17vw] lg:text-[215px] font-normal text-[#121212] tracking-[-0.015em] leading-[0.85] select-none text-center"
            >
              Portfolio
            </motion.h1>

            {/* Bottom Ghost Watermark "Portfolio" */}
            <motion.div
              style={{
                y: bottomWatermarkY,
                x: bottomWatermarkX,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0 }}
              className="absolute -bottom-[16vw] sm:-bottom-[13vw] md:-bottom-[11vw] lg:-bottom-[140px] select-none pointer-events-none text-center"
            >
              <span className="font-editorial text-[18vw] sm:text-[16vw] lg:text-[200px] font-light text-black/[0.09] tracking-[-0.015em] leading-none block">
                Portfolio
              </span>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Inner Crosshair + "@2026" + Margin Crosshair */}
        <div className="flex items-center w-[25.8%] justify-between pl-4 z-20">
          <span className="text-black/60 text-xs font-mono select-none pointer-events-none -ml-1">
            +
          </span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xs sm:text-[13px] font-sans text-[#121212] font-normal whitespace-nowrap"
          >
            @2026
          </motion.div>
          <span className="text-black/60 text-xs font-mono select-none pointer-events-none -mr-1">
            +
          </span>
        </div>
      </main>

      {/* ─────────────────────────────────────────────────────────────
          3. BOTTOM SECTION: METRIC RULER WITH VERTICAL I CURSOR
      ───────────────────────────────────────────────────────────── */}
      <footer className="relative z-10 w-full">
        <BottomRuler />
      </footer>
    </div>
  );
}
