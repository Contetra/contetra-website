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
      name: "Contetra Private Limited",
      alternateName: "Contetra",
      url: "https://contetra.com/",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/accounting-reporting/financial-due-diligence-and-quality-of-earnings#service",
      name: "Financial Due Diligence and Quality of Earnings",
      url: "https://contetra.com/services/accounting-reporting/financial-due-diligence-and-quality-of-earnings",
      description: "Contetra provides financial due diligence and quality of earnings support covering normalised EBITDA, revenue and customer analysis, working capital, net debt, cash flow, debt-like items, financial red flags and transaction-specific decision support.",
      serviceType: [
        "Financial Due Diligence",
        "Quality of Earnings Analysis",
        "Normalised EBITDA Analysis",
        "Revenue and Customer Analysis",
        "Working Capital Analysis",
        "Net Debt Analysis",
        "Debt-Like Item Analysis",
        "Cash Flow Analysis",
        "Financial Red Flag Review",
        "Buy-Side Due Diligence",
        "Sell-Side Due Diligence",
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
          audienceType: "Acquirers",
        },
        {
          "@type": "Audience",
          audienceType: "Investors",
        },
        {
          "@type": "Audience",
          audienceType: "Lenders",
        },
        {
          "@type": "Audience",
          audienceType: "Founders",
        },
        {
          "@type": "Audience",
          audienceType: "CFOs",
        },
        {
          "@type": "Audience",
          audienceType: "Management Teams",
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
          name: "Transaction Accounting Advisory",
          url: "https://contetra.com/services/accounting-reporting/transaction-accounting-advisory",
        },
      ],
    },
    {
      "@type": [
        "WebPage",
        "FAQPage",
      ],
      "@id": "https://contetra.com/services/accounting-reporting/financial-due-diligence-and-quality-of-earnings#webpage",
      url: "https://contetra.com/services/accounting-reporting/financial-due-diligence-and-quality-of-earnings",
      name: "Financial Due Diligence and Quality of Earnings | Contetra",
      description: "Financial due diligence and quality of earnings services covering sustainable EBITDA, revenue quality, working capital, net debt, cash flow and transaction-specific financial risks.",
      inLanguage: "en-IN",
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
            text: "Financial due diligence is an independent review of a company's historical and current financial performance to understand the quality and sustainability of earnings, cash flow, working capital, debt and other financial risks relevant to a transaction. It helps buyers, sellers, investors, lenders and management teams understand what actually sits behind the reported numbers before a decision is made.",
          },
        },
        {
          "@type": "Question",
          name: "What is a Quality of Earnings analysis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Quality of Earnings, or QoE, analysis assesses how much of a company's reported earnings are sustainable and representative of normal operations. It typically reviews reported EBITDA, non recurring items, accounting policies, cut off issues, unusual transactions, margins and trends to arrive at a more normalised view of earnings.",
          },
        },
        {
          "@type": "Question",
          name: "What is normalised EBITDA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Normalised EBITDA is an adjusted measure of earnings that removes items unlikely to reflect the ongoing performance of the business, such as one off income or expenses, unusual transactions, owner related items, exceptional costs, accounting adjustments and other non recurring factors.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Quality of Earnings important in an acquisition?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reported profit alone does not show whether earnings are sustainable, recurring or cash generative. A QoE review helps an acquirer understand the underlying performance of the business and flag adjustments or risks that could affect valuation, deal structure or negotiations.",
          },
        },
        {
          "@type": "Question",
          name: "What does revenue and customer analysis cover during due diligence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This can examine growth trends, customer concentration, churn, pricing, product or customer mix, contracts, seasonality, backlog and the overall quality of reported revenue, to gauge how sustainable and diversified the revenue base actually is.",
          },
        },
        {
          "@type": "Question",
          name: "How is working capital analysed during financial due diligence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By reviewing receivables, inventory, payables, ageing, seasonality and historical working capital levels, with the aim of understanding the normal level of working capital needed to run the business and identifying any unusual or transaction related movements.",
          },
        },
        {
          "@type": "Question",
          name: "What is net debt analysis in financial due diligence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Net debt analysis reviews borrowings, cash and cash equivalents, debt like liabilities, cash like assets and other items that may affect transaction value at closing, helping buyers and sellers understand which balance sheet items may need adjustment under the agreed deal mechanism.",
          },
        },
        {
          "@type": "Question",
          name: "What are debt like items?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Debt like items are liabilities or obligations that economically resemble debt even if they are not classified as traditional borrowings in the financial statements. Depending on the transaction, this can include certain accrued liabilities, unpaid obligations, deferred consideration, financing related balances or other items that need evaluating.",
          },
        },
        {
          "@type": "Question",
          name: "Does financial due diligence analyse cash flow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This includes cash conversion, operating cash flow, capital expenditure, working capital movements and other factors that determine how effectively reported earnings translate into actual cash, since strong accounting profit does not always mean strong cash generation.",
          },
        },
        {
          "@type": "Question",
          name: "What financial red flags can due diligence identify?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unusual accounting adjustments, weak cash conversion, customer concentration, ageing receivables, slow moving inventory, inconsistent margins, related party transactions, contingent liabilities, data gaps, commitments and other accounting or financial risks that might otherwise go unnoticed.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between buy side and sell side financial due diligence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Buy side due diligence is performed for a potential acquirer or investor to understand the financial performance and risks of a target business. Sell side due diligence is performed for the seller or management team to prepare the business for a transaction, get ahead of issues, and present the financial story more clearly to potential buyers.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra perform a focused red flag due diligence review?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Depending on the transaction and the decision at hand, Contetra can run a focused red flag review or a more detailed engagement covering quality of earnings, working capital, net debt, cash flow, revenue analysis and other transaction specific areas.",
          },
        },
        {
          "@type": "Question",
          name: "What information is usually required for financial due diligence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends on the scope of the transaction, but typically includes historical financial statements, management accounts, trial balances, general ledgers, revenue and customer data, receivables and payables ageing, inventory information, debt schedules, cash flow data, contracts, budgets and supporting schedules.",
          },
        },
        {
          "@type": "Question",
          name: "How does Contetra conduct a financial due diligence engagement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The process generally starts by defining the transaction questions and scope. Contetra then builds a traceable financial fact base, analyses sustainable earnings, cash flow and balance sheet items, and reports the findings, adjustments, risks and implications relevant to the transaction decision.",
          },
        },
      ],
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
