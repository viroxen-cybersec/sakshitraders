import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "ghost" | "whatsapp";
type Size = "md" | "sm";

const variants: Record<Variant, string> = {
  solid: "bg-brass text-brass-ink border-brass hover:bg-foreground hover:border-foreground",
  ghost: "bg-transparent text-foreground border-foreground/40 hover:bg-foreground hover:text-background hover:border-foreground",
  whatsapp: "bg-wa text-[#06220f] border-wa hover:bg-[#3ee27f] hover:border-[#3ee27f]",
};

const sizes: Record<Size, string> = {
  md: "px-[22px] py-[14px] text-[0.98rem]",
  sm: "px-4 py-[10px] text-[0.9rem]",
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
};

/** Anchor styled as a button. External links open in a new tab safely. */
export function ButtonLink({ variant = "solid", size = "md", className, href = "#", children, ...rest }: ButtonLinkProps) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 border-2 font-bold [font-stretch:108%] transition-colors duration-200",
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
