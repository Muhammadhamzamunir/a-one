import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { services as allServices } from "@/data/content";
import { SITE } from "@/constants/site";
import type { Service } from "@/types";

const cardMotion = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ServiceGrid({
  limit,
  services,
  showCallCard = false,
}: {
  limit?: number;
  services?: Service[];
  showCallCard?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const list = (services ?? allServices).slice(0, limit);

  return (
    <motion.div
      className="mt-10 grid gap-px overflow-hidden rounded-[14px] border border-[#d9e1e8] bg-[#d9e1e8] md:grid-cols-2 lg:grid-cols-3"
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.04, margin: "0px 0px -24px 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.055 } },
      }}
    >
      {list.map((service, index) => (
        <motion.div key={service.slug} className="h-full" variants={cardMotion}>
          <Link
            to={`/services/${service.slug}`}
            className="focus-ring group flex h-full min-h-[268px] flex-col bg-white p-6 transition-colors duration-300 hover:bg-brand-navy sm:p-7"
          >
            <div className="flex items-start justify-between">
              <span className="text-xs font-extrabold tracking-[0.14em] text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <service.icon
                aria-hidden="true"
                className="text-brand-blue transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[-4deg] group-hover:text-brand-cyan"
                size={28}
                strokeWidth={1.8}
              />
            </div>
            <h3 className="mt-8 text-lg font-bold leading-snug text-brand-navy transition-colors group-hover:text-white sm:text-xl">
              {service.shortTitle}
            </h3>
            <p className="mt-2.5 max-w-[38ch] text-sm leading-6 text-slate-600 transition-colors group-hover:text-white/75">
              {service.summary}
            </p>
            <span className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-extrabold uppercase tracking-[0.1em] text-brand-red transition-colors group-hover:text-brand-cyan">
              Explore service
              <ArrowUpRight
                aria-hidden="true"
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </Link>
        </motion.div>
      ))}

      {showCallCard && (
        <>
          <motion.div className="h-full" variants={cardMotion}>
            <Link
              to="/request-service"
              className="focus-ring group flex h-full min-h-[268px] flex-col bg-brand-navy p-6 text-white transition-colors duration-300 hover:bg-[#142b41] sm:p-7"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-extrabold tracking-[0.14em] text-brand-cyan">
                  NEED HELP?
                </span>
                <MessageCircle
                  aria-hidden="true"
                  className="text-brand-cyan transition-transform duration-300 group-hover:-translate-y-0.5"
                  size={27}
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="mt-8 text-lg font-bold leading-snug sm:text-xl">
                Not sure which service to choose?
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-white/75">
                Share the issue and site details so the team can review your
                enquiry.
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-extrabold uppercase tracking-[0.1em] text-brand-cyan">
                Ask the team
                <ArrowRight
                  aria-hidden="true"
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </motion.div>

          <motion.div className="h-full" variants={cardMotion}>
            <a
              href={SITE.phoneHref}
              className="focus-ring group flex h-full min-h-[268px] flex-col bg-[#f1f5f9] p-6 transition-colors duration-300 hover:bg-[#e8eef5] sm:p-7"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-extrabold tracking-[0.14em] text-brand-blue">
                  PREFER TO CALL?
                </span>
                <Phone
                  aria-hidden="true"
                  className="text-brand-blue transition-transform duration-300 group-hover:-translate-y-0.5"
                  size={27}
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="mt-8 text-lg font-bold leading-snug text-brand-navy sm:text-xl">
                Speak with the team.
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-slate-600">
                {SITE.phonePrimary}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-extrabold uppercase tracking-[0.1em] text-brand-blue">
                Call Now
                <ArrowRight
                  aria-hidden="true"
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </a>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
