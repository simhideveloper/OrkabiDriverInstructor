"use client";

import { siteContent } from "@/content/site-content";
import { Container, SectionHeading, Card, Reveal } from "@/components/ui";
import { iconMap } from "@/components/ui/icon-map";
import { useInView } from "@/components/hooks/useInView";
import type { ServiceItem } from "@/content/types";

const STAGGER_STEP_MS = 70;
const STAGGER_CAP = 5;

export function Services() {
  const { services } = siteContent;

  return (
    <section
      id="services"
      className="scroll-mt-20 bg-paper py-16 md:scroll-mt-24 md:py-24"
    >
      <Container>
        <Reveal>
          <SectionHeading eyebrow="מה אני מציע" title="שירותי הוראת נהיגה" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const Icon = iconMap[service.icon];

  return (
    <Card
      ref={ref}
      style={{ transitionDelay: `${Math.min(index, STAGGER_CAP) * STAGGER_STEP_MS}ms` }}
      className={`reveal flex flex-col gap-4 ${isInView ? "is-visible" : ""}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-500/10">
        <Icon size={22} className="text-lime-700" aria-hidden="true" />
      </div>
      <h3 className="font-heading text-lg font-semibold text-ink">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-slate">
        {service.description}
      </p>
    </Card>
  );
}
