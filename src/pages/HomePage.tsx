import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { OfficesApproach } from "@/components/sections/OfficesApproach";
import { UsedProductsShowcase } from "@/components/sections/UsedProductsShowcase";
import { BrandLogos } from "@/components/sections/BrandLogos";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { RevealImage } from "@/components/ui/RevealImage";
import { Seo } from "@/components/ui/Seo";
import { SITE } from "@/constants/site";
import { industries, services } from "@/data/content";

const electricalSlugs = [
  "fan-repair",
  "motor-repair",
  "motor-winding",
  "electrical-wiring",
  "electrical-installation",
  "electrical-maintenance",
  "electrical-troubleshooting",
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const serviceList = services.filter((service) =>
    electricalSlugs.includes(service.slug),
  );

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    name: SITE.name,
    url: SITE.siteUrl,
    logo: `${SITE.siteUrl}/brand/a-one-logo.jpg`,
    telephone: SITE.phonePrimary,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    areaServed: "Lahore",
  };

  return (
    <>
      <Seo
        title="Electrical Services in Lahore"
        description="Electrical repair, wiring, installation and maintenance for homes, workplaces and facilities across Lahore."
        schema={localBusiness}
      />

      <section
        ref={heroRef}
        className="technical-grid relative overflow-hidden bg-brand-navy pb-14 pt-32 text-white md:pb-16 md:pt-36"
      >
        <div className="container-shell relative z-10 grid items-center gap-12 lg:grid-cols-[1.04fr_.96fr] lg:gap-14">
          <div className="max-w-2xl">
            <p className="eyebrow eyebrow-light">
              Electrical services · Lahore
            </p>
            <h1 className="display mt-5 text-white">
              Electrical work, clearly scoped for your site.
            </h1>
            <p className="body-large mt-6 max-w-xl text-white/75">
              From fan and motor repair to wiring, installation and maintenance
              for homes, workplaces and facilities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/request-a-quote" icon={false}>
                Get a Quote
                <ArrowRight aria-hidden="true" size={17} />
              </Button>
              <Button
                href={SITE.phoneHref}
                variant="ghost"
                icon={false}
                className="border-white/35 px-5 text-white hover:border-white hover:bg-white/10"
              >
                <Phone aria-hidden="true" size={16} />
                Call Now
              </Button>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/60">
              Work scope, timing and pricing are confirmed after your enquiry.
            </p>
          </div>

          <div className="image-frame relative mx-2 mb-2 mt-2 lg:ml-0">
            <motion.div
              className="relative z-10"
              style={reduceMotion ? undefined : { y: imageY }}
            >
              <RevealImage
                src="/images/hvac-project-works.jpg"
                alt="Commercial rooftop cooling equipment and connected service piping"
                className="aspect-[4/3] rounded-xl bg-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.22)]"
                imageClassName="object-center"
                loading="eager"
              />
            </motion.div>
            <div className="absolute left-4 top-4 z-20 max-w-[calc(100%-32px)] rounded-md border border-white/15 bg-brand-navy/90 px-4 py-3 shadow-lg backdrop-blur-sm sm:bottom-4 sm:top-auto">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-cyan">
                Electrical & maintenance
              </p>
              <p className="mt-1 text-sm text-white/80">
                Residential · Commercial · Industrial
              </p>
            </div>
          </div>
        </div>

        <div className="container-shell relative z-10 mt-12">
          <div className="section-rule section-rule-light mb-5" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Service coverage across Lahore",
              "Home, business and industrial sites",
              "Electrical and maintenance services",
              "Quote confirmed after review",
            ].map((item) => (
              <div className="flex items-start gap-3" key={item}>
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-white/20 bg-white/5 text-brand-cyan">
                  <Check aria-hidden="true" size={14} />
                </span>
                <p className="max-w-[24ch] text-sm leading-5 text-white/75">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection className="section-pad bg-white">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">Electrical services</p>
              <h2 className="headline mt-3 text-brand-navy">
                Repair, installation and maintenance.
              </h2>
              <p className="body-large mt-4 max-w-2xl text-slate-600">
                Browse the service that fits your need. The team can confirm the
                right scope after reviewing your enquiry.
              </p>
            </div>
            <Link
              className="focus-ring inline-flex min-h-11 shrink-0 items-center gap-2 self-start text-sm font-bold text-brand-blue transition-colors hover:text-brand-red md:self-auto"
              to="/services"
            >
              All services <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <ServiceGrid services={serviceList} showCallCard />
        </div>
      </AnimatedSection>

      <ProcessTimeline />

      <AnimatedSection className="section-pad bg-white">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Service coverage</p>
            <h2 className="headline mt-3 text-brand-navy">
              Support for different kinds of sites.
            </h2>
            <p className="body-large mt-4 text-slate-600">
              Service planning can be adapted to the equipment, access and
              operating needs of each environment.
            </p>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="group flex min-h-[150px] items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-[border-color,background-color] duration-300 hover:border-brand-blue/30 hover:bg-surface"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-md bg-blue-50 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                  <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-brand-navy">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <OfficesApproach />

      <UsedProductsShowcase />

      <BrandLogos />

      <AnimatedSection className="section-pad bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="eyebrow">Before you enquire</p>
            <h2 className="headline mt-3 text-brand-navy">
              Need help choosing the right service?
            </h2>
            <p className="body-large mt-5 text-slate-600">
              Not sure which service to choose? Send the team the details you
              have and ask what to do next.
            </p>
            <div className="mt-6 inline-flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-brand-red"
                size={19}
              />
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.1em] text-slate-500">
                  Service area
                </span>
                <span className="mt-1 block text-sm font-bold text-brand-navy">
                  Lahore, Pakistan
                </span>
              </span>
            </div>
          </div>
          <FAQ />
        </div>
      </AnimatedSection>

      <CTASection />
    </>
  );
}
