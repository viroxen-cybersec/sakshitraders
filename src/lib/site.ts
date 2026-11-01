import type { ImageKey } from "./image-sizes";

/** Single source of truth for business details. Edit here, the whole site updates. */
export const SITE = {
  name: "Sakshi Traders",
  city: "Surat",
  state: "Gujarat",
  since: 2020,
  phoneDisplay: "+91 82104 23317",
  /** International format without "+" for wa.me links. */
  whatsappNumber: "918210423317",
  tagline: "Metal furniture, made in Surat.",
  description:
    "Wholesale office chairs, office tables, dining tables, centre tables and industrial metal furniture from Surat, Gujarat. Delivery across Gujarat.",
} as const;

export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE =
  "Hello Sakshi Traders, I would like to know more about your furniture.";

export type RangeId = "chairs" | "office-tables" | "dining" | "centre" | "industrial";

export type Category = {
  id: RangeId;
  title: string;
  meta: string;
  image: ImageKey;
  alt: string;
  description: string;
  cta: string;
  message: string;
  /** CSS object-position for the range photo. */
  pos?: string;
};

export const CATEGORIES: Category[] = [
  {
    id: "chairs",
    title: "Office chairs",
    meta: "Desk, cabin, visitor",
    image: "chair-wishbone",
    alt: "Black steel chairs with spindle backs",
    description: "Steel-frame chairs for desks, cabins, meeting rooms and waiting areas.",
    cta: "Ask about chairs",
    message: "Hello Sakshi Traders, I am interested in office chairs.",
  },
  {
    id: "office-tables",
    title: "Office tables",
    meta: "Desks, workstations",
    image: "executive-desk-grey",
    alt: "Grey executive desk with a black metal frame",
    description: "Executive L-desks, workstations and conference tables in custom sizes.",
    cta: "Ask about office tables",
    message: "Hello Sakshi Traders, I am interested in office tables.",
  },
  {
    id: "dining",
    title: "Dining tables",
    meta: "Home, café, restaurant",
    image: "marble-table",
    alt: "Long table with a marble-pattern top on a black steel base",
    description: "Steel bases and finished tables for homes, cafés and restaurants.",
    cta: "Ask about dining tables",
    message: "Hello Sakshi Traders, I am interested in dining tables.",
  },
  {
    id: "centre",
    title: "Centre tables",
    meta: "Living room, lobby",
    image: "xleg-table",
    alt: "Dark glossy table on a crossed black metal frame",
    description: "Metal-frame centre tables with glass, wood or stone-look tops.",
    cta: "Ask about centre tables",
    message: "Hello Sakshi Traders, I am interested in centre tables.",
  },
  {
    id: "industrial",
    title: "Industrial furniture",
    meta: "Racks, beds, custom",
    image: "steel-shelf-workshop",
    alt: "Steel shelving frame being fabricated",
    description: "Racks, shelving, bed frames and made-to-size metal work of every kind.",
    cta: "Ask about metal work",
    message: "Hello Sakshi Traders, I am interested in industrial furniture and metal work.",
  },
];

export const FILTERS: { id: "all" | RangeId; label: string }[] = [
  { id: "all", label: "All" },
  ...CATEGORIES.map((c) => ({ id: c.id, label: c.title })),
];

export type Product = {
  name: string;
  spec: string;
  range: RangeId;
  image: ImageKey;
  alt: string;
  /** CSS object-position for the square thumbnail, to keep the product in frame. */
  pos?: string;
};

export const PRODUCTS: Product[] = [
  { name: "Executive desk", spec: "Grey laminate top, black steel side frame", range: "office-tables", image: "executive-desk-grey", alt: "Grey executive desk with black steel frame" },
  { name: "Spindle-back chair", spec: "Black steel frame, padded seat", range: "chairs", image: "chair-wishbone", alt: "Spindle-back steel chairs", pos: "50% 55%" },
  { name: "Steel-base table", spec: "Stone-look top, black steel base", range: "dining", image: "marble-table", alt: "Marble-pattern top table on a steel base" },
  { name: "Manager desk", spec: "White top, black steel frame", range: "office-tables", image: "desk-white", alt: "White office desk with black frame" },
  { name: "Waiting-area bench", spec: "Three seats on a steel frame", range: "chairs", image: "bench", alt: "Three-seat bench in grey and coral", pos: "50% 65%" },
  { name: "Conference table", spec: "Black top on steel trapezoid legs", range: "office-tables", image: "conference-black", alt: "Black conference table with steel legs" },
  { name: "Bar stools", spec: "Upholstered seat, metal frame", range: "chairs", image: "stools-red", alt: "Red upholstered bar stools with metal frames", pos: "50% 62%" },
  { name: "Cross-leg table", spec: "Glossy top on a crossed steel frame", range: "centre", image: "xleg-table", alt: "Dark glossy table on a crossed black metal frame" },
  { name: "Workstation", spec: "Desk with drawer pedestal", range: "office-tables", image: "workstation-grey", alt: "Office workstation with drawer pedestal" },
  { name: "Visitor chair", spec: "Steel frame, perforated wood back", range: "chairs", image: "chair-bentwood", alt: "Steel chair with a perforated wood back", pos: "50% 45%" },
  { name: "Dining table", spec: "Wood top on a black steel frame", range: "dining", image: "table-frame", alt: "Wood-top table on a black steel frame" },
  { name: "Steel shelving", spec: "Made to your size", range: "industrial", image: "steel-shelf-workshop", alt: "Steel shelving frame in the workshop", pos: "50% 35%" },
  { name: "Café chair", spec: "Steel ladder back, red seat", range: "chairs", image: "chair-red", alt: "Black steel chair with a red seat", pos: "50% 58%" },
  { name: "Open-office desk", spec: "Light-wood top, steel legs", range: "office-tables", image: "workstation-wood", alt: "Long light-wood workstation", pos: "50% 50%" },
  { name: "Metal bed frame", spec: "Steel frame with wood headboard", range: "industrial", image: "bed-wood", alt: "Metal bed frame with a wooden headboard", pos: "50% 62%" },
  { name: "Round stool", spec: "Cushioned seat with back support", range: "chairs", image: "stool-cushion", alt: "Round cushioned stool with back", pos: "50% 55%" },
];

export const PRODUCT_OPTIONS = [
  "Office chairs",
  "Office tables",
  "Dining tables",
  "Centre tables",
  "Industrial furniture",
  "Custom metal work",
] as const;
