import { Factory, ShoppingCart, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Industry = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  useCases: string[];
};

export const industries: Industry[] = [
  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "From discrete and process manufacturing to engineer-to-order, we align SAP with production planning, quality, and plant maintenance.",
    icon: Factory,
    useCases: [
      "PP, MM, QM, and PM integrated shop-floor processes",
      "Batch management, serialisation, and recall readiness",
      "MES and quality lab integrations",
      "Multi-plant rollouts with India manufacturing hubs",
    ],
  },
  {
    id: "retail",
    title: "Retail",
    description:
      "Omnichannel retail and wholesale with consistent master data, pricing, and fulfilment across stores and e-commerce.",
    icon: ShoppingCart,
    useCases: [
      "SAP Retail / F&R and POS integration patterns",
      "Allocation, replenishment, and promotion management",
      "GST and regional pricing for India operations",
      "GCC store operations with central merchandising",
    ],
  },
  {
    id: "logistics",
    title: "Logistics",
    description:
      "Transportation, warehousing, and end-to-end visibility from procurement to delivery.",
    icon: Truck,
    useCases: [
      "TM, EWM, and yard management for hubs and 3PL",
      "Freight settlement, tracking, and carrier integration",
      "Cross-border customs and documentation workflows",
      "India–GCC corridor logistics and consolidation centres",
    ],
  },
];
