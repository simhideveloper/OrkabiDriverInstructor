import { siteContent } from "@/content/site-content";
import { Container, SectionHeading, Card } from "@/components/ui";
import { iconMap } from "@/components/ui/icon-map";

export function WhyUs() {
  const { whyUs } = siteContent;

  return (
    <section id="why-us" className="bg-paper py-16 md:py-24">
      <Container>
        <SectionHeading eyebrow="למה לבחור בי" title="היתרונות שלי" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <Card key={item.title} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                    <Icon size={20} className="text-amber-700" aria-hidden="true" />
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
          })}
        </div>
      </Container>
    </section>
  );
}
