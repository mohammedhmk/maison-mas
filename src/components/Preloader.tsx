"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Prevent scrolling during preload
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setIsDone(true);
      },
    });

    tl.fromTo(
      lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, ease: "power2.inOut" }
    )
      .fromTo(
        logoRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      )
      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        delay: 0.5,
      });
  }, []);

  if (isDone) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-dark"
    >
      {/* Decorative line */}
      <div
        ref={lineRef}
        className="mb-8 h-px w-24 origin-left bg-champagne"
        style={{ transform: "scaleX(0)" }}
      />

      {/* Logo */}
      <div ref={logoRef} className="text-center opacity-0">
        <p className="mb-2 font-inter text-[10px] uppercase tracking-[0.4em] text-champagne/60">
          E s t a b l i s h e d
        </p>
        <h1 className="font-cinzel text-4xl font-light tracking-[0.2em] text-cream md:text-5xl">
          MAISON MAS
        </h1>
        <p className="mt-3 font-inter text-[10px] uppercase tracking-[0.3em] text-champagne/40">
          The Capsule Collection
        </p>
      </div>

      {/* Bottom decorative line */}
      <div className="mt-8 h-px w-12 bg-champagne/20" />
    </div>
  );
}
