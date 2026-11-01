import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Wholesale metal furniture in ${SITE.city}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "metal furniture Surat",
    "office chair wholesaler Gujarat",
    "office table Surat",
    "dining table manufacturer Surat",
    "industrial furniture Gujarat",
    "Sakshi Traders",
  ],
  openGraph: {
    title: `${SITE.name} | Wholesale metal furniture`,
    description: SITE.description,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/img/hero-desk.jpg", width: 1800, height: 977 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1012",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: SITE.name,
  description: SITE.description,
  telephone: `+${SITE.whatsappNumber}`,
  foundingDate: String(SITE.since),
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.state,
    addressCountry: "IN",
  },
  areaServed: { "@type": "AdministrativeArea", name: SITE.state },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={archivo.variable}>
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
