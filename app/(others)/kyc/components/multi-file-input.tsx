"use client";

import { useRef } from "react";
import { X, Paperclip } from "lucide-react";
import { cn } from "@/lib/utils";

interface MultiFileInputProps {
  value: File[];
  onChange: (files: File[]) => void;
  accept?: string;
  className?: string;
  maxFiles?: number;
}

export function MultiFileInput({
  value = [],
  onChange,
  accept,
  className,
  maxFiles = 5,
}: MultiFileInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const incoming = Array.from(e.target.files ?? []);
    // Merge: avoid duplicates by name+size
    const existing = value;
    const merged = [...existing];
    for (const file of incoming) {
      const isDuplicate = existing.some(
        (f) => f.name === file.name && f.size === file.size,
      );
      if (!isDuplicate) merged.push(file);
    }
    onChange(merged.slice(0, maxFiles));
    // Reset input so same file can be re-added after removal
    e.target.value = "";
  };

  const removeFile = (index: number) => {
    const updated = value.filter((_, i) => i !== index);
    onChange(updated);
  };

  return (
    <div className={cn("flex flex-col gap-2 cursor-pointer", className)}>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className={cn(
          "cursor-pointer flex h-11 w-full items-center gap-2 rounded-[14px] border border-[#E8CFAF]",
          "bg-white px-3 text-sm text-[#9CA3AF] transition-colors",
          "hover:bg-[#FFFDF8] dark:border-[#344155] dark:bg-[#0F172A]",
          "dark:text-[#6B7280] dark:hover:bg-[#172036]",
          value.length >= maxFiles && "cursor-not-allowed opacity-50",
        )}
        disabled={value.length >= maxFiles}
      >
        <Paperclip className="h-4 w-4 shrink-0" />
        <span>
          {value.length >= maxFiles
            ? `Max ${maxFiles} files selected`
            : "Click to add files…"}
        </span>
      </button>

      {/* Hidden native input */}
      <input
        ref={inputRef}
        type="file"
        multiple
        accept={accept}
        className="hidden"
        onChange={handleFileChange}
      />

      {/* File chips */}
      {value.length > 0 && (
        <ul className="flex flex-col gap-1.5">
          {value.map((file, i) => (
            <li
              key={`${file.name}-${file.size}-${i}`}
              className={cn(
                "flex items-center justify-between gap-2 rounded-[10px] ",
                "border border-[#E8CFAF] bg-[#FFFDF8] px-3 py-2 text-[12px]",
                "dark:border-[#344155] dark:bg-[#172036]",
              )}
            >
              <span className="max-w-[150px] truncate text-[#2B2B2B] dark:text-[#E5E7EB] sm:max-w-[450px]">
                {file.name.length > 100
                  ? `${file.name.slice(0, 250)}...`
                  : file.name}
              </span>
              <span className="shrink-0 text-[#9CA3AF]">
                {(file.size / 1024).toFixed(0)} KB
              </span>
              <button
                type="button"
                onClick={() => removeFile(i)}
                className="shrink-0 rounded-full p-0.5 text-[#9CA3AF] hover:bg-red-100 hover:text-red-500 dark:hover:bg-red-900/30"
                aria-label={`Remove ${file.name}`}
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
