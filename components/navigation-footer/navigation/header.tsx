"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavigationMenuMain } from "./navigation-menu-main";
import { HeaderLogo } from "./components/header-logo";

import { useGsapLenisSync } from "@/utils/useGsapLenisSync";

gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
    const progressRef = useRef<HTMLDivElement | null>(null);

  useGsapLenisSync(); // smooth + synced

  useEffect(() => {
    const progressEl = progressRef.current;
    if (!progressEl) return;

    gsap.to(progressEl, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3, // smaller = smoother
      },
    });
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between h-[70px] items-center px-[var(--main-padding)] w-full bg-[#f6f3ee] border-b border-[#0000001A] z-50">
      <HeaderLogo />
      <NavigationMenuMain />

      {/* Progress bar */}
      
      <div
        ref={progressRef}
        className="absolute -bottom-[1.5px] left-0 h-[1.8px] w-0 bg-contetra-blue"
      />

    </nav>
  );
};
