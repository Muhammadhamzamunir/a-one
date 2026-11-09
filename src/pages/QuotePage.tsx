import { useSearchParams } from 'react-router-dom'
import { Seo } from '@/components/ui/Seo'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'
import { EnquiryForm } from '@/components/forms/EnquiryForm'
export default function QuotePage(){
  const [params]=useSearchParams()
  const steps=['Share the requirement','Technical review','Scope & quotation','Service & follow-up']
  return <><Seo title="Request a Maintenance Quote in Lahore" description="Request an assessment or quotation for HVAC, AC, electrical, chiller, appliance, AMC and facility maintenance work in Lahore."/>
    <section className="bg-brand-navy pb-16 pt-32 text-white">
      <div className="container-shell grid items-center gap-14 lg:grid-cols-[1fr_.9fr]">
        <div>
          <Breadcrumbs items={[{label:'Request a Service'}]} className="text-white/70" />
          <h1 className="headline mt-4 max-w-4xl text-white">Start with the requirement. We’ll shape the next step.</h1>
          <p className="body-large mt-6 max-w-2xl text-white/80">Provide the system, issue, site type and preferred visit window. Final scope, availability and pricing are confirmed directly.</p>
          {/* <div className="mt-9 flex flex-wrap gap-3"><Button href="/contact">Start an enquiry</Button><Button href="/services" variant="secondary">Browse services</Button></div> */}
        </div>
      </div>
    </section>
    <section className="section-pad"><div className="container-shell"><div className="mx-auto max-w-4xl rounded-lg border border-slate-200 p-6 md:p-10"><EnquiryForm defaultService={params.get('service')||''}/></div></div></section>
  </>
}
