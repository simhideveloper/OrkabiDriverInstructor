import { MapPin } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { Container, SectionHeading } from "@/components/ui";

export function ServiceArea() {
  const { serviceArea } = siteContent;

  return (
    <section
      id="service-area"
      className="scroll-mt-20 bg-paper py-16 md:scroll-mt-24 md:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="אזור שירות"
          title={serviceArea.title}
          subtitle={serviceArea.subtitle}
          align="center"
        />

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-paper-100 p-8 md:mt-12 md:p-12">
          <div className="flex flex-wrap justify-center gap-3">
            {serviceArea.cities.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-5 py-2.5 text-base font-medium text-ink shadow-sm"
              >
                <MapPin size={18} className="text-amber-700" aria-hidden="true" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
