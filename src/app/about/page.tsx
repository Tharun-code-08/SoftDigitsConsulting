import { CTABanner } from "@/components/CTABanner";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import type { Metadata } from "next";
import { Target, Eye, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Soft Digits Consulting—SAP-certified consultants, global delivery from India and the Middle East, mission-driven enterprise programmes.",
};

export default function AboutPage() {
  return (
    <>
      <section
        aria-label="Intro"
        className="border-b border-slate-200 bg-slate-50 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-slate-900">
            About us
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            We help enterprises in India and the Middle East run, modernise, and
            scale SAP—with disciplined programme governance and long-term
            partnership.
          </p>
        </div>
      </section>

      <Section title="Company overview">
        <div className="prose prose-slate max-w-none">
          <p className="text-base leading-relaxed text-slate-600">
            Soft Digits Consulting is a specialist consulting firm focused on SAP
            implementation, managed services, and migration programmes. Our
            teams combine functional depth, technical rigour, and industry
            context so that SAP investments translate into measurable business
            outcomes—not just go-live milestones.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <Card>
            <p className="font-heading text-3xl font-bold text-blue-800">15+</p>
            <p className="mt-1 text-sm font-medium text-slate-900">
              Years collective leadership experience
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Placeholder statistic for demo—replace with your verified tenure.
            </p>
          </Card>
          <Card>
            <p className="font-heading text-3xl font-bold text-blue-800">120+</p>
            <p className="mt-1 text-sm font-medium text-slate-900">
              SAP-certified consultants
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Across functional, technical, basis, and cloud skill sets.
            </p>
          </Card>
          <Card>
            <p className="font-heading text-3xl font-bold text-blue-800">24/7</p>
            <p className="mt-1 text-sm font-medium text-slate-900">
              Support coverage options
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Follow-the-sun models for AMS and critical cutover windows.
            </p>
          </Card>
        </div>
      </Section>

      <Section muted title="Mission & vision">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700/10 text-blue-800">
              <Target className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="font-heading mt-4 text-lg font-semibold text-slate-900">
              Mission
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Deliver enterprise-grade SAP programmes with transparent
              governance, transfer of ownership to our clients, and respect for
              regional compliance and cultural nuance across India and the GCC.
            </p>
          </Card>
          <Card>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700/10 text-blue-800">
              <Eye className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="font-heading mt-4 text-lg font-semibold text-slate-900">
              Vision
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Be the most trusted SAP advisory partner for complex, multi-country
              transformations—known for quality, predictability, and enduring
              client relationships.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Global delivery model">
        <Card hover={false} className="max-w-4xl">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-800">
              <Users className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <p className="text-base leading-relaxed text-slate-600">
                We operate a blended <strong className="text-slate-900">India</strong>{" "}
                offshore delivery centre for scale, quality, and cost efficiency,
                complemented by{" "}
                <strong className="text-slate-900">Middle East</strong> onsite
                leadership for steering committees, workshops, and hypercare.
                This hybrid model is designed for enterprises that need both
                velocity and face-to-face governance.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Engagement models include fixed-scope implementations,
                time-and-materials AMS, and outcome-oriented migration
                programmes—always with clear SLAs and reporting cadence.
              </p>
            </div>
          </div>
        </Card>
      </Section>

      <CTABanner />
    </>
  );
}
