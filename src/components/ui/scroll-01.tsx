/**
 * Scroll 01
 * Source: 21st.dev, https://21st.dev/@felipemenezes098/components/scroll-01 (author: felipemenezes098)
 * Adapted for Sakshi Traders: items can carry a small label and a call-to-action button, text is
 * left-aligned, the sticky frame has an explicit height (and is square-cornered to match the site),
 * and colours use the site's tokens. Scroll logic is unchanged. Needs the `motion` package.
 */
"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useRef, useState, type Dispatch, type SetStateAction } from "react";
import { ButtonLink } from "@/components/ui/button-link";

export type Scroll01Item = {
  title: string;
  description: string;
  media: string;
  alt?: string;
  /** CSS object-position for the image, to keep the product in frame. */
  pos?: string;
  /** Small line above the title. */
  meta?: string;
  cta?: { label: string; href: string };
};

export interface Scroll01Props {
  items: Scroll01Item[];
}

function ItemText({ item }: { item: Scroll01Item }) {
  return (
    <div className="flex flex-col items-start gap-3">
      {item.meta && <p className="text-[0.9rem] text-brass">{item.meta}</p>}
      <h3 className="heading text-[clamp(1.6rem,3vw,2.4rem)]">{item.title}</h3>
      <p className="max-w-[40ch] text-muted">{item.description}</p>
      {item.cta && (
        <ButtonLink size="sm" className="mt-1" href={item.cta.href}>
          {item.cta.label}
        </ButtonLink>
      )}
    </div>
  );
}

function ScrollItem({
  item,
  index,
  setActive,
}: {
  item: Scroll01Item;
  index: number;
  setActive: Dispatch<SetStateAction<number>>;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 15%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const opacityValues = index === 0 ? [1, 0.7, 1, 0] : [0, 0.7, 1, 0];
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], opacityValues);

  const isActive = useTransform(scrollYProgress, (v) => v > 0.4 && v < 0.6);

  useMotionValueEvent(isActive, "change", (v) => {
    if (v) {
      setActive((prev) => (prev === index ? prev : index));
    }
  });

  return (
    <motion.article ref={ref} style={{ opacity, y }}>
      <ItemText item={item} />
    </motion.article>
  );
}

export function Scroll01({ items }: Readonly<Scroll01Props>) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <>
      {/* Phones: plain stacked list. */}
      <div className="grid gap-12 md:hidden">
        {items.map((item, index) => (
          <article key={`${item.title}-${index}`} className="flex flex-col gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.media}
              alt={item.alt ?? item.title}
              loading="lazy"
              style={{ objectPosition: item.pos }}
              className="h-72 w-full object-cover"
            />
            <ItemText item={item} />
          </article>
        ))}
      </div>

      {/* Larger screens: sticky photo that swaps as the text scrolls past. */}
      <div className="hidden gap-14 md:grid md:grid-cols-2">
        <div className="sticky top-24 h-[min(72vh,640px)] self-start overflow-hidden bg-card">
          {items.map((item, index) => (
            <motion.img
              key={`${item.title}-${index}`}
              src={item.media}
              alt={item.alt ?? item.title}
              style={{ objectPosition: item.pos }}
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: index === 0 ? 1 : 0 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                willChange: "opacity",
              }}
              transition={{ duration: 0.25, ease: "linear" }}
            />
          ))}
        </div>

        <div className="py-[22vh]">
          <div className="space-y-[34vh]">
            {items.map((item, index) => (
              <ScrollItem key={`${item.title}-${index}`} item={item} index={index} setActive={setActiveIndex} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Scroll01;
