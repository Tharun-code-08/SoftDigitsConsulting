import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Soft Digits Consulting | SAP Consulting India & Middle East",
    template: "%s | Soft Digits Consulting",
  },
  description:
    "Enterprise SAP consulting: implementation, AMS support, and S/4HANA migration for India and the Middle East. Certified consultants, 24/7 coverage, SLA-driven delivery.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Soft Digits Consulting",
    title: "Soft Digits Consulting | SAP Consulting India & Middle East",
    description:
      "SAP implementation, managed services, and upgrade programmes with global delivery from India and the GCC.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-white text-slate-900">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
