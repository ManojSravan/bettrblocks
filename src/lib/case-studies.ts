export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  image: string;
  client: string;
  industry: string;
  services: string[];
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "boombooth",
    title: "BoomBooth Studios",
    description:
      "From Ghost Studio to Go-To Hub: Building BoomBooth Studios' Digital Empire from Scratch.",
    image: "/product-screenshots/boombooth.png",
    client: "BoomBooth Studios",
    industry: "Creative & Podcast Studio",
    services: ["Web Design & Development", "Booking Engine Integration", "Organic Content Strategy"],
    overview:
      "How we built a comprehensive digital ecosystem that turned a quiet, localized recording space into a highly recognized brand name in the podcasting industry.",
    challenge:
      "Despite top-tier studio gear and talent, the brand had zero web presence. They relied entirely on manual scheduling via text and lacked any online discoverability.",
    solution:
      "We engineered an immersive digital flagship showcasing audio/video quality, deployed a fully automated self-service booking system, and built an organic content recycling engine.",
    results: [
      "Built a 100% custom digital blueprint and authority hub.",
      "Launched an automated engine to eliminate booking admin work.",
      "Deployed an omnichannel content funnel using client sessions.",
    ],
  },
  {
    slug: "ojas3d",
    title: "Ojas3D Creatives",
    description:
      "Digitizing Green Tech: Moving an Eco-Friendly 3D Printing Service from Offline Sales to Automated Online Orders.",
    image: "/product-screenshots/ojas3d.png",
    client: "Ojas3D Creatives",
    industry: "Sustainable 3D Printing Services",
    services: ["E-Commerce Architecture", "Product Catalog Design", "Workflow Automation"],
    overview:
      "How we transitioned an eco-friendly 3D printing services business into a streamlined, automated online storefront that scales sustainable additive manufacturing.",
    challenge:
      "High-potential green 3D printing capabilities were limited by offline operations. Gathering print requirements, calculating eco-material choices, and invoicing via WhatsApp created severe manual bottlenecks.",
    solution:
      "We built a high-performance digital portal that simplifies custom dimensions, structures eco-friendly material selection (like biodegradable PLA), and fully automates the order-to-production pipeline.",
    results: [
      "Successfully migrated manual offline intake into a 24/7 automated portal.",
      "Highlighted eco-friendly materials to attract sustainably minded brands and creators.",
      "Removed the founder from manual quoting loops, drastically reducing fulfillment friction.",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
