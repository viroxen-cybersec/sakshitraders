/**
 * Footer with Suite
 * Source: 21st.dev, https://21st.dev/@scrollxui/components/footer-with-suite
 * Adapted for Sakshi Traders: copy that was hard-coded in the original ("Got a product idea?")
 * is now a prop, the contact line takes any href (WhatsApp / phone), colours use the site's
 * tokens (brass band, dark text) instead of neutral-* with dark: variants, and the wordmark is condensed so a long
 * brand name fits on one line.
 */
import { cn } from "@/lib/utils";

interface NavLink {
  text: string;
  url: string;
}

interface FooterWithSuiteProps {
  brandName: string;
  tagline: string;
  navLinks: NavLink[];
  externalLinks?: NavLink[];
  description: string;
  prompt: string;
  ctaText: string;
  ctaUrl: string;
  contactText: string;
  contactUrl: string;
  copyright: string;
  className?: string;
}

const linkClass =
  "py-0.5 text-[11px] tracking-[0.14em] uppercase text-brass-ink hover:text-brass-ink/60 transition-colors duration-200";

export default function FooterWithSuite({
  brandName,
  tagline,
  navLinks,
  externalLinks = [],
  description,
  prompt,
  ctaText,
  ctaUrl,
  contactText,
  contactUrl,
  copyright,
  className,
}: FooterWithSuiteProps) {
  return (
    <footer className={cn("relative w-full overflow-hidden bg-brass text-brass-ink", className)}>
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-8 px-5 pt-14 pb-4 sm:grid-cols-2 md:px-8">
        <div className="flex flex-col">
          {navLinks.map((link) => (
            <a key={link.text} href={link.url} className={linkClass}>
              {link.text}
            </a>
          ))}
          {externalLinks.length > 0 && <div className="h-5" />}
          {externalLinks.map((link) => (
            <a key={link.text} href={link.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {link.text}
            </a>
          ))}
        </div>

        <div className="flex flex-col">
          <p className="text-[11px] leading-relaxed tracking-[0.12em] uppercase text-brass-ink">{description}</p>
          <div className="h-5" />
          <p className="text-[11px] leading-relaxed tracking-[0.12em] uppercase text-brass-ink/65">{prompt}</p>
          <div className="h-4" />
          <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {ctaText}
          </a>
          <a href={contactUrl} className={cn(linkClass, "break-all")}>
            {contactText}
          </a>
          <div className="h-4" />
          <p className="text-[11px] tracking-[0.12em] uppercase text-brass-ink/65">{copyright}</p>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="select-none whitespace-nowrap px-5 text-center font-extrabold leading-[0.95] text-brass-ink md:px-8"
        style={{ fontSize: "clamp(2.6rem, 12.5vw, 12rem)", fontStretch: "75%", letterSpacing: "-0.03em" }}
      >
        {brandName}
      </p>

      <div className="border-t border-brass-ink/20">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-3 md:px-8">
          <p className="text-[10px] tracking-[0.14em] uppercase text-brass-ink/65">{tagline}</p>
        </div>
      </div>
    </footer>
  );
}

export { FooterWithSuite };
