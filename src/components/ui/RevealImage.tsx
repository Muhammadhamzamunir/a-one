import { motion, useReducedMotion } from "framer-motion";

export function RevealImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  objectPosition = "center",
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  objectPosition?: string;
  loading?: "eager" | "lazy";
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, clipPath: "inset(0 8% 0 8% round 12px)" }
      }
      whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0% round 12px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={`h-full w-full object-cover ${imageClassName}`}
        style={{ objectPosition }}
        initial={reduceMotion ? false : { scale: 1.045 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}
