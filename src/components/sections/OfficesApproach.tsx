import { useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  CalendarCheck2,
  Check,
  ClipboardList,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/* For offices & organisations                                         */
/* ------------------------------------------------------------------ */

const amcPoints: { label: string; hint: string; icon: LucideIcon }[] = [
  { label: "Site review", hint: "Assets and access checked first", icon: ClipboardList },
  { label: "Planned visits", hint: "Monthly visit schedule discussed", icon: CalendarCheck2 },
  { label: "Repair coverage", hint: "What is and isn't included", icon: Wrench },
  { label: "Service terms", hint: "Confirmed before work begins", icon: ShieldCheck },
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
                  <Building2 aria-hidden="true" size={15} /> For offices &amp; organisations
                </p>
                <h2 className="headline mt-4 max-w-xl text-white md:text-[2.6rem]">
                  Planned maintenance for your{" "}
                  <span className="bg-gradient-to-r from-brand-cyan to-white bg-clip-text text-transparent">
                    whole site.
                  </span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/72">
                  Ask about an Annual Maintenance Contract for an office, company or
                  larger facility. After a site review, the team can discuss monthly
                  visits, repair coverage and service terms.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    href="/request-a-quote?service=annual-maintenance"
                    variant="light"
                    icon={false}
                  >
                    Discuss an AMC
                    <ArrowRight aria-hidden="true" size={17} />
                  </Button>
                  <Link
                    to="/services/annual-maintenance"
                    className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-md border border-white/30 px-5 text-sm font-bold text-white transition-colors hover:border-white/70 hover:bg-white/5"
                  >
                    AMC details
                  </Link>
                </div>
              </div>

              <AmcChecklist />
            </div>
          </motion.div>
        </div>
      </section>
      <section>
        <WhyAOne />
      </section></>
  );
}

/** Glass panel whose rows tick themselves one by one, then keep cycling a highlight. */
function AmcChecklist() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [focus, setFocus] = useState(-1);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const start = window.setTimeout(() => setFocus(0), amcPoints.length * 450 + 600);
    return () => window.clearTimeout(start);
  }, [inView, reduceMotion]);

  useEffect(() => {
    if (focus < 0 || reduceMotion) return;
    const next = window.setTimeout(() => setFocus((v) => (v + 1) % amcPoints.length), 2200);
    return () => window.clearTimeout(next);
  }, [focus, reduceMotion]);

  return (
    <div ref={ref} className="relative">
      <motion.div
        className="rounded-3xl border border-white/12 bg-white/[0.06] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.3)] backdrop-blur-md sm:p-7"
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white">
              <ShieldCheck aria-hidden="true" size={22} />
            </span>
            <div>
              <p className="text-sm font-bold text-white">What an AMC discussion covers</p>
              <p className="text-xs text-white/55">Shaped around your equipment and site</p>
            </div>
          </div>
        </div>

        <ul className="mt-6 space-y-3">
          {amcPoints.map(({ label, hint, icon: Icon }, index) => {
            const isFocus = focus === index;
            return (
              <motion.li
                key={label}
                className="relative flex items-center gap-4 overflow-hidden rounded-2xl border px-4 py-3.5 transition-colors duration-500"
                style={{
                  borderColor: isFocus ? "rgba(5,169,232,0.6)" : "rgba(255,255,255,0.1)",
                  backgroundColor: isFocus ? "rgba(5,169,232,0.12)" : "rgba(255,255,255,0.04)",
                }}
                initial={reduceMotion ? false : { opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : undefined}
                transition={{ duration: 0.6, delay: index * 0.45, ease: EASE }}
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-brand-cyan">
                  <Icon aria-hidden="true" size={19} strokeWidth={1.8} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-white">{label}</span>
                  <span className="block text-xs text-white/55">{hint}</span>
                </span>
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-cyan/15 text-brand-cyan">
                  <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
                    <motion.path
                      d="M5 12.5l4.5 4.5L19 7.5"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={reduceMotion ? false : { pathLength: 0 }}
                      animate={inView ? { pathLength: 1 } : undefined}
                      transition={{ duration: 0.5, delay: index * 0.45 + 0.4, ease: "easeOut" }}
                    />
                  </svg>
                </span>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Why A-One                                                           */
/* ------------------------------------------------------------------ */

const reasons: { title: string; body: string; icon: LucideIcon; accent: string }[] = [
  {
    title: "Connected services",
    body: "Electrical, HVAC, cooling and appliance needs can start with one enquiry.",
    icon: Zap,
    accent: "from-brand-blue to-brand-cyan",
  },
  {
    title: "Different site types",
    body: "Enquiries cover homes, offices, commercial sites and facilities.",
    icon: Building2,
    accent: "from-brand-navy to-brand-blue",
  },
  {
    title: "Clear next steps",
    body: "The team reviews the request before confirming scope, timing or price.",
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
          <p className="eyebrow">A practical service approach</p>
          <h2 className="headline mt-3 text-brand-navy md:text-[2.7rem]">Why A-One</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
            Share the equipment and site details first. The team can confirm the right
            service and next step.
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
