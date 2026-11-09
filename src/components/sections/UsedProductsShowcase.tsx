import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Camera, Phone, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/market/ProductCard";
import { CATEGORIES, LISTINGS } from "@/data/listings";
import { SITE } from "@/constants/site";
import { ProductModal } from "@/components/market/ProductModal";
import { useState, useCallback  } from "react";

/** Home-page teaser for the Buy & Sell marketplace. */
export function UsedProductsShowcase() {
  const reduceMotion = useReducedMotion();
  const featured = LISTINGS.filter((listing: any) => listing.featured).slice(0, 4);
  const [open, setOpen] = useState<Listing | null>(null);
  const closeModal = useCallback(() => setOpen(null), []);
  return (
    <section className="section-pad relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 size-[420px] rounded-full bg-brand-cyan/10 blur-[110px]"
      />
      <div className="container-shell relative">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <motion.div
            className="max-w-2xl"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">Buy &amp; sell electronics</p>
            <h2 className="headline mt-3 text-brand-navy md:text-[2.7rem]">
              Looking to buy or sell electronics?
            </h2>
            <p className="body-large mt-4 text-slate-600">
              ACs, refrigerators, TVs, laptops, mobiles, UPS units and more. Browse what is
              available, or send us what you want to sell. Every item is priced on call.
            </p>
          </motion.div>
          <Link
            to="/buy-&-sale"
            className="focus-ring inline-flex min-h-11 shrink-0 items-center gap-2 self-start text-sm font-bold text-brand-blue transition-colors hover:text-brand-red lg:self-auto"
          >
            Browse all listings <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>

        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Product categories">
          {CATEGORIES.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <Link
                to={`/buy-&-sale?category=${id}#listings`}
                className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-[13px] font-bold text-brand-navy transition-transform transition-colors duration-200 ease-out hover:-translate-y-0.5 hover:border-brand-blue/40 hover:bg-blue-50 hover:text-brand-blue"
              >
                <Icon aria-hidden="true" size={15} />
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((listing: any, index : any) => (
            <ProductCard key={listing.id} listing={listing} index={index} onOpen={setOpen}/>
          ))}
        </div>

        <motion.div
          className="technical-grid relative mt-10 flex flex-col justify-between gap-6 overflow-hidden rounded-3xl p-7 text-white md:flex-row md:items-center md:p-10"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-red to-[#ff5a5f]">
              <Tag aria-hidden="true" size={22} />
            </span>
            <div>
              <h3 className="text-xl font-extrabold">Have something to sell?</h3>
              <p className="mt-1 max-w-xl text-sm leading-6 text-white/70">
                Tell us the item, its condition and your area, and add photos. The team reviews
                it and calls you with an offer.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/buy-&-sale#sell" variant="light" icon={false}>
              <Camera aria-hidden="true" size={17} /> Sell your item
            </Button>
            <Button href={SITE.phoneHref} variant="ghost" icon={false}>
              <Phone aria-hidden="true" size={16} /> Call Now
            </Button>
          </div>
        </motion.div>
      </div>
        <ProductModal listing={open} onClose={closeModal} />
    </section>

  );
}
