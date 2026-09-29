import { Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { Container, Ltr, RoadDivider, Button } from "@/components/ui";

export function Contact() {
  const { contact, business } = siteContent;

  return (
    <section id="contact" className="scroll-mt-20 bg-ink py-16 text-white md:scroll-mt-24 md:py-24">
      <Container>
        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold tracking-wide text-amber-500">{contact.eyebrow}</span>
          <RoadDivider align="start" />
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            {contact.title}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            {contact.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-12 md:grid-cols-2">
          {/* Contact info + CTAs */}
          <div className="flex flex-col gap-8">
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-3">
                <Phone size={20} className="shrink-0 text-amber-500" aria-hidden="true" />
                <a href={business.phoneHref} className="text-white/90 transition-colors hover:text-amber-500">
                  <Ltr>{business.phoneDisplay}</Ltr>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={20} className="shrink-0 text-amber-500" aria-hidden="true" />
                <a
                  href={business.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 transition-colors hover:text-amber-500"
                >
                  <Ltr>{business.whatsappDisplay}</Ltr>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="shrink-0 text-amber-500" aria-hidden="true" />
                <a
                  href={`mailto:${business.email}`}
                  className="text-white/90 transition-colors hover:text-amber-500"
                >
                  {business.email}
                </a>
              </li>
              {business.hours.map((hour) => (
                <li key={hour.label} className="flex items-center gap-3">
                  <Clock size={20} className="shrink-0 text-amber-500" aria-hidden="true" />
                  <span className="text-white/90">
                    {hour.label}: <Ltr>{hour.value}</Ltr>
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="whatsapp"
                size="lg"
                href={business.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                icon={<MessageCircle size={20} />}
              >
                שלחו הודעת וואטסאפ
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={business.phoneHref}
                icon={<Phone size={20} />}
                className="border-white text-white hover:bg-white hover:text-ink"
              >
                התקשרו עכשיו
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="h-80 overflow-hidden rounded-2xl border border-white/10 md:h-full md:min-h-[320px]">
            <iframe
              src={contact.mapEmbedSrc}
              title="מפת אזור השירות"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
