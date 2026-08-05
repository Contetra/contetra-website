"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";
import { navLinks } from "./data";
import { MagneticButton } from "./Primitives";

export function Navbar({ onOpenLead }: { onOpenLead: () => void }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        solid ? "bg-slate-950/82 shadow-2xl shadow-black/30 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Automations by Contetra home">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-cyan-300 text-sm font-black text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.45)]">
            C
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-black text-white sm:text-base">
              Automations by Contetra
            </span>
            <span className="mt-1 inline-flex rounded-full border border-violet-300/25 bg-violet-300/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-100">
              Powered by phinite.ai
            </span>
          </span>
        </a>

        <div className="hidden items-center rounded-full border border-white/10 bg-white/[0.04] p-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <MagneticButton href="#use-cases" variant="secondary" className="py-2.5">
            See demo
          </MagneticButton>
          <MagneticButton onClick={onOpenLead} className="py-2.5">
            Claim free POC
          </MagneticButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-white/10 p-2 text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-[8px] px-3 py-3 text-slate-200 hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <MagneticButton onClick={onOpenLead} className="mt-2 w-full">
              Claim free POC
            </MagneticButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
