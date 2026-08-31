interface CrosshairProps {
  className?: string;
  size?: number;
  label?: string;
}

export default function Crosshair({
  className = "",
  size = 12,
  label,
}: CrosshairProps) {
  return (
    <div
      className={`inline-flex items-center justify-center select-none text-[#121212] opacity-70 hover:opacity-100 transition-opacity relative group ${className}`}
      title={label}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-3 h-3 text-[#121212]"
      >
        <line
          x1="6"
          y1="0"
          x2="6"
          y2="12"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="square"
        />
        <line
          x1="0"
          y1="6"
          x2="12"
          y2="6"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="square"
        />
      </svg>
      {label && (
        <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 text-[9px] font-mono px-1 py-0.5 rounded bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          {label}
        </span>
      )}
    </div>
  );
}
