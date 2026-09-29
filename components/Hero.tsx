import { Phone, MessageCircle } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { Container, Ltr, RoadDivider, Button, Badge } from "@/components/ui";
import { iconMap } from "@/components/ui/icon-map";

export function Hero() {
  const { hero, business } = siteContent;

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-paper pt-12 pb-16 md:pt-20 md:pb-24"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Content side — visually right in RTL (reading-start) */}
          <div className="flex flex-col items-start gap-6">
            <div className="hero-enter hero-enter-1 flex flex-col gap-3">
              <span className="text-sm font-bold text-blue-700">{hero.eyebrow}</span>
              <RoadDivider align="start" />
            </div>

            <h1 className="hero-enter hero-enter-2 text-4xl font-extrabold leading-[1.1] text-ink sm:text-5xl md:text-6xl">
              <span>{hero.title}</span>
              <span className="text-blue-700">{hero.highlightWord}</span>
            </h1>

            <p className="hero-enter hero-enter-3 max-w-xl text-lg leading-relaxed text-slate">
              {hero.subtitle}
            </p>

            <div className="hero-enter hero-enter-4 flex flex-wrap gap-4 pt-2">
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
              >
                התקשרו: <Ltr>{business.phoneDisplay}</Ltr>
              </Button>
            </div>

            <div className="hero-enter hero-enter-5 flex flex-wrap gap-3 pt-4">
              {hero.trustBadges.map((badge) => {
                const Icon = iconMap[badge.icon];
                const iconColorClass = badge.icon === "car" ? "text-copper-500" : "text-lime-700";
                return (
                  <Badge key={badge.label} icon={<Icon size={16} className={iconColorClass} />}>
                    {badge.label}
                  </Badge>
                );
              })}
            </div>

            <div className="hero-enter hero-enter-5 flex items-stretch gap-6 pt-6 sm:gap-10">
              {hero.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex flex-col gap-1 ${
                    index > 0 ? "border-hairline ps-6 sm:ps-10 md:border-s" : ""
                  }`}
                >
                  <span className="font-heading text-3xl text-ink">
                    <Ltr>{stat.value}</Ltr>
                  </span>
                  <span className="text-sm text-slate">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative visual side — visually left in RTL (reading-end), desktop only */}
          <div className="relative hidden md:block">
            <RoadVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}

function RoadVisual() {
  return (
    <div className="relative mx-auto aspect-[2/3] w-full max-w-sm">
      <svg
        viewBox="0 0 400 600"
        className="h-full w-full drop-shadow-xl"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#101c38" />
            <stop offset="100%" stopColor="#04102a" />
          </linearGradient>
          <linearGradient id="roadGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#212a45" />
            <stop offset="100%" stopColor="#10152a" />
          </linearGradient>
          <radialGradient id="horizonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9cbc3d" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#9cbc3d" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* frame */}
        <rect x="0" y="0" width="400" height="600" rx="32" fill="url(#bgGrad)" />

        {/* soft glow toward the vanishing point */}
        <circle cx="200" cy="150" r="130" fill="url(#horizonGlow)" />

        {/* road surface receding to a vanishing point */}
        <polygon
          points="30,580 370,580 216,148 184,148"
          fill="url(#roadGrad)"
        />

        {/* lane-marking dashes, shrinking toward the vanishing point */}
        <g className="road-dash-anim" style={{ animationDelay: "0s" }}>
          <rect x="178" y="512" width="44" height="54" rx="7" fill="#9cbc3d" />
        </g>
        <g className="road-dash-anim" style={{ animationDelay: "0.15s" }}>
          <rect x="183" y="436" width="34" height="42" rx="6" fill="#9cbc3d" opacity="0.92" />
        </g>
        <g className="road-dash-anim" style={{ animationDelay: "0.3s" }}>
          <rect x="188" y="370" width="24" height="30" rx="4" fill="#9cbc3d" opacity="0.85" />
        </g>
        <g className="road-dash-anim" style={{ animationDelay: "0.45s" }}>
          <rect x="192" y="316" width="16" height="20" rx="3" fill="#9cbc3d" opacity="0.78" />
        </g>
        <g className="road-dash-anim" style={{ animationDelay: "0.6s" }}>
          <rect x="195" y="278" width="10" height="12" rx="2" fill="#9cbc3d" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}
