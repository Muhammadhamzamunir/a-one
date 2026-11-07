import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { PRICE_LABEL } from "@/data/products";
import { SITE } from "@/constants/site";
import type { Product } from "@/types";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const reduceMotion = useReducedMotion();
  const waText = encodeURIComponent(
    `Hello A-One, I am interested in the pre-owned "${product.title}". Please share the price and availability.`,
  );

  return (
    <motion.article
      layout={!reduceMotion}
      initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: reduceMotion ? 0 : (index % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(13,27,42,0.04)] transition-shadow duration-300 hover:shadow-[0_22px_44px_-18px_rgba(13,27,42,0.28)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={`${product.title} (pre-owned)`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-navy/90 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
          {product.category}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-brand-red shadow-sm">
          Pre-owned
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[17px] font-bold leading-6 text-brand-navy">{product.title}</h3>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {product.specs.map((spec) => (
            <li key={spec} className="rounded-md bg-surface px-2.5 py-1 text-xs font-semibold text-slate-600">
              {spec}
            </li>
          ))}
        </ul>
        <p className="mb-5 mt-3 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <ShieldCheck aria-hidden="true" size={14} className="text-brand-blue" />
          {product.condition}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <div>
            <p className="text-[11px] font-semibold text-slate-500">Price</p>
            <p className="text-base font-extrabold text-brand-navy">{PRICE_LABEL}</p>
          </div>
          <div className="flex gap-2">
            <a
              href={`${SITE.whatsappHref}?text=${waText}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`Message A-One on WhatsApp about ${product.title}`}
              className="focus-ring grid size-11 place-items-center rounded-lg border border-slate-200 text-brand-navy transition-colors hover:border-brand-blue hover:bg-blue-50 hover:text-brand-blue"
            >
              <MessageCircle aria-hidden="true" size={18} />
            </a>
            <a
              href={SITE.phoneHref}
              className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-lg bg-brand-blue px-4 text-sm font-bold text-white transition-colors hover:bg-[#103b7c]"
            >
              <Phone aria-hidden="true" size={16} />
              Call
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
