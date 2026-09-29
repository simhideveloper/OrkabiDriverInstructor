import { User } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { Container, SectionHeading, Badge } from "@/components/ui";
import { iconMap } from "@/components/ui/icon-map";

export function About() {
  const { about } = siteContent;

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-paper-100 py-16 md:scroll-mt-24 md:py-24"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Content side — reading-start in RTL */}
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow={about.eyebrow} title={about.title} />

            <div className="flex flex-col gap-4">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-slate">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {about.credentials.map((credential) => {
                const Icon = iconMap[credential.icon];
                return (
                  <Badge
                    key={credential.label}
                    icon={<Icon size={16} className="text-amber-700" aria-hidden="true" />}
                  >
                    {credential.label}
                  </Badge>
                );
              })}
            </div>
          </div>

          {/* Image placeholder side — reading-end in RTL, desktop-forward but visible on mobile too */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-ink-800 to-ink shadow-lg">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
                <User size={48} className="text-white/70" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium text-white/60">
                תמונת תומר עורקבי
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
