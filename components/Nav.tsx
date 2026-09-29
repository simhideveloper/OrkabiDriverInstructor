import { Phone } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { Container, Ltr, Button } from "@/components/ui";

export function Nav() {
  const { business, nav } = siteContent;

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-paper/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <a
            href="#hero"
            className="font-heading text-xl font-extrabold text-ink"
          >
            {business.name}
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink transition-colors duration-200 hover:text-amber-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href={business.phoneHref}
              className="text-sm font-semibold text-ink transition-colors duration-200 hover:text-amber-700"
            >
              <Ltr>{business.phoneDisplay}</Ltr>
            </a>
            <Button variant="whatsapp" size="sm" href={business.whatsappHref} target="_blank" rel="noopener noreferrer">
              וואטסאפ
            </Button>
          </div>

          <a
            href={business.phoneHref}
            aria-label="התקשרו אלינו"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white transition-colors duration-200 hover:bg-amber-700 md:hidden"
          >
            <Phone size={18} />
          </a>
        </div>
      </Container>
    </header>
  );
}
