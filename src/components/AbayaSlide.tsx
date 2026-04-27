"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { type Abaya } from "@/data/abayas";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AbayaSlideProps {
  abaya: Abaya;
  index: number;
}

// ── Countdown Timer (for خبايا الجاكار only) ────────────────────────────
function CountdownTimer() {
  const STORAGE_KEY = "jacquard-timer-reset";
  const DURATION_MS = 24 * 60 * 60 * 1000;

  const [timeLeft, setTimeLeft] = useState({ h: 23, m: 59, s: 59 });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    let endTime: number;

    if (stored) {
      endTime = parseInt(stored, 10);
      if (Date.now() >= endTime) {
        endTime = Date.now() + DURATION_MS;
        localStorage.setItem(STORAGE_KEY, String(endTime));
      }
    } else {
      endTime = Date.now() + DURATION_MS;
      localStorage.setItem(STORAGE_KEY, String(endTime));
    }

    const tick = () => {
      const diff = endTime - Date.now();
      if (diff <= 0) {
        const newEnd = Date.now() + DURATION_MS;
        localStorage.setItem(STORAGE_KEY, String(newEnd));
        setTimeLeft({ h: 23, m: 59, s: 59 });
        return;
      }
      setTimeLeft({
        h: Math.floor(diff / 3_600_000),
        m: Math.floor((diff % 3_600_000) / 60_000),
        s: Math.floor((diff % 60_000) / 1_000),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="mt-8 rounded-sm border border-champagne/20 bg-champagne/5 p-4" dir="rtl">
      <p className="mb-3 font-inter text-[10px] tracking-[0.3em] text-champagne/60">
        ⏳ العرض الحصري ينتهي خلال
      </p>
      <div className="flex items-center gap-2">
        {[
          { label: "ساعة", val: pad(timeLeft.h) },
          { label: "دقيقة", val: pad(timeLeft.m) },
          { label: "ثانية", val: pad(timeLeft.s) },
        ].map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <span className="font-cinzel text-2xl tracking-wide text-champagne">{unit.val}</span>
              <span className="font-inter text-[9px] tracking-wider text-cream/30">{unit.label}</span>
            </div>
            {i < 2 && <span className="mb-3 font-cinzel text-lg text-champagne/40">:</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Image Slider ─────────────────────────────────────────────────────────
interface ImageSliderProps {
  images: string[];
  nameAr: string;
  abayaId: number;
  stockBadge: string;
}

function ImageSlider({ images, nameAr, abayaId, stockBadge }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Touch / swipe support
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const goTo = useCallback(
    (idx: number) => {
      if (isAnimating || idx === current) return;
      setIsAnimating(true);
      setCurrent(idx);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating, current]
  );

  const prev = useCallback(() => {
    goTo((current - 1 + images.length) % images.length);
  }, [current, images.length, goTo]);

  const next = useCallback(() => {
    goTo((current + 1) % images.length);
  }, [current, images.length, goTo]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 40) {
      delta > 0 ? next() : prev();
    }
  };

  // Only render slider controls if there are multiple images
  const hasMultiple = images.length > 1;

  return (
    <div
      className="relative w-full overflow-hidden rounded-sm md:w-[55%]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Images stack (cross-fade) ── */}
      <div className="aspect-[3/4] w-full overflow-hidden">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${nameAr} — صورة ${i + 1}`}
            loading={i === 0 ? "eager" : "lazy"}
            className="absolute inset-0 h-full w-full object-cover object-top"
            style={{
              opacity: i === current ? 1 : 0,
              transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              zIndex: i === current ? 1 : 0,
            }}
          />
        ))}
        {/* Invisible layer to maintain aspect-ratio */}
        <div className="relative h-full w-full" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent pointer-events-none" style={{ zIndex: 2 }} />

      {/* Large number badge */}
      <div className="absolute top-6 left-6 font-cinzel text-7xl font-light text-champagne/10 pointer-events-none" style={{ zIndex: 3 }}>
        {String(abayaId).padStart(2, "0")}
      </div>

      {/* Limited stock badge — always visible */}
      <div className="absolute top-4 right-4 bg-champagne px-3 py-1.5 shadow-lg" style={{ zIndex: 10 }}>
        <span className="font-inter text-[10px] font-semibold tracking-wider text-dark">
          {stockBadge}
        </span>
      </div>

      {/* ── Arrow Buttons — show on hover (desktop) or always (mobile) ── */}
      {hasMultiple && (
        <>
          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="الصورة السابقة"
            className="slider-arrow absolute left-3 top-1/2 -translate-y-1/2"
            style={{
              zIndex: 10,
              opacity: isHovered ? 1 : 0,
              transform: `translateY(-50%) translateX(${isHovered ? "0" : "-6px"})`,
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <span className="flex h-9 w-9 items-center justify-center border border-champagne/50 bg-dark/70 backdrop-blur-sm transition-all duration-200 hover:border-champagne hover:bg-champagne/20">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-champagne stroke-[1.5]">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="الصورة التالية"
            className="slider-arrow absolute right-3 top-1/2 -translate-y-1/2"
            style={{
              zIndex: 10,
              opacity: isHovered ? 1 : 0,
              transform: `translateY(-50%) translateX(${isHovered ? "0" : "6px"})`,
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <span className="flex h-9 w-9 items-center justify-center border border-champagne/50 bg-dark/70 backdrop-blur-sm transition-all duration-200 hover:border-champagne hover:bg-champagne/20">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-champagne stroke-[1.5]">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>

          {/* ── Dots ── */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2"
            style={{ zIndex: 10 }}
          >
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`الصورة ${i + 1}`}
                style={{
                  width: i === current ? "20px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: i === current ? "#D4AF37" : "rgba(212,175,55,0.35)",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Mobile swipe hint — only on first render */}
      {hasMultiple && (
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-none md:hidden"
          style={{ zIndex: 5 }}
        >
          <span className="font-inter text-[9px] tracking-[0.3em] text-champagne/40 uppercase">
            اسحبي للتنقل
          </span>
        </div>
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────
export default function AbayaSlide({ abaya, index }: AbayaSlideProps) {
  const slideRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;
  const isJacquard = abaya.id === 5;

  const whatsappMessage = encodeURIComponent(
    `أهلاً Maison MAS ✨\nأرغب في طلب عباية "${abaya.nameAr}"\nالسعر: ${abaya.price}\nالمقاس المطلوب: ___`
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
    <div ref={slideRef} className="px-6 py-12 md:px-16 md:py-20 lg:px-24 lg:py-24">
      <div
        className={`mx-auto flex max-w-7xl flex-col gap-8 md:gap-16 ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* ── Image Slider ── */}
        <ImageSlider
          images={abaya.images}
          nameAr={abaya.nameAr}
          abayaId={abaya.id}
          stockBadge={abaya.stockBadge}
        />

        {/* ── Text side ── */}
        <div className="flex w-full flex-col justify-center md:w-[45%]">
          <span className="mb-4 font-inter text-xs tracking-[0.4em] text-champagne/40">
            {String(abaya.id).padStart(2, "0")} / 05
          </span>

          <div className="mb-6 h-px w-12 bg-champagne/30" />

          <h3
            className="font-cinzel text-3xl font-light tracking-wide text-cream md:text-4xl lg:text-5xl"
            dir="rtl"
          >
            {abaya.nameAr}
          </h3>

          <p className="mt-2 font-inter text-sm uppercase tracking-widest text-champagne/50">
            {abaya.name}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-px w-6 bg-champagne/30" />
            <span className="font-inter text-xs text-champagne/70" dir="rtl">
              {abaya.fabricAr}
            </span>
          </div>

          <p className="mt-6 max-w-md font-inter text-sm font-light leading-[2] text-cream/60" dir="rtl">
            {abaya.descriptionAr}
          </p>

          <div className="mt-5 flex items-center gap-3" dir="rtl">
            <div className="h-px w-6 bg-champagne/20" />
            <span className="font-inter text-xs tracking-wide text-cream/40">
              المقاسات المتاحة: S — M — L — XL — XXL
            </span>
          </div>

          <div className="mt-8" dir="rtl">
            <span className="font-inter text-[10px] tracking-[0.3em] text-champagne/40">السعر</span>
            <p className="mt-1 font-cinzel text-2xl tracking-wide text-cream">{abaya.price}</p>
          </div>

          {isJacquard && <CountdownTimer />}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="expand"
            className="magnetic-btn group mt-8 inline-flex w-fit items-center gap-3 border border-champagne/30 px-8 py-4 transition-all duration-500 hover:border-champagne hover:bg-champagne/5"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-champagne/70 transition-colors group-hover:fill-champagne">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="font-inter text-sm tracking-wide text-champagne transition-colors group-hover:text-cream">
              اطلبي عبر الواتساب
            </span>
            <ArrowUpRight className="h-4 w-4 text-champagne transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Separator */}
      <div className="mx-auto mt-12 h-px w-24 bg-champagne/10 md:mt-20" />
    </div>
  );
}
