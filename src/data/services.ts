import type { LucideIcon } from "lucide-react";
import { Cog, HeadphonesIcon, Rocket } from "lucide-react";

export type ServiceMedia = {
  imageSrc: string;
  imageAlt: string;
  /** Official SAP / industry YouTube video ID for embed (demo). */
  videoYoutubeId: string;
  videoTitle: string;
};

export type ServiceDetail = {
  id: string;
  title: string;
  shortDescription: string;
  icon: LucideIcon;
  description: string;
  steps: string[];
  benefits: string[];
  caseExample: string;
  media: ServiceMedia;
};

export const servicesOverview = [
  {
    id: "implementation",
    title: "SAP Implementation",
    description:
      "End-to-end deployment from blueprint to go-live with process design, integration, and hypercare.",
    href: "/services#implementation",
    icon: Cog,
  },
  {
    id: "ams",
    title: "SAP Support (AMS)",
    description:
      "L1–L3 support, proactive monitoring, and SLA-based application management for stable operations.",
    href: "/services#ams",
    icon: HeadphonesIcon,
  },
  {
    id: "upgrade",
    title: "Upgrade & Migration",
    description:
      "ECC to S/4HANA, cloud migration, and technical upgrades with rigorous testing and cutover planning.",
    href: "/services#upgrade",
    icon: Rocket,
  },
] as const;

export const servicesDetail: ServiceDetail[] = [
  {
    id: "implementation",
    title: "SAP Implementation",
    shortDescription:
      "Blueprint-to-go-live programmes with process mapping, configuration, and data migration.",
    icon: Cog,
    description:
      "We deliver structured SAP implementations aligned to your operating model—whether greenfield, template rollout, or regional expansion across India and the Middle East. Our teams combine certified consultants with industry playbooks to accelerate design decisions and reduce rework.",
    steps: [
      "Discover & plan — scope, roadmap, and governance setup",
      "Fit-gap & blueprint — process design, integrations, and security",
      "Build & unit test — configuration, developments, data cleansing",
      "Integration & UAT — end-to-end scenarios and sign-off",
      "Cutover & hypercare — go-live, stabilisation, and handover to AMS",
    ],
    benefits: [
      "Single programme office with clear milestones and RAID tracking",
      "Strong focus on master data and migration quality",
      "Knowledge transfer and documentation for long-term ownership",
      "Optional offshore–onsite blend for cost and coverage",
    ],
    caseExample:
      "A discrete manufacturing group in India rolled out SAP S/4HANA across plants with integrated PP, MM, and SD—go-live achieved in a single weekend with zero critical P1 issues in week one (illustrative demo scenario).",
    media: {
      imageSrc:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&h=788&fit=crop&q=80",
      imageAlt:
        "Consulting team collaborating on enterprise software implementation planning",
      videoYoutubeId: "5knZbOuyiFA",
      videoTitle: "SAP — S/4HANA finance and process overview (reference)",
    },
  },
  {
    id: "ams",
    title: "SAP Support (AMS)",
    shortDescription:
      "24/7 monitoring and SLA-based L1/L2/L3 support for stable, predictable SAP operations.",
    icon: HeadphonesIcon,
    description:
      "Our Application Management Services keep your SAP landscape healthy after go-live. We provide incident, problem, and change management with transparent SLAs—ideal for organisations that need regional coverage across IST and Gulf time zones.",
    steps: [
      "Service catalogue & SLAs — agree priorities, response times, and reporting",
      "Transition — runbook takeover, tooling access, and knowledge capture",
      "Steady-state — ticketing, monitoring, patching coordination",
      "Continuous improvement — minor enhancements and optimisation backlog",
    ],
    benefits: [
      "Predictable monthly run cost versus ad-hoc contractor models",
      "Proactive monitoring and trend analysis to prevent outages",
      "Certified consultants for functional and basis/BTP topics",
      "Executive dashboards for SLA and backlog visibility",
    ],
    caseExample:
      "A retail enterprise outsourced L2/L3 SAP support and reduced mean-time-to-resolution by approximately 35% within six months while freeing internal IT for digital initiatives (placeholder metrics for demo).",
    media: {
      imageSrc:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&h=788&fit=crop&q=80",
      imageAlt:
        "Service desk and application monitoring for enterprise IT operations",
      videoYoutubeId: "xiZIKrSvxgg",
      videoTitle: "SAP — S/4HANA Cloud executive update (reference)",
    },
  },
  {
    id: "upgrade",
    title: "SAP Upgrade & Migration",
    shortDescription:
      "ECC to S/4HANA, cloud moves, and technical upgrades with full test and deployment rigour.",
    icon: Rocket,
    description:
      "We help you modernise legacy ECC landscapes, move to S/4HANA, and adopt cloud or hybrid architectures. Our methodology emphasises custom code remediation, data volume management, and cutover rehearsal—critical for regulated and asset-heavy industries.",
    steps: [
      "Readiness assessment — versions, add-ons, and custom inventory",
      "Target architecture — S/4 edition, hosting, and security model",
      "Remediation & build — code fixes, data archiving, sandbox iterations",
      "Validation — regression, performance, and business sign-off",
      "Production migration — cutover, smoke tests, and hypercare",
    ],
    benefits: [
      "Structured de-risking with multiple mock cutovers",
      "Clear documentation for auditors and internal IT",
      "Option for India-based technical factory plus GCC onsite leadership",
      "Post-go-live stabilisation packaged with AMS handover",
    ],
    caseExample:
      "A multi-entity services firm migrated ECC to S/4HANA with selective data transition, retiring redundant Z programs and achieving a consolidated financial close timeline improvement (illustrative narrative).",
    media: {
      imageSrc:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&h=788&fit=crop&q=80",
      imageAlt:
        "Digital connectivity and cloud technology representing system migration",
      videoYoutubeId: "sRRwpi7VtcE",
      videoTitle: "SAP — RISE with SAP and selective data transition (reference)",
    },
  },
];
