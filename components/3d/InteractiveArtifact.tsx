"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

interface InteractiveArtifactProps {
  type?: "torusKnot" | "particles" | "hologram" | "cyberSphere";
  color?: string;
  wireframe?: boolean;
}

export default function InteractiveArtifact({
  type = "torusKnot",
  color = "#6366F1",
  wireframe = false,
}: InteractiveArtifactProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeType, setActiveType] = useState(type);
  const [isWireframe, setIsWireframe] = useState(wireframe);
  const [accentColor, setAccentColor] = useState(color);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    setActiveType(type);
  }, [type]);

  useEffect(() => {
    setAccentColor(color);
  }, [color]);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2.5 * speed;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(new THREE.Color(accentColor), 50, 15);
    light1.position.set(3, 3, 3);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x06b6d4, 30, 15);
    light2.position.set(-3, -3, 2);
    scene.add(light2);

    let activeMesh: THREE.Object3D | null = null;
    let disposables: { geometry?: THREE.BufferGeometry; material?: THREE.Material | THREE.Material[] } = {};

    const buildObject = () => {
      if (activeMesh) {
        scene.remove(activeMesh);
        if (disposables.geometry) disposables.geometry.dispose();
        if (disposables.material) {
          if (Array.isArray(disposables.material)) {
            disposables.material.forEach((m) => m.dispose());
          } else {
            disposables.material.dispose();
          }
        }
      }

      const threeColor = new THREE.Color(accentColor);

      if (activeType === "torusKnot") {
        const geo = new THREE.TorusKnotGeometry(1.2, 0.35, 128, 32, 2, 3);
        const mat = new THREE.MeshPhysicalMaterial({
          color: threeColor,
          roughness: 0.2,
          metalness: 0.8,
          clearcoat: 0.8,
          wireframe: isWireframe,
        });
        activeMesh = new THREE.Mesh(geo, mat);
        disposables = { geometry: geo, material: mat };
      } else if (activeType === "particles") {
        const count = 1800;
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
          const u = Math.random();
          const v = Math.random();
          const theta = u * 2.0 * Math.PI;
          const phi = Math.acos(2.0 * v - 1.0);
          const r = Math.cbrt(Math.random()) * 1.6;
          const sinPhi = Math.sin(phi);

          positions[i * 3] = r * sinPhi * Math.cos(theta);
          positions[i * 3 + 1] = r * sinPhi * Math.sin(theta);
          positions[i * 3 + 2] = r * Math.cos(phi);

          colors[i * 3] = threeColor.r * (0.6 + Math.random() * 0.4);
          colors[i * 3 + 1] = threeColor.g * (0.6 + Math.random() * 0.4);
          colors[i * 3 + 2] = threeColor.b * (0.6 + Math.random() * 0.4);
        }

        geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
          size: 0.04,
          vertexColors: true,
          transparent: true,
          opacity: 0.85,
          blending: THREE.AdditiveBlending,
        });
        activeMesh = new THREE.Points(geo, mat);
        disposables = { geometry: geo, material: mat };
      } else if (activeType === "hologram") {
        const group = new THREE.Group();
        const planeGeo = new THREE.PlaneGeometry(3, 3, 24, 24);
        const planeMat = new THREE.MeshBasicMaterial({
          color: threeColor,
          wireframe: true,
          transparent: true,
          opacity: 0.7,
        });
        const plane = new THREE.Mesh(planeGeo, planeMat);
        plane.rotation.x = -Math.PI / 3;
        group.add(plane);

        const sphereGeo = new THREE.IcosahedronGeometry(0.8, 2);
        const sphereMat = new THREE.MeshBasicMaterial({
          color: 0x06b6d4,
          wireframe: true,
          transparent: true,
          opacity: 0.9,
        });
        const sphere = new THREE.Mesh(sphereGeo, sphereMat);
        sphere.position.y = 0.5;
        group.add(sphere);

        activeMesh = group;
        disposables = { geometry: planeGeo, material: [planeMat, sphereMat] };
      } else {
        // cyberSphere
        const geo = new THREE.IcosahedronGeometry(1.4, 4);
        const mat = new THREE.MeshStandardMaterial({
          color: threeColor,
          wireframe: isWireframe,
          roughness: 0.3,
          metalness: 0.7,
          flatShading: true,
        });
        activeMesh = new THREE.Mesh(geo, mat);
        disposables = { geometry: geo, material: mat };
      }

      scene.add(activeMesh);
    };

    buildObject();

    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      controls.autoRotateSpeed = 2.0 * speed;
      controls.update();

      if (activeMesh && activeType === "torusKnot") {
        activeMesh.rotation.y += delta * 0.3 * speed;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      controls.dispose();
      if (activeMesh) scene.remove(activeMesh);
      if (disposables.geometry) disposables.geometry.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [activeType, isWireframe, accentColor, speed]);

  return (
    <div className="relative w-full h-full flex flex-col items-center">
      {/* 3D Canvas Viewport */}
      <div
        ref={mountRef}
        className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing relative"
      >
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-zinc-300 backdrop-blur-md z-10 flex items-center gap-1.5 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          WebGL Active • Drag to inspect
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="w-full mt-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
        {/* Geometry Switcher */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-mono text-zinc-400 mr-1">Geometry:</span>
          {(
            [
              { id: "torusKnot", label: "Torus Knot" },
              { id: "particles", label: "Particles" },
              { id: "hologram", label: "Hologram" },
              { id: "cyberSphere", label: "Sphere" },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveType(item.id)}
              className={`px-2.5 py-1 text-xs rounded-lg transition-all ${
                activeType === item.id
                  ? "bg-indigo-600 text-white shadow-sm font-medium"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Controls toggles */}
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={() => setIsWireframe(!isWireframe)}
            className={`px-2.5 py-1 text-xs rounded-lg border transition-all ${
              isWireframe
                ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-300"
                : "bg-white/5 border-white/10 text-zinc-400 hover:text-white"
            }`}
          >
            Wireframe: {isWireframe ? "ON" : "OFF"}
          </button>

          {/* Color Palettes */}
          <div className="flex items-center gap-1.5">
            {[
              { hex: "#6366F1", label: "Indigo" },
              { hex: "#06B6D4", label: "Cyan" },
              { hex: "#A855F7", label: "Violet" },
              { hex: "#10B981", label: "Emerald" },
              { hex: "#F59E0B", label: "Amber" },
            ].map((c) => (
              <button
                key={c.hex}
                onClick={() => setAccentColor(c.hex)}
                className={`w-5 h-5 rounded-full border transition-transform ${
                  accentColor === c.hex
                    ? "scale-125 border-white shadow-sm"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.label}
              />
            ))}
          </div>

          {/* Speed */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-zinc-400">Speed:</span>
            <input
              type="range"
              min="0.2"
              max="3"
              step="0.2"
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              className="w-16 h-1.5 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
