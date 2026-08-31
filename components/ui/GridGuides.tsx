/**
 * GridGuides renders architectural hairline registration guides matching the Figma 16-column grid.
 * 1920x1086 layout:
 * - Columns 1-3: Left 20.26% (389px)
 * - Columns 4-13: Center 59.48% (1142px)
 * - Columns 14-16: Right 20.26% (389px)
 */
export default function GridGuides({ showCenterH = true }: { showCenterH?: boolean }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 select-none">
      {/* Margin Left: ~2.2% */}
      <div className="absolute top-0 bottom-0 left-[2.2%] w-[1px] bg-black/[0.04]" />
      {/* Column 4 Left Boundary (Start of Portfolio): 20.26% (389px) */}
      <div className="absolute top-0 bottom-0 left-[20.26%] w-[1px] bg-black/[0.04]" />
      {/* Center Line: 50% (960px) */}
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-black/[0.04]" />
      {/* Column 14 Left Boundary (End of Portfolio): 79.74% (1531px) */}
      <div className="absolute top-0 bottom-0 left-[79.74%] w-[1px] bg-black/[0.04]" />
      {/* Margin Right: ~97.8% */}
      <div className="absolute top-0 bottom-0 right-[2.2%] w-[1px] bg-black/[0.04]" />

      {/* Horizontal Guideline across center: 50% */}
      {showCenterH && (
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-black/[0.04]" />
      )}
    </div>
  );
}
