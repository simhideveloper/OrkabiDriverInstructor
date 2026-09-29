import { siteContent } from "@/content/site-content";
import { Container, SectionHeading, Button, Ltr } from "@/components/ui";
import { iconMap } from "@/components/ui/icon-map";

export function Pricing() {
  const { pricing, business } = siteContent;
  const CheckIcon = iconMap.checkCircle;

  return (
    <section id="pricing" className="bg-paper-100 py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="מחירון"
          title="חבילות ומחירים"
          subtitle="מחירים שקופים וברורים, ללא הפתעות"
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {pricing.map((tier) => (
            <div key={tier.name} className="relative">
              {tier.highlighted ? (
                <span className="absolute -top-3 inset-x-0 z-10 mx-auto w-fit rounded-full bg-amber-700 px-4 py-1 text-xs font-bold text-white shadow-sm">
                  הכי משתלם
                </span>
              ) : null}

              <div
                className={`flex h-full flex-col gap-5 rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md ${
                  tier.highlighted
                    ? "border-2 border-amber-700 shadow-lg md:scale-105"
                    : "border border-hairline"
                }`}
              >
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-xl font-bold text-ink">
                    {tier.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate">
                    {tier.description}
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-heading text-4xl font-extrabold text-ink">
                    <Ltr>{tier.price}</Ltr>
                  </span>
                  <span className="text-sm text-slate">{tier.priceUnit}</span>
                </div>

                <div className="border-t border-hairline" />

                <ul className="flex flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate">
                      <CheckIcon
                        size={18}
                        className="mt-0.5 shrink-0 text-amber-700"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    href={business.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    {tier.ctaLabel}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
