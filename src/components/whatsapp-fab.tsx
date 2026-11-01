import { DEFAULT_WA_MESSAGE, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function WhatsAppFab() {
  return (
    <a
      href={waLink(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-[55] grid size-[60px] place-items-center rounded-full bg-wa text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="size-8" />
    </a>
  );
}
