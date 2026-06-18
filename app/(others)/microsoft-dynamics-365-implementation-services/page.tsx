import type { Metadata } from 'next';
import BusinessOutcomesSection from './components/BusinessOutcomesSection';
import BusinessCentralSection from './components/BusinessCentralSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import CtaSection from './components/CtaSection';
import EcosystemSection from './components/EcosystemSection';
import FaqSection from './components/FaqSection';
import HeroSection from './components/HeroSection';
import MethodologySection from './components/MethodologySection';
import ServicesSection from './components/ServicesSection';
import WhyExpertiseSection from './components/WhyExpertiseSection';

export const metadata: Metadata = {
  title: 'Microsoft Dynamics 365 Implementation Services | Contetra',
  description:
    "Plan your Microsoft Dynamics 365 implementation with Contetra's finance-led ERP consulting for better reporting, controls, operations and ROI.",
};

const challenges = [
  { challenge: 'Delayed MIS and month-end closing', outcome: 'Faster reporting cycles and cleaner financial control' },
  { challenge: 'Poor inventory, project or profitability visibility', outcome: 'Decision-ready operational and margin insights' },
  { challenge: 'Manual Excel-based reporting despite ERP go-live', outcome: 'ERP-linked MIS dashboards and reduced spreadsheet dependency' },
  { challenge: 'Weak process ownership across departments', outcome: 'Clear approval workflows, roles and user responsibilities' },
  { challenge: 'Data migration errors and reconciliation gaps', outcome: 'Stronger master data readiness and migration validation' },
  { challenge: 'Expensive customisations caused by unclear requirements', outcome: 'Documented scope, BRDs and module fitment before configuration' },
];

const msApps = [
  { app: 'Dynamics 365 Finance', use: 'Financial accounting, budgeting, reporting, compliance, multi-entity control and financial governance' },
  { app: 'Dynamics 365 Business Central', use: 'Finance, sales, purchasing, inventory, service management and operations for small and midsize businesses' },
  { app: 'Dynamics 365 Supply Chain Management', use: 'Procurement, planning, production, inventory, warehousing and fulfilment' },
  { app: 'Dynamics 365 Project Operations', use: 'Project planning, resource allocation, billing, project costing and profitability tracking' },
  { app: 'Dynamics 365 Sales / CRM', use: 'Lead management, opportunity tracking, customer relationship management and sales visibility' },
  { app: 'Dynamics 365 Commerce', use: 'Retail, ecommerce, customer experience, order management and fulfilment' },
  { app: 'Power BI', use: 'MIS dashboards, KPI reporting, profitability analysis and management reporting' },
  { app: 'Power Platform', use: 'Workflow automation, approvals, low-code apps and process extensions' },
];

const industries = [
  { industry: 'Manufacturing', needs: 'Production planning, inventory control, procurement, costing, quality and finance integration' },
  { industry: 'Pharma and Healthcare', needs: 'Batch tracking, compliance visibility, procurement, inventory and financial controls' },
  { industry: 'Automotive and Engineering', needs: 'BOM, production, supplier management, inventory and job costing' },
  { industry: 'Textiles and Garments', needs: 'Inventory, production stages, vendor coordination, order fulfilment and margin tracking' },
  { industry: 'Distribution and Trading', needs: 'Procurement, warehouse visibility, sales orders, receivables and working capital control' },
  { industry: 'IT and Professional Services', needs: 'Projects, timesheets, billing, resource planning and project profitability' },
  { industry: 'Retail and Ecommerce', needs: 'Inventory, sales channels, customer orders, pricing, fulfilment and reporting' },
  { industry: 'Multi-location Businesses', needs: 'Branch reporting, entity-level visibility, consolidation and standardised controls' },
];

const services = [
  { title: 'ERP Scope & ROI Audit', desc: 'Review current systems, process gaps, implementation needs, cost drivers and expected ROI.' },
  { title: 'Business Requirement Document', desc: 'Document functional requirements before configuration begins.' },
  { title: 'Process Mapping', desc: 'Map current and future-state workflows across finance, procurement, inventory, sales, projects and reporting.' },
  { title: 'Chart of Accounts and Dimensions Review', desc: 'Structure finance data for reporting, controls and MIS visibility.' },
  { title: 'Module Fitment and Solution Mapping', desc: 'Identify the right Microsoft Dynamics 365 modules based on business needs.' },
  { title: 'Data Readiness Support', desc: 'Review master data, opening balances, migration gaps and reconciliation expectations.' },
  { title: 'UAT and Issue Tracking', desc: 'Support user acceptance testing, issue documentation and closure coordination.' },
  { title: 'Vendor Coordination', desc: 'Work with technical vendors, implementation partners and internal teams to reduce execution gaps.' },
  { title: 'MIS and Power BI Reporting Design', desc: 'Define dashboards, KPIs, profitability views and management reporting requirements.' },
  { title: 'Post-Go-Live Optimisation', desc: 'Help stabilise processes, reduce Excel dependency and improve adoption after go-live.' },
];

const steps = [
  { num: '01', title: 'Scope', desc: 'Assess systems, process gaps, ERP requirements, cost drivers, risks and ROI opportunities.' },
  { num: '02', title: 'Document', desc: 'Prepare functional requirements, BRDs, reporting expectations and business ownership.' },
  { num: '03', title: 'Map', desc: 'Align finance, procurement, inventory, sales, projects and reporting workflows.' },
  { num: '04', title: 'Validate', desc: 'Support data readiness, UAT, issue tracking and vendor coordination.' },
  { num: '05', title: 'Optimise', desc: 'Stabilise processes, reduce Excel dependency and improve adoption after go-live.' },
];

const caseStudies = [
  {
    industry: 'Manufacturing Business',
    title: 'ERPNext Implementation Roadmap',
    challenge: 'The business needed better visibility across finance, inventory, procurement, manufacturing and reporting.',
    solution: 'Contetra supported process mapping, module scoping, business requirements and implementation planning.',
    outcome: 'Helped the business move from fragmented workflows to a structured ERP environment.',
  },
  {
    industry: 'Logistics Business',
    title: 'ERP Stabilisation and Process Review',
    challenge: 'ERP integration issues, reporting delays and process gaps affected adoption after implementation.',
    solution: 'Contetra supported diagnostic review, issue identification, finance process alignment and roadmap planning.',
    outcome: 'Improved system adoption and reporting reliability.',
  },
  {
    industry: 'Professional Services Business',
    title: 'Project Accounting and Billing Visibility',
    challenge: 'The service-led business needed better tracking of projects, billing, timesheets, WIP and profitability.',
    solution: 'Contetra defined functional requirements for project accounting, finance integration, billing workflows and management reporting.',
    outcome: 'Created a clearer ERP roadmap for project profitability and billing control.',
  },
  {
    industry: 'Multi-Entity Business',
    title: 'Consolidation and Reporting Improvement',
    challenge: 'The group required stronger visibility across multiple entities, intercompany transactions and reporting structures.',
    solution: 'Contetra supported reporting design, process standardisation and ERP-linked visibility.',
    outcome: 'Enabled better management decision-making across entities.',
  },
  {
    industry: 'Manufacturing and Trading Business',
    title: 'Inventory and Margin Visibility',
    challenge: 'Inventory-heavy operations needed better control over stock, procurement, sales and profitability.',
    solution: 'Contetra identified process gaps, reporting needs and ERP improvement priorities.',
    outcome: 'Reduced manual dependency and improved decision visibility.',
  },
];

const faqs = [
  {
    q: 'What is Microsoft Dynamics 365 implementation?',
    a: 'Microsoft Dynamics 365 implementation is the process of planning, configuring, testing and adopting Microsoft ERP applications for finance, operations, supply chain, projects, sales and reporting. It includes process mapping, data readiness, module selection, UAT, training and post-go-live support.',
  },
  {
    q: 'Which businesses should consider Microsoft Dynamics 365?',
    a: 'Businesses that need stronger finance control, operational visibility, reporting automation, multi-location management, inventory control, project tracking or scalable ERP workflows can consider Microsoft Dynamics 365.',
  },
  {
    q: 'Is Microsoft Dynamics 365 better than Odoo, SAP or ERPNext?',
    a: 'There is no single best ERP for every business. Microsoft Dynamics 365, SAP, Odoo, ERPNext and Oracle each serve different business needs. The right ERP depends on business size, process complexity, budget, industry, reporting needs and integration requirements.',
  },
  {
    q: 'What modules should be implemented first?',
    a: 'Most businesses should begin with core modules such as finance, procurement, sales, inventory and reporting. Manufacturing, project-based or retail businesses may also need production, project operations, CRM, commerce or supply chain modules.',
  },
  {
    q: 'Why do ERP implementations fail?',
    a: 'ERP implementations often fail because of unclear requirements, poor process mapping, weak data quality, lack of user training, excessive customisation, poor reporting design and insufficient leadership involvement.',
  },
  {
    q: 'How does Contetra help during ERP implementation?',
    a: 'Contetra helps with ERP scope assessment, BRD preparation, process mapping, module fitment, Chart of Accounts review, data readiness, UAT support, vendor coordination, reporting design and post-go-live optimisation.',
  },
  {
    q: 'Does Contetra handle technical configuration?',
    a: 'Contetra primarily supports the functional, financial, process and reporting side of ERP implementation. We can work alongside technical implementation partners to ensure the system is aligned with business requirements and management expectations.',
  },
  {
    q: 'What is an ERP Scope & ROI Audit?',
    a: 'An ERP Scope & ROI Audit is a structured review of your current systems, business processes, ERP requirements, expected benefits, implementation risks and ROI opportunities. It helps leadership understand what should be implemented, why it matters and how it can create measurable business value.',
  },
];

const whyItems = [
  { title: 'Finance-led ERP approach', desc: 'ERP workflows are designed around reporting, controls and decision-making.' },
  { title: 'Strong process understanding', desc: 'Better alignment across finance, procurement, inventory, sales and operations.' },
  { title: 'Cross-industry experience', desc: 'Relevant insights for manufacturing, services, trading, pharma, retail and distribution.' },
  { title: 'BRD and documentation discipline', desc: 'Clear scope before implementation reduces rework and confusion.' },
  { title: 'Vendor oversight support', desc: 'Better coordination between business users and technical teams.' },
  { title: 'Reporting and MIS focus', desc: 'ERP data is structured for management decisions, not just accounting entries.' },
  { title: 'Post-go-live optimisation', desc: 'Helps businesses stabilise processes and improve adoption after implementation.' },
];

export default function MicrosoftERP() {
  return (
    <>
      <HeroSection />
      <BusinessOutcomesSection challenges={challenges} />
      <EcosystemSection msApps={msApps} />
      <BusinessCentralSection industries={industries} />
      <ServicesSection services={services} />
      <WhyExpertiseSection whyItems={whyItems} />
      <MethodologySection steps={steps} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <FaqSection faqs={faqs} />
      <CtaSection />
    </>
  );
}
