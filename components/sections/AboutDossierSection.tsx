"use client";

import { useState } from "react";
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
      className="relative w-screen h-screen min-h-[640px] shrink-0 paper-texture select-none overflow-hidden"
    >
      {/* Blueprint Grid Guides & Crosshairs at y = 68px */}
      <GridGuides showTopH={true} showCenterH={false} showBottomH={false} />

      {/* ─────────────────────────────────────────────────────────────
          16-COLUMN EXACT FIGMA LAYOUT (Slide 16:9 - 2)
          - Frame: 1920 x 1080
          - Columns 1-3: Portrait Photo & Contact
          - Columns 4-7: Bio Narrative
          - Column 8: Spacer with Center Crosshair at 50%
          - Columns 9-11: Dates & Section Headers
          - Columns 12-16: Roles & Companies & Bottom Statement
      ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full h-full max-w-[1920px] mx-auto px-[2.2%] pt-[68px] pb-10 flex flex-col justify-between">
        {/* ═════════════════════════════════════════════════════════════
            1. TOP ROW: Top Statement (Cols 1-8: 891px) & Education (Cols 9-16)
        ═════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-16 gap-x-5 items-start pt-6 sm:pt-8">
          {/* Top Statement: Spans Columns 1 to 8 (width ~ 891px) */}
          <div className="col-span-16 lg:col-span-8 max-w-[891px]">
            <h2
              className="font-absinotte text-[32px] sm:text-[44px] lg:text-[58px] leading-[100%] tracking-[-0.02em] text-[#121212] whitespace-nowrap"
              style={{
                fontFamily: "BT Absinotte, var(--font-cormorant), serif",
                fontWeight: 200,
                lineHeight: "100%",
                letterSpacing: "-0.02em",
              }}
            >
              I build identities that work as a system <br />
              consistent, intentional, <br />
              and thoughtfully structured.
            </h2>
          </div>

          {/* Education Block: Dates in Cols 9-11, Details in Cols 12-16 */}
          <div className="col-span-16 lg:col-span-8 grid grid-cols-8 gap-x-5">
            <div className="col-span-3 space-y-3">
              <h3 className="text-[18px] font-sans font-medium text-[#121212] underline underline-offset-4">
                Education
              </h3>
              <div className="space-y-3 text-[18px] font-sans text-black/60 pt-1">
                <div>2024</div>
                <div className="pt-2">2020</div>
              </div>
            </div>

            <div className="col-span-5 space-y-3 pt-8">
              <div className="space-y-0.5">
                <div className="font-medium text-[#121212] text-[18px] font-sans">Multi-disciplinary Designer</div>
                <div className="text-black/60 text-[15px] font-sans">Design Anthropology School</div>
              </div>
              <div className="space-y-0.5 pt-1">
                <div className="font-medium text-[#121212] text-[18px] font-sans">Saigontourist Hospitality College</div>
                <div className="text-black/60 text-[15px] font-sans">Hotel restaurant management</div>
              </div>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════
            2. MIDDLE ROW: [Photo Cols 1-3] + [Bio Cols 4-7] & [Experience Cols 9-16]
        ═════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-16 gap-x-5 items-start my-auto py-2">
          {/* Columns 1-3: Portrait Photo */}
          <div className="col-span-4 lg:col-span-3">
            <div className="relative w-full aspect-[3/4] max-w-[280px] rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-black/10 bg-zinc-200 group">
              <Image
                src="/sasa-portrait.jpg"
                alt="Sa Sa Nguyen"
                fill
                priority
                className="object-cover object-center grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 190px, 280px"
              />
            </div>
          </div>

          {/* Columns 4-7: Bio Narrative */}
          <div className="col-span-8 lg:col-span-4 space-y-4 text-[17px] leading-[1.60] font-sans text-[#222222] pt-1">
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

          {/* Column 8: Spacer */}
          <div className="hidden lg:block col-span-1" />

          {/* Columns 9-16: Experience */}
          <div className="col-span-16 lg:col-span-8 grid grid-cols-8 gap-x-5 pt-1">
            {/* Dates / Headers in Cols 9-11 */}
            <div className="col-span-3 space-y-3">
              <h3 className="text-[18px] font-sans font-medium text-[#121212]">
                Experience
              </h3>
              <div className="space-y-4 text-[18px] font-sans text-black/60 pt-1">
                <div>09/25 - 03/26</div>
                <div className="pt-1">02/24 - 04/26</div>
                <div className="pt-1">06/23 - 12/23</div>
              </div>
            </div>

            {/* Roles / Companies in Cols 12-16 */}
            <div className="col-span-5 space-y-3.5 pt-8">
              {/* 1. Bear Plus Agency */}
              <div className="space-y-0.5">
                <div className="font-medium text-[#121212] text-[18px] font-sans">UI Designer</div>
                <div className="text-black/60 text-[15px] font-sans">Bear Plus Agency</div>
              </div>

              {/* 2. Tribe Hospitality */}
              <div className="space-y-0.5">
                <div className="font-medium text-[#121212] text-[18px] font-sans">Graphic designer</div>
                <div className="text-black/60 text-[15px] font-sans">Tribe Hospitality</div>
              </div>

              {/* 3. Gióng Cafe */}
              <div className="space-y-0.5">
                <div className="font-medium text-[#121212] text-[18px] font-sans">Graphic designer</div>
                <div className="text-black/60 text-[15px] font-sans">Gióng Cafe</div>
              </div>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════
            3. BOTTOM ROW: [Contact Cols 1-3] & [Bottom Statement Cols 11-16]
        ═════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-16 gap-x-5 items-end pt-2 pb-1">
          {/* Columns 1-3: Contact Block */}
          <div className="col-span-6 lg:col-span-4 space-y-1">
            <h4 className="text-[18px] font-sans font-medium text-[#121212]">
              Contact
            </h4>
            <div className="text-[18px] font-sans text-black/70 flex items-center gap-2">
              <span>Gmail:</span>
              <button
                onClick={handleCopyEmail}
                className="text-[#121212] hover:underline underline-offset-2 flex items-center gap-1.5 cursor-pointer"
              >
                <span>linhsa112@gmail.com</span>
                {copied && <LottieFeedback size={18} />}
              </button>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block col-span-4" />

          {/* Columns 11-16: Bottom Statement Quote (BT Absinotte) */}
          <div className="col-span-10 lg:col-span-8 text-right">
            <p
              className="font-absinotte text-[32px] sm:text-[44px] lg:text-[58px] leading-[100%] tracking-[-0.02em] text-[#121212]"
              style={{
                fontFamily: "BT Absinotte, var(--font-cormorant), serif",
                fontWeight: 200,
                lineHeight: "100%",
                letterSpacing: "-0.02em",
              }}
            >
              I appreciate simple layouts <br />
              where intention, refinement, <br />
              and aesthetics come together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
