import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Ebooks`,
  description: `Ebooks`,
  keywords: `Ebooks`,
  alternates: {
    canonical: "https://contetra.com/ebooks",
  },
};

export default function LayoutEbooks({
  children,
}: {
  children: React.ReactNode;
}) {
  const ebooksSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["CollectionPage", "WebPage"],
        "@id": "https://contetra.com/ebooks#webpage",
        url: "https://contetra.com/ebooks",
        name: "Finance, ERP and Business Ebooks | Contetra",
        description:
          "Explore Contetra's collection of ebooks, guides, checklists and business resources covering finance transformation, ERP implementation, IFRS, FP&A, profitability, compliance and business growth.",
        breadcrumb: {
          "@id": "https://contetra.com/ebooks#breadcrumb",
        },
        mainEntity: {
          "@id": "https://contetra.com/ebooks#ebook-list",
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://contetra.com/ebooks#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://contetra.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Ebooks",
            item: "https://contetra.com/ebooks",
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": "https://contetra.com/ebooks#ebook-list",
        name: "Contetra Ebooks and Business Resources",
        description:
          "A collection of finance, ERP, accounting, compliance and business management ebooks published by Contetra.",
        numberOfItems: 21,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "CreativeWork",
              name: "Business Insights into IFRS 16",
              url: "https://contetra.com/business-insights-into-ifrs-16",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "CreativeWork",
              name: "Interview Prep Guide for Careers in Financial Reporting",
              url: "https://contetra.com/interview-prep-guide-for-careers-in-financial-reporting",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "CreativeWork",
              name: "Implementable ECL Template for the Non-BFSI Sector",
              url: "https://contetra.com/implementable-ecl-template-for-non-bfsi-sector",
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@type": "CreativeWork",
              name: "Top 20 Questions Your FY 2022-23 Business Plan Must Answer",
              url: "https://contetra.com/top-20-questions-your-fy-22-23-business-plan-must-answer",
            },
          },
          {
            "@type": "ListItem",
            position: 5,
            item: {
              "@type": "CreativeWork",
              name: "Turbocharge Your Finance Function Through Offshore Accounting",
              url: "https://contetra.com/turbocharge-your-finance-function-through-offshore-accounting",
            },
          },
          {
            "@type": "ListItem",
            position: 6,
            item: {
              "@type": "CreativeWork",
              name: "Maximise Profitability, Choose the Right ERP",
              url: "https://contetra.com/maximize-profitability-choose-the-right-erp",
            },
          },
          {
            "@type": "ListItem",
            position: 7,
            item: {
              "@type": "CreativeWork",
              name: "How to Master Business Budgeting",
              url: "https://contetra.com/strategic-business-budget-guide",
            },
          },
          {
            "@type": "ListItem",
            position: 8,
            item: {
              "@type": "CreativeWork",
              name: "Unlocking 200% Revenue Growth: The CHHABI Success Story",
              url: "https://contetra.com/unlocking-200-revenue-growth-the-chhabi-success-story",
            },
          },
          {
            "@type": "ListItem",
            position: 9,
            item: {
              "@type": "CreativeWork",
              name: "Business Insights into IFRS 9",
              url: "https://contetra.com/business-insights-into-ifrs-9",
            },
          },
          {
            "@type": "ListItem",
            position: 10,
            item: {
              "@type": "CreativeWork",
              name: "MSME Collection Advantage: New Amendment Explained",
              url: "https://contetra.com/msme-collection-advantage-new-amendment-explained",
            },
          },
          {
            "@type": "ListItem",
            position: 11,
            item: {
              "@type": "CreativeWork",
              name: "Year-End Closure Checklist for Business Owners",
              url: "https://contetra.com/year-end-closure-checklist-for-business-owners",
            },
          },
          {
            "@type": "ListItem",
            position: 12,
            item: {
              "@type": "CreativeWork",
              name: "Business Growth and Compliance",
              url: "https://contetra.com/business-growth-compliance",
            },
          },
          {
            "@type": "ListItem",
            position: 13,
            item: {
              "@type": "CreativeWork",
              name: "ERP Success: The Essential Blueprint",
              url: "https://contetra.com/erp-implementation-unveiled",
            },
          },
          {
            "@type": "ListItem",
            position: 14,
            item: {
              "@type": "CreativeWork",
              name: "ROI-Driven Trainings with Contetra",
              url: "https://contetra.com/roi-driven-trainings-with-contetra",
            },
          },
          {
            "@type": "ListItem",
            position: 15,
            item: {
              "@type": "CreativeWork",
              name: "How to Optimise Your Customers: A Comprehensive Guide to Achieve 10X Growth",
              url: "https://contetra.com/how-to-optimise-your-customers-a-comprehensive-guide-achieve-10x-growth",
            },
          },
          {
            "@type": "ListItem",
            position: 16,
            item: {
              "@type": "CreativeWork",
              name: "8 Actionable Strategies to Improve Profit After Tax",
              url: "https://contetra.com/8-actionable-strategies-to-improve-profit-after-tax-ebook",
            },
          },
          {
            "@type": "ListItem",
            position: 17,
            item: {
              "@type": "CreativeWork",
              name: "The CFO's Guide to Controlling ERP Costs: 6 Strategies to Stay on Budget",
              url: "https://contetra.com/the-cfos-guide-to-controlling-erp-costs6-strategies-to-stay-on-budget-ebook",
            },
          },
          {
            "@type": "ListItem",
            position: 18,
            item: {
              "@type": "CreativeWork",
              name: "Business Insights into Revenue Recognition",
              url: "https://contetra.com/business-insights-into-revenue-recognition",
            },
          },
          {
            "@type": "ListItem",
            position: 19,
            item: {
              "@type": "CreativeWork",
              name: "Period Closure Checklist",
              url: "https://contetra.com/period-closure-checklist",
            },
          },
          {
            "@type": "ListItem",
            position: 20,
            item: {
              "@type": "CreativeWork",
              name: "Revamping Revenue: Unveiling ASC 606 Implications for Acquisition Memo",
              url: "https://contetra.com/revamping-revenue-unveiling-asc-606-implications-on-acquisition-memo",
            },
          },
          {
            "@type": "ListItem",
            position: 21,
            item: {
              "@type": "CreativeWork",
              name: "Your Financial Playbook: FY 2025-26 Edition",
              url: "https://contetra.com/your-financial-playbook-fy-2025-26-edition",
            },
          },
        ],
      },
    ],
  };

  return (
    <section className="min-h-screen">
      <JsonLd data={ebooksSchema} />
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
