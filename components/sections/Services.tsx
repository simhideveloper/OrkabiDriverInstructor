import { siteContent } from "@/content/site-content";
import { Container, SectionHeading, Card } from "@/components/ui";
import { iconMap } from "@/components/ui/icon-map";

export function Services() {
  const { services } = siteContent;

  return (
    <section id="services" className="bg-paper py-16 md:py-24">
      <Container>
        <SectionHeading eyebrow="מה אני מציע" title="שירותי הוראת נהיגה" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card key={service.title} className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                  <Icon size={22} className="text-amber-700" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
