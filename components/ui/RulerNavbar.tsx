"use client";

import { useEffect, useMemo, useRef, useState } from "react";

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
  progress: number; // Normalized continuous progress [0, 1]
  activeSectionIndex: number;
  onNavigate: (index: number) => void;
}

/**
 * RulerNavbar with 0.5s Auto-Hide:
 * - Only reveals when scrolling, dragging, or hovering near the bottom of the screen.
 * - Smoothly fades out after 0.5s of idle time.
 * - Features exact hanging metric ticks & triangular-wedge "I" cursor from Figma.
 */
export default function RulerNavbar({
  progress,
  activeSectionIndex,
  onNavigate,
}: RulerNavbarProps) {
  const rulerTrackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(1920);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

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

  // Auto-hide on scroll logic: hides after 0.5s of inactivity
  useEffect(() => {
    const handleActivity = () => {
      setIsVisible(true);

      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }

      // Hide after exactly 0.5 seconds (500ms) of inactivity unless hovered
      hideTimerRef.current = setTimeout(() => {
        if (!isHovered) {
          setIsVisible(false);
        }
      }, 500);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Reveal when cursor is in the bottom 120px zone
      if (e.clientY >= window.innerHeight - 120) {
        handleActivity();
      }
    };

    window.addEventListener("scroll", handleActivity, { passive: true });
    window.addEventListener("wheel", handleActivity, { passive: true });
    window.addEventListener("touchmove", handleActivity, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("wheel", handleActivity);
      window.removeEventListener("touchmove", handleActivity);
      window.removeEventListener("mousemove", handleMouseMove);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [isHovered]);

  // Generate deterministic tick marks array based on width (~10px spacing)
  const tickCount = useMemo(() => {
    return Math.floor(trackWidth / 10);
  }, [trackWidth]);

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

  const shouldShow = isVisible || isHovered;

  return (
    <nav
      aria-label="Horizontal Portfolio Navigation Ruler"
      onMouseEnter={() => {
        setIsHovered(true);
        setIsVisible(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className={`fixed bottom-0 left-0 right-0 z-40 w-full bg-transparent select-none transition-all duration-300 ease-out ${
        shouldShow
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}>
      <div
        ref={rulerTrackRef}
        onClick={handleRulerClick}
        className="relative w-full max-w-[1920px] mx-auto flex flex-col justify-end cursor-pointer group">
        {/* ─────────────────────────────────────────────────────────────
            1. EXACT METRIC RULER TICKS & "I" CURSOR FROM IMAGE #1
        ───────────────────────────────────────────────────────────── */}
        <div className="relative w-full h-14 flex items-end">
          {/* Ticks hanging down from common top baseline */}
          <div className="absolute inset-x-0 bottom-0 top-3 flex justify-between items-start pointer-events-none z-0 px-2 sm:px-6">
            {Array.from({ length: tickCount > 0 ? tickCount : 180 }).map(
              (_, idx) => {
                const isMajor = idx % 10 === 0;
                const isSemi = idx % 5 === 0 && !isMajor;

                return (
                  <div
                    key={idx}
                    className={`w-px bg-[#121212] shrink-0 transition-opacity ${
                      isMajor
                        ? "h-[22px] opacity-45"
                        : isSemi
                          ? "h-4 opacity-35"
                          : "h-[8px] opacity-25"
                    }`}
                  />
                );
              },
            )}
          </div>

          {/* Exact Triangular-Wedge Serif "I" Cursor */}
          <div
            className="absolute bottom-0 flex flex-col items-center pointer-events-none z-20 will-change-transform"
            style={{
              transform: `translate3d(${cursorPixelX}px, 0, 0) translateX(-50%)`,
            }}>
            <svg
              width="14"
              height="52"
              viewBox="0 0 14 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#121212] drop-shadow-sm">
              {/* Top Triangular Wedge Serif */}
              <polygon points="1,3 13,3 8.5,8 5.5,8" fill="#121212" />
              <line
                x1="1"
                y1="3"
                x2="13"
                y2="3"
                stroke="#121212"
                strokeWidth="1.2"
              />

              {/* Vertical Solid Stem */}
              <line
                x1="7"
                y1="5"
                x2="7"
                y2="47"
                stroke="#121212"
                strokeWidth="1.8"
              />

              {/* Bottom Triangular Wedge Serif resting on bottom line */}
              <polygon points="1,49 13,49 8.5,44 5.5,44" fill="#121212" />
              <line
                x1="1"
                y1="49"
                x2="13"
                y2="49"
                stroke="#121212"
                strokeWidth="1.2"
              />
            </svg>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. SECTION LABELS SITUATED UNDER THE RULER TICKS
        ───────────────────────────────────────────────────────────── */}
        <div className="w-full flex items-center justify-between py-1.5 px-2 sm:px-6 z-10">
          {BASE_SECTIONS.map((sec, idx) => {
            const isActive = activeSectionIndex === idx;
            return (
              <button
                key={sec.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(idx);
                }}
                className={`text-[9.5px] sm:text-xs font-sans tracking-tight transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "font-bold text-[#121212] opacity-100 scale-105"
                    : "font-normal text-black/45 hover:text-[#121212] hover:opacity-90"
                }`}>
                {sec.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
