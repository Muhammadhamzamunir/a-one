import { motion, useReducedMotion } from "framer-motion";
import { Eye, MapPin, MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/constants/site";
import { categoryById, type Condition, type Listing } from "@/data/listings";
import { cn } from "@/lib/utils";
import { ProductArt } from "./ProductArt";

const conditionStyle: Record<Condition, string> = {
  "Like new": "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Good: "bg-sky-50 text-sky-700 ring-sky-200",
  Fair: "bg-amber-50 text-amber-700 ring-amber-200",
  "For repair": "bg-slate-100 text-slate-600 ring-slate-200",
};

export const whatsappFor = (listing: Listing) =>
  `${SITE.whatsappHref}?text=${encodeURIComponent(
    `Hello A-One, I'm interested in the ${listing.title} (${listing.specs.join(", ")}). Please share the price.`,
  )}`;

/** Photo if the listing has one, otherwise the illustration. */
export function ProductImage({ listing, className }: { listing: Listing; className?: string }) {
  if (listing.image) {
    return (
      <img
        src={listing.image}
        alt={listing.title}
        loading="lazy"
        decoding="async"
        className={cn("h-full w-full object-cover", className)}
      />
    );
  }
  return <ProductArt kind={listing.art} className={cn("h-full w-full", className)} />;
}

export function ProductCard({
  listing,
  onOpen,
  index = 0,
}: {
  listing: Listing;
  onOpen?: (listing: Listing) => void;
  index?: number;
}) {
  const reduceMotion = useReducedMotion();
  const category = categoryById(listing.category);
  const CategoryIcon = category.icon;

  return (
    <motion.article
      layout={!reduceMotion}
      initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: Math.min(index, 5) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_0_rgba(13,27,42,0.03)] transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-[0_22px_44px_rgba(13,27,42,0.13)]"
    >
      <button
        type="button"
        onClick={() => onOpen?.(listing)}
        className="focus-ring relative block aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-slate-50 via-[#eef4fb] to-[#dfeaf6] text-left"
        aria-label={`View details for ${listing.title}`}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 opacity-60 [background-image:radial-gradient(rgba(23,74,156,0.16)_1px,transparent_1px)] [background-size:18px_18px]"
        />
        <span className="absolute inset-0 grid place-items-center p-5 transition-transform duration-500 group-hover:scale-[1.06]">
          <ProductImage listing={listing} className={listing.image ? "absolute inset-0" : undefined} />
        </span>
        <span
          className={cn(
            "absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold ring-1",
            conditionStyle[listing.condition],
          )}
        >
          {listing.condition}
        </span>
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-brand-navy/90 px-3 py-1.5 text-[11px] font-bold text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
          <Eye aria-hidden="true" size={13} /> Quick view
        </span>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <p className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-brand-blue">
          <CategoryIcon aria-hidden="true" size={13} />
          {category.short}
        </p>
        <h3 className="mt-2 text-lg font-bold leading-snug text-brand-navy">{listing.title}</h3>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {listing.specs.map((spec) => (
            <li
              key={spec}
              className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-600"
            >
              {spec}
            </li>
          ))}
        </ul>

        <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-500">
          <MapPin aria-hidden="true" size={13} className="text-brand-red" /> Lahore · inspect before you buy
        </p>

        <div className="mt-auto pt-5">
          <div className="flex items-end justify-between border-t border-dashed border-slate-200 pt-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400">Price</p>
              <p className="text-lg font-extrabold text-brand-navy">{listing.price}</p>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-[1fr_auto] gap-2">
            <a
              href={SITE.phoneHref}
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-brand-blue px-4 text-sm font-bold text-white transition-colors hover:bg-[#103b7c]"
            >
              <Phone aria-hidden="true" size={16} /> Call for price
            </a>
            <a
              href={whatsappFor(listing)}
              target="_blank"
              rel="noreferrer"
              aria-label={`WhatsApp about ${listing.title}`}
              className="focus-ring grid size-11 place-items-center rounded-lg border border-slate-200 text-emerald-600 transition-colors hover:border-emerald-300 hover:bg-emerald-50"
            >
              <MessageCircle aria-hidden="true" size={19} />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
