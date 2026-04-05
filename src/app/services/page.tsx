import Image from "next/image";
import { Card } from "@/components/Card";
import { CTABanner } from "@/components/CTABanner";
import { Section } from "@/components/Section";
import { ServiceVideoEmbed } from "@/components/ServiceVideoEmbed";
import { servicesDetail } from "@/data/services";
import type { Metadata } from "next";
import { CheckCircle2, ListOrdered } from "lucide-react";

export const metadata: Metadata = {
  title: "SAP Services",
  description:
    "SAP implementation, AMS support, and S/4HANA upgrade & migration—with process steps, benefits, and sample outcomes.",
};

export default function ServicesPage() {
  return (
    <>
      <section
        aria-label="Intro"
        className="border-b border-slate-200 bg-slate-50 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-slate-900">
            SAP services
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Implementation, Application Management Services, and
            upgrade/migration programmes—structured for transparency, quality
            gates, and SLA-backed operations.
          </p>
        </div>
      </section>

      <div className="space-y-0">
        {servicesDetail.map((svc, index) => {
          const Icon = svc.icon;
          const muted = index % 2 === 1;
          const { media } = svc;
          return (
            <Section
              key={svc.id}
              id={svc.id}
              muted={muted}
              className="scroll-mt-24"
              title={svc.title}
              subtitle={svc.shortDescription}
            >
              <div className="mb-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
                <div className="relative w-full overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100 shadow-sm">
                  <div className="relative aspect-[16/10] min-h-[220px] w-full sm:min-h-[260px]">
                    <Image
                      src={media.imageSrc}
                      alt={media.imageAlt}
                      fill
                      className="object-cover object-center transition duration-500 hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-blue-800">
                    Overview video
                  </h3>
                  <div className="mt-4">
                    <ServiceVideoEmbed
                      youtubeId={media.videoYoutubeId}
                      title={media.videoTitle}
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700/10 text-blue-800">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <p className="text-sm font-medium uppercase tracking-wide text-blue-800">
                      Service detail
                    </p>
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-slate-600">
                    {svc.description}
                  </p>

                  <div className="mt-8">
                    <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-slate-900">
                      <ListOrdered className="h-5 w-5 text-blue-700" aria-hidden />
                      Process steps
                    </h3>
                    <ol className="mt-4 space-y-3">
                      {svc.steps.map((step, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed text-slate-600"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-800">
                            {i + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card>
                    <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-slate-900">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden />
                      Benefits
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {svc.benefits.map((b, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm text-slate-600 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-blue-600 before:content-['']"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </Card>
                  <Card hover={false} className="bg-slate-50/80">
                    <h3 className="font-heading text-base font-semibold text-slate-900">
                      Case example
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {svc.caseExample}
                    </p>
                  </Card>
                </div>
              </div>
            </Section>
          );
        })}
      </div>

      <CTABanner />
    </>
  );
}
