import type { ReactNode } from "react";
import Image from "next/image";
import { SITE, waLink } from "@/lib/site";
import { imageProps } from "@/lib/images";
import { ButtonLink } from "@/components/ui/button-link";
import VerticalCutReveal from "@/components/ui/vertical-cut-reveal";
import { CountUp } from "@/components/count-up";

const YEARS = new Date().getFullYear() - SITE.since;

const FACTS: { title: ReactNode; text: string }[] = [
  {
    title: (
      <>
        <CountUp to={YEARS} /> years
      </>
    ),
    text: `Supplying offices, cafés and dealers since ${SITE.since}`,
  },
  { title: "Wholesale", text: "Bulk and dealer pricing" },
  { title: `All of ${SITE.state}`, text: "Delivery within the state" },
];

/**
 * Tags on the hero photo. x and y are percentages of the image, measured on the cropped file,
 * so they stay on the right part of the desk at every screen size.
 */
const TAGS = [
  { label: "Laminate top, cut to your size", x: 44, y: 21 },
  { label: "Perforated steel front panel", x: 62, y: 62 },
  { label: "Angled steel leg", x: 13, y: 69 },
];

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1240px] px-5 pt-10 md:px-8 lg:pt-16">
      <div className="grid items-end gap-8 lg:grid-cols-[1.7fr_1fr] lg:gap-16">
        <h1 className="heading text-[clamp(2.6rem,5.9vw,5.4rem)]">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.11}
            transition={{ type: "spring", stiffness: 170, damping: 22 }}
            wordLevelClassName="pb-[0.14em] -mb-[0.14em]"
          >
            {SITE.tagline}
          </VerticalCutReveal>
        </h1>
        <div className="hero-copy flex flex-col gap-6 pb-1.5">
          <p className="max-w-[44ch] text-[1.1rem] text-muted">
            Office chairs, office tables, dining tables, centre tables and industrial furniture. Supplied wholesale since {SITE.since}.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={waLink("Hello Sakshi Traders, I want a quote for furniture.")}>Get a quote on WhatsApp</ButtonLink>
            <ButtonLink variant="ghost" href="#catalogue">
              See the catalogue
            </ButtonLink>
          </div>
        </div>
      </div>

      <figure className="animate-reveal relative m-0 mt-10 overflow-hidden bg-card lg:mt-14">
        <Image
          {...imageProps("hero-desk")}
          alt="L-shaped executive desk with a laminate top, perforated steel front panel and angled steel legs"
          priority
          sizes="(min-width: 1240px) 1240px, 100vw"
          className="hero-img h-auto w-full"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        <ul className="m-0 list-none p-0">
          {TAGS.map((tag, i) => (
            <li
              key={tag.label}
              className="pin-in absolute"
              style={{ left: `${tag.x}%`, top: `${tag.y}%`, ["--i" as string]: i }}
            >
              <span className="relative block size-3 -translate-x-1/2 -translate-y-1/2">
                <span className="animate-pulse-ring absolute inset-0 rounded-full bg-brass" />
                <span className="absolute inset-0 rounded-full border-2 border-brass-ink bg-brass" />
              </span>
              <span className="absolute left-3 top-0 w-max max-w-[38vw] -translate-y-1/2 bg-background/90 px-2.5 py-1 text-[0.7rem] font-semibold leading-tight backdrop-blur sm:max-w-none sm:px-3 sm:py-1.5 sm:text-[0.85rem]">
                {tag.label}
              </span>
            </li>
          ))}
        </ul>
        <figcaption className="absolute bottom-0 right-0 hidden bg-background px-4 py-2 text-[0.8rem] text-muted sm:block">
          L-shaped executive desk
        </figcaption>
      </figure>

      <dl className="mt-10 grid border-t border-border sm:grid-cols-3 lg:mt-14">
        {FACTS.map((fact, i) => (
          <div
            key={fact.text}
            data-reveal
            style={{ ["--d" as string]: `${i * 110}ms` }}
            className="border-border py-6 sm:px-7 sm:first:pl-0 sm:[&:not(:first-child)]:border-l max-sm:[&:not(:first-child)]:border-t"
          >
            <dt className="heading text-[clamp(1.4rem,2.8vw,2.2rem)]">{fact.title}</dt>
            <dd className="mt-1 text-[0.95rem] text-muted">{fact.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
