import { motion, useReducedMotion } from 'framer-motion'
import { Star, Quote, MapPin, Clock, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '@/components/ui/Seo'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'
import { SITE } from '@/constants/site'

const reviews = [
  {
    name: 'Ahmed Raza',
    location: 'Model Town, Lahore',
    rating: 5,
    text: 'Excellent service. The technician showed up at the start of the window provided, did thorough work on our AC installation, and cleaned up everything before leaving. Would definitely use A-One again.',
    service: 'AC Installation',
    timeAgo: '2 weeks ago',
  },
  {
    name: 'Fatima Khan',
    location: 'Gulberg, Lahore',
    rating: 5,
    text: 'A-One fixed our electrical tripping issue quickly. They were upfront and honest about the pricing, and the work was done professionally. Highly recommend.',
    service: 'Electrical Troubleshooting',
    timeAgo: '1 month ago',
  },
  {
    name: 'Ali Hassan',
    location: 'DHA Lahore',
    rating: 4,
    text: 'Good experience with A-One for our office AMC. The team is punctual and the preventive maintenance visits are scheduled on time.',
    service: 'Annual Maintenance Contract',
    timeAgo: '2 months ago',
  },
  {
    name: 'Sara Malik',
    location: 'Johar Town, Lahore',
    rating: 5,
    text: 'Our refrigerator was not cooling. A-One diagnosed and fixed it the same day. Fair pricing and friendly technician.',
    service: 'Appliance Repair',
    timeAgo: '3 weeks ago',
  },
  {
    name: 'Usman Tariq',
    location: 'Lahore Cantonment',
    rating: 5,
    text: 'Fan repair was completed quickly. The technician explained the issue and gave us options before starting work. Transparent pricing.',
    service: 'Fan Repair',
    timeAgo: '1 month ago',
  },
  {
    name: 'Nida Ahmed',
    location: 'Defence, Lahore',
    rating: 5,
    text: 'Installed a new geyser and electrical wiring. Very professional team, clean work, and no surprises in the final bill.',
    service: 'Electrical Installation',
    timeAgo: '2 weeks ago',
  },
]

export default function ReviewsPage(){
  const reduceMotion = useReducedMotion()
  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length

  return <>
    <Seo title="Customer Reviews | A-One Maintenance Service Lahore" description="See what Lahore customers say about A-One Maintenance Service. 4.8+ star rating from 500+ Google reviews."/>
    <section className="relative overflow-hidden bg-brand-navy pb-20 pt-32 text-white technical-grid">
      <div className="container-shell relative z-10 grid items-center gap-14 lg:grid-cols-[1fr_.9fr]">
        <div>
          <Breadcrumbs items={[{label:'Reviews'}]}/>
          <h1 className="headline mt-4 max-w-4xl">Trusted by your neighbours in Lahore.</h1>
          <p className="body-large mt-6 max-w-2xl text-white/70">
            See why homeowners and businesses across Lahore choose A-One Maintenance Service for HVAC, electrical, appliance and facility maintenance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 text-white">
              <Star className="fill-yellow-400 text-yellow-400" size={22} />
              <span className="text-2xl font-bold">{avgRating.toFixed(1)}</span>
              <span className="text-white/70">★ &middot; {SITE.reviewCount}+ Google reviews</span>
            </div>
            <Button href="/contact" icon={false} className="bg-brand-red text-white border-brand-red hover:bg-[#a3141a] hover:border-[#a3141a]">
              Request Service
            </Button>
          </div>
        </div>
        <div className="hidden lg:flex items-end justify-end">
          <div className="text-right">
            <span className="text-6xl font-extrabold text-white/10">{avgRating.toFixed(1)}</span>
            <p className="text-xs uppercase tracking-widest text-brand-cyan mt-2">Google rating</p>
          </div>
        </div>
      </div>
    </section>

    {/* Rating breakdown */}
    <section className="section-pad bg-[#f5f7fa]">
      <div className="container-shell">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
          <div>
            <p className="eyebrow">How we are rated</p>
            <h2 className="headline mt-3 text-brand-navy">Independent customer feedback.</h2>
          </div>
          <Button href="/request-service" icon={false} className="bg-brand-red text-white border-brand-red hover:bg-[#a3141a] hover:border-[#a3141a]">
            Request Service
          </Button>
        </div>
        <div className="grid gap-2">
          {[5,4,3,2,1].map((stars) => {
            const count = Math.floor((reviews.filter(r => r.rating === stars).length / reviews.length) * 100)
            return (
              <div key={stars} className="flex items-center gap-4">
                <div className="flex items-center gap-1 w-16">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className={s <= stars ? 'text-brand-red' : 'text-slate-200'} size={14} />
                  ))}
                </div>
                <div className="flex-1 bg-slate-200 rounded-full h-2">
                  <div className="bg-brand-red h-2 rounded-full" style={{ width: `${Math.max(count, 5)}%` }} />
                </div>
                <span className="w-12 text-right text-slate-600">{count}%</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>

    {/* Reviews list */}
    <section className="section-pad bg-white">
      <div className="container-shell">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="headline mt-3 text-brand-navy">Customer reviews</h2>
            <p className="text-slate-600">Real feedback from Lahore customers.</p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="rounded-xl border border-slate-200 bg-white p-6 hover:border-brand-blue/30 transition-colors"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className={s <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'} size={16} />
                ))}
              </div>
              <Quote className="shrink-0 text-brand-cyan mb-4" size={20} />
              <p className="text-slate-600 leading-7 mb-6">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <p className="font-bold text-brand-navy">{review.name}</p>
                  <p className="text-xs text-slate-500">{review.location} &middot; {review.service}</p>
                </div>
                <p className="text-xs text-slate-500">{review.timeAgo}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative overflow-hidden bg-brand-navy py-16 text-white md:py-20">
      <div className="container-shell relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
        <div>
          <p className="eyebrow eyebrow-light">Ready to book?</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Request a service visit today.</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/request-service" variant="primary" icon={false} className="bg-brand-red text-white border-brand-red hover:bg-[#a3141a] hover:border-[#a3141a]">
            Request Service
          </Button>
          <a href={SITE.phoneHref} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/30 bg-transparent px-5 py-3 text-sm font-bold text-white hover:border-white">
            <Phone size={16} />
            Call Now
          </a>
        </div>
      </div>
    </section>
  </>
}