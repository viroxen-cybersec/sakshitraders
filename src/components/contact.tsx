"use client";

import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { PRODUCT_OPTIONS, SITE, waLink } from "@/lib/site";

const field =
  "w-full border-[1.5px] border-border bg-background px-3.5 py-3 text-base font-normal text-foreground focus:border-brass focus:outline-none";

export function Contact() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [product, setProduct] = useState<string>(PRODUCT_OPTIONS[0]);
  const [qty, setQty] = useState("");

  // The form has no backend: it builds a WhatsApp message and opens it.
  const href = useMemo(() => {
    const parts = [`Hello ${SITE.name}, I need a quote for ${product.toLowerCase()}`];
    if (qty.trim()) parts[0] += ` (quantity: ${qty.trim()})`;
    parts[0] += ".";
    if (city.trim()) parts.push(`Delivery city: ${city.trim()}.`);
    if (name.trim()) parts.push(`Name: ${name.trim()}`);
    return waLink(parts.join(" "));
  }, [name, city, product, qty]);

  return (
    <section id="contact" className="mx-auto max-w-[1240px] scroll-mt-20 px-5 pt-[clamp(56px,8vw,112px)] md:px-8">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-24">
        <div data-reveal>
          <h2 className="heading mb-5 text-[clamp(2rem,4.4vw,3.4rem)]">Tell us what you need.</h2>
          <p className="max-w-[48ch] text-muted">
            Fill in the form and it opens in WhatsApp, ready to send. You can also message us directly.
          </p>
          <a href={`tel:+${SITE.whatsappNumber}`} className="heading mt-7 block text-[clamp(1.6rem,3.4vw,2.4rem)]">
            {SITE.phoneDisplay}
          </a>
          <small className="mt-1.5 block text-muted">WhatsApp and calls</small>
          <p className="mt-6 border-t border-border pt-4 text-[0.95rem] text-muted">
            {SITE.name}, {SITE.city}, {SITE.state}. Delivery is currently within {SITE.state} only.
          </p>
        </div>

        <form
          data-reveal
          style={{ ["--d" as string]: "140ms" }}
          className="grid gap-4 border border-border bg-card p-5 sm:p-8"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Request a quote on WhatsApp"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label htmlFor="nm" className="grid gap-1.5 text-[0.92rem] font-semibold">
              Your name
              <input id="nm" className={field} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
            </label>
            <label htmlFor="ct" className="grid gap-1.5 text-[0.92rem] font-semibold">
              City in Gujarat
              <input id="ct" className={field} value={city} onChange={(e) => setCity(e.target.value)} placeholder="Surat" autoComplete="address-level2" />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label htmlFor="pr" className="grid gap-1.5 text-[0.92rem] font-semibold">
              Product
              <select id="pr" className={field} value={product} onChange={(e) => setProduct(e.target.value)}>
                {PRODUCT_OPTIONS.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </label>
            <label htmlFor="qt" className="grid gap-1.5 text-[0.92rem] font-semibold">
              Quantity
              <input id="qt" type="number" min={1} inputMode="numeric" className={field} value={qty} onChange={(e) => setQty(e.target.value)} placeholder="10" />
            </label>
          </div>
          <ButtonLink variant="whatsapp" href={href}>
            <WhatsAppIcon className="size-[18px]" />
            Send on WhatsApp
          </ButtonLink>
        </form>
      </div>
    </section>
  );
}
