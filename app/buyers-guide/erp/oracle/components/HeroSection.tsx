"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#1a1640] py-24 dark:bg-[#0A0A0A] md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(80,160,133,0.35), transparent 45%), radial-gradient(circle at 85% 75%, rgba(80,160,133,0.25), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6 text-center">
        <ScrollReveal y={16}>
          <span className="mb-6 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#86efac]">
            Buyer&apos;s Guide
          </span>
        </ScrollReveal>
        <ScrollReveal y={22} delay={0.1}>
          <h1 className="mx-auto mb-6 max-w-4xl text-[clamp(2.1rem,4.5vw,3.6rem)] font-bold leading-tight text-white">
            Oracle ERP Implementation: A Buyer&apos;s Guide for Growing
            Businesses
          </h1>
        </ScrollReveal>
        <ScrollReveal y={22} delay={0.2}>
          <p className="mx-auto mb-5 max-w-4xl text-[1.18rem] font-semibold leading-[1.7] text-white">
            Choosing the right Oracle ERP implementation partner is the
            decision that shapes your long-term business outcomes.
          </p>
        </ScrollReveal>
        <ScrollReveal y={22} delay={0.3}>
          <p className="mx-auto mb-10 max-w-4xl text-base leading-7 text-white/80 dark:text-[#D1D5DB]">
            Whether you&apos;re evaluating Oracle Fusion Cloud ERP, NetSuite,
            or E-Business Suite, this guide helps finance leaders, business
            owners, COOs, CIOs, and transformation teams evaluate consulting
            and implementation partners with confidence.
          </p>
        </ScrollReveal>
        <ScrollReveal y={22} delay={0.4}>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-sm border border-[#221971] bg-[#221971] px-8 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#181253] dark:border-[#80D7AA] dark:bg-[#80D7AA] dark:text-[#1B145F] dark:hover:bg-[#70c79a]"
          >
            Talk to Our Oracle ERP Consultant
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
