import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `CFO Advisory & Finance Transformation Services | ERP, FP&A,  IFRS`,
  description: `Contetra helps CFOs and growing businesses with ERP implementation, FP&A strategy, and IFRS & IPO readiness. Serving 100+ clients globally.`,
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
      url: "https://contetra.com",
      logo: "https://contetra.com/assets/images/logo/contetra-main-logo.png",
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
      "@type": "ProfessionalService",
      "@id": "https://contetra.com#professionalservice",
      name: "Contetra Private Limited",
      url: "https://contetra.com",
      image: "https://contetra.com/assets/images/logo/contetra-main-logo.png",
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
                "https://contetra.com/erp-implementation-solutions#service",
              name: "ERP Implementation Services",
              serviceType: "ERP Implementation and Functional Consulting",
              url: "https://contetra.com/erp-implementation-solutions",
              description:
                "ERP implementation and functional consulting services for growing businesses, including SAP, Microsoft Dynamics, ERPNext, Odoo, ERP health checks, and process transformation.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id":
                "https://contetra.com/technical-accounting-international-gaap-advisory-services#service",
              name: "Technical Accounting Advisory Services",
              serviceType:
                "Technical Accounting, Ind AS, IFRS and GAAP Advisory",
              url: "https://contetra.com/technical-accounting-international-gaap-advisory-services",
              description:
                "Technical accounting advisory services for businesses requiring Ind AS, IFRS, US GAAP, financial reporting, audit support, revenue recognition, consolidation, and complex accounting guidance.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id":
                "https://contetra.com/strategic-business-financial-management-solutions#service",
              name: "FP&A and Virtual CFO Services",
              serviceType:
                "Financial Planning and Analysis, Virtual CFO and Fractional CFO Services",
              url: "https://contetra.com/strategic-business-financial-management-solutions",
              description:
                "FP&A, Virtual CFO and Fractional CFO services for growing businesses, including budgeting, forecasting, cash flow planning, MIS reporting, working capital management, profitability analysis, and strategic finance advisory.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": "https://contetra.com/automation#service",
              name: "Finance Process Automation Services",
              serviceType: "Finance Automation and Business Process Automation",
              url: "https://contetra.com/automation",
              description:
                "Finance process automation services for businesses looking to automate reconciliations, reporting, approvals, workflows, data consolidation, dashboards, and repetitive finance and operations processes.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": "https://contetra.com/ipo-readiness#service",
              name: "IPO Readiness Services",
              serviceType:
                "IPO Readiness, Financial Reporting and Pre-IPO Advisory",
              url: "https://contetra.com/ipo-readiness",
              description:
                "IPO readiness services for businesses preparing for public listing, including financial reporting readiness, audit preparedness, internal controls, working capital review, MIS improvement, technical accounting, and pre-IPO finance transformation.",
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
                "Offshore Accounting, Bookkeeping and Finance Operations Support",
              url: "https://contetra.com/offshore-accounting-services",
              description:
                "Offshore accounting services for businesses requiring bookkeeping, accounts payable, accounts receivable, reconciliations, month-end support, financial reporting, remote accounting operations, and finance process support.",
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
