import { Card } from "@/components/Card";
import { CTABanner } from "@/components/CTABanner";
import { Section } from "@/components/Section";
import { industries } from "@/data/industries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "SAP solutions for manufacturing, retail, and logistics—tailored use cases for India and Middle East operations.",
};

export default function IndustriesPage() {
  return (
    <>
      <section
        aria-label="Intro"
        className="border-b border-slate-200 bg-slate-50 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-slate-900">
            Industries
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Sector-specific SAP roadmaps—from plant-floor manufacturing to
            omnichannel retail and energy logistics across India and the GCC.
          </p>
        </div>
      </section>

      <Section className="!pt-12">
        <div className="space-y-12">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <article
                key={ind.id}
                id={ind.id}
                className="scroll-mt-28"
              >
                <Card>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-700/10 text-blue-800">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-heading text-2xl font-semibold text-slate-900">
                        {ind.title}
                      </h2>
                      <p className="mt-3 text-base leading-relaxed text-slate-600">
                        {ind.description}
                      </p>
                      <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-500">
                        SAP use cases
                      </h3>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {ind.useCases.map((u, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-slate-600 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-blue-600 before:content-['']"
                          >
                            {u}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </article>
            );
          })}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
