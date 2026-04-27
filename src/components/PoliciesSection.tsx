"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Truck, CreditCard, ShieldCheck, Lock, RefreshCw } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Payment method SVG icons
function VisaIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-7 w-auto" aria-label="Visa">
      <rect width="48" height="48" rx="6" fill="#1A1F71" />
      <text x="24" y="32" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial">VISA</text>
    </svg>
  );
}

function MastercardIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-7 w-auto" aria-label="Mastercard">
      <rect width="48" height="48" rx="6" fill="#252525" />
      <circle cx="18" cy="24" r="10" fill="#EB001B" />
      <circle cx="30" cy="24" r="10" fill="#F79E1B" />
      <path d="M24 15.6a10 10 0 0 1 0 16.8 10 10 0 0 1 0-16.8z" fill="#FF5F00" />
    </svg>
  );
}

function MadaIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-7 w-auto" aria-label="Mada">
      <rect width="48" height="48" rx="6" fill="#00A651" />
      <text x="24" y="32" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial">mada</text>
    </svg>
  );
}

function ApplePayIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-7 w-auto" aria-label="Apple Pay">
      <rect width="48" height="48" rx="6" fill="#000000" />
      <text x="24" y="29" textAnchor="middle" fill="white" fontSize="9" fontFamily="Arial">Apple Pay</text>
    </svg>
  );
}

export default function PoliciesSection() {
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
      id="policies"
      ref={sectionRef}
      className="relative bg-dark py-24 md:py-32"
      dir="rtl"
    >
      <div className="mx-auto max-w-6xl px-8 md:px-16">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 h-px w-20 bg-champagne/30" />
          <span className="mb-4 inline-block font-inter text-[10px] uppercase tracking-[0.5em] text-champagne/60">
            سياساتنا
          </span>
          <h2 className="mt-4 font-cinzel text-3xl font-light tracking-wide text-cream md:text-4xl">
            راحتكِ أولويتنا
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-inter text-sm font-light text-cream/40">
            نضع ثقتكِ في المقام الأول — تعرّفي على سياساتنا المصممة لتجربة تسوّق مريحة وآمنة
          </p>
        </div>

        {/* Policy Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Free Shipping - HIGHLIGHTED */}
          <div className="group relative overflow-hidden rounded-sm border border-champagne/30 bg-champagne/5 p-8 transition-all duration-500 hover:border-champagne/50 hover:bg-champagne/10">
            <div className="absolute top-0 right-0 bg-champagne px-3 py-1">
              <span className="font-inter text-[10px] font-medium tracking-wider text-dark">
                مجاناً
              </span>
            </div>
            <Truck className="mb-4 h-8 w-8 text-champagne" />
            <h3 className="font-cinzel text-xl tracking-wide text-cream">
              الشحن مجاني وعلينا
            </h3>
            <p className="mt-3 font-inter text-sm font-light leading-relaxed text-cream/60">
              نوصل طلبكِ لباب بيتكِ في جميع أنحاء المملكة العربية السعودية مجاناً — بدون أي رسوم إضافية.
              لأن تجربتكِ معنا تبدأ من لحظة الطلب وحتى لحظة الاستلام.
            </p>
            <div className="mt-4 h-px w-full bg-gradient-to-l from-champagne/30 to-transparent" />
          </div>

          {/* Bank Transfer - HIGHLIGHTED */}
          <div className="group relative overflow-hidden rounded-sm border border-champagne/30 bg-champagne/5 p-8 transition-all duration-500 hover:border-champagne/50 hover:bg-champagne/10">
            <div className="absolute top-0 right-0 bg-champagne px-3 py-1">
              <span className="font-inter text-[10px] font-medium tracking-wider text-dark">
                آمن
              </span>
            </div>
            <CreditCard className="mb-4 h-8 w-8 text-champagne" />
            <h3 className="font-cinzel text-xl tracking-wide text-cream">
              الدفع عبر التحويل البنكي
            </h3>
            <p className="mt-3 font-inter text-sm font-light leading-relaxed text-cream/60">
              نعتمد التحويل البنكي المباشر كوسيلة دفع آمنة وموثوقة.
              بعد تأكيد طلبكِ عبر الواتساب، سنرسل لكِ بيانات الحساب البنكي لإتمام عملية الدفع بكل سهولة.
            </p>
            <div className="mt-4 h-px w-full bg-gradient-to-l from-champagne/30 to-transparent" />

            {/* Payment icons */}
            <div className="mt-5">
              <p className="mb-3 font-inter text-[10px] tracking-[0.3em] text-champagne/40">
                طرق الدفع المقبولة عند التحويل
              </p>
              <div className="flex items-center gap-3 opacity-80">
                <VisaIcon />
                <MastercardIcon />
                <MadaIcon />
                <ApplePayIcon />
              </div>
            </div>
          </div>

          {/* Exchange Policy - NEW */}
          <div className="group rounded-sm border border-champagne/20 bg-champagne/3 p-8 transition-all duration-500 hover:border-champagne/40 hover:bg-champagne/8">
            <RefreshCw className="mb-4 h-7 w-7 text-champagne/60 transition-colors group-hover:text-champagne" />
            <h3 className="font-cinzel text-lg tracking-wide text-cream">
              سياسة الاستبدال
            </h3>
            <p className="mt-3 font-inter text-sm font-light leading-relaxed text-cream/50">
              في حال وصول المنتج بعيب مصنعي، نلتزم باستبداله خلال 7 أيام من تاريخ الاستلام.
              التواصل عبر الواتساب مع صورة المنتج.
            </p>
          </div>

          {/* Privacy Policy */}
          <div className="group rounded-sm border border-champagne/10 p-8 transition-all duration-500 hover:border-champagne/30 hover:bg-champagne/5">
            <Lock className="mb-4 h-7 w-7 text-champagne/60 transition-colors group-hover:text-champagne" />
            <h3 className="font-cinzel text-lg tracking-wide text-cream">
              سياسة الخصوصية
            </h3>
            <p className="mt-3 font-inter text-sm font-light leading-relaxed text-cream/50">
              نحترم خصوصيتكِ ونلتزم بحماية بياناتكِ الشخصية. جميع المعلومات التي تقدمينها — من رقم الهاتف
              والعنوان وبيانات الدفع — محمية بالكامل ولا يتم مشاركتها مع أي طرف ثالث. نستخدم بياناتكِ فقط
              لمعالجة طلبكِ وتوصيله إليكِ.
            </p>
          </div>

          {/* Secure & Trust */}
          <div className="group rounded-sm border border-champagne/10 p-8 transition-all duration-500 hover:border-champagne/30 hover:bg-champagne/5 md:col-span-2">
            <ShieldCheck className="mb-4 h-7 w-7 text-champagne/60 transition-colors group-hover:text-champagne" />
            <h3 className="font-cinzel text-lg tracking-wide text-cream">
              ضمان الجودة
            </h3>
            <p className="mt-3 font-inter text-sm font-light leading-relaxed text-cream/50">
              كل قطعة تخضع لفحص دقيق قبل الشحن لضمان وصولها إليكِ بأعلى مستوى من الجودة والإتقان.
              رضاكِ هو معيار نجاحنا، ونسعى دائماً لتقديم تجربة تفوق توقعاتكِ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
