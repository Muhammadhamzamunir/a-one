import type { Product, ProductCategory } from '@/types'

/**
 * Pre-owned product listings.
 * Edit this file to add, remove or update products. Every product is shown
 * with "Price on call"; drop real photos into /public/products and point
 * `image` to them (jpg, png, webp or svg all work).
 */
export const PRICE_LABEL = 'Price on call'

export const productCategories: Array<'All' | ProductCategory> = [
  'All',
  'Cooling',
  'Appliances',
  'Entertainment',
  'Computing',
  'Power',
]

export const products: Product[] = [
  { id: 'split-ac-15', title: 'Split AC, 1.5 Ton', category: 'Cooling', brandNote: 'Selected brands', specs: ['Wall-mounted', 'Indoor + outdoor unit', 'Remote included'], condition: 'Tested before sale', image: '/products/split-ac.svg', featured: true },
  { id: 'inverter-ac', title: 'Inverter AC, Cassette', category: 'Cooling', brandNote: 'Selected brands', specs: ['Energy-saving inverter', 'Ceiling mounted', 'Office-ready'], condition: 'Tested before sale', image: '/products/inverter-ac.svg', featured: true },
  { id: 'fridge-double-door', title: 'Double-Door Refrigerator', category: 'Appliances', brandNote: 'Selected brands', specs: ['Frost-free', 'Top-freezer', 'Home or office use'], condition: 'Tested before sale', image: '/products/refrigerator.svg', featured: true },
  { id: 'deep-freezer', title: 'Deep Freezer, Chest Type', category: 'Appliances', brandNote: 'Selected brands', specs: ['Single lid', 'Retail and home use', 'Cooling checked'], condition: 'Tested before sale', image: '/products/deep-freezer.svg', featured: true },
  { id: 'water-cooler', title: 'Water Cooler & Dispenser', category: 'Cooling', brandNote: 'Selected brands', specs: ['Hot and cold taps', 'Bottle-fed', 'Office-ready'], condition: 'Tested before sale', image: '/products/water-cooler.svg' },
  { id: 'washing-machine', title: 'Front-Load Washing Machine', category: 'Appliances', brandNote: 'Selected brands', specs: ['Front loading', 'Digital panel', 'Drum checked'], condition: 'Tested before sale', image: '/products/washing-machine.svg' },
  { id: 'led-tv', title: 'LED Smart TV', category: 'Entertainment', brandNote: 'Selected brands', specs: ['Multiple screen sizes', 'HDMI + USB', 'Display checked'], condition: 'Tested before sale', image: '/products/led-tv.svg' },
  { id: 'laptop', title: 'Laptop for Home or Office', category: 'Computing', brandNote: 'Selected brands', specs: ['Charger included', 'Battery checked', 'Ready to use'], condition: 'Tested before sale', image: '/products/laptop.svg' },
  { id: 'microwave', title: 'Microwave Oven', category: 'Appliances', brandNote: 'Selected brands', specs: ['Solo or grill', 'Heating tested', 'Kitchen-ready'], condition: 'Tested before sale', image: '/products/microwave.svg' },
  { id: 'generator', title: 'Portable Generator', category: 'Power', brandNote: 'Selected brands', specs: ['Petrol or gas', 'Backup power', 'Load tested'], condition: 'Tested before sale', image: '/products/generator.svg' },
]
