"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
  {
    number: "01",
    title: "PULSE COFFEE HOUSE",
    category: "CAFÉ WEBSITE",
    description: "A polished digital presence focused on menu discovery, location visibility, and a smoother customer experience.",
    tags: ["WEBSITE", "CAFÉ", "UI DESIGN"],
    href: "https://pulse-kohl-mu.vercel.app",
    image: "/work-1.png"
  },
  {
    number: "02",
    title: "SPACE RESTO CAFE",
    category: "RESTAURANT / CAFÉ WEBSITE",
    description: "A modern brand-forward website built to present the venue, menu, and key business information in a premium way.",
    tags: ["WEBSITE", "RESTAURANT", "FRONTEND"],
    href: "https://space-three-mauve.vercel.app",
    image: "/work-2.png"
  },
  {
    number: "03",
    title: "IZAID TECH",
    category: "TECH PORTFOLIO & SERVICES",
    description: "A professional tech portfolio and services showcase built to highlight expertise, projects, and technical capabilities.",
    tags: ["PORTFOLIO", "SERVICES", "WEB DEV"],
    href: "https://izaid.tech",
    image: "/work-3.png"
  }
];

export default function OurWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate project rows on scroll
      gsap.utils.toArray<HTMLElement>('.work-row').forEach((row) => {
        gsap.from(row, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="py-24 md:py-32 bg-[#F9FAFB] text-[#111111] overflow-hidden">
      <div className="site-shell">
        
        {/* HEADER */}
        <div className="mb-20 md:mb-28 max-w-3xl">
          <span className="micro-type font-black text-[#111111]/40 mb-4 block">
            SELECTED WORK
          </span>
          <h2 className="display-type text-[clamp(2.5rem,5vw,5.5rem)] leading-[1.05] uppercase mb-8">
            DIGITAL EXPERIENCES<br/>
            WE&apos;VE <span className="text-primary">BUILT</span>
          </h2>
          <p className="text-[#111111]/60 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
            A selection of websites and digital systems crafted for real businesses — built for clarity, speed, and conversion.
          </p>
        </div>

        {/* PROJECTS LIST */}
        <div className="flex flex-col">
          {projects.map((project) => (
            <div 
              key={project.number} 
              className="work-row group grid grid-cols-1 lg:grid-cols-[120px_1fr_1.2fr] gap-8 lg:gap-16 py-12 lg:py-20 border-t border-[#111111]/10 first:border-t-0"
            >
              
              {/* 1. NUMBER */}
              <div className="hidden lg:block">
                <span className="text-[5rem] lg:text-[7rem] font-black leading-none text-[#111111] tracking-tighter">
                  {project.number}
                </span>
              </div>

              {/* 2. INFO */}
              <div className="flex flex-col justify-center">
                <div className="lg:hidden mb-4">
                  <span className="text-[4rem] font-black leading-none text-[#111111] tracking-tighter">
                    {project.number}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#111111] mb-2">
                  {project.title}
                </h3>
                <span className="text-sm font-bold tracking-widest text-[#111111]/40 uppercase mb-6 block">
                  {project.category}
                </span>
                
                <p className="text-[#111111]/60 text-base md:text-lg font-medium leading-relaxed mb-10 max-w-md">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold tracking-widest text-[#111111]/80 uppercase flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary"></span>
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-black tracking-[0.2em] uppercase text-[#111111] hover:text-primary transition-colors w-fit group/btn"
                >
                  <span className="relative overflow-hidden">
                    <span className="block transition-transform duration-300 group-hover/btn:-translate-y-full">VIEW PROJECT</span>
                    <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover/btn:translate-y-0 text-primary">VIEW PROJECT</span>
                  </span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/btn:translate-x-1">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>

              {/* 3. MOCKUP PREVIEW */}
              <a 
                href={project.href}
                target="_blank"
                rel="noopener noreferrer" 
                className="relative w-full rounded-xl overflow-hidden bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-[#111111]/5 transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] block cursor-pointer mt-6 lg:mt-0"
              >
                {/* Browser Window Header */}
                <div className="h-10 bg-[#F3F4F6] border-b border-[#111111]/5 flex items-center px-4 gap-2 relative z-10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/10"></div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white px-4 py-1 rounded-md border border-[#111111]/5 text-[10px] text-[#111111]/40 font-mono w-1/2 max-w-[200px] justify-center overflow-hidden whitespace-nowrap">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    {project.href.replace('https://', '')}
                  </div>
                </div>
                
                {/* Image container for static thumbnails */}
                <div className="w-full relative aspect-[16/10] overflow-hidden bg-[#F3F4F6]">
                  <Image
                    src={project.image}
                    alt={`${project.title} Preview`}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  {/* Overlay to prevent interaction and add subtle hover effect */}
                  <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/[0.02] transition-colors z-20 pointer-events-none"></div>
                </div>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
