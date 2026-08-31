"use client";

import GridGuides from "@/components/ui/GridGuides";
import { ArrowUpRight, BarChart3, Layers, Sparkles } from "lucide-react";

export default function ProductDesignPage() {
  return (
    <section
      id="product-design"
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
            03 // ENTERPRISE & CONSUMER UX
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-normal tracking-[-0.02em] text-[#121212]">
            Product Design & Complex System Architectures
          </h2>
        </div>

        {/* Middle Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          {/* Card 1: Chronos AI Platform */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl border border-black/10 bg-white/35 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-black/50 mb-2">
                <span>Predictive Intelligence Console</span>
                <span>2025</span>
              </div>
              <h3 className="text-2xl font-editorial font-medium text-[#121212] mb-3">
                Chronos AI — Predictive Operations Platform
              </h3>
              <p className="text-xs sm:text-sm font-sans text-black/70 leading-relaxed mb-4">
                Redesigning complex time-series anomaly detection into an effortless cognitive dashboard. Synthesizing petabyte-scale infrastructure health alerts into actionable natural language recommendations.
              </p>
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-black/10 text-center">
                <div>
                  <div className="text-lg font-bold font-mono text-[#121212]">3.8x</div>
                  <div className="text-[10px] font-mono text-black/50">Resolution Speed</div>
                </div>
                <div>
                  <div className="text-lg font-bold font-mono text-[#121212]">85K</div>
                  <div className="text-[10px] font-mono text-black/50">Daily Active Users</div>
                </div>
                <div>
                  <div className="text-lg font-bold font-mono text-[#121212]">+74</div>
                  <div className="text-[10px] font-mono text-black/50">NPS Score</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-black/60 pt-2">
              <span>Next.js • Tailwind • D3 Visualization</span>
              <span className="flex items-center gap-1">
                Case Study <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Card 2: Enterprise Design Ops */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl border border-black/10 bg-white/35 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-black/50 mb-2">
                <span>Multi-Brand Cloud Console</span>
                <span>2024 — 2026</span>
              </div>
              <h3 className="text-2xl font-editorial font-medium text-[#121212] mb-3">
                Nexus Global Cloud — Unified Developer Suite
              </h3>
              <p className="text-xs sm:text-sm font-sans text-black/70 leading-relaxed mb-4">
                Unified 6 fragmented platform products under a single coherent design language. Standardized 240+ WCAG AAA compliant components, reducing product squad delivery cycles by 42%.
              </p>
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-black/10 text-center">
                <div>
                  <div className="text-lg font-bold font-mono text-[#121212]">98.4%</div>
                  <div className="text-[10px] font-mono text-black/50">Component Adoption</div>
                </div>
                <div>
                  <div className="text-lg font-bold font-mono text-[#121212]">+42%</div>
                  <div className="text-[10px] font-mono text-black/50">Delivery Speed</div>
                </div>
                <div>
                  <div className="text-lg font-bold font-mono text-[#121212]">6 Brands</div>
                  <div className="text-[10px] font-mono text-black/50">Unified Language</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-black/60 pt-2">
              <span>Token Pipelines • WCAG AAA • React</span>
              <span className="flex items-center gap-1">
                Case Study <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="flex items-center justify-between pt-4 border-t border-black/10 text-xs font-mono text-black/50">
          <span>Enterprise Product Architecture</span>
          <span>Scalable Information Architecture</span>
        </div>
      </div>
    </section>
  );
}
