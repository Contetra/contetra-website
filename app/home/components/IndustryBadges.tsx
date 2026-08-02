"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { Sparkles } from "lucide-react";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { whoWeWorkWith } from "./content";

type OrbitTier = "moon" | "star" | "dust";

interface OrbitItem {
  tier: OrbitTier;
  /** Angle (deg) used below `lg` — biased above/below the text, never beside it. */
  compactAngle: number;
  /** Radius as % of container width/height. Omitted on `base` = hidden on mobile. */
  base?: { rx: number; ry: number };
  sm: { rx: number; ry: number };
  /** Angle + radius used at `lg` and up, for the full 360° scatter. */
  scatterAngle: number;
  scatter: { rx: number; ry: number };
  /** Continuous drift amplitude in px. */
  drift: { x: number; y: number };
  duration: number;
  delay: number;
  sparkle?: boolean;
}

/**
 * Index-aligned with `whoWeWorkWith.segments`. Below `lg` the text column is
 * nearly full-width (no safe horizontal gutter), so `compactAngle` stays
 * within the near-vertical bands (~245-295° / ~65-115°) so chips clear the
 * text purely on the vertical axis. At `lg` the text is reliably capped by
 * `max-w-3xl` inside a wider column, opening real gutters on all sides, so
 * `scatterAngle` spreads across the full circle.
 */
const ORBIT_ITEMS: OrbitItem[] = [
  { tier: "moon", compactAngle: 255, base: { rx: 18, ry: 32 }, sm: { rx: 24, ry: 37 }, scatterAngle: 258, scatter: { rx: 41, ry: 26 }, drift: { x: 5, y: 4 }, duration: 4.6, delay: 0.2 },
  { tier: "star", compactAngle: 105, base: { rx: 20, ry: 32 }, sm: { rx: 26, ry: 37 }, scatterAngle: 12, scatter: { rx: 44, ry: 24 }, drift: { x: 7, y: 3 }, duration: 3.8, delay: 1.1 },
  { tier: "star", compactAngle: 275, base: { rx: 14, ry: 33 }, sm: { rx: 20, ry: 38 }, scatterAngle: 76, scatter: { rx: 42, ry: 30 }, drift: { x: 4, y: 6 }, duration: 4.1, delay: 0.6 },
  { tier: "moon", compactAngle: 85, base: { rx: 16, ry: 32 }, sm: { rx: 22, ry: 37 }, scatterAngle: 130, scatter: { rx: 40, ry: 27 }, drift: { x: 6, y: 4 }, duration: 4.8, delay: 1.6 },
  { tier: "star", compactAngle: 290, base: { rx: 22, ry: 31 }, sm: { rx: 28, ry: 36 }, scatterAngle: 184, scatter: { rx: 45, ry: 23 }, drift: { x: 5, y: 5 }, duration: 3.6, delay: 0.3 },
  { tier: "moon", compactAngle: 70, base: { rx: 20, ry: 32 }, sm: { rx: 26, ry: 37 }, scatterAngle: 216, scatter: { rx: 42, ry: 25 }, drift: { x: 5, y: 4 }, duration: 4.4, delay: 1.9 },
  { tier: "star", compactAngle: 248, base: { rx: 20, ry: 33 }, sm: { rx: 26, ry: 38 }, scatterAngle: 340, scatter: { rx: 43, ry: 28 }, drift: { x: 6, y: 3 }, duration: 3.9, delay: 0.8 },
  { tier: "dust", compactAngle: 262, sm: { rx: 22, ry: 38 }, scatterAngle: 48, scatter: { rx: 46, ry: 32 }, drift: { x: 8, y: 6 }, duration: 3.2, delay: 2.2, sparkle: true },
  { tier: "star", compactAngle: 112, base: { rx: 22, ry: 32 }, sm: { rx: 28, ry: 37 }, scatterAngle: 100, scatter: { rx: 44, ry: 26 }, drift: { x: 5, y: 5 }, duration: 4.0, delay: 1.3 },
  { tier: "dust", compactAngle: 78, sm: { rx: 20, ry: 39 }, scatterAngle: 152, scatter: { rx: 45, ry: 33 }, drift: { x: 7, y: 5 }, duration: 3.0, delay: 0.5, sparkle: true },
  { tier: "star", compactAngle: 265, base: { rx: 16, ry: 33 }, sm: { rx: 22, ry: 38 }, scatterAngle: 300, scatter: { rx: 46, ry: 24 }, drift: { x: 6, y: 4 }, duration: 3.7, delay: 2.0 },
  { tier: "dust", compactAngle: 283, sm: { rx: 18, ry: 38 }, scatterAngle: 200, scatter: { rx: 47, ry: 30 }, drift: { x: 8, y: 4 }, duration: 3.3, delay: 1.5, sparkle: true },
  { tier: "star", compactAngle: 95, base: { rx: 18, ry: 33 }, sm: { rx: 24, ry: 38 }, scatterAngle: 28, scatter: { rx: 41, ry: 32 }, drift: { x: 5, y: 6 }, duration: 4.2, delay: 0.9 },
  { tier: "dust", compactAngle: 97, sm: { rx: 24, ry: 37 }, scatterAngle: 320, scatter: { rx: 44, ry: 34 }, drift: { x: 6, y: 6 }, duration: 3.1, delay: 1.8, sparkle: true },
  { tier: "dust", compactAngle: 253, sm: { rx: 22, ry: 37 }, scatterAngle: 168, scatter: { rx: 47, ry: 27 }, drift: { x: 7, y: 4 }, duration: 3.4, delay: 1.0, sparkle: true },
];

const TIER_STYLES: Record<
  OrbitTier,
  {
    padding: string;
    text: string;
    icon: string;
    glow: string;
    bg: string;
    restOpacity: number;
    dimOpacity: number;
  }
> = {
  moon: {
    padding: "px-3.5 py-1.5 sm:px-5 sm:py-2.5",
    text: "text-xs sm:text-sm",
    icon: "size-3.5 sm:size-4.5",
    glow: "shadow-[0_0_26px_-6px_rgba(66,178,139,0.5)] ring-1 ring-white/70",
    bg: "bg-white",
    restOpacity: 1,
    dimOpacity: 0.8,
  },
  star: {
    padding: "px-3 py-1.5 sm:px-4 sm:py-2",
    text: "text-[11px] sm:text-xs lg:text-sm",
    icon: "size-3 sm:size-4",
    glow: "shadow-[0_0_16px_-5px_rgba(35,25,91,0.4)]",
    bg: "bg-white/90",
    restOpacity: 0.92,
    dimOpacity: 0.52,
  },
  dust: {
    padding: "px-2.5 py-1 sm:px-3 sm:py-1.5",
    text: "text-[10px] sm:text-xs",
    icon: "size-3 sm:size-3.5",
    glow: "shadow-[0_0_10px_-4px_rgba(66,178,139,0.35)]",
    bg: "bg-white/75",
    restOpacity: 0.8,
    dimOpacity: 0.38,
  },
};

function orbit(angleDeg: number, rx: number, ry: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    left: `${(50 + Math.cos(rad) * rx).toFixed(2)}%`,
    top: `${(50 + Math.sin(rad) * ry).toFixed(2)}%`,
  };
}

export function IndustryBadges() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    registerGsap();
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const tweens: gsap.core.Tween[] = [];
    const triggers: ScrollTrigger[] = [];

    const ctx = gsap.context(() => {
      badgeRefs.current.forEach((el) => {
        if (!el) return;
        gsap.set(el, { xPercent: -50, yPercent: -50 });
      });

      if (prefersReducedMotion) return;

      const containerRect = container.getBoundingClientRect();
      const cx = containerRect.width / 2;
      const cy = containerRect.height / 2;

      badgeRefs.current.forEach((el) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dx = (r.left - containerRect.left + r.width / 2 - cx) * 0.82;
        const dy = (r.top - containerRect.top + r.height / 2 - cy) * 0.82;
        gsap.set(el, { x: dx, y: dy, scale: 0.18, opacity: 0 });
      });

      const trigger = ScrollTrigger.create({
        trigger: container,
        start: "top 80%",
        once: true,
        onEnter: () => {
          badgeRefs.current.forEach((el, i) => {
            if (!el) return;
            const item = ORBIT_ITEMS[i];
            const tier = TIER_STYLES[item.tier];

            const entrance = gsap.to(el, {
              x: 0,
              y: 0,
              scale: 1,
              opacity: tier.restOpacity,
              duration: 0.85,
              delay: i * 0.045,
              ease: "back.out(1.6)",
              onComplete: () => {
                tweens.push(
                  gsap.to(el, {
                    x: item.drift.x,
                    y: item.drift.y,
                    duration: item.duration * 1.4,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1,
                  }),
                  gsap.to(el, {
                    opacity: tier.dimOpacity,
                    duration: item.duration,
                    delay: item.delay,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1,
                  })
                );
              },
            });
            tweens.push(entrance);
          });
        },
      });
      triggers.push(trigger);
    }, containerRef);

    return () => {
      tweens.forEach((t) => t.kill());
      triggers.forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0" aria-hidden>
      {/* Cosmic backdrop panel, contained within this section only */}
      <div
        className="absolute inset-2 overflow-hidden rounded-[2.5rem] sm:inset-4"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-tint/70 via-brand-offwhite to-brand-green-tint/50" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 45%, var(--brand-blue), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(1.5px 1.5px at 12% 22%, var(--brand-blue) 60%, transparent 100%), radial-gradient(1.5px 1.5px at 78% 18%, var(--brand-green) 60%, transparent 100%), radial-gradient(1px 1px at 45% 12%, var(--brand-blue) 60%, transparent 100%), radial-gradient(1px 1px at 88% 45%, var(--brand-green) 60%, transparent 100%), radial-gradient(1.5px 1.5px at 8% 62%, var(--brand-blue) 60%, transparent 100%), radial-gradient(1px 1px at 60% 85%, var(--brand-green) 60%, transparent 100%), radial-gradient(1.5px 1.5px at 92% 78%, var(--brand-blue) 60%, transparent 100%), radial-gradient(1px 1px at 30% 92%, var(--brand-green) 60%, transparent 100%), radial-gradient(1px 1px at 25% 45%, var(--brand-blue) 60%, transparent 100%), radial-gradient(1.5px 1.5px at 70% 60%, var(--brand-green) 60%, transparent 100%)",
          }}
        />
      </div>

      {/* Faint orbit rings, desktop/tablet only */}
      <div
        className="animate-orbit-spin absolute top-1/2 left-1/2 hidden h-[42%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-brand-blue/10 sm:block"
        aria-hidden
      />
      <div
        className="animate-orbit-spin absolute top-1/2 left-1/2 hidden h-[62%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-brand-green/10 sm:block"
        style={{ animationDuration: "260s", animationDirection: "reverse" }}
        aria-hidden
      />

      {/* Planet glow behind the centered text */}
      <div
        className="absolute top-1/2 left-1/2 h-[220px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl sm:h-[260px] sm:w-[440px]"
        style={{
          background:
            "radial-gradient(circle, rgba(66,178,139,0.22) 0%, rgba(35,25,91,0.18) 55%, transparent 75%)",
        }}
        aria-hidden
      />

      {whoWeWorkWith.segments.map(({ icon: Icon, label }, i) => {
        const item = ORBIT_ITEMS[i];
        const tier = TIER_STYLES[item.tier];
        const posSm = orbit(item.compactAngle, item.sm.rx, item.sm.ry);
        const posBase = item.base ? orbit(item.compactAngle, item.base.rx, item.base.ry) : posSm;
        const posLg = orbit(item.scatterAngle, item.scatter.rx, item.scatter.ry);

        const style = {
          "--pos-top": posBase.top,
          "--pos-left": posBase.left,
          "--pos-top-sm": posSm.top,
          "--pos-left-sm": posSm.left,
          "--pos-top-lg": posLg.top,
          "--pos-left-lg": posLg.left,
          opacity: tier.restOpacity,
        } as CSSProperties;

        return (
          <span
            key={label}
            ref={(el) => {
              badgeRefs.current[i] = el;
            }}
            style={style}
            className={cn(
              "absolute [left:var(--pos-left)] [top:var(--pos-top)] sm:[left:var(--pos-left-sm)] sm:[top:var(--pos-top-sm)] lg:[left:var(--pos-left-lg)] lg:[top:var(--pos-top-lg)]",
              "items-center gap-1.5 rounded-full font-medium whitespace-nowrap text-brand-blue",
              item.base ? "inline-flex" : "hidden sm:inline-flex",
              tier.padding,
              tier.text,
              tier.glow,
              tier.bg
            )}
          >
            <Icon className={cn(tier.icon, "text-brand-green")} />
            {label}
            {item.sparkle && (
              <Sparkles
                className="absolute -top-1.5 -right-1.5 size-2.5 text-brand-green drop-shadow-sm"
                aria-hidden
              />
            )}
          </span>
        );
      })}
    </div>
  );
}
