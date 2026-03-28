"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import HorizontalGallery from "@/components/HorizontalGallery";
import AboutSection from "@/components/AboutSection";
import PoliciesSection from "@/components/PoliciesSection";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <main className="relative">
      <CustomCursor />
      <Preloader />
      <Hero />
      <HorizontalGallery />
      <AboutSection />
      <PoliciesSection />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
