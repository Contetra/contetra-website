import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `Transaction Accounting Advisory | M&A Accounting | Contetra`,
  description: `Transaction accounting advisory from deal structure to post-deal`,
   alternates: {
    canonical: "https://contetra.com/services/accounting-reporting/transaction-accounting-advisory",
  },
  openGraph: {
    title: `From Deal Structure to Post-Deal Reporting | Contetra`,
    description: `Transaction accounting advisory from deal structure to post-deal reporting — purchase price allocation, opening balance sheet and post-deal integration support.`,
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
      "@id": "https://contetra.com/services/accounting-reporting/transaction-accounting-advisory#service",
      name: "Transaction Accounting Advisory",
      url: "https://contetra.com/services/accounting-reporting/transaction-accounting-advisory",
      description: "Contetra provides transaction accounting advisory for acquisitions, disposals, restructurings, carve-outs, financing arrangements and other complex corporate transactions, covering accounting conclusions, purchase price allocation inputs, Day 1 accounting, disclosures and post-deal reporting.",
      serviceType: [
        "Transaction Accounting Advisory",
        "Acquisition Accounting",
        "Business Combination Accounting",
        "Purchase Price Allocation Support",
        "Disposal Accounting",
        "Carve-Out Accounting",
        "Restructuring Accounting",
        "Business Separation Accounting",
        "Day 1 Accounting",
        "Post-Deal Integration",
        "Opening Balance Sheet Preparation",
        "Transaction Reporting Support",
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
          audienceType: "Corporate Finance Teams",
        },
        {
          "@type": "Audience",
          audienceType: "Businesses Undertaking M&A Transactions",
        },
        {
          "@type": "Audience",
          audienceType: "Private Equity and Investor-Backed Companies",
        },
      ],
      isRelatedTo: [
        {
          "@type": "Service",
          name: "Accounting and Reporting Services",
          url: "https://contetra.com/services/accounting-reporting",
        },
        {
          "@type": "Service",
          name: "Financial Due Diligence and Quality of Earnings",
          url: "https://contetra.com/services/accounting-reporting/financial-due-diligence-and-quality-of-earnings",
        },
      ],
    },
    {
      "@type": [
        "WebPage",
        "FAQPage",
      ],
      "@id": "https://contetra.com/services/accounting-reporting/transaction-accounting-advisory#webpage",
      url: "https://contetra.com/services/accounting-reporting/transaction-accounting-advisory",
      name: "Transaction Accounting Advisory | M&A Accounting | Contetra",
      description: "Transaction accounting advisory for acquisitions, disposals, PPA, carve-outs, restructurings, Day 1 accounting and post-deal reporting.",
      inLanguage: "en-IN",
      about: {
        "@id": "https://contetra.com/services/accounting-reporting/transaction-accounting-advisory#service",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/accounting-reporting/transaction-accounting-advisory#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is transaction accounting advisory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Transaction accounting advisory helps businesses assess and implement the accounting and financial reporting implications of transactions such as acquisitions, disposals, restructurings, carve outs, financing arrangements and other complex corporate transactions. The objective is to connect the transaction structure with the required accounting conclusions, entries, disclosures and post deal reporting.",
          },
        },
        {
          "@type": "Question",
          name: "When should a company involve a transaction accounting advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ideally before or during the transaction process, not just after closing. Early involvement helps identify accounting implications, valuation requirements, data gaps, reporting deadlines and Day 1 requirements before they turn into post deal problems.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra support accounting for business acquisitions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This includes the business combination analysis, consideration transferred, purchase price allocation inputs, goodwill, deferred tax, opening entries and related financial statement disclosures.",
          },
        },
        {
          "@type": "Question",
          name: "What is purchase price allocation in an acquisition?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Purchase price allocation, or PPA, is the process of allocating purchase consideration to identifiable assets acquired and liabilities assumed in a business combination. This can involve valuation inputs for intangible assets, property, liabilities and other items, along with determining goodwill or bargain purchase implications under the applicable accounting framework.",
          },
        },
        {
          "@type": "Question",
          name: "Does Contetra perform valuation as part of the transaction accounting process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra coordinates the accounting work with the required valuation inputs and specialists, using the relevant valuation outputs to determine accounting treatment, useful lives, deferred tax implications, opening balances and financial statement disclosures.",
          },
        },
        {
          "@type": "Question",
          name: "Can you support accounting for business disposals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This can involve determining the accounting perimeter, carrying values, consideration, transaction related adjustments, gain or loss on disposal, and the required presentation and disclosures, with the exact treatment depending on how the transaction is structured and the applicable framework.",
          },
        },
        {
          "@type": "Question",
          name: "What is carve out accounting and reporting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Carve out accounting involves preparing financial information for a business, division or component being separated from a larger organisation. It typically requires determining the reporting perimeter, allocating shared costs, preparing historical financial information, applying appropriate accounting policies and setting up standalone reporting processes.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra support restructurings and business separations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This includes accounting and reporting workstreams for restructurings, carve outs and separations, covering perimeter assessment, allocations, historical information, accounting policies and standalone reporting requirements.",
          },
        },
        {
          "@type": "Question",
          name: "What accounting work is required immediately after an acquisition closes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Post deal accounting can include preparing the opening balance sheet, recording transaction and PPA entries, aligning accounting policies and charts of accounts, updating consolidation processes, establishing close procedures, implementing controls, and bringing the acquired entity into management and statutory reporting.",
          },
        },
        {
          "@type": "Question",
          name: "Can transaction accounting affect ERP and financial reporting systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Transactions can create new reporting entities, charts of accounts, consolidation requirements, accounting policies and data needs, which often means changes to ERP configuration, reporting structures, controls and finance processes as part of post deal integration.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra coordinate transaction accounting with due diligence and financial reporting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Transaction accounting conclusions often depend on information generated during due diligence, valuation and legal structuring. Contetra coordinates these inputs with financial statement preparation, consolidation, opening accounting and post deal reporting requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How long after closing should Day 1 accounting be completed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends on statutory and management reporting deadlines, but Day 1 accounting is generally prioritised early, since opening balances and PPA entries flow directly into the first post acquisition reporting cycle. Planning this before closing, rather than after, tends to avoid last minute pressure.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/accounting-reporting/transaction-accounting-advisory#breadcrumb",
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
          name: "Transaction Accounting Advisory",
          item: "https://contetra.com/services/accounting-reporting/transaction-accounting-advisory",
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
