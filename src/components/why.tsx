import { SectionHead } from "@/components/section-head";

const REASONS = [
  { title: "Wholesale pricing", text: "Rates for bulk orders, interior contractors, dealers and new office set-ups." },
  { title: "Made to your size", text: "Choose the dimensions, top material and frame finish. We match the rest of your space." },
  { title: "Delivery in Gujarat", text: "We deliver within Gujarat at present. Share your city and we confirm the schedule." },
];

export function Why() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 pt-[clamp(56px,8vw,112px)] md:px-8">
      <SectionHead title="Why dealers and offices order from us" />
      <div className="grid border-t border-border md:grid-cols-3">
        {REASONS.map((r, i) => (
          <div key={r.title} data-reveal style={{ ["--d" as string]: `${i * 120}ms` }} className="border-border py-7 md:px-7 md:first:pl-0 md:[&:not(:first-child)]:border-l max-md:[&:not(:first-child)]:border-t">
            <h3 className="heading mb-2.5 text-xl [font-stretch:112%]">{r.title}</h3>
            <p className="max-w-[40ch] text-muted">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
