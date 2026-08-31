"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * DustParticles3D renders floating microscopic dust particles & fiber specks
 * with gentle organic drift and mouse interaction using React Three Fiber.
 * Supports prefers-reduced-motion accessibility.
 */
export default function DustParticles3D({ count = 250 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    }
  }, []);

  // Generate deterministic particle coordinates
  const [positions, velocities] = useMemo(() => {
    const effectiveCount = reducedMotion ? Math.floor(count / 2) : count;
    const pos = new Float32Array(effectiveCount * 3);
    const vel: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < effectiveCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;

      vel.push({
        x: (Math.random() - 0.5) * 0.0012,
        y: (Math.random() - 0.5) * 0.0012,
        z: (Math.random() - 0.5) * 0.0006,
      });
    }

    return [pos, vel];
  }, [count, reducedMotion]);

  // Frame animation loop: drift particles & subtle rotation
  useFrame(({ pointer }) => {
    if (!pointsRef.current || reducedMotion) return;

    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position as THREE.BufferAttribute;
    const array = posAttr.array as Float32Array;
    const n = array.length / 3;

    for (let i = 0; i < n; i++) {
      array[i * 3] += velocities[i].x;
      array[i * 3 + 1] += velocities[i].y;
      array[i * 3 + 2] += velocities[i].z;

      // Wrap around viewport boundaries
      if (array[i * 3] > 8) array[i * 3] = -8;
      if (array[i * 3] < -8) array[i * 3] = 8;
      if (array[i * 3 + 1] > 6) array[i * 3 + 1] = -6;
      if (array[i * 3 + 1] < -6) array[i * 3 + 1] = 6;
    }

    posAttr.needsUpdate = true;

    // Pointer tracking parallax tilt
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(
      pointsRef.current.rotation.y,
      pointer.x * 0.1,
      0.04
    );
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(
      pointsRef.current.rotation.x,
      -pointer.y * 0.1,
      0.04
    );
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#222222"
        transparent
        opacity={0.25}
        sizeAttenuation
        blending={THREE.NormalBlending}
      />
    </points>
  );
}
