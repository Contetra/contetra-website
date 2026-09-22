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
      name: "Contetra",
      url: "https://contetra.com/",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/accounting-reporting/transaction-accounting-advisory#service",
      name: "Transaction Accounting Advisory",
      url: "https://contetra.com/services/accounting-reporting/transaction-accounting-advisory",
      description:
        "Transaction accounting advisory covering acquisitions, disposals, purchase price allocation, valuation coordination, carve-outs, restructurings and post-deal accounting and reporting integration.",
      serviceType: "Transaction Accounting Advisory Services",
      category: "Accounting and Reporting Advisory",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "CFOs, finance controllers, accounting teams, corporate finance teams and organisations undertaking acquisitions, disposals, restructurings or other complex transactions",
      },
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
    {
      "@type": ["WebPage", "FAQPage"],
      "@id": "https://contetra.com/services/accounting-reporting/transaction-accounting-advisory#webpage",
      url: "https://contetra.com/services/accounting-reporting/transaction-accounting-advisory",
      name: "Transaction Accounting Advisory from Deal Structure to Post-Deal Reporting",
      description:
        "Transaction accounting advisory helping finance teams address acquisitions, disposals, purchase price allocation, carve-outs, restructurings, opening reporting and post-deal integration.",
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
            text: "Transaction accounting advisory helps businesses assess and implement the accounting and financial reporting implications of transactions such as acquisitions, disposals, restructurings, carve-outs, financing arrangements and other complex corporate transactions. The objective is to connect the transaction structure with the required accounting conclusions, entries, disclosures and post-deal reporting.",
          },
        },
        {
          "@type": "Question",
          name: "When should a company involve a transaction accounting advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ideally, transaction accounting specialists should be involved before or during the transaction process rather than only after closing. Early involvement can help identify accounting implications, valuation requirements, data gaps, reporting deadlines and Day-1 requirements before they become post-deal issues.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra support accounting for business acquisitions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can support the accounting assessment for acquisitions, including the business-combination analysis, consideration transferred, purchase price allocation inputs, goodwill, deferred tax, opening entries and related financial statement disclosures.",
          },
        },
        {
          "@type": "Question",
          name: "What is purchase price allocation in an acquisition?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Purchase price allocation, or PPA, is the process of allocating the purchase consideration to identifiable assets acquired and liabilities assumed as part of a business combination. This may involve valuation inputs for intangible assets, property, liabilities and other items, along with determination of goodwill or bargain purchase implications under the applicable accounting framework.",
          },
        },
        {
          "@type": "Question",
          name: "Does Contetra perform valuation as part of the transaction accounting process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra can coordinate the accounting work with the required valuation inputs and specialists. The transaction accounting process uses relevant valuation outputs to determine accounting treatment, useful lives, deferred tax implications, opening balances and financial statement disclosures.",
          },
        },
        {
          "@type": "Question",
          name: "Can you support accounting for business disposals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Disposal accounting can involve determining the accounting perimeter, carrying values, consideration, transaction-related adjustments, gain or loss on disposal and the required presentation and disclosures. The exact accounting treatment depends on the structure of the transaction and the applicable reporting framework.",
          },
        },
        {
          "@type": "Question",
          name: "What is carve-out accounting and reporting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Carve-out accounting involves preparing financial information for a business, division or component that is being separated from a larger organisation. It can require determining the reporting perimeter, allocating shared costs, preparing historical financial information, applying appropriate accounting policies and establishing standalone reporting processes.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra support restructurings and business separations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can support accounting and reporting workstreams associated with restructurings, carve-outs and separations, including perimeter assessment, allocations, historical information, accounting policies and standalone reporting requirements.",
          },
        },
        {
          "@type": "Question",
          name: "What accounting work is required immediately after an acquisition closes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Post-deal accounting may include preparing the opening balance sheet, recording transaction and PPA entries, aligning accounting policies and charts of accounts, updating consolidation processes, establishing close procedures, implementing controls and incorporating the acquired entity into management and statutory reporting.",
          },
        },
        {
          "@type": "Question",
          name: "Can transaction accounting affect ERP and financial reporting systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Transactions can create new reporting entities, charts of accounts, consolidation requirements, accounting policies and data needs. Post-deal integration may therefore require changes to ERP configuration, reporting structures, controls and finance processes.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra coordinate transaction accounting with due diligence and financial reporting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Transaction accounting conclusions often depend on information generated during due diligence, valuation and legal structuring. Contetra can coordinate these inputs with financial statement preparation, consolidation, opening accounting and post-deal reporting requirements.",
          },
        },
        {
          "@type": "Question",
          name: "What is Contetra's transaction accounting advisory process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The process generally starts by understanding the transaction structure and reporting timetable. The accounting, data, valuation and disclosure workstreams are then identified, accounting conclusions and implementation entries are documented, and support is provided for opening reporting and post-deal integration.",
          },
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
