export interface Project {
  id: string;
  title: string;
  category: "Design System" | "3D & WebGL" | "Product Design" | "Mobile App" | "AI Interface";
  description: string;
  longDescription: string;
  year: string;
  role: string;
  client: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  featured: boolean;
  color: string;
  gradient: string;
  link?: string;
  github?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; icon: string; highlight?: boolean }[];
}

export interface LabExperiment {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  shaderType: "particles" | "torusKnot" | "hologram" | "cyberSphere";
  accentColor: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Sasa",
    fullName: "Sasa Nguyen",
    title: "Senior Product Designer & Creative Technologist",
    subtitle: "DS-2026 — Crafting Next-Generation Interfaces, 3D WebGL Experiences & Scalable Design Systems",
    location: "Ho Chi Minh City, VN / Remote Worldwide",
    status: "Available for Selected Q3-Q4 2026 Projects",
    avatar: "/avatar.png",
    bio: "Passionate designer and creative developer bridging high-craft UI/UX with cutting-edge 3D WebGL & Motion engineering. Over 8 years designing intuitive digital products and enterprise design systems used by millions.",
    stats: [
      { label: "Years Experience", value: "8+" },
      { label: "Products Shipped", value: "45+" },
      { label: "Design Awards", value: "14" },
      { label: "User Reach", value: "4.2M+" },
    ],
    socials: {
      figma: "https://figma.com/@sasa",
      github: "https://github.com/sasa",
      dribbble: "https://dribbble.com/sasa",
      linkedin: "https://linkedin.com/in/sasa",
      twitter: "https://twitter.com/sasa_design",
      email: "contact@sasa.design",
    }
  },

  designSystem: {
    name: "DS-2026",
    version: "v4.2.0",
    philosophy: "Precision, Spatial Depth, and Fluid Physics. Built for seamless translation from Figma component architecture to React & WebGL canvas.",
    colorTokens: [
      { name: "Void Black", role: "Surface 00 / Canvas", hex: "#07080D", bgClass: "bg-[#07080D]" },
      { name: "Obsidian Deep", role: "Surface 01 / Card", hex: "#0E111B", bgClass: "bg-[#0E111B]" },
      { name: "Electric Indigo", role: "Primary Accent / Glow", hex: "#6366F1", bgClass: "bg-[#6366F1]" },
      { name: "Cyan Plasma", role: "Secondary / Tech Glow", hex: "#06B6D4", bgClass: "bg-[#06B6D4]" },
      { name: "Neon Violet", role: "Highlight / Motion", hex: "#A855F7", bgClass: "bg-[#A855F7]" },
      { name: "Emerald Signal", role: "Success / Live State", hex: "#10B981", bgClass: "bg-[#10B981]" },
    ],
    typographyScale: [
      { level: "Display XXL", size: "72px / 1.05", weight: "Bold 700", usage: "Hero titles, impact statements" },
      { level: "Heading XL", size: "48px / 1.15", weight: "SemiBold 600", usage: "Section headers, project names" },
      { level: "Heading L", size: "32px / 1.25", weight: "SemiBold 600", usage: "Card titles, subsection headers" },
      { level: "Body Standard", size: "16px / 1.6", weight: "Regular 400", usage: "Narratives, descriptions, content" },
      { level: "Mono Token", size: "13px / 1.4", weight: "Mono 500", usage: "Labels, metadata, code specs" },
    ],
    motionPrinciples: [
      { title: "Inertial Damping", curve: "cubic-bezier(0.16, 1, 0.3, 1)", desc: "Physics-inspired spring responsiveness with zero abrupt stops" },
      { title: "Spatial Depth Z", curve: "perspective: 1200px", desc: "True 3D layer parallax based on pointer cursor position" },
      { title: "Luminescent Focus", curve: "0.4s ease-out glow", desc: "Interactive reactive illumination following user interaction" }
    ]
  },

  projects: [
    {
      id: "aether-spatial-os",
      title: "Aether OS — Spatial Computing UI 2026",
      category: "3D & WebGL",
      year: "2026",
      role: "Lead Product Designer & WebGL Architect",
      client: "Aether Labs / Vision Platform",
      description: "A spatial operating system interface featuring gesture physics, dynamic frosted glass materials, and spatial depth layer management.",
      longDescription: "Aether OS reimagines multi-window spatial computing for web and AR platforms. Designed in Figma with comprehensive DS-2026 design token sync, and implemented with Three.js shaders and Framer Motion spring physics. Achieved 60fps rendering across desktop and mobile devices.",
      tags: ["Spatial UI", "Three.js", "Figma DS", "GLSL Shaders", "Gestures"],
      metrics: [
        { label: "FPS Performance", value: "60 FPS" },
        { label: "Interaction Latency", value: "<12ms" },
        { label: "Active Beta Users", value: "180K+" }
      ],
      featured: true,
      color: "#6366F1",
      gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
      link: "https://aether-os.example.com",
      github: "https://github.com/sasa/aether-os"
    },
    {
      id: "nexus-enterprise-ds",
      title: "Nexus Multi-Brand Design System",
      category: "Design System",
      year: "2025 - 2026",
      role: "Principal Design Systems Architect",
      client: "Nexus Global Cloud",
      description: "An enterprise design system powering 6 unified platforms, 240+ WCAG AAA compliant components, and automated code token pipelines.",
      longDescription: "Unified multiple fragmented products into a single coherent design language. Built token synchronization between Figma Variables and Tailwind/CSS tokens via GitHub Actions. Reduced front-end delivery cycle time by 42% across 30+ product squads.",
      tags: ["Design System", "Figma Tokens", "Tailwind CSS", "Accessibility", "Governance"],
      metrics: [
        { label: "Component Adoption", value: "98.4%" },
        { label: "Delivery Speed", value: "+42%" },
        { label: "Cross-Brand Themes", value: "6 Brands" }
      ],
      featured: true,
      color: "#06B6D4",
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
      link: "https://nexus-ds.example.com",
      github: "https://github.com/sasa/nexus-ds"
    },
    {
      id: "vortex-generative-audio",
      title: "Vortex 3D — Generative Audio Visualizer",
      category: "3D & WebGL",
      year: "2025",
      role: "Creative Technologist",
      client: "SoundWave Interactive",
      description: "Interactive real-time audio reactive WebGL experience generating morphing volumetric geometries synced to frequencies.",
      longDescription: "Exploration in combining Web Audio API FFT analysis with custom Three.js vertex shaders. Users can modulate sound parameters in real-time, customize particle turbulence, and export 4K geometric audio visual loops.",
      tags: ["Three.js", "Web Audio API", "Vertex Shaders", "Motion", "Canvas 3D"],
      metrics: [
        { label: "FWA of the Day", value: "Winner" },
        { label: "Awwwards Site of Day", value: "Winner" },
        { label: "Audio Latency", value: "8ms" }
      ],
      featured: true,
      color: "#A855F7",
      gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
      link: "https://vortex-audio.example.com"
    },
    {
      id: "chronos-ai-analytics",
      title: "Chronos AI — Predictive Operations Platform",
      category: "Product Design",
      year: "2025",
      role: "Lead UI/UX Designer",
      client: "Chronos Intelligence",
      description: "AI-native dashboard for enterprise time-series forecasting, automated anomaly diagnosis, and natural language analytics querying.",
      longDescription: "Crafted complex information architecture into an effortless cognitive experience. Implemented modular bento-grid layouts, adaptive dark UI, and contextual micro-charts with fluid animated transitions.",
      tags: ["AI UI/UX", "Dashboard", "Bento Grid", "Data Viz", "Next.js"],
      metrics: [
        { label: "Query Resolution", value: "3.8x faster" },
        { label: "Daily Active Users", value: "85K" },
        { label: "NPS Score", value: "+74" }
      ],
      featured: false,
      color: "#10B981",
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      link: "https://chronos-ai.example.com"
    },
    {
      id: "prism-fintech-superapp",
      title: "Prism — Next-Gen Multi-Asset Wealth App",
      category: "Mobile App",
      year: "2024 - 2025",
      role: "Senior Product Designer",
      client: "Prism Financial Corp",
      description: "High-security mobile financial app combining traditional equities, crypto assets, and automated yield algorithms in an ultra-clean UI.",
      longDescription: "End-to-end mobile design system and native UX flows. Engineered delightful tactile haptics, seamless biometric authentication transitions, and interactive asset growth simulator graphs.",
      tags: ["FinTech", "iOS/Android", "Design System", "Micro-interactions", "Motion"],
      metrics: [
        { label: "App Store Rating", value: "4.9 ★" },
        { label: "Assets Tracked", value: "$1.4B+" },
        { label: "Conversion Rate", value: "+31%" }
      ],
      featured: false,
      color: "#F59E0B",
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
      link: "https://prism-app.example.com"
    },
    {
      id: "luminary-brand-experience",
      title: "Luminary — Interactive 3D Brand Journey",
      category: "3D & WebGL",
      year: "2024",
      role: "Creative Developer & 3D Artist",
      client: "Luminary Studio",
      description: "Immersive storytelling website with smooth scroll-driven 3D camera transitions, particle reveals, and custom typography animation.",
      longDescription: "Built with smooth Lenis-style inertial scrolling, Three.js camera rig orchestration, and Framer Motion staggered text reveals. Reached #1 on Behance Interaction category.",
      tags: ["Three.js", "Camera Rig", "Scroll Animation", "Branding", "Creative Web"],
      metrics: [
        { label: "Avg Time on Site", value: "4m 12s" },
        { label: "Bounce Rate", value: "18.2%" },
        { label: "CSSDA Award", value: "Best UI/UX" }
      ],
      featured: false,
      color: "#EC4899",
      gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
      link: "https://luminary-brand.example.com"
    }
  ] as Project[],

  skills: [
    {
      category: "Product & UI/UX Design",
      skills: [
        { name: "Figma & Design Systems", level: 98, icon: "Figma", highlight: true },
        { name: "Spatial & 3D Interface Design", level: 92, icon: "Layers", highlight: true },
        { name: "Prototyping & Micro-interactions", level: 95, icon: "Sparkles", highlight: true },
        { name: "User Research & Usability Testing", level: 88, icon: "Users" },
        { name: "Information Architecture", level: 90, icon: "Grid" },
        { name: "Accessibility (WCAG AAA)", level: 94, icon: "CheckCircle" },
      ]
    },
    {
      category: "Creative Technology & Engineering",
      skills: [
        { name: "Three.js & WebGL / GLSL", level: 90, icon: "Box", highlight: true },
        { name: "Motion & Framer Motion", level: 96, icon: "Activity", highlight: true },
        { name: "React 19 & Next.js 16", level: 94, icon: "Code", highlight: true },
        { name: "TypeScript & Modern JS", level: 92, icon: "Terminal" },
        { name: "Tailwind CSS v4 & Shaders", level: 95, icon: "Palette" },
        { name: "Performance Optimization (60FPS)", level: 91, icon: "Zap" },
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      period: "2024 — Present",
      role: "Lead Creative Technologist & DS Architect",
      company: "Aetherial Labs",
      location: "San Francisco / Remote",
      description: "Leading the core product design and 3D WebGL engineering squad. Standardizing DS-2026 across multi-platform spatial and cloud experiences.",
      achievements: [
        "Architected tokenized design system used by 50+ developers and 15 designers across 4 time zones.",
        "Built core 3D interactive engine yielding 60fps on mobile web with zero bundle bloat.",
        "Mentored junior and mid-level designers in code-driven prototyping and WebGL."
      ],
      skills: ["Design Systems", "Three.js", "Next.js", "Figma", "WebGL", "Motion"]
    },
    {
      period: "2022 — 2024",
      role: "Senior Product Designer",
      company: "Nexus Global Cloud",
      location: "Singapore / Remote",
      description: "Spearheaded enterprise UX transformation for mission-critical cloud infrastructure tools and developer portals.",
      achievements: [
        "Redesigned the flagship analytics console, decreasing task completion time by 35%.",
        "Created an end-to-end Figma token sync pipeline directly targeting production CSS.",
        "Led WCAG AAA compliance audit and remediation across 240+ components."
      ],
      skills: ["Enterprise UX", "Figma Tokens", "Design Tokens", "React", "Data Viz"]
    },
    {
      period: "2020 — 2022",
      role: "UI/UX & Motion Designer",
      company: "Studio Pulse Interactive",
      location: "Ho Chi Minh City",
      description: "Crafted award-winning interactive websites, fintech apps, and brand visual identities for international clients.",
      achievements: [
        "Delivered 18+ client projects with 100% on-time milestone delivery.",
        "Won 4 Awwwards Site of the Day and 3 FWA of the Day recognitions.",
        "Established internal motion design standards and interactive component libraries."
      ],
      skills: ["Motion Design", "UI/UX", "After Effects", "Framer", "Prototyping"]
    }
  ] as ExperienceItem[],

  labExperiments: [
    {
      id: "torus-knot-morph",
      title: "Volumetric Torus Knot Morph",
      category: "WebGL / GLSL",
      date: "Aug 2026",
      description: "Dynamic parametric geometry with real-time curvature deformation and iridescent chromatic aberration.",
      shaderType: "torusKnot",
      accentColor: "#6366F1"
    },
    {
      id: "cyber-particle-sphere",
      title: "Orbital Particle Core",
      category: "Three.js Physics",
      date: "Jul 2026",
      description: "3,000 particle point-cloud responding to cursor velocity with gravity attraction and repulsion field.",
      shaderType: "particles",
      accentColor: "#06B6D4"
    },
    {
      id: "hologram-grid",
      title: "Holographic Matrix Grid",
      category: "Shader Art",
      date: "Jun 2026",
      description: "Procedural wireframe terrain with real-time scanline pulse waves and depth attenuation.",
      shaderType: "hologram",
      accentColor: "#A855F7"
    },
    {
      id: "cyber-sphere-field",
      title: "Hyper-dimensional Orb",
      category: "Raymarching",
      date: "May 2026",
      description: "Smooth continuous noise displacement mapped onto an icosahedron with specular fresnel sheen.",
      shaderType: "cyberSphere",
      accentColor: "#10B981"
    }
  ] as LabExperiment[]
};
