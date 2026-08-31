"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import CoverHeroSection from "./CoverHeroSection";
import AboutDossierSection from "./AboutDossierSection";
import DesignSystemPage from "./DesignSystemPage";
import WebGLPage from "./WebGLPage";
import ProductDesignPage from "./ProductDesignPage";
import MobileAppPage from "./MobileAppPage";
import AIInterfacePage from "./AIInterfacePage";
import RulerNavbar, { BASE_SECTIONS } from "@/components/ui/RulerNavbar";

// Repeated panels for infinite circular horizontal scroll
// Portfolio ⟶ About ⟶ Design System ⟶ 3D & WebGL ⟶ Product Design ⟶ Mobile App ⟶ AI Interface ⟶ Portfolio ⟶ ...
const SET_COUNT = 3;
const TOTAL_PANELS_COUNT = BASE_SECTIONS.length * SET_COUNT;

export default function HorizontalTrack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentVW, setCurrentVW] = useState(0);
  const lenis = useLenis();

  const sectionCount = BASE_SECTIONS.length; // 7

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight || 1080;
      if (vh <= 0) return;

      // 1. Continuous translation in VW (1px vertical scroll translates 1px horizontally)
      const rawVW = (scrollY / vh) * 100;
      setCurrentVW(rawVW);

      // 2. Seamless Infinite Loop Reset
      // 1 full cycle of 7 sections is (7 * vh)
      const oneSetHeight = sectionCount * vh;
      if (scrollY >= oneSetHeight * 2) {
        window.scrollTo(0, scrollY - oneSetHeight);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionCount]);

  // Navigate directly to horizontal page
  const handleNavigate = (index: number) => {
    const vh = window.innerHeight || 1080;
    const oneSetHeight = sectionCount * vh;
    const currentSet = Math.floor(window.scrollY / oneSetHeight);
    const targetScroll = currentSet * oneSetHeight + index * vh;

    if (lenis) {
      lenis.scrollTo(targetScroll, { duration: 1.0 });
    } else {
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  // ─────────────────────────────────────────────────────────────
  // MATHEMATICALLY LOCKED SYNCHRONIZATION
  // ─────────────────────────────────────────────────────────────
  // 1 full cycle is 7 sections = 700vw
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
