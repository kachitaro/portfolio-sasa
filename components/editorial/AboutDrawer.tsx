"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, Copy, Mail, MapPin, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { useState } from "react";

interface AboutDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutDrawer({ isOpen, onClose }: AboutDrawerProps) {
  const { profile, experiences, skills } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md -z-10"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="w-full max-w-3xl max-h-[85vh] bg-[#f0eee9] border border-black/15 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto text-[#141414]"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-black/10 mb-6">
              <div>
                <span className="text-[11px] font-mono text-black/50 uppercase tracking-wider block">
                  Curriculum // Dossier
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif">{profile.fullName}</h2>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full border border-black/20 hover:bg-black hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Bio & Details */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4 text-xs font-mono text-black/60 pb-4 border-b border-black/10">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {profile.location}
                </span>
                <span>•</span>
                <span className="text-emerald-700 font-medium">● {profile.status}</span>
              </div>

              <p className="text-sm sm:text-base font-sans text-black/80 leading-relaxed">
                {profile.bio}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
                {profile.stats.map((s, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-black/[0.03] border border-black/10 text-center">
                    <div className="text-2xl font-serif font-bold">{s.value}</div>
                    <div className="text-[10px] font-mono text-black/50 uppercase tracking-wider mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Career Highlights */}
              <div className="pt-4">
                <h3 className="text-xs font-mono text-black/50 uppercase tracking-wider mb-3">
                  Experience Highlights:
                </h3>
                <div className="space-y-3">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/40 border border-black/10">
                      <div className="flex items-center justify-between text-xs font-mono mb-1">
                        <span className="font-bold">{exp.role}</span>
                        <span className="text-black/50">{exp.period}</span>
                      </div>
                      <div className="text-xs text-black/60 font-sans">{exp.company} — {exp.location}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Contact */}
              <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-black/60" />
                  <span className="text-xs font-mono">{profile.socials.email}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 rounded-full bg-[#141414] text-white text-xs font-mono flex items-center gap-1.5 hover:bg-black/80 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy Email"}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
