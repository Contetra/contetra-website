"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import { useGsapLenisSync } from "@/utils/useGsapLenisSync";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { LightRaysWrapper } from "@/components/reusable/LightRaysWrapper";
import { useTheme } from "next-themes";
import { HeaderLogo } from "./components/header-logo";
import { NavigationMenuMain } from "./navigation-menu-main";
import { NavigationMobile } from "@/components/navigation/navigation-mobile";

gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
  useGsapLenisSync(); 

  const { resolvedTheme } = useTheme();

  return (
    <nav className="dark:bg-[#000] bg-white fixed top-0 left-0 right-0 z-50 flex h-[70px] w-full items-center border-b border-[#0000001A]">
      <LightRaysWrapper
        key={resolvedTheme}
        count={20}
        speed={20}
        className="pointer-events-none absolute inset-0 z-0"
      />

      <div className="relative z-10 flex min-h-0 min-w-0 flex-1 items-center justify-between gap-3 px-5 xl:px-[var(--main-padding)]">
        <div className="min-w-0 shrink-0">
          <HeaderLogo />
        </div>
        <div className="flex shrink-0 flex-nowrap items-center gap-2 xl:gap-5">
          <div className="hidden xl:block">
            <NavigationMenuMain />
          </div>
          <AnimatedThemeToggler className="cursor-pointer shrink-0" />
          <NavigationMobile />
        </div>
      </div>

      <ScrollProgress className="top-[70px] h-[2px]" />
    </nav>
  );
};
