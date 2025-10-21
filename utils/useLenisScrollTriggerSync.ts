"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

export function useLenisScrollTriggerSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // 🔄 Whenever Lenis scrolls, tell GSAP to update
    function updateScroll() {
      ScrollTrigger.update();
    }

    lenis.on("scroll", updateScroll);

    return () => {
      lenis.off("scroll", updateScroll);
    };
  }, [lenis]);
}
