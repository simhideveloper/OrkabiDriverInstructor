// Shared TypeScript shape for content/site-content.ts.
// Icon fields use string keys (not React components) so this file stays
// plain data; components map the key to a lucide-react icon via
// components/ui/icon-map.ts.

export type IconKey =
  | "car"
  | "shield"
  | "award"
  | "clock"
  | "mapPin"
  | "phone"
  | "whatsapp"
  | "checkCircle"
  | "users"
  | "heart"
  | "gauge"
  | "calendar"
  | "graduationCap"
  | "steeringWheel"
  | "route"
  | "sparkles";

export interface NavLink {
  label: string;
  href: string;
}

export interface BusinessInfo {
  name: string;
  instructorName: string;
  tagline: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappDisplay: string;
  whatsappHref: string;
  email: string;
  baseCity: string;
  license: string;
  insurance: string;
  experienceYears: number;
  hours: { label: string; value: string }[];
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  highlightWord: string;
  subtitle: string;
  stats: HeroStat[];
  trustBadges: { icon: IconKey; label: string }[];
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  credentials: { icon: IconKey; label: string }[];
}

export interface ServiceItem {
  icon: IconKey;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  priceUnit: string;
  description: string;
  features: string[];
  highlighted: boolean;
  ctaLabel: string;
}

export interface WhyUsItem {
  icon: IconKey;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  timeAgo: string;
  vehicleType: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  mapEmbedSrc: string;
}

export interface FooterContent {
  about: string;
  legal: string[];
  quickLinks: NavLink[];
}

export interface SiteContent {
  business: BusinessInfo;
  nav: NavLink[];
  hero: HeroContent;
  about: AboutContent;
  services: ServiceItem[];
  process: ProcessStep[];
  pricing: PricingTier[];
  whyUs: WhyUsItem[];
  serviceArea: { title: string; subtitle: string; cities: string[] };
  testimonials: Testimonial[];
  faq: FaqItem[];
  contact: ContactContent;
  footer: FooterContent;
}
