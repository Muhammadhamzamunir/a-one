import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "light" | "ghost";
  className?: string;
  icon?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const styles = {
  primary:
    "bg-brand-blue text-white border-brand-blue hover:bg-[#103b7c] hover:border-[#103b7c]",
  secondary:
    "bg-brand-navy text-white border-brand-navy hover:bg-[#142b41] hover:border-[#142b41]",
  light: "bg-white text-brand-navy border-white hover:bg-surface",
  ghost:
    "bg-transparent text-current border-current/30 hover:border-current/70 hover:bg-white/5",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  icon = true,
  ...props
}: Props) {
  const classes = cn(
    "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border px-5 py-3 text-sm font-bold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]",
    styles[variant],
    className,
  );
  const content = (
    <>
      {children}
      {icon && <ArrowUpRight size={17} aria-hidden />}
    </>
  );
  if (href) {
    if (
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:")
    )
      return (
        <a
          className={classes}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
        >
          {content}
        </a>
      );
    return (
      <Link className={classes} to={href}>
        {content}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
