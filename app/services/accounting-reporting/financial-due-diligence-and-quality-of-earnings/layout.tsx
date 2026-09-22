import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `Financial Due Diligence & Quality of Earnings | Contetra`,
  description: `Financial due diligence and quality of earnings services for investors, acquirers and lenders, revenue quality, working capital and cash flow analysis.`,
   alternates: {
    canonical: "https://contetra.com/services/accounting-reporting/financial-due-diligence-and-quality-of-earnings",
  },
  openGraph: {
    title: `Test Whether the Earnings Are Real | Contetra`,
    description: `Financial due diligence and quality of earnings services that test the sustainability of earnings and cash flow for investors, acquirers and lenders.`,
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
      "@id": "https://contetra.com/services/accounting-reporting/financial-due-diligence-and-quality-of-earnings#service",
      name: "Financial Due Diligence and Quality of Earnings",
      url: "https://contetra.com/services/accounting-reporting/financial-due-diligence-and-quality-of-earnings",
      description:
        "Financial due diligence and quality of earnings services covering normalized EBITDA, revenue and customer analysis, working capital, net debt, cash conversion, financial red flags and transaction-specific financial risks.",
      serviceType: "Financial Due Diligence and Quality of Earnings Services",
      category: "Accounting and Transaction Advisory",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "Investors, acquirers, lenders, founders, CFOs, management teams and organisations evaluating acquisitions, investments or other transactions",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/accounting-reporting/financial-due-diligence-and-quality-of-earnings#breadcrumb",
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
          name: "Financial Due Diligence & Quality of Earnings",
          item: "https://contetra.com/services/accounting-reporting/financial-due-diligence-and-quality-of-earnings",
        },
      ],
    },
    {
      "@type": ["WebPage", "FAQPage"],
      "@id": "https://contetra.com/services/accounting-reporting/financial-due-diligence-and-quality-of-earnings#webpage",
      url: "https://contetra.com/services/accounting-reporting/financial-due-diligence-and-quality-of-earnings",
      name: "Financial Due Diligence and Quality of Earnings",
      description:
        "Financial due diligence and Quality of Earnings support helping investors, acquirers, lenders and management teams assess sustainable earnings, cash flow, working capital, net debt and financial risks.",
      about: {
        "@id": "https://contetra.com/services/accounting-reporting/financial-due-diligence-and-quality-of-earnings#service",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/accounting-reporting/financial-due-diligence-and-quality-of-earnings#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is financial due diligence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Financial due diligence is an independent review of a company's historical and current financial performance to understand the quality and sustainability of earnings, cash flow, working capital, debt and other financial risks relevant to a transaction. It helps buyers, sellers, investors, lenders and management teams understand what sits behind the reported numbers before making a decision.",
          },
        },
        {
          "@type": "Question",
          name: "What is a Quality of Earnings analysis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Quality of Earnings, or QoE, analysis assesses how much of a company's reported earnings are sustainable and representative of normal operations. It typically reviews reported EBITDA, non-recurring items, accounting policies, cut-off issues, unusual transactions, margins and trends to arrive at a more normalized view of earnings.",
          },
        },
        {
          "@type": "Question",
          name: "What is normalized EBITDA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Normalized EBITDA is an adjusted measure of earnings that removes items that may not reflect the ongoing performance of the business. These may include one-off income or expenses, unusual transactions, owner-related items, exceptional costs, accounting adjustments and other non-recurring factors.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Quality of Earnings important in an acquisition?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reported profit alone may not show whether earnings are sustainable, recurring or cash-generative. A Quality of Earnings review helps an acquirer understand the underlying performance of the business and identify adjustments or risks that could affect valuation, transaction structure or negotiations.",
          },
        },
        {
          "@type": "Question",
          name: "What does revenue and customer analysis cover during due diligence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Revenue and customer analysis can examine growth trends, customer concentration, churn, pricing, product or customer mix, contracts, seasonality, backlog and the quality of reported revenue. This helps determine how sustainable and diversified the revenue base is.",
          },
        },
        {
          "@type": "Question",
          name: "How is working capital analysed during financial due diligence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Working-capital due diligence reviews items such as receivables, inventory, payables, ageing, seasonality and historical working-capital levels. The objective is to understand the normal level of working capital required to operate the business and identify unusual or transaction-related movements.",
          },
        },
        {
          "@type": "Question",
          name: "What is net debt analysis in financial due diligence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Net debt analysis reviews borrowings, cash and cash equivalents, debt-like liabilities, cash-like assets and other items that may affect the transaction value at closing. The analysis helps buyers and sellers understand which balance-sheet items may require adjustment under the agreed deal mechanism.",
          },
        },
        {
          "@type": "Question",
          name: "What are debt-like items?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Debt-like items are liabilities or obligations that may economically resemble debt even if they are not classified as traditional borrowings in the financial statements. Depending on the transaction, these may include certain accrued liabilities, unpaid obligations, deferred consideration, financing-related balances or other items requiring evaluation.",
          },
        },
        {
          "@type": "Question",
          name: "Does financial due diligence analyse cash flow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Financial due diligence can analyse cash conversion, operating cash flow, capital expenditure, working-capital movements and other factors that influence how effectively reported earnings translate into cash. This is important because strong accounting profits do not always result in strong cash generation.",
          },
        },
        {
          "@type": "Question",
          name: "What financial red flags can due diligence identify?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Financial due diligence can identify issues such as unusual accounting adjustments, weak cash conversion, customer concentration, ageing receivables, slow-moving inventory, inconsistent margins, related-party transactions, contingent liabilities, data gaps, commitments and other accounting or financial risks.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between buy-side and sell-side financial due diligence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Buy-side financial due diligence is performed for a potential acquirer or investor to understand the financial performance and risks of a target business. Sell-side due diligence is performed for the seller or management team to prepare the business for a transaction, identify issues in advance and present the financial story more clearly to potential buyers.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra perform a focused red-flag due diligence review?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Depending on the transaction and decision requirements, Contetra can perform a focused red-flag review or a more detailed financial due diligence covering quality of earnings, working capital, net debt, cash flow, revenue analysis and other transaction-specific areas.",
          },
        },
        {
          "@type": "Question",
          name: "What information is usually required for financial due diligence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The information required depends on the scope of the transaction, but it can include historical financial statements, management accounts, trial balances, general ledgers, revenue and customer data, receivables and payables ageing, inventory information, debt schedules, cash-flow data, contracts, budgets and supporting schedules.",
          },
        },
        {
          "@type": "Question",
          name: "How does Contetra conduct a financial due diligence engagement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The process generally starts by defining the transaction questions and scope. Contetra then builds a traceable financial fact base, analyses sustainable earnings, cash flow and balance-sheet items, and reports the findings, adjustments, risks and implications relevant to the transaction decision.",
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
