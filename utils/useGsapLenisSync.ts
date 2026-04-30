"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

export const useGsapLenisSync = () => {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Update ScrollTrigger when Lenis scrolls
    lenis.on("scroll", ScrollTrigger.update);

    // Sync GSAP’s internal RAF with Lenis’s RAF
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (typeof value === "number") {
          lenis.scrollTo(value);
          return lenis.scroll;
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    const update = () => {
      ScrollTrigger.update();
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      // killAll exists on ScrollTrigger and is safe to call in cleanup
      ScrollTrigger.killAll();
    };
  }, [lenis]);
};
