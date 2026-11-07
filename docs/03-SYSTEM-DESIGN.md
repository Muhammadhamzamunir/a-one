# System Design --- A-One Maintenance Service

## 1. Architecture

Recommended:

``` text
Browser
   |
   v
Next.js React Web App
   |
   | HTTPS REST/JSON
   v
Spring Boot API
   |
   +--> PostgreSQL
   |
   +--> Object Storage
   |
   +--> Email Provider
   |
   +--> WhatsApp / deep links
   |
   +--> Optional Maps/Geocoding
```

The public pages should be server-rendered/static where possible.

## 2. Frontend modules

``` text
src/
  app/
    (public)/
      page.tsx
      about/
      services/
      solutions/
      projects/
      brands/
      used-equipment/
      areas-we-serve/
      contact/
      request-a-quote/
      blog/
    (admin)/
      admin/
        dashboard/
        leads/
        projects/
        services/
        content/
        equipment/
        testimonials/
    api/
  components/
    ui/
    layout/
    sections/
    forms/
    cards/
    seo/
    animations/
  features/
    leads/
    projects/
    services/
    equipment/
    blog/
    testimonials/
  lib/
    api/
    seo/
    validation/
    analytics/
    utils/
  store/
    index.ts
    slices/
    api/
  types/
  content/
```

## 3. Redux strategy

Do not put all server data into Redux.

Use: - RTK Query for server/API state - Redux slices for small global
client state: - mobile menu - quote wizard state - UI preferences -
temporary filters

Use server components/static data for public content whenever possible.

## 4. API domains

``` text
/api/v1/services
/api/v1/solutions
/api/v1/projects
/api/v1/brands
/api/v1/equipment
/api/v1/blog
/api/v1/faqs
/api/v1/testimonials
/api/v1/leads
/api/v1/quote-requests
/api/v1/contact
/api/v1/admin/*
```

## 5. Suggested database

### business_profile

-   id
-   name
-   tagline
-   description
-   address
-   city
-   phone_primary
-   phone_secondary
-   email
-   whatsapp
-   latitude
-   longitude
-   created_at
-   updated_at

### services

-   id
-   slug
-   name
-   short_description
-   long_description
-   icon
-   featured
-   active
-   seo_title
-   seo_description
-   created_at
-   updated_at

### service_features

-   id
-   service_id
-   title
-   description

### solutions

-   id
-   slug
-   name
-   description
-   active

### projects

-   id
-   slug
-   title
-   project_type
-   location
-   client_name_nullable
-   summary
-   challenge
-   scope
-   outcome
-   completed_at
-   published
-   created_at
-   updated_at

### project_media

-   id
-   project_id
-   url
-   alt_text
-   caption
-   sort_order

### brands

-   id
-   name
-   category
-   service_notes
-   logo_url_nullable
-   verified
-   active

### equipment

-   id
-   slug
-   category
-   brand
-   model
-   condition
-   description
-   price_nullable
-   availability
-   warranty_nullable
-   published
-   created_at
-   updated_at

### testimonials

-   id
-   customer_name
-   company_nullable
-   text
-   source
-   permission_confirmed
-   published

### faqs

-   id
-   question
-   answer
-   service_id_nullable
-   active

### blog_posts

-   id
-   slug
-   title
-   excerpt
-   content
-   author
-   published_at
-   updated_at
-   status
-   seo_title
-   seo_description

### leads

-   id
-   name
-   phone
-   email_nullable
-   company_nullable
-   service_id_nullable
-   property_type
-   area
-   message
-   status
-   source
-   created_at
-   updated_at

## 6. Lead lifecycle

``` text
NEW
  -> CONTACTED
  -> SITE_VISIT_SCHEDULED
  -> QUOTED
  -> WON
  -> LOST
```

Keep a lead activity log.

## 7. API security

-   Spring Security
-   short-lived access tokens
-   refresh token rotation if used
-   role-based authorization
-   BCrypt/Argon2 password hashing
-   request DTO validation
-   maximum request body size
-   file type/size validation
-   rate limiting on public lead endpoints
-   audit logging for admin changes

## 8. File uploads

For project images: - allow only approved image MIME types - verify
actual file signatures where practical - strip unnecessary metadata -
resize/compress server side - generate responsive variants - store
outside the application filesystem in production - use random object
keys - never use user-provided filenames as storage paths

## 9. SEO rendering

Public page content must be present in server-rendered HTML whenever
practical.

For each page: - metadata - canonical URL - Open Graph - Twitter/X card
where relevant - JSON-LD - semantic headings - internal links

## 10. Structured data

Use only markup that accurately describes visible page content.

Potential: - LocalBusiness / most specific applicable subtype -
Organization - BreadcrumbList - Article/BlogPosting - FAQ only where the
content and Google's current eligibility rules support it

Do not create fake ratings or reviews in schema.

## 11. Caching

Public: - static generation/revalidation where appropriate - CDN for
images - HTTP caching

Admin: - authenticated and not publicly cacheable

## 12. Observability

Use: - structured backend logs - error monitoring - uptime monitoring -
Search Console - privacy-aware analytics

Track: - lead creation failures - API 4xx/5xx - image upload errors -
admin authentication events - important conversion events

## 13. Deployment

Recommended separation: - frontend: CDN/edge-capable host - backend:
managed VM/container platform - PostgreSQL: managed database - object
storage: S3-compatible service - DNS: Cloudflare or equivalent - HTTPS
everywhere

Use separate: - development - staging - production

## 14. Environment variables

Frontend:

``` text
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_API_BASE_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_MAPS_KEY=
```

Backend:

``` text
DB_URL=
DB_USERNAME=
DB_PASSWORD=
JWT_SECRET=
STORAGE_ENDPOINT=
STORAGE_ACCESS_KEY=
STORAGE_SECRET_KEY=
MAIL_HOST=
MAIL_USERNAME=
MAIL_PASSWORD=
```

Never commit secrets.

## 15. Testing

Frontend: - unit tests for utilities - component tests for forms - E2E
tests for quote/contact flows

Backend: - unit tests - repository tests - controller tests -
authorization tests - file-upload tests - rate-limit tests

E2E critical flow: `Home -> Service -> Quote -> Success`

## 16. Performance budget

Initial targets: - minimize JavaScript on public pages - lazy-load maps,
3D and below-fold media - use modern image formats - reserve image
dimensions to prevent layout shift - avoid huge animation libraries
where a CSS transition is enough - target Google Core Web Vitals: - LCP
\<= 2.5s - INP \< 200ms - CLS \< 0.1

These are targets, not ranking guarantees.
