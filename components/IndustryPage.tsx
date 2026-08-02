import { notFound } from "next/navigation";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { IndustryHero } from "@/components/sections/industries/IndustryHero";
import { IndustryExplorer } from "@/components/sections/industries/IndustryExplorer";
import { IndustryServiceLinks } from "@/components/sections/industries/IndustryServiceLinks";
import { getIndustry, getIndustryCaseStudies } from "@/lib/industries";
import { primaryCta as bookingCta } from "@/lib/nav";

const siteUrl = "https://contetra.com";

interface IndustryPageProps {
  slug: string;
}

export function IndustryPage({ slug }: IndustryPageProps) {
  const config = getIndustry(slug);
  if (!config) notFound();

  const records = getIndustryCaseStudies(config.slug);
  const pagePath = `/industries/${config.slug}`;

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${config.label} Case Studies`,
    description: config.blurb,
    url: `${siteUrl}${pagePath}`,
    provider: {
      "@type": "Organization",
      name: "Contetra Private Limited",
      url: siteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: records.length,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <IndustryHero config={config} records={records} />

      <section className="bg-brand-offwhite py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <IndustryExplorer records={records} />
        </div>
      </section>

      <IndustryServiceLinks />

      <ClosingCta
        heading="See what we've done in your industry"
        body="Discuss your specific situation and we'll share the most relevant case studies and a recommended starting point."
        primaryCta={{ label: "Book a Transformation Consultation", href: bookingCta.href }}
        secondaryCta={{ label: "Browse All Case Studies", href: "/proof/case-studies" }}
      />
    </>
  );
}
