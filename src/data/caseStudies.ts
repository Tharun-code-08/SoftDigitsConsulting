export type CaseStudy = {
  id: string;
  title: string;
  segment: string;
  problem: string;
  solution: string;
  results: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "s4-greenfield",
    title: "SAP S/4HANA Greenfield for a Manufacturing Group",
    segment: "Manufacturing · India",
    problem:
      "Legacy siloed ERPs and spreadsheets caused inventory mismatches, delayed month-end close, and limited scalability for new plants.",
    solution:
      "A template-based S/4HANA greenfield with integrated PP, MM, SD, and FICO; master data governance; phased plant rollout with India offshore delivery and onsite steering.",
    results: [
      "Illustrative: 22% reduction in month-end close cycle time",
      "Illustrative: 15% inventory carrying cost improvement YoY",
      "Single source of truth across 4 plants within 14 months",
    ],
  },
  {
    id: "ecc-s4-migration",
    title: "ECC to S/4HANA Migration for a Regional Retailer",
    segment: "Retail · Middle East",
    problem:
      "End-of-maintenance risk on ECC, performance issues during peak season, and inability to leverage modern analytics and cloud BTP services.",
    solution:
      "Brownfield migration with custom code remediation, data volume reduction, and parallel regression testing; cutover during low-traffic window with hypercare in UAE time zone.",
    results: [
      "Illustrative: 30% faster financial reporting refresh post go-live",
      "Illustrative: 40% reduction in critical incidents vs. pre-migration baseline (12 weeks)",
      "Platform ready for cloud analytics extensions",
    ],
  },
  {
    id: "ams-scale",
    title: "Global AMS Scale-Up for a Logistics Operator",
    segment: "Logistics · India + GCC",
    problem:
      "Inconsistent support quality across regions, rising contractor costs, and poor visibility into backlog and root causes.",
    solution:
      "Consolidated AMS with unified ticketing, L1/L2/L3 model, monthly service reviews, and proactive monitoring for interfaces and batch jobs.",
    results: [
      "Illustrative: 18% lower annual run cost vs. prior blended contractor model",
      "Illustrative: 99.2% SLA adherence on agreed priority classes",
      "Executive dashboard for incident trends and change calendar",
    ],
  },
];
