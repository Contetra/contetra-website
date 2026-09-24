import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `ERP Project Rescue & Post-Go-Live Optimisation | Contetra`,
  description: `Recover delayed or underperforming ERP projects with Contetra’s ERP rescue and post-go-live optimisation services for stronger adoption and business outcomes.`,
   alternates: {
    canonical: "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation",
  },
  openGraph: {
    title: `ERP Project Rescue & Post-Go-Live Optimisation | Contetra`,
    description: `Recover delayed or underperforming ERP projects with Contetra's ERP rescue and post-go-live optimisation services for stronger adoption and business outcomes`,
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
      "@id": "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation#service",
      name: "ERP Project Rescue and Post-Go-Live Optimisation",
      url: "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation",
      description: "Contetra provides independent ERP project rescue and post-go-live optimisation support for delayed, disputed or underperforming ERP programmes, covering programme assessment, root-cause analysis, recovery planning, remediation governance, reporting, controls, data, adoption and post-go-live stabilisation.",
      serviceType: [
        "ERP Project Rescue",
        "ERP Programme Recovery",
        "ERP Post-Go-Live Optimisation",
        "ERP Programme Assessment",
        "ERP Root-Cause Analysis",
        "ERP Recovery Planning",
        "ERP Remediation Governance",
        "ERP Data Remediation",
        "ERP Reporting Optimisation",
        "ERP Controls Remediation",
        "ERP User Adoption Improvement",
        "ERP Functional Optimisation",
      ],
      category: "ERP Consulting and Digital Transformation",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      audience: [
        {
          "@type": "Audience",
          audienceType: "Business Owners",
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
          audienceType: "ERP Programme Sponsors",
        },
        {
          "@type": "Audience",
          audienceType: "Project and PMO Teams",
        },
        {
          "@type": "Audience",
          audienceType: "Process Owners",
        },
      ],
      isRelatedTo: [
        {
          "@type": "Service",
          name: "ERP Implementation and Diagnostic Review",
          url: "https://contetra.com/services/digital-transformation",
        },
        {
          "@type": "Service",
          name: "ERP Implementation PMO and Functional Consulting",
          url: "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting",
        },
      ],
    },
    {
      "@type": [
        "WebPage",
        "FAQPage",
      ],
      "@id": "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation#webpage",
      url: "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation",
      name: "ERP Project Rescue & Post-Go-Live Optimisation | Contetra",
      description: "ERP project rescue and post-go-live optimisation services for delayed or underperforming ERP programmes, covering root-cause analysis, recovery planning, remediation governance, reporting, controls, data and user adoption.",
      inLanguage: "en-IN",
      about: {
        "@id": "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation#service",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is ERP project rescue?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ERP project rescue is a structured review and recovery approach for ERP implementations that are delayed, over budget, poorly adopted, or not aligned with business requirements. It identifies root causes, prioritises fixes, resets governance and builds a practical recovery roadmap.",
          },
        },
        {
          "@type": "Question",
          name: "Why do ERP projects struggle after go live?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually because open issues, workarounds, reporting gaps and adoption problems are left unresolved once the system is live. This tends to happen when stabilisation and optimisation were never planned as part of the ERP programme in the first place, and the project is treated as \"done\" at go live rather than as ongoing work.",
          },
        },
        {
          "@type": "Question",
          name: "When should a business consider ERP project rescue support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When the implementation is running late, users are losing confidence in the system, scope has become unclear, data migration is failing, UAT issues remain unresolved, reports cannot be trusted, or the implementation partner and internal business teams are simply not aligned anymore.",
          },
        },
        {
          "@type": "Question",
          name: "What is post go live ERP optimisation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Post go live ERP optimisation focuses on improving how the system is actually used after launch, resolving process gaps, reporting issues, data problems, control weaknesses, user adoption challenges, workflow inefficiencies and configuration issues that were never fully closed out.",
          },
        },
        {
          "@type": "Question",
          name: "What are common signs that post go live optimisation is needed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Continued Excel dependency, delayed MIS, unreliable inventory reports, slow month end close, unresolved UAT defects, manual reconciliations, poor user adoption, approval bypasses, integration failures and unclear ownership of ongoing ERP issues.",
          },
        },
        {
          "@type": "Question",
          name: "Does ERP project rescue mean replacing the ERP system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always. Many issues can be fixed through process correction, configuration review, data clean up, reporting improvements, user training, workflow redesign and stronger governance. Replacement should only be considered after an evidence based diagnostic review, not as a first response.",
          },
        },
        {
          "@type": "Question",
          name: "What does Contetra review during an ERP project rescue?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Original business objectives, implementation scope, process design, configuration fit, data quality, testing issues, user adoption, reporting gaps, partner performance, governance structure, unresolved decisions and the post go live support model that was (or wasn't) put in place.",
          },
        },
        {
          "@type": "Question",
          name: "How does Contetra help improve ERP ROI after go live?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By identifying unused functionality, reducing manual workarounds, improving reporting quality, strengthening controls, improving process adoption and prioritising the fixes that actually move business outcomes, rather than chasing every open issue at once.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra work with our existing ERP implementation partner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can work alongside the existing implementation partner, internal team, auditor or management team, providing business side review, functional clarity, issue prioritisation, governance support and post go live optimisation without needing to replace anyone already involved.",
          },
        },
        {
          "@type": "Question",
          name: "Which ERP systems can Contetra support for rescue and optimisation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra provides ERP agnostic advisory and functional support across systems such as SAP S/4HANA, SAP ECC, SAP Business One, Microsoft Dynamics 365, Business Central, Oracle, NetSuite, Odoo, ERPNext, Zoho and other mid market or enterprise ERP platforms, depending on the specific project scope and technical requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a typical ERP rescue engagement take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends heavily on the severity and root cause of the issues, quick fixes like reporting or configuration corrections can move fast, while deeper problems around data quality or process design take longer. Contetra typically starts with a diagnostic review to scope this out before committing to a timeline.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation#breadcrumb",
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
          name: "Digital Transformation",
          item: "https://contetra.com/services/digital-transformation",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "ERP Project Rescue & Post-Go-Live Optimisation",
          item: "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation",
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
