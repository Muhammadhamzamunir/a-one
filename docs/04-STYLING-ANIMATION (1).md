# Styling, Animation & Component System

## 1. Tailwind strategy

Create design tokens rather than scattering arbitrary colors throughout
components.

Suggested semantic tokens:

``` text
brand-primary
brand-blue
brand-cyan
brand-red
surface
surface-muted
surface-dark
text
text-muted
border
success
warning
danger
```

## 2. Component naming

``` text
Button
IconButton
Container
SectionHeading
ServiceCard
IndustryCard
ProjectCard
BrandLogo
TestimonialCard
FAQItem
QuoteForm
ContactCard
StatCard
ProcessStep
Breadcrumbs
StickyMobileActions
```

## 3. Buttons

Primary: - blue/dark blue background - white text

Accent: - red background for urgent/high-priority CTA only

Secondary: - white/transparent with border

Button rules: - minimum comfortable touch area - visible focus - loading
state - disabled state - never hide form errors

## 4. Card style

Use: - 1px border - 16--24px radius depending on component - restrained
shadow - hover translate 2--4px max

Avoid excessive glassmorphism.

## 5. Technical visual motifs

Use: - blueprint grid - subtle diagonal lines - HVAC airflow lines -
equipment silhouette - circuit/technical diagrams - measured spacing -
section labels

Keep motifs subtle.

## 6. GSAP

Use GSAP only for: - hero entrance - section reveal - horizontal process
animation - controlled parallax

Implement cleanup for React lifecycle.

Respect:

``` css
@media (prefers-reduced-motion: reduce) {
  /* disable non-essential animation */
}
```

## 7. Lottie

Good uses: - service process - inspection - maintenance checklist -
airflow - electrical safety

Keep animations: - short - lightweight - muted - not continuously
distracting

## 8. Three.js

Only use if the visual has real value.

Recommended optional concept: - small 3D HVAC airflow/technical
equipment visualization - desktop only - lazy loaded - static fallback
image on mobile/low-power devices

Never make the 3D scene necessary to understand the headline or CTA.

## 9. Parallax

Use: - slow background grid - image depth - decorative blueprint lines

Do not use scroll-jacking.

## 10. Image strategy

Preferred order: 1. Real A-One project photographs 2. Real
technician/team photographs 3. Real workshop/equipment photographs 4.
Licensed professional stock photography 5. Generated decorative imagery
only where clearly non-documentary

Never use generated imagery as proof of a completed project.

## 11. Responsive breakpoints

Design around content, not devices.

Test: - 320 - 375 - 414 - 768 - 1024 - 1280 - 1440+

## 12. Interaction polish

Add: - hover states - focus states - skeleton/loading states where API
calls occur - toast feedback for form submission - clear success
screen - graceful API error states

## 13. Accessibility

Every interactive component must work with: - keyboard - screen reader -
touch

Do not: - use divs as buttons - use icon-only buttons without labels -
hide important text inside hover states - rely on animation for meaning
