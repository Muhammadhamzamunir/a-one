import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
export function Breadcrumbs({items, className}:{items:{label:string;href?:string}[]; className?:string}){
  return <nav aria-label="Breadcrumb"><ol className={`flex flex-wrap items-center gap-2 text-sm ${className ?? 'text-slate-500'}`}>
    <li><Link className="focus-ring hover:text-brand-cyan" to="/">Home</Link></li>
    {items.map((item,i)=><li className="flex items-center gap-2" key={item.label}><ChevronRight size={14}/>{item.href?<Link className="focus-ring hover:text-brand-cyan" to={item.href}>{item.label}</Link>:<span aria-current="page">{item.label}</span>}</li>)}
  </ol></nav>
}