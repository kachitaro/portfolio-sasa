"use client";

import { motion } from "motion/react";
import { Award, Compass, Flame, Layers, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

export default function About() {
  const { profile, skills } = PORTFOLIO_DATA;

  const pillars = [
    {
      icon: Compass,
      title: "Spatial Depth & Z-Dimension",
      desc: "Creating interfaces that feel tangible with real-time perspective, physical light models, and volumetric depth.",
    },
    {
      icon: Layers,
      title: "Systemic Token Rigor",
      desc: "Engineering automated pipelines linking Figma component variables directly into production design tokens.",
    },
    {
      icon: Zap,
      title: "60 FPS Kinetic Physics",
      desc: "Micro-interactions driven by inertial spring math and GPU-accelerated shaders rather than linear animations.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#060810]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge="PROFILE & CAPABILITIES"
          title="Bridging Design Craft with"
          highlight="Creative Engineering"
          subtitle="A holistic approach to digital products: from deep discovery and UX information architecture to WebGL shaders and scalable design systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Bio & Core Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <GlassCard glow="indigo">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-[2px] shadow-lg">
                  <div className="w-full h-full bg-[#090b14] rounded-[14px] flex items-center justify-center text-2xl font-bold text-white">
                    S
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {profile.fullName}
                    <Badge variant="emerald" size="sm">Active</Badge>
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">
                    {profile.title}
                  </p>
                  <p className="text-xs font-mono text-indigo-400">
                    📍 {profile.location}
                  </p>
                </div>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {profile.bio}
              </p>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-zinc-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Specialization: Spatial UI, Design Tokens (DS-2026), Three.js WebGL, High-Fidelity Interaction Prototyping</span>
              </div>
            </GlassCard>

            {/* Design Pillars */}
            <div className="space-y-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <GlassCard key={idx} className="p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </div>

          {/* Right Column: Skill Proficiency & Metrics */}
          <div className="lg:col-span-6 space-y-6">
            {skills.map((cat, catIdx) => (
              <GlassCard key={catIdx} className="p-6">
                <h4 className="text-base font-bold text-white mb-5 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-cyan-400" />
                  {cat.category}
                </h4>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                        <span className="text-zinc-200 font-medium flex items-center gap-1.5">
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                          )}
                          {skill.name}
                        </span>
                        <span className="text-cyan-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/[0.04] overflow-hidden border border-white/[0.04]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: sIdx * 0.1 }}
                          className={`h-full rounded-full ${
                            skill.highlight
                              ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                              : "bg-zinc-600"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
