"use client";

import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/[0.03] z-50 pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 origin-left shadow-[0_0_10px_rgba(99,102,241,0.7)]"
        style={{ scaleX }}
      />
    </div>
  );
}
