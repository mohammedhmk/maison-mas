"use client";

import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const header = document.getElementById("site-navbar");
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 60) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      id="site-navbar"
      className="fixed top-[40px] left-0 right-0 z-50 transition-all duration-500"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-cinzel text-sm tracking-[0.2em] text-champagne transition-opacity hover:opacity-70"
          aria-label="العودة للأعلى"
        >
          MAISON MAS
        </button>

        {/* Nav links */}
        <nav className="flex items-center gap-6 md:gap-8" dir="rtl">
          <button
            onClick={() => scrollTo("collection")}
            className="font-inter text-[11px] tracking-[0.3em] text-cream/50 uppercase transition-colors hover:text-champagne"
          >
            المجموعة
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="font-inter text-[11px] tracking-[0.3em] text-cream/50 uppercase transition-colors hover:text-champagne"
          >
            من نحن
          </button>
          <button
            onClick={() => scrollTo("policies")}
            className="font-inter text-[11px] tracking-[0.3em] text-cream/50 uppercase transition-colors hover:text-champagne"
          >
            تواصلي
          </button>
        </nav>
      </div>

      {/* Bottom border line */}
      <div className="h-px w-full bg-champagne/5" />

      <style>{`
        #site-navbar {
          background: transparent;
        }
        #site-navbar.scrolled {
          background: rgba(5, 5, 5, 0.85);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(212, 175, 55, 0.08);
        }
      `}</style>
    </header>
  );
}
