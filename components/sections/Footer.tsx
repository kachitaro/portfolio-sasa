"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Heart, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Ho_Chi_Minh",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] relative bg-[#04050a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 p-[1px]">
              <div className="w-full h-full bg-[#080a12] rounded-[7px] flex items-center justify-center font-mono font-bold text-white text-xs">
                S
              </div>
            </div>
            <div>
              <span className="font-bold text-white text-sm">
                SASA DS-2026
              </span>
              <span className="text-[11px] font-mono text-zinc-400 block">
                Spatial Interfaces & WebGL Systems
              </span>
            </div>
          </div>

          {/* Local Time in HCMC */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>HCMC / VN (UTC+7):</span>
            <span className="text-white font-bold">{time || "00:00:00"}</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400 text-center sm:text-left">
          <div>
            © 2026 {PORTFOLIO_DATA.profile.fullName}. Built with Next.js 16, Three.js & Motion.
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <span>DS-2026 Spec</span>
            <span>•</span>
            <span className="text-indigo-400">Figma Node 604-5052</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
