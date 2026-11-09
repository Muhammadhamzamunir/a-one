import { Seo } from '@/components/ui/Seo'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'
import { projects } from '@/data/content'
import { MockBadge } from '@/components/ui/MockBadge'
export default function ProjectsPage(){
  return <>
    <Seo title="Projects & Case Studies" description="A-One project and case-study structure for HVAC, ventilation and facility maintenance work in Lahore."/>
    <section className="relative overflow-hidden bg-brand-navy pb-20 pt-32 text-white technical-grid">
      <div className="container-shell relative z-10 grid items-center gap-14 lg:grid-cols-[1fr_.9fr]">
        <div>
          <Breadcrumbs items={[{label:'Projects'}]}/>
          <h1 className="headline mt-4 max-w-4xl">Case studies should show the work—not make unsupported claims.</h1>
          <p className="body-large mt-6 max-w-2xl text-white/70">The project entries below are mock content demonstrating the approved format for future verified work.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Button href="/contact">Discuss a project</Button><Button href="/request-service" variant="ghost" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white">Request Service</Button></div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-7 md:p-8">
          <p className="text-xl font-extrabold text-brand-cyan">Mock case studies</p>
          <div className="mt-7 grid gap-6">
            {projects.map(p=>(
              <div className="flex items-start justify-between gap-4 pb-5 last:pb-0" key={p.slug}>
                <div>
                  <p className="text-sm font-extrabold text-brand-cyan">{p.category}</p>
                  <p className="mt-2 font-bold">{p.title}</p>
                </div>
                <MockBadge>Mock</MockBadge>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs leading-6 text-white/60">Verified projects will replace these placeholders with approved scopes, outcomes and photographs.</p>
        </div>
      </div>
    </section>
    <section className="section-pad"><div className="container-shell grid gap-8 lg:grid-cols-3">{projects.map(p=><article className="overflow-hidden rounded-lg border border-slate-200 bg-white" key={p.slug}><img src={p.image} alt="Project image placeholder" className="aspect-[4/3] w-full object-cover"/><div className="p-6"><MockBadge/><p className="mt-5 text-sm font-extrabold text-brand-blue">{p.category}</p><h2 className="mt-2 text-2xl font-extrabold">{p.title}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{p.summary}</p><Button href="/contact" variant="secondary" className="mt-6 w-full">Discuss a project</Button></div></article>)}</div></section>
    <CTASection/>
  </>
}
