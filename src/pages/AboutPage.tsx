import { motion, useReducedMotion } from "framer-motion";
import { Check, Wrench } from "lucide-react";
import { Seo } from "@/components/ui/Seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { PakistanCoverage } from "@/components/sections/PakistanCoverage";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/constants/site";

const workSteps = [
  "Understand the site, equipment and issue.",
  "Agree the work scope and assumptions.",
  "Confirm the quotation and schedule.",
  "Complete the approved work and plan follow-up.",
];

const serviceAreas = [
  "Electrical maintenance",
  "HVAC and chillers",
  "Air conditioning",
  "Ducting and ventilation",
  "Appliance repair",
  "Facility maintenance",
];

export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Seo
        title="About A-One"
        description="Learn about A-One Maintenance Service and its HVAC, electrical, appliance and building maintenance capabilities across Lahore."
      />

      <section className="technical-grid relative overflow-hidden bg-brand-navy pb-16 pt-32 text-white md:pb-24">
        <div className="container-shell relative">
          <Breadcrumbs items={[{ label: "About" }]} />
          <div className="mt-9 grid items-end gap-8 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="eyebrow eyebrow-light">About A-One</p>
              <h1 className="headline mt-3 max-w-2xl text-white">
                Practical maintenance for homes and facilities in Lahore.
              </h1>
            </div>
            <div>
              <p className="body-large max-w-xl text-white/70">
                A-One Maintenance Service handles electrical, HVAC, appliance and building maintenance enquiries across
                Lahore. The team reviews each requirement before confirming the next step.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/request-a-quote" icon={false}>Get a Quote</Button>
                <Button href={SITE.phoneHref} variant="ghost" icon={false}>Call Now</Button>
              </div>
            </div>
          </div>
          <motion.div
            className="mt-12"
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <PakistanCoverage />
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="section-pad bg-surface">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow">How we work</p>
            <h2 className="headline mt-3 text-brand-navy">
              A clear plan before the work begins.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              From a single repair to planned facility maintenance, the first
              step is understanding the site and the equipment.
            </p>
            <ol className="mt-7 space-y-4">
              {workSteps.map((step, index) => (
                <li className="flex gap-4" key={step}>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-xs font-extrabold text-brand-blue ring-1 ring-slate-200">
                    0{index + 1}
                  </span>
                  <span className="pt-1 text-sm font-bold leading-6 text-brand-navy">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-[14px] border border-slate-200 bg-white p-7 md:p-10">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-lg bg-blue-50 text-brand-blue">
                <Wrench aria-hidden="true" size={21} strokeWidth={1.8} />
              </span>
              <div>
                <p className="eyebrow">What we handle</p>
                <h2 className="mt-1 text-xl font-bold text-brand-navy">
                  Maintenance services
                </h2>
              </div>
            </div>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {serviceAreas.map((area) => (
                <li
                  className="flex min-h-12 items-center gap-3 rounded-lg bg-surface px-4 py-3 text-sm font-bold text-brand-navy"
                  key={area}
                >
                  <Check
                    aria-hidden="true"
                    className="shrink-0 text-brand-blue"
                    size={17}
                  />
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6 text-slate-600">
              Service coverage, parts and visit timing depend on the equipment
              and site requirements. Share the details to discuss an appropriate
              scope.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </>
  );
}
