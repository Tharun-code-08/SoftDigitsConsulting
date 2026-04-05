import { CTABanner } from "@/components/CTABanner";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import type { Metadata } from "next";
import { Clock, Globe2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Regions",
  description:
    "SAP consulting presence in India (offshore) and the Middle East—UAE, Saudi Arabia, Qatar—with timezone-aligned support.",
};

const regions = [
  {
    title: "India",
    subtitle: "Offshore delivery centre",
    points: [
      "Scaled SAP factory for build, testing, and AMS",
      "GST, statutory, and localisation expertise",
      "Competitive TCO for global and regional programmes",
    ],
  },
  {
    title: "United Arab Emirates",
    subtitle: "Onsite & hybrid leadership",
    points: [
      "Steering, blueprint workshops, and executive reporting",
      "Hypercare and cutover support aligned to Gulf business hours",
      "Integration with regional cloud and network policies",
    ],
  },
  {
    title: "Saudi Arabia",
    subtitle: "Enterprise & public sector patterns",
    points: [
      "Programme governance for complex stakeholder maps",
      "Local partner ecosystem coordination (placeholder)",
      "Arabic/English documentation options where required",
    ],
  },
  {
    title: "Qatar",
    subtitle: "Project delivery & AMS",
    points: [
      "Rapid mobilisation for upgrade and greenfield workstreams",
      "SLA-based AMS with regional escalation paths",
      "Energy, infrastructure, and services sector experience (demo copy)",
    ],
  },
];

export default function RegionsPage() {
  return (
    <>
      <section
        aria-label="Intro"
        className="border-b border-slate-200 bg-slate-50 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-slate-900">
            Regions
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            India offshore strength with Middle East onsite presence—structured
            for timezone coverage, compliance conversations, and hybrid
            collaboration.
          </p>
        </div>
      </section>

      <Section title="Where we operate">
        <div className="grid gap-6 md:grid-cols-2">
          {regions.map((r) => (
            <Card key={r.title}>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden />
                <div>
                  <h2 className="font-heading text-lg font-semibold text-slate-900">
                    {r.title}
                  </h2>
                  <p className="text-sm text-slate-500">{r.subtitle}</p>
                  <ul className="mt-4 space-y-2">
                    {r.points.map((p, i) => (
                      <li
                        key={i}
                        className="text-sm leading-relaxed text-slate-600 before:mr-2 before:text-blue-600 before:content-['•']"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section muted title="Timezone & delivery model">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-blue-800 shadow-sm ring-1 ring-slate-200">
              <Clock className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="font-heading mt-4 text-lg font-semibold text-slate-900">
              Timezone support
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              AMS and critical incident coverage can span IST through Gulf
              Standard Time—with overlap hours for joint stand-ups and
              leadership reviews. Cutover weekends and month-end peaks are
              staffed explicitly in the runbook.
            </p>
          </Card>
          <Card>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-blue-800 shadow-sm ring-1 ring-slate-200">
              <Globe2 className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="font-heading mt-4 text-lg font-semibold text-slate-900">
              Onsite / offshore mix
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Typical patterns: offshore build and testing from India; onsite
              governance and UAT facilitation in UAE, KSA, or Qatar; hybrid
              workshops using secure collaboration tooling. Exact ratios are
              tailored per programme phase.
            </p>
          </Card>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
