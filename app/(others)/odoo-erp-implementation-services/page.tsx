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
  { challenge: 'Finance and operations are disconnected', outcome: 'Integrated processes and consistent reporting' },
  { challenge: 'Inventory, purchase or sales tracking is manual', outcome: 'Structured workflows and better visibility' },
  { challenge: 'Manufacturing visibility is weak', outcome: 'BOM, work orders, production and costing control' },
  { challenge: 'MIS is delayed or Excel-dependent', outcome: 'Dashboard-ready reporting and decision visibility' },
  { challenge: 'Customer and sales data are scattered', outcome: 'CRM, quotations, orders and customer visibility' },
  { challenge: 'Users follow different processes', outcome: 'Standard workflows, roles and approval controls' },
];

const odooModules = [
  { area: 'Accounting and Finance', need: 'Invoicing, accounting workflows, receivables, payables, taxes, reporting and financial control' },
  { area: 'CRM and Sales', need: 'Lead management, opportunities, quotations, sales orders, customers and sales visibility' },
  { area: 'Purchase and Inventory', need: 'Supplier processes, purchase orders, warehouses, stock movements and inventory control' },
  { area: 'Manufacturing', need: 'BOM, production planning, material requirements, work orders, costing and shopfloor visibility' },
  { area: 'Projects and Services', need: 'Tasks, timesheets, project billing, service delivery tracking and profitability visibility' },
  { area: 'Ecommerce and POS', need: 'Retail sales, online orders, POS billing, inventory linkage and customer transactions' },
  { area: 'HR and Employee Operations', need: 'Employee workflows, expenses, attendance, approvals and operational processes' },
  { area: 'Reporting and Dashboards', need: 'MIS, operational reports, financial visibility and management dashboards' },
];

const services = [
  { title: 'ERP Scope & ROI Audit', desc: 'Review current systems, process gaps, Odoo requirements, cost drivers, risks and ROI opportunities' },
  { title: 'ERP Readiness Assessment', desc: 'Assess existing systems, reporting gaps, process issues and implementation priorities' },
  { title: 'Module and Scope Planning', desc: 'Align Odoo applications with business functions, growth plans and reporting requirements' },
  { title: 'Business Process Mapping', desc: 'Define workflows across finance, procurement, sales, inventory, manufacturing, projects and reporting' },
  { title: 'Odoo Data Migration Support', desc: 'Support data cleanup, mapping, opening balances, validation and reconciliation planning' },
  { title: 'Reporting and Control Design', desc: 'Structure MIS, approvals, audit trails, dashboards and management reporting requirements' },
  { title: 'UAT and User Readiness', desc: 'Coordinate testing, issue closure, user roles, training and adoption support' },
  { title: 'Vendor and Technical Team Coordination', desc: 'Bridge the gap between business users and the Odoo technical implementation team' },
  { title: 'Post-Go-Live Optimisation', desc: 'Identify workflow gaps, reporting improvements and enhancement opportunities after go-live' },
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
  { type: 'Distribution and Trading Companies', focus: 'Procurement, sales orders, warehouses, inventory tracking and reporting' },
  { type: 'Retail and Ecommerce Brands', focus: 'POS, ecommerce, inventory, customer workflows, sales and accounting' },
  { type: 'Professional Services Firms', focus: 'CRM, projects, timesheets, billing, collections and project profitability' },
  { type: 'Pipe / Industrial Manufacturing', focus: 'Production planning, QC, inventory, purchase and reporting integration' },
  { type: 'Insurance and Subscription Businesses', focus: 'CRM, subscription workflows, renewals, commissions and customer data' },
  { type: 'Multi-Department Growing Companies', focus: 'Finance, CRM, purchase, inventory, approvals and management reporting' },
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
    a: 'Odoo is a modular suite of business applications that can support accounting, CRM, sales, purchase, inventory, manufacturing, ecommerce, projects, POS and other operational processes.',
  },
  {
    q: 'Who should consider Odoo ERP?',
    a: 'Businesses looking for Odoo ERP are usually trying to move beyond spreadsheets, disconnected systems, weak reporting, manual inventory tracking or limited process control. Odoo may suit growing SMEs, manufacturers, trading businesses, retailers, ecommerce brands, service companies and multi-department organisations.',
  },
  {
    q: 'Why is an Odoo functional consultant important?',
    a: 'An Odoo functional consultant helps map business requirements to modules, workflows, approvals, reports, migration needs and user responsibilities. This reduces the risk of implementing a system that does not fit actual business operations.',
  },
  {
    q: 'What does Odoo Data migration involve?',
    a: 'Odoo Data migration may include master-data cleanup, field mapping, opening balances, customer and vendor information, inventory data, validation and reconciliation before the system is used.',
  },
  {
    q: 'How long does an Odoo ERP implementation take?',
    a: 'The timeline depends on modules, locations, users, data quality, integrations, customisation, testing and training requirements. A focused implementation is generally faster than a multi-function or manufacturing-led rollout.',
  },
  {
    q: 'Is Odoo better than SAP, Microsoft Dynamics 365, Oracle or ERPNext?',
    a: 'There is no single best ERP for every business. Odoo, SAP, Microsoft Dynamics 365, Oracle and ERPNext serve different needs. The right choice depends on business size, budget, industry, process complexity, reporting needs and customisation expectations.',
  },
  {
    q: 'How should a business select an Odoo service provider?',
    a: 'A business should evaluate relevant module experience, industry understanding, migration methodology, customisation discipline, reporting capability, testing support, training approach and post-go-live optimisation before selecting an Odoo service provider.',
  },
  {
    q: 'How does Contetra help during Odoo implementation?',
    a: 'Contetra helps with ERP readiness assessment, module planning, process mapping, Odoo Data migration support, reporting design, UAT coordination, vendor alignment and post-go-live optimisation.',
  },
  {
    q: 'Does Contetra handle Odoo technical configuration?',
    a: 'Contetra primarily supports the functional, financial, process and reporting side of Odoo implementation. We can work with Odoo technical partners or internal teams to ensure the system is aligned with business requirements and leadership expectations.',
  },
  {
    q: 'What is an ERP Scope & ROI Audit?',
    a: 'An ERP Scope & ROI Audit is a structured review of your current systems, process gaps, Odoo requirements, expected benefits, implementation risks and ROI opportunities. It helps leadership understand what to implement, why it matters and how Odoo can create measurable business value.',
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
