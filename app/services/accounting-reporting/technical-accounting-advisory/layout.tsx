import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `Technical Accounting Advisory | Ind AS, IFRS, US GAAP | Contetra`,
  description: `Technical accounting advisory for complex transactions and reporting judgements revenue, leases, business combinations and financial instruments.`,
   alternates: {
    canonical: "https://contetra.com/services/accounting-reporting/technical-accounting-advisory",
  },
  openGraph: {
    title: `Technical Accounting Advisory | Ind AS, IFRS, US GAAP | Contetra`,
    description: `Technical accounting advisory for complex transactions and reporting judgements — revenue, leases, business combinations and financial instruments under Ind AS, IFRS and US GAAP.`,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://contetra.com/#organization",
      name: "Contetra Private Limited",
      alternateName: "Contetra",
      url: "https://contetra.com/",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/accounting-reporting/technical-accounting-advisory#service",
      name: "Technical Accounting Advisory",
      url: "https://contetra.com/services/accounting-reporting/technical-accounting-advisory",
      description: "Contetra provides technical accounting advisory for complex accounting, reporting and disclosure matters across Ind AS, IFRS and US GAAP, including revenue recognition, leases, financial instruments, business combinations, consolidation, ESOPs, accounting position papers and audit support.",
      serviceType: [
        "Technical Accounting Advisory",
        "Ind AS Advisory",
        "IFRS Advisory",
        "US GAAP Advisory",
        "Revenue Recognition Advisory",
        "Lease Accounting Advisory",
        "Financial Instruments Accounting",
        "Business Combination Accounting",
        "Consolidation Advisory",
        "ESOP and Share-Based Payment Accounting",
        "Accounting Position Papers",
        "Financial Statement Preparation Support",
        "Audit Support",
      ],
      category: "Accounting and Reporting Advisory",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      audience: [
        {
          "@type": "Audience",
          audienceType: "CFOs",
        },
        {
          "@type": "Audience",
          audienceType: "Finance Heads",
        },
        {
          "@type": "Audience",
          audienceType: "Controllers",
        },
        {
          "@type": "Audience",
          audienceType: "Finance and Accounting Teams",
        },
        {
          "@type": "Audience",
          audienceType: "Growing Businesses",
        },
        {
          "@type": "Audience",
          audienceType: "IPO and Fundraising-Ready Companies",
        },
      ],
      isRelatedTo: {
        "@type": "Service",
        name: "Accounting and Reporting Services",
        url: "https://contetra.com/services/accounting-reporting",
      },
    },
    {
      "@type": [
        "WebPage",
        "FAQPage",
      ],
      "@id": "https://contetra.com/services/accounting-reporting/technical-accounting-advisory#webpage",
      url: "https://contetra.com/services/accounting-reporting/technical-accounting-advisory",
      name: "Technical Accounting Advisory | Ind AS, IFRS, US GAAP | Contetra",
      description: "Technical accounting advisory for complex transactions, reporting judgements and disclosures across Ind AS, IFRS and US GAAP, including accounting memos, financial statements and audit support.",
      inLanguage: "en-IN",
      about: {
        "@id": "https://contetra.com/services/accounting-reporting/technical-accounting-advisory#service",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/accounting-reporting/technical-accounting-advisory#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is technical accounting advisory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Technical accounting advisory helps businesses work through complex accounting, reporting and disclosure matters under frameworks such as Ind AS, IFRS and US GAAP. It supports management with accounting conclusions, memos, audit discussions and financial reporting decisions that go beyond routine bookkeeping.",
          },
        },
        {
          "@type": "Question",
          name: "How is this different from regular accounting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Regular accounting focuses on recording and reporting transactions. Technical accounting advisory deals with the harder judgement calls, interpreting standards, recognition and measurement questions, disclosure requirements, documentation, and building accounting positions that hold up under audit scrutiny.",
          },
        },
        {
          "@type": "Question",
          name: "When does a business need technical accounting advisory support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typically when it runs into complex areas such as revenue recognition, leases, ESOPs, business combinations, financial instruments, consolidation, impairment, deferred tax, related party transactions, or when audit observations raise questions that need a documented, defensible answer.",
          },
        },
        {
          "@type": "Question",
          name: "What are accounting memos, and why do they matter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An accounting memo documents the issue at hand, the relevant standard, management's judgement, the analysis performed, and the conclusion reached along with its supporting basis. Auditors, investors, lenders and boards often expect this kind of clear documentation for any non routine accounting position.",
          },
        },
        {
          "@type": "Question",
          name: "What areas does Contetra cover under technical accounting advisory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Revenue recognition, leases, ESOP accounting, consolidation, financial instruments, impairment, provisions, deferred tax, related party disclosures, business combinations and financial statement presentation, among other complex areas.",
          },
        },
        {
          "@type": "Question",
          name: "Does Contetra support Ind AS, IFRS and US GAAP matters?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This includes accounting memos, financial statements, reporting adjustments, disclosure review, audit support and analysis related to framework conversions, across Ind AS, IFRS and US GAAP.",
          },
        },
        {
          "@type": "Question",
          name: "Can technical accounting advisory help during audit season?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. It can help resolve complex accounting questions ahead of time, prepare supporting documentation, review disclosures, and respond to auditor queries efficiently, which reduces the last minute scramble that often comes with reporting deadlines.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra help with financial statement preparation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This includes accounting schedules, notes to accounts, disclosure checklists, reporting adjustments, audit support documentation and management reporting packs, depending on what the engagement requires.",
          },
        },
        {
          "@type": "Question",
          name: "Is technical accounting advisory useful before fundraising or an IPO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Businesses preparing for fundraising, due diligence or an IPO often need to strengthen accounting policies, close reporting gaps, prepare audit ready documentation and improve the overall reliability of their financial statements well before investors or regulators start asking questions.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra work with our existing auditor or finance team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra typically works alongside the existing finance team, statutory auditor, internal auditor or CFO to prepare technical accounting analysis, documentation and reporting support, rather than working in isolation from the people already involved.",
          },
        },
        {
          "@type": "Question",
          name: "What triggers a need for a fresh accounting policy review?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common triggers include a new standard coming into effect, a significant transaction such as a merger or fundraise, entry into a new business line, a change in auditor, or recurring disagreements with auditors on how a particular item should be treated.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/accounting-reporting/technical-accounting-advisory#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://contetra.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Accounting & Reporting",
          item: "https://contetra.com/services/accounting-reporting",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Technical Accounting Advisory",
          item: "https://contetra.com/services/accounting-reporting/technical-accounting-advisory",
        },
      ],
    },
  ],
};

export default function LayoutServices({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <section className="min-h-screen overflow-x-hidden">
      <JsonLd data={structuredData} />

      {children}

    </section>
  );
}
