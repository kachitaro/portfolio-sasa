"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Copy, Layers, Palette, Sliders, Sparkles, Type } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import MagneticButton from "@/components/ui/MagneticButton";

export default function DesignSystem() {
  const { designSystem } = PORTFOLIO_DATA;
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [switchState, setSwitchState] = useState(true);
  const [sliderVal, setSliderVal] = useState(75);
  const [activeTab, setActiveTab] = useState<"tokens" | "typography" | "motion" | "components">("tokens");

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section id="design-system" className="py-24 sm:py-32 relative bg-[#060810]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge="DESIGN SYSTEM 2026 ARCHITECTURE"
          title="DS-2026: Design Tokens &"
          highlight="Component System"
          subtitle="A modular, physics-driven design architecture connecting Figma Variables, multi-brand token pipelines, and production React/WebGL components."
        />

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md max-w-fit">
          {[
            { id: "tokens", label: "Color Tokens", icon: Palette },
            { id: "typography", label: "Typography Scale", icon: Type },
            { id: "motion", label: "Motion Physics", icon: Sparkles },
            { id: "components", label: "Live Components", icon: Layers },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)] font-medium"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 1. Color Tokens View */}
        {activeTab === "tokens" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {designSystem.colorTokens.map((token) => (
              <GlassCard
                key={token.name}
                tilt
                className="group flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-full h-28 rounded-xl mb-4 border border-white/10 relative flex items-end p-3 shadow-inner"
                    style={{ backgroundColor: token.hex }}
                  >
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-white border border-white/15">
                      {token.hex}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">
                    {token.name}
                  </h4>
                  <p className="text-xs font-mono text-zinc-400">
                    {token.role}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500">
                    CSS Token: var(--{token.name.toLowerCase().replace(" ", "-")})
                  </span>
                  <button
                    onClick={() => copyToClipboard(token.hex)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-all flex items-center gap-1 text-xs font-mono"
                    title="Copy HEX code"
                  >
                    {copiedHex === token.hex ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 text-[10px]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[10px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        )}

        {/* 2. Typography Scale View */}
        {activeTab === "typography" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {designSystem.typographyScale.map((type, idx) => (
              <GlassCard key={idx} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <Badge variant="indigo">{type.level}</Badge>
                    <span className="text-xs font-mono text-cyan-400">{type.size}</span>
                    <span className="text-xs font-mono text-zinc-500">• {type.weight}</span>
                  </div>
                  <p className="text-white text-lg sm:text-2xl font-bold mt-2">
                    Spatial Clarity & Precision 2026
                  </p>
                </div>
                <div className="text-xs font-mono text-zinc-400 max-w-xs md:text-right">
                  Usage: {type.usage}
                </div>
              </GlassCard>
            ))}
          </motion.div>
        )}

        {/* 3. Motion Physics View */}
        {activeTab === "motion" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {designSystem.motionPrinciples.map((item, idx) => (
              <GlassCard key={idx} glow="indigo" tilt className="flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 font-mono text-xs text-cyan-300">
                  {item.curve}
                </div>
              </GlassCard>
            ))}
          </motion.div>
        )}

        {/* 4. Live Components Preview View */}
        {activeTab === "components" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Interactive Buttons & Badges */}
            <GlassCard>
              <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-indigo-400" />
                Interactive Buttons & State Tokens
              </h4>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <MagneticButton variant="primary" size="sm">
                    Primary Indigo
                  </MagneticButton>
                  <MagneticButton variant="glow" size="sm">
                    Glow Gradient
                  </MagneticButton>
                  <MagneticButton variant="secondary" size="sm">
                    Glass Neutral
                  </MagneticButton>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs font-mono text-zinc-400 block mb-2">Badge Tokens:</span>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="indigo">Live 2026</Badge>
                    <Badge variant="cyan">Spatial UI</Badge>
                    <Badge variant="violet">Motion</Badge>
                    <Badge variant="emerald">AAA Passed</Badge>
                    <Badge variant="amber">Pending Sync</Badge>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Micro Controls & Sliders */}
            <GlassCard>
              <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-cyan-400" />
                Micro-Interactions & Form Tokens
              </h4>
              <div className="space-y-6">
                {/* Switch */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-white">Spatial Depth Mode</div>
                    <div className="text-xs font-mono text-zinc-400">Enables dynamic WebGL Z-index parallax</div>
                  </div>
                  <button
                    onClick={() => setSwitchState(!switchState)}
                    className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
                      switchState ? "bg-indigo-600 shadow-[0_0_15px_rgba(99,102,241,0.5)]" : "bg-zinc-800"
                    }`}
                  >
                    <motion.div
                      className="w-4 h-4 rounded-full bg-white shadow-sm"
                      animate={{ x: switchState ? 24 : 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </button>
                </div>

                {/* Slider */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                    <span>Luminescence Intensity</span>
                    <span className="text-cyan-300 font-bold">{sliderVal}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderVal}
                    onChange={(e) => setSliderVal(parseInt(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                </div>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </div>
    </section>
  );
}
