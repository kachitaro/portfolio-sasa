"use client";

import GridGuides from "@/components/ui/GridGuides";
import { Box } from "lucide-react";
import InteractiveArtifact from "@/components/3d/InteractiveArtifact";

export default function WebGLPage() {
  return (
    <section
      id="webgl"
      className="relative w-screen h-screen min-h-[640px] shrink-0 paper-texture px-8 sm:px-16 py-10 sm:py-12 flex flex-col justify-between select-none overflow-hidden"
    >
      <GridGuides showTopH={true} showCenterH={false} showBottomH={false} />

      <div className="relative z-10 w-full max-w-[1720px] mx-auto flex-1 flex flex-col justify-between pb-14">
        {/* Header Title */}
        <div className="pt-2">
          <div className="text-[11px] font-mono tracking-widest uppercase text-black/50 mb-1">
            02 // SPATIAL & REAL-TIME GRAPHICS
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-normal tracking-[-0.02em] text-[#121212]">
            3D & WebGL Spatial Computing Interfaces
          </h2>
        </div>

        {/* Middle Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          {/* Left Column: Narrative & Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs sm:text-sm font-sans text-black/80 leading-relaxed max-w-xl">
              Exploring tactile digital realism by pairing WebGL GLSL shaders with modern browser interfaces. Real-time GPU rendering enables spatial window management, fluid inertial camera controls, and volumetric light diffusion at consistent 60 FPS.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-xl border border-black/10 bg-white/30 text-center">
                <div className="text-xl font-editorial font-bold text-[#121212]">60 FPS</div>
                <div className="text-[10px] font-mono text-black/50 mt-1">Mobile & Desktop</div>
              </div>
              <div className="p-4 rounded-xl border border-black/10 bg-white/30 text-center">
                <div className="text-xl font-editorial font-bold text-[#121212]">&lt;12ms</div>
                <div className="text-[10px] font-mono text-black/50 mt-1">Interaction Latency</div>
              </div>
              <div className="p-4 rounded-xl border border-black/10 bg-white/30 text-center">
                <div className="text-xl font-editorial font-bold text-[#121212]">GLSL 3.0</div>
                <div className="text-[10px] font-mono text-black/50 mt-1">Custom Shaders</div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono text-black/50 uppercase tracking-wider">
                Key Experiments:
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Aether OS Spatial UI",
                  "Vortex 3D Audio Reactive",
                  "Volumetric Torus Morph",
                  "Raymarching Crystals",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full border border-black/15 bg-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Artifact Sandbox */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-2xl border border-black/10 bg-white/30 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-black/50 pb-2 border-b border-black/10">
                <span className="flex items-center gap-1.5">
                  <Box className="w-3.5 h-3.5" /> Interactive 3D Viewport
                </span>
                <span>Drag to Rotate</span>
              </div>
              <InteractiveArtifact type="torusKnot" color="#121212" />
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="flex items-center justify-between pt-4 border-t border-black/10 text-xs font-mono text-black/50">
          <span>Three.js v0.185 • React Three Fiber 9</span>
          <span>GPU Accelerated Shaders</span>
        </div>
      </div>
    </section>
  );
}
