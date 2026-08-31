"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio-data";
import GridGuides from "@/components/ui/GridGuides";

export default function ProjectCarouselSection() {
  const { projects } = PORTFOLIO_DATA;
  const [activeIdx, setActiveIdx] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <section
      id="projects-carousel"
      className="relative w-full py-20 sm:py-28 paper-texture px-6 sm:px-12 border-t border-black/10 overflow-hidden select-none"
    >
      <GridGuides showCenterH={false} />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-6 border-b border-black/10">
          <div>
            <span className="text-[11px] font-mono text-black/50 uppercase tracking-wider block mb-1">
              Archive 2024 — 2026 // Selected Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial font-normal tracking-tight text-[#121212]">
              Visual Identities & Digital Systems
            </h2>
          </div>

          {/* Custom Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 rounded-full border border-black/20 hover:border-black/50 bg-white/30 hover:bg-white/80 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Previous Slide"
            >
              <ArrowLeft className="w-4 h-4 text-[#121212]" />
            </button>
            <span className="text-xs font-mono text-black/60 px-1">
              0{activeIdx + 1} / 0{projects.length}
            </span>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 rounded-full border border-black/20 hover:border-black/50 bg-white/30 hover:bg-white/80 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Next Slide"
            >
              <ArrowRight className="w-4 h-4 text-[#121212]" />
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIdx(swiper.realIndex)}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 24 },
            1024: { slidesPerView: 2.2, spaceBetween: 32 },
          }}
          keyboard={{ enabled: true }}
          loop={true}
          className="w-full !overflow-visible"
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={project.id} className="h-auto">
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-white/40 hover:bg-white/75 border border-black/10 hover:border-black/30 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Visual Abstract Box */}
                  <div
                    className={`w-full h-48 sm:h-56 rounded-xl mb-6 bg-gradient-to-br ${project.gradient} border border-black/10 flex flex-col items-center justify-center p-6 relative overflow-hidden group-hover:scale-[1.01] transition-transform`}
                  >
                    <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
                    <Sparkles className="w-10 h-10 text-black/40 mb-2 relative z-10 animate-float" />
                    <span className="text-xs font-mono text-black/60 px-3 py-1 rounded-full bg-white/60 backdrop-blur-md border border-black/10 relative z-10">
                      {project.client}
                    </span>
                  </div>

                  {/* Meta Details */}
                  <div className="flex items-center justify-between text-xs font-mono text-black/50 mb-2.5">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-editorial font-medium text-[#121212] mb-3 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] font-sans text-black/70 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Metrics Badge */}
                  <div className="grid grid-cols-2 gap-2 py-3 px-3.5 rounded-xl bg-black/[0.03] border border-black/10 mb-6">
                    {project.metrics.slice(0, 2).map((m, i) => (
                      <div key={i}>
                        <div className="text-[10px] font-mono text-black/50">{m.label}</div>
                        <div className="text-xs font-bold font-mono text-[#121212] mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-[#121212] hover:underline underline-offset-4"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
