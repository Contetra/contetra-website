import { FileCheck2, GraduationCap, LineChart, Workflow, type LucideIcon } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies";

export interface VerticalMeta {
  label: string;
  Icon: LucideIcon;
  /** Tint text color, e.g. for badges and stat tile numerals. */
  text: string;
  /** Tint background color. */
  bg: string;
  /** Tint border color. */
  border: string;
  /** Solid brand color + white text, for an active/selected filter chip. */
  solid: string;
}

export const VERTICAL_META: Record<CaseStudy["category"], VerticalMeta> = {
  ERP: {
    label: "ERP / Digital Transformation",
    Icon: Workflow,
    text: "text-brand-blue",
    bg: "bg-brand-blue-tint",
    border: "border-brand-blue/20",
    solid: "bg-brand-blue border-brand-blue text-white",
  },
  "FP&A": {
    label: "FP&A / CFO Advisory",
    Icon: LineChart,
    text: "text-brand-green",
    bg: "bg-brand-green-tint",
    border: "border-brand-green/20",
    solid: "bg-brand-green border-brand-green text-white",
  },
  "Technical Accounting": {
    label: "Technical Accounting",
    Icon: FileCheck2,
    text: "text-brand-teal",
    bg: "bg-brand-teal-tint",
    border: "border-brand-teal/20",
    solid: "bg-brand-teal border-brand-teal text-white",
  },
  Training: {
    label: "Training",
    Icon: GraduationCap,
    text: "text-brand-amber",
    bg: "bg-brand-amber-tint",
    border: "border-brand-amber/20",
    solid: "bg-brand-amber border-brand-amber text-white",
  },
};
