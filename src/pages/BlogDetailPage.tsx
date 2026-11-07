import { Link, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Seo } from "@/components/ui/Seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { blogPosts } from "@/data/content";
import { MockBadge } from "@/components/ui/MockBadge";
import { RevealImage } from "@/components/ui/RevealImage";
import { CTASection } from "@/components/sections/CTASection";
import NotFoundPage from "./NotFoundPage";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return <NotFoundPage />;

  const related = blogPosts.filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <>
      <Seo title={post.title} description={post.excerpt} type="article" />
      <article className="pb-20 pt-32">
        <div className="container-shell">
          <Breadcrumbs items={[{ label: "Blogs" }, { label: post.title }]} />
          <div className="mx-auto mt-12 max-w-3xl">
            <MockBadge>Mock draft—technical review required</MockBadge>
            <h1 className="headline mt-7 text-brand-navy">{post.title}</h1>
            <p className="body-large mt-5 text-slate-600">{post.excerpt}</p>
            <figure className="mt-8">
              <RevealImage
                src="/images/hvac-project-works.jpg"
                alt="Illustrative cooling equipment photo for a draft maintenance article"
                className="aspect-[16/8] rounded-[12px] bg-slate-100"
              />
              <figcaption className="mt-2 text-xs text-slate-500">
                Illustrative equipment photo · draft article.
              </figcaption>
            </figure>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="space-y-8 text-lg leading-8 text-slate-700">
              <section>
                <h2 className="text-2xl font-bold text-brand-navy">
                  Why routine attention matters
                </h2>
                <p className="mt-4">
                  This is placeholder editorial content demonstrating article
                  typography and structure. Replace it with technically
                  reviewed, original guidance based on A-One’s real service
                  experience.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-brand-navy">
                  A practical review sequence
                </h2>
                <ul className="mt-4 list-disc space-y-3 pl-6">
                  <li>Confirm the equipment and operating requirement.</li>
                  <li>
                    Record symptoms, service history and environmental
                    conditions.
                  </li>
                  <li>
                    Use a qualified technical assessment before approving
                    repairs or replacement.
                  </li>
                </ul>
              </section>
            </div>

            <section className="mt-12 rounded-[12px] border border-slate-200 bg-surface p-6 md:p-8">
              <h2 className="text-xl font-bold text-brand-navy">
                Related draft articles
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {related.map((item) => (
                  <Link
                    className="focus-ring group rounded-[10px] border border-slate-200 bg-white p-5 transition-[border-color,box-shadow] hover:border-brand-blue/30 hover:shadow-[0_6px_18px_rgba(13,27,42,0.06)]"
                    to={`/blogs/${item.slug}`}
                    key={item.slug}
                  >
                    <p className="text-xs font-extrabold uppercase tracking-wider text-brand-blue">
                      {item.category}
                    </p>
                    <h3 className="mt-3 text-lg font-bold text-brand-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
                      Read draft
                      <ArrowUpRight
                        aria-hidden="true"
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
      <CTASection />
    </>
  );
}
