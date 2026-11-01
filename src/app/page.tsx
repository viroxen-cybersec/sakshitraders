import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Ranges } from "@/components/ranges";
import { RevealObserver } from "@/components/reveal-observer";
import { Catalogue } from "@/components/catalogue";
import { Process } from "@/components/process";
import { Why } from "@/components/why";
import { Contact } from "@/components/contact";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import FooterWithSuite from "@/components/ui/footer-with-suite";
import { DEFAULT_WA_MESSAGE, SITE, waLink } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Ranges />
        <Catalogue />
        <Process />
        <Why />
        <Contact />
      </main>
      <div className="mt-[clamp(56px,8vw,112px)]">
        <FooterWithSuite
          brandName={SITE.name}
          tagline={`Wholesale furniture and metal work since ${SITE.since}`}
          navLinks={[
            { text: "Ranges", url: "#collection" },
            { text: "Catalogue", url: "#catalogue" },
            { text: "How we work", url: "#process" },
            { text: "Contact", url: "#contact" },
          ]}
          description={`${SITE.name}, ${SITE.city}, ${SITE.state}. Office chairs, tables and industrial metal furniture.`}
          prompt="Need furniture for an office, café or shop? Send us the size and quantity."
          ctaText="Chat on WhatsApp"
          ctaUrl={waLink(DEFAULT_WA_MESSAGE)}
          contactText={SITE.phoneDisplay}
          contactUrl={`tel:+${SITE.whatsappNumber}`}
          copyright={`© ${new Date().getFullYear()} ${SITE.name}`}
        />
      </div>
      <WhatsAppFab />
      <RevealObserver />
    </>
  );
}
