export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Their SAP S/4HANA programme delivered on time with clear governance and strong offshore–onsite coordination. We saw measurable process efficiency within the first quarter.",
    author: "Placeholder Name",
    role: "Chief Information Officer",
    company: "Global Manufacturing Co.",
  },
  {
    quote:
      "AMS coverage and SLA reporting gave us predictable support costs and faster incident resolution. The team understands both our business and SAP landscape.",
    author: "Placeholder Name",
    role: "IT Director",
    company: "Retail Enterprise",
  },
];

export const clientLogos = [
  "Manufacturing Partner",
  "Retail Group",
  "Technology Partner",
  "Logistics One",
  "Industrial Holdings",
  "GCC Enterprise",
] as const;
