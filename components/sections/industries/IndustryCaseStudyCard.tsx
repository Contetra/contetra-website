import { Card, CardContent } from "@/components/ui/card";
import type { CaseStudy } from "@/lib/case-studies";
import { VerticalBadge } from "@/components/sections/industries/VerticalBadge";

interface IndustryCaseStudyCardProps {
  study: CaseStudy;
  animationDelayMs?: number;
}

export function IndustryCaseStudyCard({ study, animationDelayMs = 0 }: IndustryCaseStudyCardProps) {
  return (
    <Card
      className="h-full animate-in fade-in slide-in-from-bottom-2 rounded-2xl border border-border/70 shadow-sm transition-shadow duration-500 hover:shadow-md"
      style={{ animationDelay: `${animationDelayMs}ms`, animationFillMode: "both" }}
    >
      <CardContent className="flex h-full flex-col gap-4">
        <VerticalBadge category={study.category} />

        <div>
          <h3 className="font-heading text-base font-semibold leading-snug text-brand-blue">
            {study.client}
          </h3>
          <span className="mt-2 inline-flex w-fit rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
            {study.industry}
          </span>
        </div>

        <div>
          <span className="mb-2 block text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
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
