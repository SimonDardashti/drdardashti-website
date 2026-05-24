"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number; // ms, optional stagger
}

export default function FadeUp({ children, delay = 0 }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Honour prefers-reduced-motion — skip all animation
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Start hidden
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = `opacity 600ms ease-out ${delay}ms, transform 600ms ease-out ${delay}ms`;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect(); // trigger once only
        }
      },
      { threshold: 0.07, rootMargin: "0px 0px -32px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}
