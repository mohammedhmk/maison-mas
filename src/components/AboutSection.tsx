"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Gem, Sparkles, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!contentRef.current) return;

      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-dark py-24 md:py-32"
      dir="rtl"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-champagne to-transparent" />
      </div>

      <div ref={contentRef} className="mx-auto max-w-4xl px-8 text-center md:px-16">
        {/* Top ornament */}
        <div className="mx-auto mb-8 h-px w-20 bg-champagne/30" />

        <span className="mb-4 inline-block font-inter text-[10px] uppercase tracking-[0.5em] text-champagne/60">
          من نحن
        </span>

        <h2 className="mt-4 font-cinzel text-3xl font-light tracking-wide text-cream md:text-5xl">
          MAISON MAS
        </h2>

        <div className="mx-auto mt-2 h-px w-12 bg-champagne/40" />

        <p className="mt-8 font-inter text-base font-light leading-[2] text-cream/70 md:text-lg">
          في <span className="text-champagne font-medium">Maison MAS</span>، لا نصنع عبايات فحسب — بل نصنع هوية.
          نؤمن أن العباية ليست مجرد قطعة ملابس، بل هي انعكاس لذوقكِ الرفيع وشخصيتكِ الفريدة.
        </p>

        <p className="mt-4 font-inter text-base font-light leading-[2] text-cream/60 md:text-lg">
          كل قطعة في مجموعتنا تمر بمراحل دقيقة من التصميم والتنفيذ، باستخدام أرقى الأقمشة المستوردة
          من إيطاليا واليابان وفرنسا، وبأيدي حرفيين يتقنون فن التفصيل.
          نحن نختار لكِ ما يليق بكِ — لأنكِ تستحقين الأفضل.
        </p>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="group flex flex-col items-center gap-4 rounded-sm border border-champagne/10 p-8 transition-all duration-500 hover:border-champagne/30 hover:bg-champagne/5">
            <Gem className="h-6 w-6 text-champagne/60 transition-colors group-hover:text-champagne" />
            <h3 className="font-cinzel text-sm tracking-[0.15em] text-cream">أقمشة فاخرة</h3>
            <p className="font-inter text-xs font-light leading-relaxed text-cream/40">
              نستورد أجود الأقمشة من دور الأزياء العالمية لنضمن لكِ ملمساً استثنائياً وجودة لا تُضاهى
            </p>
          </div>

          <div className="group flex flex-col items-center gap-4 rounded-sm border border-champagne/10 p-8 transition-all duration-500 hover:border-champagne/30 hover:bg-champagne/5">
            <Sparkles className="h-6 w-6 text-champagne/60 transition-colors group-hover:text-champagne" />
            <h3 className="font-cinzel text-sm tracking-[0.15em] text-cream">تصميم حصري</h3>
            <p className="font-inter text-xs font-light leading-relaxed text-cream/40">
              تصاميم محدودة الإصدار تضمن تفردكِ — لن تجدي نفس القطعة في كل مكان
            </p>
          </div>

          <div className="group flex flex-col items-center gap-4 rounded-sm border border-champagne/10 p-8 transition-all duration-500 hover:border-champagne/30 hover:bg-champagne/5">
            <Heart className="h-6 w-6 text-champagne/60 transition-colors group-hover:text-champagne" />
            <h3 className="font-cinzel text-sm tracking-[0.15em] text-cream">عناية بالتفاصيل</h3>
            <p className="font-inter text-xs font-light leading-relaxed text-cream/40">
              كل غرزة، كل طية، كل لمسة — مدروسة بعناية لتمنحكِ إطلالة تنطق بالأناقة
            </p>
          </div>
        </div>

        {/* Bottom ornament */}
        <div className="mx-auto mt-16 h-px w-20 bg-champagne/30" />
      </div>
    </section>
  );
}
