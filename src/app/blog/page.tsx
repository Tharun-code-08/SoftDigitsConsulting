import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { blogPosts } from "@/data/blogPosts";
import type { Metadata } from "next";
import { Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on SAP S/4HANA migration, AMS benefits, and implementation economics—placeholder articles for demo.",
};

export default function BlogPage() {
  return (
    <>
      <section
        aria-label="Intro"
        className="border-b border-slate-200 bg-slate-50 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-slate-900">
            Insights
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Thought leadership and practical guides—demo placeholders you can
            replace with production content and SEO strategy.
          </p>
        </div>
      </section>

      <Section className="!pt-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.slug}>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" aria-hidden />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  {post.readTime}
                </span>
              </div>
              <h2 className="font-heading mt-4 text-lg font-semibold text-slate-900">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Read article →
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
