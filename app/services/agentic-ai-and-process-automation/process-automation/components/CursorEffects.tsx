"use client";

import { useEffect, useRef } from "react";

export function CursorEffects() {
  const dotRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    let x = 0;
    let y = 0;
    let haloX = 0;
    let haloY = 0;
    let raf = 0;

    function animate() {
      haloX += (x - haloX) * 0.15;
      haloY += (y - haloY) * 0.15;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (haloRef.current) haloRef.current.style.transform = `translate3d(${haloX}px, ${haloY}px, 0)`;
      raf = requestAnimationFrame(animate);
    }

    function move(event: PointerEvent) {
      x = event.clientX;
      y = event.clientY;
      document.documentElement.style.setProperty("--spot-x", `${x}px`);
      document.documentElement.style.setProperty("--spot-y", `${y}px`);
      if (trailRef.current) {
        const particle = document.createElement("span");
        particle.className =
          "pointer-events-none fixed z-[80] h-1 w-1 rounded-full bg-cyan-200/50";
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        document.body.appendChild(particle);
        window.setTimeout(() => particle.remove(), 620);
      }
    }

    function hover(event: Event) {
      const target = event.target as HTMLElement;
      const active = Boolean(
        target.closest("a,button,[data-cursor='active'],summary,[role='tab']")
      );
      haloRef.current?.classList.toggle("scale-150", active);
      haloRef.current?.classList.toggle("border-cyan-200/60", active);
    }

    window.addEventListener("pointermove", move);
    window.addEventListener("mouseover", hover);
    raf = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("mouseover", hover);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200 mix-blend-screen shadow-[0_0_14px_rgba(103,232,249,0.9)] lg:block"
      />
      <div
        ref={haloRef}
        className="pointer-events-none fixed left-0 top-0 z-[99] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/25 bg-cyan-300/10 blur-[1px] transition-transform duration-300 lg:block"
      />
      <div ref={trailRef} aria-hidden="true" />
    </>
  );
}
