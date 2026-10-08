import {
  ArrowLeftRight,
  ClipboardCheck,
  FileCheck,
  FileQuestionMark,
  FileSearch,
  FileSpreadsheet,
  FileText,
  Gauge,
  Network,
  RefreshCcw,
  ScrollText,
  type LucideIcon,
} from "lucide-react";

export interface ChallengeCard {
  icon: LucideIcon;
  title: string;
  body: string;
}

export interface CaseStudyEntry {
  client: string;
  industry: string;
  before: string;
  solution: string;
  after: string;
}

export const indAsIfrsUsGaapReporting = {
  eyebrow: "Ind AS, IFRS and US GAAP Reporting",

  hero: {
    title:
      "Ind AS, IFRS and US GAAP Reporting That Stands Up to Audit, Investor and Transaction Scrutiny",
    paragraphs: [
      "Reporting under Ind AS, IFRS and US GAAP is where accounting judgement, disclosure quality and the audit trail all meet. When conclusions are unclear, workings are weak or deadlines are tight, financial information stops being reliable. Contetra provides Ind AS, IFRS and US GAAP reporting services helps finance teams reach defensible positions, prepare the underlying calculations and produce audit-ready financial statements under each of these frameworks.",
      "We support recurring reporting as well as one-off complex matters. Our Ind AS reporting services spans standard interpretation, accounting policy papers, financial statement preparation, consolidation, disclosures and audit support under Ind AS, IFRS and US GAAP. For Indian reporting entities this extends to Schedule III presentation and disclosure, CARO 2020 reporting matters, related-party disclosure under Section 188, and support for the internal financial controls opinion under Section 143(3)(i). We work as an extension of your finance team, not as a distant adviser.",
    ],
    callout: {
      kicker:
        "Share the transaction, standard, reporting requirement or audit concern. We will help define the technical and execution work required.",
      primaryCta: "Discuss an Accounting Issue",
      secondaryCta: "Request an Audit-Readiness Review",
    },
  },

  trustedByLabel: "Trusted by finance and business leaders",

  challenges: {
    heading: "Where Ind AS, IFRS and US GAAP reporting usually goes wrong",
    intro:
      "Most finance teams do not lack accounting knowledge. They lack the time, the specialist depth or the documented workings to make complex positions withstand scrutiny. If any of these sound familiar, this is where we help.",
    items: [
      {
        icon: FileQuestionMark,
        title: "Complex judgements are unresolved or undocumented",
        body: "Revenue, leases, financial instruments, business combinations, consolidation or share-based payments require a defensible conclusion, and the supporting rationale does not yet exist.",
      },
      {
        icon: FileText,
        title: "Disclosures do not keep pace with the standards",
        body: "Schedule III, note disclosures and framework-specific requirements are incomplete or inconsistent, which raises audit queries and delays sign-off.",
      },
      {
        icon: FileSpreadsheet,
        title: "The close depends on manual, uncontrolled workings",
        body: "Financial statements are prepared without a controlled, review-based process, so quality varies and reconciliations cannot always be traced back to source.",
      },
      {
        icon: ArrowLeftRight,
        title: "Ind AS, IFRS and US GAAP differences are not mapped",
        body: "Group reporting or a foreign parent needs numbers under more than one framework, and the differences between them have not been identified, quantified or documented.",
      },
      {
        icon: FileSearch,
        title: "Audit queries arrive without ready evidence",
        body: "Year-end audit raises questions on complex judgements for which there is no memo, no calculation file and no clear standard reference.",
      },
      {
        icon: Gauge,
        title: "Internal capacity cannot absorb the technical peak",
        body: "A transaction, a new standard, a reporting conversion or an audit peak exceeds what the internal team can deliver alongside day-to-day operations.",
      },
    ] as ChallengeCard[],
  },

  solutions: {
    heading: "How Contetra supports Ind AS, IFRS and US GAAP reporting",
    intro:
      "We combine standards knowledge with practical delivery. That means we do not stop at the accounting memo. We help you implement the conclusion in the books, the financial statements and the audit file.",
    items: [
      {
        icon: ScrollText,
        title: "Technical accounting advisory",
        body: "Research and position papers for complex or judgemental matters across revenue, leases, financial instruments, business combinations, consolidation, share-based payments and other standards, under Ind AS, IFRS and US GAAP.",
      },
      {
        icon: FileSpreadsheet,
        title: "IFRS reporting services",
        body: "Our IFRS reporting services can include trial-balance review, reconciliations, schedules, primary statements, notes, accounting policies and group reporting packs, prepared to be audit-ready and fully documented.",
      },
      {
        icon: FileCheck,
        title: "Disclosures and Schedule III compliance",
        body: "Note disclosures, transition reconciliations, related-party and framework-specific requirements, and Schedule III presentation for Indian reporting entities.",
      },
      {
        icon: Network,
        title: "Consolidation and group reporting",
        body: "Control assessments, eliminations, non-controlling interests, foreign operations and consolidation adjustments, aligned to group timelines and standards.",
      },
      {
        icon: RefreshCcw,
        title: "US GAAP reporting services",
        body: "Our US GAAP reporting services can support businesses with impact assessment, policy design, opening adjustments and transition support when a new standard applies or when the same numbers are needed under more than one of Ind AS, IFRS and US GAAP.",
      },
      {
        icon: ClipboardCheck,
        title: "Audit support and close acceleration",
        body: "PBC coordination, audit schedules, evidence preparation, technical responses to auditor queries and remediation of recurring observations, so sign-off is faster and cleaner.",
      },
    ] as ChallengeCard[],
  },

  caseStudies: {
    heading: "Ind AS, IFRS and US GAAP reporting work we have delivered",
    intro:
      "A selection of engagements from our accounting and reporting practice. Explore the full set on our case studies page.",
    ctaLabel: "Browse all case studies",
    ctaHref: "/proof/case-studies",
    items: [
      {
        client: "Practus Professional Services",
        industry: "Professional Services",
        before:
          "the company was transitioning to Ind AS and needed technical guidance on first-time adoption choices.",
        solution:
          "Contetra advised on transition elections, computed the opening balance sheet adjustments and prepared the disclosures.",
        after:
          "the Ind AS transition was completed, with first-time adoption adjustments processed and disclosed correctly.",
      },
      {
        client: "BOB Financial Solutions",
        industry: "Financial Services and NBFC",
        before:
          "RBI and Ind AS 109 required a robust ECL model that the internal team lacked the expertise to build.",
        solution:
          "Contetra built the ECL computation model, covering stage classification, PD and LGD inputs and scenario weighting.",
        after:
          "the ECL model became operational, with provisioning compliant with Ind AS 109 and accepted by auditors without query.",
      },
      {
        client: "Kotak Securities",
        industry: "Financial Services and NBFC",
        before:
          "the finance team needed practical guidance on implementing a new accounting standard across the business.",
        solution:
          "Contetra led the standard implementation, including impact assessment, policy design and transition adjustments.",
        after:
          "the new standard was implemented cleanly, with the policy documented, adjustments processed and auditors satisfied.",
      },
      {
        client: "IMCD India",
        industry: "Manufacturing",
        before:
          "the company was preparing financials in-house but lacked technical Ind AS expertise for complex disclosures.",
        solution:
          "Contetra managed the full financial statement cycle, from trial balance to final signed-off statements.",
        after:
          "audit-ready financials were delivered, with technical disclosures correctly applied and well documented.",
      },
      {
        client: "Mastek",
        industry: "Diversified Group",
        before:
          "consolidated financial statements were being delayed due to technical complexity and resource gaps.",
        solution:
          "Contetra managed the consolidation process, including eliminations, adjustments and disclosure preparation.",
        after:
          "consolidated statements were delivered on time, with complex accounting judgements documented and auditor-ready.",
      },
      {
        client: "Bitonic Technology Labs",
        industry: "Pharma and Life Sciences",
        before:
          "the business needed formal accounting policy papers to support IFRS-compliant financial reporting.",
        solution:
          "Contetra prepared technical memos covering the applicable standards, policy choices and disclosure requirements.",
        after:
          "the technical memos were issued, IFRS compliance was documented and auditors were given clear supporting rationale.",
      },
      {
        client: "Onemi Technology Solutions",
        industry: "Technology",
        before:
          "the finance team lacked internal expertise to interpret and apply new IFRS standards to the business.",
        solution:
          "Contetra provided practical advisory on the standard, covering interpretation, policy design and implementation.",
        after:
          "the IFRS standard was applied correctly, with the policy documented and disclosure quality improved in the next reporting cycle.",
      },
      {
        client: "Ashapura Aromas",
        industry: "Manufacturing",
        before:
          "financial statements were being prepared manually without a controlled, review-based process.",
        solution:
          "Contetra took end-to-end ownership of financial statement preparation under Ind AS and IFRS.",
        after:
          "statutory financials were prepared on time and audit-ready, meeting technical quality and disclosure standards.",
      },
    ] as CaseStudyEntry[],
  },

  contact: {
    heading: "Strengthen the conclusion, the reporting output and the audit trail",
    body: "Discuss a complex Ind AS, IFRS or US GAAP reporting matter, a disclosure requirement, a reporting deadline, a transaction or an audit-readiness programme with our accounting and reporting team. Share where things stand today, and we will help define the technical and execution work required to make your reporting defensible.",
    phone: "+91 98338 18857",
    email: "growth@contetra.com",
    address:
      "Contetra Private Ltd, 225, 2nd floor, Swastik Disa Corporate Park, LBS Road, Opposite Rajhans Cinemas, Ghatkopar-west, Mumbai 400086",
    primaryCta: "Discuss an Accounting Issue",
    secondaryCta: "Request an Audit-Readiness Review",
  },
};
