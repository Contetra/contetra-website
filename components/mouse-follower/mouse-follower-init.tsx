"use client";

import { useEffect } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import "mouse-follower/dist/mouse-follower.min.css";

export const MouseFollowerInit = () => {



  
  useEffect(() => {
    if (typeof window === "undefined") return;

    MouseFollower.registerGSAP(gsap);

    const cursor = new MouseFollower({
      speed: 0.8,
      skewing: 1,
      stickDelta: 0.2,
      stateDetection: {
        "-pointer": "a, button",
        "-magnetic": ".magnetic",
      },
      ease: 'expo.out',
    });

     document.querySelectorAll(".magnetic").forEach(el => {
      el.addEventListener("mouseenter", () => {
        cursor.addState("-magnetic");
        gsap.to(el, { scale: 1.1, duration: 0.2, ease: "expo.out" });
      });
      el.addEventListener("mouseleave", () => {
        cursor.removeState("-magnetic");
        gsap.to(el, { scale: 1, duration: 0.2, ease: "expo.out" });
      });
    });

    return () => cursor.destroy();
  }, []);

  return null; // It doesn’t render anything visible
};
