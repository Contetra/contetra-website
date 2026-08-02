import type { Metadata } from "next";
import { Hero } from "@/app/services/agentic-ai-automation/components/Hero";
import { WhatCanChange } from "@/app/services/agentic-ai-automation/components/WhatCanChange";
import { FunctionsWeAutomate } from "@/app/services/agentic-ai-automation/components/FunctionsWeAutomate";
import { DesignPrinciples } from "@/app/services/agentic-ai-automation/components/DesignPrinciples";
import { ImplementationSteps } from "@/app/services/agentic-ai-automation/components/ImplementationSteps";
import { TechnologyEnvironment } from "@/app/services/agentic-ai-automation/components/TechnologyEnvironment";
import { GovernanceControls } from "@/app/services/agentic-ai-automation/components/GovernanceControls";
import { FaqSection } from "@/app/services/agentic-ai-automation/components/FaqSection";
import { ExploreSubPages } from "@/app/services/agentic-ai-automation/components/ExploreSubPages";
import { agenticAiService } from "@/app/services/agentic-ai-automation/content";
import { primaryCta as bookingCta } from "@/lib/nav";
import { ClosingCta } from "@/components/sections/ClosingCta";

const siteUrl = "https://contetra.com";
const pagePath = "/services/agentic-ai-automation";
const title = "Agentic AI & Workflow Automation Services | Contetra";
const description =
  "Design and implement governed AI agents and workflow automations across finance, reporting, sales, operations, marketing and project management.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title,
    description,
    url: pagePath,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agentic AI and Business Workflow Automation",
  serviceType: "Agentic AI and Business Workflow Automation",
  provider: {
    "@type": "Organization",
    name: "Contetra Private Limited",
    url: siteUrl,
  },
  url: `${siteUrl}${pagePath}`,
  description,
};

export default function AgenticAiAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero />
      <WhatCanChange />
      <FunctionsWeAutomate />
      <DesignPrinciples />
      <ImplementationSteps />
      <TechnologyEnvironment />
      <GovernanceControls />
      <FaqSection />
      <ExploreSubPages />
      <ClosingCta
        heading={agenticAiService.closingCta.heading}
        body={agenticAiService.closingCta.body}
        primaryCta={{
          label: agenticAiService.closingCta.primaryCta,
          href: bookingCta.href,
        }}
        secondaryCta={{
          label: agenticAiService.closingCta.secondaryCta,
          href: "/proof/case-studies",
        }}
        form={agenticAiService.closingCta.form}
      />
    </>
  );
}
