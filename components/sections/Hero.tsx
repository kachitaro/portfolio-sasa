"use client";

import { motion } from "motion/react";
import { ArrowRight, Code2, Eye, Sparkles } from "lucide-react";
import HeroScene from "@/components/3d/HeroScene";
import MagneticButton from "@/components/ui/MagneticButton";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Hero() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-radial-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Top Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 backdrop-blur-md mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-xs font-mono text-indigo-300 font-medium tracking-wide">
                DS-2026 ARCHITECTURE & SPATIAL COMPUTING
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6"
            >
              Designing{" "}
              <span className="text-gradient-accent">Spatial</span> Interfaces &{" "}
              <span className="text-gradient-cyan">3D WebGL</span> Systems.
            </motion.h1>

            {/* Subtitle Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-zinc-400 font-normal leading-relaxed mb-8 max-w-2xl"
            >
              Hi, I&apos;m <span className="text-white font-medium">{profile.fullName}</span>. Bridging high-craft UI/UX product design with interactive Three.js 3D graphics, spring physics motion, and scalable enterprise design tokens.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <MagneticButton href="#work" variant="glow" size="lg">
                <span>Explore Featured Works</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton href="#design-system" variant="secondary" size="lg">
                <Eye className="w-4 h-4 text-indigo-400" />
                <span>Inspect DS-2026</span>
              </MagneticButton>
            </motion.div>

            {/* Tech Stack Chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-2 pt-6 border-t border-white/[0.08] w-full"
            >
              <span className="text-xs font-mono text-zinc-500 mr-2 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" /> CORE STACK:
              </span>
              {[
                "Figma DS-2026",
                "Three.js / WebGL",
                "Motion Physics",
                "Next.js 16",
                "React 19",
                "GLSL Shaders",
                "Tailwind CSS v4",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-zinc-400 hover:text-white hover:border-indigo-500/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: 3D Interactive Hero Canvas */}
          <div className="lg:col-span-5 relative w-full h-[450px] lg:h-[600px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-full relative flex items-center justify-center"
            >
              <HeroScene />

              {/* Floating Feature Badges */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute top-6 right-2 sm:right-6 glass-panel px-3.5 py-2 rounded-xl border border-white/10 shadow-lg flex items-center gap-2 pointer-events-none"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-mono text-zinc-200">
                  WebGL 60 FPS Engine
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute bottom-8 left-2 sm:left-4 glass-panel px-3.5 py-2 rounded-xl border border-white/10 shadow-lg flex items-center gap-2 pointer-events-none"
              >
                <span className="text-xs font-mono text-indigo-300">
                  Figma Token Sync ↔ CSS
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/[0.08]"
        >
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-white/[0.06] flex flex-col items-center sm:items-start group hover:border-indigo-500/30 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-gradient-accent transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
