"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav";
import { ButtonLink } from "@/components/ButtonLink";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-md"
          aria-label="Soft Digits Consulting — Home"
        >
          <Image
            src="/logo-soft-digits.png"
            alt=""
            width={80}
            height={80}
            className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 object-contain"
            priority
          />
          <span className="font-heading border-l border-slate-200 pl-2.5 text-sm font-semibold tracking-tight sm:pl-3 sm:text-base">
            <span className="text-slate-900">Soft Digits </span>
            <span className="text-blue-800">Consulting</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-slate-100 text-blue-800"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href="/contact" variant="secondary" className="!px-4 !py-2">
            Contact Us
          </ButtonLink>
          <ButtonLink href="/contact" className="!px-4 !py-2">
            Free Consultation
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">
              <ButtonLink href="/contact" variant="secondary" onClick={() => setOpen(false)}>
                Contact Us
              </ButtonLink>
              <ButtonLink
                href="/contact"
                onClick={() => setOpen(false)}
              >
                Request Free Consultation
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
