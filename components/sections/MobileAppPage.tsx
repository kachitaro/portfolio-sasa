"use client";

import GridGuides from "@/components/ui/GridGuides";
import { ArrowUpRight, Smartphone, Touchpad } from "lucide-react";

export default function MobileAppPage() {
  return (
    <section
      id="mobile-app"
      className="relative w-screen h-screen min-h-[640px] shrink-0 paper-texture px-8 sm:px-16 py-10 sm:py-12 flex flex-col justify-between select-none overflow-hidden"
    >
      <GridGuides showCenterH={false} />

      {/* Top Crosshairs Row */}
      <div className="absolute top-4 left-[2.2%] text-black/50 text-xs font-mono">+</div>
      <div className="absolute top-4 left-[20.26%] text-black/50 text-xs font-mono">+</div>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-black/50 text-xs font-mono">+</div>
      <div className="absolute top-4 left-[79.74%] text-black/50 text-xs font-mono">+</div>
      <div className="absolute top-4 right-[2.2%] text-black/50 text-xs font-mono">+</div>

      <div className="relative z-10 w-full max-w-[1720px] mx-auto flex-1 flex flex-col justify-between pb-14">
        {/* Header Title */}
        <div className="pt-2">
          <div className="text-[11px] font-mono tracking-widest uppercase text-black/50 mb-1">
            04 // MOBILE PLATFORMS & GESTURES
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-normal tracking-[-0.02em] text-[#121212]">
            Mobile Interfaces & Tactile Micro-Interactions
          </h2>
        </div>

        {/* Middle Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          {/* Left Column: Mobile App Showcase */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-black/10 bg-white/35 space-y-5">
              <div className="flex items-center justify-between text-xs font-mono text-black/50">
                <span>Multi-Asset Wealth SuperApp</span>
                <span>iOS & Android Native</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-editorial font-medium text-[#121212]">
                Prism — Next-Gen Multi-Asset Wealth SuperApp
              </h3>
              <p className="text-xs sm:text-sm font-sans text-black/75 leading-relaxed">
                Re-architecting retail wealth management for generational wealth builders. Crafting native iOS SwiftUI and Android Jetpack Compose design tokens, tactile haptic feedback cues, and spatial portfolio rebalancing graphs.
              </p>

              <div className="grid grid-cols-3 gap-3 py-3 border-y border-black/10 text-center">
                <div>
                  <div className="text-xl font-editorial font-bold text-[#121212]">4.9 ★</div>
                  <div className="text-[10px] font-mono text-black/50 mt-0.5">App Store Rating</div>
                </div>
                <div>
                  <div className="text-xl font-editorial font-bold text-[#121212]">$1.4B+</div>
                  <div className="text-[10px] font-mono text-black/50 mt-0.5">Assets Tracked</div>
                </div>
                <div>
                  <div className="text-xl font-editorial font-bold text-[#121212]">+31%</div>
                  <div className="text-[10px] font-mono text-black/50 mt-0.5">Flow Conversion</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {["Gesture Physics", "Biometric Auth UX", "Haptic Design", "Dark/Light Modes"].map((tag) => (
                  <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full border border-black/15 bg-white/40">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interaction Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl border border-black/10 bg-white/20">
              <h4 className="text-sm font-bold text-[#121212] mb-1 flex items-center gap-2">
                <Smartphone className="w-4 h-4" /> One-Hand Thumb Reachability
              </h4>
              <p className="text-xs font-sans text-black/70 leading-relaxed">
                Bottom sheet navigation and thumb-zone ergonomics for oversized modern device displays.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-black/10 bg-white/20">
              <h4 className="text-sm font-bold text-[#121212] mb-1 flex items-center gap-2">
                <Touchpad className="w-4 h-4" /> Dynamic Haptic Choreography
              </h4>
              <p className="text-xs font-sans text-black/70 leading-relaxed">
                Multi-stage vibration feedback calibrated for trade confirmations, biometric unlocks, and card swipes.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="flex items-center justify-between pt-4 border-t border-black/10 text-xs font-mono text-black/50">
          <span>iOS Human Interface Guidelines & Material 3</span>
          <span>Tactile Ergonomics</span>
        </div>
      </div>
    </section>
  );
}
