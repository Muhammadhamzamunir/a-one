import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CalendarDays,
  ClipboardCheck,
  FileCheck2,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { cn } from "@/lib/utils";

type Step = { title: string; body: string; icon: LucideIcon };

const STEPS: Step[] = [
  {
    title: "Call us",
    body: "Tell us what electrical work you need. We answer your questions on the call.",
    icon: MessageCircle,
  },
  {
    title: "Our team visits you",
    body: "Within a few hours, our technician comes to your home to check the problem.",
    icon: ClipboardCheck,
  },
  {
    title: "Get your price",
    body: "We give you a clear quotation or budget after checking. No hidden charges.",
    icon: FileCheck2,
  },
  {
    title: "Work starts after your approval",
    body: "If you are happy with the price, we start the work.",
    icon: CalendarDays,
  },
];

/** Seconds the connector line takes to travel from one node to the next. */
const SEGMENT = 0.85;
/** Milliseconds each step stays highlighted during the auto-play loop. */
const CYCLE_MS = 3200;

/**
 * "What to expect" section.
 *
 * Animation story (all framer-motion):
 *  1. When the list scrolls into view a gradient line draws itself from node to node.
 *  2. Each node pops (spring) and each card rises the moment the line reaches it.
 *  3. Afterwards the steps highlight one by one in a loop (pauses on hover/focus).
 *  4. Cards carry a cursor-following spotlight, a ghost step number and a progress bar.
 */
export function ProcessTimeline() {
  const reduceMotion = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  const inView = useInView(listRef, { once: true, amount: 0.3 });
  const [active, setActive] = useState(-1);
  const [paused, setPaused] = useState(false);

  // Start the auto-play loop once the intro sequence has finished.
  useEffect(() => {
    if (!inView || reduceMotion) return;
    const introMs = (STEPS.length - 1) * SEGMENT * 1000 + 700;
    const start = window.setTimeout(() => setActive(0), introMs);
    return () => window.clearTimeout(start);
  }, [inView, reduceMotion]);

  useEffect(() => {
    if (active < 0 || paused || reduceMotion) return;
    const next = window.setTimeout(
      () => setActive((value) => (value + 1) % STEPS.length),
      CYCLE_MS,
    );
    return () => window.clearTimeout(next);
  }, [active, paused, reduceMotion]);

  return (
    <section
      className="technical-grid relative isolate overflow-hidden py-[clamp(72px,8vw,112px)] text-white"
      aria-labelledby="process-title"
    >
      <Orbs reduceMotion={!!reduceMotion} />

      <div className="container-shell relative z-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            className="max-w-2xl"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow eyebrow-light inline-flex items-center gap-2">
               HOW IT WORKS
            </p>
            <h2
              id="process-title"
              className="headline mt-4 text-white md:text-[2.9rem]"
            >
              From your call to finished work{" "}
              <span className="bg-gradient-to-r from-white via-white to-brand-cyan bg-clip-text text-transparent">
                in 4 {" "}
              </span>
              <span className="bg-gradient-to-r from-white via-white to-brand-cyan bg-clip-text text-transparent">
               simple steps.
              </span>
            </h2>
            <p className="body-large mt-5 max-w-xl text-white/70">
              Call us and tell us your problem. Our team visits your home, gives you a clear price, and starts work only after you say yes.
            </p>
          </motion.div>
        </div>

        <ol
          ref={listRef}
          className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-4"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {STEPS.map((step, index) => (
            <TimelineItem
              key={step.title}
              step={step}
              index={index}
              isLast={index === STEPS.length - 1}
              started={inView || !!reduceMotion}
              active={active === index}
              reduceMotion={!!reduceMotion}
              onHover={() => setActive(index)}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

function TimelineItem({
  step,
  index,
  isLast,
  started,
  active,
  reduceMotion,
  onHover,
}: {
  step: Step;
  index: number;
  isLast: boolean;
  started: boolean;
  active: boolean;
  reduceMotion: boolean;
  onHover: () => void;
}) {
  const Icon = step.icon;
  const delay = reduceMotion ? 0 : index * SEGMENT;
  const number = String(index + 1).padStart(2, "0");

  // Count-up for the ghost number so it "ticks" in with the node.
  const count = useMotionValue(0);
  const shown = useTransform(count, (value) =>
    String(Math.round(value)).padStart(2, "0"),
  );
  useEffect(() => {
    if (!started || reduceMotion) {
      count.set(index + 1);
      return;
    }
    const controls = animate(count, index + 1, {
      duration: 0.7,
      delay,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [started, reduceMotion, index, delay, count]);

  return (
    <li className="relative grid grid-cols-[56px_1fr] gap-x-5 lg:flex lg:flex-col lg:items-center lg:gap-y-7">
      {/* connector to the next node: vertical on mobile, horizontal on desktop */}
      {!isLast && (
        <>
          <span
            aria-hidden="true"
            className="absolute left-7 top-7 h-[calc(100%+1.25rem)] w-px bg-white/12 lg:hidden"
          />
          <motion.span
            aria-hidden="true"
            className="absolute left-7 top-7 h-[calc(100%+1.25rem)] w-0.5 -translate-x-px origin-top bg-gradient-to-b from-brand-blue to-brand-cyan shadow-[0_0_12px_rgba(5,169,232,0.7)] lg:hidden"
            initial={reduceMotion ? false : { scaleY: 0 }}
            animate={started ? { scaleY: 1 } : undefined}
            transition={{ duration: SEGMENT, delay: delay + 0.25, ease: "linear" }}
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-7 hidden h-px w-[calc(100%+1.25rem)] bg-white/12 lg:block"
          />
          <motion.span
            aria-hidden="true"
            className="absolute left-1/2 top-7 hidden h-0.5 w-[calc(100%+1.25rem)] -translate-y-px origin-left bg-gradient-to-r from-brand-blue to-brand-cyan shadow-[0_0_12px_rgba(5,169,232,0.7)] lg:block"
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={started ? { scaleX: 1 } : undefined}
            transition={{ duration: SEGMENT, delay: delay + 0.25, ease: "linear" }}
          />
        </>
      )}

      {/* node */}
      <motion.div
        className="relative z-10 grid size-14 shrink-0 place-items-center rounded-full border"
        initial={
          reduceMotion
            ? false
            : {
                scale: 0.95,
                opacity: 0,
                backgroundColor: "#0d1b2a",
                borderColor: "rgba(255,255,255,0.18)",
              }
        }
        animate={
          started
            ? {
                scale: 1,
                opacity: 1,
                backgroundColor: active ? "#05a9e8" : "#174a9c",
                borderColor: active ? "#9be3ff" : "rgba(155,227,255,0.45)",
              }
            : undefined
        }
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 17,
          delay: delay,
          backgroundColor: { duration: 0.4, delay: active ? 0 : delay },
        }}
      >
        {active && !reduceMotion && (
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full border border-brand-cyan"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 1.9, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <motion.span
          animate={
            active && !reduceMotion ? { rotate: [0, -10, 10, 0] } : { rotate: 0 }
          }
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="text-white"
        >
          <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
        </motion.span>
      </motion.div>

      {/* card */}
      <motion.div
        className="w-full pb-6 lg:pb-0"
        initial={reduceMotion ? false : { opacity: 0, y: 36 }}
        animate={started ? { opacity: 1, y: 0 } : undefined}
        transition={{
          duration: 0.75,
          delay: delay + 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <SpotlightCard
          tone="dark"
          tabIndex={0}
          onMouseEnter={onHover}
          onFocus={onHover}
          className={cn(
            "h-full rounded-2xl border bg-white/[0.045] p-6 backdrop-blur-sm transition-[border-color,box-shadow,background-color,transform] duration-500 lg:min-h-[250px]",
            active
              ? "border-brand-cyan/60 bg-white/[0.08] shadow-[0_18px_50px_rgba(5,169,232,0.18)] lg:-translate-y-1.5"
              : "border-white/10 hover:border-white/25",
          )}
        >
          {/* ghost number */}
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute -right-1 -top-3 select-none font-[Manrope] text-[5.6rem] font-extrabold leading-none text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.14)" }}
          >
            {shown}
          </motion.span>

          <p className="relative text-xs font-extrabold tracking-[0.14em] text-brand-cyan">
            STEP {number}
          </p>
          <h3 className="relative mt-4 max-w-[14ch] text-xl font-bold leading-[1.25] text-white">
            {step.title}
          </h3>
          <p className="relative mt-3 text-sm leading-6 text-white/65">
            {step.body}
          </p>

          {/* auto-play progress bar */}
          <span className="absolute inset-x-6 bottom-5 hidden h-0.5 overflow-hidden rounded-full bg-white/10 lg:block">
            {active && !reduceMotion && (
              <motion.span
                key="bar"
                className="block h-full origin-left rounded-full bg-gradient-to-r from-brand-red to-brand-cyan"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: CYCLE_MS / 1000, ease: "linear" }}
              />
            )}
          </span>
        </SpotlightCard>
      </motion.div>
    </li>
  );
}

function Orbs({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <motion.div
        className="absolute -left-24 top-10 size-[420px] rounded-full bg-brand-blue/30 blur-[110px]"
        animate={reduceMotion ? undefined : { x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-20 bottom-0 size-[380px] rounded-full bg-brand-red/15 blur-[120px]"
        animate={reduceMotion ? undefined : { x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/3 size-[300px] -translate-x-1/2 rounded-full bg-brand-cyan/10 blur-[110px]"
        animate={reduceMotion ? undefined : { scale: [1, 1.25, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
