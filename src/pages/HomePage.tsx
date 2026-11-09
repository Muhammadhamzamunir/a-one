import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Star } from "lucide-react";
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
  className="technical-grid bg-red relative overflow-hidden bg-brand-navy   h-[90vh] text-white  mt-20 d-flex justify-center align-center"
>
  {/* ---------- Full-width background image (all screens) ---------- */}
  <div className="pointer-events-none 
   inset-0 -z-10">
    <img
      src="/images/hero-bg.png"
      alt="A-One Maintenance Service electricians team with company van"
      className="absolute inset-0 w-full h-full object-cover object-center"
      loading="eager"
      decoding="async"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-[240px] bg-gradient-to-t from-brand-navy to-transparent" />
    {/* <div className="absolute right-[10%] top-1/3 -translate-y-1/2 h-[560px] w-[560px] rounded-full bg-sky-500/20 blur-[100px]" /> */}
  </div>

  {/* ---------- Content ---------- */}
  <div className="container-shell relative z-10 h-full flex items-center">
    <div className="max-w-2xl">
      <h1 className=" text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
        Need an Electrician?
        <span className="block eyebrow-light">We&apos;re Here to Help.</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
        From small repairs to complete installations, we keep your home and
        business powered, safely and efficiently.
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

      <div className="flex eyebrow-light mt-6 items-center text-sm leading-6 text-white/60 gap-1">
         <Star size={16} fill="#05a9e8"/> 4.9 
         <p className="text-white/60">, 1417 Google reviews</p> 
      </div>
    </div>
  </div>
</section>

      <AnimatedSection className="section-pad bg-white">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">What We Do</p>
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
