import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `Ind AS, IFRS and US GAAP Reporting | Contetra`,
  description: `Reporting under Ind AS, IFRS and US GAAP is where accounting judgement, disclosure quality and the audit trail all meet. Contetra helps finance teams reach defensible positions, prepare the underlying calculations and produce audit-ready financial statements under each of these frameworks.`,
  alternates: {
    canonical:
      "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-reporting",
  },
  openGraph: {
    title: `Ind AS, IFRS and US GAAP Reporting | Contetra`,
    description: `Ind AS, IFRS and US GAAP reporting that stands up to audit, investor and transaction scrutiny — technical accounting, financial statement preparation, consolidation and audit support.`,
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
      "@id":
        "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-reporting#service",
      name: "Ind AS, IFRS and US GAAP Reporting",
      url: "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-reporting",
      description:
        "Contetra provides Ind AS, IFRS and US GAAP reporting services covering standard interpretation, accounting policy papers, financial statement preparation, consolidation, disclosures and audit support under each framework.",
      serviceType: [
        "Technical Accounting Advisory",
        "IFRS Reporting Services",
        "US GAAP Reporting Services",
        "Ind AS Reporting Services",
        "Schedule III Disclosure Compliance",
        "Consolidation and Group Reporting",
        "Audit Support and Close Acceleration",
      ],
      category: "Accounting and Reporting Advisory",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "CFOs, finance heads, controllers, finance and accounting teams, auditors and growing businesses reporting under Ind AS, IFRS or US GAAP",
      },
      isRelatedTo: {
        "@type": "Service",
        name: "Accounting and Reporting Services",
        url: "https://contetra.com/services/accounting-reporting",
      },
    },
    {
      "@type": ["WebPage", "FAQPage"],
      "@id":
        "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-reporting#webpage",
      url: "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-reporting",
      name: "Ind AS, IFRS and US GAAP Reporting That Stands Up to Audit, Investor and Transaction Scrutiny",
      description:
        "Ind AS, IFRS and US GAAP reporting services helping finance teams reach defensible positions, prepare the underlying calculations and produce audit-ready financial statements.",
      inLanguage: "en-IN",
      about: {
        "@id":
          "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-reporting#service",
      },
      breadcrumb: {
        "@id":
          "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-reporting#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the difference between Ind AS, IFRS and US GAAP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ind AS is the set of Indian Accounting Standards, largely converged with IFRS and applied by many Indian companies. IFRS is the international framework issued by the IASB and used across much of the world. US GAAP is the United States framework issued by the FASB. The three overlap in many areas but differ in specific recognition, measurement, presentation and disclosure requirements, which is why reporting under each needs framework-specific judgement.",
          },
        },
        {
          "@type": "Question",
          name: "Which framework does my company need to report under?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your size, ownership, listing status, lenders and group structure. Listed and larger Indian companies typically report under Ind AS. Businesses with a foreign parent or foreign investors may also need IFRS or US GAAP numbers for group reporting. We help you confirm which frameworks apply and where more than one is required at the same time.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra prepare complete financial statements under these frameworks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Depending on the engagement, support can include trial-balance review, reconciliations, schedules, primary statements, notes, accounting policies, cash-flow statements, group reporting packs and audit-ready supporting documentation under Ind AS, IFRS or US GAAP.",
          },
        },
        {
          "@type": "Question",
          name: "What is technical accounting advisory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is the work of interpreting and applying accounting standards to complex transactions or reporting matters, documenting the conclusion, and implementing the resulting entries, calculations and disclosures. It gives management and auditors a defensible, standard-referenced position rather than an undocumented judgement.",
          },
        },
        {
          "@type": "Question",
          name: "How do you handle complex standards such as revenue, leases and financial instruments?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We assess the specific facts against the applicable standard, for example Ind AS 115, IFRS 15 or ASC 606 for revenue, Ind AS 116, IFRS 16 or ASC 842 for leases, and Ind AS 109 or IFRS 9 for financial instruments and expected credit losses. We then document the position and prepare the calculations, entries and disclosures needed to apply it.",
          },
        },
        {
          "@type": "Question",
          name: "What is involved in Schedule III and disclosure compliance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For Indian reporting entities, Schedule III sets out the format and disclosure requirements for financial statements. We help prepare compliant presentation and notes, including related-party disclosures under Section 188 and other framework-specific requirements, so the financial statements are complete and consistent.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help with consolidation and group reporting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We support control assessments, group structures, eliminations, non-controlling interests, foreign operations, reporting packs and consolidation adjustments, prepared to your group timelines and reporting standards.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide expected credit loss (ECL) models?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We can design and validate ECL models under Ind AS 109 or IFRS 9, including stage classification, PD and LGD inputs and scenario weighting, with documentation that supports consistent, compliant provisioning each reporting period.",
          },
        },
        {
          "@type": "Question",
          name: "How do you work with our statutory auditors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Management remains responsible for the financial statements and accounting judgements. We help prepare robust analysis, workings, schedules and evidence, respond to technical questions and coordinate open items, so the audit runs efficiently and sign-off is not delayed.",
          },
        },
        {
          "@type": "Question",
          name: "What is an audit-readiness review?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is a focused review of your reporting to identify where conclusions, disclosures, workings or evidence may not withstand audit scrutiny, before the audit begins. You receive a clear view of the gaps and the work needed to close them ahead of the deadline.",
          },
        },
        {
          "@type": "Question",
          name: "Is this different from a one-time GAAP conversion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A GAAP conversion moves reporting from one framework to another as a one-time programme. This service covers ongoing reporting under Ind AS, IFRS and US GAAP, including recurring judgements, disclosures, consolidation and audit support. If you need a full transition between frameworks, our GAAP conversion service is the right starting point.",
          },
        },
        {
          "@type": "Question",
          name: "Can you support a specific issue rather than a full engagement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We can work on a single complex accounting matter, a specific disclosure, an audit query or a reporting deadline, or act as an ongoing technical partner across reporting cycles. The scope is defined around the issue and the deadline.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-reporting#breadcrumb",
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
          name: "Ind AS, IFRS and US GAAP Reporting",
          item: "https://contetra.com/services/accounting-reporting/ind-as-ifrs-and-us-gaap-reporting",
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
