"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import GridGuides from "@/components/ui/GridGuides";
import LottieFeedback from "@/components/ui/LottieFeedback";

interface CoverHeroSectionProps {
  onNavigateToAbout?: () => void;
  onNavigateToProjects?: () => void;
}

export default function CoverHeroSection({
  onNavigateToAbout,
  onNavigateToProjects,
}: CoverHeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const topGhostRef = useRef<HTMLDivElement>(null);
  const midTitleRef = useRef<HTMLDivElement>(null);
  const bottomGhostRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  // GSAP Entrance & Mouse Parallax
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".gsap-header-item", {
        y: -15,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
      })
        .from(
          ".gsap-crosshair",
          {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            stagger: 0.05,
          },
          "-=0.4"
        )
        .from(
          [topGhostRef.current, midTitleRef.current, bottomGhostRef.current],
          {
            scale: 0.96,
            opacity: 0,
            duration: 1.0,
            stagger: 0.15,
          },
          "-=0.5"
        );

      // Micro parallax on mouse movement
      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        gsap.to(topGhostRef.current, {
          x: x * -6,
          y: y * -4,
          duration: 1.2,
          ease: "power2.out",
        });

        gsap.to(bottomGhostRef.current, {
          x: x * 6,
          y: y * 4,
          duration: 1.2,
          ease: "power2.out",
        });

        gsap.to(midTitleRef.current, {
          x: x * 3,
          y: y * 2,
          duration: 1.0,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { scope: containerRef }
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("linhsa112@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section
      ref={containerRef}
      id="portfolio"
      className="relative w-screen h-screen min-h-[640px] shrink-0 paper-texture select-none overflow-hidden"
    >
      {/* 16-Column Blueprint Grid Lines */}
      <GridGuides showCenterH={true} />

      {/* ─────────────────────────────────────────────────────────────
          1. TOP ROW: CORNER LABELS & CROSSHAIRS
      ───────────────────────────────────────────────────────────── */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 sm:px-10 pt-5 sm:pt-6 flex items-center justify-between pointer-events-auto">
        {/* Top-Left: Category Label */}
        <div
          onClick={onNavigateToProjects}
          className="gsap-header-item text-xs sm:text-[13px] font-sans tracking-normal text-[#121212] font-normal cursor-pointer hover:opacity-65 transition-opacity"
        >
          Graphic Design/ UI/UX Design
        </div>

        {/* Top Registration Crosshairs */}
        <div className="gsap-crosshair absolute top-5 sm:top-6 left-[20.26%] -translate-x-1/2 pointer-events-none text-black/60 text-xs font-mono font-light select-none">
          +
        </div>
        <div className="gsap-crosshair absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 pointer-events-none text-black/60 text-xs font-mono font-light select-none">
          +
        </div>
        <div className="gsap-crosshair absolute top-5 sm:top-6 left-[79.74%] -translate-x-1/2 pointer-events-none text-black/60 text-xs font-mono font-light select-none">
          +
        </div>

        {/* Top-Right: Pure Email */}
        <div className="gsap-header-item">
          <button
            onClick={handleCopyEmail}
            className="text-xs sm:text-[13px] font-sans tracking-normal text-[#121212] font-normal hover:opacity-65 transition-opacity cursor-pointer flex items-center gap-1.5"
            title="Click to copy email"
          >
            <span>linhsa112@gmail.com</span>
            {copied && <LottieFeedback size={16} />}
          </button>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. MIDDLE REGISTRATION CROSSHAIRS & FLANKING LABELS
      ───────────────────────────────────────────────────────────── */}
      {/* Left Margin Crosshair */}
      <div className="gsap-crosshair absolute left-[2.2%] top-1/2 -translate-y-1/2 pointer-events-none text-black/60 text-xs font-mono select-none z-20">
        +
      </div>

      {/* "Sa Sa Nguyen" positioned in Column 2-3 */}
      <div
        onClick={onNavigateToAbout}
        className="gsap-header-item absolute left-[11%] sm:left-[13%] top-1/2 -translate-y-1/2 z-20 text-xs sm:text-[13px] font-sans text-[#121212] font-normal whitespace-nowrap cursor-pointer hover:opacity-65 transition-opacity"
      >
        Sa Sa Nguyen
      </div>

      {/* Column 4 Crosshair (Start of Portfolio box at 20.26%) */}
      <div className="gsap-crosshair absolute left-[20.26%] top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none text-black/60 text-xs font-mono select-none z-20">
        +
      </div>

      {/* Column 13 Crosshair (End of Portfolio box at 79.74%) */}
      <div className="gsap-crosshair absolute left-[79.74%] top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none text-black/60 text-xs font-mono select-none z-20">
        +
      </div>

      {/* "@2026" positioned in Column 14-15 */}
      <div className="gsap-header-item absolute left-[83%] sm:left-[84.5%] top-1/2 -translate-y-1/2 z-20 text-xs sm:text-[13px] font-sans text-[#121212] font-normal whitespace-nowrap">
        @2026
      </div>

      {/* Right Margin Crosshair */}
      <div className="gsap-crosshair absolute right-[2.2%] top-1/2 -translate-y-1/2 pointer-events-none text-black/60 text-xs font-mono select-none z-20">
        +
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. 100% HEIGHT CONTINUOUS VERTICAL TYPOGRAPHIC STACK
          - Spans 100% of the viewport height (100vh)
          - Top Ghost: y = 0 to 33.333vh (descenders touch Mid ascenders)
          - Mid Center Black: y = 33.333vh to 66.666vh (P, f, l connect Top and Bottom)
          - Bottom Ghost: y = 66.666vh to 100vh (ascenders touch Mid descenders)
          - ZERO GAP between layers: Top đụng Mid, Mid đụng Bottom
      ───────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-y-0 z-10 pointer-events-none select-none flex flex-col justify-between items-center w-[59.47917%] max-w-[1142px]"
        style={{
          left: "20.26042%",
          height: "100vh",
        }}
      >
        {/* Layer 1: Top Ghost (Height: 33.333vh, Top touches top of screen, Bottom touches Mid) */}
        <div
          ref={topGhostRef}
          className="w-full h-1/3 flex items-center justify-center select-none will-change-transform opacity-75"
        >
          <svg
            viewBox="0 0 1142 360"
            className="w-full h-full overflow-visible"
            preserveAspectRatio="xMidYMid meet"
          >
            <text
              x="50%"
              y="76%"
              textAnchor="middle"
              className="font-editorial"
              fill="rgba(18, 18, 18, 0.085)"
              fontSize="310"
              letterSpacing="-2"
              fontWeight="400"
            >
              Portfolio
            </text>
          </svg>
        </div>

        {/* Layer 2: Central Solid Crisp Black (Height: 33.333vh, Mid touches Top & Bottom) */}
        <div
          ref={midTitleRef}
          className="w-full h-1/3 flex items-center justify-center select-none will-change-transform z-10"
        >
          <svg
            viewBox="0 0 1142 360"
            className="w-full h-full overflow-visible"
            preserveAspectRatio="xMidYMid meet"
          >
            <text
              x="50%"
              y="76%"
              textAnchor="middle"
              className="font-editorial"
              fill="#121212"
              fontSize="310"
              letterSpacing="-2"
              fontWeight="400"
            >
              Portfolio
            </text>
          </svg>
        </div>

        {/* Layer 3: Bottom Ghost (Height: 33.333vh, Top touches Mid, Bottom touches bottom of screen) */}
        <div
          ref={bottomGhostRef}
          className="w-full h-1/3 flex items-center justify-center select-none will-change-transform opacity-75"
        >
          <svg
            viewBox="0 0 1142 360"
            className="w-full h-full overflow-visible"
            preserveAspectRatio="xMidYMid meet"
          >
            <text
              x="50%"
              y="76%"
              textAnchor="middle"
              className="font-editorial"
              fill="rgba(18, 18, 18, 0.085)"
              fontSize="310"
              letterSpacing="-2"
              fontWeight="400"
            >
              Portfolio
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
