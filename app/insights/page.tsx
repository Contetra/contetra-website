import type { Metadata } from "next";
import { InsightsExplorer } from "@/app/insights/components/InsightsExplorer";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { getAllPosts, getAllCategories, PRIMARY_CATEGORIES } from "@/lib/insights";
import { primaryCta as bookingCta } from "@/lib/nav";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const pagePath = "/insights";
const title = "Insights | Contetra";
const description =
  "Practical perspectives on finance transformation, ERP, technical accounting, FP&A and AI automation from the Contetra team.";

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

interface InsightsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function InsightsPage({ searchParams }: InsightsPageProps) {
  const { category: categoryParam } = await searchParams;
  const posts = getAllPosts();
  // The five curated categories always appear as filter chips (so nav links
  // always resolve to a working filter), unioned with whatever the content
  // actually contains, so new categories introduced via frontmatter show up
  // automatically without a code change.
  const categories = Array.from(new Set([...PRIMARY_CATEGORIES, ...getAllCategories()])).sort();
  const initialCategory =
    categoryParam && categories.includes(categoryParam) ? categoryParam : "all";

  return (
    <>
      <section className="bg-white pt-5 pb-6 sm:pb-8">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-brand-blue sm:text-5xl">
              Insights
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Practical perspectives on finance transformation, ERP, technical accounting, FP&amp;A
              and AI-enabled automation - written by the Contetra team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-brand-offwhite pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <InsightsExplorer posts={posts} categories={categories} initialCategory={initialCategory} />
        </div>
      </section>

      <ClosingCta
        heading="Turn these insights into action for your business"
        body="Discuss how any of these ideas apply to your finance function, ERP programme or reporting challenge."
        primaryCta={{ label: "Book a Transformation Consultation", href: bookingCta.href }}
        secondaryCta={{ label: "Explore Our Services", href: "/services" }}
      />
    </>
  );
}
