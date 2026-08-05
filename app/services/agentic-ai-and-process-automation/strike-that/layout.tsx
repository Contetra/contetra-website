import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

const STRIKE_THAT_FAQ_PAGE_MAIN_ENTITY = [
  {
    "@type": "Question",
    name: "What is a struck off company?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A struck off company is a company that is no longer operational and has been removed from the list of registered companies.",
    },
  },
  {
    "@type": "Question",
    name: "Why is it important to check whether a company is struck off?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Checking whether a company is struck off helps businesses avoid compliance risks, vendor fraud, invalid transactions, and issues during audits or due diligence.",
    },
  },
  {
    "@type": "Question",
    name: "What details are required to check struck off company status?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Contetra requires company name, GST number, PAN details, or CIN information to verify the struck off status of a company.",
    },
  },
  {
    "@type": "Question",
    name: "Can Strike That process bulk company checks?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, Strike That can process bulk vendor and customer lists to identify struck off companies efficiently.",
    },
  },
  {
    "@type": "Question",
    name: "What information does Strike That provide in the output report?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The output report includes company status, registered business name, CIN details, and struck off status for the uploaded entities.",
    },
  },
  {
    "@type": "Question",
    name: "Who can use Strike That?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Strike That can be used by finance teams, procurement teams, compliance professionals, auditors, consultants, and businesses performing vendor due diligence.",
    },
  },
  {
    "@type": "Question",
    name: "How is Strike That different from other MCA search tools?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Strike That is designed for bulk validation and compliance workflows, enabling businesses to validate multiple vendors or customers together instead of checking companies individually.",
    },
  },
  {
    "@type": "Question",
    name: "Does Strike That support GST-based validation?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, Strike That can support GST-based validation and identify corresponding business details and company status.",
    },
  },
  {
    "@type": "Question",
    name: "Can Strike That help during audits and compliance reviews?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, Strike That helps businesses during audits, vendor reviews, compliance checks, and due diligence exercises by identifying struck off entities.",
    },
  },
  {
    "@type": "Question",
    name: "Is Strike That useful for vendor onboarding?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, Strike That helps businesses validate vendors before onboarding to reduce compliance and operational risks.",
    },
  },
];

export const metadata: Metadata = {
  title: `MCA Struck Off Companies List & Company Strike Off Status`,
  description: `Check MCA struck off company status in bulk using just GST or PAN numbers. No CIN needed. AI-powered tool with 48-hr turnaround. Schedule III compliant.`,
  keywords: `How Do YOU Search for MCA Struck-off Vendors?, mca struck off companies, strike off company mca, MCA Struck Off Vendors, list of struck off companies, List of Companies struck off by ROC, Struck Off Companies List, roc strike off company, struck off companies, Search for MCA Struck Off Companies, How to check company strike off status?, strike off listed company status, list of struck off companies, struck off companies list, strike off company list, mca strike off list, list of strike off companies, struck off companies, strike off companies list, mca struck off companies, strike off company mca`,
  alternates: {
    canonical: "https://contetra.com/strike-that",
  },
  openGraph: {
    title: `Find the List of MCA Struck Off Vendors`,
    description: `Checkout MCA struck off companies & its status in bulk using just GST or PAN numbers`,
  },
};

export default function LayoutServices({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://contetra.com/#organization",
        name: "Contetra",
        url: "https://contetra.com",
        logo: {
          "@type": "ImageObject",
          url: "https://contetra.com/assets/images/logo/contetra-main-logo.png",
          width: 150,
          height: 60,
        },
        description:
          "Contetra provides CFO advisory, ERP implementation, IFRS advisory, FP&A, IPO readiness, and finance transformation services.",
        email: "growth@contetra.com",
        telephone: "+919833818857",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "2nd floor, Swastik Disa Corporate Park, 225, Lal Bahadur Shastri Marg, near Kotak Bank",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "400086",
          addressCountry: "IN",
        },
        foundingDate: "2016-10-30",
        sameAs: [
          "https://www.linkedin.com/company/contetra",
          "https://www.facebook.com/ContetraPrivateLimited/",
          "https://twitter.com/contetra",
          "https://www.youtube.com/channel/UCcQNXLjiX-mN94n5ew4H3Xg",
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://contetra.com/strike-that/#webpage",
        url: "https://contetra.com/strike-that/",
        name: "Strike That - MCA Struck Off Companies Check",
        description:
          "Strike That by Contetra helps businesses check MCA struck off company status in bulk for vendors, customers, and compliance reporting.",
        isPartOf: { "@id": "https://contetra.com/#website" },
        about: { "@id": "https://contetra.com/strike-that/#service" },
      },
      {
        "@type": "Service",
        "@id": "https://contetra.com/strike-that/#service",
        name: "Strike That - MCA Struck Off Companies Check",
        url: "https://contetra.com/strike-that/",
        description:
          "Strike That by Contetra helps businesses check MCA struck off company status in bulk for vendors, customers, and compliance reporting.",
        provider: { "@id": "https://contetra.com/#organization" },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        serviceType: "MCA Struck Off Companies Check",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://contetra.com/strike-that/#breadcrumb",
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
            name: "Strike That",
            item: "https://contetra.com/strike-that/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://contetra.com/strike-that/#faq",
        mainEntity: STRIKE_THAT_FAQ_PAGE_MAIN_ENTITY,
      },
    ],
  };

  return (
    <section className="min-h-screen overflow-x-hidden">
      <JsonLd data={structuredData} />

      {children}

    </section>
  );
}
