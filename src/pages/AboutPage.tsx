import { motion, useReducedMotion } from "framer-motion";
import { Check, Wrench, ShieldCheck, Star, Clock, Phone, ArrowRight, Building2, Quote, MapPin } from "lucide-react";
import { Seo } from "@/components/ui/Seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { PakistanCoverage } from "@/components/sections/PakistanCoverage";
import { Button } from "@/components/ui/Button";
import { SITE, TRUST_ITEMS } from "@/constants/site";

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

const storyChapters = [
  {
    title: "Started in Lahore",
    body: "A-One Maintenance Service began as a small maintenance team serving homes and offices across Lahore. Over 15 years of hands-on work in HVAC, electrical and appliance repair.",
    icon: Building2,
  },
  {
    title: "Built on trust",
    body: "Every customer gets a clear price before work begins. No hidden charges, no surprise fees — just honest assessment and clear communication.",
    icon: ShieldCheck,
  },
  {
    title: "Second generation",
    body: "A family-run business where the standards are set by the people who answer the phone and show up at your door.",
    icon: Star,
  },
] as const;

const allReviews = [
  {
    name: "Ahmed Raza",
    location: "Model Town, Lahore",
    rating: 5,
    text: "Excellent service. The technician showed up on time, did thorough work on our AC installation, and cleaned up everything before leaving. Would definitely use A-One again.",
    service: "AC Installation",
    timeAgo: "2 weeks ago",
  },
  {
    name: "Fatima Khan",
    location: "Gulberg, Lahore",
    rating: 5,
    text: "A-One fixed our electrical tripping issue quickly. They were upfront and honest about the pricing, and the work was done professionally. Highly recommend.",
    service: "Electrical Troubleshooting",
    timeAgo: "1 month ago",
  },
  {
    name: "Ali Hassan",
    location: "DHA Lahore",
    rating: 4,
    text: "Good experience with A-One for our office AMC. The team is punctual and the preventive maintenance visits are scheduled on time.",
    service: "Annual Maintenance Contract",
    timeAgo: "2 months ago",
  },
  {
    name: "Sara Malik",
    location: "Johar Town, Lahore",
    rating: 5,
    text: "Our refrigerator was not cooling. A-One diagnosed and fixed it the same day. Fair pricing and friendly technician.",
    service: "Appliance Repair",
    timeAgo: "3 weeks ago",
  },
  {
    name: "Usman Tariq",
    location: "Lahore Cantonment",
    rating: 5,
    text: "Fan repair was completed quickly. The technician explained the issue and gave us options before starting work. Transparent pricing.",
    service: "Fan Repair",
    timeAgo: "1 month ago",
  },
  {
    name: "Nida Ahmed",
    location: "Defence, Lahore",
    rating: 5,
    text: "Installed a new geyser and electrical wiring. Very professional team, clean work, and no surprises in the final bill.",
    service: "Electrical Installation",
    timeAgo: "2 weeks ago",
  },
];

const lahoreAreas = [
  { name: "Model Town", note: "Residential area, fast response available" },
  { name: "Gulberg", note: "Commercial and residential complexes" },
  { name: "DHA Lahore", note: "Defence Housing Authority phases" },
  { name: "Johar Town", note: "Mixed residential and commercial" },
  { name: "Lahore Cantonment", note: "Cantt area homes and offices" },
  { name: "Township", note: "Industrial and residential units" },
  { name: "Wapda Town", note: "Gated community and homes" },
  { name: "Bahria Town", note: "Security-enclosed residential" },
  { name: "Allama Iqbal Town", note: "Dense residential neighbourhood" },
  { name: "Mughalpura", note: "Older residential and commercial" },
  { name: "Shadman", note: "Central Lahore area" },
  { name: "Sabzazar", note: "Residential blocks and plazas" },
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
                <Button href="/request-service" icon={false} className="bg-brand-blue text-white border-brand-blue hover:bg-[#103b7c] hover:border-[#103b7c]">Request Service</Button>
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

      {/* Story chapters - like AJ Long Electric's family story */}
      <AnimatedSection className="section-pad bg-white">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Our story</p>
            <h2 className="headline mt-3 text-brand-navy">
              Serving Lahore for over 15 years
            </h2>
            <p className="body-large mt-4 max-w-2xl text-slate-600">
              A-One Maintenance Service has grown from a small local team into a
              trusted name for HVAC, electrical, appliance and facility
              maintenance across Lahore. The same standards that started the
              business still guide every job today.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {storyChapters.map((chapter, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-white p-6 hover:border-brand-blue/30 transition-colors"
              >
                <chapter.icon
                  aria-hidden="true"
                  className="shrink-0 text-brand-cyan"
                  size={20}
                />
                <h3 className="mt-5 text-base font-bold text-brand-navy">
                  {chapter.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {chapter.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad bg-white">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end mb-10">
            <div className="max-w-3xl">
              <p className="eyebrow">Customer reviews</p>
              <h2 className="headline mt-3 text-brand-navy">
                Trusted by your neighbours in Lahore.
              </h2>
              <p className="body-large mt-4 max-w-2xl text-slate-600">
                See what Lahore homeowners and businesses say about A-One
                Maintenance Service.
              </p>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Star className="fill-yellow-400 text-yellow-400" size={22} />
              <span className="text-2xl font-bold">{SITE.reviewRating}</span>
              <span className="text-white/70">★ &middot; {SITE.reviewCount}+ Google reviews</span>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {allReviews.map((review, i) => (
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
                      {review.location} &middot; {review.service}
                    </p>
                  </div>
                  <p className="text-xs text-slate-500">{review.timeAgo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Service areas - attractive design moved to About page */}
      <AnimatedSection className="section-pad bg-[#f5f7fa]">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end mb-10">
            <div className="max-w-3xl">
              <p className="eyebrow">Where we work</p>
              <h2 className="headline mt-3 text-brand-navy">
                Serving all areas of Lahore.
              </h2>
              <p className="body-large mt-4 max-w-2xl text-slate-600">
                A-One Maintenance Service provides HVAC, electrical, appliance
                and facility maintenance across every neighbourhood in Lahore.
                From Model Town to DHA, our team reaches you.
              </p>
            </div>
            <Button href="/request-service" icon={false} className="bg-brand-red text-white border-brand-red hover:bg-[#a3141a] hover:border-[#a3141a]">
              Request Service
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {lahoreAreas.map((area, i) => (
              <div
                key={area.name}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-blue/30 hover:bg-blue-50 transition-colors"
              >
                <MapPin className="shrink-0 text-brand-cyan" size={16} />
                <span className="font-bold text-brand-navy">{area.name}</span>
                <span className="ml-auto text-xs text-slate-500">{area.note}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              Don&rsquo;t see your area?{" "}
              <a href="/contact" className="text-brand-blue hover:underline font-medium">
                Contact us
              </a>{" "}
              to confirm availability for your location.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </>
  );
}
