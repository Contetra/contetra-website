"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type SlideUpTextProps = React.PropsWithChildren<{
  className?: string
  text?: string
}>

export function SlideUpText({ className, children, text }: SlideUpTextProps) {
  const content = typeof children === "string" || typeof children === "number" ? String(children) : text ?? ""
  return (
    <span className={cn("slide-up-text", className)} data-text={content}>
      <span className="slide-up-text__inner">{content}</span>
    </span>
  )
}


