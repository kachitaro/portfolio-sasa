"use client";

import { AnimatePresence, motion } from "motion/react";
import { Project } from "@/data/portfolio-data";
import { Code2, ExternalLink, Sparkles, X } from "lucide-react";
import Badge from "@/components/ui/Badge";
import MagneticButton from "@/components/ui/MagneticButton";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl -z-10"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="w-full max-w-3xl bg-[#0d0f1a] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.8)] relative my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-zinc-300 hover:text-white flex items-center justify-center transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="indigo">{project.category}</Badge>
            <span className="text-zinc-500 text-xs font-mono">•</span>
            <span className="text-xs font-mono text-zinc-400">{project.year}</span>
            <span className="text-zinc-500 text-xs font-mono">•</span>
            <span className="text-xs font-mono text-cyan-400">{project.client}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {project.title}
          </h2>

          <p className="text-zinc-300 text-base leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {/* Visual Showcase Block */}
          <div
            className={`w-full h-48 sm:h-64 rounded-2xl mb-6 bg-gradient-to-br ${project.gradient} border border-white/10 flex flex-col items-center justify-center p-6 relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
            <div
              className="w-24 h-24 rounded-full blur-[40px] opacity-70"
              style={{ backgroundColor: project.color }}
            />
            <Sparkles className="w-12 h-12 text-white/40 mb-2 relative z-10 animate-float" />
            <p className="text-xs font-mono text-zinc-400 relative z-10 uppercase tracking-wider">
              {project.role}
            </p>
          </div>

          {/* Deep Dive Narrative */}
          <div className="mb-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400 mb-2">
              Case Study & Engineering Breakdown
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
              {project.longDescription}
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-3.5 text-center"
              >
                <div className="text-lg sm:text-xl font-bold text-gradient-accent">
                  {metric.value}
                </div>
                <div className="text-[11px] font-mono text-zinc-400 mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Tags */}
          <div className="mb-8">
            <div className="text-xs font-mono text-zinc-400 mb-2">Technologies & Tools:</div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
            {project.link && (
              <MagneticButton
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
              >
                <ExternalLink className="w-4 h-4" /> Live Experience
              </MagneticButton>
            )}
            {project.github && (
              <MagneticButton
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="md"
              >
                <Code2 className="w-4 h-4" /> Source Code
              </MagneticButton>
            )}
            <button
              onClick={onClose}
              className="ml-auto text-xs font-mono text-zinc-400 hover:text-white px-4 py-2"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
