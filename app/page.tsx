"use client";

import dynamic from "next/dynamic";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import HorizontalTrack from "@/components/sections/HorizontalTrack";

// Dynamically import 3D WebGL Canvas to exclude Three.js / R3F from initial critical SSR bundle
const PaperCanvas3D = dynamic(
  () => import("@/components/canvas/PaperCanvas3D"),
  { ssr: false }
);

export default function Home() {
  return (
    <SmoothScrollProvider>
      {/* 3D WebGL Background Layer (Client-side only) */}
      <PaperCanvas3D />

      <main className="w-full min-h-screen bg-[#dedede] text-[#121212] flex flex-col relative z-10">
        {/* Horizontal Scrolling Sequence */}
        <HorizontalTrack />
      </main>
    </SmoothScrollProvider>
  );
}
