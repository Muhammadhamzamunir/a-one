import type { LucideIcon } from "lucide-react";
import {
  BatteryCharging,
  Cpu,
  Laptop,
  Refrigerator,
  Smartphone,
  Snowflake,
  Tv,
  WashingMachine,
} from "lucide-react";

export type ArtKind =
  | "split-ac"
  | "fridge"
  | "freezer"
  | "water-cooler"
  | "chiller"
  | "washer"
  | "tv"
  | "laptop"
  | "phone"
  | "ups"
  | "microwave"
  | "fan";

export type CategoryId =
  | "cooling"
  | "refrigeration"
  | "home"
  | "tv-audio"
  | "computers"
  | "mobiles"
  | "power"
  | "other";

export type Category = { id: CategoryId; label: string; short: string; icon: LucideIcon };

export const CATEGORIES: Category[] = [
  { id: "cooling", label: "ACs & Cooling", short: "Cooling", icon: Snowflake },
  { id: "refrigeration", label: "Fridges & Freezers", short: "Refrigeration", icon: Refrigerator },
  { id: "home", label: "Home Appliances", short: "Appliances", icon: WashingMachine },
  { id: "tv-audio", label: "TVs & Audio", short: "TV & Audio", icon: Tv },
  { id: "computers", label: "Laptops & Computers", short: "Computers", icon: Laptop },
  { id: "mobiles", label: "Mobiles & Tablets", short: "Mobiles", icon: Smartphone },
  { id: "power", label: "UPS & Power", short: "Power", icon: BatteryCharging },
  { id: "other", label: "Other Electronics", short: "Other", icon: Cpu },
];

export const categoryById = (id: CategoryId) =>
  CATEGORIES.find((category) => category.id === id) ?? CATEGORIES[CATEGORIES.length - 1];

export type Condition = "Like new" | "Good" | "Fair" | "For repair";

export type Listing = {
  id: string;
  title: string;
  category: CategoryId;
  art: ArtKind;
  condition: Condition;
  /** Short spec chips shown on the card. */
  specs: string[];
  description: string;
  /** Optional real photo, e.g. "/images/products/split-ac.jpg". Falls back to the illustration. */
  image?: string;
  featured?: boolean;
  /** Everything is sold on call, so this is always the same label. */
  price: "Price on call";
};

/**
 * Edit this list to publish real stock.
 * - Put product photos in /public/images/products and set `image` to use a photo instead of the illustration.
 * - `featured: true` shows the item on the home page.
 * The entries below are example listings so the layout can be reviewed.
 */
export const LISTINGS: Listing[] = [
  {
    id: "split-ac-15",
    title: "Split Air Conditioner",
    category: "cooling",
    art: "split-ac",
    condition: "Good",
    specs: ["1.5 Ton", "Split", "Wall mounted"],
    description: "Wall-mounted split unit. Cooling performance and remote checked before sale; installation can be arranged.",
    featured: true,
    price: "Price on call",
  },
  {
    id: "fridge-double",
    title: "Double-Door Refrigerator",
    category: "refrigeration",
    art: "fridge",
    condition: "Good",
    specs: ["Double door", "Frost control", "Family size"],
    description: "Household refrigerator in working order. Ask the team for current capacity, age and delivery options.",
    featured: true,
    price: "Price on call",
  },
  {
    id: "tv-led-43",
    title: "LED Smart TV",
    category: "tv-audio",
    art: "tv",
    condition: "Like new",
    specs: ["43 inch", "Full HD", "Smart"],
    description: "Flat-panel television with remote and stand. Screen and ports tested on request.",
    featured: true,
    price: "Price on call",
  },
  {
    id: "laptop-i5",
    title: "Business Laptop",
    category: "computers",
    art: "laptop",
    condition: "Good",
    specs: ["Core i5", "8 GB RAM", "SSD"],
    description: "Office-grade laptop with charger. Battery health and storage details shared on the call.",
    featured: true,
    price: "Price on call",
  },
  {
    id: "freezer-chest",
    title: "Deep Freezer",
    category: "refrigeration",
    art: "freezer",
    condition: "Fair",
    specs: ["Chest type", "Single lid", "Commercial use"],
    description: "Chest freezer suitable for shops and kitchens. Compressor check available before purchase.",
    price: "Price on call",
  },
  {
    id: "washer-front",
    title: "Automatic Washing Machine",
    category: "home",
    art: "washer",
    condition: "Good",
    specs: ["Front load", "7 kg", "Fully automatic"],
    description: "Household washing machine in working order. Drum, drain and cycles tested on request.",
    price: "Price on call",
  },
  {
    id: "water-dispenser",
    title: "Water Dispenser",
    category: "cooling",
    art: "water-cooler",
    condition: "Good",
    specs: ["Hot & cold", "Bottle top", "Office use"],
    description: "Bottle-top dispenser with hot and cold taps, suitable for offices and shops.",
    price: "Price on call",
  },
  {
    id: "ups-1kva",
    title: "Inverter UPS",
    category: "power",
    art: "ups",
    condition: "Good",
    specs: ["1 kVA", "Digital display", "Battery separate"],
    description: "Home or small-office UPS with display. Battery requirements confirmed on the call.",
    price: "Price on call",
  },
  {
    id: "chiller-unit",
    title: "Air-Cooled Chiller",
    category: "cooling",
    art: "chiller",
    condition: "For repair",
    specs: ["Commercial", "Dual fan", "Site viewing"],
    description: "Commercial chiller for buyers who need a site viewing. Model and condition shared directly.",
    price: "Price on call",
  },
  {
    id: "phone-android",
    title: "Smartphone",
    category: "mobiles",
    art: "phone",
    condition: "Like new",
    specs: ["128 GB", "Dual SIM", "Box & charger"],
    description: "Used smartphone with charger. Model, storage and accessories confirmed on the call.",
    price: "Price on call",
  },
  {
    id: "microwave-oven",
    title: "Microwave Oven",
    category: "home",
    art: "microwave",
    condition: "Good",
    specs: ["25 L", "Digital panel", "Grill function"],
    description: "Countertop microwave with digital controls, tested before sale.",
    price: "Price on call",
  },
  {
    id: "pedestal-fan",
    title: "Pedestal Fan",
    category: "other",
    art: "fan",
    condition: "Fair",
    specs: ["Adjustable height", "3 speeds", "Oscillating"],
    description: "Standing fan with oscillation and three speed settings.",
    price: "Price on call",
  },
];
