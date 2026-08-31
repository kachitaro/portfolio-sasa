"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * DustParticles3D renders 350 floating microscopic dust particles & fiber specks
 * with gentle organic drift and mouse interaction using React Three Fiber.
 */
export default function DustParticles3D({ count = 300 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate deterministic particle coordinates
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;

      vel.push({
        x: (Math.random() - 0.5) * 0.0015,
        y: (Math.random() - 0.5) * 0.0015,
        z: (Math.random() - 0.5) * 0.0008,
      });
    }

    return [pos, vel];
  }, [count]);

  // Frame animation loop: drift particles & subtle rotation
  useFrame(({ pointer, clock }) => {
    if (!pointsRef.current) return;

    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position as THREE.BufferAttribute;
    const array = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
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

    // React Three Fiber pointer tracking (parallax tilt)
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(
      pointsRef.current.rotation.y,
      pointer.x * 0.15,
      0.05
    );
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(
      pointsRef.current.rotation.x,
      -pointer.y * 0.15,
      0.05
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
        opacity={0.3}
        sizeAttenuation
        blending={THREE.NormalBlending}
      />
    </points>
  );
}
