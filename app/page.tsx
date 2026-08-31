"use client";

import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import PaperCanvas3D from "@/components/canvas/PaperCanvas3D";
import HorizontalTrack from "@/components/sections/HorizontalTrack";

export default function Home() {
  return (
    <SmoothScrollProvider>
      {/* 3D WebGL Background Layer (React Three Fiber + Drei) */}
      <PaperCanvas3D />

      <main className="w-full min-h-screen bg-[#dedede] text-[#121212] flex flex-col relative z-10">
        {/* Horizontal Scrolling Sequence */}
        <HorizontalTrack />
      </main>
    </SmoothScrollProvider>
  );
}
