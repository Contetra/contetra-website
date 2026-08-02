"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { approachSteps } from "./content";

export function Approach() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const lineVerticalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      [lineRef.current, lineVerticalRef.current].forEach((line) => {
        if (!line) return;
        if (prefersReducedMotion) {
          gsap.set(line, { scaleX: 1, scaleY: 1 });
          return;
        }
        gsap.fromTo(
          line,
          { scaleX: 0, scaleY: 0 },
          {
            scaleX: 1,
            scaleY: 1,
            duration: 1.1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-semibold text-brand-blue sm:text-4xl">
            Our approach: diagnose, design, implement and sustain
          </h2>
        </ScrollReveal>

        <div className="relative mt-16 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
          <div
            ref={lineVerticalRef}
            className="absolute left-6 top-2 bottom-2 w-0.5 origin-top bg-gradient-to-b from-brand-blue to-brand-green lg:hidden"
            aria-hidden
          />
          <div
            ref={lineRef}
            className="absolute left-0 right-0 top-6 hidden h-0.5 origin-left bg-gradient-to-r from-brand-blue to-brand-green lg:block"
            aria-hidden
          />

          {approachSteps.map((step, i) => (
            <ScrollReveal
              key={step.body}
              delay={i * 0.25}
              className="relative flex gap-4 pl-0 lg:flex-1 lg:flex-col lg:items-start lg:gap-5 lg:pl-0"
            >
              <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-brand-green bg-white text-brand-blue shadow-sm">
                <step.icon className="size-5" />
              </div>
              <p className="max-w-[15rem] text-sm leading-relaxed text-muted-foreground lg:max-w-[13rem]">
                <span className="mb-1 block font-heading text-xs font-semibold uppercase tracking-wide text-brand-green">
                  Step {i + 1}
                </span>
                {step.body}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
