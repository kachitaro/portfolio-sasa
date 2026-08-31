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

  // GSAP Mouse Parallax
  useGSAP(
    () => {
      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        gsap.to(topGhostRef.current, {
          x: x * -5,
          y: y * -3,
          duration: 1.2,
          ease: "power2.out",
        });

        gsap.to(bottomGhostRef.current, {
          x: x * 5,
          y: y * 3,
          duration: 1.2,
          ease: "power2.out",
        });

        gsap.to(midTitleRef.current, {
          x: x * 2,
          y: y * 1.5,
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
      {/* Unified 16-Column Blueprint Grid Lines & Concentric Crosshairs */}
      <GridGuides showTopH={true} showCenterH={true} showBottomH={false} />

      {/* ─────────────────────────────────────────────────────────────
          1. TOP ROW: LABELS (Positioned accurately at y = 68px)
      ───────────────────────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-[140px] z-30 pointer-events-none">
        {/* Top-Left: "Graphic Design/ UI/UX Design" centered in Column 1-3 */}
        <div className="absolute left-[2.2%] right-[79.74%] top-[68px] -translate-y-1/2 flex items-center justify-center pointer-events-auto">
          <button
            onClick={onNavigateToProjects}
            className="text-[18px] font-sans tracking-normal text-[#121212] font-medium cursor-pointer hover:opacity-65 transition-opacity whitespace-nowrap px-2"
          >
            Graphic Design/ UI/UX Design
          </button>
        </div>

        {/* Top-Right: "linhsa112@gmail.com" centered in Column 14-16 */}
        <div className="absolute left-[79.74%] right-[2.2%] top-[68px] -translate-y-1/2 flex items-center justify-center pointer-events-auto">
          <button
            onClick={handleCopyEmail}
            className="text-[18px] font-sans tracking-normal text-[#121212] font-medium hover:opacity-65 transition-opacity cursor-pointer flex items-center gap-2 whitespace-nowrap px-2"
            title="Click to copy email"
          >
            <span>linhsa112@gmail.com</span>
            {copied && <LottieFeedback size={18} />}
          </button>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. MIDDLE ROW: FLANKING LABELS (Positioned at y = 50%)
      ───────────────────────────────────────────────────────────── */}
      {/* "Sa Sa Nguyen" centered between Left Margin (2.2%) and Column 4 (20.26%) */}
      <div className="absolute left-[2.2%] right-[79.74%] top-1/2 -translate-y-1/2 z-30 flex items-center justify-center pointer-events-auto">
        <button
          onClick={onNavigateToAbout}
          className="text-[18px] font-sans text-[#121212] font-medium whitespace-nowrap cursor-pointer hover:opacity-65 transition-opacity px-2"
        >
          Sa Sa Nguyen
        </button>
      </div>

      {/* "@2026" centered between Column 13 (79.74%) and Right Margin (97.8%) */}
      <div className="absolute left-[79.74%] right-[2.2%] top-1/2 -translate-y-1/2 z-30 flex items-center justify-center pointer-events-none">
        <span className="text-[18px] font-sans text-[#121212] font-medium whitespace-nowrap px-2">
          @2026
        </span>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. TRIPLE-STACKED "PORTFOLIO" (Exact Figma Mathematical Coordinates)
          - Frame: 1920 x 1086 (16:9)
          - Width: 1142px (59.47917%), Left: 389px (20.26042%)
          - Height: 370.5614px (34.12168%)
          - Middle Center Black: top = 358px (32.965%)
          - Top Ghost Watermark: top = -12.56px (-1.156%) -> Touches top of Middle word
          - Bottom Ghost Watermark: top = 728.56px (67.086%) -> Touches bottom of Middle word
          - Zero gap between words!
      ───────────────────────────────────────────────────────────── */}
      {/* Layer 1: Top Ghost (shifted up by 370.56px, top: -1.156%) */}
      <div
        ref={topGhostRef}
        className="absolute z-10 pointer-events-none select-none flex items-center justify-center will-change-transform opacity-75"
        style={{
          left: "20.26042%",
          top: "-1.156%",
          width: "59.47917%",
          height: "34.12168%",
        }}
      >
        <svg
          viewBox="0 0 1142 370.5614"
          className="w-full h-full overflow-visible"
        >
          <text
            x="50%"
            y="81%"
            textAnchor="middle"
            className="font-editorial"
            fill="rgba(18, 18, 18, 0.085)"
            fontSize="345"
            letterSpacing="-2"
            fontWeight="400"
          >
            Portfolio
          </text>
        </svg>
      </div>

      {/* Layer 2: Center Crisp Black (top: 32.965%, centered vertically) */}
      <div
        ref={midTitleRef}
        className="absolute z-20 pointer-events-none select-none flex items-center justify-center will-change-transform"
        style={{
          left: "20.26042%",
          top: "32.965%",
          width: "59.47917%",
          height: "34.12168%",
        }}
      >
        <svg
          viewBox="0 0 1142 370.5614"
          className="w-full h-full overflow-visible"
        >
          <text
            x="50%"
            y="81%"
            textAnchor="middle"
            className="font-editorial"
            fill="#121212"
            fontSize="345"
            letterSpacing="-2"
            fontWeight="400"
          >
            Portfolio
          </text>
        </svg>
      </div>

      {/* Layer 3: Bottom Ghost (shifted down by 370.56px, top: 67.086%) */}
      <div
        ref={bottomGhostRef}
        className="absolute z-10 pointer-events-none select-none flex items-center justify-center will-change-transform opacity-75"
        style={{
          left: "20.26042%",
          top: "67.086%",
          width: "59.47917%",
          height: "34.12168%",
        }}
      >
        <svg
          viewBox="0 0 1142 370.5614"
          className="w-full h-full overflow-visible"
        >
          <text
            x="50%"
            y="81%"
            textAnchor="middle"
            className="font-editorial"
            fill="rgba(18, 18, 18, 0.085)"
            fontSize="345"
            letterSpacing="-2"
            fontWeight="400"
          >
            Portfolio
          </text>
        </svg>
      </div>
    </section>
  );
}
