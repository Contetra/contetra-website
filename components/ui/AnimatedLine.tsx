"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface AnimatedLineProps {
  axis: "x" | "y";
  className?: string;
}

export function AnimatedLine({ axis, className }: AnimatedLineProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(el, axis === "x" ? { scaleX: 1 } : { scaleY: 1 });
        return;
      }
      gsap.fromTo(
        el,
        axis === "x" ? { scaleX: 0 } : { scaleY: 0 },
        {
          ...(axis === "x" ? { scaleX: 1 } : { scaleY: 1 }),
          duration: 1.1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: el.closest("section") ?? el,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [axis]);

  return (
    <div
      ref={ref}
      className={cn(axis === "x" ? "origin-left" : "origin-top", className)}
      aria-hidden
    />
  );
}
