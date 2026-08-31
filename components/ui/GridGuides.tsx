"use client";

interface GridGuidesProps {
  showTopH?: boolean;
  showCenterH?: boolean;
  showBottomH?: boolean;
}

const X_COORDS = [
  { id: "margin-l", x: "2.2%" },
  { id: "col-4", x: "20.26042%" },
  { id: "center", x: "50%" },
  { id: "col-13", x: "79.74%" },
  { id: "margin-r", x: "97.8%" },
];

/**
 * Concentric SVG Crosshair (+):
 * Perfectly centered on the intersection of vertical and horizontal guide lines.
 */
function CrosshairMark({ x, y }: { x: string; y: string }) {
  return (
    <div
      className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 z-20 select-none"
      style={{ left: x, top: y }}
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[13px] h-[13px] text-[#121212] opacity-75"
      >
        {/* Vertical tick perfectly aligned with x */}
        <line x1="6.5" y1="0.5" x2="6.5" y2="12.5" stroke="currentColor" strokeWidth="1" />
        {/* Horizontal tick perfectly aligned with y */}
        <line x1="0.5" y1="6.5" x2="12.5" y2="6.5" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}

/**
 * GridGuides:
 * Unifies all 5 vertical hairline columns and horizontal guide lines with concentric crosshairs.
 */
export default function GridGuides({
  showTopH = true,
  showCenterH = true,
  showBottomH = false,
}: GridGuidesProps) {
  const topY = "68px";
  const centerY = "50%";
  const bottomY = "calc(100% - 68px)";

  return (
    <div className="absolute inset-0 pointer-events-none z-0 select-none">
      {/* ─────────────────────────────────────────────────────────────
          1. 5 VERTICAL HAIRLINE GUIDELINES (Full Height)
      ───────────────────────────────────────────────────────────── */}
      {X_COORDS.map((col) => (
        <div
          key={col.id}
          className="absolute top-0 bottom-0 w-[1px] bg-black/[0.045] -translate-x-1/2"
          style={{ left: col.x }}
        />
      ))}

      {/* ─────────────────────────────────────────────────────────────
          2. HORIZONTAL HAIRLINE GUIDELINES
      ───────────────────────────────────────────────────────────── */}
      {/* Top Horizontal Line at y = 68px */}
      {showTopH && (
        <div
          className="absolute left-0 right-0 h-[1px] bg-black/[0.045] -translate-y-1/2"
          style={{ top: topY }}
        />
      )}

      {/* Center Horizontal Line at y = 50% */}
      {showCenterH && (
        <div
          className="absolute left-0 right-0 h-[1px] bg-black/[0.045] -translate-y-1/2"
          style={{ top: centerY }}
        />
      )}

      {/* Bottom Horizontal Line */}
      {showBottomH && (
        <div
          className="absolute left-0 right-0 h-[1px] bg-black/[0.045] -translate-y-1/2"
          style={{ top: bottomY }}
        />
      )}

      {/* ─────────────────────────────────────────────────────────────
          3. EXACT CONCENTRIC CROSSHAIRS AT INTERSECTIONS
      ───────────────────────────────────────────────────────────── */}
      {/* Top Row Crosshairs */}
      {showTopH &&
        X_COORDS.map((col) => (
          <CrosshairMark key={`top-${col.id}`} x={col.x} y={topY} />
        ))}

      {/* Center Row Crosshairs */}
      {showCenterH &&
        X_COORDS.filter((col) => col.id !== "center").map((col) => (
          <CrosshairMark key={`center-${col.id}`} x={col.x} y={centerY} />
        ))}

      {/* Bottom Row Crosshairs */}
      {showBottomH &&
        X_COORDS.map((col) => (
          <CrosshairMark key={`bottom-${col.id}`} x={col.x} y={bottomY} />
        ))}
    </div>
  );
}
