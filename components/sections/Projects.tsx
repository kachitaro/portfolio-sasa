"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Code, ExternalLink, Eye, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio-data";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import ProjectModal from "@/components/modals/ProjectModal";

const CATEGORIES = [
  "All",
  "3D & WebGL",
  "Design System",
  "Product Design",
  "Mobile App",
] as const;

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge="FEATURED CASE STUDIES"
          title="Selected Works &"
          highlight="3D Systems"
          subtitle="Explore recent digital products, WebGL experiments, and scalable design system implementations engineered with precision."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-mono rounded-xl transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] font-semibold"
                  : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard
                  tilt
                  glow={project.category === "3D & WebGL" ? "indigo" : "cyan"}
                  className="h-full flex flex-col justify-between group overflow-hidden"
                >
                  <div>
                    {/* Visual Card Header */}
                    <div
                      className={`w-full h-48 rounded-xl mb-5 bg-gradient-to-br ${project.gradient} border border-white/10 relative overflow-hidden flex flex-col items-center justify-center p-6 group-hover:scale-[1.02] transition-transform duration-500`}
                    >
                      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
                      <div
                        className="w-20 h-20 rounded-full blur-[30px] opacity-60 absolute"
                        style={{ backgroundColor: project.color }}
                      />
                      <Sparkles className="w-10 h-10 text-white/50 mb-2 relative z-10 animate-float" />
                      <span className="text-[11px] font-mono text-zinc-300 relative z-10 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
                        {project.client}
                      </span>
                    </div>

                    {/* Meta tags */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <Badge
                        variant={
                          project.category === "3D & WebGL"
                            ? "indigo"
                            : project.category === "Design System"
                            ? "cyan"
                            : "violet"
                        }
                      >
                        {project.category}
                      </Badge>
                      <span className="text-xs font-mono text-zinc-400">{project.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-gradient-accent transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Metrics Banner */}
                    <div className="flex items-center gap-4 py-3 px-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-5">
                      {project.metrics.slice(0, 2).map((m, i) => (
                        <div key={i} className="flex-1">
                          <div className="text-xs font-mono text-zinc-500">{m.label}</div>
                          <div className="text-sm font-bold text-zinc-200 mt-0.5">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 rounded bg-white/[0.03] text-[11px] font-mono text-zinc-500">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Card Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Case Study</span>
                      </button>

                      <div className="flex items-center gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                            title="Source Code"
                          >
                            <Code className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 hover:text-white transition-colors border border-indigo-500/20"
                            title="Live Experience"
                          >
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
