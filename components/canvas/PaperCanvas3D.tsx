"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import DustParticles3D from "./DustParticles3D";

function InteractiveLighting() {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame(({ pointer }) => {
    if (!lightRef.current) return;
    // Map pointer [-1, 1] to 3D light coordinates
    lightRef.current.position.x = THREE.MathUtils.lerp(
      lightRef.current.position.x,
      pointer.x * 6,
      0.08
    );
    lightRef.current.position.y = THREE.MathUtils.lerp(
      lightRef.current.position.y,
      pointer.y * 4,
      0.08
    );
  });

  return (
    <>
      <ambientLight intensity={1.2} />
      <pointLight
        ref={lightRef}
        position={[0, 0, 4]}
        intensity={3.0}
        distance={18}
        color="#ffffff"
      />
    </>
  );
}

/**
 * PaperCanvas3D serves as a lightweight, non-blocking 3D WebGL background layer
 * rendered via React Three Fiber.
 */
export default function PaperCanvas3D() {
  const isHighPerformance = useMemo(() => {
    return (
      typeof navigator !== "undefined" &&
      (navigator.hardwareConcurrency || 4) >= 4
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: isHighPerformance ? "high-performance" : "low-power",
        }}
        dpr={[1, isHighPerformance ? 1.5 : 1]}
        style={{ pointerEvents: "none" }}
      >
        <InteractiveLighting />
        <DustParticles3D count={240} />
      </Canvas>
    </div>
  );
}
