"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slow zoom on the background image
      gsap.fromTo(
        imageRef.current,
        { scale: 1 },
        {
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Title fade-in from bottom
      gsap.fromTo(
        titleRef.current?.children || [],
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          delay: 2.2, // After preloader
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToCollection = () => {
    const el = document.getElementById("collection");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Background image with zoom */}
      <div ref={imageRef} className="absolute inset-0 scale-100">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("/abayas/abaya-5.jpeg")',
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-dark/75" />
      </div>

      {/* Centered content */}
      <div ref={titleRef} className="relative z-10 text-center px-4">
        {/* Top ornament */}
        <div className="mx-auto mb-6 h-px w-16 bg-champagne/30 opacity-0" />

        <p className="mb-4 font-inter text-xs uppercase tracking-[0.5em] text-champagne/70 opacity-0" dir="rtl">
          Maison MAS تقدّم لكِ
        </p>

        <h2 className="font-cinzel text-5xl font-light leading-tight tracking-wide text-cream md:text-7xl lg:text-8xl opacity-0">
          The Capsule
          <br />
          <span className="italic text-champagne">Collection</span>
        </h2>

        <p className="mt-6 font-inter text-sm font-light tracking-widest text-cream/50 opacity-0" dir="rtl">
          خمس قطع حصرية — لأنكِ تستحقين التميّز
        </p>

        {/* Buyers count badge */}
        <p className="mt-4 font-inter text-xs tracking-wide text-champagne/60 opacity-0" dir="rtl">
          ✦ انضمت أكثر من 120 عميلة لمجموعتنا الحصرية
        </p>

        {/* Bottom ornament */}
        <div className="mx-auto mt-6 h-px w-16 bg-champagne/30 opacity-0" />

        {/* Hero CTA Button */}
        <div className="mt-8 opacity-0">
          <button
            onClick={scrollToCollection}
            className="hero-cta-btn group inline-flex items-center gap-3 border border-champagne/50 px-8 py-4 font-inter text-sm tracking-[0.2em] text-champagne transition-all duration-500 hover:bg-champagne hover:text-dark hover:border-champagne"
            data-cursor="expand"
          >
            اكتشفي المجموعة
            <span className="transition-transform group-hover:translate-x-1">←</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-inter text-[10px] uppercase tracking-[0.3em] text-champagne/40">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 text-champagne/40 animate-subtle-pulse" />
      </div>
    </section>
  );
}
