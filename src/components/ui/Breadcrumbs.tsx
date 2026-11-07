import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
export function Breadcrumbs({items}:{items:{label:string;href?:string}[]}){
  return <nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
    <li><Link className="focus-ring hover:text-brand-red" to="/">Home</Link></li>
    {items.map((item,i)=><li className="flex items-center gap-2" key={item.label}><ChevronRight size={14}/>{item.href?<Link className="focus-ring hover:text-brand-red" to={item.href}>{item.label}</Link>:<span aria-current="page">{item.label}</span>}</li>)}
  </ol></nav>
}