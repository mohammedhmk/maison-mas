"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorRing = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const dot = cursorDot.current;
    const ring = cursorRing.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot follows instantly
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animate = () => {
      // Ring follows with lerp for smooth trailing
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      requestAnimationFrame(animate);
    };

    const onMouseEnterInteractive = () => {
      ring.style.width = "60px";
      ring.style.height = "60px";
      ring.style.borderColor = "#D4AF37";
      ring.style.transform = `translate(${ringX - 30}px, ${ringY - 30}px)`;
      dot.style.opacity = "0";
    };

    const onMouseLeaveInteractive = () => {
      ring.style.width = "40px";
      ring.style.height = "40px";
      ring.style.borderColor = "rgba(212, 175, 55, 0.4)";
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      dot.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMouseMove);
    animate();

    // Observe DOM for interactive elements
    const interactiveSelectors = 'a, button, [data-cursor="expand"]';
    const addListeners = () => {
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };

    addListeners();

    // Re-observe on DOM changes
    const observer = new MutationObserver(() => addListeners());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={cursorDot}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          width: "8px",
          height: "8px",
          backgroundColor: "#D4AF37",
          borderRadius: "50%",
          transition: "opacity 0.3s ease",
        }}
      />
      {/* Ring */}
      <div
        ref={cursorRing}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: "40px",
          height: "40px",
          border: "1px solid rgba(212, 175, 55, 0.4)",
          borderRadius: "50%",
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease",
        }}
      />
    </>
  );
}
