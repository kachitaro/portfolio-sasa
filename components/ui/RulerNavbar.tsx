"use client";

import { useEffect, useRef, useState } from "react";

export interface RulerSection {
  id: string;
  label: string;
  index: number;
}

export const BASE_SECTIONS: RulerSection[] = [
  { id: "portfolio", label: "Portfolio", index: 0 },
  { id: "about", label: "About", index: 1 },
  { id: "design-system", label: "Design System", index: 2 },
  { id: "webgl", label: "3D & WebGL", index: 3 },
  { id: "product-design", label: "Product Design", index: 4 },
  { id: "mobile-app", label: "Mobile App", index: 5 },
  { id: "ai-interface", label: "AI Interface", index: 6 },
];

interface RulerNavbarProps {
  progress: number; // Normalized continuous progress [0, 1] across the 7 sections
  activeSectionIndex: number;
  onNavigate: (index: number) => void;
}

/**
 * RulerNavbar:
 * - Top row: Metric ruler line with repeating ticks and a 1px continuous "I" cursor.
 * - Bottom row: Section categories situated strictly UNDER the ruler.
 * - 100% mathematically synchronized with the active viewport panel.
 */
export default function RulerNavbar({
  progress,
  activeSectionIndex,
  onNavigate,
}: RulerNavbarProps) {
  const rulerTrackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(1920);

  useEffect(() => {
    const updateWidth = () => {
      if (rulerTrackRef.current) {
        setTrackWidth(rulerTrackRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Clamped continuous [0, 1] progress
  const safeProgress = Math.min(Math.max(progress, 0), 1);
  const cursorPixelX = safeProgress * trackWidth;

  const handleRulerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!rulerTrackRef.current) return;
    const rect = rulerTrackRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const targetIndex = Math.round(ratio * (BASE_SECTIONS.length - 1));
    onNavigate(targetIndex);
  };

  return (
    <nav
      aria-label="Horizontal Portfolio Navigation Ruler"
      className="fixed bottom-0 left-0 right-0 z-40 w-full bg-[#dedede]/95 backdrop-blur-md border-t border-black/10 select-none py-2.5 px-6 sm:px-12 pointer-events-auto"
    >
      <div
        ref={rulerTrackRef}
        onClick={handleRulerClick}
        className="relative w-full max-w-[1920px] mx-auto flex flex-col justify-between cursor-pointer group gap-1.5"
      >
        {/* ─────────────────────────────────────────────────────────────
            1. TOP ROW: METRIC RULER TICKS WITH SMOOTH 1px "I" CURSOR
        ───────────────────────────────────────────────────────────── */}
        <div className="relative w-full h-5 flex items-end">
          {/* Major tick lines at section boundary coordinates */}
          <div className="absolute inset-0 flex justify-between items-end pointer-events-none z-0">
            {BASE_SECTIONS.map((sec, i) => (
              <div
                key={sec.id}
                className={`w-[1px] bg-black transition-all duration-150 ${
                  activeSectionIndex === i
                    ? "h-5 opacity-90"
                    : "h-3 opacity-30"
                }`}
              />
            ))}
          </div>

          {/* Repeating Tick Lines (1px tick every 10px from Compsych guidelines) */}
          <div
            className="w-full h-2.5 opacity-35 group-hover:opacity-60 transition-opacity"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(18, 18, 18, 0.75) 1px, transparent 1px)",
              backgroundPosition: "0 100%",
              backgroundRepeat: "repeat-x",
              backgroundSize: "10px 100%",
            }}
          />

          {/* Smooth 1px Continuous "I" Cursor Indicator */}
          <div
            className="absolute bottom-0 flex flex-col items-center pointer-events-none z-20 will-change-transform"
            style={{
              transform: `translate3d(${cursorPixelX}px, 0, 0) translateX(-50%)`,
            }}
          >
            <div className="animate-cursor-blink flex flex-col items-center">
              <svg
                width="8"
                height="22"
                viewBox="0 0 8 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#121212]"
              >
                {/* Top serif */}
                <line x1="0.5" y1="1" x2="7.5" y2="1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square" />
                {/* Vertical stem */}
                <line x1="4" y1="1" x2="4" y2="21" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square" />
                {/* Bottom serif */}
                <line x1="0.5" y1="21" x2="7.5" y2="21" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square" />
              </svg>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. BOTTOM ROW: SECTION LABELS SITUATED UNDER THE RULER
        ───────────────────────────────────────────────────────────── */}
        <div className="w-full flex items-center justify-between pt-1 z-10">
          {BASE_SECTIONS.map((sec, idx) => {
            const isActive = activeSectionIndex === idx;
            return (
              <button
                key={sec.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(idx);
                }}
                className={`text-[10px] sm:text-xs font-sans tracking-tight transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "font-bold text-[#121212] opacity-100"
                    : "font-normal text-black/45 hover:text-[#121212] hover:opacity-90"
                }`}
              >
                {sec.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
