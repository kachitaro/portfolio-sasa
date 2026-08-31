"use client";

import GridGuides from "@/components/ui/GridGuides";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProductDesignPage() {
  return (
    <section
      id="product-design"
      className="relative w-screen h-screen min-h-[640px] shrink-0 paper-texture px-8 sm:px-16 py-10 sm:py-12 flex flex-col justify-between select-none overflow-hidden"
    >
      <GridGuides showTopH={true} showCenterH={false} showBottomH={false} />

      <div className="relative z-10 w-full max-w-[1720px] mx-auto flex-1 flex flex-col justify-between pb-14">
        {/* Header Title */}
        <div className="pt-2">
          <div className="text-[11px] font-mono tracking-widest uppercase text-black/50 mb-1">
            03 // ENTERPRISE & CONSUMER UX
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-normal tracking-[-0.02em] text-[#121212]">
            Product Design & Complex System Architectures
          </h2>
        </div>

        {/* Middle Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          {/* Card 1: Bear Plus Agency */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl border border-black/10 bg-white/35 flex flex-col justify-between space-y-4 group">
            <div className="relative w-full h-44 rounded-xl overflow-hidden border border-black/10 bg-zinc-300">
              <Image
                src="/artworks/work_2.jpg"
                alt="Bear Plus Agency UI/UX"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-black/50 mb-1.5">
                <span>UI Designer</span>
                <span>09/25 — 03/26</span>
              </div>
              <h3 className="text-2xl font-editorial font-medium text-[#121212] mb-2">
                Bear Plus Agency — Digital Product Systems
              </h3>
              <p className="text-xs sm:text-sm font-sans text-black/70 leading-relaxed">
                Designing scalable user interfaces, design systems, and high-conversion client web platforms. Standardizing component tokens, spacing logic, and interactive prototypes.
              </p>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-black/60 pt-2 border-t border-black/10">
              <span>Figma • Design Systems • Webflow</span>
              <a
                href="https://www.instagram.com/sasa_artdaily/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#121212] hover:underline"
              >
                <span>@sasa_artdaily</span> <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: Tribe Hospitality */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl border border-black/10 bg-white/35 flex flex-col justify-between space-y-4 group">
            <div className="relative w-full h-44 rounded-xl overflow-hidden border border-black/10 bg-zinc-300">
              <Image
                src="/artworks/work_3.jpg"
                alt="Tribe Hospitality Branding"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-black/50 mb-1.5">
                <span>Graphic Designer</span>
                <span>02/24 — 04/26</span>
              </div>
              <h3 className="text-2xl font-editorial font-medium text-[#121212] mb-2">
                Tribe Hospitality — Brand Identity & Packaging
              </h3>
              <p className="text-xs sm:text-sm font-sans text-black/70 leading-relaxed">
                Overhauled brand visual identity, dining menus, food packaging, and marketing collateral across 6 premier hospitality concepts in Ho Chi Minh City.
              </p>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-black/60 pt-2 border-t border-black/10">
              <span>Brand Identity • Packaging • Print</span>
              <a
                href="https://www.instagram.com/sasa_artdaily/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#121212] hover:underline"
              >
                <span>@sasa_artdaily</span> <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="flex items-center justify-between pt-4 border-t border-black/10 text-xs font-mono text-black/50">
          <span>Enterprise Product Architecture</span>
          <span>Scalable Information Architecture</span>
        </div>
      </div>
    </section>
  );
}
