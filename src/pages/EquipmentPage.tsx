import { useMemo, useState, useCallback } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Camera, PhoneCall, BadgeCheck, Handshake, Phone, Search, Tag, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Seo } from "@/components/ui/Seo";
import { ProductArt } from "@/components/market/ProductArt";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
// import { ProductCard } from "@/components/ui/ProductCard";
import { ProductCard } from "@/components/market/ProductCard";
import { CATEGORIES, LISTINGS, type CategoryId, type Listing } from "@/data/listings";
import { CTASection } from "@/components/sections/CTASection";
import { productCategories, products } from "@/data/products";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";
import type { ProductCategory } from "@/types";
import { SellForm } from "@/components/market/SellForm";
import { ProductModal } from "@/components/market/ProductModal";

const sellSteps = [
  { title: "Send details", body: "Share the product, brand, model, age and your area." },
  { title: "Add photos", body: "Clear photos of the front, back and any marks help the review." },
  { title: "Get a call", body: "The team checks the details and calls you with the next step." },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const benefits = [
  { icon: PhoneCall, title: "Price on call", body: "Every item is priced when you speak to the team." },
  { icon: BadgeCheck, title: "Checked first", body: "Condition and availability are confirmed before purchase." },
  { icon: Handshake, title: "Buy or sell", body: "Looking for a unit, or have one to sell? Start here." },
];

export default function EquipmentPage() {
  const reduceMotion = useReducedMotion();
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Listing | null>(null);
  const closeModal = useCallback(() => setOpen(null), []);

  const raw = params.get("category");
  const category: CategoryId | "all" = CATEGORIES.some((c) => c.id === raw) ? (raw as CategoryId) : "all";

  const setCategory = (id: CategoryId | "all") => {
    const next = new URLSearchParams(params);
    if (id === "all") next.delete("category");
    else next.set("category", id);
    setParams(next, { replace: true, preventScrollReset: true });
  };

  const counts = useMemo(() => {
    const map = new Map<CategoryId, number>();
    LISTINGS.forEach((l) => map.set(l.category, (map.get(l.category) ?? 0) + 1));
    return map;
  }, []);

    const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return LISTINGS.filter((l) => {
      if (category !== "all" && l.category !== category) return false;
      if (!q) return true;
      return [l.title, l.description, ...l.specs].join(" ").toLowerCase().includes(q);
    });
  }, [category, query]);

  return (
    <>
       <Seo
        title="Buy & Sell Electronics in Lahore"
        description="Buy and sell used ACs, refrigerators, TVs, laptops, mobiles, UPS units and other electronics in Lahore with A-One. Prices on call."
      />

      {/* <section className="technical-grid relative overflow-hidden bg-brand-navy pb-16 pt-32 text-white md:pb-20">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-10 size-[420px] rounded-full bg-brand-cyan/15 blur-3xl"
          animate={reduceMotion ? undefined : { scale: [1, 1.15, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container-shell relative">
          <Breadcrumbs items={[{ label: "Pre-owned" }]} />
          <div className="mt-9 max-w-3xl">
            <p className="eyebrow eyebrow-light">Buy or sell</p>
            <h1 className="headline mt-3 text-white">Pre-owned electronics and cooling equipment, checked before sale.</h1>
            <p className="body-large mt-5 max-w-2xl text-white/70">
              Buy or sell ACs, refrigerators, water coolers, appliances, TVs, laptops and other electronic products. Every
              item is price on call; availability and terms are confirmed directly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={SITE.phoneHref} icon={false}>
                <Phone aria-hidden="true" size={16} />
                Call for prices
              </Button>
              <Button href={SITE.whatsappHref} variant="ghost" icon={false}>
                <MessageCircle aria-hidden="true" size={17} />
                Sell on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section> */}
       {/* HERO */}
      <section className="technical-grid relative overflow-hidden bg-brand-navy pb-20 pt-32 text-white md:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-24 size-[380px] rounded-full bg-brand-blue/30 blur-[110px]"
        />
        <div className="container-shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <Breadcrumbs items={[{ label: "Buy & Sell" }]} />
            <motion.p
              className="eyebrow eyebrow-light mt-9"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Buy &amp; sell electronics
            </motion.p>
            <motion.h1
              className="headline mt-3 max-w-2xl text-white md:text-[3rem]"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            >
              Buy or sell any electronics,{" "}
              <span className="bg-gradient-to-r from-brand-cyan to-white bg-clip-text text-transparent">
                price on call.
              </span>
            </motion.h1>
            <motion.p
              className="body-large mt-5 max-w-xl text-white/70"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            >
              ACs, refrigerators, TVs, laptops, mobiles, UPS units and more. Browse the listings below
              or tell us what you want to sell.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
            >
              <Button href="#listings" icon={false}>
                Browse listings <ArrowRight aria-hidden="true" size={17} />
              </Button>
              <Button href="#sell" variant="light" icon={false}>
                <Tag aria-hidden="true" size={16} /> Sell your item
              </Button>
              <Button href={SITE.phoneHref} variant="ghost" icon={false}>
                Call Now
              </Button>
            </motion.div>
          </div>

          <HeroStack reduceMotion={!!reduceMotion} />
        </div>

        <div className="container-shell relative mt-14">
          <div className="grid gap-4 sm:grid-cols-3">
            {benefits.map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-cyan/15 text-brand-cyan">
                  <Icon aria-hidden="true" size={21} />
                </span>
                <div>
                  <p className="font-bold text-white">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-white/60">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LISTINGS */}
      <section id="listings" className="section-pad scroll-mt-20 bg-white">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Available now</p>
              <h2 className="headline mt-3 text-brand-navy">Browse listings.</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Tap any item for details. Call the team for the price and to arrange a viewing.
              </p>
            </div>
            <div className="relative w-full lg:w-80">
              <Search
                aria-hidden="true"
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search AC, laptop, fridge…"
                aria-label="Search listings"
                className="focus-ring min-h-12 w-full rounded-full border border-slate-300 bg-white pl-11 pr-10 text-sm text-brand-navy placeholder:text-slate-400"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="focus-ring absolute right-2 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full text-slate-500 hover:bg-slate-100"
                >
                  <X aria-hidden="true" size={16} />
                </button>
              )}
            </div>
          </div>

          <div
            className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
            role="tablist"
            aria-label="Filter by category"
          >
            <FilterChip active={category === "all"} onClick={() => setCategory("all")} count={LISTINGS.length}>
              All items
            </FilterChip>
            {CATEGORIES.map(({ id, label, icon: Icon }) => (
              <FilterChip
                key={id}
                active={category === id}
                onClick={() => setCategory(id)}
                count={counts.get(id) ?? 0}
                icon={<Icon aria-hidden="true" size={15} />}
              >
                {label}
              </FilterChip>
            ))}
          </div>

          <p className="mt-6 text-sm text-slate-500" aria-live="polite">
            Showing <strong className="text-brand-navy">{visible.length}</strong>{" "}
            {visible.length === 1 ? "item" : "items"}
          </p>

          <motion.div layout={!reduceMotion} className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {visible.map((listing, index) => (
                <ProductCard key={listing.id} listing={listing} index={index} onOpen={setOpen} />
              ))}
            </AnimatePresence>
          </motion.div>

          {visible.length === 0 && (
            <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-surface p-10 text-center">
              <p className="text-lg font-bold text-brand-navy">Nothing matches yet.</p>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
                New stock arrives often. Call or WhatsApp the team and tell us what you are looking for.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <Button href={SITE.phoneHref} icon={false}>
                  Call Now
                </Button>
                <Button href={SITE.whatsappHref} variant="secondary" icon={false}>
                  WhatsApp
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

       {/* SELL */}
      <section id="sell" className="section-pad relative scroll-mt-20 overflow-hidden bg-surface">
        <div className="container-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="eyebrow">Sell your item</p>
            <h2 className="headline mt-3 text-brand-navy">Turn unused electronics into cash.</h2>
            <p className="body-large mt-4 text-slate-600">
              Send the details and a few photos. The team reviews your item and calls you with an offer.
            </p>
            <ol className="mt-8 space-y-5">
              {[
                ["Tell us about the item", "Category, model, condition and your area."],
                ["We review and call", "The team confirms the details and shares an offer."],
                ["Agree and hand over", "Collection and payment are arranged directly."],
              ].map(([title, body], i) => (
                <li key={title} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-navy text-sm font-extrabold text-white">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block font-bold text-brand-navy">{title}</span>
                    <span className="mt-0.5 block text-sm leading-6 text-slate-600">{body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(13,27,42,0.08)] md:p-9"
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <SellForm />
          </motion.div>
        </div>
      </section>
      <CTASection />

      <ProductModal listing={open} onClose={closeModal} />
    </>
  );
}
/** Three floating product tiles for the hero. */
function HeroStack({ reduceMotion }: { reduceMotion: boolean }) {
  const tiles = [
    { art: "chiller" as const, className: "left-0 top-6 w-[58%]", delay: 0 },
    { art: "fridge" as const, className: "right-0 top-0 w-[46%]", delay: 1.2 },
    { art: "split-ac" as const, className: "bottom-0 left-[18%] w-[56%]", delay: 2.4 },
  ];
  return (
    <div className="relative mx-auto hidden aspect-[5/4] w-full max-w-[520px] lg:block" aria-hidden="true">
      {tiles.map(({ art, className, delay }, i) => (
        <motion.div
          key={art}
          className={cn(
            "absolute rounded-3xl border border-white/20 bg-gradient-to-br from-white to-[#dfeaf6] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.35)]",
            className,
          )}
          initial={reduceMotion ? false : { opacity: 0, y: 50, rotate: i % 2 ? 4 : -4 }}
          animate={
            reduceMotion
              ? undefined
              : { opacity: 1, y: [0, -14, 0], rotate: i % 2 ? [3, 1, 3] : [-3, -1, -3] }
          }
          transition={{
            opacity: { duration: 0.8, delay: 0.2 + i * 0.15 },
            default: { duration: 6, delay, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <ProductArt kind={art} className="h-full w-full" />
        </motion.div>
      ))}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
  count,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  count: number;
  icon?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "focus-ring relative inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border px-4 text-[13px] font-bold transition-colors",
        active
          ? "border-transparent text-white"
          : "border-slate-200 bg-white text-brand-navy hover:border-brand-blue/40 hover:bg-blue-50",
      )}
    >
      {active && (
        <motion.span
          layoutId="chip-bg"
          className="absolute inset-0 rounded-full bg-brand-navy"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      )}
      <span className="relative inline-flex items-center gap-2">
        {icon}
        {children}
        <span
          className={cn(
            "rounded-full px-1.5 text-[11px]",
            active ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500",
          )}
        >
          {count}
        </span>
      </span>
    </button>
  );
}