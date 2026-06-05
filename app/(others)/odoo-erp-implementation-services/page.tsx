import HeroSection from './components/HeroSection';
import WhyOdooSection from './components/WhyOdooSection';
import ModulesSection from './components/ModulesSection';
import ServicesSection from './components/ServicesSection';
import FunctionalConsultingSection from './components/FunctionalConsultingSection';
import BusinessModelsSection from './components/BusinessModelsSection';
import MethodologySection from './components/MethodologySection';
import PartnerSelectionSection from './components/PartnerSelectionSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';

// ── DATA ──────────────────────────────────────────────────────────────────────

const challenges = [
  { challenge: 'Disconnected finance and operational data', outcome: 'Integrated processes and consistent reporting' },
  { challenge: 'Manual inventory, purchase or sales tracking', outcome: 'Structured workflows and better visibility' },
  { challenge: 'Limited management reporting', outcome: 'MIS dashboards and decision-ready information' },
  { challenge: 'Excessive Excel dependence', outcome: 'Controlled system-based processes' },
];

const odooModules = [
  { area: 'Accounting & Finance', need: 'Invoicing, accounting workflows, receivables, payables and reporting' },
  { area: 'CRM & Sales', need: 'Lead management, quotations, sales orders and customer visibility' },
  { area: 'Purchase & Inventory', need: 'Vendor processes, procurement, warehouse tracking and stock control' },
  { area: 'Manufacturing', need: 'Production planning, material requirements, work orders and costing visibility' },
  { area: 'Projects & Services', need: 'Tasks, timesheets, project billing and delivery tracking' },
  { area: 'Ecommerce & POS', need: 'Retail or online sales connected with inventory and finance' },
  { area: 'HR & Employee Operations', need: 'Employee workflows, expenses and related processes' },
];

const services = [
  { title: 'ERP Readiness Assessment', desc: 'Review existing systems, process gaps, reporting needs and implementation priorities before starting.' },
  { title: 'Module & Scope Planning', desc: 'Align Odoo applications with business functions and future scalability requirements.' },
  { title: 'Business Process Mapping', desc: 'Define workflows across finance, procurement, sales, inventory, manufacturing or projects.' },
  { title: 'Odoo Data Migration', desc: 'Support data cleanup, mapping, opening balances, validation and reconciliation planning.' },
  { title: 'Reporting & Control Design', desc: 'Structure MIS, approvals, audit trails and management-reporting requirements from go-live.' },
  { title: 'Testing & User Readiness', desc: 'Coordinate UAT, issue closure, training and user adoption support across your team.' },
  { title: 'Post-Go-Live Optimisation', desc: 'Identify workflow gaps, reporting improvements and enhancement opportunities after launch.' },
];

const steps = [
  { num: '01', title: 'Assess', desc: 'Understand current systems, reporting gaps, process pain points and business objectives' },
  { num: '02', title: 'Define', desc: 'Finalise modules, workflows, controls, data requirements and implementation scope' },
  { num: '03', title: 'Prepare', desc: 'Support master-data readiness, migration planning, testing scenarios and user roles' },
  { num: '04', title: 'Implement', desc: 'Coordinate functional requirements, testing, reporting and stakeholder alignment' },
  { num: '05', title: 'Optimise', desc: 'Strengthen adoption, improve workflows and identify post-go-live enhancements' },
];

const businessTypes = [
  { type: 'Manufacturing Businesses', focus: 'Purchase, inventory, manufacturing, quality, costing and finance visibility' },
  { type: 'Distribution & Trading', focus: 'Procurement, sales, warehouses, inventory tracking and reporting' },
  { type: 'Retail & Ecommerce Brands', focus: 'POS, ecommerce, inventory, sales, customer workflows and accounting' },
  { type: 'Professional Services Firms', focus: 'CRM, projects, timesheets, billing, collections and profitability' },
  { type: 'Multi-Department Companies', focus: 'Finance, CRM, purchase, inventory, approvals and management reporting' },
];

const decisionAreas = [
  { area: 'Module selection', question: 'Which applications solve the real business requirement?' },
  { area: 'Process design', question: 'Which existing workflows should be simplified or standardised?' },
  { area: 'Data readiness', question: 'What master data and opening information must be cleaned before migration?' },
  { area: 'Customisation', question: 'What is genuinely needed beyond standard configuration?' },
  { area: 'Reporting', question: 'Which MIS reports, controls and dashboards are required from day one?' },
  { area: 'Adoption', question: 'How will business users be trained and supported after go-live?' },
];

const evaluationAreas = [
  { area: 'Functional capability', review: 'Experience across the Odoo modules relevant to your business' },
  { area: 'Industry understanding', review: 'Familiarity with workflows similar to your operating model' },
  { area: 'Migration approach', review: 'Method for cleaning, mapping and reconciling business data' },
  { area: 'Customisation discipline', review: 'Ability to avoid unnecessary development and upgrade complications' },
  { area: 'Reporting expertise', review: 'Understanding of MIS, controls, margins, inventory and financial visibility' },
  { area: 'Support model', review: 'Training, hypercare, issue resolution and ongoing optimisation' },
];

const caseStudies = [
  {
    industry: 'Pipe Manufacturing',
    title: 'Streamlined Operations for a Pipe Manufacturer',
    challenge: 'Legacy ERP systems created inefficiencies across manufacturing, inventory, purchase, accounting and quality control.',
    solution: 'Odoo modules for manufacturing, PLM, QC, inventory, sales, purchase, accounting and reporting were implemented.',
    outcome: 'Improved manufacturing tracking, stronger inventory visibility, integrated workflows and automated quality checks.',
  },
  {
    industry: 'E-commerce Platform',
    title: 'Optimised Warehouse Operations for a Leading E-commerce Business',
    challenge: 'Outdated ERP processes caused order fulfilment delays, weak inventory visibility and system performance issues.',
    solution: 'Migrated to Odoo Enterprise with sales, purchase, inventory, barcode and accounting modules, with priority-based warehouse allocation.',
    outcome: 'Faster order fulfilment, better warehouse efficiency, reduced downtime and improved scalability during peak order volumes.',
  },
  {
    industry: 'Insurance Company',
    title: 'CRM & Subscription Management for an Insurance Business',
    challenge: 'Dispersed customer data, inefficient subscription management, commission issues and limited real-time policy tracking.',
    solution: 'Odoo CRM and subscription management implemented to centralise customer data, policies, claims and renewal workflows.',
    outcome: 'Improved customer engagement, automated renewals, real-time policy tracking and streamlined commission calculation.',
  },
  {
    industry: 'Retail & Wholesale Business',
    title: 'Streamlined Retail and Wholesale Operations with POS',
    challenge: 'Scattered data, inefficient stock transfers, negative stock issues and inaccurate financial records affected daily operations.',
    solution: 'Odoo 17 implemented with inventory, POS, automated journal entries and asset management modules.',
    outcome: 'Centralised data access, automated item transfers, accurate landed-cost calculation, customised reporting and improved stock control.',
  },
];

const faqs = [
  {
    q: 'What is Odoo ERP?',
    a: 'Odoo is a modular suite of business applications that can support accounting, CRM, sales, purchase, inventory, manufacturing, ecommerce, projects, point of sale and other operational processes.',
  },
  {
    q: 'Who should consider Odoo ERP?',
    a: 'Growing businesses requiring integrated operations, improved reporting, stronger inventory or process control, and reduced reliance on spreadsheets may consider Odoo based on their business requirements.',
  },
  {
    q: 'Why is an Odoo functional consultant important?',
    a: 'An Odoo functional consultant helps map business requirements to modules, workflows, approvals, reports, migration needs and user responsibilities, reducing the risk of an implementation that does not fit actual operations.',
  },
  {
    q: 'What does Odoo Data migration involve?',
    a: 'Odoo Data migration may include master-data cleanup, field mapping, opening balances, customer and vendor information, inventory data, validation and reconciliation before system use.',
  },
  {
    q: 'How long does an Odoo ERP implementation take?',
    a: 'The timeline depends on modules, locations, users, data quality, integrations, customisation, testing and training requirements. A focused implementation is generally faster than a multi-function or manufacturing-led rollout.',
  },
  {
    q: 'How should a business select an Odoo service provider?',
    a: 'Evaluate relevant module experience, industry understanding, migration methodology, customisation approach, reporting capability, testing support, training and post-go-live optimisation.',
  },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function OdooERP() {
  return (
    <>
      <HeroSection />
      <WhyOdooSection challenges={challenges} />
      <ModulesSection modules={odooModules} />
      <ServicesSection services={services} />
      <FunctionalConsultingSection decisionAreas={decisionAreas} />
      <BusinessModelsSection businessTypes={businessTypes} />
      <MethodologySection steps={steps} />
      <PartnerSelectionSection evaluationAreas={evaluationAreas} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <FaqSection faqs={faqs} />
      <CtaSection />
    </>
  );
}
