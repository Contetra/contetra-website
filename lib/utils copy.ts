import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { createElement, type ReactNode } from "react"
import Link from "next/link"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function renderWithBold(text: string): ReactNode[] {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1
      ? createElement(
          "strong",
          { key: i, className: "font-semibold text-foreground" },
          part
        )
      : part
  )
}

/** Renders **bold** text and [label](href) links inline within a plain-text string. */
export function renderRichText(text: string): ReactNode[] {
  const pattern = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g
  const nodes: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }
    if (match[1] !== undefined) {
      nodes.push(
        createElement(
          "strong",
          { key: key++, className: "font-semibold text-foreground" },
          match[1]
        )
      )
    } else {
      nodes.push(
        createElement(
          Link,
          {
            key: key++,
            href: match[3],
            className:
              "font-semibold text-brand-green underline underline-offset-2 hover:text-brand-green/80",
          },
          match[2]
        )
      )
    }
    lastIndex = pattern.lastIndex
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }
  return nodes
}
