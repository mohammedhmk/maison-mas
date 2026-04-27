"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: "🛍️",
    step: "١",
    title: "اختاري عبايتك",
    desc: "تصفّحي مجموعتنا الحصرية واختاري القطعة التي تعكس ذوقكِ الرفيع",
  },
  {
    icon: "📲",
    step: "٢",
    title: "اطلبي عبر الواتساب",
    desc: "اضغطي على زر الطلب، أرسلي مقاسكِ، وسنتولى الباقي بكل اهتمام",
  },
  {
    icon: "🚚",
    step: "٣",
    title: "استلمي مجاناً",
    desc: "نوصل طلبكِ لباب بيتكِ مجاناً خلال ٢–٤ أيام عمل في كل مكان بالمملكة",
  },
];

export default function HowToOrderSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!stepsRef.current) return;

      gsap.fromTo(
        stepsRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.18,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-dark py-20 md:py-28"
      dir="rtl"
    >
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/10 to-transparent" />

      <div className="mx-auto max-w-6xl px-8 md:px-16">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block font-inter text-[10px] uppercase tracking-[0.5em] text-champagne/60">
            خطوات بسيطة
          </span>
          <h2 className="mt-3 font-cinzel text-2xl font-light tracking-wide text-cream md:text-3xl">
            كيف تطلبين؟
          </h2>
        </div>

        {/* Steps */}
        <div
          ref={stepsRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {steps.map((s, i) => (
            <div key={s.step} className="group relative text-center">
              {/* Connector line between steps (hidden on mobile) */}
              {i < steps.length - 1 && (
                <div className="absolute top-10 left-0 right-0 hidden h-px -translate-y-1/2 translate-x-1/2 bg-gradient-to-l from-champagne/20 to-transparent md:block" style={{ width: "calc(100% + 2rem)" }} />
              )}

              {/* Icon circle */}
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-champagne/20 bg-champagne/5 text-3xl transition-all duration-500 group-hover:border-champagne/50 group-hover:bg-champagne/10">
                <span role="img" aria-label={s.title}>{s.icon}</span>
              </div>

              {/* Step number */}
              <span className="mb-2 inline-block font-inter text-[10px] tracking-[0.4em] text-champagne/40">
                الخطوة {s.step}
              </span>

              {/* Title */}
              <h3 className="font-cinzel text-lg tracking-wide text-cream transition-colors group-hover:text-champagne">
                {s.title}
              </h3>

              {/* Description */}
              <p className="mx-auto mt-3 max-w-xs font-inter text-sm font-light leading-relaxed text-cream/50">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
