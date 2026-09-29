"use client";

import { CSSProperties, ReactNode } from "react";
import { useInView } from "@/components/hooks/useInView";

/**
 * Scroll-reveal wrapper for a single block (a heading, a text column, an
 * image panel, ...). Pairs `useInView` with the `.reveal` utility in
 * globals.css. For per-item reveals inside a grid (cards, steps), call
 * `useInView` directly in a small named child component instead — wrapping
 * each grid item in an extra div here would break grid row-stretch sizing.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  threshold,
  rootMargin,
}: {
  children: ReactNode;
  className?: string;
  /** Optional transition delay in ms, for staggering a handful of sibling blocks. */
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold, rootMargin });
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal ${isInView ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
