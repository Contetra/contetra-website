"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import MouseFollower, { type MouseFollowerOptions } from "mouse-follower";
import "mouse-follower/dist/mouse-follower.min.css";

declare global {
  interface Window {
    __mouseFollower?: MouseFollower;
  }
}

type MouseFollowerProviderProps = {
  children: React.ReactNode;
  speed?: number;
};

export function MouseFollowerProvider({ children, speed }: MouseFollowerProviderProps) {
  const cursorRef = useRef<MouseFollower | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.__mouseFollower) {
      cursorRef.current = window.__mouseFollower;
      return;
    }

    MouseFollower.registerGSAP(gsap);

    const options: MouseFollowerOptions = {
      el: null,
      container: document.body,
      className: "mf-cursor",
      innerClassName: "mf-cursor-inner",
      textClassName: "mf-cursor-text",
      mediaClassName: "mf-cursor-media",
      mediaBoxClassName: "mf-cursor-media-box",
      iconSvgClassName: "mf-svgsprite",
      iconSvgNamePrefix: "-",
      iconSvgSrc: "",
      dataAttr: "cursor",
      hiddenState: "-hidden",
      textState: "-text",
      iconState: "-icon",
      activeState: "-active",
      mediaState: "-media",
      stateDetection: {
        "-pointer": "a,button",
        "-hidden": "iframe",
        "-large": ".enlarge-cursor"
      },
      visible: true,
      visibleOnState: false,
      speed: typeof speed === "number" ? speed : 0.95,
      ease: "expo.out",
      overwrite: true,
      skewing: 0,
      skewingText: 2,
      skewingIcon: 2,
      skewingMedia: 2,
      skewingDelta: 0.001,
      skewingDeltaMax: 0.15,
      stickDelta: 0.15,
      showTimeout: 20,
      hideOnLeave: true,
      hideTimeout: 300,
      hideMediaTimeout: 300,
    };

    const instance = new MouseFollower(options);

    window.__mouseFollower = instance;
    cursorRef.current = instance;

    return () => {
      if (process.env.NODE_ENV === "production") {
        try {
          instance.destroy();
          window.__mouseFollower = undefined;
        } catch {}
      }
    };
  }, [speed]);

  return <>{children}</>;
}
