"use client";

import { useEffect, useRef } from "react";
import { type Abaya } from "@/data/abayas";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AbayaSlideProps {
  abaya: Abaya;
  index: number;
}

export default function AbayaSlide({ abaya, index }: AbayaSlideProps) {
  const slideRef = useRef<HTMLDivElement>(null);

  const isEven = index % 2 === 0;

  // Build WhatsApp URL
  const whatsappMessage = encodeURIComponent(
    `أهلاً Maison MAS ✨\nأرغب في طلب عباية "${abaya.nameAr}"\nالسعر: ${abaya.price}`
  );
  const whatsappUrl = `https://wa.me/966535156886?text=${whatsappMessage}`;

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!slideRef.current) return;

      gsap.fromTo(
        slideRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: slideRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, slideRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={slideRef}
      className="px-6 py-12 md:px-16 md:py-20 lg:px-24 lg:py-24"
    >
      <div
        className={`mx-auto flex max-w-7xl flex-col gap-8 md:gap-16 ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Image side */}
        <div className="relative w-full overflow-hidden rounded-sm md:w-[55%]">
          <div className="aspect-[3/4] w-full overflow-hidden">
            <img
              src={abaya.image}
              alt={abaya.nameAr}
              className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
          {/* Number badge */}
          <div className="absolute top-6 left-6 font-cinzel text-7xl font-light text-champagne/10">
            {String(abaya.id).padStart(2, "0")}
          </div>
        </div>

        {/* Text side */}
        <div className="flex w-full flex-col justify-center md:w-[45%]">
          {/* Number */}
          <span className="mb-4 font-inter text-xs tracking-[0.4em] text-champagne/40">
            {String(abaya.id).padStart(2, "0")} / 05
          </span>

          {/* Decorative line */}
          <div className="mb-6 h-px w-12 bg-champagne/30" />

          {/* Arabic Name */}
          <h3
            className="font-cinzel text-3xl font-light tracking-wide text-cream md:text-4xl lg:text-5xl"
            dir="rtl"
          >
            {abaya.nameAr}
          </h3>

          {/* English name */}
          <p className="mt-2 font-inter text-sm uppercase tracking-widest text-champagne/50">
            {abaya.name}
          </p>

          {/* Fabric */}
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px w-6 bg-champagne/30" />
            <span className="font-inter text-xs text-champagne/70" dir="rtl">
              {abaya.fabricAr}
            </span>
          </div>

          {/* Arabic Description */}
          <p
            className="mt-6 max-w-md font-inter text-sm font-light leading-[2] text-cream/60"
            dir="rtl"
          >
            {abaya.descriptionAr}
          </p>

          {/* Price */}
          <div className="mt-8" dir="rtl">
            <span className="font-inter text-[10px] tracking-[0.3em] text-champagne/40">
              السعر
            </span>
            <p className="mt-1 font-cinzel text-2xl tracking-wide text-cream">
              {abaya.price}
            </p>
          </div>

          {/* CTA Button - WhatsApp Order */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="expand"
            className="magnetic-btn group mt-8 inline-flex w-fit items-center gap-3 border border-champagne/30 px-8 py-4 transition-all duration-500 hover:border-champagne hover:bg-champagne/5"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-champagne/70 transition-colors group-hover:fill-champagne"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="font-inter text-sm tracking-wide text-champagne transition-colors group-hover:text-cream">
              اطلبي عبر الواتساب
            </span>
            <ArrowUpRight className="h-4 w-4 text-champagne transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Separator between slides */}
      <div className="mx-auto mt-12 h-px w-24 bg-champagne/10 md:mt-20" />
    </div>
  );
}
