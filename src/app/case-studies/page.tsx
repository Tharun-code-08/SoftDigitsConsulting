import { Card } from "@/components/Card";
import { CTABanner } from "@/components/CTABanner";
import { Section } from "@/components/Section";
import { caseStudies } from "@/data/caseStudies";
import type { Metadata } from "next";
import { TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Sample SAP S/4HANA implementation and ECC migration programmes—problem, solution, and illustrative business results.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section
        aria-label="Intro"
        className="border-b border-slate-200 bg-slate-50 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-slate-900">
            Case studies
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Illustrative programme summaries for demo purposes—replace with
            anonymised or approved client stories and verified metrics.
          </p>
        </div>
      </section>

      <Section className="!pt-12">
        <div className="space-y-10">
          {caseStudies.map((cs) => (
            <Card key={cs.id} hover={false} className="overflow-hidden p-0">
              <div className="border-b border-slate-100 bg-slate-50/80 px-6 py-4 sm:px-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-800">
                  {cs.segment}
                </p>
                <h2 className="font-heading mt-1 text-xl font-semibold text-slate-900 sm:text-2xl">
                  {cs.title}
                </h2>
              </div>
              <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Problem</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {cs.problem}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Solution</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {cs.solution}
                  </p>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <TrendingUp className="h-4 w-4 text-emerald-600" aria-hidden />
                    Results
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {cs.results.map((r, i) => (
                      <li
                        key={i}
                        className="text-sm leading-relaxed text-slate-600 before:mr-2 before:text-emerald-600 before:content-['✓']"
                      >
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
