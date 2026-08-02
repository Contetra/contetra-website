import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { CaseStudy } from "@/lib/case-studies";

const CATEGORY_LABELS: Record<CaseStudy["category"], string> = {
  ERP: "ERP / Digital Transformation",
  "FP&A": "FP&A / CFO Advisory",
  "Technical Accounting": "Technical Accounting",
  Training: "Training",
};

interface CaseStudyCardProps {
  study: CaseStudy;
  animationDelayMs?: number;
}

export function CaseStudyCard({ study, animationDelayMs = 0 }: CaseStudyCardProps) {
  return (
    <Card
      className="h-full animate-in fade-in slide-in-from-bottom-2 rounded-2xl border border-border/70 shadow-sm duration-500"
      style={{ animationDelay: `${animationDelayMs}ms`, animationFillMode: "both" }}
    >
      <CardContent className="flex h-full flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-base font-semibold leading-snug text-brand-blue">
            {study.client}
          </h3>
          <span className="shrink-0 rounded-full bg-brand-blue-tint px-2.5 py-1 text-[11px] font-medium whitespace-nowrap text-brand-blue">
            {study.industry}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-brand-green-tint px-2.5 py-1 text-[11px] font-semibold text-brand-green">
            {CATEGORY_LABELS[study.category]}
          </span>
          {study.training && (
            <span className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
              <GraduationCap className="size-3" />
              Training
            </span>
          )}
        </div>

        <div>
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            Transformation
          </span>
          <ul className="space-y-1.5 text-sm leading-relaxed text-muted-foreground">
            {[study.t1, study.t2, study.t3].map((step, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-brand-blue/40" />
                {step}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto rounded-xl border-l-2 border-brand-green bg-brand-green-tint/50 px-3 py-2.5 text-sm leading-relaxed text-foreground">
          <span className="font-semibold text-brand-green">Result: </span>
          {study.result}
        </div>
      </CardContent>
    </Card>
  );
}
