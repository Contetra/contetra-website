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

// ── DATA ──────────────────────────────────────────────────────────────────────

const challenges = [
  { challenge: 'Disconnected finance and operational data', outcome: 'Integrated workflows and consistent reporting' },
  { challenge: 'Spreadsheet-led approvals and manual tracking', outcome: 'Controlled processes and workflow automation' },
  { challenge: 'Limited inventory, project or profitability visibility', outcome: 'Decision-ready dashboards and MIS' },
  { challenge: 'Weak master data and inconsistent processes', outcome: 'Standardised information and stronger controls' },
];

const msApps = [
  { app: 'Dynamics 365 Business Central', suited: 'Growing small and midsize businesses', use: 'Finance, purchasing, sales, inventory, service and selected manufacturing' },
  { app: 'Dynamics 365 Finance', suited: 'Mid-market and enterprise organisations', use: 'Financial control, budgeting, reporting and multi-entity visibility' },
  { app: 'Dynamics 365 Supply Chain', suited: 'Manufacturers and distributors', use: 'Procurement, planning, production, inventory and warehousing' },
  { app: 'Dynamics 365 Project Operations', suited: 'Consulting and project-led businesses', use: 'Projects, resources, billing and profitability' },
  { app: 'Dynamics 365 Commerce', suited: 'Retail and ecommerce businesses', use: 'Omnichannel operations, transactions and fulfilment' },
  { app: 'Microsoft Power BI', suited: 'CFOs and management teams', use: 'MIS dashboards, KPIs and profitability reporting' },
  { app: 'Microsoft Power Platform', suited: 'Teams requiring workflow automation', use: 'Approvals, process extensions and low-code applications' },
];

const services = [
  { title: 'ERP Readiness Assessment', desc: 'Review current systems, reporting gaps, process issues and data readiness before implementation begins.' },
  { title: 'Solution & Module Mapping', desc: 'Identify relevant Microsoft applications and define functional scope aligned with business goals.' },
  { title: 'Process & Control Design', desc: 'Map finance, procurement, inventory, sales, production or project workflows to ERP configuration.' },
  { title: 'Data Migration & Testing', desc: 'Support master-data structure, reconciliations, UAT and issue closure for a clean go-live.' },
  { title: 'Reporting & Automation', desc: 'Define MIS dashboards, Power BI views and controlled workflow opportunities for management insight.' },
  { title: 'Go-Live & Optimisation', desc: 'Support user adoption, stabilisation and reduced spreadsheet dependency post-implementation.' },
];

const steps = [
  { num: '01', title: 'Assess', desc: 'Understand existing systems, process challenges, reporting needs and priorities' },
  { num: '02', title: 'Design', desc: 'Map future-state workflows, controls, modules, integrations and data structures' },
  { num: '03', title: 'Implement', desc: 'Support functional configuration, data readiness, testing and issue resolution' },
  { num: '04', title: 'Report', desc: 'Align ERP information with MIS dashboards and management reporting needs' },
  { num: '05', title: 'Optimise', desc: 'Strengthen adoption, close process gaps and improve post-go-live performance' },
];

const caseStudies = [
  {
    industry: 'Fashion Retail & Distribution',
    title: 'Tailored ERP for Fast-Moving Retail Operations',
    challenge: 'Seasonal inventory, multichannel sales and vendor coordination created inefficiencies during ERP transition.',
    solution: 'Business Central functional support across inventory, purchase planning and order fulfilment.',
    outcome: 'Achieved 95% process fit and 60% faster SKU creation, with improved stock allocation and purchase planning.',
  },
  {
    industry: 'Global Glass Manufacturing',
    title: 'Integrated Operations for Better Visibility',
    challenge: 'Legacy systems and spreadsheet-led processes disconnected finance, production and inventory information.',
    solution: 'Business Central implementation integrating core finance and operational workflows.',
    outcome: 'Established a single source of truth, improved inventory visibility and streamlined procure-to-pay cycles.',
  },
  {
    industry: 'Premium Organic Exports',
    title: 'Digitised Supply Chain & Traceability',
    challenge: 'Manual farm-level data and disconnected quality and export processes limited traceability and compliance.',
    solution: 'Microsoft ERP-enabled workflows connecting procurement, inventory, quality, logistics and finance.',
    outcome: 'Improved farm-to-export traceability, compliance reporting and visibility into shipments and profitability.',
  },
  {
    industry: 'Consulting & Professional Services',
    title: 'Connected Projects, Billing & Finance',
    challenge: 'Separate project and finance tools caused billing delays, limited WIP visibility and difficulty tracking profitability.',
    solution: 'Business Central integrated with project accounting, timesheets and billing workflows.',
    outcome: 'Improved project margin visibility, streamlined billing and strengthened cash flow monitoring.',
  },
];

const faqs = [
  {
    q: 'What is Microsoft Dynamics 365 implementation?',
    a: 'Microsoft Dynamics 365 implementation is the process of selecting, configuring, testing and adopting Microsoft business applications for finance and operational requirements. It also includes process mapping, data readiness, controls, reporting and user training.',
  },
  {
    q: 'What is Microsoft Dynamics 365 Business Central?',
    a: 'Business Central is an ERP solution for small and midsize businesses that require connected finance, sales, purchasing, inventory, service and operational workflows.',
  },
  {
    q: 'Which Microsoft ERP solution is suitable for manufacturing companies?',
    a: 'Businesses with selected manufacturing requirements may evaluate Business Central. Organisations with greater production, warehouse, planning or enterprise finance complexity may evaluate Dynamics 365 Finance with Supply Chain Management.',
  },
  {
    q: 'Can Microsoft ERP support reporting and workflow automation?',
    a: 'Yes. Power BI can support management dashboards and analytics, while Power Platform can support approvals and controlled workflow extensions around ERP processes.',
  },
  {
    q: 'How should a business select a Microsoft ERP implementation consultant?',
    a: 'Evaluate functional expertise, industry understanding, data migration approach, reporting capability, testing support, user training and post-go-live optimisation.',
  },
];

const whyItems = [
  { icon: '🎯', title: 'Finance-Led Approach', desc: 'Every implementation is anchored in finance outcomes, not just software configuration.' },
  { icon: '📊', title: 'Reporting First', desc: 'We design MIS, Power BI and management dashboards as core deliverables — not afterthoughts.' },
  { icon: '🔒', title: 'Controls & Process', desc: 'We build segregation of duty, approvals and audit trails into every ERP environment we touch.' },
  { icon: '🔄', title: 'End-to-End Ownership', desc: 'From readiness to go-live and beyond — we stay with you through adoption and optimisation.' },
  { icon: '⚙️', title: 'Functional Depth', desc: 'Our consultants understand operational workflows across finance, manufacturing, distribution and services.' },
  { icon: '📈', title: 'Proven Outcomes', desc: 'We measure success by business impact — faster closes, better visibility, reduced manual effort.' },
];

export default function MicrosoftERP() {
  return (
    <>
      <HeroSection />
      <BusinessOutcomesSection challenges={challenges} />
      <EcosystemSection msApps={msApps} />
      <BusinessCentralSection />
      <ServicesSection services={services} />
      <WhyExpertiseSection whyItems={whyItems} />
      <MethodologySection steps={steps} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <FaqSection faqs={faqs} />
      <CtaSection />
    </>
  );
}
