export const SITE = {
  name: "A-One Maintenance Service",
  shortName: "A-One",
  description:
    "HVAC, electrical, appliance and complete maintenance services across Lahore.",
  address:
    "9-B, Sanam Arcade, Mozang Chungi Near Qurtaba Chowk, Ferozpur Road Lahore",
  phonePrimary: "+92 302 9511041",
  phoneSecondary: "+92 322 4285478",
  phoneHref: "tel:+923029511041",
  whatsappHref: "https://wa.me/923029511041",
  email: "tahirmehmoodvip01@gmil.com",
  siteUrl: import.meta.env.VITE_SITE_URL || "https://www.example.com",
  license: "Punjab Building & Electrical Contractor License",
  yearsInBusiness: "15+",
  reviewCount: "500+",
  reviewRating: "4.8",
  warrantyYears: "1",
  dispatchFee: "Rs 500",
  diagnosticFee: "Rs 1,200",
  hours: "24/7",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Buy & Sale", href: "/buy-&-sale" },
  { label: "About", href: "/about" },
  // { label: "Brands", href: "/#brands" },
  { label: "Blogs", href: "/blogs" },
] as const;

export const TRUST_ITEMS = [
  {
    label: "Licensed & Insured",
    value: SITE.license,
    icon: "ShieldCheck",
  },
  {
    label: "Google Reviews",
    value: `${SITE.reviewCount}+ at ${SITE.reviewRating}★`,
    icon: "Star",
  },
  {
    label: "Serving Lahore",
    value: `Since ${new Date().getFullYear() - Number(SITE.yearsInBusiness.replace(/\D/g, ""))}`,
    icon: "Building2",
  },
] as const;

export const PRICING_TRANSPARENCY = [
  {
    title: "Free estimates",
    body: "Estimates are free for every service. Scheduled visits and written project prices are free.",
  },
  {
    title: "Diagnostics & repairs",
    body: `Diagnostics cost ${SITE.diagnosticFee} for the first visit, then standard rates apply. Many common issues are resolved within one visit.`,
  },
  {
    title: "Workmanship warranty",
    body: `Quoted installations include a ${SITE.warrantyYears}-year workmanship warranty. Parts and equipment carry manufacturer warranties.`,
  },
] as const;
