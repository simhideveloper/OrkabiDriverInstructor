"use client";

import { Quote } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { Container, SectionHeading, Card, StarRating, Reveal } from "@/components/ui";
import { useInView } from "@/components/hooks/useInView";
import type { Testimonial } from "@/content/types";

const STAGGER_STEP_MS = 70;
const STAGGER_CAP = 5;

export function Testimonials() {
  const { testimonials } = siteContent;

  return (
    <section
      id="testimonials"
      className="scroll-mt-20 bg-paper-100 py-16 md:scroll-mt-24 md:py-24"
    >
      <Container>
        <Reveal>
          <SectionHeading eyebrow="מה תלמידים אומרים" title="המלצות" align="center" />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Card
      ref={ref}
      style={{ transitionDelay: `${Math.min(index, STAGGER_CAP) * STAGGER_STEP_MS}ms` }}
      className={`reveal relative flex flex-col gap-4 overflow-hidden ${isInView ? "is-visible" : ""}`}
    >
      <Quote
        size={72}
        className="pointer-events-none absolute -end-3 -top-3 text-amber-500/20"
        aria-hidden="true"
      />

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink font-heading text-base font-bold text-white">
          {testimonial.name.charAt(0)}
        </div>
        <div className="flex flex-col">
          <span className="font-heading text-sm font-semibold text-ink">
            {testimonial.name}
          </span>
          <span className="text-xs text-slate-light">
            {testimonial.vehicleType} · {testimonial.timeAgo}
          </span>
        </div>
      </div>

      <StarRating rating={testimonial.rating} />

      <p className="relative text-sm leading-relaxed text-slate">{testimonial.text}</p>
    </Card>
  );
}
