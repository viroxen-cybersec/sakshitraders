"use client";

import { useEffect, useState, type PointerEvent } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHead } from "@/components/section-head";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { imageProps } from "@/lib/images";
import { FILTERS, PRODUCTS, waLink, type Product, type RangeId } from "@/lib/site";
import { cn } from "@/lib/utils";

function rateMessage(p: Product) {
  return `Hello Sakshi Traders, please share the rate and sizes for: ${p.name}.`;
}

/** Lets the brass spotlight on a photo follow the pointer. */
function trackPointer(e: PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export function Catalogue() {
  const [filter, setFilter] = useState<"all" | RangeId>("all");
  const [open, setOpen] = useState<Product | null>(null);

  // Close the lightbox with Escape and lock page scroll while it is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const visible = PRODUCTS.filter((p) => filter === "all" || p.range === filter);

  return (
    <section id="catalogue" className="mx-auto max-w-[1240px] scroll-mt-20 px-5 pt-[clamp(56px,8vw,112px)] md:px-8">
      <SectionHead title="Catalogue">
        <p className="max-w-[40ch] text-muted">Every piece is made to your size and finish. Ask for the rate on WhatsApp.</p>
      </SectionHead>

      <div className="mb-8 flex flex-wrap items-center gap-2" role="group" aria-label="Filter catalogue by range">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={cn(
              "border-[1.5px] border-border px-4 py-2 text-[0.92rem] font-semibold text-muted transition-colors hover:border-brass hover:text-foreground",
              filter === f.id && "border-brass bg-brass text-brass-ink hover:text-brass-ink",
            )}
          >
            {f.label}
          </button>
        ))}
        <span className="ml-auto text-[0.9rem] text-muted tabular-nums" aria-live="polite">
          {visible.length} {visible.length === 1 ? "piece" : "pieces"}
        </span>
      </div>

      <ul className="m-0 grid list-none grid-cols-2 gap-x-3 gap-y-8 p-0 sm:gap-x-4 lg:grid-cols-4">
        {visible.map((p, i) => (
          <li
            key={`${filter}-${p.image}`}
            className="card-in group flex flex-col"
            style={{ ["--i" as string]: i }}
          >
            <button
              type="button"
              onClick={() => setOpen(p)}
              onPointerMove={trackPointer}
              aria-label={`Enlarge photo: ${p.name}`}
              className="relative block aspect-square w-full cursor-zoom-in overflow-hidden bg-card"
            >
              <Image
                {...imageProps(p.image)}
                alt={p.alt}
                sizes="(min-width: 1024px) 300px, 50vw"
                style={{ objectPosition: p.pos }}
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <span
                aria-hidden="true"
                className="spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </button>
            <div className="flex flex-1 flex-col gap-1 pt-3">
              <h3 className="heading text-[1.05rem] [font-stretch:112%]">{p.name}</h3>
              <p className="text-[0.88rem] leading-snug text-muted">{p.spec}</p>
            </div>
            <ButtonLink variant="ghost" size="sm" href={waLink(rateMessage(p))} className="mt-3 w-full">
              <WhatsAppIcon className="size-4" />
              Ask rate
            </ButtonLink>
          </li>
        ))}
      </ul>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.name}
          className="lightbox fixed inset-0 z-[100] grid cursor-zoom-out place-items-center bg-black/90 p-6"
          onClick={() => setOpen(null)}
        >
          <Image
            {...imageProps(open.image)}
            alt={open.alt}
            sizes="92vw"
            className="max-h-[84vh] w-auto max-w-[min(1200px,92vw)] object-contain"
          />
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-4 bg-background px-5 py-3" onClick={(e) => e.stopPropagation()}>
            <span className="font-bold">{open.name}</span>
            <ButtonLink size="sm" href={waLink(rateMessage(open))}>
              Ask rate
            </ButtonLink>
          </div>
          <button
            type="button"
            autoFocus
            onClick={() => setOpen(null)}
            className="absolute right-4 top-4 bg-foreground px-4 py-2.5 font-bold text-background"
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
}
