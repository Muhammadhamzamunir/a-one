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
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Buy & Sale", href: "/buy-&-sale" },
  { label: "About", href: "/about" },
  // { label: "Brands", href: "/#brands" },
  { label: "Blogs", href: "/blogs" },
] as const;
