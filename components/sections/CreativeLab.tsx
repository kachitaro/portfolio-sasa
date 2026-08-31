"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Box, Cpu, Sparkles, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import InteractiveArtifact from "@/components/3d/InteractiveArtifact";
import Badge from "@/components/ui/Badge";

export default function CreativeLab() {
  const { labExperiments } = PORTFOLIO_DATA;
  const [selectedExperiment, setSelectedExperiment] = useState(labExperiments[0]);

  return (
    <section id="lab" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge="3D EXPERIMENTS & SHADERS"
          title="Creative Lab: Real-Time"
          highlight="WebGL Sandbox"
          subtitle="Experimental 3D shaders, dynamic physics models, and raymarching prototypes rendered in real-time with Three.js & GLSL."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive 3D Sandbox */}
          <div className="lg:col-span-7">
            <GlassCard glow="indigo" className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <Box className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {selectedExperiment.title}
                    </h3>
                    <div className="text-xs font-mono text-zinc-400">
                      Category: {selectedExperiment.category} • {selectedExperiment.date}
                    </div>
                  </div>
                </div>

                <Badge variant="cyan">Interactive</Badge>
              </div>

              {/* 3D Canvas Artifact */}
              <InteractiveArtifact
                type={selectedExperiment.shaderType}
                color={selectedExperiment.accentColor}
              />

              <div className="mt-4 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  Three.js v0.185 • GLSL 3.0
                </span>
                <span className="text-cyan-300">GPU Accelerated</span>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Experiment List */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              Select Live Experiment
            </div>

            {labExperiments.map((exp) => {
              const isSelected = selectedExperiment.id === exp.id;
              return (
                <motion.div
                  key={exp.id}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    onClick={() => setSelectedExperiment(exp)}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? "bg-indigo-950/40 border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.25)]"
                        : "bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.05] hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: exp.accentColor }}
                        />
                        <span className="text-xs font-mono text-zinc-400">{exp.category}</span>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-500">{exp.date}</span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-1.5">
                      {exp.title}
                    </h4>

                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                      {exp.description}
                    </p>

                    <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                      <span className="text-indigo-400 flex items-center gap-1">
                        {isSelected ? "● Loaded in Viewport" : "Load Experiment"}
                      </span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "translate-x-1 text-cyan-400" : "text-zinc-500"}`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
