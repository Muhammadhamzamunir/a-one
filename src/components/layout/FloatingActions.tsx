import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/constants/site";

export function FloatingActions() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      {/* Only WhatsApp button, bottom-right on all devices */}
      <motion.a
        className="focus-ring fixed bottom-4 right-4 z-40 min-h-12 flex items-center justify-center gap-2 rounded-full bg-[#168c4b] px-4 text-sm font-bold text-white shadow-[0_8px_24px_rgba(13,27,42,0.3)] transition-colors hover:bg-[#11763f]"
        href={SITE.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact A-One on WhatsApp"
        title="WhatsApp A-One"
        whileHover={reduceMotion ? undefined : { y: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      >
        <MessageCircle aria-hidden="true" size={18} />
        {/* WhatsApp */}
      </motion.a>
    </>
  );
}
