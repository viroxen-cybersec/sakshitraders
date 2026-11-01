import { Scroll01, type Scroll01Item } from "@/components/ui/scroll-01";
import { SectionHead } from "@/components/section-head";
import { CATEGORIES, waLink } from "@/lib/site";

const ITEMS: Scroll01Item[] = CATEGORIES.map((c) => ({
  title: c.title,
  meta: c.meta,
  description: c.description,
  media: `/img/${c.image}.jpg`,
  alt: c.alt,
  pos: c.pos,
  cta: { label: c.cta, href: waLink(c.message) },
}));

export function Ranges() {
  return (
    <section id="collection" className="mx-auto max-w-[1240px] scroll-mt-20 px-5 pt-[clamp(56px,8vw,112px)] md:px-8">
      <SectionHead title="Five ranges, one workshop">
        <p className="text-muted">Scroll to move through the ranges.</p>
      </SectionHead>
      <Scroll01 items={ITEMS} />
    </section>
  );
}
