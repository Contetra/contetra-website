import { ClosingCta } from "@/components/sections/ClosingCta";
import { primaryCta as bookingCta } from "@/lib/nav";
import { Hero } from "./components/Hero";
import { WhatWeHelp } from "./components/WhatWeHelp";
import { HowWeWork } from "./components/HowWeWork";
import { LogoCarousel } from "@/components/common/logo-carousel";
import { misReportingDashboardsPage } from "./content";

export default function MisReportingDashboardsPage() {
  return (
    <>
      <Hero
        title={misReportingDashboardsPage.hero.title}
        paragraphs={misReportingDashboardsPage.hero.paragraphs}
        positioningLine={misReportingDashboardsPage.hero.positioningLine}
      />
      <LogoCarousel />
      <WhatWeHelp items={misReportingDashboardsPage.whatWeHelp} />
      <HowWeWork steps={misReportingDashboardsPage.howWeWork} />
      <ClosingCta
        heading={misReportingDashboardsPage.closingCta.heading}
        body={misReportingDashboardsPage.closingCta.body}
        primaryCta={{
          label: misReportingDashboardsPage.closingCta.primaryCta,
          href: bookingCta.href,
        }}
        secondaryCta={{
          label: misReportingDashboardsPage.closingCta.secondaryCta,
          href: bookingCta.href,
        }}
        form={misReportingDashboardsPage.closingCta.form}
      />
    </>
  );
}
