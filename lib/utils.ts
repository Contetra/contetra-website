import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const maxChars = 22;
export const truncateLabel = (label: string) => {
  if (label?.length > maxChars) {
    return label?.slice(0, maxChars) + "...";
  }
  return label;
};

