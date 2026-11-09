import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

const HomePage=lazy(()=>import('@/pages/HomePage'))
const ServicesPage=lazy(()=>import('@/pages/ServicesPage'))
const ServiceDetailPage=lazy(()=>import('@/pages/ServiceDetailPage'))
const IndustriesPage=lazy(()=>import('@/pages/IndustriesPage'))
const ProjectsPage=lazy(()=>import('@/pages/ProjectsPage'))
const AboutPage=lazy(()=>import('@/pages/AboutPage'))
const EquipmentPage=lazy(()=>import('@/pages/EquipmentPage'))
const BlogPage=lazy(()=>import('@/pages/BlogPage'))
const BlogDetailPage=lazy(()=>import('@/pages/BlogDetailPage'))
const ContactPage=lazy(()=>import('@/pages/ContactPage'))
const QuotePage=lazy(()=>import('@/pages/QuotePage'))
const ReviewsPage=lazy(()=>import('@/pages/ReviewsPage'))
const ServiceAreasPage=lazy(()=>import('@/pages/ServiceAreasPage'))
const LegalPage=lazy(()=>import('@/pages/LegalPage'))
const NotFoundPage=lazy(()=>import('@/pages/NotFoundPage'))

export default function App(){
  return <Suspense fallback={<div role="status" className="grid min-h-svh place-items-center bg-brand-navy text-sm font-bold text-white">Loading A-One…</div>}><Routes>
    <Route element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="services" element={<ServicesPage/>}/>
      <Route path="services/:slug" element={<ServiceDetailPage/>}/>
      <Route path="industries" element={<IndustriesPage/>}/>
      <Route path="solutions" element={<Navigate replace to="/industries"/>}/>
      <Route path="projects" element={<ProjectsPage/>}/>
      <Route path="projects/:slug" element={<ProjectsPage/>}/>
      <Route path="about" element={<AboutPage/>}/>
      <Route path="buy-&-sale" element={<EquipmentPage/>}/>
      <Route path="blogs" element={<BlogPage/>}/>
      <Route path="blog" element={<Navigate replace to="/blogs"/>}/>
      <Route path="resources" element={<Navigate replace to="/blogs"/>}/>
      <Route path="blogs/:slug" element={<BlogDetailPage/>}/>
      <Route path="blog/:slug" element={<LegacyBlogRedirect/>}/>
      <Route path="contact" element={<ContactPage/>}/>
      <Route path="request-a-quote" element={<Navigate replace to="/request-service"/>}/>
      <Route path="request-service" element={<QuotePage/>}/>
      <Route path="reviews" element={<ReviewsPage/>}/>
      <Route path="service-areas" element={<ServiceAreasPage/>}/>
      <Route path="privacy-policy" element={<LegalPage type="privacy"/>}/>
      <Route path="terms" element={<LegalPage type="terms"/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Route>
  </Routes></Suspense>
}
function LegacyBlogRedirect(){
  const {slug}=useParams()
  return <Navigate replace to={`/blogs/${slug}`}/>
}