# A-One Maintenance Service --- Website Master Implementation Brief

## 1. Project objective

Build a premium, trustworthy, mobile-first service-company website for
**A-One Maintenance Service**, positioned as a Lahore-based technical
maintenance, HVAC, electrical, appliance-repair, fire-fighting,
installation, consultancy and annual-maintenance-contract (AMC) company.

The website has two jobs:

1.  **Lead generation:** make it extremely easy for a homeowner, office
    manager, facility manager, contractor, hospital, retailer or
    industrial buyer to call, WhatsApp, request a quotation or request a
    site visit.
2.  **Corporate credibility:** present the company professionally enough
    for national and multinational companies, contractors, consultants
    and equipment/product partners to consider A-One for projects,
    installation, maintenance and vendor relationships.

The site must not promise Google #1 rankings. It should be engineered
around Google's documented Search Essentials, useful original content,
local business signals, technical SEO, accessibility, speed and a strong
Google Business Profile.

## 2. Recommended technology

### Public website

-   **Next.js (React) App Router** for server-rendered/static public
    pages and SEO-friendly HTML.
-   TypeScript.
-   Tailwind CSS.
-   Redux Toolkit only where shared client state is actually needed.
-   RTK Query for API/server-state workflows such as quote requests,
    contact requests, project/admin data and appointment status.
-   Spring Boot REST API for business logic and protected admin APIs.
-   PostgreSQL for production relational data.
-   Object storage for project photos/documents rather than storing
    large media inside PostgreSQL.
-   React Hook Form + Zod for forms and validation.
-   Lucide React or another lightweight icon library.
-   GSAP + ScrollTrigger for restrained premium motion.
-   Lottie for small service/process illustrations where it improves
    communication.
-   Three.js/R3F only for one optional lightweight hero visual; do not
    make WebGL a dependency for understanding or navigating the site.
-   Map integration on Contact/Service Area only, preferably
    lazy-loaded.

### Why Next.js instead of a plain React SPA?

The client asked for React. Next.js is React, but it also gives the
public site server rendering/static generation, route-level metadata,
sitemap/robots support and a better foundation for crawlable service and
project pages. The Spring Boot backend remains the business/API layer.

## 3. Product positioning

Primary positioning:

> **Professional HVAC, Electrical, Maintenance & Technical Solutions
> Across Lahore**

Supporting positioning:

> From residential repairs to commercial HVAC, chiller, ducting,
> ventilation, electrical, appliance and annual maintenance projects.

Avoid making unsupported claims such as: - "#1 in Lahore" - "best
company" - "guaranteed same-day service" - "certified" unless the exact
certification is verified - "authorized dealer" unless authorization is
documented - exact project/customer counts unless verified - fake review
counts or ratings

## 4. Site map

### Primary pages

-   `/` Home
-   `/about` About
-   `/services` Services overview
-   `/services/hvac`
-   `/services/ac-installation`
-   `/services/ac-repair-maintenance`
-   `/services/chiller`
-   `/services/ducting-ventilation`
-   `/services/electrical`
-   `/services/home-appliance-repair`
-   `/services/fire-fighting`
-   `/services/annual-maintenance-contracts`
-   `/solutions` Solutions overview
-   `/solutions/residential`
-   `/solutions/commercial`
-   `/solutions/industrial`
-   `/solutions/hospitals`
-   `/solutions/offices-it`
-   `/solutions/retail`
-   `/solutions/apartments-villas`
-   `/projects` Projects/case studies
-   `/projects/[slug]` Project detail
-   `/brands` Brands we service/work with
-   `/used-equipment` Used equipment buying/selling
-   `/areas-we-serve` Lahore service area
-   `/contact`
-   `/request-a-quote`
-   `/blogs`
-   `/blogs/[slug]`
-   `/privacy-policy`
-   `/terms`
-   `/sitemap.xml`
-   `/robots.txt`

### Optional later pages

-   `/careers`
-   `/partners`
-   `/maintenance-plans`
-   `/emergency-service`

Do not create dozens of near-identical location pages merely to capture
keywords. Add an area page or individual area pages only when there is
genuinely useful, location-specific content, service evidence, photos,
FAQs or projects.

## 5. Navigation

Desktop: - Home - Services - Solutions - Projects - About - Used
Equipment - Blogs - Contact - Persistent **Request a Quote** CTA -
Phone/WhatsApp CTA

Mobile: - compact header - call button - WhatsApp button - menu drawer -
sticky bottom action bar: **Call / WhatsApp / Quote**

## 6. Homepage section order

1.  Header
2.  Hero: clear value proposition + Call + WhatsApp + Request Quote
3.  Trust strip: Lahore service area, trained team,
    residential/commercial/industrial capability, AMC
4.  Services grid
5.  HVAC/technical solutions feature section
6.  Residential vs commercial/industrial split
7.  Industries served
8.  Brands we service
9.  How it works
10. Featured projects/case studies
11. AMC / preventive maintenance CTA
12. Customer testimonials --- only verified testimonials
13. Service areas
14. FAQ
15. Final quote CTA
16. Footer

## 7. Visual direction

Use the supplied logo and letterhead as the brand anchor.

The supplied logo uses: - charcoal/dark gray - royal/deep blue - bright
cyan/blue - red - white

The design should feel: - engineering-grade - clean - dependable -
modern - premium but not flashy - suitable for corporate procurement

Do not make it look like a generic "local electrician" template.

Use dark charcoal for major technical sections, white/light gray for
reading areas, deep blue as the primary brand color, red as a small
action/accent color, and cyan/blue as a technical highlight.

## 8. Motion direction

Motion is supportive, not decorative.

Use: - subtle hero reveal - card hover elevation - number/count
animation only for verified numbers - GSAP ScrollTrigger for section
reveals - restrained parallax - Lottie for process/service
micro-illustrations - optional low-complexity HVAC/airflow visual

Do not: - delay content behind animations - use full-screen WebGL
backgrounds - animate every card - create scroll-jacking - sacrifice
Core Web Vitals for visual effects

Respect `prefers-reduced-motion`.

## 9. SEO architecture

Each important service gets a genuinely useful page with: - unique
title - unique H1 - concise service summary - service scope -
equipment/types handled - process - common problems - maintenance
guidance - project evidence where available - FAQs - CTA - related
services - internal links

Core local SEO: - Google Business Profile - consistent business
name/address/phone - accurate service area - real business photos -
genuine reviews - Search Console - sitemap - LocalBusiness structured
data - Organization/logo structured data - BreadcrumbList where useful -
Article/BlogPosting structured data for article pages - canonical URLs -
fast mobile UX - descriptive image alt text - clean internal linking

## 10. Critical client verification before launch

The supplied letterhead states:

**A-ONE MAINTENANCE**\
"KEEPING YOUR HOME RUNNING SMOOTHLY"\
9-B, Sanam Arcade, Mozang Chungi Near Qurtaba Chowk, Ferozpur Road
Lahore\
E-mail: `tahirmehmoodvip01@gmil.com`\
Cell: `+92 302 9511041`, `+92322 4285478`

The email appears to contain `gmil.com`; verify whether that is
intentional or a typo before publishing.

Also verify: - exact official business name - exact Google Business
Profile name - opening hours - service area - whether customers visit
the physical address - WhatsApp number(s) - project count - years of
experience - technician qualifications/certifications - authorized
brand/dealer relationships - actual brands serviced - emergency/24-hour
availability - fire-fighting scope - used-equipment warranty/return
policy - real project photographs - client/company logos that are
legally permitted to be displayed - testimonials and customer
names/companies - terms and privacy requirements

## 11. Success criteria

### Business

-   More calls
-   More WhatsApp conversations
-   More qualified quote requests
-   More commercial/industrial inquiries
-   Better corporate credibility
-   More AMC leads
-   More partnership/vendor inquiries

### Technical

-   Mobile-first
-   accessible keyboard navigation
-   HTTPS
-   fast initial render
-   good Core Web Vitals
-   no console errors
-   robust API validation
-   protected admin routes
-   automated sitemap
-   robots.txt
-   canonical metadata
-   structured data validated before launch

### SEO

No ranking position is guaranteed. The target is to create a technically
strong, useful, locally relevant website and support it with a properly
managed Google Business Profile, genuine reviews, original project
evidence and legitimate local/company citations.

## 12. Build order

1.  Brand tokens and design system
2.  Next.js shell/header/footer
3.  Home
4.  Services architecture
5.  Service detail templates
6.  Solutions/industry pages
7.  Projects/case studies
8.  Contact + quote flow
9.  Brands + used equipment
10. Blog system
11. Spring Boot API
12. Admin dashboard
13. SEO/structured data/sitemap
14. Security hardening
15. Performance/accessibility
16. Analytics/Search Console
17. Production deployment
18. Post-launch SEO/content plan
