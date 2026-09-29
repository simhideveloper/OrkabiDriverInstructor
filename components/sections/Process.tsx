import { siteContent } from "@/content/site-content";
import { Container, SectionHeading, Ltr } from "@/components/ui";

export function Process() {
  const { process } = siteContent;

  return (
    <section id="process" className="bg-paper-100 py-16 md:py-24">
      <Container>
        <SectionHeading eyebrow="איך זה עובד" title="תהליך הלימוד" />

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          {process.map((step, index) => (
            <div key={step.number} className="relative flex flex-col gap-3">
              {/* Connecting line: vertical on mobile, horizontal on desktop */}
              {index < process.length - 1 ? (
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
          ))}
        </div>
      </Container>
    </section>
  );
}
