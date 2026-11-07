import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { faqs } from '@/data/content'

export function FAQ() {
  const [open, setOpen] = useState(0)
  const reduceMotion = useReducedMotion()

  return (
    <div className="mt-8 border-t border-slate-200">
      {faqs.map((faq, index) => {
        const isOpen = open === index
        const answerId = `faq-answer-${index}`
        return (
          <div className="border-b border-slate-200" key={faq.q}>
            <button
              id={`faq-question-${index}`}
              onClick={() => setOpen(isOpen ? -1 : index)}
              className="focus-ring flex min-h-[68px] w-full items-center justify-between gap-6 py-5 text-left text-base font-bold leading-6 text-brand-navy sm:text-lg"
              aria-expanded={isOpen}
              aria-controls={answerId}
            >
              <span>{faq.q}</span>
              <Plus
                aria-hidden="true"
                className={`shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-45 text-brand-red' : 'text-slate-400'
                }`}
                size={20}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={answerId}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0.01 : 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-6 pr-8 text-[15px] leading-7 text-slate-600">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}