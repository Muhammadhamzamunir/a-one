import { Mail, MapPin, Phone } from 'lucide-react'
import { Seo } from '@/components/ui/Seo'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { EnquiryForm } from '@/components/forms/EnquiryForm'
import { SITE } from '@/constants/site'
export default function ContactPage(){
  return <>
    <Seo title="Contact A-One Maintenance Service Lahore" description="Contact A-One Maintenance Service for HVAC, electrical, appliance and facility maintenance enquiries in Lahore."/>
    <section className="relative overflow-hidden bg-brand-navy pb-20 pt-32 text-white technical-grid">
      <div className="container-shell relative z-10 grid items-center gap-14 lg:grid-cols-[1fr_.9fr]">
        <div>
          <Breadcrumbs items={[{label:'Contact'}]}/>
          <h1 className="headline mt-4 max-w-4xl">Tell us about the site, system or equipment.</h1>
          <p className="body-large mt-6 max-w-2xl text-white/70">Share enough detail for the team to understand the requirement and confirm the appropriate next step.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white bg-white px-5 py-3 text-sm font-bold text-brand-navy hover:bg-surface" href={SITE.phoneHref}><Phone size={16}/>{SITE.phonePrimary}</a><a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/30 bg-transparent px-5 py-3 text-sm font-bold text-white hover:border-white" href={`mailto:${SITE.email}`}><Mail size={16}/>Email us</a></div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-7 md:p-8">
          <p className="text-lg font-extrabold text-brand-cyan">Direct channels</p>
          <div className="mt-6 space-y-5">
            <div className="flex gap-4"><Phone className="mt-1 shrink-0 text-brand-cyan"/><div><span className="text-sm font-bold text-white/70">Phone</span><p className="mt-1 font-bold leading-6">{SITE.phonePrimary} / {SITE.phoneSecondary}</p></div></div>
            <div className="flex gap-4"><Mail className="mt-1 shrink-0 text-brand-cyan"/><div><span className="text-sm font-bold text-white/70">Email</span><p className="mt-1 break-all font-bold leading-6">{SITE.email}</p></div></div>
            <div className="flex gap-4"><MapPin className="mt-1 shrink-0 text-brand-cyan"/><div><span className="text-sm font-bold text-white/70">Address</span><p className="mt-1 leading-6">{SITE.address}</p></div></div>
          </div>
          <p className="mt-7 text-sm leading-6 text-white/65">Call or message the team to confirm availability for your service and location.</p>
        </div>
      </div>
    </section>
    <section className="section-pad"><div className="container-shell grid gap-12 lg:grid-cols-[.72fr_1.28fr]"><div><h2 className="text-3xl font-extrabold">Contact details</h2><div className="mt-8 space-y-6"><ContactInfo icon={Phone} label="Phone" text={`${SITE.phonePrimary} / ${SITE.phoneSecondary}`} href={SITE.phoneHref}/><ContactInfo icon={Mail} label="Email" text={SITE.email} href={`mailto:${SITE.email}`}/><ContactInfo icon={MapPin} label="Address" text={SITE.address}/></div><p className="mt-8 rounded border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-900">These details come from the supplied letterhead. Confirm the email spelling, business hours and whether the address accepts customer visits before launch.</p></div><div className="rounded-lg bg-surface p-7 md:p-10"><h2 className="text-3xl font-extrabold">Send an enquiry</h2><p className="mt-3 text-slate-600">Fields marked by validation must be completed before submission.</p><div className="mt-8"><EnquiryForm mode="contact"/></div></div></div></section>
  </>
}
function ContactInfo({icon:Icon,label,text,href}:{icon:typeof Phone;label:string;text:string;href?:string}){
  const body=<><Icon className="mt-1 shrink-0 text-brand-red"/><div><span className="text-sm font-bold text-slate-500">{label}</span><p className="mt-1 break-all font-bold leading-6">{text}</p></div></>;
  return href?<a className="focus-ring flex gap-4" href={href}>{body}</a>:<div className="flex gap-4">{body}</div>;
}
