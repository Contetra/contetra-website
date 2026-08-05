import type { SubPageContent } from "@/lib/content";
import { BarChart3, Database, FileSearch, Lightbulb, ListChecks, RefreshCcw, Target, Users } from "lucide-react";
import { createElement } from "react";
import { FpaForm } from "../components/fpa-form";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const fpaServicesPage: SubPageContent = {
  breadcrumbLabel: "FP&A Services",
  meta: {
    title: "FP&A Services in India | Forecasting & Performance | Contetra",
    description:
      "Build driver-based budgets, rolling forecasts, scenarios, profitability analysis and management reporting with outsourced FP&A specialists in India.",
  },
  jsonLdName: "FP&A Services",
  hero: {
    title: "FP&A Services That Turn Business Drivers into Better Decisions",
    paragraphs: [
      "A useful forecast is not a finance-only spreadsheet. It is a quantified view of how volume, price, mix, capacity, headcount, cost, collections and investment decisions are expected to shape performance. Contetra helps businesses build and run an FP&A model that connects operational drivers to financial outcomes.",
      "Our outsourced FP&A services can supplement an existing CFO and finance team, create a capability that does not yet exist or provide specialist support for planning, modelling and management reporting projects.",
    ],
    positioningLine:
      "Move from annual budgeting to a living management model that can be updated when the business changes.",
  },
  whatWeHelp: [
    {
      icon: Target,
      title: "Driver-based planning",
      body: "Annual operating plans, department assumptions, integrated P&L, balance sheet and cash-flow forecasts.",
    },
    {
      icon: RefreshCcw,
      title: "Rolling forecasts and scenarios",
      body: "Monthly or quarterly reforecasts, sensitivities, downside cases, capacity and funding scenarios.",
    },
    {
      icon: BarChart3,
      title: "Performance analysis",
      body: "Budget-versus-actual, price-volume-mix, margin bridges, cost drivers, KPI performance and management commentary.",
    },
    {
      icon: Lightbulb,
      title: "Decision models",
      body: "Pricing, new products, branches, projects, capacity, hiring, capital expenditure, funding and investment-return models.",
    },
  ],
  howWeWork: [
    { icon: FileSearch, body: "Define decisions and business drivers." },
    { icon: Database, body: "Assess data and modelling requirements." },
    { icon: ListChecks, body: "Build and validate the planning model." },
    { icon: Users, body: "Embed ownership, review cadence and forecast updates." },
  ],
  closingCta: {
    heading: "Build a forecast management can actually use",
    body: "Start with the decisions your current budget or reporting process does not support.",
    primaryCta: "Discuss Your FP&A Requirement",
    secondaryCta: "Request an FP&A Diagnostic",
     form: createElement(FpaForm, {
      trigger: createElement(
        Button,
        {
          variant: "outline",
          className: cn(
            buttonVariants({ size: "xl" }),
            "bg-brand-green text-white hover:bg-brand-green/90 cursor-pointer",
          ),
        },
        "Book a CFO & FP&A Diagnostic",
      ),
    }),
  },
};
