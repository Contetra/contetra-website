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
        "Contetra Private Limited is a finance transformation consulting firm offering technical accounting advisory, accounting and reporting services, Ind AS, IFRS, US GAAP support, financial statements preparation, Virtual CFO, FP&A, ERP implementation consulting, IPO readiness, offshore accounting and AI-enabled automation services.",
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
      "@id": "https://contetra.com/services/accounting-reporting/technical-accounting-advisory#webpage",
      url: "https://contetra.com/services/accounting-reporting/technical-accounting-advisory",
      name: "Technical Accounting Advisory Services | Contetra",
      description:
        "Resolve complex accounting, Ind AS, IFRS, US GAAP, accounting memos, audit queries and financial reporting matters with Contetra.",
      isPartOf: {
        "@id": "https://contetra.com#website",
      },
      about: {
        "@id": "https://contetra.com/services/accounting-reporting/technical-accounting-advisory#service",
      },
      publisher: {
        "@id": "https://contetra.com#organization",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/accounting-reporting/technical-accounting-advisory#breadcrumb",
      },
      mainEntity: {
        "@id": "https://contetra.com/services/accounting-reporting/technical-accounting-advisory#service",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/accounting-reporting/technical-accounting-advisory#service",
      name: "Technical Accounting Advisory Services",
      alternateName: [
        "Technical Accounting Advisory",
        "Accounting Advisory Services",
        "Ind AS Advisory Services",
        "IFRS Advisory Services",
        "US GAAP Advisory Services",
        "Accounting Memo Preparation",
        "Financial Reporting Advisory",
        "Audit Support Services",
        "Financial Statements Preparation",
        "Complex Accounting Advisory",
      ],
      serviceType: "Technical Accounting Advisory",
      provider: {
        "@id": "https://contetra.com#organization",
      },
      url: "https://contetra.com/services/accounting-reporting/technical-accounting-advisory",
      description:
        "Contetra supports businesses with complex accounting and reporting matters, including Ind AS, IFRS, US GAAP, accounting memos, revenue recognition, leases, ESOPs, consolidation, financial instruments, impairment, audit support and financial statements preparation.",
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Business owners, founders, CFOs, finance leaders, controllers, audit teams, investors and growing businesses",
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
        "@id": "https://contetra.com/services/accounting-reporting/technical-accounting-advisory#offercatalog",
        name: "Technical Accounting Advisory Services Scope",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Ind AS, IFRS and US GAAP Advisory",
            itemOffered: {
              "@type": "Service",
              name: "Ind AS, IFRS and US GAAP Advisory",
              description:
                "Support for accounting and reporting matters under Ind AS, IFRS and US GAAP, including recognition, measurement, presentation and disclosure analysis.",
            },
          },
          {
            "@type": "Offer",
            name: "Accounting Memo Preparation",
            itemOffered: {
              "@type": "Service",
              name: "Accounting Memo Preparation",
              description:
                "Preparation of accounting memos documenting the issue, applicable standard, management judgement, analysis, conclusion and audit-supporting rationale.",
            },
          },
          {
            "@type": "Offer",
            name: "Revenue Recognition Advisory",
            itemOffered: {
              "@type": "Service",
              name: "Revenue Recognition Advisory",
              description:
                "Review of revenue contracts, performance obligations, timing of recognition, variable consideration, deferred revenue and related accounting documentation.",
            },
          },
          {
            "@type": "Offer",
            name: "Lease Accounting Advisory",
            itemOffered: {
              "@type": "Service",
              name: "Lease Accounting Advisory",
              description:
                "Support for lease identification, right-of-use assets, lease liabilities, modifications, disclosures and audit-ready lease accounting schedules.",
            },
          },
          {
            "@type": "Offer",
            name: "ESOP and Share-Based Payment Accounting",
            itemOffered: {
              "@type": "Service",
              name: "ESOP and Share-Based Payment Accounting",
              description:
                "Support for accounting treatment, valuation coordination, expense recognition, disclosures and documentation for ESOPs and share-based payment arrangements.",
            },
          },
          {
            "@type": "Offer",
            name: "Consolidation and Group Reporting Support",
            itemOffered: {
              "@type": "Service",
              name: "Consolidation and Group Reporting Support",
              description:
                "Support for consolidation workings, inter-company eliminations, group reporting packs, subsidiary reporting, adjustments and financial statement presentation.",
            },
          },
          {
            "@type": "Offer",
            name: "Financial Instruments and Fair Value Support",
            itemOffered: {
              "@type": "Service",
              name: "Financial Instruments and Fair Value Support",
              description:
                "Accounting support for financial instruments, classification, measurement, fair value, expected credit loss, disclosures and audit-supporting documentation.",
            },
          },
          {
            "@type": "Offer",
            name: "Impairment, Provisions and Deferred Tax Review",
            itemOffered: {
              "@type": "Service",
              name: "Impairment, Provisions and Deferred Tax Review",
              description:
                "Support for impairment assessment, provisions, contingent liabilities, deferred tax, accounting estimates, assumptions and disclosure requirements.",
            },
          },
          {
            "@type": "Offer",
            name: "Financial Statements Preparation",
            itemOffered: {
              "@type": "Service",
              name: "Financial Statements Preparation",
              description:
                "Preparation and review support for financial statements, notes to accounts, disclosure schedules, reporting adjustments and audit documentation.",
            },
          },
          {
            "@type": "Offer",
            name: "Audit Query and Reporting Support",
            itemOffered: {
              "@type": "Service",
              name: "Audit Query and Reporting Support",
              description:
                "Support for resolving audit queries, preparing technical documentation, reviewing disclosures and supporting finance teams during statutory audit or due diligence.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://contetra.com/services/accounting-reporting/technical-accounting-advisory#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is technical accounting advisory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Technical accounting advisory helps businesses address complex accounting, reporting and disclosure matters under frameworks such as Ind AS, IFRS and US GAAP. It supports management with accounting conclusions, memos, audit discussions and financial reporting decisions.",
          },
        },
        {
          "@type": "Question",
          name: "When does a business need technical accounting advisory support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A business should consider technical accounting advisory support when it faces complex areas such as revenue recognition, leases, ESOPs, business combinations, financial instruments, consolidation, impairment, deferred tax, related-party transactions or audit observations.",
          },
        },
        {
          "@type": "Question",
          name: "How is technical accounting advisory different from regular accounting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Regular accounting focuses on recording and reporting transactions. Technical accounting advisory focuses on complex accounting judgements, accounting standards interpretation, recognition, measurement, disclosure, documentation and audit-ready accounting positions.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra support Ind AS, IFRS and US GAAP matters?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can support businesses with Ind AS, IFRS and US GAAP matters, including accounting memos, financial statements, reporting adjustments, disclosure review, audit support and conversion-related accounting analysis.",
          },
        },
        {
          "@type": "Question",
          name: "What are accounting memos and why are they important?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Accounting memos document the accounting issue, relevant standard, management judgement, analysis, conclusion and supporting basis. They are important because auditors, investors, lenders and boards often require clear documentation for complex accounting positions.",
          },
        },
        {
          "@type": "Question",
          name: "Can technical accounting advisory help during audit season?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Technical accounting advisory can help during audit season by resolving complex accounting questions, preparing supporting documentation, reviewing disclosures, responding to audit queries and reducing last-minute reporting delays.",
          },
        },
        {
          "@type": "Question",
          name: "What areas does Contetra cover under technical accounting advisory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra can support areas such as revenue recognition, leases, ESOP accounting, consolidation, financial instruments, impairment, provisions, deferred tax, related-party disclosures, business combinations and financial statement presentation.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra help with financial statements preparation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can support financial statements preparation, including accounting schedules, notes to accounts, disclosure checklists, reporting adjustments, audit support documentation and management reporting packs.",
          },
        },
        {
          "@type": "Question",
          name: "Is technical accounting advisory useful before fundraising or IPO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Businesses preparing for fundraising, due diligence or IPO may need technical accounting advisory to strengthen accounting policies, resolve reporting gaps, prepare audit-ready documentation and improve financial statement reliability.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra work with our existing auditor or finance team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can work alongside the existing finance team, statutory auditor, internal auditor, CFO or management team to prepare technical accounting analysis, documentation and reporting support.",
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
        {
          "@type": "ListItem",
          position: 4,
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
