import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function AnimatedSection({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.03, margin: '0px 0px -24px 0px' }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}