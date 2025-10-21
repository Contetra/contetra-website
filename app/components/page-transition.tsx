"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";

export const PageTransition = () => {
  const pathname = usePathname();
  const router = useRouter();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const hasMountedRef = useRef(false);
  const isTransitioningRef = useRef(false);
  const outStartedRef = useRef(false);
  const mainRef = useRef<HTMLElement | null>(null);

  const animateIn = (): Promise<void> => {
    return new Promise((resolve) => {
      const panelEl = panelRef.current;
      if (!panelEl) {
        resolve();
        return;
      }
      gsap.set(panelEl, { autoAlpha: 1, scaleY: 0, transformOrigin: "bottom center" });
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
      tl.to(panelEl, { scaleY: 1, duration: 0.5 }, 0).eventCallback("onComplete", () => resolve());
    });
  };

  const animateOut = (): Promise<void> => {
    return new Promise((resolve) => {
      const panelEl = panelRef.current;
      if (!panelEl) {
        resolve();
        return;
      }
      gsap.set(panelEl, { transformOrigin: "top center" });
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
      tl.to(panelEl, { scaleY: 0, duration: 0.45 }, 0).eventCallback("onComplete", () => resolve());
    });
  };

  useEffect(() => {
    const panelEl = panelRef.current;
    if (!panelEl) return;

    // Skip initial page load; only animate out after a routed transition
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    if (!isTransitioningRef.current) return;
    if (outStartedRef.current) return;
    // Ensure overlay is fully covering and new page is visible underneath
    gsap.set(panelEl, { scaleY: 1, transformOrigin: "top center" });
    const newMain = document.querySelector("main") as HTMLElement | null;
    if (newMain) {
      newMain.style.visibility = "visible";
    }
    outStartedRef.current = true;
    // Next frame collapse overlay to reveal the new page
    requestAnimationFrame(() => {
      animateOut().finally(() => {
        isTransitioningRef.current = false;
        outStartedRef.current = false;
        mainRef.current = null;
      });
    });
  }, [pathname]);

  useEffect(() => {
    const onClick = async (e: MouseEvent) => {
      // Only left-click without modifier keys
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore external, hash, downloads, new tab
      const isExternal = /^https?:\/\//i.test(href);
      if (isExternal || href.startsWith("#") || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      // Internal only
      if (!href.startsWith("/")) return;

      // Same path? do nothing
      if (href === pathname) return;

      e.preventDefault();
      if (isTransitioningRef.current) return;
      isTransitioningRef.current = true;
      // Hide current page content while overlay animates in
      mainRef.current = document.querySelector("main") as HTMLElement | null;
      if (mainRef.current) mainRef.current.style.visibility = "hidden";
      await animateIn();
      // navigate after overlay in
      router.push(href);
    };

    const listenerOptions: AddEventListenerOptions = { capture: true };
    document.addEventListener("click", onClick, listenerOptions);
    return () => {
      document.removeEventListener("click", onClick, listenerOptions);
    };
  }, [pathname, router]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <div
        ref={panelRef}
        className="absolute inset-0 z-10 bg-[#babdad] [transform:scaleY(0)]"
      />
    </div>
  );
};


