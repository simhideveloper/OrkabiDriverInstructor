"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { Container, SectionHeading, Reveal } from "@/components/ui";
import { useInView } from "@/components/hooks/useInView";
import type { FaqItem } from "@/content/types";

const STAGGER_STEP_MS = 60;
const STAGGER_CAP = 6;

export function Faq() {
  const { faq } = siteContent;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-paper py-16 md:scroll-mt-24 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="שאלות ותשובות" title="שאלות נפוצות" align="center" />
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl md:mt-12">
          {faq.map((item, index) => (
            <FaqAccordionItem
              key={item.question}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function FaqAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const buttonId = `faq-trigger-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${Math.min(index, STAGGER_CAP) * STAGGER_STEP_MS}ms` }}
      className={`reveal border-b border-hairline ${isInView ? "is-visible" : ""}`}
    >
      <button
        type="button"
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 rounded-lg py-5 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
      >
        <span className="font-heading font-semibold text-ink">{item.question}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-blue-700 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        className={`grid overflow-hidden transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <p className="pb-5 leading-relaxed text-slate">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
