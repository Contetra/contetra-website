import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Accounting & Reporting Advisory | Technical Accounting | Contetra`,
  description: `Accounting and reporting advisory for complex standards, transactions and audit-ready financial statements, Ind AS, IFRS, US GAAP and technical accounting support.`,
   alternates: {
    canonical: "https://contetra.com/services/accounting-reporting",
  },
  openGraph: {
    title: `Accounting & Reporting Advisory | Technical Accounting | Contetra`,
    description: `Accounting and reporting consulting for complex standards, transactions and audit-ready financial statements — technical accounting, GAAP conversion and due diligence.`,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://contetra.com#organization",
      name: "Contetra Private Limited",
      alternateName: "Contetra",
      url: "https://contetra.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://contetra.com#logo",
        url: "https://contetra.com/assets/images/logo/contetra-main-logo.png",
      },
      image: {
        "@id": "https://contetra.com#logo",
      },
      description:
        "Contetra Private Limited is a finance transformation consulting firm offering accounting and reporting services, technical accounting advisory, financial statements preparation, Virtual CFO, FP&A, ERP implementation consulting, IPO readiness, offshore accounting and AI-enabled automation services.",
      email: "growth@contetra.com",
      telephone: "+91 98338 18857",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "225, 2nd floor, Swastik Disa Corporate Park, LBS Road, Opposite Rajhans Cinemas, Ghatkopar West",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400086",
        addressCountry: "IN",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Mumbai",
        },
      ],
      sameAs: ["https://www.linkedin.com/company/contetra-private-limited"],
    },
    {
      "@type": "WebSite",
      "@id": "https://contetra.com#website",
      url: "https://contetra.com",
      name: "Contetra",
      publisher: {
        "@id": "https://contetra.com#organization",
      },
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://contetra.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://contetra.com/services/accounting-reporting#webpage",
      url: "https://contetra.com/services/accounting-reporting",
      name: "Accounting and Reporting Services | Contetra",
      description:
        "Strengthen accounting, reporting, financial statements, reconciliations, month-end close and audit readiness with Contetra’s finance-led accounting support.",
      isPartOf: {
        "@id": "https://contetra.com#website",
      },
      about: {
        "@id": "https://contetra.com/services/accounting-reporting#service",
      },
      publisher: {
        "@id": "https://contetra.com#organization",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/accounting-reporting#breadcrumb",
      },
      mainEntity: {
        "@id": "https://contetra.com/services/accounting-reporting#service",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/accounting-reporting#service",
      name: "Accounting and Reporting Services",
      alternateName: [
        "Financial Reporting Services",
        "Accounting Advisory Services",
        "Financial Statements Preparation",
        "Audit Readiness Support",
        "Monthly Close Support",
        "Management Reporting Support",
        "Accounting and Bookkeeping Review",
        "Ind AS Reporting Support",
        "IFRS Reporting Support",
        "US GAAP Reporting Support",
      ],
      serviceType: "Accounting and Reporting Services",
      provider: {
        "@id": "https://contetra.com#organization",
      },
      url: "https://contetra.com/services/accounting-reporting",
      description:
        "Contetra helps businesses improve accounting quality, reporting discipline, financial statements preparation, reconciliations, monthly close, audit readiness, management reporting and accounting documentation.",
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Business owners, founders, CFOs, finance leaders, controllers, accounting teams, auditors and growing businesses",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Mumbai",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        "@id": "https://contetra.com/services/accounting-reporting#offercatalog",
        name: "Accounting and Reporting Services Scope",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Financial Statements Preparation",
            itemOffered: {
              "@type": "Service",
              name: "Financial Statements Preparation",
              description:
                "Support for preparation of financial statements, schedules, notes to accounts, reconciliations and reporting packs for management, auditors, lenders or investors.",
            },
          },
          {
            "@type": "Offer",
            name: "Monthly Close and Reporting Support",
            itemOffered: {
              "@type": "Service",
              name: "Monthly Close and Reporting Support",
              description:
                "Support for month-end close, trial balance review, reconciliations, closing schedules, variance review and timely reporting discipline.",
            },
          },
          {
            "@type": "Offer",
            name: "Audit Readiness Support",
            itemOffered: {
              "@type": "Service",
              name: "Audit Readiness Support",
              description:
                "Preparation of audit schedules, reconciliations, documentation, accounting workings, management responses and information support for statutory or internal audits.",
            },
          },
          {
            "@type": "Offer",
            name: "Accounting Memos and Technical Documentation",
            itemOffered: {
              "@type": "Service",
              name: "Accounting Memos and Technical Documentation",
              description:
                "Preparation of accounting memos, technical notes and documentation for complex accounting matters, reporting judgments and audit discussions.",
            },
          },
          {
            "@type": "Offer",
            name: "Ind AS, IFRS and US GAAP Reporting Support",
            itemOffered: {
              "@type": "Service",
              name: "Ind AS, IFRS and US GAAP Reporting Support",
              description:
                "Support for accounting and reporting matters involving Ind AS, IFRS and US GAAP, including reporting adjustments, disclosure requirements and financial statement presentation.",
            },
          },
          {
            "@type": "Offer",
            name: "Reconciliation and Balance Review",
            itemOffered: {
              "@type": "Service",
              name: "Reconciliation and Balance Review",
              description:
                "Review of ledger balances, bank reconciliations, vendor reconciliations, customer reconciliations, inter-company balances, provisions, accruals and closing items.",
            },
          },
          {
            "@type": "Offer",
            name: "Management Reporting Support",
            itemOffered: {
              "@type": "Service",
              name: "Management Reporting Support",
              description:
                "Preparation and improvement of management reports, MIS packs, financial dashboards, variance analysis and business-performance reporting for leadership teams.",
            },
          },
          {
            "@type": "Offer",
            name: "Finance Process and Control Improvement",
            itemOffered: {
              "@type": "Service",
              name: "Finance Process and Control Improvement",
              description:
                "Review and improvement of finance processes, reporting ownership, close calendar, approval controls, documentation standards and accounting workflows.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://contetra.com/services/accounting-reporting#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are accounting and reporting services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Accounting and reporting services help businesses maintain accurate books, prepare reliable financial statements, manage month-end close, reconcile accounts, create management reports and ensure finance information is ready for audits, lenders, investors and management decision-making.",
          },
        },
        {
          "@type": "Question",
          name: "Who should use accounting and reporting services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "These services are useful for growing businesses, founder-led companies, CFO teams, finance heads, startups, subsidiaries, offshore entities and companies that need stronger accounting discipline, financial reporting quality and audit-ready finance processes.",
          },
        },
        {
          "@type": "Question",
          name: "What does Contetra support under accounting and reporting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra supports bookkeeping review, monthly close, reconciliations, financial statements preparation, MIS reporting, audit schedules, accounting memos, reporting packs, consolidation support and finance-process improvement.",
          },
        },
        {
          "@type": "Question",
          name: "How are accounting and reporting services different from regular bookkeeping?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Regular bookkeeping focuses on recording transactions. Accounting and reporting services go further by ensuring accuracy, reconciliations, close discipline, financial statement readiness, reporting quality, management visibility and audit support.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra help prepare financial statements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can support financial statements preparation, including schedules, notes, reconciliations, management reporting packs and audit-support documentation, depending on the company’s accounting framework and reporting requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra support Ind AS, IFRS or US GAAP reporting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can support businesses with accounting and reporting matters involving Ind AS, IFRS and US GAAP, including accounting memos, reporting adjustments, financial statements, audit support and complex accounting areas.",
          },
        },
        {
          "@type": "Question",
          name: "What are common signs that accounting and reporting needs improvement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common signs include delayed month-end close, unreconciled balances, heavy Excel dependency, inconsistent MIS, audit observations, unclear ownership, manual reporting, weak documentation and difficulty preparing reliable financial statements on time.",
          },
        },
        {
          "@type": "Question",
          name: "Does Contetra support audit readiness?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can support audit readiness by preparing schedules, reconciliations, documentation, accounting memos, financial statements, management responses and structured information required by auditors.",
          },
        },
        {
          "@type": "Question",
          name: "Can accounting and reporting services improve management decisions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Reliable accounting and reporting helps management understand profitability, costs, cash flow, working capital, business-unit performance and financial risks more clearly, which improves decision-making.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra work with the existing finance team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can work alongside the existing finance team, CFO, auditor, accounting partner or internal management team to improve reporting quality, close discipline, documentation, controls and management visibility.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/accounting-reporting#breadcrumb",
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
          name: "Services",
          item: "https://contetra.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Accounting and Reporting",
          item: "https://contetra.com/services/accounting-reporting",
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
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
