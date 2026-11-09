import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  CalendarCheck2,
  Check,
  ClipboardCheck,
  Factory,
  PhoneCall,
  ShieldCheck,
  SlidersHorizontal,
  Star,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/* Contract section: shops, offices, factories & homes                 */
/* ------------------------------------------------------------------ */

const plans: {
  label: string;
  hint: string;
  frequency: string;
  icon: LucideIcon;
  href: string;
  popular?: boolean;
}[] = [
  {
    label: "Daily care",
    frequency: "Every day",
    hint: "We come every day and take care of everything",
    icon: Wrench,
    href: "/request-service?service=annual-maintenance&plan=daily",
  },
  {
    label: "Monthly visits",
    frequency: "Every month",
    hint: "Our team visits your place once every month",
    icon: CalendarCheck2,
    href: "/request-service?service=annual-maintenance&plan=monthly",
    popular: true,
  },
  {
    label: "Yearly checking",
    frequency: "Once a year",
    hint: "Full checking of your place once in a year",
    icon: ClipboardCheck,
    href: "/request-service?service=annual-maintenance&plan=yearly",
  },
  {
    label: "Your own plan",
    frequency: "You decide",
    hint: "Tell us what you want, we will make the plan for you",
    icon: SlidersHorizontal,
    href: "/request-service?service=annual-maintenance&plan=custom",
  },
];

export function OfficesApproach() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className="relative z-10 bg-[#f5f7fa] pb-6 pt-[clamp(64px,7vw,96px)]">
        <div className="container-shell">
          <motion.div
            className="technical-grid relative overflow-hidden rounded-[28px] p-7 text-white shadow-[0_30px_70px_rgba(13,27,42,0.22)] sm:p-10 lg:p-14"
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {/* decorative rings */}
            <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-28">
              {[0, 1, 2].map((ring) => (
                <motion.span
                  key={ring}
                  className="absolute rounded-full border border-brand-cyan/20"
                  style={{
                    width: 300 + ring * 120,
                    height: 300 + ring * 120,
                    top: -(ring * 60),
                    left: -(ring * 60),
                  }}
                  animate={reduceMotion ? undefined : { scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 6, delay: ring * 1.2, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full bg-brand-blue/30 blur-[100px]"
            />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
              <div>
                <p className="eyebrow eyebrow-light inline-flex items-center gap-2">
                  For shops, offices, factories &amp; homes
                </p>
                <h2 className="headline mt-4 max-w-xl text-white md:text-[2.6rem]">
                  Do you want to make{" "}
                  <span className="bg-gradient-to-r from-brand-cyan to-white bg-clip-text text-transparent">
                    a contract with us?
                  </span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/72">
                  Want us to take care of your shop, office or factory? Tell us how
                  you want it: daily, monthly, yearly checking or any other way. Make
                  any plan of your choice with us, we are ready.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    href="/request-service?service=annual-maintenance"
                    variant="light"
                    icon={false}
                  >
                    Yes, I am interested
                    <ArrowRight aria-hidden="true" size={17} />
                  </Button>
                  <Link
                    to="/services/annual-maintenance"
                    className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-md border border-white/30 px-5 text-sm font-bold text-white transition-colors hover:border-white/70 hover:bg-white/5"
                  >
                    Know more
                  </Link>
                </div>
              </div>

              <PlanChoices />
            </div>
          </motion.div>
        </div>
      </section>
      <section>
        <WhyAOne />
      </section>
    </>
  );
}

/** Glass panel with plan tiles that pop in one by one, then keep cycling a highlight. */
function PlanChoices() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [focus, setFocus] = useState(-1);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const start = window.setTimeout(() => setFocus(0), plans.length * 300 + 700);
    return () => window.clearTimeout(start);
  }, [inView, reduceMotion]);

  useEffect(() => {
    if (focus < 0 || reduceMotion) return;
    const next = window.setTimeout(() => setFocus((v) => (v + 1) % plans.length), 2200);
    return () => window.clearTimeout(next);
  }, [focus, reduceMotion]);

  return (
    <div ref={ref} className="relative">
      <motion.div
        className="lg:rounded-3xl lg:border lg:border-white/12 lg:bg-white/[0.06] lg:p-5 shadow-[0_24px_60px_rgba(0,0,0,0.3)] backdrop-blur-md sm:p-7"
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-3">
          <div>
            <p className="text-sm font-bold text-white">Choose the plan you like</p>
            <p className="text-xs text-white/55">
              Make any plan of your choice with us, we are ready
            </p>
          </div>
        </div>

       <ul className="mt-8 grid gap-4 sm:grid-cols-2">
  {plans.map(({ label, hint, icon: Icon }, index) => {
    const isFocus = focus === index;

    return (
      <motion.li
        key={label}
        className="group relative flex flex-col rounded-2xl border p-5 transition-all duration-300"
        style={{
          borderColor: isFocus
            ? "rgba(5,169,232,0.55)"
            : "rgba(255,255,255,0.09)",
          background: isFocus
            ? "linear-gradient(135deg, rgba(5,169,232,0.12), rgba(255,255,255,0.035))"
            : "rgba(255,255,255,0.025)",
        }}
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 20 }
        }
        animate={
          inView
            ? { opacity: 1, y: 0 }
            : undefined
        }
        transition={{
          duration: 0.5,
          delay: index * 0.12,
          ease: EASE,
        }}
        whileHover={
          reduceMotion
            ? undefined
            : { y: -4 }
        }
      >
        {/* Subtle accent */}
        <div
          className="absolute inset-x-5 top-0 h-px transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(5,169,232,0.7), transparent)",
            opacity: isFocus ? 1 : 0,
          }}
        />

        {/* Header */}
        <div className="flex items-center gap-2">
          <span
            className="grid size-9 shrink-0 place-items-center rounded-xl border transition-colors duration-300"
            style={{
              backgroundColor: isFocus
                ? "rgba(5,169,232,0.15)"
                : "rgba(255,255,255,0.06)",
              borderColor: isFocus
                ? "rgba(5,169,232,0.3)"
                : "rgba(255,255,255,0.08)",
              color: "#05A9E8",
            }}
          >
            <Icon
              aria-hidden="true"
              size={16}
              strokeWidth={1.8}
            />
          </span>

          <div className="min-w-0 flex-1">
            <span className="block text-sm whitespace-nowrap font-semibold tracking-wide text-white">
              {label}
            </span>
          </div>

        </div>

        {/* Description */}
        <p className="mt-4 text-[13px] leading-6 text-white/55">
          {hint}
        </p>
      </motion.li>
    );
  })}
</ul>

        <motion.div
          className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, delay: plans.length * 0.3 + 0.1, ease: EASE }}
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-cyan/15 text-brand-cyan">
            <PhoneCall aria-hidden="true" size={17} strokeWidth={1.8} />
          </span>
          <p className="text-xs leading-5 text-white/70">
            Not sure which plan to take? Just call us, we will guide you.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Why A-One                                                           */
/* ------------------------------------------------------------------ */

const reasons: { title: string; body: string; icon: LucideIcon; accent: string }[] = [
  {
    title: "Fast response",
    body: "Call us and our team will reach your place within a few hours.",
    icon: PhoneCall,
    accent: "from-brand-blue to-brand-cyan",
  },
  {
    title: "For every place",
    body: "House, shop, office or factory, small work or big work, we do it all.",
    icon: Building2,
    accent: "from-brand-navy to-brand-blue",
  },
  {
    title: "No hidden charges",
    body: "You get the final price upfront. No surprises, no hidden costs. We only start after you approve the price.",
    icon: Check,
    accent: "from-brand-red to-[#ff5a5f]",
  },
];

export function WhyAOne() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#f5f7fa] pb-[clamp(68px,7vw,104px)] pt-[clamp(56px,6vw,88px)]">
      <div className="container-shell">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="eyebrow">Why choose us</p>
          <h2 className="headline mt-3 text-brand-navy md:text-[2.7rem]">Why A-One</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
            From small repairs to big projects, we deliver quality work at a price you agree on.
          </p>
        </motion.div>

        <motion.ul
          className="mt-12 grid gap-5 md:grid-cols-3"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
        >
          {reasons.map(({ title, body, icon: Icon, accent }, index) => (
            <motion.li
              key={title}
              className="h-full"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
            >
              <SpotlightCard
                glow="23,74,156"
                className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_2px_0_rgba(13,27,42,0.02)] transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-2 hover:border-brand-blue/30 hover:shadow-[0_24px_50px_rgba(13,27,42,0.12)] md:p-8"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-4 select-none font-[Manrope] text-[7rem] font-extrabold leading-none text-slate-100 transition-colors duration-500 group-hover:text-brand-blue/10"
                >
                  0{index + 1}
                </span>
                <motion.span
                  className={`relative grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-[0_12px_24px_rgba(23,74,156,0.28)]`}
                  whileHover={reduceMotion ? undefined : { rotate: [0, -8, 8, 0], scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon aria-hidden="true" size={26} strokeWidth={1.8} />
                </motion.span>
                <h3 className="relative mt-7 text-xl font-bold text-brand-navy">{title}</h3>
                <p className="relative mt-3 text-[15px] leading-7 text-slate-600">{body}</p>
                <span
                  aria-hidden="true"
                  className={`relative mt-7 block h-1 w-12 rounded-full bg-gradient-to-r ${accent} transition-[width] duration-500 group-hover:w-24`}
                />
              </SpotlightCard>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}