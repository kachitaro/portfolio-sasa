"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { MouseEvent, ReactNode, useRef } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "glow" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
  rel?: string;
}

export default function MagneticButton({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className = "",
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.35);
    y.set(middleY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white shadow-[0_0_25px_rgba(99,102,241,0.4)] border border-indigo-400/30",
    secondary:
      "bg-white/[0.05] hover:bg-white/[0.1] text-zinc-100 border border-white/10 hover:border-white/20 backdrop-blur-md",
    glow: "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] border border-white/20 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]",
    outline:
      "bg-transparent border border-zinc-700 hover:border-indigo-400/60 text-zinc-300 hover:text-white hover:bg-indigo-500/10",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs font-medium rounded-lg",
    md: "px-6 py-3 text-sm font-medium rounded-xl",
    lg: "px-8 py-4 text-base font-semibold rounded-2xl",
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 select-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <div onClick={onClick} className="inline-block">
      {content}
    </div>
  );
}
