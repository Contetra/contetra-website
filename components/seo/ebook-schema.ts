const SITE_URL = "https://contetra.com";
const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL ?? "https://contetra.b-cdn.net";

type EbookMeta = {
  slug: string;
  imagePath: string;
};

const ebookSchemaMap: Record<string, EbookMeta> = {
  "8 Actionable Strategies to Improve Profit After Tax": {
    slug: "8-actionable-strategies-to-improve-profit-after-tax-ebook",
    imagePath:
      "/ebooks/images/8-Actionable-Strategies-to-Improve-Profit-After-Tax.png",
  },
  "Business Insights into IFRS 16": {
    slug: "business-insights-into-ifrs-16",
    imagePath: "/ebooks/images/Business-Insights-into-IFRS-16.png",
  },
  "Business Insights into IFRS 9": {
    slug: "business-insights-into-ifrs-9",
    imagePath: "/ebooks/images/Business-insights-into-IFRS-9.png",
  },
  "Business Insights into Revenue Recognition": {
    slug: "business-insights-into-revenue-recognition",
    imagePath: "/ebooks/images/business-insights-into-revenue-recognition.png",
  },
  "Business Growth Compliance": {
    slug: "business-growth-compliance",
    imagePath: "/ebooks/images/Business-Growth-Compliance.png",
  },
  "ERP Implementation Unveiled": {
    slug: "erp-implementation-unveiled",
    imagePath: "/ebooks/images/ERP-Implementation-Decoded.png",
  },
  "How to Optimise Your Customers: A Comprehensive Guide to Achieve 10x Growth":
    {
      slug: "how-to-optimise-your-customers-a-comprehensive-guide-achieve-10x-growth",
      imagePath:
        "/ebooks/images/How-to-optimise-your-customers-a-Comprehensive-Guide-to-Achieve-10X-Growth.png",
    },
  "Implementable ECL Template for Non-BFSI Sector": {
    slug: "implementable-ecl-template-for-non-bfsi-sector",
    imagePath:
      "/ebooks/images/Implementable-ECL-template-for-non-BFSI-sector.png",
  },
  "Interview Prep Guide for Careers in Financial Reporting": {
    slug: "interview-prep-guide-for-careers-in-financial-reporting",
    imagePath:
      "/ebooks/images/Interview-Prep-Guide-for-Careers-in-Financial-Reporting.png",
  },
  "MSME Collection Advantage: New Amendment Explained": {
    slug: "msme-collection-advantage-new-amendment-explained",
    imagePath:
      "/ebooks/images/MSME-Collection-Advantage-New-Amendment-Explained.png",
  },
  "Maximize Profitability: Choose the Right ERP": {
    slug: "maximize-profitability-choose-the-right-erp",
    imagePath: "/ebooks/images/Maximise-Profitability-Choose-the-right-ERP.png",
  },
  "Period Closure Checklist": {
    slug: "period-closure-checklist",
    imagePath: "/ebooks/images/Period-closure-checklist.png",
  },
  "Revamping Revenue unveiling ASC 606 Implications on Acquisition memo": {
    slug: "revamping-revenue-unveiling-asc-606-implications-on-acquisition-memo",
    imagePath:
      "/ebooks/images/revamping-Revenue-unveiling-ASC-606-Implications-on-Acquisition-memo.png",
  },
  "ROI Driven Trainings with Contetra": {
    slug: "roi-driven-trainings-with-contetra",
    imagePath: "/ebooks/images/ROI-Driven-Trainings-with-Contetra.png",
  },
  "Strategic Business Budget Guide": {
    slug: "strategic-business-budget-guide",
    imagePath: "/ebooks/images/how-to-master-business-budgeting.png",
  },
  "The CFO's guide to Controlling ERP Costs:6 Strategies to Stay on Budget": {
    slug: "the-cfos-guide-to-controlling-erp-costs6-strategies-to-stay-on-budget-ebook",
    imagePath:
      "/ebooks/images/The-CFOs-guide-to-Controlling-ERP-Costs-6-Strategies-to-Stay-on-Budget.png",
  },
  "Top 20 Questions Your FY 22-23 Business Plan Must Answer": {
    slug: "top-20-questions-your-fy-22-23-business-plan-must-answer",
    imagePath:
      "/ebooks/images/Top-20-Questions-your-FY-22-23-Business-Plan-must-answer-3.png",
  },
  "Turbocharge Your Finance Function Through Offshore Accounting": {
    slug: "turbocharge-your-finance-function-through-offshore-accounting",
    imagePath:
      "/ebooks/images/TURBOCHARGE-YOUR-FINANCE-FUNCTION-THROUGH-OFFSHORE-ACCOUNTING.png",
  },
  "Unlocking 200 Revenue Growth: The Chhabi Success Story": {
    slug: "unlocking-200-revenue-growth-the-chhabi-success-story",
    imagePath:
      "/ebooks/images/Unlocking-200-Revenue-Growth-the-Chhabi-success-story.png",
  },
  "Year End Closure Checklist for Business Owners": {
    slug: "year-end-closure-checklist-for-business-owners",
    imagePath: "/ebooks/images/Year-end-Closure-Checklist-for-Business-Owners.png",
  },
  "Your Financial Playbook fy 2025-26 edition": {
    slug: "your-financial-playbook-fy-2025-26-edition",
    imagePath:
      "/ebooks/images/Your-Financial-Playbook-fy-2025-26-edition-cover-page.png",
  },
};

export function getEbookSchema(title: string) {
  const entry = ebookSchemaMap[title];
  const slug = entry?.slug;
  const imagePath = entry?.imagePath;

  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: title || "Ebook",
    url: slug ? `${SITE_URL}/${slug}/` : `${SITE_URL}/ebooks/`,
    image: imagePath ? `${CDN_URL}${imagePath}` : undefined,
    publisher: {
      "@type": "Organization",
      name: "Contetra",
      url: `${SITE_URL}/`,
    },
  };
}
