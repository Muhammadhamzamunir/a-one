import { Mail, MapPin, Phone, ShieldCheck, Clock, Star, ArrowRight } from 'lucide-react'
import { Seo } from '@/components/ui/Seo'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { EnquiryForm } from '@/components/forms/EnquiryForm'
import { Button } from '@/components/ui/Button'
import { SITE, PRICING_TRANSPARENCY } from '@/constants/site'

export default function ContactPage(){
  return <>
    <Seo title="Contact A-One Maintenance Service Lahore" description="Contact A-One Maintenance Service for HVAC, electrical, appliance and facility maintenance enquiries in Lahore."/>
    <section className="relative overflow-hidden bg-brand-navy pb-20 pt-32 text-white technical-grid">
      <div className="container-shell relative z-10 grid items-center gap-14 lg:grid-cols-[1fr_.9fr]">
        <div>
          <Breadcrumbs items={[{label:'Contact'}]}/>
          <h1 className="headline mt-4 max-w-4xl">Tell us about the site, system or equipment.</h1>
          <p className="body-large mt-6 max-w-2xl text-white/70">Share enough detail for the team to understand the requirement and confirm the appropriate next step.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white bg-white px-5 py-3 text-sm font-bold text-brand-navy hover:bg-surface" href={SITE.phoneHref}>
              <Phone size={16}/>
              Call Now
            </a>
            <Button href="/request-service" icon={false} className="bg-brand-red text-white border-brand-red hover:bg-[#a3141a] hover:border-[#a3141a]">
              Request Service
            </Button>
          </div>
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

    {/* Contact methods table - like AJ Long Electric */}
    <section className="section-pad bg-white">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Ways to reach us</p>
          <h2 className="headline mt-3 text-brand-navy">Every channel reaches our Lahore office.</h2>
          <p className="body-large mt-4 max-w-2xl text-slate-600">
            For an urgent electrical hazard, calling is always fastest. Email and form requests are typically returned the same business day.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-4 px-6 font-bold text-slate-500 uppercase tracking-[0.1em]">Method</th>
                <th className="py-4 px-6 font-bold text-slate-500 uppercase tracking-[0.1em]">Details</th>
                <th className="py-4 px-6 font-bold text-slate-500 uppercase tracking-[0.1em]">Best for</th>
                <th className="py-4 px-6 font-bold text-slate-500 uppercase tracking-[0.1em]">Response time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <Phone className="shrink-0 text-brand-red" size={16} />
                    <span className="font-bold text-brand-navy">Phone / Text</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{SITE.phonePrimary}</p>
                </td>
                <td className="py-4 px-6 text-slate-600">Scheduling, questions and urgent safety hazards</td>
                <td className="py-4 px-6 text-slate-600">Emergencies &amp; booking</td>
                <td className="py-4 px-6 font-bold text-brand-navy">Immediate, 24/7</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <Mail className="shrink-0 text-brand-red" size={16} />
                    <span className="font-bold text-brand-navy">Email</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{SITE.email}</p>
                </td>
                <td className="py-4 px-6 text-slate-600">Quotes, questions and follow-up</td>
                <td className="py-4 px-6 text-slate-600">Non-urgent enquiries</td>
                <td className="py-4 px-6 font-bold text-brand-navy">Same business day</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="shrink-0 text-brand-red" size={16} />
                    <span className="font-bold text-brand-navy">Office visit</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{SITE.address}</p>
                </td>
                <td className="py-4 px-6 text-slate-600">In-person consultations by appointment</td>
                <td className="py-4 px-6 text-slate-600">Face-to-face discussion</td>
                <td className="py-4 px-6 font-bold text-brand-navy">Mon–Fri, 7 AM–6 PM</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="shrink-0 text-brand-red" size={16} />
                    <span className="font-bold text-brand-navy">Emergency line</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{SITE.phonePrimary}</p>
                </td>
                <td className="py-4 px-6 text-slate-600">Sparks, smoke, burning smells or total power loss</td>
                <td className="py-4 px-6 text-slate-600">Urgent safety hazards</td>
                <td className="py-4 px-6 font-bold text-brand-navy">24/7 prioritised</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section className="section-pad"><div className="container-shell grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
      <div>
        <h2 className="text-3xl font-extrabold">Contact details</h2>
        <div className="mt-8 space-y-6">
          <ContactInfo icon={Phone} label="Phone" text={`${SITE.phonePrimary} / ${SITE.phoneSecondary}`} href={SITE.phoneHref}/>
          <ContactInfo icon={Mail} label="Email" text={SITE.email} href={`mailto:${SITE.email}`}/>
          <ContactInfo icon={MapPin} label="Address" text={SITE.address}/>
        </div>
      </div>
      <div className="rounded-lg bg-surface p-7 md:p-10">
        <h2 className="text-3xl font-extrabold">Send an enquiry</h2>
        <p className="mt-3 text-slate-600">Attach photos or a short clip of the issue so we can prepare an accurate quote.</p>
        <div className="mt-8"><EnquiryForm mode="contact"/></div>
      </div>
    </div></section>
  </>
}
function ContactInfo({icon:Icon,label,text,href}:{icon:typeof Phone;label:string;text:string;href?:string}){
  const body=<><Icon className="mt-1 shrink-0 text-brand-red"/><div><span className="text-sm font-bold text-slate-500">{label}</span><p className="mt-1 break-all font-bold leading-6">{text}</p></div></>;
  return href?<a className="focus-ring flex gap-4" href={href}>{body}</a>:<div className="flex gap-4">{body}</div>;
}