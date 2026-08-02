import type { Metadata } from "next";
import { CaseStudyExplorer } from "@/app/proof/case-studies/components/CaseStudyExplorer";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { caseStudies } from "@/lib/case-studies";
import { primaryCta as bookingCta } from "@/lib/nav";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const siteUrl = "https://contetra.com";
const pagePath = "/proof/case-studies";
const title = "Case Studies | Contetra";
const description =
  "Explore Contetra client case studies across ERP, FP&A, technical accounting and training engagements, filtered by service and industry.";

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

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Contetra Client Case Studies",
  description,
  url: `${siteUrl}${pagePath}`,
  provider: {
    "@type": "Organization",
    name: "Contetra Private Limited",
    url: siteUrl,
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: caseStudies.length,
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <section className="bg-white pt-5 pb-6 sm:pb-8">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-brand-blue sm:text-5xl">
              Contetra&apos;s Clients Case Studies
            </h1>

            <p className="mt-3 text-xs text-muted-foreground italic">
              Selected engagements. Excludes clients already featured in the company profile.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-brand-offwhite pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CaseStudyExplorer />
        </div>
      </section>

      <ClosingCta
        heading="See what a comparable engagement could look like for your business"
        body="Discuss your current challenge with a finance transformation specialist and ask for the case studies most relevant to your situation."
        primaryCta={{ label: "Book a Transformation Consultation", href: bookingCta.href }}
        secondaryCta={{ label: "Explore Our Services", href: "/services" }}
      />
    </>
  );
}
