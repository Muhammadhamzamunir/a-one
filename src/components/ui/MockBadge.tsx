export function MockBadge({children='Mock content'}:{children?:string}){
  return <span className="inline-flex rounded bg-amber-100 px-2 py-1 text-sm font-bold text-amber-800">{children}</span>
}
