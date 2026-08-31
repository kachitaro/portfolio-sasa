"use client";

import GridGuides from "@/components/ui/GridGuides";
import { Bot, Terminal } from "lucide-react";

export default function AIInterfacePage() {
  return (
    <section
      id="ai-interface"
      className="relative w-screen h-screen min-h-[640px] shrink-0 paper-texture px-8 sm:px-16 py-10 sm:py-12 flex flex-col justify-between select-none overflow-hidden"
    >
      <GridGuides showTopH={true} showCenterH={false} showBottomH={false} />

      <div className="relative z-10 w-full max-w-[1720px] mx-auto flex-1 flex flex-col justify-between pb-14">
        {/* Header Title */}
        <div className="pt-2">
          <div className="text-[11px] font-mono tracking-widest uppercase text-black/50 mb-1">
            05 // COGNITIVE UX & AGENTIC INTERFACES
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-normal tracking-[-0.02em] text-[#121212]">
            AI Interface Design & Human-Agent Symbiosis
          </h2>
        </div>

        {/* Middle Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          {/* Left Column: Cognitive Framework */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-black/10 bg-white/35 space-y-4">
              <span className="text-xs font-mono text-black/50 uppercase tracking-wider block">
                Autonomous Workflow Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl font-editorial font-medium text-[#121212]">
                Designing for Non-Deterministic Human-in-the-Loop Experiences
              </h3>
              <p className="text-xs sm:text-sm font-sans text-black/75 leading-relaxed">
                As software shifts from static buttons to probabilistic AI outputs, UI design must communicate confidence scores, provide progressive disclosure of agent thoughts, and allow seamless user steering without cognitive overload.
              </p>

              <div className="grid grid-cols-3 gap-3 py-3 border-y border-black/10 text-center">
                <div>
                  <div className="text-xl font-editorial font-bold text-[#121212]">&lt;40ms</div>
                  <div className="text-[10px] font-mono text-black/50 mt-0.5">Streaming TTFT</div>
                </div>
                <div>
                  <div className="text-xl font-editorial font-bold text-[#121212]">99.4%</div>
                  <div className="text-[10px] font-mono text-black/50 mt-0.5">Intent Accuracy</div>
                </div>
                <div>
                  <div className="text-xl font-editorial font-bold text-[#121212]">Zero-Friction</div>
                  <div className="text-[10px] font-mono text-black/50 mt-0.5">Steering Feedback</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {["Agent Steering UX", "Streaming Buffers", "Confidence Meters", "Multi-Modal Prompts"].map((tag) => (
                  <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full border border-black/15 bg-white/40">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interaction Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl border border-black/10 bg-white/20">
              <h4 className="text-sm font-bold text-[#121212] mb-1 flex items-center gap-2">
                <Bot className="w-4 h-4" /> Transparent Thought Stream
              </h4>
              <p className="text-xs font-sans text-black/70 leading-relaxed">
                Collapsible reasoning inspector showing tool calls, parameters, and verification steps in real-time.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-black/10 bg-white/20">
              <h4 className="text-sm font-bold text-[#121212] mb-1 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Contextual In-Line Disambiguation
              </h4>
              <p className="text-xs font-sans text-black/70 leading-relaxed">
                Micro-prompts that resolve model ambiguity without resetting conversation state or history.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="flex items-center justify-between pt-4 border-t border-black/10 text-xs font-mono text-black/50">
          <span>Agentic Systems & Generative UI</span>
          <span>Cognitive Ergonomics 2026</span>
        </div>
      </div>
    </section>
  );
}
