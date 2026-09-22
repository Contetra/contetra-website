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
      name: "Contetra",
      url: "https://contetra.com/",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-conversion#service",
      name: "Ind AS, IFRS and US GAAP Conversion",
      url: "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-conversion",
      description:
        "Accounting framework conversion support covering Ind AS adoption, local GAAP to IFRS, IFRS to US GAAP, US GAAP to IFRS, group-reporting alignment, impact assessment, transition adjustments, comparative information, financial statements, disclosures, controls and audit support.",
      serviceType: "Ind AS, IFRS and US GAAP Conversion Services",
      category: "Accounting and Reporting Advisory",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "CFOs, finance controllers, accounting teams, multinational groups and organisations transitioning between accounting and financial reporting frameworks",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-conversion#breadcrumb",
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
          name: "Ind AS, IFRS and US GAAP Conversion",
          item: "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-conversion",
        },
      ],
    },
    {
      "@type": ["WebPage", "FAQPage"],
      "@id": "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-conversion#webpage",
      url: "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-conversion",
      name: "Ind AS, IFRS and US GAAP Conversion from Impact Assessment to Reporting Implementation",
      description:
        "Ind AS, IFRS and US GAAP conversion support covering impact assessment, accounting policies, opening and comparative information, financial statements, disclosures, controls, training and audit support.",
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
            text: "An accounting framework conversion is the process of moving financial reporting from one accounting framework to another, such as local GAAP to IFRS, IFRS to US GAAP, US GAAP to IFRS, or transitioning to Ind AS. It involves more than changing accounting entries because the transition may also affect policies, financial statements, disclosures, systems, processes, controls, data requirements and management reporting.",
          },
        },
        {
          "@type": "Question",
          name: "What types of accounting framework conversions can Contetra support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra can support Ind AS adoption, local GAAP to IFRS conversion, IFRS to US GAAP conversion, US GAAP to IFRS conversion and group-reporting alignment, depending on the applicable reporting requirements and circumstances of the organisation.",
          },
        },
        {
          "@type": "Question",
          name: "What is involved in an Ind AS conversion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An Ind AS conversion typically begins with identifying differences between the existing accounting framework and Ind AS. The process can include policy decisions, transition adjustments, opening balances, comparative information, reconciliations, financial statement preparation, disclosures, recurring calculations and changes to close and reporting processes.",
          },
        },
        {
          "@type": "Question",
          name: "What is an IFRS conversion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An IFRS conversion involves transitioning financial statements and accounting policies from an existing reporting framework to IFRS. This can require identification of accounting differences, selection of appropriate policies and elections, preparation of adjustments, comparative financial information, transition disclosures and establishment of recurring reporting processes.",
          },
        },
        {
          "@type": "Question",
          name: "How is US GAAP different from IFRS during a conversion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "US GAAP and IFRS may differ in recognition, measurement, presentation and disclosure requirements across several accounting areas. During a conversion, the relevant differences need to be identified based on the company's transactions and reporting requirements, followed by appropriate accounting adjustments, policies, reconciliations and disclosures.",
          },
        },
        {
          "@type": "Question",
          name: "What is a GAAP conversion impact assessment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A GAAP conversion impact assessment identifies the key accounting, reporting and operational differences between the current and target frameworks. It can cover accounting policies, elections, exemptions, materiality, data requirements, systems, controls, contracts and implementation priorities before detailed conversion work begins.",
          },
        },
        {
          "@type": "Question",
          name: "Do we need to prepare an opening balance sheet during a conversion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the applicable framework and transition requirements, an opening balance sheet or opening financial position may be required. This process can involve identifying transition adjustments, performing calculations, reconciling balances and documenting how the opening position has changed under the new reporting framework.",
          },
        },
        {
          "@type": "Question",
          name: "Will comparative financial information need to be restated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Comparative information may need to be prepared or restated depending on the target reporting framework and applicable transition requirements. The conversion process should identify the required comparative periods, adjustments and reconciliations at the planning stage.",
          },
        },
        {
          "@type": "Question",
          name: "Can accounting framework conversion affect systems and internal controls?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A reporting-framework conversion can affect data requirements, recurring calculations, accounting processes, close activities, reporting templates and internal controls. Finance teams may therefore need to update systems, ownership, review controls and reporting procedures rather than treating the conversion as a one-time adjustment exercise.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra help prepare financial statements and disclosures after conversion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can support preparation of accounting policies, primary financial statements, notes, transition reconciliations and supporting schedules under the target reporting framework, along with review and audit-support activities.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide training to finance teams during the conversion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A sustainable conversion should build the finance team's ability to operate under the new reporting framework. Support can include templates, recurring calculations, close procedures, ownership, controls and training so that the reporting process can continue after the initial conversion.",
          },
        },
        {
          "@type": "Question",
          name: "How does Contetra approach an Ind AS, IFRS or US GAAP conversion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The process generally begins by assessing accounting differences and reporting objectives. Policies, elections and the implementation approach are then determined, followed by preparation of adjustments, comparative information and disclosures. Finally, recurring processes, controls and reporting responsibilities are embedded and supported through the audit-review stage.",
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
