"use client";


import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { memo } from "react";
import type { Ebook } from "./types";

type SpotlightCardProps = {
  ebook: Ebook;
  index: number;
  isActive: boolean;
  onSelect: (index: number) => void;
  onOpen: (link: string) => void;
};

type OpenEbookIconButtonProps = {
  title: string;
  link: string;
  onOpen: (link: string) => void;
};

const OpenEbookIconButton = memo(function OpenEbookIconButton({
  title,
  link,
  onOpen,
}: OpenEbookIconButtonProps) {
  return (
    <button
      type="button"
      aria-label={`Open ${title} in new tab`}
      title="Open in new tab"
      onClick={() => onOpen(link)}
      className="cursor-pointer absolute right-2 top-2 z-20 inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 bg-white/90 text-neutral-600 transition hover:text-contetra-blue dark:border-neutral-700 dark:bg-neutral-900/90 dark:text-neutral-300"
    >
   
        <ExternalLink className="h-3.5 w-3.5" />
    </button>
  );
});

const SpotlightCard = memo(function SpotlightCard({
  ebook,
  index,
  isActive,
  onSelect,
  onOpen,
}: SpotlightCardProps) {
  return (
    <div
      className={`group relative rounded-xl border p-3 text-left transition ${
        isActive
          ? "border-contetra-blue border-3 bg-blue-50 shadow-md dark:border-blue-400 dark:bg-blue-950/40"
          : "border-neutral-200 hover:border-contetra-blue/50 hover:shadow-sm dark:border-neutral-800 dark:hover:border-blue-400/70"
      }`}
    >
      <button
        type="button"
        aria-label={`Select ${ebook.title}`}
        onClick={() => onSelect(index)}
        onDoubleClick={() => onOpen(ebook.link)}
        className="absolute inset-0 z-10 rounded-xl"
      />

      <OpenEbookIconButton title={ebook.title} link={ebook.link} onOpen={onOpen} />
      <div className="pointer-events-none relative z-0">
        <Image
          src={ebook.image}
          alt={ebook.title}
          width={180}
          height={230}
          sizes="(max-width: 1023px) 30vw, 18vw"
          className="h-auto w-full rounded-lg object-contain"
        />
        <p className="mt-3 line-clamp-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
          {ebook.title}
        </p>
      </div>
    </div>
  );
});

type EbookSpotlightListProps = {
  ebooks: Ebook[];
  activeEbookIndex: number;
  onSelect: (index: number) => void;
  onOpen: (link: string) => void;
};

export const EbookSpotlightList = memo(function EbookSpotlightList({
  ebooks,
  activeEbookIndex,
  onSelect,
  onOpen,
}: EbookSpotlightListProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
      {ebooks.map((ebook, index) => (
        <SpotlightCard
          key={ebook.title}
          ebook={ebook}
          index={index}
          isActive={index === activeEbookIndex}
          onSelect={onSelect}
          onOpen={onOpen}
        />
      ))}
    </div>
  );
});
