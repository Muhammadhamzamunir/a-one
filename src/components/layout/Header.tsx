import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS, SITE } from "@/constants/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isItemActive = (href: string) => {
    if (href === "/#brands") return pathname === "/" && hash === "#brands";
    if (href === "/") return pathname === "/" && !hash;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-white/95 transition-[background-color,border-color,box-shadow] duration-300 supports-[backdrop-filter]:backdrop-blur-md",
        scrolled &&
          "border-slate-200/80 bg-white/95 shadow-[0_4px_20px_rgba(13,27,42,0.06)]",
      )}
    >
      <div className="container-shell flex h-[76px] items-center justify-between gap-5">
        <Link
          to="/"
          className="focus-ring flex min-w-0 shrink-0 items-center gap-2.5"
          aria-label="A-One Maintenance Service home"
        >
          <img
            src="/brand/a-one-logo.jpg"
            alt="A-One Maintenance Service logo"
            className="h-12 w-[58px] object-contain"
          />
          <span className="block leading-tight">
            <strong className="block text-xs tracking-wide text-brand-navy sm:text-sm">
              A-ONE
            </strong>
            <span className="mt-1 hidden text-[9px] font-bold tracking-[0.16em] text-slate-500 md:block">
              MAINTENANCE SERVICE
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-9 xl:flex"
          aria-label="Primary navigation"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "focus-ring relative whitespace-nowrap py-2 text-[14px] font-semibold tracking-[0.01em] transition-colors hover:text-brand-navy",
                isItemActive(item.href) ? "text-brand-navy" : "text-slate-500",
              )}
              aria-current={isItemActive(item.href) ? "page" : undefined}
            >
              {item.label}
              {isItemActive(item.href) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-brand-red"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            href={SITE.phoneHref}
            variant="ghost"
            icon={false}
            className="gap-2 border-slate-300 px-3.5 text-brand-navy hover:border-brand-navy hover:bg-slate-50"
          >
            <Phone aria-hidden="true" size={16} />
            Call Now
          </Button>
          <Button href="/request-service" icon={false}>
            Request Service
          </Button>
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="focus-ring shrink-0 rounded-lg border border-brand-navy/20 bg-white p-2.5 text-brand-navy shadow-sm transition-all hover:bg-brand-navy hover:text-white hover:border-brand-navy active:scale-95 xl:hidden"
        >
          {open ? (
            <X aria-hidden="true" size={20} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <Menu aria-hidden="true" size={20} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          )}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-md shadow-[0_24px_48px_rgba(13,27,42,0.08)] xl:hidden"
          >
            <nav className="container-shell flex flex-col py-4" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item) => (
                <Link
                  onClick={() => setOpen(false)}
                  key={item.href}
                  to={item.href}
                  aria-current={isItemActive(item.href) ? "page" : undefined}
                  className={cn(
                    "focus-ring relative flex items-center gap-3 border-b border-slate-100/50 py-4 text-[15px] font-bold transition-colors",
                    isItemActive(item.href)
                      ? "text-brand-red"
                      : "text-brand-navy",
                  )}
                >
                  {item.label}
                  {isItemActive(item.href) && (
                    <span className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-brand-red" />
                  )}
                </Link>
              ))}
              <div className="mt-6 pt-6 border-t border-slate-100/60">
                <div className="grid grid-cols-2 gap-3 pb-4">
                  <Button
                    href={SITE.phoneHref}
                    variant="ghost"
                    icon={false}
                    className="border-slate-200 px-3.5 py-2.5 text-sm font-bold text-brand-navy hover:bg-slate-50"
                  >
                    <Phone aria-hidden="true" size={15} />
                    Call Now
                  </Button>
                  <Button
                    href="/request-service"
                    icon={false}
                    className="bg-brand-red text-white border-brand-red py-2.5 text-sm font-bold hover:bg-[#a3141a] hover:border-[#a3141a]"
                  >
                    Request Service
                  </Button>
                </div>
                <p className="text-xs text-slate-500 text-center">
                  9-B, Sanam Arcade, Mozang Chungi, Ferozpur Road, Lahore
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
