import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "indigo" | "cyan" | "violet" | "emerald" | "amber" | "neutral";
  size?: "sm" | "md";
  className?: string;
}

export default function Badge({
  children,
  variant = "indigo",
  size = "sm",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    indigo: "bg-indigo-500/10 border-indigo-500/25 text-indigo-300",
    cyan: "bg-cyan-500/10 border-cyan-500/25 text-cyan-300",
    violet: "bg-purple-500/10 border-purple-500/25 text-purple-300",
    emerald: "bg-emerald-500/10 border-emerald-500/25 text-emerald-300",
    amber: "bg-amber-500/10 border-amber-500/25 text-amber-300",
    neutral: "bg-white/5 border-white/10 text-zinc-300",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs font-mono",
    md: "px-3 py-1 text-xs font-mono",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border transition-all ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}
