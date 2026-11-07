import type { LucideIcon } from 'lucide-react'

export type Service = {
  slug: string
  title: string
  shortTitle: string
  summary: string
  description: string
  icon: LucideIcon
  scope: string[]
  problems: string[]
}

export type Industry = { title: string; description: string; icon: LucideIcon }
export type Project = { slug: string; title: string; category: string; summary: string; image: string; mock: true }
export type Equipment = { id: string; title: string; category: string; condition: string; price: string; image: string; mock: true }
export type BlogPost = { slug: string; title: string; excerpt: string; category: string; date: string; readTime: string; mock: true }

export type ProductCategory = 'Cooling' | 'Appliances' | 'Entertainment' | 'Computing' | 'Power'
export type Product = {
  id: string
  title: string
  category: ProductCategory
  brandNote: string
  specs: string[]
  condition: string
  image: string
  featured?: boolean
}
