"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavigationMenuMain } from "./navigation-menu-main";
import { HeaderLogo } from "./components/header-logo";

import { useGsapLenisSync } from "@/utils/useGsapLenisSync";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { LightRaysWrapper } from "@/components/reusable/LightRaysWrapper";
import { useTheme } from "next-themes";

gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
  useGsapLenisSync(); 

  const { resolvedTheme } = useTheme();

  return (
    <nav className=" dark:bg-[#000] bg-white fixed top-0 left-0 right-0 flex justify-between h-[70px] items-center px-[var(--main-padding)] w-full  border-b border-[#0000001A] z-50">
      <LightRaysWrapper  key={resolvedTheme}  count={20} speed={20} />

      <HeaderLogo />
      <div className="flex gap-5">
        <NavigationMenuMain />
        <AnimatedThemeToggler className="cursor-pointer"/>
      </div>

      <ScrollProgress className="top-[70px] h-[2px]" />
    </nav>
  );
};
