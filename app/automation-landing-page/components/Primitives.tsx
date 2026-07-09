"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icons";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  href?: string;
};

export function MagneticButton({
  children,
  variant = "primary",
  className = "",
  onClick,
  href,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  function onPointerMove(event: React.PointerEvent<HTMLElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.16;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.2;
    event.currentTarget.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }

  function reset(event: React.PointerEvent<HTMLElement>) {
    event.currentTarget.style.transform = "translate3d(0, 0, 0)";
  }

  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950";
  const variants = {
    primary:
      "bg-cyan-300 text-slate-950 shadow-[0_0_36px_rgba(34,211,238,0.35)] hover:bg-white",
    secondary:
      "border border-white/15 bg-white/5 text-white hover:border-cyan-300/60 hover:bg-white/10",
  };
  const content = (
    <>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-700 group-hover:translate-x-full" />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        onPointerMove={onPointerMove}
        onPointerLeave={reset}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
}

export function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--spot-x,50%)_var(--spot-y,50%),rgba(34,211,238,0.12),transparent_28rem)]" />
      <div className="relative mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={`mx-auto mb-12 max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.16 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition duration-700 motion-reduce:transition-none ${
        visible
          ? "translate-y-0 opacity-100 blur-0"
          : "translate-y-8 opacity-0 blur-sm"
      }`}
    >
      {children}
    </div>
  );
}

export function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  function move(event: React.PointerEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.transform = `perspective(900px) rotateX(${-y * 4}deg) rotateY(${
      x * 5
    }deg) translateY(-4px)`;
  }

  function leave(event: React.PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.transform =
      "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
  }

  return (
    <div
      onPointerMove={move}
      onPointerLeave={leave}
      className={`group relative rounded-[8px] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur transition duration-300 hover:border-cyan-300/50 hover:bg-white/[0.08] hover:shadow-cyan-950/40 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[8px] bg-[radial-gradient(circle_at_30%_10%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_90%_90%,rgba(168,85,247,0.16),transparent_32%)] opacity-0 transition group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </div>
  );
}

export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let frame = 0;
      const total = 52;
      const timer = window.setInterval(() => {
        frame += 1;
        setDisplay(Math.round((value * frame) / total));
        if (frame >= total) window.clearInterval(timer);
      }, 22);
      observer.disconnect();
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function IconBadge({ icon }: { icon: string }) {
  return (
    <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.15)] transition group-hover:scale-105 group-hover:bg-cyan-300/20">
      <Icon name={icon} />
    </span>
  );
}
