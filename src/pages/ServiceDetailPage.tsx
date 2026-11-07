import { Link, useParams } from 'react-router-dom'
import { Check, ChevronRight } from 'lucide-react'
import { Seo } from '@/components/ui/Seo'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'
import { services } from '@/data/content'
import { SITE } from '@/constants/site'
import NotFoundPage from './NotFoundPage'

export default function ServiceDetailPage(){
  const {slug}=useParams()
  const service=services.find(s=>s.slug===slug)
  if(!service)return <NotFoundPage/>
  const Icon=service.icon
  const schema={'@context':'https://schema.org','@type':'Service',name:service.title,description:service.description,areaServed:'Lahore',provider:{'@type':'Organization',name:SITE.name,url:SITE.siteUrl}}
  return <><Seo title={`${service.title} in Lahore`} description={`${service.summary} Contact A-One Maintenance Service for an assessment and quotation.`} schema={schema}/>
  <section className="bg-brand-navy pb-20 pt-32 text-white technical-grid"><div className="container-shell"><nav className="flex flex-wrap items-center gap-2 text-sm text-white/50"><Link to="/">Home</Link><ChevronRight size={14}/><Link to="/services">Services</Link><ChevronRight size={14}/><span>{service.shortTitle}</span></nav><div className="mt-12 grid items-end gap-12 lg:grid-cols-[1fr_.45fr]"><div><h1 className="display mt-4 max-w-4xl">{service.title}</h1><p className="body-large mt-6 max-w-2xl text-white/70">{service.description}</p><div className="mt-8 flex flex-wrap gap-3"><Button href={`/request-a-quote?service=${service.slug}`}>Get a Quote</Button><Button href={SITE.phoneHref} variant="ghost">Call Now</Button></div></div><div className="grid aspect-square max-w-sm place-items-center rounded-full border border-white/10 bg-white/5"><Icon size={100} strokeWidth={1} className="text-brand-cyan"/></div></div></div></section>
  <section className="section-pad"><div className="container-shell grid gap-14 lg:grid-cols-2"><div><h2 className="headline mt-4">What this service can cover.</h2><div className="mt-8 grid gap-4">{service.scope.map(x=><div className="flex gap-3 rounded border border-slate-200 p-4 font-bold" key={x}><Check className="shrink-0 text-brand-red"/>{x}</div>)}</div></div><div className="rounded-lg bg-surface p-8 md:p-10"><h2 className="mt-4 text-3xl font-extrabold">When to speak with the team.</h2><ul className="mt-7 space-y-4">{service.problems.map(x=><li className="pb-4 text-slate-700" key={x}>{x}</li>)}</ul><p className="mt-7 text-sm leading-6 text-slate-500">This page provides general guidance. A site visit or equipment inspection may be required before confirming scope, parts, timeline or price.</p></div></div></section>
  <section className="bg-surface py-16"><div className="container-shell"><h2 className="text-2xl font-extrabold">Related technical services</h2><div className="mt-6 flex flex-wrap gap-3">{services.filter(s=>s.slug!==slug).slice(0,4).map(s=><Link className="focus-ring rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-bold hover:border-brand-blue" to={`/services/${s.slug}`} key={s.slug}>{s.shortTitle}</Link>)}</div></div></section><CTASection/></>
}