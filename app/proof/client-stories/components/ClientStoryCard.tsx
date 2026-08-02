import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  FolderCog,
  Lightbulb,
  Plus,
  Quote,
  Sparkles,
  ThumbsUp,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { parseStagePoints } from "@/lib/parseStoryText";
import type { ClientStory } from "@/lib/client-stories";

type StageVariant = "before" | "solution" | "after";

const PANEL_STYLES: Record<StageVariant, string> = {
  before: "border-amber-200/70 bg-amber-50/60",
  solution: "border-brand-blue/15 bg-brand-blue-tint",
  after: "border-brand-green/25 bg-brand-green-tint/60",
};

const ICON_BOX_STYLES: Record<StageVariant, string> = {
  before: "bg-white text-amber-600",
  solution: "bg-white text-brand-blue",
  after: "bg-white text-brand-green",
};

const LABEL_STYLES: Record<StageVariant, string> = {
  before: "text-amber-700",
  solution: "text-brand-blue",
  after: "text-brand-green",
};

const TEXT_STYLES: Record<StageVariant, string> = {
  before: "text-amber-900/80",
  solution: "text-brand-blue/80",
  after: "text-foreground/80",
};

function StageArrow() {
  return (
    <div
      className="flex items-center justify-center py-1 lg:py-0"
      role="img"
      aria-label="leads to"
    >
      <ArrowDown className="size-5 text-brand-green lg:hidden" aria-hidden />
      <ArrowRight className="hidden size-5 text-brand-green lg:block" aria-hidden />
    </div>
  );
}

function BulletList({ points, tone }: { points: string[]; tone: StageVariant }) {
  return (
    <ul className={cn("space-y-1.5 text-sm leading-relaxed", TEXT_STYLES[tone])}>
      {points.map((point, i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-1.5 size-1 shrink-0 rounded-full bg-current opacity-50" />
          {point}
        </li>
      ))}
    </ul>
  );
}

function StagePoints({ points, tone }: { points: string[]; tone: StageVariant }) {
  if (points.length === 0) return null;

  if (points.length === 1) {
    const text = points[0];
    const LIMIT = 420;
    if (text.length <= LIMIT) {
      return <p className={cn("text-sm leading-relaxed", TEXT_STYLES[tone])}>{text}</p>;
    }
    const cut = text.slice(0, LIMIT).replace(/\s+\S*$/, "");
    const rest = text.slice(cut.length).trim();
    return (
      <div>
        <p className={cn("text-sm leading-relaxed", TEXT_STYLES[tone])}>{cut}…</p>
        <details className="group mt-1.5">
          <summary className="inline-flex cursor-pointer list-none items-center gap-1 text-xs font-semibold text-brand-blue marker:content-none">
            Read more
            <ChevronDown className="size-3 transition-transform group-open:rotate-180" />
          </summary>
          <p className={cn("mt-1.5 text-sm leading-relaxed", TEXT_STYLES[tone])}>{rest}</p>
        </details>
      </div>
    );
  }

  const LIMIT = 3;
  if (points.length <= LIMIT) {
    return <BulletList points={points} tone={tone} />;
  }
  const preview = points.slice(0, LIMIT);
  const rest = points.slice(LIMIT);
  return (
    <div>
      <BulletList points={preview} tone={tone} />
      <details className="group mt-1.5">
        <summary className="inline-flex cursor-pointer list-none items-center gap-1 text-xs font-semibold text-brand-blue marker:content-none">
          Read more
          <ChevronDown className="size-3 transition-transform group-open:rotate-180" />
        </summary>
        <div className="mt-1.5">
          <BulletList points={rest} tone={tone} />
        </div>
      </details>
    </div>
  );
}

interface StagePanelProps {
  variant: StageVariant;
  label: string;
  icon: LucideIcon;
  points: string[];
  children?: React.ReactNode;
}

function StagePanel({ variant, label, icon: Icon, points, children }: StagePanelProps) {
  return (
    <div className={cn("flex h-full flex-col gap-3 rounded-2xl border p-4", PANEL_STYLES[variant])}>
      <div className="flex items-center gap-2">
        <div className={cn("flex size-7 items-center justify-center rounded-lg", ICON_BOX_STYLES[variant])}>
          <Icon className="size-4" />
        </div>
        <span className={cn("text-xs font-semibold uppercase tracking-wide", LABEL_STYLES[variant])}>
          {label}
        </span>
      </div>
      <StagePoints points={points} tone={variant} />
      {children}
    </div>
  );
}

interface ClientStoryCardProps {
  story: ClientStory;
  animationDelayMs?: number;
}

export function ClientStoryCard({ story, animationDelayMs = 0 }: ClientStoryCardProps) {
  const before = parseStagePoints(story.Problem);
  const solutionPoints = parseStagePoints(story.Solution);
  const newFiles = parseStagePoints(story.NewFiles);
  const wins = [story.Win1, story.Win2, story.Win3].filter((w) => w && w.trim());

  const outcomeText = story.Outcome?.trim();
  let afterSource: string;
  let afterUsedWinsAsFallback = false;
  let afterUsedFeedbackAsFallback = false;

  if (outcomeText) {
    afterSource = outcomeText;
  } else if (wins.length > 0) {
    afterSource = wins.join("\n");
    afterUsedWinsAsFallback = true;
  } else if (story.FeedbackClient?.trim()) {
    afterSource = story.FeedbackClient.trim();
    afterUsedFeedbackAsFallback = true;
  } else {
    afterSource = "Engagement delivered; outcome details available on request.";
  }

  const afterPoints = parseStagePoints(afterSource);
  const showExtraWins = wins.length > 0 && !afterUsedWinsAsFallback;
  const extraWinLines = wins.flatMap((w) => parseStagePoints(w));
  const showTestimonial = Boolean(story.FeedbackClient?.trim()) && !afterUsedFeedbackAsFallback;

  return (
    <div
      className="animate-in fade-in slide-in-from-bottom-2 rounded-2xl border border-border/70 bg-white p-5 shadow-sm duration-500 sm:p-6"
      style={{ animationDelay: `${animationDelayMs}ms`, animationFillMode: "both" }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-heading text-lg font-semibold text-brand-blue">{story.Client}</h3>
          {story.Business && (
            <p className="mt-1 max-w-xl text-xs text-muted-foreground">{story.Business}</p>
          )}
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          <span className="rounded-full bg-brand-green-tint px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap text-brand-green">
            {story.Service}
          </span>
          {story.Industry && (
            <span className="rounded-full bg-brand-blue-tint px-2.5 py-1 text-[11px] font-medium whitespace-nowrap text-brand-blue">
              {story.Industry}
            </span>
          )}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch lg:gap-4">
        <StagePanel variant="before" label="Before" icon={TriangleAlert} points={before} />

        <StageArrow />

        <StagePanel variant="solution" label="Solution" icon={Lightbulb} points={solutionPoints}>
          {newFiles.length > 0 && (
            <div className="rounded-xl border border-brand-blue/15 bg-white/60 p-3">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-brand-blue">
                <FolderCog className="size-3.5" />
                What we built
              </div>
              <ul className="mt-1.5 space-y-1 text-xs leading-relaxed text-brand-blue/80">
                {newFiles.map((f, i) => (
                  <li key={i} className="flex gap-1.5">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-current opacity-50" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </StagePanel>

        <StageArrow />

        <StagePanel variant="after" label="After" icon={ThumbsUp} points={afterPoints}>
          {showExtraWins && (
            <div className="rounded-xl border border-brand-green/20 bg-white/60 p-3">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-brand-green">
                <Sparkles className="size-3.5" />
                Additional wins
              </div>
              <ul className="mt-1.5 space-y-1 text-xs leading-relaxed text-foreground/80">
                {extraWinLines.map((line, i) => (
                  <li key={i} className="flex gap-1.5">
                    <Plus className="mt-0.5 size-3 shrink-0 text-brand-green" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </StagePanel>
      </div>

      {showTestimonial && (
        <blockquote className="mt-5 flex gap-2 rounded-2xl border-l-2 border-brand-green bg-brand-green-tint/40 p-4 text-sm leading-relaxed text-foreground italic">
          <Quote className="mt-0.5 size-4 shrink-0 text-brand-green" aria-hidden />
          <p>
            &ldquo;{story.FeedbackClient}&rdquo;{" "}
            <span className="font-semibold text-brand-blue not-italic">— {story.Client}</span>
          </p>
        </blockquote>
      )}
    </div>
  );
}
