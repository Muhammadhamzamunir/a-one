import type { ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

type Props = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  /** "dark" cards sit on navy sections, "light" cards on white/grey sections. */
  tone?: "dark" | "light";
  /** rgb triplet used by the cursor-following glow, e.g. "5,169,232". */
  glow?: string;
};

/**
 * Card with a soft spotlight that follows the cursor.
 * Pure framer-motion: the gradient is driven by motion values, so it never re-renders React.
 */
export function SpotlightCard({
  children,
  className,
  tone = "light",
  glow = "5,169,232",
  ...rest
}: Props) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${x}px ${y}px, rgba(${glow},${tone === "dark" ? 0.2 : 0.12}), transparent 70%)`;

  return (
    <motion.div
      {...rest}
      onMouseMove={(event) => {
        if (reduceMotion) return;
        const box = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - box.left);
        y.set(event.clientY - box.top);
      }}
      onMouseLeave={() => {
        x.set(-300);
        y.set(-300);
      }}
      className={cn("group relative overflow-hidden", className)}
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
