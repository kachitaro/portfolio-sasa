"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useLenis } from "lenis/react";
import CoverHeroSection from "./CoverHeroSection";
import AboutDossierSection from "./AboutDossierSection";
import DesignSystemPage from "./DesignSystemPage";
import WebGLPage from "./WebGLPage";
import ProductDesignPage from "./ProductDesignPage";
import MobileAppPage from "./MobileAppPage";
import AIInterfacePage from "./AIInterfacePage";
import RulerNavbar, { BASE_SECTIONS } from "@/components/ui/RulerNavbar";

// 5 repeated sets for seamless bidirectional infinite scrolling
// Portfolio ⟵ AI Interface ⟵ Mobile App ⟵ ... ⟵ Portfolio ⟶ About ⟶ ... ⟶ AI Interface ⟶ Portfolio ⟶ ...
const SET_COUNT = 5;
const MIDDLE_SET_INDEX = 2; // Start in middle set so user can scroll backward immediately
const TOTAL_PANELS_COUNT = BASE_SECTIONS.length * SET_COUNT;

export default function HorizontalTrack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentVW, setCurrentVW] = useState(MIDDLE_SET_INDEX * BASE_SECTIONS.length * 100);
  const [isReady, setIsReady] = useState(false);
  const lenis = useLenis();

  const sectionCount = BASE_SECTIONS.length; // 7

  // Navigate directly to horizontal page
  const handleNavigate = useCallback(
    (index: number) => {
      const vh = window.innerHeight || 1080;
      const oneSetHeight = sectionCount * vh;
      const currentSet = Math.floor(window.scrollY / oneSetHeight);
      const targetScroll = currentSet * oneSetHeight + index * vh;

      if (lenis) {
        lenis.scrollTo(targetScroll, { duration: 0.9 });
      } else {
        window.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });
      }
    },
    [lenis, sectionCount]
  );

  useEffect(() => {
    // Disable native scroll restoration so we start at the middle set
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      const vh = window.innerHeight || 1080;
      const initialScroll = MIDDLE_SET_INDEX * sectionCount * vh;
      window.scrollTo(0, initialScroll);
      setIsReady(true);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight || 1080;
      if (vh <= 0) return;

      // 1. Continuous translation in VW (1px vertical scroll translates 1px horizontally)
      const rawVW = (scrollY / vh) * 100;
      setCurrentVW(rawVW);

      // 2. Seamless Bidirectional Loop Thresholds
      const oneSetHeight = sectionCount * vh;

      // Forward wrap threshold: when scrolling past set 3, shift back to set 2
      if (scrollY >= oneSetHeight * (MIDDLE_SET_INDEX + 1)) {
        window.scrollTo(0, scrollY - oneSetHeight);
      }
      // Backward wrap threshold: when scrolling above set 1, shift forward to set 2
      else if (scrollY <= oneSetHeight * (MIDDLE_SET_INDEX - 1)) {
        window.scrollTo(0, scrollY + oneSetHeight);
      }
    };

    // 3. Accessibility: Full Keyboard Navigation Support
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input / textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const vh = window.innerHeight || 1080;
      const currentProgress = (window.scrollY % (sectionCount * vh)) / vh;
      const currentIdx = Math.round(currentProgress);

      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "PageDown" || (e.key === " " && !e.shiftKey)) {
        e.preventDefault();
        handleNavigate((currentIdx + 1) % sectionCount);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp" || (e.key === " " && e.shiftKey)) {
        e.preventDefault();
        handleNavigate((currentIdx - 1 + sectionCount) % sectionCount);
      } else if (e.key === "Home") {
        e.preventDefault();
        handleNavigate(0);
      } else if (e.key === "End") {
        e.preventDefault();
        handleNavigate(sectionCount - 1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [sectionCount, handleNavigate]);

  // ─────────────────────────────────────────────────────────────
  // MATHEMATICALLY LOCKED SYNCHRONIZATION
  // ─────────────────────────────────────────────────────────────
  const cycleLengthVW = sectionCount * 100; // 700vw
  const inCycleVW = ((currentVW % cycleLengthVW) + cycleLengthVW) % cycleLengthVW; // [0, 700)

  // Normalize across the 6 intervals between the 7 buttons (0 to 600vw)
  const maxIntervalVW = (sectionCount - 1) * 100; // 600vw
  const rulerProgress = Math.min(Math.max(inCycleVW / maxIntervalVW, 0), 1);

  // Active section index corresponding to the visible panel
  const activeSectionIndex = Math.min(
    Math.max(0, Math.round(inCycleVW / 100)),
    sectionCount - 1
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${TOTAL_PANELS_COUNT * 100}vh` }}
    >
      {/* Fixed Viewport Window */}
      <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-auto z-10">
        {/* Horizontal Track with continuous 1px translation */}
        <div
          className="flex flex-row flex-nowrap w-fit h-screen will-change-transform"
          style={{
            transform: `translate3d(-${currentVW}vw, 0, 0)`,
            opacity: isReady ? 1 : 0,
            transition: "opacity 0.2s ease",
          }}
        >
          {Array.from({ length: SET_COUNT }).map((_, setIdx) => (
            <div key={setIdx} className="flex flex-row flex-nowrap shrink-0">
              {/* 0. Portfolio */}
              <div className="w-screen h-screen shrink-0">
                <CoverHeroSection
                  onNavigateToAbout={() => handleNavigate(1)}
                  onNavigateToProjects={() => handleNavigate(2)}
                />
              </div>

              {/* 1. About / Dossier (Image #1) */}
              <div className="w-screen h-screen shrink-0">
                <AboutDossierSection />
              </div>

              {/* 2. Design System */}
              <div className="w-screen h-screen shrink-0">
                <DesignSystemPage />
              </div>

              {/* 3. 3D & WebGL */}
              <div className="w-screen h-screen shrink-0">
                <WebGLPage />
              </div>

              {/* 4. Product Design */}
              <div className="w-screen h-screen shrink-0">
                <ProductDesignPage />
              </div>

              {/* 5. Mobile App */}
              <div className="w-screen h-screen shrink-0">
                <MobileAppPage />
              </div>

              {/* 6. AI Interface */}
              <div className="w-screen h-screen shrink-0">
                <AIInterfacePage />
              </div>
            </div>
          ))}
        </div>

        {/* Fixed Bottom Navigation Ruler (Ticks on Top, Labels UNDER the Ruler) */}
        <RulerNavbar
          progress={rulerProgress}
          activeSectionIndex={activeSectionIndex}
          onNavigate={handleNavigate}
        />
      </div>
    </div>
  );
}
