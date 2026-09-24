import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `Working Capital Management Services | Cash Flow Advisory | Contetra`,
  description: `Working capital management services and AI-based cash flow forecasting to release trapped cash, improve liquidity and strengthen the cash conversion cycle.`,
   alternates: {
    canonical: "https://contetra.com/services/management-reporting/working-capital-and-cashflow-advisory-with-ai",
  },
  openGraph: {
    title: `Working Capital Management Services | Cash Flow Advisory | Contetra`,
    description: `Working capital management services and AI-based cash flow forecasting to release trapped cash, improve liquidity and strengthen the cash conversion cycle.`,
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
      "@id": "https://contetra.com/services/management-reporting/working-capital-and-cashflow-advisory-with-ai#service",
      name: "Working Capital and Cash-Flow Advisory with AI",
      url: "https://contetra.com/services/management-reporting/working-capital-and-cashflow-advisory-with-ai",
      description: "Contetra helps businesses improve working-capital visibility, cash-flow forecasting and liquidity management by analysing receivables, payables, inventory, payment cycles, funding requirements and operating decisions that affect cash.",
      serviceType: [
        "Working Capital Advisory",
        "Cash Flow Advisory",
        "13-Week Cash Flow Forecasting",
        "Receivables and Collections Management",
        "Inventory and Procurement Analysis",
        "Liquidity Planning",
        "Working Capital Dashboards",
        "AI-Enabled Cash Flow Analysis",
      ],
      category: "Management Reporting and FP&A Services",
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
          audienceType: "Business Owners",
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
          audienceType: "Finance Heads",
        },
        {
          "@type": "Audience",
          audienceType: "Management Teams",
        },
      ],
      isRelatedTo: {
        "@type": "Service",
        name: "Fractional CFO and FP&A Services",
        url: "https://contetra.com/services/management-reporting",
      },
    },
    {
      "@type": [
        "WebPage",
        "FAQPage",
      ],
      "@id": "https://contetra.com/services/management-reporting/working-capital-and-cashflow-advisory-with-ai#webpage",
      url: "https://contetra.com/services/management-reporting/working-capital-and-cashflow-advisory-with-ai",
      name: "Working Capital and Cash-Flow Advisory That Converts Profit into Liquidity",
      description: "Working capital and cash-flow advisory services covering 13-week cash forecasts, receivables, inventory, payables, liquidity planning, dashboards and AI-enabled cash-flow insights.",
      inLanguage: "en-IN",
      about: {
        "@id": "https://contetra.com/services/management-reporting/working-capital-and-cashflow-advisory-with-ai#service",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/management-reporting/working-capital-and-cashflow-advisory-with-ai#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is working capital and cash flow advisory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Working capital and cash flow advisory helps businesses gain visibility over receivables, payables, inventory, advances, payment cycles and cash requirements so management can make timely decisions on collections, procurement, liquidity and funding, instead of reacting after cash gets tight.",
          },
        },
        {
          "@type": "Question",
          name: "How is this different from regular accounting reports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Regular accounting reports mainly explain what already happened. Working capital and cash flow advisory looks forward where cash is likely to get blocked, what's coming due, and what decisions management needs to take now to stay ahead of a liquidity problem rather than discover it too late.",
          },
        },
        {
          "@type": "Question",
          name: "When should a business consider cash flow advisory support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some common triggers: cash feels tight even though the business is showing profit, collections keep slipping, inventory is tying up funds, vendor payments are under pressure, forecasts don't hold up in practice, or management simply doesn't have a clear day-to-day view of liquidity.",
          },
        },
        {
          "@type": "Question",
          name: "What is a 13-week cash flow forecast, and why does it matter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It's a short-term, week-by-week cash planning model that shows expected inflows, outflows, funding gaps and liquidity needs over the next quarter. It's particularly useful for businesses that need tighter control over near-term cash decisions rather than relying on monthly or annual projections.",
          },
        },
        {
          "@type": "Question",
          name: "What does Contetra review during a working capital advisory engagement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Receivables ageing, payables, inventory movement, customer payment behaviour, vendor terms, existing cash-flow forecasts, working-capital cycles, funding requirements, reporting quality and how (or whether) management currently reviews cash on a routine basis.",
          },
        },
        {
          "@type": "Question",
          name: "How can AI help with cash flow and working capital management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI can process large volumes of financial data quickly to spot cash-flow trends, flag collection risks, highlight unusual working-capital movements, summarise overdue receivables and catch payment delays early giving management a faster, clearer read on where cash is at risk.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of dashboards can Contetra build for working capital?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dashboards covering cash position, receivables ageing, payables, inventory days, working capital cycle, overdue collections, customer-wise exposure, vendor payments, cash runway, forecast vs. actuals, and liquidity risk built around what actually needs tracking in your business.",
          },
        },
        {
          "@type": "Question",
          name: "Can working capital advisory actually improve profitability, not just cash position?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Reducing cash leakage, tightening collection discipline, right-sizing inventory holding and planning vendor payments more deliberately all free up cash that would otherwise sit idle or cost money to fund which shows up in profitability, not just in the bank balance.",
          },
        },
        {
          "@type": "Question",
          name: "Does Contetra only provide reports, or help implement the actions too?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra goes beyond reporting to help convert insights into action defining review routines, ownership, timelines, collection priorities, payment decisions, inventory actions, escalation rules and overall cash-flow governance so the numbers actually translate into decisions.",
          },
        },
        {
          "@type": "Question",
          name: "Who should use working capital and cash flow advisory services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Business owners, founders, CFOs, finance heads and management teams particularly growing businesses where cash-flow visibility, working-capital discipline and financial decision-making haven't kept pace with the scale of the business.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can a business expect to see improvement in cash flow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends on where the gaps are collection discipline and vendor payment planning can show results relatively quickly, while structural issues like inventory holding or forecasting maturity take longer to fix. Contetra typically starts with a diagnostic review to set realistic expectations before committing to a timeline.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/management-reporting/working-capital-and-cashflow-advisory-with-ai#breadcrumb",
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
          name: "Management Reporting",
          item: "https://contetra.com/services/management-reporting",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Working Capital & Cash-Flow Advisory",
          item: "https://contetra.com/services/management-reporting/working-capital-and-cashflow-advisory-with-ai",
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
