"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import GridGuides from "@/components/ui/GridGuides";

export default function ProjectCarouselSection() {
  const { projects } = PORTFOLIO_DATA;
  const [activeIdx, setActiveIdx] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <section
      id="projects-carousel"
      className="relative w-screen h-screen min-h-[640px] shrink-0 paper-texture px-8 sm:px-16 py-10 sm:py-12 flex flex-col justify-between select-none overflow-hidden"
    >
      <GridGuides showCenterH={false} />

      <div className="relative z-10 w-full max-w-[1720px] mx-auto flex-1 flex flex-col justify-between pb-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-4 border-b border-black/10">
          <div>
            <div className="text-[11px] font-mono tracking-widest uppercase text-black/50 mb-1">
              SA SA NGUYEN // @SASA_ARTDAILY
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal tracking-[-0.02em] text-[#121212]">
              Selected Visual Identities & Artworks
            </h2>
          </div>

          {/* Navigation Controls */}
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

        {/* Swiper Carousel with Real Instagram Artworks */}
        <div className="my-auto py-4">
          <Swiper
            modules={[Navigation, Pagination, Keyboard, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIdx(swiper.realIndex)}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.8, spaceBetween: 24 },
              1024: { slidesPerView: 2.8, spaceBetween: 32 },
            }}
            keyboard={{ enabled: true }}
            loop={true}
            className="w-full !overflow-visible"
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={project.id} className="h-auto">
                <div className="h-full p-5 rounded-2xl bg-white/40 hover:bg-white/80 border border-black/10 hover:border-black/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    {/* Real Artwork Image Container */}
                    <div className="relative w-full aspect-[4/3] rounded-xl mb-4 overflow-hidden border border-black/10 bg-zinc-300">
                      <Image
                        src={project.image || `/artworks/work_${(idx % 12) + 1}.jpg`}
                        alt={project.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 280px, 380px"
                      />
                      <span className="absolute bottom-2 left-2 text-[10px] font-mono text-black/80 px-2 py-0.5 rounded-full bg-white/80 backdrop-blur-md border border-black/10">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-black/50 mb-1.5">
                      <span>{project.client}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-xl font-editorial font-medium text-[#121212] mb-2 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs font-sans text-black/70 leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Card Footer Link to Instagram */}
                  <div className="flex items-center justify-between pt-3 border-t border-black/10 text-xs font-mono">
                    <span className="text-black/50">{project.role}</span>
                    <a
                      href={project.instagram || "https://www.instagram.com/sasa_artdaily/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#121212] hover:underline underline-offset-4"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                      <span>Instagram</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Statement */}
        <div className="flex items-center justify-between pt-3 border-t border-black/10 text-xs font-mono text-black/50">
          <span>Instagram: @sasa_artdaily</span>
          <span>Graphic Design • Branding • UI/UX</span>
        </div>
      </div>
    </section>
  );
}
