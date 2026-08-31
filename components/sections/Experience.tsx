"use client";

import { motion } from "motion/react";
import { Briefcase, CheckCircle2, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

export default function Experience() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge="CAREER TRACK & ROLES"
          title="Professional Journey &"
          highlight="Leadership"
          subtitle="Delivering strategic product architecture and leading high-performing design-engineering teams across tech companies."
        />

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 before:w-[2px] before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500 before:to-transparent hidden sm:block" />

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard glow={idx === 0 ? "indigo" : "none"} className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/[0.08]">
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      {idx === 0 && (
                        <Badge variant="indigo" size="sm">Current Role</Badge>
                      )}
                    </div>
                    <div className="text-sm font-medium text-cyan-400 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="text-xs font-mono px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-300 self-start lg:self-center">
                    {exp.period}
                  </div>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="mb-6 space-y-2.5">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                    Key Impact & Contributions:
                  </span>
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech & Skills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
