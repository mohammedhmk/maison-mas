"use client";

import { useEffect, useState } from "react";

export default function AnnouncementBar() {
  const STORAGE_KEY = "announcement-timer-reset";
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
  const timeString = `${pad(timeLeft.h)}:${pad(timeLeft.m)}:${pad(timeLeft.s)}`;

  const text = `⏳ العرض الحصري ينتهي خلال ${timeString} — اطلبي الآن  ✦  🚚 شحن مجاني لجميع أنحاء المملكة  ✦  ⭐ أكثر من 120 عميلة سعيدة  ✦`;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] flex h-[40px] w-full items-center overflow-hidden bg-[#0a0a0a] text-[#C9A84C]" dir="ltr">
      <div className="flex animate-marquee whitespace-nowrap min-w-max">
        <span className="pl-8 font-inter text-xs tracking-wider">{text}</span>
        <span className="pl-8 font-inter text-xs tracking-wider">{text}</span>
        <span className="pl-8 font-inter text-xs tracking-wider">{text}</span>
        <span className="pl-8 font-inter text-xs tracking-wider">{text}</span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
      `}</style>
    </div>
  );
}
