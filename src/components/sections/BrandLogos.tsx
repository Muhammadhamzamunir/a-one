import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const brandLogos = [
  { name: "Haier", src: "/brands/haier.svg" },
  { name: "Dawlance", src: "/brands/dawlance.svg" },
  { name: "TCL", src: "/brands/tcl.svg" },
  { name: "Hitachi", src: "/brands/hitachi.svg" },
  { name: "Midea", src: "/brands/midea.svg" },
  { name: "EcoStar", src: "/brands/ecostar.svg" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function BrandLogos() {
  const reduceMotion = useReducedMotion();
  const loop = [...brandLogos, ...brandLogos];

  return (
    <section id="brands" className="scroll-mt-24 overflow-hidden bg-[#f4f7fb] py-20 md:py-28">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Equipment brands</p>
            <h2 className="headline mt-3 text-brand-navy">Brands We Work With.</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              We provide repair, installation, and maintenance services for equipment from a wide range of trusted brands.
            </p>
          </div>
          <Link
            className="focus-ring inline-flex min-h-11 shrink-0 items-center gap-2 self-start text-sm font-bold text-brand-blue transition-colors hover:text-brand-red md:self-auto"
            to="/contact"
          >
            Ask about your model <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>

        <motion.ul
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {brandLogos.map((b) => (
            <motion.li
              key={b.name}
              variants={{
                hidden: { opacity: 0, y: 26, scale: 0.92 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease } },
              }}
              whileHover={reduceMotion ? undefined : { y: -6, scale: 1.03 }}
              className="group grid h-28 place-items-center rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_1px_2px_rgba(13,27,42,0.04)] transition-[box-shadow,border-color] duration-300 hover:border-brand-blue/30 hover:shadow-[0_18px_36px_-18px_rgba(13,27,42,0.3)]"
            >
              <img
                src={b.src}
                alt={`${b.name} logo`}
                loading="lazy"
                className="h-14 w-full object-contain opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </motion.li>
          ))}
        </motion.ul>

        {/* continuous marquee */}
        <div
          aria-hidden="true"
          className="relative mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white py-5 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
        >
          <motion.div
            className="flex w-max items-center gap-14 px-7"
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {loop.map((b, i) => (
              <img key={`${b.name}-${i}`} src={b.src} alt="" className="h-9 w-auto shrink-0 opacity-60" />
            ))}
          </motion.div>
        </div>

        <p className="mt-4 text-xs leading-5 text-slate-500">
          Brand names are shown for equipment familiarity only. Confirm model support with the team.
        </p>
      </div>
    </section>
  );
}
