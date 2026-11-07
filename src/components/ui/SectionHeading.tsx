import { cn } from '@/lib/utils'
export function SectionHeading({title,body,align='left',light=false}:{title:string;body?:string;align?:'left'|'center';light?:boolean}){
  return <div className={cn('max-w-3xl',align==='center'&&'mx-auto text-center')}>
    <h2 className={cn('headline mt-4',light?'text-white':'text-brand-navy')}>{title}</h2>
    {body&&<p className={cn('body-large mt-5',light?'text-white/70':'text-slate-600')}>{body}</p>}
  </div>
}
