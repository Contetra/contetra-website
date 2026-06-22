import AdvisorySection from "./components/AdvisorySection";
import BusinessCentralSection from "./components/BusinessCentralSection";
import BusinessOutcomesSection from "./components/BusinessOutcomesSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import CtaSection from "./components/CtaSection";
import EcosystemSection from "./components/EcosystemSection";
import FaqSection from "./components/FaqSection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WhyExpertiseSection from "./components/WhyExpertiseSection";

const challenges = [
  "Delayed MIS and month-end closing",
  "Poor inventory, project or profitability visibility",
  "Manual Excel-based reporting despite ERP go-live",
  "Weak process ownership across departments",
  "Data migration errors and reconciliation gaps",
  "Expensive customisations caused by unclear requirements",
];

const msApps = [
  { app: "Dynamics 365 Finance", use: "Financial accounting, budgeting, reporting, compliance, multi-entity control and financial governance" },
  { app: "Dynamics 365 Business Central", use: "Finance, sales, purchasing, inventory, service management and operations for small and midsize businesses" },
  { app: "Dynamics 365 Supply Chain Management", use: "Procurement, planning, production, inventory, warehousing and fulfilment" },
  { app: "Dynamics 365 Project Operations", use: "Project planning, resource allocation, billing, project costing and profitability tracking" },
  { app: "Dynamics 365 Sales / CRM", use: "Lead management, opportunity tracking, customer relationship management and sales visibility" },
  { app: "Dynamics 365 Commerce", use: "Retail, ecommerce, customer experience, order management and fulfilment" },
  { app: "Power BI", use: "MIS dashboards, KPI reporting, profitability analysis and management reporting" },
  { app: "Power Platform", use: "Workflow automation, approvals, low-code apps and process extensions" },
];

const industries = [
  { industry: "Manufacturing", needs: "Production planning, inventory control, procurement, costing, quality and finance integration" },
  { industry: "Pharma and Healthcare", needs: "Batch tracking, compliance visibility, procurement, inventory and financial controls" },
  { industry: "Automotive and Engineering", needs: "BOM, production, supplier management, inventory and job costing" },
  { industry: "Textiles and Garments", needs: "Inventory, production stages, vendor coordination, order fulfilment and margin tracking" },
  { industry: "Distribution and Trading", needs: "Procurement, warehouse visibility, sales orders, receivables and working capital control" },
  { industry: "IT and Professional Services", needs: "Projects, timesheets, billing, resource planning and project profitability" },
  { industry: "Retail and Ecommerce", needs: "Inventory, sales channels, customer orders, pricing, fulfilment and reporting" },
  { industry: "Multi-location Businesses", needs: "Branch reporting, entity-level visibility, consolidation and standardised controls" },
];

const services = [
  { title: "ERP Scope & ROI Audit", desc: "Review current systems, process gaps, implementation needs, cost drivers and expected ROI" },
  { title: "Business Requirement Document", desc: "Document functional requirements before configuration begins" },
  { title: "Process Mapping", desc: "Map current and future-state workflows across finance, procurement, inventory, sales, projects and reporting" },
  { title: "Chart of Accounts and Dimensions Review", desc: "Structure finance data for reporting, controls and MIS visibility" },
  { title: "Module Fitment and Solution Mapping", desc: "Identify the right Microsoft Dynamics 365 modules based on business needs" },
  { title: "Data Readiness Support", desc: "Review master data, opening balances, migration gaps and reconciliation expectations" },
  { title: "UAT and Issue Tracking", desc: "Support user acceptance testing, issue documentation and closure coordination" },
  { title: "Vendor Coordination", desc: "Work with technical vendors, implementation partners and internal teams to reduce execution gaps" },
  { title: "MIS and Power BI Reporting Design", desc: "Define dashboards, KPIs, profitability views and management reporting requirements" },
  { title: "Post-Go-Live Optimisation", desc: "Help stabilise processes, reduce Excel dependency and improve adoption after go-live" },
];

const caseStudies = [
  {
    title: "Manufacturing Business: ERPNext Implementation Roadmap",
    body: "A growing manufacturing company needed better visibility across finance, inventory, procurement, manufacturing and reporting. Contetra supported process mapping, module scoping, business requirements and implementation planning to help the business move from fragmented workflows to a structured ERP environment.",
  },
  {
    title: "Logistics Business: ERP Stabilisation and Process Review",
    body: "A logistics company faced ERP integration issues, reporting delays and process gaps after implementation. Contetra supported diagnostic review, issue identification, finance process alignment and roadmap planning to improve system adoption and reporting reliability.",
  },
  {
    title: "Professional Services Business: Project Accounting and Billing Visibility",
    body: "A service-led business needed better tracking of projects, billing, timesheets, WIP and profitability. Contetra helped define functional requirements for project accounting, finance integration, billing workflows and management reporting.",
  },
  {
    title: "Multi-Entity Business: Consolidation and Reporting Improvement",
    body: "A group business required stronger visibility across multiple entities, intercompany transactions and reporting structures. Contetra supported reporting design, process standardisation and ERP-linked visibility for better management decision-making.",
  },
  {
    title: "Manufacturing and Trading Business: Inventory and Margin Visibility",
    body: "A business with inventory-heavy operations needed better control over stock, procurement, sales and profitability. Contetra helped identify process gaps, reporting needs and ERP improvements to reduce manual dependency and improve decision visibility.",
  },
];

const whyItems = [
  { title: "Finance-led ERP approach", desc: "ERP workflows are designed around reporting, controls and decision-making" },
  { title: "Strong process understanding", desc: "Better alignment across finance, procurement, inventory, sales and operations" },
  { title: "Cross-industry experience", desc: "Relevant insights for manufacturing, services, trading, pharma, retail and distribution" },
  { title: "BRD and documentation discipline", desc: "Clear scope before implementation reduces rework and confusion" },
  { title: "Vendor oversight support", desc: "Better coordination between business users and technical teams" },
  { title: "Reporting and MIS focus", desc: "ERP data is structured for management decisions, not just accounting entries" },
  { title: "Post-go-live optimisation", desc: "Helps businesses stabilise processes and improve adoption after implementation" },
];

const faqs = [
  { q: "What is Microsoft Dynamics 365 implementation?", a: "Microsoft Dynamics 365 implementation is the process of planning, configuring, testing and adopting Microsoft ERP applications for finance, operations, supply chain, projects, sales and reporting. It includes process mapping, data readiness, module selection, UAT, training and post-go-live support." },
  { q: "Which businesses should consider Microsoft Dynamics 365?", a: "Businesses that need stronger finance control, operational visibility, reporting automation, multi-location management, inventory control, project tracking or scalable ERP workflows can consider Microsoft Dynamics 365." },
  { q: "Is Microsoft Dynamics 365 better than Odoo, SAP or ERPNext?", a: "There is no single best ERP for every business. Microsoft Dynamics 365, SAP, Odoo, ERPNext and Oracle each serve different business needs. The right ERP depends on business size, process complexity, budget, industry, reporting needs and integration requirements." },
  { q: "What modules should be implemented first?", a: "Most businesses should begin with core modules such as finance, procurement, sales, inventory and reporting. Manufacturing, project-based or retail businesses may also need production, project operations, CRM, commerce or supply chain modules." },
  { q: "Why do ERP implementations fail?", a: "ERP implementations often fail because of unclear requirements, poor process mapping, weak data quality, lack of user training, excessive customisation, poor reporting design and insufficient leadership involvement." },
  { q: "How does Contetra help during ERP implementation?", a: "Contetra helps with ERP scope assessment, BRD preparation, process mapping, module fitment, Chart of Accounts review, data readiness, UAT support, vendor coordination, reporting design and post-go-live optimisation." },
  { q: "Does Contetra handle technical configuration?", a: "Contetra primarily supports the functional, financial, process and reporting side of ERP implementation. We can work alongside technical implementation partners to ensure the system is aligned with business requirements and management expectations." },
  { q: "What is an ERP Scope & ROI Audit?", a: "An ERP Scope & ROI Audit is a structured review of your current systems, business processes, ERP requirements, expected benefits, implementation risks and ROI opportunities. It helps leadership understand what should be implemented, why it matters and how it can create measurable business value." },
];

export default function MicrosoftERP() {
  return (
    <>
      <HeroSection />
      <BusinessOutcomesSection challenges={challenges} />
      <EcosystemSection msApps={msApps} />
      <BusinessCentralSection industries={industries} />
      <ServicesSection services={services} />
      <AdvisorySection />
      <CaseStudiesSection caseStudies={caseStudies} />
      <WhyExpertiseSection whyItems={whyItems} />
      <FaqSection faqs={faqs} />
      <CtaSection />
    </>
  );
}
