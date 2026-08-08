import { agenticAiSubPages } from "@/lib/content";
import { IconMotif } from "@/components/ui/IconMotif";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { primaryCta as bookingCta } from "@/lib/nav";
import { Hero } from "./components/Hero";
import { WhatWeHelp } from "./components/WhatWeHelp";
import { HowWeWork } from "./components/HowWeWork";
import { LogoCarousel } from "@/components/common/logo-carousel";

const SLUG = "finance-reporting-automation";

const page = agenticAiSubPages.find((p) => p.slug === SLUG)!;

export default function FinanceReportingAutomationPage() {
  return (
    <>
      <Hero
        title={page.hero.title}
        paragraphs={page.hero.paragraphs}
        positioningLine={page.hero.positioningLine}
        motif={<IconMotif icon={page.motifIcon} label={page.motifLabel} />}
      />
      <LogoCarousel />
      <WhatWeHelp items={page.whatWeHelp} />
      <HowWeWork steps={page.howWeWork} />
      <ClosingCta
        heading={page.closingCta.heading}
        body={page.closingCta.body}
        primaryCta={{ label: page.closingCta.primaryCta, href: bookingCta.href }}
        secondaryCta={{ label: page.closingCta.secondaryCta, href: page.secondaryCtaHref }}
        form={page.closingCta.form}
      />
    </>
  );
}
