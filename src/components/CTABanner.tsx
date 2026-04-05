import { ButtonLink } from "@/components/ButtonLink";

export function CTABanner({
  title = "Ready to modernise your SAP landscape?",
  subtitle = "Speak with our consultants about implementation, AMS, or S/4HANA migration tailored to India and the Middle East.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section
      aria-label="Call to action"
      className="border-y border-blue-900/10 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 py-14 text-white"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-slate-300">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink
            href="/contact"
            className="bg-white !text-slate-900 hover:!bg-slate-100 focus-visible:!ring-white"
          >
            Request Free Consultation
          </ButtonLink>
          <ButtonLink
            href="/contact"
            variant="secondary"
            className="!border-white/30 !bg-transparent !text-white hover:!bg-white/10 focus-visible:!ring-white"
          >
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
