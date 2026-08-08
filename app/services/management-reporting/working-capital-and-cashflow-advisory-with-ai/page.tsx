import { workingCapitalCashflowPage } from "@/app/services/management-reporting/working-capital-and-cashflow-advisory-with-ai/content";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { primaryCta as bookingCta } from "@/lib/nav";
import { Hero } from "./components/Hero";
import { WhatWeHelp } from "./components/WhatWeHelp";
import { HowWeWork } from "./components/HowWeWork";
import { LogoCarousel } from "@/components/common/logo-carousel";

export default function WorkingCapitalCashflowPage() {
  return (
    <>
      <Hero
        title={workingCapitalCashflowPage.hero.title}
        paragraphs={workingCapitalCashflowPage.hero.paragraphs}
        positioningLine={workingCapitalCashflowPage.hero.positioningLine}
      />
      <LogoCarousel />
      <WhatWeHelp items={workingCapitalCashflowPage.whatWeHelp} />
      <HowWeWork steps={workingCapitalCashflowPage.howWeWork} />
      <ClosingCta
        heading={workingCapitalCashflowPage.closingCta.heading}
        body={workingCapitalCashflowPage.closingCta.body}
        primaryCta={{ label: workingCapitalCashflowPage.closingCta.primaryCta, href: bookingCta.href }}
        secondaryCta={{ label: workingCapitalCashflowPage.closingCta.secondaryCta, href: bookingCta.href }}
        form={workingCapitalCashflowPage.closingCta.form}
      />
    </>
  );
}
