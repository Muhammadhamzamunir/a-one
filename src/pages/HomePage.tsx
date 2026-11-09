import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Star, ShieldCheck, Wrench, Clock, Quote } from "lucide-react";
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
import { SITE, TRUST_ITEMS, PRICING_TRANSPARENCY } from "@/constants/site";
import { services } from "@/data/content";

const reviews = [
  {
    name: "Ahmed Raza",
    location: "Model Town, Lahore",
    rating: 5,
    text: "Excellent service. The technician showed up on time, did thorough work on our AC installation, and cleaned up everything before leaving.",
    service: "AC Installation",
  },
  {
    name: "Fatima Khan",
    location: "Gulberg, Lahore",
    rating: 5,
    text: "A-One fixed our electrical tripping issue quickly. They were upfront and honest about the pricing, and the work was done professionally.",
    service: "Electrical Troubleshooting",
  },
  {
    name: "Ali Hassan",
    location: "DHA Lahore",
    rating: 4,
    text: "Good experience with A-One for our office AMC. The team is punctual and preventive maintenance visits are scheduled on time.",
    service: "Annual Maintenance Contract",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const serviceList = services.slice(0,7)

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
  className="technical-grid relative overflow-hidden bg-brand-navy text-white min-h-[70vh] lg:min-h-[90vh] max-h-[100vh] pt-44 lg:pt-20 pb-12 lg:pt-0 lg:pb-0 mt-20"
>
  {/* ---------- Large devices: hero image, gradient left-to-right ---------- */}
  <div className="pointer-events-none hidden lg:block inset-0 -z-10 h-full">
    <img
      src="/images/hero-bg.png"
      alt="A-One Maintenance Service electricians team with company van"
      className="absolute inset-0 w-full h-full object-cover object-center"
      loading="eager"
      decoding="async"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent" />
    {/* <div className="absolute inset-x-0 bottom-0 h-[240px] bg-gradient-to-l from-brand-navy to-transparent" /> */}
  </div>

  {/* ---------- Mobile and tablet: small image, gradient top-to-bottom ---------- */}
  <div className="pointer-events-none lg:hidden inset-0 -z-10 max-h-[70vh]">
    <img
      src="/images/hero-bg-small.png"
      alt="A-One Maintenance Service electricians team with company van"
      className="absolute inset-0 w-full h-full object-cover object-center"
      loading="eager"
      decoding="async"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/90 to-transparent" />
    <div className="absolute right-[10%] top-1/3 -translate-y-1/2 h-[300px] w-[400px] rounded-full bg-sky-500/20 blur-[100px]" />
  </div>

  {/* ---------- Content ---------- */}
  <div className="container-shell relative z-10  lg:min-h-[80vh]  flex flex-col items-center justify-center lg:items-start text-center lg:text-left">
    <div className="max-w-2xl mt-20 lg:mt-0">
      <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
        Need an Electrician?
        <span className="block eyebrow-light mt-2 lg:mt-0">We&apos;re Here to Help.</span>
      </h1>

      <p className="mt-6 max-w-xl text-sm lg:text-md text-white/80">
        From small repairs to complete installations, we keep your home and
        business powered, safely and efficiently.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
        <Button href="/request-service" icon={false}>
          Request Service
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

      <div className="flex eyebrow-light mt-6 items-center justify-center gap-1 lg:justify-start text-sm leading-6 text-white/60">
         <Star size={16} fill="#05a9e8"/> {SITE.reviewRating}
         <p className="text-white/60">, 1417 Google reviews</p> 
      </div>
    </div>
  </div>
</section>

      {/* Trust stats bar - like AJ Long Electric */}
      <AnimatedSection className="py-8 bg-white border-y border-slate-200">
        <div className="container-shell">
          <div className="grid gap-4 sm:grid-cols-4 grid-cols-2 lg:grid-cols-4 text-center">
            {[
              { label: "Years serving Lahore", value: SITE.yearsInBusiness },
              { label: "Google reviews", value: `${SITE.reviewCount}+` },
              { label: "Customer rating", value: `${SITE.reviewRating}`  },
              { label: "Workmanship warranty", value: `${SITE.warrantyYears} year` },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-2xl font-extrabold text-brand-navy">{stat.value}</span>
                <span className="text-xs uppercase tracking-[0.15em] text-slate-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

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

      <OfficesApproach />

            <AnimatedSection className="section-pad bg-white">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">What our customers say</p>
              <h2 className="headline mt-3 text-brand-navy">
                Trusted by Your Neighbors
              </h2>
              <p className="body-large mt-4 max-w-2xl text-slate-600">
                Real feedback from customers we've served across Lahore. 
              </p>
            </div>
            <Link
              className="focus-ring inline-flex min-h-11 shrink-0 items-center gap-2 self-start text-sm font-bold text-brand-blue transition-colors hover:text-brand-red md:self-auto"
              to="/about"
            >
              Read all reviews <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {reviews.slice(0, 3).map((review, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-white p-6 hover:border-brand-blue/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={s <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}
                      size={16}
                    />
                  ))}
                </div>
                <Quote className="shrink-0 text-brand-cyan mb-4" size={20} />
                <p className="text-slate-600 leading-7 mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <p className="font-bold text-brand-navy">{review.name}</p>
                    <p className="text-xs text-slate-500">
                      {review.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

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
