"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { abayas } from "@/data/abayas";
import AbayaSlide from "./AbayaSlide";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="collection" ref={sectionRef} className="relative bg-dark">
      {/* Section header */}
      <div
        ref={headerRef}
        className="px-8 pt-24 pb-8 md:px-16 md:pt-32 md:pb-12 text-center"
      >
        <span className="block font-inter text-[10px] uppercase tracking-[0.4em] text-champagne/40">
          المجموعة الحصرية
        </span>
        <div className="mx-auto mt-3 h-px w-8 bg-champagne/20" />
        <h2 className="mt-4 font-cinzel text-3xl font-light tracking-wide text-cream md:text-4xl">
          The Collection
        </h2>
      </div>

      {/* Vertical free-scroll container */}
      <div className="flex flex-col">
        {abayas.map((abaya, index) => (
          <AbayaSlide key={abaya.id} abaya={abaya} index={index} />
        ))}
      </div>
    </section>
  );
}
