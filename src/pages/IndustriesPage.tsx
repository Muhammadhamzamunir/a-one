import { Seo } from '@/components/ui/Seo'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'
import { industries } from '@/data/content'
import { SITE } from '@/constants/site'
export default function IndustriesPage(){
  return <>
    <Seo title="Industries & Facilities Served in Lahore" description="Maintenance solutions for residential, commercial, industrial, healthcare, office, retail and other facilities across Lahore."/>
    <section className="relative overflow-hidden bg-brand-navy pb-20 pt-32 text-white technical-grid">
      <div className="container-shell relative z-10 grid items-center gap-14 lg:grid-cols-[1fr_.9fr]">
        <div>
          <Breadcrumbs items={[{label:'Industries'}]}/>
          <h1 className="headline mt-4 max-w-4xl">Technical support designed around the operating environment.</h1>
          <p className="body-large mt-6 max-w-2xl text-white/70">Different facilities bring different access, continuity, equipment and planning requirements. The service scope is confirmed per site.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Button href="/request-service" icon={false} className="bg-brand-red text-white border-brand-red hover:bg-[#a3141a] hover:border-[#a3141a]">Request Service</Button><Button href={SITE.phoneHref} variant="ghost">Call Now</Button></div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {industries.map(({title,description,icon:Icon})=>(
            <div className="rounded-lg border border-white/10 bg-white/5 p-5" key={title}>
              <Icon className="text-brand-cyan" size={26}/>
              <p className="mt-4 font-bold leading-5">{title}</p>
              <p className="mt-2 text-xs leading-5 text-white/60">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="section-pad"><div className="container-shell grid gap-5 md:grid-cols-2">{industries.map(({title,description,icon:Icon},i)=><article className="group rounded-lg border border-slate-200 p-8 hover:border-brand-blue" key={title}><div className="flex items-start justify-between"><Icon size={36} className="text-brand-blue"/></div><h2 className="mt-10 text-3xl font-extrabold">{title}</h2><p className="mt-4 leading-7 text-slate-600">{description} Site requirements and service scope are confirmed during enquiry.</p></article>)}</div></section>
    <CTASection/>
  </>
}
