import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Phone, Send } from "lucide-react";
import { SITE } from "@/constants/site";

export function FloatingActions() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <div className="mobile-contact-dock fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 pt-3 backdrop-blur-md md:hidden">
        <div className="mx-auto grid w-full max-w-[500px] grid-cols-3 gap-2">
          <a
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-1.5 rounded-md bg-brand-navy px-2 text-xs font-bold text-white transition-colors hover:bg-[#142b41]"
            href={SITE.phoneHref}
          >
            <Phone aria-hidden="true" size={16} />
            Call
          </a>
          <a
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-1.5 rounded-md bg-[#168c4b] px-2 text-xs font-bold text-white transition-colors hover:bg-[#11763f]"
            href={SITE.whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle aria-hidden="true" size={16} />
            WhatsApp
          </a>
          <a
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-1.5 rounded-md bg-brand-blue px-2 text-xs font-bold text-white transition-colors hover:bg-[#103b7c]"
            href="/request-a-quote"
          >
            <Send aria-hidden="true" size={15} />
            Quote
          </a>
        </div>
      </div>

      <motion.a
        className="focus-ring fixed bottom-6 right-6 z-40 hidden min-h-12 items-center gap-2 rounded-md bg-[#168c4b] px-4 text-sm font-bold text-white shadow-[0_8px_24px_rgba(13,27,42,0.2)] transition-colors hover:bg-[#11763f] md:inline-flex"
        href={SITE.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact A-One on WhatsApp"
        title="WhatsApp A-One"
        whileHover={reduceMotion ? undefined : { y: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      >
        <MessageCircle aria-hidden="true" size={18} />
        WhatsApp
      </motion.a>
    </>
  );
}
