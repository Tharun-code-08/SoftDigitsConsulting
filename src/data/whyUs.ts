import { Award, Globe2, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type WhyUsItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyChooseUs: WhyUsItem[] = [
  {
    title: "Certified consultants",
    description:
      "SAP-certified functional, technical, and basis specialists with experience across S/4HANA, ECC, and cloud extensions.",
    icon: Award,
  },
  {
    title: "Proven delivery experience",
    description:
      "Structured methodologies, transparent RAID governance, and executive reporting tailored to complex programmes.",
    icon: ShieldCheck,
  },
  {
    title: "SLA-driven global model",
    description:
      "India offshore excellence plus Middle East onsite leadership—aligned to your time zones and compliance needs.",
    icon: Globe2,
  },
];
