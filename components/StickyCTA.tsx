import { Phone, MessageCircle } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { Button } from "@/components/ui";

export function StickyCTA() {
  const { business } = siteContent;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_12px_rgba(0,0,0,0.06)] backdrop-blur md:hidden">
      <div className="flex items-center gap-3 px-4 py-3">
        <Button
          variant="outline"
          icon={<Phone size={18} />}
          href={business.phoneHref}
          className="flex-1"
        >
          התקשרו
        </Button>
        <Button
          variant="whatsapp"
          icon={<MessageCircle size={18} />}
          href={business.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          וואטסאפ
        </Button>
      </div>
    </div>
  );
}
