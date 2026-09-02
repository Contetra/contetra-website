export interface CaseStudy {
  client: string;
  industry: string;
  category: "ERP" | "FP&A" | "Technical Accounting" | "Training";
  t1: string;
  t2: string;
  t3: string;
  result: string;
  training: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    "client": "A M Ozonics Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Finance team was operating without a structured monthly review and advisory rhythm",
    "t2": "Contetra embedded a dedicated FP&A mentoring cadence - monthly reviews, KPI tracking, and coaching",
    "t3": "Built analytical capability within the team and improved the quality of financial decision-making",
    "result": "Finance function elevated with structured advisory; business decisions backed by better data",
    "training": false
  },
  {
    "client": "AB14 Fashion Private Limited",
    "industry": "Apparel / Textile",
    "category": "FP&A",
    "t1": "Business needed a reliable, structured approach to budgeting and monthly financial reporting",
    "t2": "Contetra delivered ongoing FP&A advisory - budgeting support, actuals review, and management commentary",
    "t3": "Brought consistency and discipline to the financial calendar and performance review process",
    "result": "Structured budgeting and reporting established; management now has reliable monthly financial insight",
    "training": false
  },
  {
    "client": "APS Consultancy Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Business lacked a reliable process for translating financial data into management insight",
    "t2": "Contetra provided ongoing CFO-level advisory, introducing MIS frameworks and performance reviews",
    "t3": "Enabled consistent, data-driven reporting cycles that improved leadership confidence",
    "result": "Monthly management reporting discipline established; finance team now operates more strategically",
    "training": false
  },
  {
    "client": "ATG Business Solutions Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "Technical Accounting",
    "t1": "Finance team needed structured upskilling on Ind AS and IFRS to support more complex reporting",
    "t2": "Contetra designed and delivered a bespoke training programme covering practical application of standards",
    "t3": "Equipped participants with implementation-ready knowledge they could apply immediately to their work",
    "result": "Team upskilled with confidence; Ind AS and IFRS topics demystified through practical, case-based training",
    "training": false
  },
  {
    "client": "Abilities India Pistons & Rings Limited",
    "industry": "Auto / Engineering",
    "category": "ERP",
    "t1": "Finance team needed functional expertise to configure the ERP correctly for their business model",
    "t2": "Contetra provided hands-on ERP advisory - configuration review, workflow design, and module optimisation",
    "t3": "Aligned the ERP configuration to the business's specific finance and operational requirements",
    "result": "ERP configuration optimised; system now reflects how the business actually operates rather than defaults",
    "training": false
  },
  {
    "client": "Aditi Tracking Support Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "ERP project had stalled - BRD was incomplete and go-live kept being deferred",
    "t2": "Contetra took ownership of BRD finalisation, ran UAT sessions, and drove the project to go-live",
    "t3": "Resolved process ambiguities and delivered an ERP aligned to actual operational workflows",
    "result": "Go-live achieved after stalled project; documented processes and user-accepted workflows now in place",
    "training": false
  },
  {
    "client": "Alchemy Solutions",
    "industry": "Professional Services",
    "category": "Technical Accounting",
    "t1": "Leadership wanted to build internal Ind AS capability rather than rely entirely on external advisors",
    "t2": "Contetra delivered focused training sessions covering key standards, judgements, and disclosure requirements",
    "t3": "Built a baseline of technical accounting knowledge within the internal finance team",
    "result": "Internal capability elevated; team now better equipped to handle routine Ind AS matters independently",
    "training": false
  },
  {
    "client": "Andritz Technologies Private Limited",
    "industry": "Technology",
    "category": "ERP",
    "t1": "Finance processes were undocumented - no blueprint existed to configure or optimise the ERP",
    "t2": "Contetra ran process workshops, documented current-state workflows, and designed ERP-aligned future-state",
    "t3": "Produced a complete process and system blueprint covering all core finance and operational flows",
    "result": "Process documentation delivered; ERP configuration grounded in real workflows, not generic templates",
    "training": false
  },
  {
    "client": "Apexvitals Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Finance leadership needed external support to build credibility and influence with the board",
    "t2": "Contetra partnered as a virtual CFO advisory resource - guiding budgeting, forecasting, and reviews",
    "t3": "Strengthened finance team's ability to present and defend numbers at senior leadership level",
    "result": "Finance function gained boardroom credibility; advisory engagement delivered lasting capability uplift",
    "training": false
  },
  {
    "client": "Ashapura Aromas Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "Technical Accounting",
    "t1": "Financial statements were being prepared manually without a controlled, review-based process",
    "t2": "Contetra took end-to-end ownership of financial statement preparation under Ind AS / IFRS",
    "t3": "Delivered audit-ready statements with proper disclosures, schedules, and technical sign-off",
    "result": "Statutory financials prepared on time and audit-ready; technical quality and disclosure standards met",
    "training": false
  },
  {
    "client": "Asma",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Growing business outpaced the finance team's planning and performance management capability",
    "t2": "Contetra designed and ran a structured monthly FP&A support programme for the leadership team",
    "t3": "Closed the gap between business growth and finance capability through hands-on advisory",
    "result": "Finance team scaled with the business; structured planning and review discipline now embedded",
    "training": false
  },
  {
    "client": "B M Fashions (UK) Ltd",
    "industry": "Apparel / Textile",
    "category": "ERP",
    "t1": "User acceptance testing had not been completed and go-live readiness was unclear",
    "t2": "Contetra structured the UAT cycle, tracked defect resolution, and managed go-live sign-off",
    "t3": "Delivered a tested, user-accepted ERP system ready for live business operations",
    "result": "UAT completed and go-live achieved; ERP now operational with business users confident in the system",
    "training": false
  },
  {
    "client": "B S Industries",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Absence of structured financial planning was limiting the business's ability to manage cash and margins",
    "t2": "Contetra introduced budgeting frameworks, variance analysis, and monthly CFO-level review sessions",
    "t3": "Gave leadership clear visibility into cost drivers, revenue trends, and working capital dynamics",
    "result": "Cash and margin management improved significantly through structured FP&A advisory support",
    "training": false
  },
  {
    "client": "BOB Financial Solutions Limited",
    "industry": "Financial Services / NBFC",
    "category": "Technical Accounting",
    "t1": "RBI and Ind AS 109 required a robust ECL model that the internal team lacked the expertise to build",
    "t2": "Contetra built the ECL computation model - stage classification, PD/LGD inputs, and scenario weighting",
    "t3": "Delivered an audit-ready ECL model with full methodology documentation and management overlay",
    "result": "ECL model operational; provisioning compliant with Ind AS 109 and accepted by auditors without query",
    "training": false
  },
  {
    "client": "BOB Financial Solutions Limited",
    "industry": "Financial Services / NBFC",
    "category": "FP&A",
    "t1": "Finance team relied on reactive reporting rather than forward-looking financial management",
    "t2": "Contetra shifted the team toward proactive planning - introducing rolling forecasts and scenario models",
    "t3": "Transformed finance from a reporting function into a business partner supporting strategy",
    "result": "Forward-looking finance culture established; leadership now uses forecasts to guide decisions",
    "training": false
  },
  {
    "client": "Beautex Industries Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "Business had chosen an ERP platform but lacked the internal expertise to implement it effectively",
    "t2": "Contetra provided functional advisory across all finance modules - AP, AR, GL, and reporting",
    "t3": "Guided the implementation to ensure the ERP was configured for accuracy, control, and compliance",
    "result": "ERP implemented with proper finance controls embedded; team trained and system operationally sound",
    "training": false
  },
  {
    "client": "Beauty Essentials Marketing India LLP",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "ERP was live but finance team lacked confidence in the system's outputs and reporting accuracy",
    "t2": "Contetra reviewed the configuration, corrected mapping errors, and aligned reports to management needs",
    "t3": "Restored trust in ERP-generated financials by fixing underlying configuration and reporting issues",
    "result": "Finance team now relies on ERP output with confidence; configuration corrected and reports validated",
    "training": false
  },
  {
    "client": "Big Plate Cuisines LLP",
    "industry": "Food & Beverages",
    "category": "FP&A",
    "t1": "Business decisions were being made without reliable financial models or scenario analysis",
    "t2": "Contetra provided monthly advisory sessions introducing financial modelling and decision frameworks",
    "t3": "Equipped the team with tools to evaluate options and stress-test assumptions before committing",
    "result": "Decision quality improved materially; finance team now models scenarios rather than reacting to outcomes",
    "training": false
  },
  {
    "client": "Biocyll Laboratories Private Limited",
    "industry": "Pharma / Life Sciences",
    "category": "FP&A",
    "t1": "Finance team was producing reports without a clear framework for analysis or business commentary",
    "t2": "Contetra introduced a structured reporting pack and monthly FP&A review process",
    "t3": "Transformed raw financials into actionable management information for leadership decision-making",
    "result": "Management reporting improved significantly; leadership now has structured, commentary-driven insight",
    "training": false
  },
  {
    "client": "Bitonic Technology Labs Private Limited",
    "industry": "Pharma / Life Sciences",
    "category": "ERP",
    "t1": "Finance team needed functional expertise to configure the ERP correctly for their business model",
    "t2": "Contetra provided hands-on ERP advisory - configuration review, workflow design, and module optimisation",
    "t3": "Aligned the ERP configuration to the business's specific finance and operational requirements",
    "result": "ERP configuration optimised; system now reflects how the business actually operates rather than defaults",
    "training": false
  },
  {
    "client": "Bitonic Technology Labs Private Limited",
    "industry": "Pharma / Life Sciences",
    "category": "Technical Accounting",
    "t1": "Business needed formal accounting policy papers to support IFRS-compliant financial reporting",
    "t2": "Contetra prepared technical memos covering applicable standards, policy choices, and disclosure requirements",
    "t3": "Delivered documentation that strengthened the finance team's ability to justify accounting positions",
    "result": "Technical memos issued; IFRS compliance documented and auditors provided with clear supporting rationale",
    "training": false
  },
  {
    "client": "Bloom Food Additives Private Limited",
    "industry": "Food & Beverages",
    "category": "FP&A",
    "t1": "Finance team lacked the structure to manage budget-vs-actual reviews with business unit heads",
    "t2": "Contetra introduced a BU-level FP&A rhythm - monthly variance reviews, commentary, and action tracking",
    "t3": "Created accountability across business units through structured financial performance management",
    "result": "Budget discipline strengthened; business units now own their numbers with finance as a strategic partner",
    "training": false
  },
  {
    "client": "BluCognition Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Growing company needed external financial planning expertise without a full-time CFO hire",
    "t2": "Contetra provided fractional FP&A support - covering forecasting, budget governance, and variance review",
    "t3": "Delivered CFO-quality financial oversight at a cost appropriate for the company's growth stage",
    "result": "Finance function punched above its weight; planning and review rigour embedded without a full CFO hire",
    "training": false
  },
  {
    "client": "BluCognition Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "Business had chosen an ERP platform but lacked the internal expertise to implement it effectively",
    "t2": "Contetra provided functional advisory across all finance modules - AP, AR, GL, and reporting",
    "t3": "Guided the implementation to ensure the ERP was configured for accuracy, control, and compliance",
    "result": "ERP implemented with proper finance controls embedded; team trained and system operationally sound",
    "training": false
  },
  {
    "client": "Bobcard Limited",
    "industry": "Financial Services / NBFC",
    "category": "Technical Accounting",
    "t1": "ECL provisioning was being computed without a validated model or documented methodology",
    "t2": "Contetra designed and validated the ECL model, incorporating regulatory guidance and portfolio data",
    "t3": "Created a robust, repeatable provisioning framework with clear assumptions and sensitivity analysis",
    "result": "ECL framework embedded; provisioning now consistent, documented, and compliant each reporting period",
    "training": false
  },
  {
    "client": "Cadchem  Laboratories Limited",
    "industry": "Pharma / Life Sciences",
    "category": "FP&A",
    "t1": "Rapid growth had outpaced the finance function's capacity for meaningful forecasting and planning",
    "t2": "Contetra provided fractional CFO advisory - covering cash flow planning, budget governance, and KPI design",
    "t3": "Restored control over financial planning as the business scaled operations and headcount",
    "result": "Finance function stabilised through growth phase; planning and control frameworks now built to scale",
    "training": false
  },
  {
    "client": "Cai Store Private Limited",
    "industry": "Retail",
    "category": "FP&A",
    "t1": "Finance team was spending most of its time on transactional work with little strategic output",
    "t2": "Contetra re-focused the team with a structured FP&A programme covering forecasting, analysis, and review",
    "t3": "Freed finance bandwidth from routine tasks by instilling reporting discipline and analytical frameworks",
    "result": "Strategic finance capacity created; team now delivers insight alongside transactional accuracy",
    "training": false
  },
  {
    "client": "Cathay Pacific Airways Limited",
    "industry": "Aviation",
    "category": "Technical Accounting",
    "t1": "Finance team was attending generic training but needed content specific to their business and industry",
    "t2": "Contetra designed industry-relevant training covering the Ind AS and IFRS topics most applicable to the client",
    "t3": "Delivered targeted, practical training that resonated with the team's day-to-day accounting challenges",
    "result": "Bespoke training completed; team feedback confirmed direct relevance to their actual reporting environment",
    "training": false
  },
  {
    "client": "Cfo Bridge Services Private Limited",
    "industry": "Professional Services",
    "category": "ERP",
    "t1": "Business had no ERP foundation - finance and operations ran on disconnected spreadsheets and tools",
    "t2": "Contetra led full ERP implementation: requirements, BRD, CRP sessions, UAT, and go-live",
    "t3": "Delivered an integrated system covering finance, inventory, and operations with embedded controls",
    "result": "ERP live and operational; business now runs on a unified platform with real-time financial visibility",
    "training": true
  },
  {
    "client": "Chaman Udyog",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Business lacked the internal capability to run a structured annual budget and quarterly reforecast",
    "t2": "Contetra designed the budgeting process, ran working sessions with department heads, and delivered the model",
    "t3": "Created an owner-operated budget that the business could update and defend independently",
    "result": "Annual budget delivered on time; department heads now accountable within a structured financial plan",
    "training": false
  },
  {
    "client": "Chhabi Electricals Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Finance team was operating without a structured monthly review and advisory rhythm",
    "t2": "Contetra embedded a dedicated FP&A mentoring cadence - monthly reviews, KPI tracking, and coaching",
    "t3": "Built analytical capability within the team and improved the quality of financial decision-making",
    "result": "Finance function elevated with structured advisory; business decisions backed by better data",
    "training": false
  },
  {
    "client": "Clear Secured Services Limited",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Business lacked a reliable process for translating financial data into management insight",
    "t2": "Contetra provided ongoing CFO-level advisory, introducing MIS frameworks and performance reviews",
    "t3": "Enabled consistent, data-driven reporting cycles that improved leadership confidence",
    "result": "Monthly management reporting discipline established; finance team now operates more strategically",
    "training": false
  },
  {
    "client": "Club Sulaimani Food & Beverages LLP",
    "industry": "Food & Beverages",
    "category": "ERP",
    "t1": "ERP was live but finance team lacked confidence in the system's outputs and reporting accuracy",
    "t2": "Contetra reviewed the configuration, corrected mapping errors, and aligned reports to management needs",
    "t3": "Restored trust in ERP-generated financials by fixing underlying configuration and reporting issues",
    "result": "Finance team now relies on ERP output with confidence; configuration corrected and reports validated",
    "training": false
  },
  {
    "client": "Cn Water Systems Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "Finance team needed functional expertise to configure the ERP correctly for their business model",
    "t2": "Contetra provided hands-on ERP advisory - configuration review, workflow design, and module optimisation",
    "t3": "Aligned the ERP configuration to the business's specific finance and operational requirements",
    "result": "ERP configuration optimised; system now reflects how the business actually operates rather than defaults",
    "training": false
  },
  {
    "client": "Cogitate Technology Solutions India Pri",
    "industry": "Technology",
    "category": "FP&A",
    "t1": "Finance leadership needed external support to build credibility and influence with the board",
    "t2": "Contetra partnered as a virtual CFO advisory resource - guiding budgeting, forecasting, and reviews",
    "t3": "Strengthened finance team's ability to present and defend numbers at senior leadership level",
    "result": "Finance function gained boardroom credibility; advisory engagement delivered lasting capability uplift",
    "training": false
  },
  {
    "client": "Cogitate Technology Solutions India Private Limited",
    "industry": "Technology",
    "category": "FP&A",
    "t1": "Growing business outpaced the finance team's planning and performance management capability",
    "t2": "Contetra designed and ran a structured monthly FP&A support programme for the leadership team",
    "t3": "Closed the gap between business growth and finance capability through hands-on advisory",
    "result": "Finance team scaled with the business; structured planning and review discipline now embedded",
    "training": false
  },
  {
    "client": "Cogitate Technology Solutions India Private Limited",
    "industry": "Technology",
    "category": "ERP",
    "t1": "Finance team lacked structured workflows in the ERP - usage was inconsistent across the organisation",
    "t2": "Contetra completed BRD sign-off, ran structured UAT, and oversaw go-live milestone delivery",
    "t3": "Standardised how the business uses the ERP by documenting and enforcing process-based workflows",
    "result": "ERP usage standardised post go-live; consistent workflows and documented processes now embedded",
    "training": false
  },
  {
    "client": "Comet Vision Enterprises",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Absence of structured financial planning was limiting the business's ability to manage cash and margins",
    "t2": "Contetra introduced budgeting frameworks, variance analysis, and monthly CFO-level review sessions",
    "t3": "Gave leadership clear visibility into cost drivers, revenue trends, and working capital dynamics",
    "result": "Cash and margin management improved significantly through structured FP&A advisory support",
    "training": false
  },
  {
    "client": "Crescentia Strategists Inc",
    "industry": "Professional Services",
    "category": "ERP",
    "t1": "As-is processes were misaligned to the ERP structure, causing workarounds and reporting gaps",
    "t2": "Contetra mapped existing workflows, identified gaps, and redesigned processes to fit ERP capabilities",
    "t3": "Bridged the gap between how the business operated and how the ERP was structured to work",
    "result": "ERP-aligned process design completed; workarounds eliminated and reporting built on clean data flows",
    "training": false
  },
  {
    "client": "Cryoviva Life Sciences Private Limited",
    "industry": "Pharma / Life Sciences",
    "category": "ERP",
    "t1": "Business lacked process clarity before ERP selection - technology was being chosen ahead of design",
    "t2": "Contetra led process mapping sessions and delivered a structured blueprint to guide ERP selection",
    "t3": "Ensured the ERP chosen was selected based on actual business requirements, not vendor sales demos",
    "result": "Process-first ERP selection completed; implementation started with a clear, agreed operational blueprint",
    "training": false
  },
  {
    "client": "DC Infotech and Communication Limited",
    "industry": "Technology",
    "category": "FP&A",
    "t1": "Leadership was flying blind on cost management and margin erosion between quarterly reviews",
    "t2": "Contetra introduced monthly flash reporting and variance commentary alongside ongoing FP&A advisory",
    "t3": "Gave leadership early visibility into cost and margin movements before they became critical issues",
    "result": "Proactive financial management established; cost surprises reduced through early-warning reporting",
    "training": false
  },
  {
    "client": "Dassault Systemes Global Services Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "Technical Accounting",
    "t1": "Company was preparing financials in-house but lacked technical Ind AS expertise for complex disclosures",
    "t2": "Contetra managed the full financial statement cycle - trial balance to final signed-off statements",
    "t3": "Applied technical Ind AS and IFRS standards to ensure disclosures were accurate and complete",
    "result": "Audit-ready financials delivered; technical disclosures correctly applied and well-documented",
    "training": false
  },
  {
    "client": "Dassault Systemes India Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "Technical Accounting",
    "t1": "Subsidiaries required standalone financials prepared to group reporting timelines and standards",
    "t2": "Contetra prepared financial statements for each entity, co-ordinating with auditors and group finance",
    "t3": "Delivered entity-level financials on time with full Ind AS compliance and audit documentation",
    "result": "Standalone financials prepared and audited on schedule; group reporting timelines met without delay",
    "training": false
  },
  {
    "client": "Dassault Systemes Solutions Lab Private Limited",
    "industry": "Pharma / Life Sciences",
    "category": "Technical Accounting",
    "t1": "Consolidated financial statements were being delayed due to technical complexity and resource gaps",
    "t2": "Contetra managed the consolidation process - eliminations, adjustments, and disclosure preparation",
    "t3": "Delivered consolidated financials with proper intercompany treatment and group-level disclosures",
    "result": "Consolidated statements delivered on time; complex accounting judgements documented and auditor-ready",
    "training": false
  },
  {
    "client": "Dc Infotech and Communication Limited",
    "industry": "Technology",
    "category": "FP&A",
    "t1": "Finance team relied on reactive reporting rather than forward-looking financial management",
    "t2": "Contetra shifted the team toward proactive planning - introducing rolling forecasts and scenario models",
    "t3": "Transformed finance from a reporting function into a business partner supporting strategy",
    "result": "Forward-looking finance culture established; leadership now uses forecasts to guide decisions",
    "training": false
  },
  {
    "client": "Deebaco Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Business decisions were being made without reliable financial models or scenario analysis",
    "t2": "Contetra provided monthly advisory sessions introducing financial modelling and decision frameworks",
    "t3": "Equipped the team with tools to evaluate options and stress-test assumptions before committing",
    "result": "Decision quality improved materially; finance team now models scenarios rather than reacting to outcomes",
    "training": false
  },
  {
    "client": "Deswam Engineering Solutions",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Finance team lacked the structure to manage budget-vs-actual reviews with business unit heads",
    "t2": "Contetra introduced a BU-level FP&A rhythm - monthly variance reviews, commentary, and action tracking",
    "t3": "Created accountability across business units through structured financial performance management",
    "result": "Budget discipline strengthened; business units now own their numbers with finance as a strategic partner",
    "training": false
  },
  {
    "client": "Dulhe Sahab",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Rapid growth had outpaced the finance function's capacity for meaningful forecasting and planning",
    "t2": "Contetra provided fractional CFO advisory - covering cash flow planning, budget governance, and KPI design",
    "t3": "Restored control over financial planning as the business scaled operations and headcount",
    "result": "Finance function stabilised through growth phase; planning and control frameworks now built to scale",
    "training": false
  },
  {
    "client": "Dyna Energy Solutions LLP",
    "industry": "Energy / Utilities",
    "category": "FP&A",
    "t1": "Finance team was spending most of its time on transactional work with little strategic output",
    "t2": "Contetra re-focused the team with a structured FP&A programme covering forecasting, analysis, and review",
    "t3": "Freed finance bandwidth from routine tasks by instilling reporting discipline and analytical frameworks",
    "result": "Strategic finance capacity created; team now delivers insight alongside transactional accuracy",
    "training": false
  },
  {
    "client": "Easy Sell Service Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "Business had chosen an ERP platform but lacked the internal expertise to implement it effectively",
    "t2": "Contetra provided functional advisory across all finance modules - AP, AR, GL, and reporting",
    "t3": "Guided the implementation to ensure the ERP was configured for accuracy, control, and compliance",
    "result": "ERP implemented with proper finance controls embedded; team trained and system operationally sound",
    "training": false
  },
  {
    "client": "Encube Ethicals Private Limited",
    "industry": "Pharma / Life Sciences",
    "category": "Technical Accounting",
    "t1": "Finance team lacked bandwidth to prepare statutory financials alongside day-to-day operations",
    "t2": "Contetra stepped in as a technical finance partner - preparing, reviewing, and finalising statements",
    "t3": "Relieved the internal team of financial statement preparation while maintaining full technical accuracy",
    "result": "Financial statements delivered without straining internal resources; audit process completed smoothly",
    "training": false
  },
  {
    "client": "Esvastica Technologies Private Limited",
    "industry": "Technology",
    "category": "FP&A",
    "t1": "Business needed a reliable, structured approach to budgeting and monthly financial reporting",
    "t2": "Contetra delivered ongoing FP&A advisory - budgeting support, actuals review, and management commentary",
    "t3": "Brought consistency and discipline to the financial calendar and performance review process",
    "result": "Structured budgeting and reporting established; management now has reliable monthly financial insight",
    "training": false
  },
  {
    "client": "Exquissito Foods Private Limited",
    "industry": "Food & Beverages",
    "category": "FP&A",
    "t1": "Finance team was producing reports without a clear framework for analysis or business commentary",
    "t2": "Contetra introduced a structured reporting pack and monthly FP&A review process",
    "t3": "Transformed raw financials into actionable management information for leadership decision-making",
    "result": "Management reporting improved significantly; leadership now has structured, commentary-driven insight",
    "training": false
  },
  {
    "client": "Finplan International Education LLP",
    "industry": "Manufacturing / Industrial",
    "category": "Technical Accounting",
    "t1": "Business wanted to upskill newly promoted finance managers on CFO-level financial management topics",
    "t2": "Contetra delivered a structured programme covering FP&A, business partnering, and strategic finance",
    "t3": "Accelerated the transition of technical accountants into commercial, business-facing finance leaders",
    "result": "Finance managers equipped with strategic finance skills; cross-functional business partnering improved",
    "training": false
  },
  {
    "client": "Flare Luminaires Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Finance team was operating without a structured monthly review and advisory rhythm",
    "t2": "Contetra embedded a dedicated FP&A mentoring cadence - monthly reviews, KPI tracking, and coaching",
    "t3": "Built analytical capability within the team and improved the quality of financial decision-making",
    "result": "Finance function elevated with structured advisory; business decisions backed by better data",
    "training": false
  },
  {
    "client": "Fountain Hospitality Private Limited",
    "industry": "Hospitality",
    "category": "FP&A",
    "t1": "Business lacked a reliable process for translating financial data into management insight",
    "t2": "Contetra provided ongoing CFO-level advisory, introducing MIS frameworks and performance reviews",
    "t3": "Enabled consistent, data-driven reporting cycles that improved leadership confidence",
    "result": "Monthly management reporting discipline established; finance team now operates more strategically",
    "training": false
  },
  {
    "client": "FourNxt Technologies FZCO",
    "industry": "Technology",
    "category": "FP&A",
    "t1": "Finance leadership needed external support to build credibility and influence with the board",
    "t2": "Contetra partnered as a virtual CFO advisory resource - guiding budgeting, forecasting, and reviews",
    "t3": "Strengthened finance team's ability to present and defend numbers at senior leadership level",
    "result": "Finance function gained boardroom credibility; advisory engagement delivered lasting capability uplift",
    "training": false
  },
  {
    "client": "FourNxt Technologies FZCO",
    "industry": "Technology",
    "category": "Technical Accounting",
    "t1": "Business faced a complex accounting judgement with no clear precedent internally",
    "t2": "Contetra analysed the transaction, applied relevant Ind AS and IFRS standards, and issued a technical memo",
    "t3": "Provided a documented accounting position with supporting rationale for auditor review",
    "result": "Technical accounting resolved with full documentation; auditor accepted the position without qualification",
    "training": false
  },
  {
    "client": "FourNxt Technologies FZCO",
    "industry": "Technology",
    "category": "ERP",
    "t1": "ERP was live but finance team lacked confidence in the system's outputs and reporting accuracy",
    "t2": "Contetra reviewed the configuration, corrected mapping errors, and aligned reports to management needs",
    "t3": "Restored trust in ERP-generated financials by fixing underlying configuration and reporting issues",
    "result": "Finance team now relies on ERP output with confidence; configuration corrected and reports validated",
    "training": false
  },
  {
    "client": "Fracktal Works Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Growing business outpaced the finance team's planning and performance management capability",
    "t2": "Contetra designed and ran a structured monthly FP&A support programme for the leadership team",
    "t3": "Closed the gap between business growth and finance capability through hands-on advisory",
    "result": "Finance team scaled with the business; structured planning and review discipline now embedded",
    "training": false
  },
  {
    "client": "Georama Inc",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Absence of structured financial planning was limiting the business's ability to manage cash and margins",
    "t2": "Contetra introduced budgeting frameworks, variance analysis, and monthly CFO-level review sessions",
    "t3": "Gave leadership clear visibility into cost drivers, revenue trends, and working capital dynamics",
    "result": "Cash and margin management improved significantly through structured FP&A advisory support",
    "training": false
  },
  {
    "client": "Godrej Finance Limited",
    "industry": "Financial Services / NBFC",
    "category": "ERP",
    "t1": "Operational processes varied across departments with no standardisation prior to ERP rollout",
    "t2": "Contetra standardised processes across business units and documented ERP-ready workflows",
    "t3": "Delivered consistent, ERP-aligned operating procedures across finance and operations teams",
    "result": "Process standardisation completed; ERP implementation proceeded on a clean, consistent foundation",
    "training": false
  },
  {
    "client": "Godrej Finance Limited",
    "industry": "Financial Services / NBFC",
    "category": "Technical Accounting",
    "t1": "New transaction type required technical accounting treatment the finance team had not dealt with before",
    "t2": "Contetra researched the applicable standards and delivered a technical position paper with journal entries",
    "t3": "Equipped the finance team with a clear, auditor-ready accounting treatment for the transaction",
    "result": "Accounting position established; transaction recorded correctly with supporting technical documentation",
    "training": false
  },
  {
    "client": "Godrej Housing Finance Limited",
    "industry": "Financial Services / NBFC",
    "category": "Technical Accounting",
    "t1": "Financial statements were being prepared manually without a controlled, review-based process",
    "t2": "Contetra took end-to-end ownership of financial statement preparation under Ind AS / IFRS",
    "t3": "Delivered audit-ready statements with proper disclosures, schedules, and technical sign-off",
    "result": "Statutory financials prepared on time and audit-ready; technical quality and disclosure standards met",
    "training": true
  },
  {
    "client": "Godrej Housing Finance Limited",
    "industry": "Financial Services / NBFC",
    "category": "FP&A",
    "t1": "Growing company needed external financial planning expertise without a full-time CFO hire",
    "t2": "Contetra provided fractional FP&A support - covering forecasting, budget governance, and variance review",
    "t3": "Delivered CFO-quality financial oversight at a cost appropriate for the company's growth stage",
    "result": "Finance function punched above its weight; planning and review rigour embedded without a full CFO hire",
    "training": true
  },
  {
    "client": "Godrej Housing Finance Limited",
    "industry": "Financial Services / NBFC",
    "category": "Technical Accounting",
    "t1": "Annual compliance training had become a tick-box exercise with limited lasting impact on the team",
    "t2": "Contetra redesigned the programme around case studies and practical workshops rather than passive delivery",
    "t3": "Improved knowledge retention by making sessions interactive, scenario-based, and directly applicable",
    "result": "Training impact measurably improved; participants left with tools and frameworks they could use immediately",
    "training": false
  },
  {
    "client": "Godrej Housing Finance Limited",
    "industry": "Financial Services / NBFC",
    "category": "ERP",
    "t1": "Finance processes were undocumented - no blueprint existed to configure or optimise the ERP",
    "t2": "Contetra ran process workshops, documented current-state workflows, and designed ERP-aligned future-state",
    "t3": "Produced a complete process and system blueprint covering all core finance and operational flows",
    "result": "Process documentation delivered; ERP configuration grounded in real workflows, not generic templates",
    "training": true
  },
  {
    "client": "Goyal Realty Ventures Private Limited",
    "industry": "Real Estate",
    "category": "FP&A",
    "t1": "Finance team relied on reactive reporting rather than forward-looking financial management",
    "t2": "Contetra shifted the team toward proactive planning - introducing rolling forecasts and scenario models",
    "t3": "Transformed finance from a reporting function into a business partner supporting strategy",
    "result": "Forward-looking finance culture established; leadership now uses forecasts to guide decisions",
    "training": false
  },
  {
    "client": "Goyal Realty Ventures Pvt Ltd",
    "industry": "Real Estate",
    "category": "FP&A",
    "t1": "Business lacked the internal capability to run a structured annual budget and quarterly reforecast",
    "t2": "Contetra designed the budgeting process, ran working sessions with department heads, and delivered the model",
    "t3": "Created an owner-operated budget that the business could update and defend independently",
    "result": "Annual budget delivered on time; department heads now accountable within a structured financial plan",
    "training": false
  },
  {
    "client": "Green World Renewable Energy Private Limited",
    "industry": "Energy / Utilities",
    "category": "FP&A",
    "t1": "Business decisions were being made without reliable financial models or scenario analysis",
    "t2": "Contetra provided monthly advisory sessions introducing financial modelling and decision frameworks",
    "t3": "Equipped the team with tools to evaluate options and stress-test assumptions before committing",
    "result": "Decision quality improved materially; finance team now models scenarios rather than reacting to outcomes",
    "training": false
  },
  {
    "client": "Grey Orange India Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "Technical Accounting",
    "t1": "CFO needed an independent technical view on a material accounting policy decision",
    "t2": "Contetra conducted a standards analysis and provided a written advisory memo with recommended treatment",
    "t3": "Gave the CFO a defensible, independently prepared position to present to auditors and the board",
    "result": "Independent technical advice delivered; accounting policy decision made with full professional backing",
    "training": false
  },
  {
    "client": "HEC Enviro India Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "Finance team needed functional expertise to configure the ERP correctly for their business model",
    "t2": "Contetra provided hands-on ERP advisory - configuration review, workflow design, and module optimisation",
    "t3": "Aligned the ERP configuration to the business's specific finance and operational requirements",
    "result": "ERP configuration optimised; system now reflects how the business actually operates rather than defaults",
    "training": false
  },
  {
    "client": "Hce Dynamics Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "Business had chosen an ERP platform but lacked the internal expertise to implement it effectively",
    "t2": "Contetra provided functional advisory across all finance modules - AP, AR, GL, and reporting",
    "t3": "Guided the implementation to ensure the ERP was configured for accuracy, control, and compliance",
    "result": "ERP implemented with proper finance controls embedded; team trained and system operationally sound",
    "training": false
  },
  {
    "client": "Hindustan Pencils Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "Dirty data in legacy systems was blocking ERP readiness and creating reconciliation risk",
    "t2": "Contetra executed a structured data cleansing programme - validating, deduplicating, and migrating records",
    "t3": "Built a clean data foundation that ensured the ERP launched with accurate, reliable master data",
    "result": "Data migration completed successfully; ERP went live on a clean baseline with no legacy data debt",
    "training": false
  },
  {
    "client": "Hindustan Thompson Advertising Limited",
    "industry": "Manufacturing / Industrial",
    "category": "Technical Accounting",
    "t1": "Year-end audit was raising queries on complex judgements for which the team had no documentation",
    "t2": "Contetra prepared technical memos addressing each audit query with standard-referenced accounting rationale",
    "t3": "Resolved outstanding audit queries by providing well-documented, standards-based accounting positions",
    "result": "Audit queries closed with technical memos; financial statements signed off without material adjustments",
    "training": false
  },
  {
    "client": "Husk Power Systems Private Limited",
    "industry": "Logistics & Supply Chain",
    "category": "ERP",
    "t1": "Years of unstructured data entry had created inconsistencies that would compromise ERP accuracy",
    "t2": "Contetra designed and ran a phased data remediation programme ahead of ERP cutover",
    "t3": "Resolved data quality issues before they could contaminate the new system environment",
    "result": "Clean data delivered into ERP at go-live; historical inconsistencies resolved before migration",
    "training": false
  },
  {
    "client": "IMCD India Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "Technical Accounting",
    "t1": "Company was preparing financials in-house but lacked technical Ind AS expertise for complex disclosures",
    "t2": "Contetra managed the full financial statement cycle - trial balance to final signed-off statements",
    "t3": "Applied technical Ind AS and IFRS standards to ensure disclosures were accurate and complete",
    "result": "Audit-ready financials delivered; technical disclosures correctly applied and well-documented",
    "training": false
  },
  {
    "client": "INNOVATIVE FLEXOTECH PRIVATE LIMITED",
    "industry": "Technology",
    "category": "FP&A",
    "t1": "Leadership was flying blind on cost management and margin erosion between quarterly reviews",
    "t2": "Contetra introduced monthly flash reporting and variance commentary alongside ongoing FP&A advisory",
    "t3": "Gave leadership early visibility into cost and margin movements before they became critical issues",
    "result": "Proactive financial management established; cost surprises reduced through early-warning reporting",
    "training": false
  },
  {
    "client": "Innovative Flexotech Private Limited",
    "industry": "Technology",
    "category": "FP&A",
    "t1": "Finance team lacked the structure to manage budget-vs-actual reviews with business unit heads",
    "t2": "Contetra introduced a BU-level FP&A rhythm - monthly variance reviews, commentary, and action tracking",
    "t3": "Created accountability across business units through structured financial performance management",
    "result": "Budget discipline strengthened; business units now own their numbers with finance as a strategic partner",
    "training": false
  },
  {
    "client": "Intelegain Technologies Private Limited",
    "industry": "Technology",
    "category": "ERP",
    "t1": "As-is processes were misaligned to the ERP structure, causing workarounds and reporting gaps",
    "t2": "Contetra mapped existing workflows, identified gaps, and redesigned processes to fit ERP capabilities",
    "t3": "Bridged the gap between how the business operated and how the ERP was structured to work",
    "result": "ERP-aligned process design completed; workarounds eliminated and reporting built on clean data flows",
    "training": false
  },
  {
    "client": "JDAC Sales Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Business needed a reliable, structured approach to budgeting and monthly financial reporting",
    "t2": "Contetra delivered ongoing FP&A advisory - budgeting support, actuals review, and management commentary",
    "t3": "Brought consistency and discipline to the financial calendar and performance review process",
    "result": "Structured budgeting and reporting established; management now has reliable monthly financial insight",
    "training": false
  },
  {
    "client": "JV Nutrition LLP",
    "industry": "Food & Beverages",
    "category": "FP&A",
    "t1": "Rapid growth had outpaced the finance function's capacity for meaningful forecasting and planning",
    "t2": "Contetra provided fractional CFO advisory - covering cash flow planning, budget governance, and KPI design",
    "t3": "Restored control over financial planning as the business scaled operations and headcount",
    "result": "Finance function stabilised through growth phase; planning and control frameworks now built to scale",
    "training": false
  },
  {
    "client": "Jagannath Polymers Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "ERP was live but finance team lacked confidence in the system's outputs and reporting accuracy",
    "t2": "Contetra reviewed the configuration, corrected mapping errors, and aligned reports to management needs",
    "t3": "Restored trust in ERP-generated financials by fixing underlying configuration and reporting issues",
    "result": "Finance team now relies on ERP output with confidence; configuration corrected and reports validated",
    "training": false
  },
  {
    "client": "Jainam Invamed Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Finance team was spending most of its time on transactional work with little strategic output",
    "t2": "Contetra re-focused the team with a structured FP&A programme covering forecasting, analysis, and review",
    "t3": "Freed finance bandwidth from routine tasks by instilling reporting discipline and analytical frameworks",
    "result": "Strategic finance capacity created; team now delivers insight alongside transactional accuracy",
    "training": false
  },
  {
    "client": "K R N Alloys Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Finance team was operating without a structured monthly review and advisory rhythm",
    "t2": "Contetra embedded a dedicated FP&A mentoring cadence - monthly reviews, KPI tracking, and coaching",
    "t3": "Built analytical capability within the team and improved the quality of financial decision-making",
    "result": "Finance function elevated with structured advisory; business decisions backed by better data",
    "training": false
  },
  {
    "client": "Kale Logistics Solutions Private Limited",
    "industry": "Logistics & Supply Chain",
    "category": "FP&A",
    "t1": "Finance team was producing reports without a clear framework for analysis or business commentary",
    "t2": "Contetra introduced a structured reporting pack and monthly FP&A review process",
    "t3": "Transformed raw financials into actionable management information for leadership decision-making",
    "result": "Management reporting improved significantly; leadership now has structured, commentary-driven insight",
    "training": false
  },
  {
    "client": "Kale Logistics Solutions Private Limited",
    "industry": "Logistics & Supply Chain",
    "category": "ERP",
    "t1": "ERP had been implemented but key finance modules were underutilised and not fully configured",
    "t2": "Contetra completed module configuration, ran targeted UAT, and supported the team through go-live",
    "t3": "Activated full ERP capability and ensured all finance workflows were operating as designed",
    "result": "ERP fully utilised post-engagement; finance team equipped and system operating at intended capacity",
    "training": false
  },
  {
    "client": "Kotak Securities Limited",
    "industry": "Financial Services / NBFC",
    "category": "Technical Accounting",
    "t1": "Finance team needed practical guidance on implementing a new accounting standard across the business",
    "t2": "Contetra led the standard implementation - impact assessment, policy design, and transition adjustments",
    "t3": "Managed the full transition with minimal disruption to reporting and maximum auditor confidence",
    "result": "New standard implemented cleanly; policy documented, adjustments processed, and auditors satisfied",
    "training": false
  },
  {
    "client": "L a Technologies Private Limited",
    "industry": "Technology",
    "category": "ERP",
    "t1": "Fragmented systems were creating reconciliation delays and unreliable management reporting",
    "t2": "Contetra managed end-to-end ERP rollout - from blueprint design through to post-go-live stabilisation",
    "t3": "Replaced disconnected tools with a single integrated system aligned to actual business workflows",
    "result": "Systems consolidated; reconciliation effort reduced and management reporting now drawn from one source",
    "training": true
  },
  {
    "client": "Logistics Solutions",
    "industry": "Logistics & Supply Chain",
    "category": "FP&A",
    "t1": "Business lacked a reliable process for translating financial data into management insight",
    "t2": "Contetra provided ongoing CFO-level advisory, introducing MIS frameworks and performance reviews",
    "t3": "Enabled consistent, data-driven reporting cycles that improved leadership confidence",
    "result": "Monthly management reporting discipline established; finance team now operates more strategically",
    "training": false
  },
  {
    "client": "Luman Industries Limited",
    "industry": "Auto / Engineering",
    "category": "FP&A",
    "t1": "Finance leadership needed external support to build credibility and influence with the board",
    "t2": "Contetra partnered as a virtual CFO advisory resource - guiding budgeting, forecasting, and reviews",
    "t3": "Strengthened finance team's ability to present and defend numbers at senior leadership level",
    "result": "Finance function gained boardroom credibility; advisory engagement delivered lasting capability uplift",
    "training": false
  },
  {
    "client": "M/S K.K. Enterprises",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Growing business outpaced the finance team's planning and performance management capability",
    "t2": "Contetra designed and ran a structured monthly FP&A support programme for the leadership team",
    "t3": "Closed the gap between business growth and finance capability through hands-on advisory",
    "result": "Finance team scaled with the business; structured planning and review discipline now embedded",
    "training": false
  },
  {
    "client": "MDS Digital Media Private Limited",
    "industry": "Technology",
    "category": "FP&A",
    "t1": "Absence of structured financial planning was limiting the business's ability to manage cash and margins",
    "t2": "Contetra introduced budgeting frameworks, variance analysis, and monthly CFO-level review sessions",
    "t3": "Gave leadership clear visibility into cost drivers, revenue trends, and working capital dynamics",
    "result": "Cash and margin management improved significantly through structured FP&A advisory support",
    "training": false
  },
  {
    "client": "Mace Arabia For Engineering Consultancy",
    "industry": "Manufacturing / Industrial",
    "category": "Technical Accounting",
    "t1": "Business faced a complex accounting judgement with no clear precedent internally",
    "t2": "Contetra analysed the transaction, applied relevant Ind AS and IFRS standards, and issued a technical memo",
    "t3": "Provided a documented accounting position with supporting rationale for auditor review",
    "result": "Technical accounting resolved with full documentation; auditor accepted the position without qualification",
    "training": false
  },
  {
    "client": "Manarah-Al-Jubail Cont. Co. Ltd.",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "ERP project had stalled - BRD was incomplete and go-live kept being deferred",
    "t2": "Contetra took ownership of BRD finalisation, ran UAT sessions, and drove the project to go-live",
    "t3": "Resolved process ambiguities and delivered an ERP aligned to actual operational workflows",
    "result": "Go-live achieved after stalled project; documented processes and user-accepted workflows now in place",
    "training": true
  },
  {
    "client": "Martin and Harris laboratories Limited",
    "industry": "Pharma / Life Sciences",
    "category": "Technical Accounting",
    "t1": "Subsidiaries required standalone financials prepared to group reporting timelines and standards",
    "t2": "Contetra prepared financial statements for each entity, co-ordinating with auditors and group finance",
    "t3": "Delivered entity-level financials on time with full Ind AS compliance and audit documentation",
    "result": "Standalone financials prepared and audited on schedule; group reporting timelines met without delay",
    "training": false
  },
  {
    "client": "Mastek Ltd",
    "industry": "Diversified / Conglomerate",
    "category": "Technical Accounting",
    "t1": "Consolidated financial statements were being delayed due to technical complexity and resource gaps",
    "t2": "Contetra managed the consolidation process - eliminations, adjustments, and disclosure preparation",
    "t3": "Delivered consolidated financials with proper intercompany treatment and group-level disclosures",
    "result": "Consolidated statements delivered on time; complex accounting judgements documented and auditor-ready",
    "training": false
  },
  {
    "client": "Mobisoft Technology India Private Limited",
    "industry": "Technology",
    "category": "FP&A",
    "t1": "Growing company needed external financial planning expertise without a full-time CFO hire",
    "t2": "Contetra provided fractional FP&A support - covering forecasting, budget governance, and variance review",
    "t3": "Delivered CFO-quality financial oversight at a cost appropriate for the company's growth stage",
    "result": "Finance function punched above its weight; planning and review rigour embedded without a full CFO hire",
    "training": false
  },
  {
    "client": "More Retail Private Limited",
    "industry": "Retail",
    "category": "FP&A",
    "t1": "Business lacked the internal capability to run a structured annual budget and quarterly reforecast",
    "t2": "Contetra designed the budgeting process, ran working sessions with department heads, and delivered the model",
    "t3": "Created an owner-operated budget that the business could update and defend independently",
    "result": "Annual budget delivered on time; department heads now accountable within a structured financial plan",
    "training": false
  },
  {
    "client": "Multiplier Brand Solutions Private Limited",
    "industry": "Media & Communications",
    "category": "ERP",
    "t1": "User acceptance testing had not been completed and go-live readiness was unclear",
    "t2": "Contetra structured the UAT cycle, tracked defect resolution, and managed go-live sign-off",
    "t3": "Delivered a tested, user-accepted ERP system ready for live business operations",
    "result": "UAT completed and go-live achieved; ERP now operational with business users confident in the system",
    "training": false
  },
  {
    "client": "Neesh Perfumes Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Finance team relied on reactive reporting rather than forward-looking financial management",
    "t2": "Contetra shifted the team toward proactive planning - introducing rolling forecasts and scenario models",
    "t3": "Transformed finance from a reporting function into a business partner supporting strategy",
    "result": "Forward-looking finance culture established; leadership now uses forecasts to guide decisions",
    "training": false
  },
  {
    "client": "Neoliv Real Estate Private Limited",
    "industry": "Real Estate",
    "category": "ERP",
    "t1": "Business lacked process clarity before ERP selection - technology was being chosen ahead of design",
    "t2": "Contetra led process mapping sessions and delivered a structured blueprint to guide ERP selection",
    "t3": "Ensured the ERP chosen was selected based on actual business requirements, not vendor sales demos",
    "result": "Process-first ERP selection completed; implementation started with a clear, agreed operational blueprint",
    "training": false
  },
  {
    "client": "Neoliv Real Estate Private Limited",
    "industry": "Real Estate",
    "category": "FP&A",
    "t1": "Leadership was flying blind on cost management and margin erosion between quarterly reviews",
    "t2": "Contetra introduced monthly flash reporting and variance commentary alongside ongoing FP&A advisory",
    "t3": "Gave leadership early visibility into cost and margin movements before they became critical issues",
    "result": "Proactive financial management established; cost surprises reduced through early-warning reporting",
    "training": false
  },
  {
    "client": "Neysa Networks Private Limited",
    "industry": "Technology",
    "category": "Technical Accounting",
    "t1": "New transaction type required technical accounting treatment the finance team had not dealt with before",
    "t2": "Contetra researched the applicable standards and delivered a technical position paper with journal entries",
    "t3": "Equipped the finance team with a clear, auditor-ready accounting treatment for the transaction",
    "result": "Accounting position established; transaction recorded correctly with supporting technical documentation",
    "training": false
  },
  {
    "client": "North Bliss Properties Private Limited",
    "industry": "Real Estate",
    "category": "ERP",
    "t1": "Finance team needed functional expertise to configure the ERP correctly for their business model",
    "t2": "Contetra provided hands-on ERP advisory - configuration review, workflow design, and module optimisation",
    "t3": "Aligned the ERP configuration to the business's specific finance and operational requirements",
    "result": "ERP configuration optimised; system now reflects how the business actually operates rather than defaults",
    "training": false
  },
  {
    "client": "Nusummit Technologies Private Limited",
    "industry": "Technology",
    "category": "ERP",
    "t1": "Finance team was manually reconciling data from multiple systems with no single source of truth",
    "t2": "Contetra implemented an ERP covering procure-to-pay, order-to-cash, and financial close workflows",
    "t3": "Eliminated manual reconciliation by building integration points across all core finance processes",
    "result": "Single source of truth achieved; month-end close accelerated and data integrity significantly improved",
    "training": false
  },
  {
    "client": "Nusummit Technologies Private Limited",
    "industry": "Technology",
    "category": "Technical Accounting",
    "t1": "CFO needed an independent technical view on a material accounting policy decision",
    "t2": "Contetra conducted a standards analysis and provided a written advisory memo with recommended treatment",
    "t3": "Gave the CFO a defensible, independently prepared position to present to auditors and the board",
    "result": "Independent technical advice delivered; accounting policy decision made with full professional backing",
    "training": false
  },
  {
    "client": "OPC Asset Solutions Pvt Ltd",
    "industry": "Manufacturing / Industrial",
    "category": "Technical Accounting",
    "t1": "Year-end audit was raising queries on complex judgements for which the team had no documentation",
    "t2": "Contetra prepared technical memos addressing each audit query with standard-referenced accounting rationale",
    "t3": "Resolved outstanding audit queries by providing well-documented, standards-based accounting positions",
    "result": "Audit queries closed with technical memos; financial statements signed off without material adjustments",
    "training": false
  },
  {
    "client": "Onemi Technology Solutions Private Limited",
    "industry": "Technology",
    "category": "Technical Accounting",
    "t1": "Finance team lacked internal expertise to interpret and apply new IFRS standards to the business",
    "t2": "Contetra provided a practical advisory on the standard - interpretation, policy design, and implementation",
    "t3": "Translated complex IFRS requirements into clear, actionable accounting policies for the team",
    "result": "IFRS standard applied correctly; policy documented and disclosure quality improved in the next reporting cycle",
    "training": false
  },
  {
    "client": "P D Navkar Bio Chem Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "Business had chosen an ERP platform but lacked the internal expertise to implement it effectively",
    "t2": "Contetra provided functional advisory across all finance modules - AP, AR, GL, and reporting",
    "t3": "Guided the implementation to ensure the ERP was configured for accuracy, control, and compliance",
    "result": "ERP implemented with proper finance controls embedded; team trained and system operationally sound",
    "training": false
  },
  {
    "client": "Parshwa Amrit",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Business decisions were being made without reliable financial models or scenario analysis",
    "t2": "Contetra provided monthly advisory sessions introducing financial modelling and decision frameworks",
    "t3": "Equipped the team with tools to evaluate options and stress-test assumptions before committing",
    "result": "Decision quality improved materially; finance team now models scenarios rather than reacting to outcomes",
    "training": false
  },
  {
    "client": "Parshwa Amrit",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "ERP was live but finance team lacked confidence in the system's outputs and reporting accuracy",
    "t2": "Contetra reviewed the configuration, corrected mapping errors, and aligned reports to management needs",
    "t3": "Restored trust in ERP-generated financials by fixing underlying configuration and reporting issues",
    "result": "Finance team now relies on ERP output with confidence; configuration corrected and reports validated",
    "training": false
  },
  {
    "client": "Paul Mason Consulting India Private Limited",
    "industry": "Professional Services",
    "category": "Technical Accounting",
    "t1": "New regulatory requirements meant the team needed rapid upskilling before the next reporting deadline",
    "t2": "Contetra delivered an accelerated training programme focused on the new standard's practical requirements",
    "t3": "Prepared the team in time for the reporting deadline with no external advisory dependency needed",
    "result": "Team ready for reporting deadline; regulatory training delivered on time and gap in capability closed",
    "training": false
  },
  {
    "client": "Pierian Services Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "Finance team needed functional expertise to configure the ERP correctly for their business model",
    "t2": "Contetra provided hands-on ERP advisory - configuration review, workflow design, and module optimisation",
    "t3": "Aligned the ERP configuration to the business's specific finance and operational requirements",
    "result": "ERP configuration optimised; system now reflects how the business actually operates rather than defaults",
    "training": false
  },
  {
    "client": "Powertronics Control System Private Limited",
    "industry": "Energy / Utilities",
    "category": "FP&A",
    "t1": "Finance team lacked the structure to manage budget-vs-actual reviews with business unit heads",
    "t2": "Contetra introduced a BU-level FP&A rhythm - monthly variance reviews, commentary, and action tracking",
    "t3": "Created accountability across business units through structured financial performance management",
    "result": "Budget discipline strengthened; business units now own their numbers with finance as a strategic partner",
    "training": false
  },
  {
    "client": "Practus Professional Services Private Limited",
    "industry": "Professional Services",
    "category": "Technical Accounting",
    "t1": "Company was transitioning to Ind AS and needed technical guidance on first-time adoption choices",
    "t2": "Contetra advised on transition elections, computed opening balance sheet adjustments, and prepared disclosures",
    "t3": "Managed the Ind AS transition smoothly with documented accounting rationale for all key choices",
    "result": "Ind AS transition completed; first-time adoption adjustments processed and disclosed correctly",
    "training": false
  },
  {
    "client": "Pragati Switchgears",
    "industry": "Auto / Engineering",
    "category": "FP&A",
    "t1": "Rapid growth had outpaced the finance function's capacity for meaningful forecasting and planning",
    "t2": "Contetra provided fractional CFO advisory - covering cash flow planning, budget governance, and KPI design",
    "t3": "Restored control over financial planning as the business scaled operations and headcount",
    "result": "Finance function stabilised through growth phase; planning and control frameworks now built to scale",
    "training": false
  },
  {
    "client": "Prodedgee Solutions Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "Business had chosen an ERP platform but lacked the internal expertise to implement it effectively",
    "t2": "Contetra provided functional advisory across all finance modules - AP, AR, GL, and reporting",
    "t3": "Guided the implementation to ensure the ERP was configured for accuracy, control, and compliance",
    "result": "ERP implemented with proper finance controls embedded; team trained and system operationally sound",
    "training": false
  },
  {
    "client": "Productdossier Solutions (India) Private Limited",
    "industry": "Technology",
    "category": "ERP",
    "t1": "ERP was live but finance team lacked confidence in the system's outputs and reporting accuracy",
    "t2": "Contetra reviewed the configuration, corrected mapping errors, and aligned reports to management needs",
    "t3": "Restored trust in ERP-generated financials by fixing underlying configuration and reporting issues",
    "result": "Finance team now relies on ERP output with confidence; configuration corrected and reports validated",
    "training": false
  },
  {
    "client": "Prudent Brokers Insurance Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "Operational processes varied across departments with no standardisation prior to ERP rollout",
    "t2": "Contetra standardised processes across business units and documented ERP-ready workflows",
    "t3": "Delivered consistent, ERP-aligned operating procedures across finance and operations teams",
    "result": "Process standardisation completed; ERP implementation proceeded on a clean, consistent foundation",
    "training": true
  },
  {
    "client": "Prudent Brokers Insurance Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Business needed a reliable, structured approach to budgeting and monthly financial reporting",
    "t2": "Contetra delivered ongoing FP&A advisory - budgeting support, actuals review, and management commentary",
    "t3": "Brought consistency and discipline to the financial calendar and performance review process",
    "result": "Structured budgeting and reporting established; management now has reliable monthly financial insight",
    "training": true
  },
  {
    "client": "Prudent Brokers Insurance Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "Technical Accounting",
    "t1": "Senior finance team wanted to explore how AI and automation tools apply to finance functions",
    "t2": "Contetra facilitated a CFO-level workshop on AI in finance - use cases, tools, and implementation risks",
    "t3": "Gave leadership a practical, grounded view of where finance automation adds real value",
    "result": "Leadership equipped to make informed decisions on finance automation; hype separated from genuine opportunity",
    "training": false
  },
  {
    "client": "QURE.AI Technologies Private Limited",
    "industry": "Technology",
    "category": "ERP",
    "t1": "Finance team needed functional expertise to configure the ERP correctly for their business model",
    "t2": "Contetra provided hands-on ERP advisory - configuration review, workflow design, and module optimisation",
    "t3": "Aligned the ERP configuration to the business's specific finance and operational requirements",
    "result": "ERP configuration optimised; system now reflects how the business actually operates rather than defaults",
    "training": false
  },
  {
    "client": "Quantum Consumer Solutions Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "Business had chosen an ERP platform but lacked the internal expertise to implement it effectively",
    "t2": "Contetra provided functional advisory across all finance modules - AP, AR, GL, and reporting",
    "t3": "Guided the implementation to ensure the ERP was configured for accuracy, control, and compliance",
    "result": "ERP implemented with proper finance controls embedded; team trained and system operationally sound",
    "training": false
  },
  {
    "client": "RS Virla Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Finance team was spending most of its time on transactional work with little strategic output",
    "t2": "Contetra re-focused the team with a structured FP&A programme covering forecasting, analysis, and review",
    "t3": "Freed finance bandwidth from routine tasks by instilling reporting discipline and analytical frameworks",
    "result": "Strategic finance capacity created; team now delivers insight alongside transactional accuracy",
    "training": false
  },
  {
    "client": "Ram Biotech",
    "industry": "Technology",
    "category": "FP&A",
    "t1": "Finance team was operating without a structured monthly review and advisory rhythm",
    "t2": "Contetra embedded a dedicated FP&A mentoring cadence - monthly reviews, KPI tracking, and coaching",
    "t3": "Built analytical capability within the team and improved the quality of financial decision-making",
    "result": "Finance function elevated with structured advisory; business decisions backed by better data",
    "training": false
  },
  {
    "client": "Rapg Developments Private Limited",
    "industry": "Real Estate",
    "category": "ERP",
    "t1": "ERP was live but finance team lacked confidence in the system's outputs and reporting accuracy",
    "t2": "Contetra reviewed the configuration, corrected mapping errors, and aligned reports to management needs",
    "t3": "Restored trust in ERP-generated financials by fixing underlying configuration and reporting issues",
    "result": "Finance team now relies on ERP output with confidence; configuration corrected and reports validated",
    "training": false
  },
  {
    "client": "Rochem Separation Systems India Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Finance team was producing reports without a clear framework for analysis or business commentary",
    "t2": "Contetra introduced a structured reporting pack and monthly FP&A review process",
    "t3": "Transformed raw financials into actionable management information for leadership decision-making",
    "result": "Management reporting improved significantly; leadership now has structured, commentary-driven insight",
    "training": false
  },
  {
    "client": "Rochem Separation Systems India Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "Business was scaling but lacked the system infrastructure to support reporting and compliance",
    "t2": "Contetra designed and implemented the ERP to meet current needs and support future growth",
    "t3": "Delivered a scalable system architecture with structured workflows, approval hierarchies, and audit trails",
    "result": "ERP implemented and stabilised; business now has the system foundation to scale with confidence",
    "training": false
  },
  {
    "client": "SEGULA Technologies",
    "industry": "Technology",
    "category": "ERP",
    "t1": "Finance team needed functional expertise to configure the ERP correctly for their business model",
    "t2": "Contetra provided hands-on ERP advisory - configuration review, workflow design, and module optimisation",
    "t3": "Aligned the ERP configuration to the business's specific finance and operational requirements",
    "result": "ERP configuration optimised; system now reflects how the business actually operates rather than defaults",
    "training": false
  },
  {
    "client": "SVN Opto Electronics Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Business lacked a reliable process for translating financial data into management insight",
    "t2": "Contetra provided ongoing CFO-level advisory, introducing MIS frameworks and performance reviews",
    "t3": "Enabled consistent, data-driven reporting cycles that improved leadership confidence",
    "result": "Monthly management reporting discipline established; finance team now operates more strategically",
    "training": false
  },
  {
    "client": "Saama Technologies, LLC",
    "industry": "Technology",
    "category": "Technical Accounting",
    "t1": "Finance team needed practical guidance on implementing a new accounting standard across the business",
    "t2": "Contetra led the standard implementation - impact assessment, policy design, and transition adjustments",
    "t3": "Managed the full transition with minimal disruption to reporting and maximum auditor confidence",
    "result": "New standard implemented cleanly; policy documented, adjustments processed, and auditors satisfied",
    "training": false
  },
  {
    "client": "Sakar Electricals and Electronics Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Finance leadership needed external support to build credibility and influence with the board",
    "t2": "Contetra partnered as a virtual CFO advisory resource - guiding budgeting, forecasting, and reviews",
    "t3": "Strengthened finance team's ability to present and defend numbers at senior leadership level",
    "result": "Finance function gained boardroom credibility; advisory engagement delivered lasting capability uplift",
    "training": false
  },
  {
    "client": "Salasar Gases (India) LLP",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Growing business outpaced the finance team's planning and performance management capability",
    "t2": "Contetra designed and ran a structured monthly FP&A support programme for the leadership team",
    "t3": "Closed the gap between business growth and finance capability through hands-on advisory",
    "result": "Finance team scaled with the business; structured planning and review discipline now embedded",
    "training": false
  },
  {
    "client": "Sanghvi Infotech P LTD",
    "industry": "Technology",
    "category": "FP&A",
    "t1": "Absence of structured financial planning was limiting the business's ability to manage cash and margins",
    "t2": "Contetra introduced budgeting frameworks, variance analysis, and monthly CFO-level review sessions",
    "t3": "Gave leadership clear visibility into cost drivers, revenue trends, and working capital dynamics",
    "result": "Cash and margin management improved significantly through structured FP&A advisory support",
    "training": false
  },
  {
    "client": "Sanil Chemicals",
    "industry": "Pharma / Life Sciences",
    "category": "FP&A",
    "t1": "Finance team relied on reactive reporting rather than forward-looking financial management",
    "t2": "Contetra shifted the team toward proactive planning - introducing rolling forecasts and scenario models",
    "t3": "Transformed finance from a reporting function into a business partner supporting strategy",
    "result": "Forward-looking finance culture established; leadership now uses forecasts to guide decisions",
    "training": false
  },
  {
    "client": "Scitara Technologies Private Limited",
    "industry": "Financial Services / NBFC",
    "category": "FP&A",
    "t1": "Growing company needed external financial planning expertise without a full-time CFO hire",
    "t2": "Contetra provided fractional FP&A support - covering forecasting, budget governance, and variance review",
    "t3": "Delivered CFO-quality financial oversight at a cost appropriate for the company's growth stage",
    "result": "Finance function punched above its weight; planning and review rigour embedded without a full CFO hire",
    "training": false
  },
  {
    "client": "Scitara Technologies Private Limited",
    "industry": "Financial Services / NBFC",
    "category": "Technical Accounting",
    "t1": "Business faced a complex accounting judgement with no clear precedent internally",
    "t2": "Contetra analysed the transaction, applied relevant Ind AS and IFRS standards, and issued a technical memo",
    "t3": "Provided a documented accounting position with supporting rationale for auditor review",
    "result": "Technical accounting resolved with full documentation; auditor accepted the position without qualification",
    "training": false
  },
  {
    "client": "Shree Krishna Textiles",
    "industry": "Apparel / Textile",
    "category": "FP&A",
    "t1": "Business lacked the internal capability to run a structured annual budget and quarterly reforecast",
    "t2": "Contetra designed the budgeting process, ran working sessions with department heads, and delivered the model",
    "t3": "Created an owner-operated budget that the business could update and defend independently",
    "result": "Annual budget delivered on time; department heads now accountable within a structured financial plan",
    "training": false
  },
  {
    "client": "Shreeji Jewellers",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Business decisions were being made without reliable financial models or scenario analysis",
    "t2": "Contetra provided monthly advisory sessions introducing financial modelling and decision frameworks",
    "t3": "Equipped the team with tools to evaluate options and stress-test assumptions before committing",
    "result": "Decision quality improved materially; finance team now models scenarios rather than reacting to outcomes",
    "training": false
  },
  {
    "client": "Shri Jagdamba Dyeing Mills Private Limited",
    "industry": "Apparel / Textile",
    "category": "FP&A",
    "t1": "Finance team lacked the structure to manage budget-vs-actual reviews with business unit heads",
    "t2": "Contetra introduced a BU-level FP&A rhythm - monthly variance reviews, commentary, and action tracking",
    "t3": "Created accountability across business units through structured financial performance management",
    "result": "Budget discipline strengthened; business units now own their numbers with finance as a strategic partner",
    "training": false
  },
  {
    "client": "Shri Raghuvir Steel Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Rapid growth had outpaced the finance function's capacity for meaningful forecasting and planning",
    "t2": "Contetra provided fractional CFO advisory - covering cash flow planning, budget governance, and KPI design",
    "t3": "Restored control over financial planning as the business scaled operations and headcount",
    "result": "Finance function stabilised through growth phase; planning and control frameworks now built to scale",
    "training": false
  },
  {
    "client": "South Bliss Properties Private Limited",
    "industry": "Real Estate",
    "category": "FP&A",
    "t1": "Leadership was flying blind on cost management and margin erosion between quarterly reviews",
    "t2": "Contetra introduced monthly flash reporting and variance commentary alongside ongoing FP&A advisory",
    "t3": "Gave leadership early visibility into cost and margin movements before they became critical issues",
    "result": "Proactive financial management established; cost surprises reduced through early-warning reporting",
    "training": false
  },
  {
    "client": "South Bliss Properties Private Limited",
    "industry": "Real Estate",
    "category": "ERP",
    "t1": "Business had chosen an ERP platform but lacked the internal expertise to implement it effectively",
    "t2": "Contetra provided functional advisory across all finance modules - AP, AR, GL, and reporting",
    "t3": "Guided the implementation to ensure the ERP was configured for accuracy, control, and compliance",
    "result": "ERP implemented with proper finance controls embedded; team trained and system operationally sound",
    "training": false
  },
  {
    "client": "South West Bliss Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Business needed a reliable, structured approach to budgeting and monthly financial reporting",
    "t2": "Contetra delivered ongoing FP&A advisory - budgeting support, actuals review, and management commentary",
    "t3": "Brought consistency and discipline to the financial calendar and performance review process",
    "result": "Structured budgeting and reporting established; management now has reliable monthly financial insight",
    "training": false
  },
  {
    "client": "South West Bliss Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "ERP was live but finance team lacked confidence in the system's outputs and reporting accuracy",
    "t2": "Contetra reviewed the configuration, corrected mapping errors, and aligned reports to management needs",
    "t3": "Restored trust in ERP-generated financials by fixing underlying configuration and reporting issues",
    "result": "Finance team now relies on ERP output with confidence; configuration corrected and reports validated",
    "training": false
  },
  {
    "client": "Star Agrotech",
    "industry": "Technology",
    "category": "FP&A",
    "t1": "Finance team was producing reports without a clear framework for analysis or business commentary",
    "t2": "Contetra introduced a structured reporting pack and monthly FP&A review process",
    "t3": "Transformed raw financials into actionable management information for leadership decision-making",
    "result": "Management reporting improved significantly; leadership now has structured, commentary-driven insight",
    "training": false
  },
  {
    "client": "Sundaram Multi Pap Limited",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "Business had no ERP foundation - finance and operations ran on disconnected spreadsheets and tools",
    "t2": "Contetra led full ERP implementation: requirements, BRD, CRP sessions, UAT, and go-live",
    "t3": "Delivered an integrated system covering finance, inventory, and operations with embedded controls",
    "result": "ERP live and operational; business now runs on a unified platform with real-time financial visibility",
    "training": true
  },
  {
    "client": "T. B. DESAI FAMILY PUBLIC CHARITABLE TRUST",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "Finance team lacked structured workflows in the ERP - usage was inconsistent across the organisation",
    "t2": "Contetra completed BRD sign-off, ran structured UAT, and oversaw go-live milestone delivery",
    "t3": "Standardised how the business uses the ERP by documenting and enforcing process-based workflows",
    "result": "ERP usage standardised post go-live; consistent workflows and documented processes now embedded",
    "training": false
  },
  {
    "client": "Tbof Foods Private Limited",
    "industry": "Food & Beverages",
    "category": "ERP",
    "t1": "Finance team needed functional expertise to configure the ERP correctly for their business model",
    "t2": "Contetra provided hands-on ERP advisory - configuration review, workflow design, and module optimisation",
    "t3": "Aligned the ERP configuration to the business's specific finance and operational requirements",
    "result": "ERP configuration optimised; system now reflects how the business actually operates rather than defaults",
    "training": false
  },
  {
    "client": "The Food Smith",
    "industry": "Food & Beverages",
    "category": "FP&A",
    "t1": "Finance team was spending most of its time on transactional work with little strategic output",
    "t2": "Contetra re-focused the team with a structured FP&A programme covering forecasting, analysis, and review",
    "t3": "Freed finance bandwidth from routine tasks by instilling reporting discipline and analytical frameworks",
    "result": "Strategic finance capacity created; team now delivers insight alongside transactional accuracy",
    "training": false
  },
  {
    "client": "The Peninsular Export Company",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Finance team was operating without a structured monthly review and advisory rhythm",
    "t2": "Contetra embedded a dedicated FP&A mentoring cadence - monthly reviews, KPI tracking, and coaching",
    "t3": "Built analytical capability within the team and improved the quality of financial decision-making",
    "result": "Finance function elevated with structured advisory; business decisions backed by better data",
    "training": false
  },
  {
    "client": "Tonkabi India Private Limited - 29",
    "industry": "Manufacturing / Industrial",
    "category": "Technical Accounting",
    "t1": "Finance team lacked bandwidth to prepare statutory financials alongside day-to-day operations",
    "t2": "Contetra stepped in as a technical finance partner - preparing, reviewing, and finalising statements",
    "t3": "Relieved the internal team of financial statement preparation while maintaining full technical accuracy",
    "result": "Financial statements delivered without straining internal resources; audit process completed smoothly",
    "training": false
  },
  {
    "client": "Trans One Trading & Contracting WLL",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Growing company needed external financial planning expertise without a full-time CFO hire",
    "t2": "Contetra provided fractional FP&A support - covering forecasting, budget governance, and variance review",
    "t3": "Delivered CFO-quality financial oversight at a cost appropriate for the company's growth stage",
    "result": "Finance function punched above its weight; planning and review rigour embedded without a full CFO hire",
    "training": false
  },
  {
    "client": "V Trans (India) Limited",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "Business had chosen an ERP platform but lacked the internal expertise to implement it effectively",
    "t2": "Contetra provided functional advisory across all finance modules - AP, AR, GL, and reporting",
    "t3": "Guided the implementation to ensure the ERP was configured for accuracy, control, and compliance",
    "result": "ERP implemented with proper finance controls embedded; team trained and system operationally sound",
    "training": false
  },
  {
    "client": "VEH Global India Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "ERP",
    "t1": "ERP was live but finance team lacked confidence in the system's outputs and reporting accuracy",
    "t2": "Contetra reviewed the configuration, corrected mapping errors, and aligned reports to management needs",
    "t3": "Restored trust in ERP-generated financials by fixing underlying configuration and reporting issues",
    "result": "Finance team now relies on ERP output with confidence; configuration corrected and reports validated",
    "training": false
  },
  {
    "client": "VNS Logistics",
    "industry": "Logistics & Supply Chain",
    "category": "FP&A",
    "t1": "Business lacked a reliable process for translating financial data into management insight",
    "t2": "Contetra provided ongoing CFO-level advisory, introducing MIS frameworks and performance reviews",
    "t3": "Enabled consistent, data-driven reporting cycles that improved leadership confidence",
    "result": "Monthly management reporting discipline established; finance team now operates more strategically",
    "training": false
  },
  {
    "client": "Vaaho Industries Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Finance leadership needed external support to build credibility and influence with the board",
    "t2": "Contetra partnered as a virtual CFO advisory resource - guiding budgeting, forecasting, and reviews",
    "t3": "Strengthened finance team's ability to present and defend numbers at senior leadership level",
    "result": "Finance function gained boardroom credibility; advisory engagement delivered lasting capability uplift",
    "training": false
  },
  {
    "client": "Valuetree Ingredients Private Limited",
    "industry": "Manufacturing / Industrial",
    "category": "Technical Accounting",
    "t1": "Financial statements were being prepared manually without a controlled, review-based process",
    "t2": "Contetra took end-to-end ownership of financial statement preparation under Ind AS / IFRS",
    "t3": "Delivered audit-ready statements with proper disclosures, schedules, and technical sign-off",
    "result": "Statutory financials prepared on time and audit-ready; technical quality and disclosure standards met",
    "training": false
  },
  {
    "client": "Varma & Sons",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Growing business outpaced the finance team's planning and performance management capability",
    "t2": "Contetra designed and ran a structured monthly FP&A support programme for the leadership team",
    "t3": "Closed the gap between business growth and finance capability through hands-on advisory",
    "result": "Finance team scaled with the business; structured planning and review discipline now embedded",
    "training": false
  },
  {
    "client": "Veefin Solutions  Limited",
    "industry": "Technology",
    "category": "Technical Accounting",
    "t1": "Business needed formal accounting policy papers to support IFRS-compliant financial reporting",
    "t2": "Contetra prepared technical memos covering applicable standards, policy choices, and disclosure requirements",
    "t3": "Delivered documentation that strengthened the finance team's ability to justify accounting positions",
    "result": "Technical memos issued; IFRS compliance documented and auditors provided with clear supporting rationale",
    "training": false
  },
  {
    "client": "Veefin Solutions  Limited",
    "industry": "Technology",
    "category": "ERP",
    "t1": "Finance team needed functional expertise to configure the ERP correctly for their business model",
    "t2": "Contetra provided hands-on ERP advisory - configuration review, workflow design, and module optimisation",
    "t3": "Aligned the ERP configuration to the business's specific finance and operational requirements",
    "result": "ERP configuration optimised; system now reflects how the business actually operates rather than defaults",
    "training": false
  },
  {
    "client": "Veefin Solutions Limited",
    "industry": "Technology",
    "category": "Technical Accounting",
    "t1": "New transaction type required technical accounting treatment the finance team had not dealt with before",
    "t2": "Contetra researched the applicable standards and delivered a technical position paper with journal entries",
    "t3": "Equipped the finance team with a clear, auditor-ready accounting treatment for the transaction",
    "result": "Accounting position established; transaction recorded correctly with supporting technical documentation",
    "training": false
  },
  {
    "client": "Vijay Infra",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Absence of structured financial planning was limiting the business's ability to manage cash and margins",
    "t2": "Contetra introduced budgeting frameworks, variance analysis, and monthly CFO-level review sessions",
    "t3": "Gave leadership clear visibility into cost drivers, revenue trends, and working capital dynamics",
    "result": "Cash and margin management improved significantly through structured FP&A advisory support",
    "training": false
  },
  {
    "client": "Vinca Cybertech Private Limited",
    "industry": "Technology",
    "category": "FP&A",
    "t1": "Finance team relied on reactive reporting rather than forward-looking financial management",
    "t2": "Contetra shifted the team toward proactive planning - introducing rolling forecasts and scenario models",
    "t3": "Transformed finance from a reporting function into a business partner supporting strategy",
    "result": "Forward-looking finance culture established; leadership now uses forecasts to guide decisions",
    "training": false
  },
  {
    "client": "Virla Gold Ispat LLP",
    "industry": "Manufacturing / Industrial",
    "category": "FP&A",
    "t1": "Business decisions were being made without reliable financial models or scenario analysis",
    "t2": "Contetra provided monthly advisory sessions introducing financial modelling and decision frameworks",
    "t3": "Equipped the team with tools to evaluate options and stress-test assumptions before committing",
    "result": "Decision quality improved materially; finance team now models scenarios rather than reacting to outcomes",
    "training": false
  },
  {
    "client": "Vrijesh Natural Fibre and Fabrics (India) PVT LTD",
    "industry": "Apparel / Textile",
    "category": "FP&A",
    "t1": "Finance team lacked the structure to manage budget-vs-actual reviews with business unit heads",
    "t2": "Contetra introduced a BU-level FP&A rhythm - monthly variance reviews, commentary, and action tracking",
    "t3": "Created accountability across business units through structured financial performance management",
    "result": "Budget discipline strengthened; business units now own their numbers with finance as a strategic partner",
    "training": false
  },
  {
    "client": "Warpdrive Tech Works LLP",
    "industry": "Technology",
    "category": "FP&A",
    "t1": "Rapid growth had outpaced the finance function's capacity for meaningful forecasting and planning",
    "t2": "Contetra provided fractional CFO advisory - covering cash flow planning, budget governance, and KPI design",
    "t3": "Restored control over financial planning as the business scaled operations and headcount",
    "result": "Finance function stabilised through growth phase; planning and control frameworks now built to scale",
    "training": false
  },
  {
    "client": "Yaraman Coffee Private Limited",
    "industry": "Food & Beverages",
    "category": "FP&A",
    "t1": "Finance team was spending most of its time on transactional work with little strategic output",
    "t2": "Contetra re-focused the team with a structured FP&A programme covering forecasting, analysis, and review",
    "t3": "Freed finance bandwidth from routine tasks by instilling reporting discipline and analytical frameworks",
    "result": "Strategic finance capacity created; team now delivers insight alongside transactional accuracy",
    "training": false
  }
];
