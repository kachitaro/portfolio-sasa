"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Sparkles, X } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio-data";
import { useState } from "react";

interface WorkDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WorkDrawer({ isOpen, onClose }: WorkDrawerProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["All", "UI/UX Design", "Design System", "3D & WebGL", "Mobile App"];

  const filteredProjects =
    selectedCategory === "All"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter(
          (p) =>
            p.category === selectedCategory ||
            (selectedCategory === "UI/UX Design" && (p.category === "Product Design" || p.category === "Mobile App"))
        );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md -z-10"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="w-full max-w-6xl max-h-[88vh] bg-[#f0eee9] border-t border-x border-black/15 rounded-t-3xl p-6 sm:p-10 shadow-2xl flex flex-col overflow-hidden text-[#141414]"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-black/10">
              <div>
                <div className="text-[11px] font-mono tracking-wider text-black/50 uppercase mb-1">
                  Sa Sa Nguyen // Archive 2026
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight">
                  Selected Graphic Design & UI/UX Works
                </h2>
              </div>

              <button
                onClick={onClose}
                className="px-3.5 py-1.5 rounded-full border border-black/20 hover:bg-black hover:text-white text-xs font-mono transition-colors flex items-center gap-1.5"
              >
                <span>[ CLOSE ]</span>
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 my-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1 text-xs font-mono rounded-full border transition-all ${
                    selectedCategory === cat
                      ? "bg-[#141414] text-[#f0eee9] border-[#141414]"
                      : "bg-transparent text-black/70 border-black/15 hover:border-black/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Project List / Grid */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className="p-5 rounded-2xl border border-black/10 hover:border-black/30 bg-white/40 hover:bg-white/80 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-mono text-black/40 mt-1">
                      0{idx + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/5 border border-black/10">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-black/40">•</span>
                        <span className="text-xs font-mono text-black/50">{project.year}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-serif font-medium group-hover:translate-x-1 transition-transform">
                        {project.title}
                      </h3>
                      <p className="text-xs text-black/60 mt-1 max-w-xl font-sans leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className="text-xs font-mono text-black/40 hidden md:block">
                      {project.client}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center group-hover:bg-[#141414] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Detail Overlay */}
            {activeProject && (
              <div
                onClick={() => setActiveProject(null)}
                className="absolute inset-0 bg-[#f0eee9] z-20 p-6 sm:p-10 overflow-y-auto flex flex-col"
              >
                <button
                  onClick={() => setActiveProject(null)}
                  className="self-end text-xs font-mono px-3 py-1.5 rounded-full border border-black/20 hover:bg-black hover:text-white mb-6"
                >
                  ← Back to List
                </button>

                <div className="max-w-3xl mx-auto w-full">
                  <span className="text-xs font-mono text-black/50 uppercase tracking-wider block mb-2">
                    {activeProject.category} • {activeProject.year}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif mb-4">
                    {activeProject.title}
                  </h2>
                  <p className="text-sm font-sans text-black/70 leading-relaxed mb-6">
                    {activeProject.longDescription}
                  </p>

                  <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-black/[0.03] border border-black/10 mb-6">
                    {activeProject.metrics.map((m, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold font-mono">{m.value}</div>
                        <div className="text-[11px] font-mono text-black/50">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeProject.tags.map((t) => (
                      <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-black/5 border border-black/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  {activeProject.link && (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141414] text-white text-xs font-mono hover:bg-black/80 transition-colors"
                    >
                      <span>Visit Live Deployment</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
