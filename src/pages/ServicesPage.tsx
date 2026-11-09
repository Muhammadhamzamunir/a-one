import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Wind } from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "@/components/ui/Seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { services } from "@/data/content";
import { SITE } from "@/constants/site";

export default function ServicesPage() {
  const highlights = services.slice(0, 3);
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Seo
        title="Technical Maintenance Services in Lahore"
        description="Explore A-One HVAC, AC repair, electrical, chiller, ventilation, appliance, AMC, fire-fighting and facility maintenance services in Lahore."
      />
      <section className="relative overflow-hidden bg-brand-navy pb-20 pt-32 text-white technical-grid">
        <div className="container-shell relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
          <div>
            <Breadcrumbs items={[{ label: "Services" }]} />
            <h1 className="headline mt-4 max-w-3xl text-white">
              Technical services for systems, equipment and facilities.
            </h1>
            <p className="body-large mt-6 max-w-2xl text-white/70">
              Choose a service to review its scope and common issues. The team
              can discuss a single repair or planned maintenance for a larger
              site.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/request-service" icon={false} className="bg-brand-red text-white border-brand-red hover:bg-[#a3141a] hover:border-[#a3141a]">
                Request Service
                <ArrowRight aria-hidden="true" size={17} />
              </Button>
              <Button href={SITE.phoneHref} variant="ghost" icon={false}>
                Call Now
              </Button>
            </div>
            <p className="mt-5 text-sm leading-6 text-white/65">
              Scope, visit time and pricing are confirmed after enquiry.
            </p>
          </div>

          <div className="rounded-[14px] border border-white/12 bg-white/[0.045] p-6 md:p-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="eyebrow eyebrow-light">A-One capabilities</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
                  Service areas
                </h2>
              </div>
              <div className="service-orbit" aria-hidden="true">
                <motion.span
                  className="service-orbit-ring"
                  animate={reduceMotion ? undefined : { rotate: 360 }}
                  transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />
                <span className="service-orbit-core">
                  <Wind size={25} strokeWidth={1.7} />
                </span>
              </div>
            </div>

            <div className="mt-3 divide-y divide-white/10">
              {highlights.map((service, index) => (
                <Link
                  className="focus-ring group flex items-start gap-4 rounded-md px-2 py-4 transition-colors hover:bg-white/[0.04]"
                  key={service.slug}
                  to={`/services/${service.slug}`}
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-brand-cyan transition-colors group-hover:border-brand-cyan/30 group-hover:bg-brand-cyan/10">
                    <service.icon
                      aria-hidden="true"
                      size={21}
                      strokeWidth={1.7}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2 text-sm font-bold text-white">
                      <span className="text-xs font-extrabold tracking-wider text-white/35">
                        0{index + 1}
                      </span>
                      {service.shortTitle}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-white/65">
                      {service.summary}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    size={16}
                    className="mt-1 shrink-0 text-white/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-cyan"
                  />
                </Link>
              ))}
            </div>
            <Link
              className="focus-ring mt-3 inline-flex min-h-11 items-center gap-2 px-2 text-sm font-bold text-brand-cyan transition-colors hover:text-white"
              to="#service-list"
            >
              Browse all services <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section id="service-list" className="section-pad scroll-mt-24 bg-white">
        <div className="container-shell">
          <div className="max-w-2xl">
            <p className="eyebrow">Service directory</p>
            <h2 className="headline mt-3 text-brand-navy">
              Find the right service for your equipment.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Each service page explains the typical scope. A site review may be
              needed before the team confirms work or cost.
            </p>
          </div>
          <ServiceGrid />
        </div>
      </section>
      <CTASection />
    </>
  );
}
