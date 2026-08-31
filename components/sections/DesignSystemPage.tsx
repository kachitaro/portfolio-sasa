"use client";

import GridGuides from "@/components/ui/GridGuides";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { useState } from "react";
import { Check } from "lucide-react";

export default function DesignSystemPage() {
  const { designSystem } = PORTFOLIO_DATA;
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <section
      id="design-system"
      className="relative w-screen h-screen min-h-[640px] shrink-0 paper-texture px-8 sm:px-16 py-10 sm:py-12 flex flex-col justify-between select-none overflow-hidden"
    >
      <GridGuides showTopH={true} showCenterH={false} showBottomH={false} />

      <div className="relative z-10 w-full max-w-[1720px] mx-auto flex-1 flex flex-col justify-between pb-14">
        {/* Header Title */}
        <div className="pt-2">
          <div className="text-[11px] font-mono tracking-widest uppercase text-black/50 mb-1">
            01 // SYSTEM ARCHITECTURE
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-normal tracking-[-0.02em] text-[#121212]">
            Design System Guidelines & Token Philosophy
          </h2>
        </div>

        {/* 3 Columns Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start my-auto">
          {/* Column 1: Color Tokens */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-black/50 pb-2 border-b border-black/10">
              Color Token Matrix
            </h3>
            <div className="space-y-2">
              {designSystem.colorTokens.map((token) => (
                <div
                  key={token.name}
                  onClick={() => handleCopy(token.hex)}
                  className="flex items-center justify-between p-2.5 rounded-xl border border-black/10 hover:border-black/30 bg-white/30 hover:bg-white/70 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-4 h-4 rounded-full border border-black/20"
                      style={{ backgroundColor: token.hex }}
                    />
                    <div>
                      <div className="text-xs font-medium text-[#121212]">{token.name}</div>
                      <div className="text-[10px] font-mono text-black/50">{token.role}</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-black/60 group-hover:text-black flex items-center gap-1">
                    {copiedHex === token.hex ? <Check className="w-3 h-3 text-emerald-700" /> : token.hex}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Typography Hierarchy */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-black/50 pb-2 border-b border-black/10">
              Typography Hierarchy
            </h3>
            <div className="space-y-3">
              {designSystem.typographyScale.map((t, idx) => (
                <div key={idx} className="p-3 rounded-xl border border-black/10 bg-white/20">
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-[#121212]">{t.level}</span>
                    <span className="text-black/50">{t.size}</span>
                  </div>
                  <div className="text-[11px] font-sans text-black/70">{t.usage}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Motion & Principles */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-black/50 pb-2 border-b border-black/10">
              Kinetic Principles
            </h3>
            <div className="space-y-3">
              {designSystem.motionPrinciples.map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-black/10 bg-white/20">
                  <h4 className="text-xs font-bold text-[#121212] mb-1">{m.title}</h4>
                  <p className="text-[11px] font-sans text-black/70 leading-relaxed mb-2">{m.desc}</p>
                  <code className="text-[10px] font-mono text-black/60 block bg-black/[0.04] p-1 rounded">
                    {m.curve}
                  </code>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="flex items-center justify-between pt-4 border-t border-black/10 text-xs font-mono text-black/50">
          <span>DS-2026 // Multi-Brand Synchronization</span>
          <span>Figma Variables ↔ Code Pipeline</span>
        </div>
      </div>
    </section>
  );
}
