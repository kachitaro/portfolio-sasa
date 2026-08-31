"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import GridGuides from "@/components/ui/GridGuides";
import LottieFeedback from "@/components/ui/LottieFeedback";

export default function AboutDossierSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("linhsa112@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section
      id="about-dossier"
      className="relative w-screen h-screen min-h-[640px] shrink-0 paper-texture px-8 sm:px-14 py-8 sm:py-10 flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Blueprint Grid Guides */}
      <GridGuides showCenterH={false} />

      {/* Top Crosshairs Row: 2.2%, 20.26%, 50%, 79.74%, 97.8% */}
      <div className="absolute top-4 left-[2.2%] pointer-events-none text-black/50 text-xs font-mono">+</div>
      <div className="absolute top-4 left-[20.26%] pointer-events-none text-black/50 text-xs font-mono">+</div>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none text-black/50 text-xs font-mono">+</div>
      <div className="absolute top-4 left-[79.74%] pointer-events-none text-black/50 text-xs font-mono">+</div>
      <div className="absolute top-4 right-[2.2%] pointer-events-none text-black/50 text-xs font-mono">+</div>

      <div className="relative z-10 w-full max-w-[1720px] mx-auto flex-1 flex flex-col justify-between gap-6 sm:gap-8 pb-14">
        {/* ─────────────────────────────────────────────────────────────
            1. TOP STATEMENT (Condensed High-Contrast Serif)
        ───────────────────────────────────────────────────────────── */}
        <div className="w-full max-w-3xl pt-2 sm:pt-4">
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-[40px] font-normal leading-[1.12] tracking-[-0.02em] text-[#121212]">
            I build identities that work as a system <br className="hidden sm:block" />
            consistent, intentional, <br className="hidden sm:block" />
            and thoughtfully structured.
          </h2>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. MIDDLE SECTION: [Portrait + Bio] & [Education + Experience]
        ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start my-auto">
          {/* Left Column: Portrait Card + Narrative Bio */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-5 sm:gap-6 items-start">
            {/* Portrait Image with rounded corners matching Figma */}
            <div className="relative w-44 sm:w-52 h-56 sm:h-64 shrink-0 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/10 bg-zinc-300">
              <Image
                src="/sasa-portrait.jpg"
                alt="Sa Sa Nguyen portrait"
                fill
                priority
                className="object-cover object-center grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                sizes="(max-width: 640px) 180px, 210px"
              />
            </div>

            {/* Bio Narrative */}
            <div className="space-y-3 text-[11px] sm:text-xs leading-[1.62] font-sans text-[#222222] max-w-md pt-0.5">
              <p>
                I&apos;m Sa Sa Nguyen, a multidisciplinary designer exploring the intersection of culture, emotion, and aesthetics.
              </p>
              <p>
                Born in Vietnam and currently based in Ho Chi Minh City, my work focuses on the balance between contrast and consistency. These elements shape how I build visual identities and tell meaningful stories through design.
              </p>
              <p>
                I work across graphic design, branding, and UX/UI, creating visual systems and digital experiences that are both strategic and emotionally engaging. My approach is rooted in clarity and intention, using design as a tool to communicate ideas, shape identity, and create thoughtful connections between people and brands.
              </p>
            </div>
          </div>

          {/* Right Column: Education & Experience Lists */}
          <div className="lg:col-span-5 space-y-6 lg:pl-6">
            {/* Education */}
            <div className="space-y-2.5">
              <h3 className="text-xs sm:text-[13px] font-sans font-medium text-[#121212] underline underline-offset-4 mb-1.5">
                Education
              </h3>
              <div className="space-y-2 text-[11px] sm:text-xs">
                {/* Item 1 */}
                <div className="grid grid-cols-12 gap-2 items-start">
                  <span className="col-span-3 font-sans text-black/50">2024</span>
                  <div className="col-span-9">
                    <div className="font-medium text-[#121212]">Multi-disciplinary Designer</div>
                    <div className="text-black/60 text-[10.5px] sm:text-[11px]">Design Anthropology School</div>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="grid grid-cols-12 gap-2 items-start">
                  <span className="col-span-3 font-sans text-black/50">2020</span>
                  <div className="col-span-9">
                    <div className="font-medium text-[#121212]">Saigontourist Hospitality College</div>
                    <div className="text-black/60 text-[10.5px] sm:text-[11px]">Hotel restaurant management</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-2.5 pt-1">
              <h3 className="text-xs sm:text-[13px] font-sans font-medium text-[#121212] mb-1.5">
                Experience
              </h3>
              <div className="space-y-2 text-[11px] sm:text-xs">
                {/* Item 1 */}
                <div className="grid grid-cols-12 gap-2 items-start">
                  <span className="col-span-4 sm:col-span-3 font-sans text-black/50">02/24 - 04/26</span>
                  <div className="col-span-8 sm:col-span-9">
                    <div className="font-medium text-[#121212]">Graphic designer</div>
                    <div className="text-black/60 text-[10.5px] sm:text-[11px]">Tribe Hospitality</div>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="grid grid-cols-12 gap-2 items-start">
                  <span className="col-span-4 sm:col-span-3 font-sans text-black/50">09/25 - 03/26</span>
                  <div className="col-span-8 sm:col-span-9">
                    <div className="font-medium text-[#121212]">UI Designer</div>
                    <div className="text-black/60 text-[10.5px] sm:text-[11px]">Bear Plus Agency</div>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="grid grid-cols-12 gap-2 items-start">
                  <span className="col-span-4 sm:col-span-3 font-sans text-black/50">06/23 - 12/23</span>
                  <div className="col-span-8 sm:col-span-9">
                    <div className="font-medium text-[#121212]">Graphic designer</div>
                    <div className="text-black/60 text-[10.5px] sm:text-[11px]">Gióng Cafe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. BOTTOM ROW: [Contact] & [Bottom Serif Statement]
        ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pt-4 pb-2">
          {/* Bottom-Left: Contact Block */}
          <div className="lg:col-span-6 space-y-1">
            <h4 className="text-xs sm:text-[13px] font-sans font-medium text-[#121212]">
              Contact
            </h4>
            <div className="text-xs sm:text-[13px] font-sans text-black/70 flex items-center gap-1.5">
              <span>Gmail:</span>
              <button
                onClick={handleCopyEmail}
                className="text-[#121212] hover:underline underline-offset-2 flex items-center gap-1 cursor-pointer"
              >
                <span>linhsa112@gmail.com</span>
                {copied && <LottieFeedback size={15} />}
              </button>
            </div>
          </div>

          {/* Bottom-Right: Statement Quote (Condensed Serif) */}
          <div className="lg:col-span-6 lg:text-right">
            <p className="font-editorial text-2xl sm:text-3xl lg:text-[38px] font-normal leading-[1.12] tracking-[-0.02em] text-[#121212]">
              I appreciate simple layouts <br className="hidden sm:block" />
              where intention, refinement, <br className="hidden sm:block" />
              and aesthetics come together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
