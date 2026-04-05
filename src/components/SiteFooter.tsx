import Link from "next/link";
import { navLinks } from "@/data/nav";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
  contactWhatsAppUrl,
} from "@/data/contact";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-heading text-base font-semibold text-slate-900">
              Soft Digits Consulting
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              SAP implementation, AMS, and migration services for enterprises in
              India and the Middle East.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Navigate</p>
            <ul className="mt-3 space-y-2">
              {navLinks.slice(0, 5).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-600 hover:text-blue-700"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">More</p>
            <ul className="mt-3 space-y-2">
              {navLinks.slice(5).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-600 hover:text-blue-700"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/regions"
              className="mt-3 inline-block text-sm font-medium text-blue-700 hover:text-blue-800"
            >
              India &amp; GCC delivery →
            </Link>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Contact</p>
            <address className="not-italic mt-3 text-sm leading-relaxed text-slate-600">
              77/44, 2nd Main
              <br />
              Gandhi Nagar, Adyar
              <br />
              Chennai – 600020
            </address>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-blue-700"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_PHONE_E164}`} className="hover:text-blue-700">
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={contactWhatsAppUrl}
                  className="hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Soft Digits Consulting.</p>
          <p>Privacy · softdigits</p>
        </div>
      </div>
    </footer>
  );
}
