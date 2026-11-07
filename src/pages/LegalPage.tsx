import { Seo } from '@/components/ui/Seo'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export default function LegalPage({ type }: { type: 'privacy' | 'terms' }) {
  const privacy = type === 'privacy'
  const label = privacy ? 'Privacy Policy' : 'Terms & Conditions'
  const description = privacy ? 'Privacy policy' : 'Terms and conditions'

  return <>
    <Seo title={label} description={`${description} placeholder for the A-One Maintenance Service website.`}/>
    <section className="bg-surface pb-16 pt-32">
      <div className="container-shell max-w-3xl">
        <Breadcrumbs items={[{ label }]}/>
        <h1 className="headline mt-4">{label}</h1>
        <p className="body-large mt-6 text-slate-600">Launch placeholder: review this content with qualified legal counsel and align it with the final data and service workflows.</p>
      </div>
    </section>
    <article className="section-pad">
      <div className="container-shell max-w-3xl space-y-8 text-slate-700">
        <div className="rounded border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900"><strong>Not legal advice:</strong> this is a structural placeholder and must not be published as final legal text.</div>
        {['Purpose and scope','Information and enquiries','Use, retention and security','Third-party services','Customer responsibilities','Changes and contact'].map((x, i) => (
          <section key={x}>
            <h2 className="text-2xl font-extrabold text-brand-navy">{x}</h2>
            <p className="mt-3 leading-7">Placeholder section {i + 1}. Replace with counsel-approved language that accurately reflects the deployed forms, analytics, hosting, communications and service process.</p>
          </section>
        ))}
      </div>
    </article>
  </>
}
