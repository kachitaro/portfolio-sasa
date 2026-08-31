export interface Project {
  id: string;
  title: string;
  category:
    | "Design System"
    | "3D & WebGL"
    | "Product Design"
    | "Mobile App"
    | "AI Interface"
    | "Visual Identity"
    | "Editorial Design";
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
  image?: string;
  link?: string;
  github?: string;
  instagram?: string;
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
    name: "Sa Sa",
    fullName: "Sa Sa Nguyen",
    title: "Multi-disciplinary Designer & UI/UX Specialist",
    subtitle: "Exploring the intersection of culture, emotion, and aesthetics.",
    location: "Ho Chi Minh City, Vietnam",
    status: "Available for Selected Q3-Q4 2026 Projects",
    avatar: "/sasa-avatar.jpg",
    bio: "I'm Sa Sa Nguyen, a multidisciplinary designer exploring the intersection of culture, emotion, and aesthetics. Born in Vietnam and currently based in Ho Chi Minh City, my work focuses on the balance between contrast and consistency. These elements shape how I build visual identities and tell meaningful stories through design.",
    stats: [
      { label: "Years Experience", value: "3+" },
      { label: "Brand Identities", value: "24+" },
      { label: "Design Systems", value: "8" },
      { label: "Community Reach", value: "10K+" },
    ],
    socials: {
      instagram: "https://www.instagram.com/sasa_artdaily/",
      figma: "https://figma.com/@sasa_design",
      github: "https://github.com/sasa",
      dribbble: "https://dribbble.com/sasa",
      linkedin: "https://linkedin.com/in/sasa",
      twitter: "https://twitter.com/sasa",
      email: "linhsa112@gmail.com",
    },
  },

  designSystem: {
    name: "DS-2026",
    version: "v4.2.0",
    philosophy:
      "Consistent, intentional, and thoughtfully structured visual systems connecting typography, spatial layouts, and digital experiences.",
    colorTokens: [
      {
        name: "Void Black",
        role: "Surface 00 / Canvas",
        hex: "#121212",
        bgClass: "bg-[#121212]",
      },
      {
        name: "Concrete Paper",
        role: "Surface 01 / Card",
        hex: "#DEDEDE",
        bgClass: "bg-[#DEDEDE]",
      },
      {
        name: "Architectural Grey",
        role: "Secondary / Grid Line",
        hex: "#888888",
        bgClass: "bg-[#888888]",
      },
      {
        name: "Ghost Shadow",
        role: "Watermark / Parallax",
        hex: "rgba(18, 18, 18, 0.085)",
        bgClass: "bg-black/10",
      },
      {
        name: "Warm Silver",
        role: "Highlight / Surface",
        hex: "#E8E6E2",
        bgClass: "bg-[#E8E6E2]",
      },
      {
        name: "Signal Dark",
        role: "Active State",
        hex: "#000000",
        bgClass: "bg-[#000000]",
      },
    ],
    typographyScale: [
      {
        level: "Display Statement",
        size: "60px / 1.0",
        weight: "BT Absinotte 200",
        usage: "Philosophical statements, impact headlines",
      },
      {
        level: "Hero Keyword",
        size: "370px / 0.85",
        weight: "Serif Condensed",
        usage: "Hero cover title, watermark layers",
      },
      {
        level: "Body Text",
        size: "18px / 1.62",
        weight: "BT Beau Sans 400",
        usage: "Bio narratives, case study descriptions",
      },
      {
        level: "Section Header",
        size: "18px / 1.4",
        weight: "BT Beau Sans 500",
        usage: "Education, Experience, Contact titles",
      },
      {
        level: "Mono Token",
        size: "14px / 1.4",
        weight: "Mono 400",
        usage: "Registration crosshairs (+), grid metrics",
      },
    ],
    motionPrinciples: [
      {
        title: "Inertial Damping",
        curve: "cubic-bezier(0.16, 1, 0.3, 1)",
        desc: "Fluid spring responsiveness mimicking physical paper resistance",
      },
      {
        title: "Spatial Parallax",
        curve: "transform: translate3d",
        desc: "Multi-layered depth parallax between ghost watermarks and focal type",
      },
      {
        title: "Continuous 1px Scrub",
        curve: "Linear 1:1 interpolation",
        desc: "Pixel-accurate scroll scrubber on the bottom metric ruler",
      },
    ],
  },

  projects: [
    {
      id: "softness-of-femininity",
      title: "The Softness of Femininity — Visual Identity Series",
      category: "Visual Identity",
      year: "2025 — 2026",
      role: "Lead Visual Designer & Art Director",
      client: "Sa Sa Nguyen Studio Archive",
      description:
        "An exploration of gentle typographic curves, warm organic grain textures, and evocative cultural storytelling.",
      longDescription:
        "The Softness of Femininity is a multi-disciplinary visual identity project exploring organic forms, delicate contrast, and tactile material textures. Combining editorial serif typography with curated artistic photo compositions to evoke emotion and calmness.",
      tags: [
        "Visual Identity",
        "Editorial",
        "Typography",
        "Art Direction",
        "Print",
      ],
      metrics: [
        { label: "Instagram Reach", value: "14.2K" },
        { label: "Print Edition", value: "Collector" },
        { label: "Art Direction", value: "Sa Sa" },
      ],
      featured: true,
      color: "#121212",
      gradient: "from-stone-400/20 via-zinc-400/10 to-transparent",
      image: "/artworks/work_1.jpg",
      instagram: "https://www.instagram.com/sasa_artdaily/",
    },
    {
      id: "bear-plus-ui-ux",
      title: "Bear Plus Agency — Digital Product Experiences",
      category: "Product Design",
      year: "09/25 — 03/26",
      role: "UI/UX Designer",
      client: "Bear Plus Agency",
      description:
        "Scalable web and mobile design systems for digital brands and enterprise clients.",
      longDescription:
        "Crafting intuitive user interfaces, cohesive design systems, and responsive web experiences. Standardizing component tokens, spacing logic, and interactive prototypes for high-conversion web platforms.",
      tags: ["UI/UX", "Design Systems", "Figma", "Webflow", "Prototyping"],
      metrics: [
        { label: "Role", value: "UI Designer" },
        { label: "Projects Shipped", value: "12+" },
        { label: "Adoption Rate", value: "98%" },
      ],
      featured: true,
      color: "#121212",
      gradient: "from-zinc-400/20 via-neutral-400/10 to-transparent",
      image: "/artworks/work_2.jpg",
      instagram: "https://www.instagram.com/sasa_artdaily/",
    },
    {
      id: "tribe-hospitality-branding",
      title: "Tribe Hospitality — Brand Identity & Packaging",
      category: "Editorial Design",
      year: "02/24 — 04/26",
      role: "Graphic Designer",
      client: "Tribe Hospitality",
      description:
        "Comprehensive hospitality branding, restaurant menus, packaging systems, and spatial brand collateral.",
      longDescription:
        "End-to-end graphic design for premier hospitality dining venues. Developed cohesive menu typography, food & beverage packaging guidelines, and promotional campaign artwork across physical and digital touchpoints.",
      tags: ["Hospitality", "Branding", "Packaging", "Print", "Editorial"],
      metrics: [
        { label: "Role", value: "Graphic Designer" },
        { label: "Tenure", value: "2+ Years" },
        { label: "Venues", value: "6 Concepts" },
      ],
      featured: true,
      color: "#121212",
      gradient: "from-amber-400/15 via-stone-400/10 to-transparent",
      image: "/artworks/work_3.jpg",
      instagram: "https://www.instagram.com/sasa_artdaily/",
    },
    {
      id: "giong-cafe-identity",
      title: "Gióng Cafe — Artisan Coffee Identity & Collateral",
      category: "Visual Identity",
      year: "06/23 — 12/23",
      role: "Graphic Designer",
      client: "Gióng Cafe",
      description:
        "Artisan Vietnamese coffee identity, takeaway packaging, stamp cards, and cultural storytelling.",
      longDescription:
        "Created welcoming, culturally rooted visual identity for an artisan cafe in Ho Chi Minh City. Designed custom illustrated cup sleeves, promotional poster series, and social media visual guidelines.",
      tags: ["Cafe Identity", "Packaging", "Illustration", "Social Media"],
      metrics: [
        { label: "Daily Visitors", value: "800+" },
        { label: "Packaging Sets", value: "10K+" },
        { label: "Brand Recall", value: "+45%" },
      ],
      featured: false,
      color: "#121212",
      gradient: "from-orange-400/15 via-zinc-400/10 to-transparent",
      image: "/artworks/work_4.jpg",
      instagram: "https://www.instagram.com/sasa_artdaily/",
    },
    {
      id: "culinary-editorial-series",
      title: "Cooking During the Holiday — Illustrated Culinary Book",
      category: "Editorial Design",
      year: "2024",
      role: "Illustrator & Layout Designer",
      client: "Personal Publication",
      description:
        "A warm, illustrated editorial recipe zine capturing holiday warmth, cooking rituals, and shared meals.",
      longDescription:
        "Hand-crafted visual narrative celebrating culinary warmth and home cooking. Features custom illustrations, tactile typography layouts, and warm earth-tone palette inspired by Vietnamese home kitchens.",
      tags: ["Editorial", "Illustration", "Zine", "Book Design", "Print"],
      metrics: [
        { label: "Pages", value: "48 Pages" },
        { label: "Illustrations", value: "32 Custom" },
        { label: "Format", value: "Risograph" },
      ],
      featured: false,
      color: "#121212",
      gradient: "from-yellow-400/15 via-stone-400/10 to-transparent",
      image: "/artworks/work_5.jpg",
      instagram: "https://www.instagram.com/sasa_artdaily/",
    },
    {
      id: "design-anthropology-posters",
      title: "Design Anthropology — Experimental Typography Posters",
      category: "Design System",
      year: "2024",
      role: "Multi-disciplinary Designer",
      client: "Design Anthropology School",
      description:
        "Experimental grid systems, cultural semiotics, and brutalist typographic hierarchy explorations.",
      longDescription:
        "Academic and studio research exploring how cultural semiotics and structured grid systems shape visual communication. Designed a series of 12 silk-screen printed posters combining high-contrast serifs with swiss grid rigor.",
      tags: [
        "Typography",
        "Grid Systems",
        "Posters",
        "Research",
        "Silk-screen",
      ],
      metrics: [
        { label: "Exhibited", value: "DAS 2024" },
        { label: "Poster Series", value: "12 Works" },
        { label: "Medium", value: "Silk-screen" },
      ],
      featured: false,
      color: "#121212",
      gradient: "from-zinc-400/20 via-stone-400/10 to-transparent",
      image: "/artworks/work_6.jpg",
      instagram: "https://www.instagram.com/sasa_artdaily/",
    },
  ] as Project[],

  skills: [
    {
      category: "Visual & Editorial Design",
      skills: [
        {
          name: "Brand Visual Systems",
          level: 98,
          icon: "Palette",
          highlight: true,
        },
        {
          name: "Editorial & Typographic Layouts",
          level: 96,
          icon: "Type",
          highlight: true,
        },
        {
          name: "Packaging & Print Production",
          level: 94,
          icon: "Layers",
          highlight: true,
        },
        { name: "Cultural Semiotics & Research", level: 92, icon: "Compass" },
      ],
    },
    {
      category: "UI/UX & Digital Systems",
      skills: [
        {
          name: "Figma Component Architecture",
          level: 98,
          icon: "Figma",
          highlight: true,
        },
        {
          name: "Design Token Pipelines",
          level: 95,
          icon: "Code",
          highlight: true,
        },
        {
          name: "Interactive Web Experiences",
          level: 92,
          icon: "Zap",
          highlight: true,
        },
        { name: "Prototyping & Motion", level: 94, icon: "Sparkles" },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      period: "09/25 — 03/26",
      role: "UI Designer",
      company: "Bear Plus Agency",
      location: "Ho Chi Minh City",
      description:
        "Designing scalable digital user interfaces, interactive component libraries, and responsive web systems for agency clients.",
      achievements: [
        "Delivered 12+ digital client products with high user engagement.",
        "Built standardized Figma component variables syncing to web stylesheets.",
      ],
      skills: ["UI/UX Design", "Figma", "Design Systems", "Webflow"],
    },
    {
      period: "02/24 — 04/26",
      role: "Graphic designer",
      company: "Tribe Hospitality",
      location: "Ho Chi Minh City",
      description:
        "Leading brand identity, dining menu design, food packaging, and marketing collateral across 6 hospitality concepts.",
      achievements: [
        "Overhauled brand visual identity and menu architecture across 6 restaurants.",
        "Designed award-winning seasonal packaging and brand campaigns.",
      ],
      skills: [
        "Brand Identity",
        "Packaging Design",
        "Print & Editorial",
        "Hospitality",
      ],
    },
    {
      period: "06/23 — 12/23",
      role: "Graphic designer",
      company: "Gióng Cafe",
      location: "Ho Chi Minh City",
      description:
        "Created brand visual identity, custom cup packaging, stamp loyalty cards, and social media visual language.",
      achievements: [
        "Established recognizable local cafe identity recognized in coffee lifestyle magazines.",
        "Designed complete packaging suite from bean bags to takeaway cups.",
      ],
      skills: ["Brand Identity", "Illustration", "Packaging", "Social Media"],
    },
  ] as ExperienceItem[],

  education: [
    {
      year: "2024",
      degree: "Multi-disciplinary Designer",
      school: "Design Anthropology School",
    },
    {
      year: "2020",
      degree: "Saigontourist Hospitality College",
      school: "Hotel restaurant management",
    },
  ],

  labExperiments: [
    {
      id: "torus-knot-morph",
      title: "Volumetric Torus Knot Morph",
      category: "WebGL / GLSL",
      date: "2026",
      description:
        "Dynamic parametric geometry with real-time curvature deformation.",
      shaderType: "torusKnot",
      accentColor: "#121212",
    },
    {
      id: "cyber-particle-sphere",
      title: "Orbital Particle Core",
      category: "Three.js Physics",
      date: "2026",
      description: "3,000 particle point-cloud responding to cursor velocity.",
      shaderType: "particles",
      accentColor: "#333333",
    },
  ] as LabExperiment[],
};
