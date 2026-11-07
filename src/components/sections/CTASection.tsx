import { MessageCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SITE } from '@/constants/site'

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 text-white md:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] bg-[linear-gradient(135deg,transparent_0%,rgba(5,169,232,0.05)_100%)] lg:block"
      />
      <div className="container-shell relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
        <div>
          <p className="eyebrow eyebrow-light">Talk to the team</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Have a repair or installation to discuss?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/75 md:text-lg">
            Share the service, equipment and site location. The team can confirm the right next step.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/request-a-quote" variant="primary" icon={false}>
            Get a Quote
          </Button>
          <Button href={SITE.phoneHref} variant="light" icon={false}>
            <Phone aria-hidden="true" size={16} />
            Call Now
          </Button>
          <Button href={SITE.whatsappHref} variant="ghost" icon={false}>
            <MessageCircle aria-hidden="true" size={17} />
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}