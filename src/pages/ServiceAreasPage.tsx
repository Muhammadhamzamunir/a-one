import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, Clock, Phone, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '@/components/ui/Seo'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'
import { SITE } from '@/constants/site'

const lahoreAreas = [
  { name: 'Model Town', note: 'Residential area, fast response available' },
  { name: 'Gulberg', note: 'Commercial and residential complexes' },
  { name: 'DHA Lahore', note: 'Defence Housing Authority phases' },
  { name: 'Johar Town', note: 'Mixed residential and commercial' },
  { name: 'Lahore Cantonment', note: 'Cantt area homes and offices' },
  { name: 'Township', note: 'Industrial and residential units' },
  { name: 'Wapda Town', note: 'Gated community and homes' },
  { name: 'Bahria Town', note: 'Security-enclosed residential' },
  { name: 'Allama Iqbal Town', note: 'Dense residential neighbourhood' },
  { name: 'Mughalpura', note: 'Older residential and commercial' },
  { name: 'Shadman', note: 'Central Lahore area' },
  { name: 'Sabzazar', note: 'Residential blocks and plazas' },
]

export default function ServiceAreasPage(){
  const reduceMotion = useReducedMotion()

  return <>
    <Seo title="Service Areas | A-One Maintenance Service Lahore" description="A-One Maintenance Service serves all areas of Lahore including Model Town, Gulberg, DHA, Johar Town, Cantonment and more."/>
    <section className="relative overflow-hidden bg-brand-navy pb-20 pt-32 text-white technical-grid">
      <div className="container-shell relative z-10 grid items-center gap-14 lg:grid-cols-[1fr_.9fr]">
        <div>
          <Breadcrumbs items={[{label:'Service Areas'}]}/>
          <h1 className="headline mt-4 max-w-4xl">Serving all areas of Lahore.</h1>
          <p className="body-large mt-6 max-w-2xl text-white/70">
            A-One Maintenance Service provides HVAC, electrical, appliance and facility maintenance across every neighbourhood in Lahore. From Model Town to DHA, our team reaches you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/request-service" icon={false} className="bg-brand-red text-white border-brand-red hover:bg-[#a3141a] hover:border-[#a3141a]">
              Request Service
            </Button>
            <a href={SITE.phoneHref} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/30 bg-transparent px-5 py-3 text-sm font-bold text-white hover:border-white">
              <Phone size={16} />
              Call Now
            </a>
          </div>
        </div>
        <div className="hidden lg:flex items-end justify-end">
          <div className="text-right">
            <MapPin className="text-brand-cyan mb-2" size={32} />
            <p className="text-xs uppercase tracking-widest text-brand-cyan mb-1">Lahore, Punjab</p>
            <span className="text-4xl font-bold text-white">12+ areas</span>
          </div>
        </div>
      </div>
    </section>

    {/* Areas grid */}
    <section className="section-pad bg-[#f5f7fa]">
      <div className="container-shell">
        <p className="eyebrow">Where we work</p>
        <h2 className="headline mt-3 text-brand-navy max-w-2xl">Lahore neighbourhoods we serve.</h2>
        <p className="body-large mt-4 max-w-2xl text-slate-600">
          Our team operates across Lahore. Select your area to learn more about local service availability.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {lahoreAreas.map((area, i) => (
            <motion.div
              key={area.name}
              className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-blue/30 hover:bg-blue-50 transition-colors"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <MapPin className="shrink-0 text-brand-cyan" size={16} />
              <span className="font-bold text-brand-navy">{area.name}</span>
              <span className="ml-auto text-xs text-slate-500">{area.note}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Don&rsquo;t see your area?{' '}
            <a href="/contact" className="text-brand-blue hover:underline font-medium">
              Contact us
            </a>{' '}
            to confirm availability for your location.
          </p>
        </div>
      </div>
    </section>

    {/* Why local matters */}
    <section className="section-pad bg-white">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="headline mt-3 text-brand-navy">Why local matters.</h2>
            <p className="body-large mt-4 text-slate-600">
              Being based in Lahore means shorter travel times, faster scheduling,
              and technicians who know the local power supply conditions and common
              equipment used across the city.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Faster response times across all Lahore areas',
                'Technicians familiar with local voltage and wiring standards',
                'Same-day service available for many common issues',
                'Local office for in-person consultation',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <Clock className="shrink-0 mt-1 text-brand-cyan" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-brand-navy p-6 text-white">
            <h3 className="text-xl font-bold mb-3">Ready to book in your area?</h3>
            <p className="text-white/70 mb-6">
              Share your location and service need. We&rsquo;ll confirm availability and schedule your visit.
            </p>
            <Button href="/request-service" icon={false} className="w-full bg-brand-red text-white border-brand-red hover:bg-[#a3141a] hover:border-[#a3141a]">
              Request Service
            </Button>
            <div className="mt-4 text-xs text-white/60">
              <Star className="fill-yellow-400 text-yellow-400" size={14} className="mr-1" />
              {SITE.reviewCount}+ reviews across Lahore
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}