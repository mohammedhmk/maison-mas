"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    id: 1,
    name: "نورة الشمري",
    city: "الرياض",
    abaya: "سِحر المواريه",
    rating: 5,
    text: "وصلت العباية أسرع مما توقعت، والقماش فعلاً استثنائي. كل من رأتني سألت من أين اشتريت! تموجات المواريه حقيقية وراقية جداً، شعور بالفخامة من أول لمسة.",
  },
  {
    id: 2,
    name: "ريم القحطاني",
    city: "جدة",
    abaya: "النسيم الزمردي",
    rating: 5,
    text: "كنت مترددة بسبب السعر، لكن لما لبستها فهمت ليش تستاهل. جودة تنافس أكبر الدور العالمية — القماش ناعم ومتنفس وانسيابيته رائعة. الحزام يبرز القوام بشكل جميل.",
  },
  {
    id: 3,
    name: "سارة العتيبي",
    city: "الدمام",
    abaya: "خبايا الجاكار",
    rating: 5,
    text: "البطانة الذهبية داخل خبايا الجاكار — سر جميل فعلاً. الكل اندهش منها في الحفلة ولما تحركت وظهرت البطانة الذهبية، صارت محور الاهتمام. تجربة شراء ممتازة من البداية للنهاية.",
  },
];

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-champagne" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!cardsRef.current) return;

      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.9,
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
      id="reviews"
      ref={sectionRef}
      className="relative bg-dark py-24 md:py-32"
      dir="rtl"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-8 md:px-16">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 h-px w-20 bg-champagne/30" />
          <span className="mb-4 inline-block font-inter text-[10px] uppercase tracking-[0.5em] text-champagne/60">
            آراء عميلاتنا
          </span>
          <h2 className="mt-4 font-cinzel text-3xl font-light tracking-wide text-cream md:text-4xl">
            ماذا قُلن عنّا
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-inter text-sm font-light text-cream/40">
            تجارب حقيقية من عميلاتنا اللواتي اخترن Maison MAS
          </p>
        </div>

        {/* Review Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group relative rounded-sm border border-champagne/15 bg-champagne/3 p-8 transition-all duration-500 hover:border-champagne/40 hover:bg-champagne/8"
            >
              {/* Quote mark */}
              <div className="absolute top-6 left-6 font-cinzel text-5xl font-light leading-none text-champagne/10 select-none">
                "
              </div>

              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Abaya name */}
              <p className="mb-3 font-inter text-[10px] uppercase tracking-[0.35em] text-champagne/50">
                {review.abaya}
              </p>

              {/* Review text */}
              <p className="font-inter text-sm font-light leading-[1.9] text-cream/65">
                {review.text}
              </p>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-gradient-to-l from-champagne/20 to-transparent" />

              {/* Reviewer info */}
              <div className="flex items-center gap-3">
                {/* Avatar circle */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-champagne/30 bg-champagne/10">
                  <span className="font-cinzel text-xs text-champagne">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-inter text-sm font-medium text-cream/80">
                    {review.name}
                  </p>
                  <p className="font-inter text-[10px] tracking-wider text-champagne/40">
                    {review.city}
                  </p>
                </div>
                {/* Verified badge */}
                <div className="mr-auto">
                  <span className="inline-flex items-center gap-1 rounded-full border border-champagne/20 px-2 py-0.5 font-inter text-[9px] tracking-wider text-champagne/50">
                    <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-champagne/50">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    موثّقة
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom ornament */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-champagne/20" />
          <span className="font-inter text-[10px] tracking-[0.4em] text-champagne/30">
            MAISON MAS
          </span>
          <div className="h-px w-12 bg-champagne/20" />
        </div>
      </div>
    </section>
  );
}
