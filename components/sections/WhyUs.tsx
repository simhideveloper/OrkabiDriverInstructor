"use client";

import { siteContent } from "@/content/site-content";
import { Container, SectionHeading, Card, Reveal } from "@/components/ui";
import { iconMap } from "@/components/ui/icon-map";
import { useInView } from "@/components/hooks/useInView";
import type { WhyUsItem } from "@/content/types";

const STAGGER_STEP_MS = 70;
const STAGGER_CAP = 5;

export function WhyUs() {
  const { whyUs } = siteContent;

  return (
    <section id="why-us" className="bg-paper py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="למה לבחור בי" title="היתרונות שלי" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, index) => (
            <WhyUsCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function WhyUsCard({ item, index }: { item: WhyUsItem; index: number }) {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const Icon = iconMap[item.icon];

  return (
    <Card
      ref={ref}
      style={{ transitionDelay: `${Math.min(index, STAGGER_CAP) * STAGGER_STEP_MS}ms` }}
      className={`reveal flex flex-col gap-3 ${isInView ? "is-visible" : ""}`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
            item.icon === "car" ? "bg-copper-500/10" : "bg-lime-500/10"
          }`}
        >
          <Icon
            size={20}
            className={item.icon === "car" ? "text-copper-500" : "text-lime-700"}
            aria-hidden="true"
          />
        </div>
        <h3 className="font-heading text-lg font-semibold text-ink">
          {item.title}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-slate">
        {item.description}
      </p>
    </Card>
  );
}
