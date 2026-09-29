import { Phone, MessageCircle, Mail } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { Container, Ltr } from "@/components/ui";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-800 rounded-sm";

export function Footer() {
  const { footer, business } = siteContent;

  return (
    <footer className="bg-ink-800 py-10 text-white/80 md:py-14">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex max-w-sm flex-col gap-3">
            <span className="font-heading text-lg font-bold text-white">{business.name}</span>
            <p className="text-sm leading-relaxed text-white/70">{footer.about}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
            {footer.quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm text-white/70 transition-colors hover:text-lime-500 ${focusRing}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          <a
            href={business.phoneHref}
            className={`flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-lime-500 ${focusRing}`}
          >
            <Phone size={16} aria-hidden="true" />
            <Ltr>{business.phoneDisplay}</Ltr>
          </a>
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-lime-500 ${focusRing}`}
          >
            <MessageCircle size={16} aria-hidden="true" />
            <Ltr>{business.whatsappDisplay}</Ltr>
          </a>
          <a
            href={`mailto:${business.email}`}
            className={`flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-lime-500 ${focusRing}`}
          >
            <Mail size={16} aria-hidden="true" />
            {business.email}
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-1 border-t border-white/10 pt-6">
          {footer.legal.map((line) => (
            <p key={line} className="text-xs text-white/50">
              {line}
            </p>
          ))}
        </div>
      </Container>
    </footer>
  );
}
