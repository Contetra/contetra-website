"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { orbitWords } from "./content";

interface OrbitConfig {
  word: string;
  rxFactor: number;
  ryFactor: number;
  tiltDeg: number;
  duration: number;
  startAngle: number;
  clockwise: boolean;
}

/**
 * rxFactor/ryFactor pairs and tilt angles are hand-picked (not derived) so the eight
 * orbits sit at different sizes/tilts and their paths visibly cross, like real satellites.
 * tiltDeg spans the full -90..90 range (including near-vertical) so some orbits read as
 * near edge-on / upside-down relative to the others, rather than all leaning the same way.
 */
const ORBITS: OrbitConfig[] = [
  { rxFactor: 1.0, ryFactor: 0.34, tiltDeg: -85, duration: 13, startAngle: 10, clockwise: true },
  { rxFactor: 0.82, ryFactor: 0.5, tiltDeg: 62, duration: 9, startAngle: 70, clockwise: false },
  { rxFactor: 1.15, ryFactor: 0.4, tiltDeg: -35, duration: 16, startAngle: 140, clockwise: true },
  { rxFactor: 0.68, ryFactor: 0.65, tiltDeg: 88, duration: 8, startAngle: 200, clockwise: false },
  { rxFactor: 1.05, ryFactor: 0.28, tiltDeg: 8, duration: 14, startAngle: 250, clockwise: true },
  { rxFactor: 0.9, ryFactor: 0.55, tiltDeg: -60, duration: 11, startAngle: 300, clockwise: false },
  { rxFactor: 1.22, ryFactor: 0.46, tiltDeg: 30, duration: 15, startAngle: 40, clockwise: true },
  { rxFactor: 0.75, ryFactor: 0.4, tiltDeg: -10, duration: 10, startAngle: 320, clockwise: false },
].map((orbit, i) => ({ ...orbit, word: orbitWords[i] ?? "" }));

const DEG2RAD = Math.PI / 180;

interface MascotOrbitProps {
  src?: string;
  alt?: string;
}

export function MascotOrbit({ src = "/mascot.png", alt = "Contetra mascot" }: MascotOrbitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mascotRef = useRef<HTMLDivElement>(null);
  const radiusRef = useRef({ rx: 0, ry: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const updateRadius = () => {
      const { width, height } = container.getBoundingClientRect();
      radiusRef.current = {
        rx: Math.min(width, height) * 0.44,
        ry: Math.min(width, height) * 0.44,
      };
    };
    updateRadius();

    const resizeObserver = new ResizeObserver(updateRadius);
    resizeObserver.observe(container);

    const ctx = gsap.context(() => {
      if (mascotRef.current) {
        gsap.to(mascotRef.current, {
          y: -14,
          rotate: 3,
          duration: 4.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      if (prefersReducedMotion) {
        ORBITS.forEach((orbit, i) => {
          const el = pillRefs.current[i];
          if (!el) return;
          const base = radiusRef.current;
          const angle = ((i / ORBITS.length) * 360 + 10) * DEG2RAD;
          const tilt = orbit.tiltDeg * DEG2RAD;
          const ex = base.rx * orbit.rxFactor * Math.cos(angle);
          const ey = base.ry * orbit.ryFactor * Math.sin(angle);
          const x = ex * Math.cos(tilt) - ey * Math.sin(tilt);
          const y = ex * Math.sin(tilt) + ey * Math.cos(tilt);
          gsap.set(el, { x, y, scale: 1, opacity: 1, zIndex: 5 });
        });
        return;
      }

      ORBITS.forEach((orbit, i) => {
        const el = pillRefs.current[i];
        if (!el) return;

        const proxy = { angle: orbit.startAngle };
        const direction = orbit.clockwise ? 1 : -1;
        const tilt = orbit.tiltDeg * DEG2RAD;

        gsap.to(proxy, {
          angle: orbit.startAngle + direction * 360,
          duration: orbit.duration,
          ease: "none",
          repeat: -1,
          onUpdate: () => {
            const base = radiusRef.current;
            const rad = proxy.angle * DEG2RAD;
            const ex = base.rx * orbit.rxFactor * Math.cos(rad);
            const ey = base.ry * orbit.ryFactor * Math.sin(rad);
            const x = ex * Math.cos(tilt) - ey * Math.sin(tilt);
            const y = ex * Math.sin(tilt) + ey * Math.cos(tilt);
            const depth = (Math.sin(rad) + 1) / 2;
            const scale = 0.72 + depth * 0.45;
            const opacity = 0.55 + depth * 0.45;
            const zIndex = Math.round(depth * 9) + 1;
            gsap.set(el, { x, y, scale, opacity, zIndex });
          },
        });
      });
    }, container);

    return () => {
      resizeObserver.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[500px]"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(66,178,139,0.28) 0%, rgba(35,25,91,0.22) 55%, transparent 75%)",
        }}
        aria-hidden
      />

      <div
        ref={mascotRef}
        className="absolute left-1/2 top-1/2 z-[5] size-24 -translate-x-1/2 -translate-y-1/2 sm:size-32 md:size-36 lg:size-40"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 160px, (min-width: 640px) 128px, 96px"
          className="object-contain drop-shadow-xl"
          priority
        />
      </div>

      {ORBITS.map((orbit, i) => (
        <div
          key={orbit.word + i}
          ref={(el) => {
            pillRefs.current[i] = el;
          }}
          className="absolute left-1/2 top-1/2 flex h-7 w-[136px] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-brand-green/60 bg-white/95 px-2.5 shadow-md backdrop-blur-sm sm:h-8 sm:w-[152px] md:w-[168px]"
        >
          <span className="size-1.5 shrink-0 rounded-full bg-brand-green" aria-hidden />
          <span className="overflow-hidden text-ellipsis text-[9px] font-semibold tracking-tight text-brand-blue sm:text-[10px] md:text-[10.5px]">
            {orbit.word}
          </span>
        </div>
      ))}
    </div>
  );
}
