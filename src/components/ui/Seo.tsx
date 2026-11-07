import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE } from '@/constants/site'

export function Seo({title,description,type='website',schema}:{title:string;description:string;type?:string;schema?:object|object[]}){
  const {pathname}=useLocation()
  const canonical=`${SITE.siteUrl}${pathname}`
  useEffect(()=>{ document.title=`${title} | ${SITE.name}` },[title])
  return <Helmet>
    <meta name="description" content={description}/>
    <link rel="canonical" href={canonical}/>
    <meta property="og:title" content={`${title} | ${SITE.name}`}/>
    <meta property="og:description" content={description}/>
    <meta property="og:type" content={type}/>
    <meta property="og:url" content={canonical}/>
    <meta property="og:image" content={`${SITE.siteUrl}/brand/a-one-logo.jpg`}/>
    <meta name="twitter:card" content="summary_large_image"/>
    {schema&&<script type="application/ld+json">{JSON.stringify(schema)}</script>}
  </Helmet>
}