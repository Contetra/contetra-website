import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Finance Transformation Consulting | ERP, CFO & AI Automation | Contetra`,
  description: `Looking for a finance business consultant? Contetra helps businesses improve finance transformation, ERP performance, reporting, controls and AI automation.`,
  keywords: `Business management consultant in mumbai, finance business consultant, finance consulting services, finance advisory services, business financial management solutions`,
  alternates: {
    canonical: "https://contetra.com",
  },
  openGraph: {
    title: `Finance Transformation & Business Advisory for Growing Businesses`,
    description: `Build financial clarity, stronger cash flow, and scalable growth with Contetra’s CFO-led advisory, ERP implementation, FP&A, and finance transformation solutions.`,
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://contetra.com#organization",
      name: "Contetra Private Limited",
      legalName: "Contetra Private Limited",
      alternateName: "Contetra",
      url: "https://contetra.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://contetra.com#logo",
        url: "https://contetra.com/assets/images/logo/contetra-main-logo.png",
        contentUrl:
          "https://contetra.com/assets/images/logo/contetra-main-logo.png",
        caption: "Contetra Private Limited",
      },
      description:
        "Contetra Private Limited is a finance transformation consulting firm offering CFO advisory, ERP implementation, FP&A, technical accounting, automation, IPO readiness, and offshore accounting services.",
      email: "growth@contetra.com",
      telephone: "+91 98338 18857",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Business Enquiries",
        telephone: "+91 98338 18857",
        email: "growth@contetra.com",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: ["https://www.linkedin.com/company/contetra-private-limited/"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://contetra.com#website",
      url: "https://contetra.com",
      name: "Contetra",
      publisher: {
        "@id": "https://contetra.com#organization",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://contetra.com#webpage",
      url: "https://contetra.com",
      name: "Finance Transformation Consulting, ERP, CFO & AI Automation | Contetra",
      description:
        "Improve planning, reporting, ERP performance and business workflows with Contetra, a finance business consultant specialising in CFO advisory, accounting and AI automation.",
      isPartOf: {
        "@id": "https://contetra.com#website",
      },
      about: {
        "@id": "https://contetra.com#professionalservice",
      },
      breadcrumb: {
        "@id": "https://contetra.com#breadcrumb",
      },
      publisher: {
        "@id": "https://contetra.com#organization",
      },
      inLanguage: "en-IN",
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://contetra.com#professionalservice",
      name: "Contetra Private Limited",
      url: "https://contetra.com",
      image: {
        "@id": "https://contetra.com#logo",
      },
      description:
        "Contetra is a finance transformation consulting firm offering ERP implementation, Virtual CFO, FP&A, technical accounting, finance automation, IPO readiness, and offshore accounting services.",
      telephone: "+91 98338 18857",
      email: "growth@contetra.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      parentOrganization: {
        "@id": "https://contetra.com#organization",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Contetra Finance Transformation Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id":
                "https://contetra.com/strategic-business-financial-management-solutions#service",
              name: "Fractional CFO, FP&A and Performance Management",
              serviceType:
                "Virtual CFO, Fractional CFO and Financial Planning and Analysis",
              url: "https://contetra.com/strategic-business-financial-management-solutions",
              description:
                "Strategic finance support covering budgeting, forecasting, cash flow planning, MIS reporting, profitability analysis, working capital and performance management.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id":
                "https://contetra.com/erp-implementation-solutions#service",
              name: "ERP Implementation, Diagnostic Review and Transformation",
              serviceType: "ERP Implementation and Functional Consulting",
              url: "https://contetra.com/erp-implementation-solutions",
              description:
                "ERP selection, business process mapping, functional consulting, implementation governance, diagnostic review, UAT, user adoption and post-go-live optimisation.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id":
                "https://contetra.com/technical-accounting-international-gaap-advisory-services#service",
              name: "Accounting and Reporting Consulting",
              serviceType:
                "Technical Accounting, Ind AS, IFRS and US GAAP Advisory",
              url: "https://contetra.com/technical-accounting-international-gaap-advisory-services",
              description:
                "Technical accounting, financial statement preparation, reporting advisory, audit support, revenue recognition, consolidation and complex accounting guidance.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": "https://contetra.com/automation#service",
              name: "Agentic AI and Business Workflow Automation",
              serviceType: "AI Automation and Business Process Automation",
              url: "https://contetra.com/automation",
              description:
                "AI-enabled automation for reporting, reconciliations, approvals, dashboards, data consolidation and repetitive finance and operational workflows.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": "https://contetra.com/ipo-readiness#service",
              name: "IPO Readiness Services",
              serviceType:
                "IPO Readiness and Pre-IPO Finance Transformation",
              url: "https://contetra.com/ipo-readiness",
              description:
                "IPO readiness support covering financial reporting, audit preparedness, internal controls, MIS improvement, technical accounting and pre-IPO finance transformation.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id":
                "https://contetra.com/offshore-accounting-services#service",
              name: "Offshore Accounting Services",
              serviceType:
                "Offshore Accounting and Finance Operations Support",
              url: "https://contetra.com/offshore-accounting-services",
              description:
                "Offshore accounting support covering bookkeeping, accounts payable, accounts receivable, reconciliations, month-end close and financial reporting.",
            },
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://contetra.com",
        },
      ],
    },
  ];

  return (
    <section className="flex flex-col justify-between overflow-x-hidden">
      <JsonLd data={structuredData} />
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
