import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { CTABanner } from "@/components/CTABanner";
import { Section } from "@/components/Section";
import { industries } from "@/data/industries";
import { clientLogos, testimonials } from "@/data/testimonials";
import { servicesDetail, servicesOverview } from "@/data/services";
import { whyChooseUs } from "@/data/whyUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAP Consulting & Managed Services – India & Middle East",
  description:
    "Certified SAP consultants, 24/7 support, and a global delivery model for implementation, AMS, and S/4HANA migration.",
};

const serviceMediaById = Object.fromEntries(
  servicesDetail.map((s) => [s.id, s.media]),
);

export default function HomePage() {
  return (
    <>
      <section
        aria-label="Hero"
        className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-white"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(29,78,216,0.12),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-wider text-blue-700">
            Enterprise SAP advisory
          </p>
          <h1 className="animate-fade-up animate-delay-100 font-heading mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
            SAP Consulting &amp; Managed Services – India &amp; Middle East
          </h1>
          <p className="animate-fade-up animate-delay-200 mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Partner with certified SAP consultants for implementation, AMS, and
            upgrade programmes. 24/7 support options and a proven global
            delivery model spanning India offshore excellence and Middle East
            onsite leadership.
          </p>
          <div className="animate-fade-up animate-delay-300 mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Request Free Consultation</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section
        id="services"
        title="Services overview"
        subtitle="End-to-end SAP capabilities aligned to your roadmap—from first deployment through long-term managed services."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {servicesOverview.map((s) => {
            const Icon = s.icon;
            const media = serviceMediaById[s.id];
            return (
              <Card key={s.id} className="overflow-hidden p-0">
                <div className="relative aspect-[16/10] w-full shrink-0">
                  <Image
                    src={media.imageSrc}
                    alt={media.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700/10 text-blue-800">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-heading mt-4 text-lg font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {s.description}
                  </p>
                  <Link
                    href={s.href}
                    className="mt-4 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800"
                  >
                    Learn more →
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section
        muted
        title="Industries served"
        subtitle="Deep experience in asset-heavy and consumer-driven sectors across India and the GCC."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <Card key={ind.id}>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-200/80 text-slate-800">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-slate-900">
                      {ind.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {ind.description}
                    </p>
                    <Link
                      href={`/industries#${ind.id}`}
                      className="mt-3 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800"
                    >
                      View use cases →
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section
        title="Why choose us"
        subtitle="Governance, certifications, and SLAs designed for enterprise expectations."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {whyChooseUs.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-800">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-heading mt-4 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section
        muted
        title="Trusted by leading enterprises"
        subtitle="Placeholder client references for demo purposes—replace with your approved logo wall."
      >
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {clientLogos.map((name) => (
            <div
              key={name}
              className="flex h-14 min-w-[140px] items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500 shadow-sm"
            >
              {name}
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Card key={i} hover={false}>
              <p className="text-sm leading-relaxed text-slate-700">
                “{t.quote}”
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-900">
                {t.author}
              </p>
              <p className="text-xs text-slate-500">
                {t.role}, {t.company}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
