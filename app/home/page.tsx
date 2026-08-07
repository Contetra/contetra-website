import type { Metadata } from "next";
import { FourCapabilities } from "./components/FourCapabilities";
import { WhereWeGetCalled } from "./components/WhereWeGetCalled";
import { Approach } from "./components/Approach";
import { WhyContetra } from "./components/WhyContetra";
import { Outcomes } from "./components/Outcomes";
import { WhoWeWorkWith } from "./components/WhoWeWorkWith";
import { Faq } from "@/components/sections/Faq";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Hero } from "./components/Hero";
import { LogoCarousel } from "@/components/common/logo-carousel";

export const metadata: Metadata = {
  title: "Finance Transformation, ERP, CFO & AI Automation | Contetra",
  description:
    "Improve planning, reporting, controls, ERP performance and business workflows with Contetra's CFO, accounting, ERP and AI automation specialists.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCarousel />
      <FourCapabilities />
      <WhereWeGetCalled />
      <Approach />
      <WhyContetra />
      <Outcomes />
      <WhoWeWorkWith />
      <Faq />
      <ClosingCta />
    </>
  );
}
