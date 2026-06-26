"use client";

import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { memo } from "react";
import type { Ebook } from "./types";

type EbookSpotlightPreviewProps = {
  activeEbook?: Ebook;
  activeEbookIndex: number;
  total: number;
  onMove: (direction: "prev" | "next") => void;
  onOpen: (link: string) => void;
};

export const EbookSpotlightPreview = memo(function EbookSpotlightPreview({
  activeEbook,
  activeEbookIndex,
  total,
  onMove,
  onOpen,
}: EbookSpotlightPreviewProps) {
  if (!activeEbook) return null;

  return (
    <div className="h-fit rounded-2xl border border-neutral-200 bg-[#F8FAFF] p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <Highlighter
          iterations={2}
          animationDuration={1500}
          padding={12}
          action="box"
          color="#FF9800"
        >
          <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-300">
            {activeEbookIndex + 1} / {total}
          </p>
        </Highlighter>
      </div>

      <div className="grid gap-6 md:grid-cols-[minmax(240px,300px)_minmax(0,1fr)] md:items-center">
        <div className="mx-auto w-full max-w-[280px]">
          <Image
            src={activeEbook.image}
            alt={activeEbook.title}
            width={320}
            height={420}
            sizes="(max-width: 767px) 80vw, (max-width: 1279px) 34vw, 320px"
            className="h-auto w-full rounded-xl object-contain"
          />
        </div>

        <div className="flex flex-col items-start gap-15">
          <h3 className="text-balance text-2xl font-bold leading-tight text-neutral-900 dark:text-neutral-100">
            {activeEbook.title}
          </h3>
          
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onMove("prev")}
              className="cursor-pointer inline-flex items-center gap-2 rounded-md border border-neutral-300 px-3 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
              <ChevronLeft className="h-4 w-4" />
              Prev
            </button>
            <button
              type="button"
              onClick={() => onMove("next")}
              className="cursor-pointer inline-flex items-center gap-2 rounded-md border border-neutral-300 px-3 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
            <Button
              type="button"
              onClick={() => onOpen(activeEbook.link)}
              className="cursor-pointer bg-contetra-blue dark:text-white"
            >
              View Ebook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});
