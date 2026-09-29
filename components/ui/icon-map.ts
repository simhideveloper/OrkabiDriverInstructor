import {
  Car,
  Shield,
  Award,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle2,
  Users,
  Heart,
  Gauge,
  Calendar,
  GraduationCap,
  Navigation,
  Route,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/content/types";

// Maps the plain string IconKey values used in content/site-content.ts to
// actual lucide-react icon components, so content stays framework-agnostic
// plain data while components render real icons.
export const iconMap: Record<IconKey, LucideIcon> = {
  car: Car,
  shield: Shield,
  award: Award,
  clock: Clock,
  mapPin: MapPin,
  phone: Phone,
  whatsapp: MessageCircle,
  checkCircle: CheckCircle2,
  users: Users,
  heart: Heart,
  gauge: Gauge,
  calendar: Calendar,
  graduationCap: GraduationCap,
  steeringWheel: Navigation,
  route: Route,
  sparkles: Sparkles,
};
