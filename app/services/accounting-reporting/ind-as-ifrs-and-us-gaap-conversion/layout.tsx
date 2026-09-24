import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `Ind AS, IFRS & US GAAP Conversion Services | Contetra`,
  description: `Ind AS, IFRS and US GAAP conversion services from impact assessment to reporting implementation, opening balance sheet, disclosures and embedded process.`,
   alternates: {
    canonical: "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-conversion",
  },
  openGraph: {
    title: `GAAP Conversion, Done as a Capability — Not a One-Time File | Contetra`,
    description: ` Treat GAAP conversion as a recurring reporting capability, not a one-time file — impact assessment, opening balance sheet, disclosures and embedded process.`,
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
      "@id": "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-conversion#service",
      name: "Ind AS, IFRS and US GAAP Conversion Services",
      url: "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-conversion",
      description: "Contetra supports accounting framework conversions including Ind AS adoption, local GAAP to IFRS, IFRS to US GAAP, US GAAP to IFRS and group reporting alignment, covering impact assessment, accounting policies, transition adjustments, opening balances, comparative information, disclosures, controls, systems and finance-team implementation.",
      serviceType: [
        "Ind AS Conversion",
        "IFRS Conversion",
        "US GAAP Conversion",
        "GAAP Conversion Impact Assessment",
        "Accounting Policy Assessment",
        "Opening Balance Sheet Preparation",
        "Comparative Financial Information Restatement",
        "Transition Reconciliations",
        "Financial Statement Preparation",
        "Disclosure Preparation",
        "Reporting Process and Controls Implementation",
        "Finance Team Training",
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
          audienceType: "Multinational and Group Finance Teams",
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
      "@id": "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-conversion#webpage",
      url: "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-conversion",
      name: "Ind AS, IFRS and US GAAP Conversion Services | Contetra",
      description: "Accounting framework conversion services covering Ind AS, IFRS and US GAAP impact assessment, accounting policies, transition adjustments, opening balances, comparative information, financial statements, disclosures, controls and training.",
      inLanguage: "en-IN",
      about: {
        "@id": "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-conversion#service",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-conversion#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is an accounting framework conversion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An accounting framework conversion is the process of moving financial reporting from one framework to another, such as local GAAP to IFRS, IFRS to US GAAP, US GAAP to IFRS, or transitioning to Ind AS. It involves more than changing accounting entries, since the transition can also affect policies, financial statements, disclosures, systems, processes, controls, data requirements and management reporting.",
          },
        },
        {
          "@type": "Question",
          name: "What types of accounting framework conversions can Contetra support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ind AS adoption, local GAAP to IFRS conversion, IFRS to US GAAP conversion, US GAAP to IFRS conversion and group reporting alignment, depending on the applicable reporting requirements and the organisation's specific circumstances.",
          },
        },
        {
          "@type": "Question",
          name: "What is a GAAP conversion impact assessment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It identifies the key accounting, reporting and operational differences between the current and target frameworks, covering accounting policies, elections, exemptions, materiality, data requirements, systems, controls and contracts, and sets implementation priorities before detailed conversion work begins.",
          },
        },
        {
          "@type": "Question",
          name: "What is involved in an Ind AS conversion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It typically starts by identifying differences between the existing framework and Ind AS, then moves through policy decisions, transition adjustments, opening balances, comparative information, reconciliations, financial statement preparation, disclosures, recurring calculations and changes to the close and reporting process.",
          },
        },
        {
          "@type": "Question",
          name: "What is involved in an IFRS conversion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It involves transitioning financial statements and accounting policies from an existing framework to IFRS, which can require identifying accounting differences, selecting appropriate policies and elections, preparing adjustments, comparative financial information, transition disclosures and setting up the recurring reporting process going forward.",
          },
        },
        {
          "@type": "Question",
          name: "How is US GAAP different from IFRS during a conversion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "US GAAP and IFRS can differ in recognition, measurement, presentation and disclosure across several accounting areas. During a conversion, the relevant differences are identified based on the company's actual transactions and reporting requirements, followed by the appropriate adjustments, policies, reconciliations and disclosures.",
          },
        },
        {
          "@type": "Question",
          name: "Do we need to prepare an opening balance sheet during a conversion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the framework and transition requirements, yes, an opening balance sheet or opening financial position may be needed. This involves identifying transition adjustments, performing calculations, reconciling balances and documenting how the opening position has changed under the new framework.",
          },
        },
        {
          "@type": "Question",
          name: "Will comparative financial information need to be restated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Possibly, depending on the target framework and applicable transition requirements. The conversion process should identify the required comparative periods, adjustments and reconciliations early, at the planning stage, rather than leaving this until later.",
          },
        },
        {
          "@type": "Question",
          name: "Can accounting framework conversion affect systems and internal controls?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. It can affect data requirements, recurring calculations, accounting processes, close activities, reporting templates and internal controls. Finance teams often need to update systems, ownership, review controls and reporting procedures rather than treating the conversion as a one time adjustment exercise.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra help prepare financial statements and disclosures after conversion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This includes accounting policies, primary financial statements, notes, transition reconciliations and supporting schedules under the target framework, along with review and audit support activities.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide training to finance teams during the conversion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A sustainable conversion should leave the finance team able to operate under the new framework independently. Support can include templates, recurring calculations, close procedures, ownership, controls and training so the reporting process continues smoothly after the initial conversion is complete.",
          },
        },
        {
          "@type": "Question",
          name: "How does Contetra approach an Ind AS, IFRS or US GAAP conversion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The process generally begins by assessing accounting differences and reporting objectives. Policies, elections and the implementation approach are then determined, followed by preparation of adjustments, comparative information and disclosures. Finally, recurring processes, controls and reporting responsibilities are embedded and supported through to the audit review stage.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-conversion#breadcrumb",
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
          name: "Accounting & Reporting",
          item: "https://contetra.com/services/accounting-reporting",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ind AS, IFRS & US GAAP Conversion",
          item: "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-conversion",
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
