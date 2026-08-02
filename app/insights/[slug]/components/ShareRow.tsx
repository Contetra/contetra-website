"use client";

import { useState } from "react";
import { Check, Link2, Mail } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ShareRowProps {
  url: string;
  title: string;
}

const MONOGRAM_LINKS = [
  {
    label: "Share on LinkedIn",
    mark: "in",
    hrefFor: (url: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  {
    label: "Share on X",
    mark: "X",
    hrefFor: (url: string, title: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
  {
    label: "Share on Facebook",
    mark: "f",
    hrefFor: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
];

const iconButtonClass =
  "flex size-9 items-center justify-center rounded-full border border-border text-xs font-semibold text-brand-blue transition-colors hover:border-brand-green hover:bg-brand-green hover:text-white";

export function ShareRow({ url, title }: ShareRowProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Link copied");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy link");
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        Share
      </span>
      {MONOGRAM_LINKS.map(({ label, mark, hrefFor }) => (
        <a
          key={label}
          href={hrefFor(url, title)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={iconButtonClass}
        >
          {mark}
        </a>
      ))}
      <a
        href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`}
        aria-label="Share by email"
        className={iconButtonClass}
      >
        <Mail className="size-4" />
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy link"
        className={cn(iconButtonClass, copied && "border-brand-green text-brand-green")}
      >
        {copied ? <Check className="size-4" /> : <Link2 className="size-4" />}
      </button>
    </div>
  );
}
