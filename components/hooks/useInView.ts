"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  /** Fraction of the target that must be visible to trigger. Default 0.15. */
  threshold?: number;
  /** Shrinks/grows the root's bounding box before intersection is computed. */
  rootMargin?: string;
  /** When true (default), stops observing once the element has entered the viewport once. */
  once?: boolean;
}

/**
 * Lightweight IntersectionObserver-backed "is this element visible" hook.
 * Used to drive scroll-reveal entrance animations. Dependency-free.
 *
 * Reduced-motion handling is intentionally left to CSS: consumers should pair
 * the returned `isInView` flag with a `.reveal` utility (see app/globals.css)
 * that is neutralized entirely under `prefers-reduced-motion: reduce`, so
 * that motion-sensitive users always see fully visible content regardless of
 * observer timing.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isInView } as const;
}
