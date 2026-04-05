import { ContactForm } from "@/components/ContactForm";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
  CONTACT_WHATSAPP_DISPLAY,
  contactWhatsAppUrl,
} from "@/data/contact";
import type { Metadata } from "next";
import { MapPin, MessageCircle, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free SAP consultation. Contact Soft Digits Consulting for implementation, AMS, and migration programmes in India and the Middle East.",
};

export default function ContactPage() {
  return (
    <>
      <section
        aria-label="Intro"
        className="border-b border-slate-200 bg-slate-50 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-slate-900">
            Contact us
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Request a free consultation for SAP implementation, AMS, or
            S/4HANA migration. Share your context and we will respond with next
            steps.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#consultation-form">Request Free Consultation</ButtonLink>
            <ButtonLink href={contactWhatsAppUrl} variant="secondary" className="gap-2" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2 space-y-6">
            <Card hover={false}>
              <h2 className="font-heading text-lg font-semibold text-slate-900">
                Direct contact
              </h2>
              <ul className="mt-4 space-y-4 text-sm text-slate-600">
                <li className="flex gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-blue-700"
                    aria-hidden
                  />
                  <div>
                    <p className="font-medium text-slate-900">India (Chennai)</p>
                    <address className="not-italic mt-1 leading-relaxed text-slate-600">
                      Gandhi Nagar, Adyar
                      <br />
                      Chennai – 600020
                    </address>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden />
                  <div>
                    <p className="font-medium text-slate-900">Email</p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="hover:text-blue-700"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden />
                  <div>
                    <p className="font-medium text-slate-900">Phone</p>
                    <a
                      href={`tel:${CONTACT_PHONE_E164}`}
                      className="hover:text-blue-700"
                    >
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MessageCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-blue-700"
                    aria-hidden
                  />
                  <div>
                    <p className="font-medium text-slate-900">WhatsApp</p>
                    <a
                      href={contactWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-700"
                    >
                      {CONTACT_WHATSAPP_DISPLAY}
                    </a>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
          <div className="lg:col-span-3" id="consultation-form">
            <Card hover={false}>
              <h2 className="font-heading text-lg font-semibold text-slate-900">
                Request free consultation
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                All fields are required.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
