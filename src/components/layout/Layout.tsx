import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { Header } from "./Header";

export function Layout() {
  const { pathname, hash } = useLocation();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    if (!hash) return;

    let attempts = 0;
    let timeout = 0;
    const scrollToTarget = () => {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start",
        });
        return;
      }
      attempts += 1;
      if (attempts < 20) timeout = window.setTimeout(scrollToTarget, 50);
    };
    timeout = window.setTimeout(scrollToTarget, 50);

    return () => window.clearTimeout(timeout);
  }, [pathname, hash, reduceMotion]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-brand-red"
        style={{ scaleX: reduceMotion ? scrollYProgress : smoothProgress }}
      />
      <a
        href="#main"
        className="focus-ring fixed left-3 top-3 z-[100] -translate-y-20 rounded-md bg-white px-4 py-3 font-bold text-brand-navy shadow-lg focus:translate-y-0"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <motion.div
          key={pathname}
          initial={reduceMotion ? false : { opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0.01 : 0.28,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
      <div className="h-[82px] bg-[#08131f] md:hidden" aria-hidden="true" />
      <FloatingActions />
    </>
  );
}
