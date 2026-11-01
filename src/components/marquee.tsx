const WORDS = [
  "Office chairs",
  "Executive desks",
  "Conference tables",
  "Dining tables",
  "Centre tables",
  "Steel racks",
  "Metal beds",
  "Café furniture",
];

/** Slow, looping strip of what we make. Pauses on hover; stops for reduced-motion users. */
export function Marquee() {
  const track = (hidden: boolean) => (
    <ul className="m-0 flex shrink-0 list-none items-center gap-10 p-0 pr-10" aria-hidden={hidden || undefined}>
      {WORDS.map((w) => (
        <li key={w} className="flex items-center gap-10 whitespace-nowrap">
          <span className="marquee-word heading text-[clamp(1.8rem,4.6vw,3.6rem)]">{w}</span>
          <span className="size-2.5 shrink-0 bg-brass" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee mt-[clamp(40px,6vw,80px)] overflow-hidden border-y border-border py-5" aria-label="What we make">
      <div className="marquee-inner flex w-max">
        {track(false)}
        {track(true)}
      </div>
    </div>
  );
}
