import { DEFAULT_WA_MESSAGE, SITE, waLink } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button-link";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

const NAV = [
  { text: "Ranges", href: "#collection" },
  { text: "Catalogue", href: "#catalogue" },
  { text: "How we work", href: "#process" },
  { text: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-extrabold [font-stretch:125%] tracking-tight" aria-label={`${SITE.name} home`}>
          <span className="grid size-[26px] place-items-center bg-brass" aria-hidden="true">
            <span className="size-3 -translate-y-px border-b-[3px] border-l-[3px] border-brass-ink" />
          </span>
          {SITE.name}
        </a>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-7 text-[0.95rem]">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-muted transition-colors hover:text-foreground">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink size="sm" href={waLink(DEFAULT_WA_MESSAGE)}>
          <WhatsAppIcon className="size-[18px]" />
          WhatsApp
        </ButtonLink>
      </div>
    </header>
  );
}
