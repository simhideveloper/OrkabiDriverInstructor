"use client";

import { useEffect, useRef, useState } from "react";
import { Phone } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { Container, Ltr, Button, LearnerSign } from "@/components/ui";

type Indicator = {
  left: number;
  width: number;
};

export function Nav() {
  const { business, nav } = siteContent;

  const [activeHref, setActiveHref] = useState<string | null>(null);
  const [indicator, setIndicator] = useState<Indicator | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  const navRef = useRef<HTMLElement | null>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const visibleIds = useRef<Set<string>>(new Set());

  // Respect prefers-reduced-motion for the sliding active-link indicator.
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReducedMotion(query.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  // Track the section nearest the vertical center of the viewport as "active".
  useEffect(() => {
    const ids = nav.map((link) => link.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleIds.current.add(entry.target.id);
          } else {
            visibleIds.current.delete(entry.target.id);
          }
        }

        const firstVisible = ids.find((id) => visibleIds.current.has(id));
        if (firstVisible) {
          setActiveHref(`#${firstVisible}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
    // nav is a static import from site-content and never changes at runtime.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Measure the active link so the indicator can slide beneath it.
  useEffect(() => {
    const updatePosition = () => {
      if (!activeHref) {
        setIndicator(null);
        return;
      }
      const linkEl = linkRefs.current.get(activeHref);
      if (!linkEl) return;
      setIndicator({ left: linkEl.offsetLeft, width: linkEl.offsetWidth });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [activeHref]);

  // Scroll-progress bar, throttled to one measurement per animation frame.
  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-paper/95 backdrop-blur">
      {/* Scroll-progress bar. Anchored to the inline-start edge so it fills
          start-to-end (right-to-left) to match RTL reading direction. */}
      <div
        className="absolute inset-x-0 top-0 h-[3px] transform-gpu bg-blue-600 will-change-transform"
        style={{
          transform: `scaleX(${scrollProgress / 100})`,
          transformOrigin: "right",
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <a
            href="#hero"
            className="flex items-center gap-2 font-heading text-xl font-extrabold text-ink"
          >
            <LearnerSign size={28} className="shrink-0" />
            {business.name}
          </a>

          <nav ref={navRef} className="relative hidden items-center gap-8 md:flex">
            {indicator ? (
              <span
                className={`pointer-events-none absolute -bottom-2 h-0.5 rounded-full bg-blue-700 ${
                  reducedMotion ? "" : "transition-[left,width] duration-300 ease-out"
                }`}
                style={{ left: indicator.left, width: indicator.width }}
                aria-hidden="true"
              />
            ) : null}
            {nav.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <a
                  key={link.href}
                  ref={(el) => {
                    if (el) linkRefs.current.set(link.href, el);
                  }}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-700 ${
                    isActive ? "text-blue-700" : "text-ink"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href={business.phoneHref}
              className="text-sm font-semibold text-ink transition-colors duration-200 hover:text-blue-700"
            >
              <Ltr>{business.phoneDisplay}</Ltr>
            </a>
            <Button variant="whatsapp" size="sm" href={business.whatsappHref} target="_blank" rel="noopener noreferrer">
              וואטסאפ
            </Button>
          </div>

          <a
            href={business.phoneHref}
            aria-label="התקשרו אלינו"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white transition-colors duration-200 hover:bg-blue-700 md:hidden"
          >
            <Phone size={18} />
          </a>
        </div>
      </Container>
    </header>
  );
}
