export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "sap-s4hana-migration-guide",
    title: "SAP S/4HANA Migration Guide",
    excerpt:
      "A practical overview of paths to S/4HANA, readiness checks, and how to de-risk cutover for India and Middle East operations.",
    date: "2026-03-15",
    readTime: "8 min read",
    body: [
      "Migrating from SAP ECC to S/4HANA is one of the most significant programmes many enterprises undertake. Success depends on clear scope, a realistic timeline, and strong alignment between business, IT, and your SI partner.",
      "Assessment and fit-gap: Start with a structured fit-gap workshop across finance, supply chain, and industry-specific processes. Document custom code, interfaces, and data retention needs early.",
      "Choose your path: Greenfield, brownfield, and selective data transition each trade speed against transformation depth. Hybrid approaches are common for regional rollouts spanning India and the GCC.",
      "Testing and cutover: Invest in regression packs, performance tests, and dry-run cutovers. Define rollback criteria and communication plans for stakeholders across time zones.",
      "This article is a placeholder for demo purposes. Replace with your firm’s methodology, credentials, and regional compliance notes.",
    ],
  },
  {
    slug: "benefits-of-sap-ams",
    title: "Benefits of SAP AMS",
    excerpt:
      "Why application management services reduce TCO, improve stability, and free internal teams to focus on innovation.",
    date: "2026-02-22",
    readTime: "6 min read",
    body: [
      "Application Management Services (AMS) provide ongoing support, enhancements, and monitoring for your SAP landscape after go-live.",
      "Predictable operations: SLA-driven ticketing, root-cause analysis, and capacity planning help stabilise run costs and avoid surprise outages.",
      "Skills on demand: L1/L2/L3 models let you scale SAP expertise without maintaining a large permanent bench—especially valuable for regional hubs.",
      "Continuous improvement: A good AMS partner tracks trends, recommends patches and notes, and supports minor projects alongside break-fix work.",
      "Placeholder content for demonstration. Tailor with your service catalogue, tools, and case references.",
    ],
  },
  {
    slug: "sap-implementation-cost-india",
    title: "SAP Implementation Cost in India",
    excerpt:
      "Factors that influence SAP implementation budgets in India: scope, deployment model, integrations, and governance.",
    date: "2026-01-10",
    readTime: "7 min read",
    body: [
      "Implementation cost varies widely by modules, user count, customisation level, and whether you deploy on-premise, private cloud, or RISE with SAP.",
      "Scope drivers: Number of legal entities, localisations (GST, statutory reporting), and industry add-ons (e.g. retail, manufacturing) materially affect effort.",
      "Delivery model: Blended offshore–onsite teams from India often improve rate competitiveness while keeping governance onsite in the Middle East or HQ locations.",
      "Hidden work: Data migration, organisational change management, and hypercare are frequently under-scoped—budget explicitly for them.",
      "Demo placeholder only; engage your sales team for indicative ranges and structured discovery.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
