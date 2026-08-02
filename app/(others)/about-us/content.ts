import type { Principle } from "@/lib/content";
import { BadgeCheck, Flag, GraduationCap, Handshake, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

/** Placeholder until a real careers page/URL exists. */
const careersHref = "#";

export const aboutPage = {
  hero: {
    eyebrow: "Our Culture",
    title: "A high-growth company with a people-first culture.",
    body: "We build performance-driven teams on a simple belief: sustainable growth comes from taking care of the people who create it.",
    tagline: {
      line1: "Be Great.",
      line2: "Do Good.",
      highlight: "Have fun.",
    },
    cta: "Careers at Contetra",
    careersHref,
  },

  cultureImages: {
    hero: "/about/culture/culture-hero-collage.jpg",
    strip: [
      "/about/culture/culture-strip-1.jpg",
      "/about/culture/culture-strip-2.jpg",
      "/about/culture/culture-strip-3.jpg",
      "/about/culture/culture-strip-4.jpg",
      "/about/culture/culture-strip-5.jpg",
      "/about/culture/culture-strip-6.jpg",
    ],
  },

  principlesHeading: "Seven principles that run through everything we build.",

  principles: [
    {
      icon: Handshake,
      title: "Win-Win-Win Philosophy",
      body: "Provide our people with sufficient opportunities to pursue a win-win-win philosophy whereby each of the stakeholders - Customer, People and Organization collectively benefit.",
    },
    {
      icon: ShieldCheck,
      title: "Integrity and Ethics",
      body: "Doing the right thing, in an honest, fair, and responsible way.",
    },
    {
      icon: BadgeCheck,
      title: "Deep sense of ownership",
      body: "Act with a deep sense of ownership honoring commitment and delivering results.",
    },
    {
      icon: GraduationCap,
      title: "Continuous learnings",
      body: "We continue to learn, improve, and innovate to provide exceptional value.",
    },
    {
      icon: HeartHandshake,
      title: "Respect for people",
      body: "We value our people, encourage their development, and reward their performance.",
    },
    {
      icon: Flag,
      title: "Lead by example",
      body: "We walk the path ourselves and take others along with us.",
    },
    {
      icon: Sparkles,
      title: "Simplify",
      body: "Above all, we simplify complexities to improve customer experiences and deliver consistent results.",
    },
  ] as Principle[],

  team: {
    eyebrow: "Our Team",
    heading: "Meet the people that make performance possible.",
  },

  joinCta: {
    heading: "Want to join us?",
    body: "We're always looking for people who want to do great work, do good, and have fun doing it.",
    primaryCta: "Careers at Contetra",
  },
};

