import type { Metadata } from "next";
import { ArrowRight, Lightbulb, ThumbsUp, TriangleAlert } from "lucide-react";
import { ClientStoryExplorer } from "@/app/proof/client-stories/components/ClientStoryExplorer";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { clientStories } from "@/lib/client-stories";
import { primaryCta as bookingCta } from "@/lib/nav";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const siteUrl = "https://contetra.com";
const pagePath = "/proof/client-stories";
const title = "Client Stories | Contetra";
const description =
  "Real Contetra client transformations across ERP, FP&A and technical accounting - the challenge before, what we did, and the outcome delivered.";

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
  name: "Contetra Client Stories",
  description,
  url: `${siteUrl}${pagePath}`,
  provider: {
    "@type": "Organization",
    name: "Contetra Private Limited",
    url: siteUrl,
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: clientStories.length,
  },
};

function LegendChip({
  icon: Icon,
  label,
  tone,
}: {
  icon: typeof TriangleAlert;
  label: string;
  tone: "before" | "solution" | "after";
}) {
  const styles = {
    before: "border-amber-200/70 bg-amber-50 text-amber-700",
    solution: "border-brand-blue/15 bg-brand-blue-tint text-brand-blue",
    after: "border-brand-green/25 bg-brand-green-tint text-brand-green",
  }[tone];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${styles}`}
    >
      <Icon className="size-3.5" />
      {label}
    </span>
  );
}

export default function ClientStoriesPage() {
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
              Client Stories
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Real transformations across ERP implementation, FP&amp;A and CFO advisory, and
              technical accounting - each told simply: where the client started, what Contetra
              did, and the outcome they were left with.
            </p>

            <div
              className="mt-6 flex flex-wrap items-center justify-center gap-2"
              role="img"
              aria-label="Before, leads to Solution, leads to After"
            >
              <LegendChip icon={TriangleAlert} label="Before" tone="before" />
              <ArrowRight className="size-4 text-muted-foreground" aria-hidden />
              <LegendChip icon={Lightbulb} label="Solution" tone="solution" />
              <ArrowRight className="size-4 text-muted-foreground" aria-hidden />
              <LegendChip icon={ThumbsUp} label="After" tone="after" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-brand-offwhite pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ClientStoryExplorer />
        </div>
      </section>

      <ClosingCta
        heading="Your business could be the next story"
        body="Tell us where things stand today. We will walk you from the current challenge to a measurable outcome - and share the stories most like your situation."
        primaryCta={{ label: "Book a Transformation Consultation", href: bookingCta.href }}
        secondaryCta={{ label: "Browse All Case Studies", href: "/proof/case-studies" }}
      />
    </>
  );
}
