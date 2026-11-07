import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CalendarClock, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "@/components/ui/Seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { blogPosts } from "@/data/content";
import { MockBadge } from "@/components/ui/MockBadge";
import { CTASection } from "@/components/sections/CTASection";
import { SITE } from "@/constants/site";

export default function BlogPage() {
  const featured = blogPosts[0];
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Seo
        title="Maintenance Blog"
        description="Practical draft blogs about HVAC, AC maintenance, AMCs and facility maintenance in Lahore, written for the people responsible for facilities."
      />
      <section className="relative overflow-hidden bg-brand-navy pb-20 pt-32 text-white technical-grid">
        <div className="container-shell relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
          <div>
            <Breadcrumbs items={[{ label: "Blogs" }]} />
            <h1 className="headline mt-4 max-w-3xl text-white">
              Practical guidance for people responsible for equipment and
              facilities.
            </h1>
            <p className="body-large mt-6 max-w-2xl text-white/70">
              Draft articles on HVAC, AC maintenance, AMCs and facility
              operations. Each post is labelled as a draft until it has been
              technically reviewed.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Draft articles",
                "HVAC",
                "AC maintenance",
                "Facility AMCs",
              ].map((topic) => (
                <span
                  className="rounded-md border border-white/12 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-white/75"
                  key={topic}
                >
                  {topic}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/request-a-quote" icon={false}>
                Get a Quote
              </Button>
              <Button href={SITE.phoneHref} variant="ghost" icon={false}>
                Call Now
              </Button>
            </div>
          </div>

          <Link
            to={`/blogs/${featured.slug}`}
            className="focus-ring group rounded-[14px] border border-white/12 bg-white/[0.045] p-6 transition-colors hover:border-brand-cyan/40 hover:bg-white/[0.07] md:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-sm font-bold text-white">
                <Newspaper aria-hidden="true" size={15} />
                {featured.category}
              </span>
              <MockBadge>{featured.readTime}</MockBadge>
            </div>
            <h2 className="mt-6 text-2xl font-bold leading-tight text-white">
              {featured.title}
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-white/70">
              {featured.excerpt}
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-cyan">
              Read draft
              <ArrowUpRight
                aria-hidden="true"
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </p>
          </Link>
        </div>
      </section>

      <AnimatedSection className="section-pad bg-surface">
        <div className="container-shell">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">Latest articles</p>
            <h2 className="headline mt-3 text-brand-navy">
              Maintenance notes and guides.
            </h2>
          </div>
          <motion.div
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.06, margin: "0px 0px -28px 0px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: reduceMotion ? 0 : 0.065 },
              },
            }}
          >
            {blogPosts.map((post) => (
              <motion.article
                className="group flex h-full flex-col rounded-[12px] border border-slate-200 bg-white p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_10px_28px_rgba(13,27,42,0.07)]"
                key={post.slug}
                variants={{
                  hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <MockBadge>Draft article</MockBadge>
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-500">
                    <CalendarClock aria-hidden="true" size={14} />
                    {post.readTime}
                  </span>
                </div>
                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-blue">
                  {post.category}
                </p>
                <h3 className="mt-2.5 text-xl font-bold leading-snug text-brand-navy">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between gap-4 pt-7 text-sm text-slate-500">
                  <span>{post.date}</span>
                  <Link
                    className="focus-ring inline-flex min-h-10 items-center gap-1.5 font-bold text-brand-blue transition-colors hover:text-brand-red"
                    to={`/blogs/${post.slug}`}
                  >
                    Read draft
                    <ArrowUpRight aria-hidden="true" size={15} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <CTASection />
    </>
  );
}
