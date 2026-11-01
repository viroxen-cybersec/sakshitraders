import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { imageProps } from "@/lib/images";
import { waLink } from "@/lib/site";

// This is a real sequence, so the steps are numbered.
const STEPS = [
  { title: "Send your size", text: "Share dimensions, quantity and finish on WhatsApp. Photos of the space help." },
  { title: "Cut and weld", text: "Frames are cut and welded in Surat to your measurements." },
  { title: "Finish and check", text: "Tops, panels and seats are fitted and checked before loading." },
  { title: "Delivery in Gujarat", text: "Your order is loaded and delivered to your city." },
];

export function Process() {
  return (
    <div id="process" className="mt-[clamp(56px,8vw,112px)] scroll-mt-16 border-y border-border bg-panel py-[clamp(56px,8vw,104px)]">
      <div className="mx-auto grid max-w-[1240px] items-stretch gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-[72px]">
        <div>
          <h2 className="heading mb-9 text-[clamp(2rem,4.4vw,3.4rem)]">Every frame starts as raw steel.</h2>
          <ol className="m-0 grid list-none gap-0 p-0">
            {STEPS.map((s, i) => (
              <li key={s.title} data-reveal style={{ ["--d" as string]: `${i * 120}ms` }} className="grid grid-cols-[auto_1fr] gap-x-5 border-t border-border py-5 first:border-t-2 first:border-brass">
                <span className="heading text-2xl text-brass [font-variant-numeric:tabular-nums]">{i + 1}</span>
                <div>
                  <h3 className="heading mb-1 text-[1.15rem] [font-stretch:112%]">{s.title}</h3>
                  <p className="max-w-[46ch] text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <ButtonLink className="mt-8" href={waLink("Hello Sakshi Traders, I need furniture made to my size.")}>
            Send us your size
          </ButtonLink>
        </div>

        <div className="grid gap-3 sm:grid-cols-[1.4fr_1fr] lg:h-full lg:grid-rows-2">
          <figure data-reveal className="relative m-0 aspect-[4/3] overflow-hidden sm:row-span-2 sm:aspect-auto sm:min-h-[420px]">
            <Image
              {...imageProps("steel-frame-workshop")}
              alt="Steel desk frame with perforated panel in the workshop"
              sizes="(min-width: 1024px) 340px, 100vw"
              className="absolute inset-0 size-full object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 bg-panel px-3 py-1.5 text-[0.82rem]">Desk frame before finishing</figcaption>
          </figure>
          <figure data-reveal style={{ ["--d" as string]: "140ms" }} className="relative m-0 aspect-[4/3] overflow-hidden lg:aspect-auto">
            <Image
              {...imageProps("steel-shelf-workshop")}
              alt="Steel shelving frame"
              sizes="(min-width: 1024px) 240px, 100vw"
              className="absolute inset-0 size-full object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 bg-panel px-3 py-1.5 text-[0.82rem]">Shelving frame</figcaption>
          </figure>
          <figure data-reveal style={{ ["--d" as string]: "280ms" }} className="relative m-0 aspect-[4/3] overflow-hidden lg:aspect-auto">
            <Image
              {...imageProps("delivery-truck")}
              alt="Furniture loaded on a delivery truck"
              sizes="(min-width: 1024px) 240px, 100vw"
              className="absolute inset-0 size-full object-cover object-[50%_72%]"
            />
            <figcaption className="absolute bottom-0 left-0 bg-panel px-3 py-1.5 text-[0.82rem]">Ready to deliver</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
