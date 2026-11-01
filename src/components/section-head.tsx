import type { ReactNode } from "react";

export function SectionHead({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="mb-9 flex flex-wrap items-end justify-between gap-6">
      <h2 className="heading text-[clamp(2rem,4.4vw,3.4rem)]">{title}</h2>
      {children}
    </div>
  );
}
