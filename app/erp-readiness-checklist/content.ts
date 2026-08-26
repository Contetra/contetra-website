export type ChecklistCategory = {
  emoji: string;
  title: string;
  items: string[];
};

export const CHECKLIST_CATEGORIES: ChecklistCategory[] = [
  {
    emoji: "👷",
    title: "Process & People",
    items: [
      "Key finance processes are defined (AP/AR, invoicing, revenue recognition)",
      "You have documentation for your current finance workflows",
      "Roles and responsibilities are clear (who owns what in finance/ops?)",
      "You've faced repeated errors or delays in reporting",
      "Month-end closing takes more than 7 working days",
    ],
  },
  {
    emoji: "💰",
    title: "Finance & Investor Expectations",
    items: [
      "You've raised external capital or are planning to",
      "Investors have asked for better visibility / real-time MIS",
      "Your current stack doesn't support scenario modeling or profitability tracking",
      "You've had difficulty answering questions about CAC, LTV, or margins by product/region",
    ],
  },
  {
    emoji: "🛠️",
    title: "Systems & Tools",
    items: [
      "You're managing data across 4+ tools (Excel, Tally, CRM, Inventory, Payroll, etc.)",
      "You've outgrown your current accounting software (e.g., Tally, Zoho Books)",
      "Your dashboards rarely match what's actually happening on the ground",
      "You've had reconciliation issues between sales ops, finance, and inventory",
    ],
  },
  {
    emoji: "🚀",
    title: "Growth Signals",
    items: [
      "You've doubled team size in the last 12–18 months",
      "You're planning geographic expansion or multiple SKUs",
      "You want better control over cost centers and burn rate",
      "Your team spends more time cleaning data than analyzing it",
    ],
  },
];

export const TOTAL_CHECKLIST_ITEMS = CHECKLIST_CATEGORIES.reduce(
  (sum, category) => sum + category.items.length,
  0,
);

export const TURNOVER_OPTIONS = [
  "<15 crores",
  "15-30 crores",
  "30-60 crores",
  "60-100 crores",
  ">100 crores",
] as const;

export type ResultTier = {
  emoji: string;
  heading: string;
  paragraphs: string[];
  bullets: string[];
  closing: string;
  matches: (score: number) => boolean;
};

export const RESULT_TIERS: ResultTier[] = [
  {
    emoji: "✅",
    heading: "You're ERP-Ready",
    paragraphs: [
      "You're clearly at a stage where ERP can drive real value.",
      "Your processes, tools, and team maturity show that you're ready to implement; the key now is to do it right. The biggest risk at this stage? Rushing into a generic ERP without mapping it to your business model.",
      "We'd be happy to guide you through the next steps:",
    ],
    bullets: [
      "Vendor/solution fit benchmarking",
      "Building an ERP roadmap that grows with you",
      "Avoiding common post-go-live pitfalls",
    ],
    closing:
      "Let us know if you'd like a 30-min call to discuss implementation strategies tailored to your growth path.",
    matches: (score) => score >= 12,
  },
  {
    emoji: "🟡",
    heading: "You're Close. But Prep First.",
    paragraphs: [
      "You're close to ERP readiness, but a few foundational gaps remain.",
      "This is a great time to pause and align internally before jumping into implementation. Often, spending 4–6 weeks prepping your team, cleaning processes, and aligning systems can save months of headaches post-ERP.",
      "We recommend:",
    ],
    bullets: [
      "Mapping your current finance workflows",
      "Documenting pain points clearly",
      "Getting key stakeholders aligned on what ERP success looks like",
    ],
    closing:
      "Want help doing a deeper diagnostic? Let's set up a quick discovery chat: we'll share what others in your stage are doing right.",
    matches: (score) => score >= 7 && score <= 11,
  },
  {
    emoji: "🔴",
    heading: "Not ERP-Ready Yet (And That's Okay!)",
    paragraphs: [
      "ERP may not be the best next step just yet.",
      "Based on your inputs, there are still some building blocks to strengthen: process clarity, system maturity, or even team alignment.",
      "The good news? You're thinking ahead, and that puts you ahead. Here's what we recommend focusing on for the next few months:",
    ],
    bullets: [
      "Streamline core finance workflows",
      "Reduce reliance on manual tasks",
      "Set up basic dashboards and monthly reporting rhythms",
    ],
    closing:
      "Once these are in place, ERP will work for you & not against you. If you'd like, we can share a 30-day action plan to help you move toward readiness.",
    matches: (score) => score <= 6,
  },
];

export function getResultTier(score: number): ResultTier {
  return (
    RESULT_TIERS.find((tier) => tier.matches(score)) ??
    RESULT_TIERS[RESULT_TIERS.length - 1]
  );
}
