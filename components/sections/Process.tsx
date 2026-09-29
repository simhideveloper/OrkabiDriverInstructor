"use client";

import { siteContent } from "@/content/site-content";
import { Container, SectionHeading, Ltr, Reveal } from "@/components/ui";
import { useInView } from "@/components/hooks/useInView";
import type { ProcessStep } from "@/content/types";

const STAGGER_STEP_MS = 90;
const STAGGER_CAP = 4;

export function Process() {
  const { process } = siteContent;

  return (
    <section id="process" className="bg-paper-100 py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="איך זה עובד" title="תהליך הלימוד" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          {process.map((step, index) => (
            <ProcessStepCard
              key={step.number}
              step={step}
              index={index}
              isLast={index === process.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProcessStepCard({
  step,
  index,
  isLast,
}: {
  step: ProcessStep;
  index: number;
  isLast: boolean;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${Math.min(index, STAGGER_CAP) * STAGGER_STEP_MS}ms` }}
      className={`reveal relative flex flex-col gap-3 ${isInView ? "is-visible" : ""}`}
    >
      {/* Connecting line: vertical on mobile, horizontal on desktop */}
      {!isLast ? (
        <>
          <span
            className="absolute top-2 bottom-[-2.5rem] start-5 w-px bg-amber-500/30 md:hidden"
            aria-hidden="true"
          />
          <span
            className="absolute top-6 hidden h-px w-full border-t-2 border-dashed border-amber-500/40 md:block md:start-1/2"
            aria-hidden="true"
          />
        </>
      ) : null}

      <div className="relative flex items-center gap-4 md:flex-col md:items-start md:gap-2">
        <span className="font-heading text-4xl font-extrabold text-amber-500/40 md:text-5xl">
          <Ltr>{step.number}</Ltr>
        </span>
      </div>

      <h3 className="font-heading text-lg font-semibold text-ink">
        {step.title}
      </h3>
      <p className="text-sm leading-relaxed text-slate">
        {step.description}
      </p>
    </div>
  );
}
