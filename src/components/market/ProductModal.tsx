import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MapPin, MessageCircle, Phone, X } from "lucide-react";
import { SITE } from "@/constants/site";
import { categoryById, type Listing } from "@/data/listings";
import { ProductImage, whatsappFor } from "./ProductCard";

export function ProductModal({ listing, onClose }: { listing: Listing | null; onClose: () => void }) {
  const reduceMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!listing) return;
    const previous = document.activeElement as HTMLElement | null;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previous?.focus?.();
    };
  }, [listing, onClose]);

  return (
    <AnimatePresence>
      {listing && (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-brand-navy/70 p-4 backdrop-blur-sm"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={listing.title}
            className="relative grid max-h-[92vh] w-full max-w-3xl overflow-auto rounded-3xl bg-white shadow-[0_40px_90px_rgba(0,0,0,0.4)] md:grid-cols-[1.05fr_1fr]"
            initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close details"
              className="focus-ring absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-white/90 text-brand-navy shadow transition-colors hover:bg-slate-100"
            >
              <X aria-hidden="true" size={19} />
            </button>

            <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 via-[#eef4fb] to-[#dfeaf6] md:aspect-auto md:min-h-[360px]">
              <span className="absolute inset-0 grid place-items-center p-8">
                <ProductImage listing={listing} className={listing.image ? "absolute inset-0" : undefined} />
              </span>
            </div>

            <div className="p-7 md:p-8">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-brand-blue">
                {categoryById(listing.category).label}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold leading-tight text-brand-navy">{listing.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{listing.description}</p>

              <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-surface p-3">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Condition</dt>
                  <dd className="mt-1 font-bold text-brand-navy">{listing.condition}</dd>
                </div>
                <div className="rounded-xl bg-surface p-3">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Location</dt>
                  <dd className="mt-1 inline-flex items-center gap-1 font-bold text-brand-navy">
                    <MapPin aria-hidden="true" size={14} className="text-brand-red" /> Lahore
                  </dd>
                </div>
              </dl>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {listing.specs.map((spec) => (
                  <li key={spec} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                    {spec}
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-dashed border-brand-blue/30 bg-blue-50/60 p-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Price</p>
                <p className="text-2xl font-extrabold text-brand-navy">{listing.price}</p>
                <p className="mt-1 text-xs text-slate-600">Call or message to confirm price and availability.</p>
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <a
                  href={SITE.phoneHref}
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-blue px-4 text-sm font-bold text-white hover:bg-[#103b7c]"
                >
                  <Phone aria-hidden="true" size={16} /> Call now
                </a>
                <a
                  href={whatsappFor(listing)}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-emerald-300 bg-emerald-50 px-4 text-sm font-bold text-emerald-700 hover:bg-emerald-100"
                >
                  <MessageCircle aria-hidden="true" size={17} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
