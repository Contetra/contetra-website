export interface TeamMember {
  name: string;
  title: string;
  dept: string;
  slug: string;
  initials: string;
  photo: string | null;
}

/** Fallback for any future member added without an explicit `initials` value. */
export function getInitials(name: string): string {
  const parts = name.replace(/^CA\s+/, "").trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return `${first}${last}`.toUpperCase();
}

export const teamMembers: TeamMember[] = [
  // Leadership
  { name: "CA Amit Shrivastav", title: "CEO", dept: "Leadership", slug: "amit-shrivastav", initials: "AS", photo: null },
  { name: "CA Mayuresh Deshmukh", title: "COO", dept: "Leadership", slug: "mayuresh-deshmukh", initials: "MD", photo: null },
  { name: "Tejas Savla", title: "CMO", dept: "Leadership", slug: "tejas-savla", initials: "TS", photo: null },
  { name: "Amm Zulfiquar", title: "CFO", dept: "Leadership", slug: "amm-zulfiquar", initials: "AZ", photo: null },
  { name: "Neha Shrivastav", title: "CPO", dept: "Leadership", slug: "neha-shrivastav", initials: "NS", photo: null },
  { name: "Chitra Parameswaran", title: "Chief of Staff", dept: "Leadership", slug: "chitra-parameswaran", initials: "CP", photo: null },
  { name: "CA Vivek Kedia", title: "CCO", dept: "Leadership", slug: "vivek-kedia-cco", initials: "VK", photo: null },

  // Brand & Marketing
  { name: "Denal Radadia", title: "Head - Brand Identity", dept: "Brand & Marketing", slug: "denal-radadia", initials: "DR", photo: null },
  { name: "Pankaj Sakpal", title: "Manager - Brand Identity & IT Infrastructure", dept: "Brand & Marketing", slug: "pankaj-sakpal", initials: "PS", photo: null },
  { name: "Rui Manjrekar", title: "Video Editor", dept: "Brand & Marketing", slug: "rui-manjrekar", initials: "RM", photo: null },
  { name: "Aastha Varsneya", title: "Manager, Digital Marketing", dept: "Brand & Marketing", slug: "aastha-varsneya", initials: "AV", photo: null },
  { name: "Ankita Kedare", title: "Assistant Manager (Digital Marketing)", dept: "Brand & Marketing", slug: "ankita-kedare", initials: "AK", photo: null },
  { name: "Jay Jani", title: "Assistant Manager (Digital Marketing)", dept: "Brand & Marketing", slug: "jay-jani", initials: "JJ", photo: null },
  { name: "Anuja Shinde", title: "SEO Specialist", dept: "Brand & Marketing", slug: "anuja-shinde", initials: "AS", photo: null },
  { name: "Palak Kedia", title: "Head - Brand Identity", dept: "Brand & Marketing", slug: "palak-kedia", initials: "PK", photo: null },

  // Consulting
  { name: "Vivek Kedia", title: "Consulting Manager", dept: "Consulting", slug: "vivek-kedia", initials: "VK", photo: null },

  // Sales & Operations
  { name: "Kashish Rajpal", title: "Sales Operations Specialist", dept: "Sales & Operations", slug: "kashish-rajpal", initials: "KR", photo: null },

  // People & HR
  { name: "Bhumi Solanki", title: "HR Associate", dept: "People & HR", slug: "bhumi-solanki", initials: "BS", photo: null },

  // Digital Transformation & Automations
  { name: "Dipen Hingu", title: "Assistant Manager, Digital Transformation & Automations", dept: "Digital Transformation & Automations", slug: "dipen-hingu", initials: "DH", photo: null },
  { name: "Purvi Aditya Goswami", title: "Assistant Manager, Digital Transformation & Automations", dept: "Digital Transformation & Automations", slug: "purvi-aditya-goswami", initials: "PG", photo: null },
  { name: "Aaron Joseph", title: "Executive, Digital Transformation & Automations", dept: "Digital Transformation & Automations", slug: "aaron-joseph", initials: "AJ", photo: null },
  { name: "Sumit Babasaheb Gagare", title: "Executive, Digital Transformation & Automations", dept: "Digital Transformation & Automations", slug: "sumit-babasaheb-gagare", initials: "SG", photo: null },
  { name: "Pritam Mantri", title: "Assistant Manager, Digital Transformation & Automations", dept: "Digital Transformation & Automations", slug: "pritam-mantri", initials: "PM", photo: null },

  // FP&A
  { name: "Nikhil Gupta", title: "Manager, FP&A", dept: "FP&A", slug: "nikhil-gupta", initials: "NG", photo: null },
  { name: "Tamanna Reyani", title: "Assistant Manager, FP&A", dept: "FP&A", slug: "tamanna-reyani", initials: "TR", photo: null },
  { name: "Rupsa Chakraborty", title: "Senior Finance Analyst, FP&A", dept: "FP&A", slug: "rupsa-chakraborty", initials: "RC", photo: null },
  { name: "Pranit Pradeep Amberkar", title: "Senior Analyst, FP&A", dept: "FP&A", slug: "pranit-pradeep-amberkar", initials: "PA", photo: null },
  { name: "Ruchita Banthia", title: "Senior Executive, FP&A", dept: "FP&A", slug: "ruchita-banthia", initials: "RB", photo: null },
  { name: "Rajveer Kuldeep Khatri", title: "Finance Analyst, FP&A", dept: "FP&A", slug: "rajveer-kuldeep-khatri", initials: "RK", photo: null },
  { name: "Nikhil Nandu Gawade", title: "Finance Analyst, FP&A", dept: "FP&A", slug: "nikhil-nandu-gawade", initials: "NG", photo: null },
  { name: "Seema Gautam", title: "Finance Analyst, FP&A", dept: "FP&A", slug: "seema-gautam", initials: "SG", photo: null },

  // Technical Accounting & Reporting
  { name: "Yash Dinesh Kataria", title: "Senior Manager, Technical Accounting & Reporting", dept: "Technical Accounting & Reporting", slug: "yash-dinesh-kataria", initials: "YK", photo: null },
  { name: "Hardik Naranbhai Patel", title: "Assistant Manager, Technical Accounting & Reporting", dept: "Technical Accounting & Reporting", slug: "hardik-naranbhai-patel", initials: "HP", photo: null },
  { name: "Daniyal Chunawala", title: "Executive, Technical Accounting & Reporting", dept: "Technical Accounting & Reporting", slug: "daniyal-chunawala", initials: "DC", photo: null },

  // Offshore Accounting
  { name: "Rutvi Pedamkar", title: "Accounts Executive, Offshore Accounting", dept: "Offshore Accounting", slug: "rutvi-pedamkar", initials: "RP", photo: null },
  { name: "Tanvi Matre", title: "Executive, Offshore Accounting", dept: "Offshore Accounting", slug: "tanvi-matre", initials: "TM", photo: null },

  // Finance
  { name: "Bhavesh Sonavane", title: "Accounts Executive - Finance", dept: "Finance", slug: "bhavesh-sonavane", initials: "BS", photo: null },
];
