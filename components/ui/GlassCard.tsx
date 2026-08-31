"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { MouseEvent, ReactNode, useRef } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  glow?: "indigo" | "cyan" | "violet" | "none";
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = "",
  tilt = false,
  glow = "none",
  onClick,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (!tilt) return;
    x.set(0);
    y.set(0);
  };

  const glowStyles = {
    indigo: "hover:shadow-[0_0_40px_rgba(99,102,241,0.25)] hover:border-indigo-500/40",
    cyan: "hover:shadow-[0_0_40px_rgba(6,182,212,0.25)] hover:border-cyan-500/40",
    violet: "hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] hover:border-purple-500/40",
    none: "",
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={
        tilt
          ? {
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }
          : undefined
      }
      className={`glass-panel-hover rounded-2xl p-6 relative transition-all duration-300 ${glowStyles[glow]} ${className}`}
    >
      {children}
    </motion.div>
  );
}
