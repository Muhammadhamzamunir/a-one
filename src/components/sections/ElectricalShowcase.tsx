import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'
const capabilities=[
  {n:'1',title:'Fan Repair',description:'Motors, blades and controls for ceiling, pedestal and industrial fans.'},
  {n:'2',title:'Motor Repair',description:'Inspection and repair for industrial and commercial electric motors.'},
  {n:'3',title:'Motor Winding',description:'Reconditioning support for motors that need rewinding.'},
  {n:'4',title:'Electrical Wiring',description:'Installation, retrofit and repair for residential and industrial wiring.'},
  {n:'5',title:'Electrical Installation',description:'Supply, distribution and equipment installation.'},
  {n:'6',title:'Electrical Maintenance',description:'Preventive and corrective maintenance for electrical systems.'},
  {n:'7',title:'Electrical Troubleshooting',description:'Fault finding and diagnosis for complex electrical systems.'},
]
export function ElectricalShowcase(){
  return <section className="relative overflow-hidden bg-brand-navy py-20 text-white md:py-24">
    <div className="container-shell grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
      <div>
        <h2 className="headline">From a fan motor to complete installation.</h2>
        <p className="body-large mt-7 max-w-2xl text-white/70">The work A-One handles moves from a failed fan motor to full electrical installation, maintenance and troubleshooting. Seven disciplines, one technical team, no guesswork.</p>
        <div className="mt-9"><Button href="/services">Explore services</Button></div>
      </div>
      <div className="rounded-lg bg-white/5 p-8 md:p-10">
        <ol className="grid gap-7">
          {capabilities.map(c=>(
            <li className="group flex items-start justify-between gap-6 rounded-lg px-5 py-5 transition-colors hover:bg-white/5" key={c.n}>
              <div className="flex items-baseline gap-5">
                <span className="text-sm font-extrabold text-brand-cyan">{c.n}</span>
                <h3 className="text-xl font-extrabold">{c.title}</h3>
              </div>
              <p className="max-w-sm text-left text-sm leading-6 text-white/60">{c.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
}
