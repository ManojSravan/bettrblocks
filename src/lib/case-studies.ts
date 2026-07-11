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
    slug: "communn",
    title: "Communn.io",
    description:
      "A community platform built for creators to connect, collaborate, and grow their audience with a polished, scalable web experience.",
    image: "/product-screenshots/communn.png",
    client: "Communn.io",
    industry: "Community & SaaS",
    services: ["Product Design", "Web Development", "Platform Engineering"],
    overview:
      "Communn.io needed a digital home that felt as vibrant as the communities it serves — fast, intuitive, and ready to scale as membership grows.",
    challenge:
      "The team had strong product vision but needed a cohesive frontend experience that could handle real-time engagement features without sacrificing performance or brand polish.",
    solution:
      "We designed and built a responsive platform with clear information architecture, modular UI components, and performance-first patterns that keep interactions smooth across devices.",
    results: [
      "Launch-ready platform with a premium, creator-first feel",
      "Scalable component system for rapid feature iteration",
      "Improved onboarding clarity and engagement flows",
    ],
  },
  {
    slug: "illumora",
    title: "Illumora",
    description:
      "A refined brand and product experience for Illumora, focused on clarity, trust, and conversion across their customer journey.",
    image: "/product-screenshots/illumora.png",
    client: "Illumora",
    industry: "D2C & Brand Experience",
    services: ["Brand Experience", "Ecommerce UX", "Frontend Development"],
    overview:
      "Illumora wanted a digital presence that matched the quality of their offering — one that builds trust quickly and guides visitors toward meaningful action.",
    challenge:
      "Their previous experience lacked visual consistency and did not communicate value clearly enough for new visitors arriving from paid and organic channels.",
    solution:
      "We rebuilt key customer-facing surfaces with a conversion-focused layout, strong typography hierarchy, and imagery that reinforces brand credibility at every step.",
    results: [
      "More cohesive brand storytelling across the site",
      "Clearer path from discovery to purchase",
      "Modern UI foundation ready for future campaigns",
    ],
  },
  {
    slug: "boombooth",
    title: "BoomBooth Studios",
    description:
      "An immersive studio website that showcases BoomBooth's creative work and makes booking inquiries effortless.",
    image: "/product-screenshots/boombooth.png",
    client: "BoomBooth Studios",
    industry: "Creative Studio",
    services: ["Web Design", "Showcase Experience", "Lead Capture"],
    overview:
      "BoomBooth Studios needed a site that feels as bold as their productions while staying practical for prospects exploring services and reaching out.",
    challenge:
      "The studio's work is visually rich, but their old site did not present projects with enough impact or guide visitors toward inquiry.",
    solution:
      "We crafted a showcase-led experience with strong visual rhythm, project highlights, and strategically placed calls to action that reduce friction for new leads.",
    results: [
      "Portfolio-first layout that elevates studio work",
      "Streamlined inquiry flow for prospective clients",
      "Distinct brand presence that stands out in a crowded market",
    ],
  },
  {
    slug: "chordai",
    title: "ChordAI",
    description:
      "A product landing experience for ChordAI that communicates innovation clearly and supports user acquisition.",
    image: "/product-screenshots/chordai.png",
    client: "ChordAI",
    industry: "AI & Music Tech",
    services: ["Landing Page Design", "Product Marketing UX", "Development"],
    overview:
      "ChordAI needed a launch-ready web experience that explains a complex product simply and motivates early adopters to try the platform.",
    challenge:
      "Translating advanced AI capabilities into a message that feels approachable, credible, and exciting for musicians and creators.",
    solution:
      "We structured the page around outcome-driven messaging, intuitive feature sections, and visual cues that make the product value obvious within seconds.",
    results: [
      "Clearer product narrative for first-time visitors",
      "Stronger visual identity around the ChordAI brand",
      "Flexible page structure for ongoing feature launches",
    ],
  },
  {
    slug: "ojas3d",
    title: "Ojas3D Creatives",
    description:
      "A premium portfolio experience for Ojas3D Creatives, designed to highlight craftsmanship and drive project inquiries.",
    image: "/product-screenshots/ojas3d.png",
    client: "Ojas3D Creatives",
    industry: "3D & Visual Production",
    services: ["Portfolio Design", "Visual Storytelling", "Web Development"],
    overview:
      "Ojas3D Creatives wanted a digital portfolio that reflects the detail and quality of their 3D work while making it easy for clients to get in touch.",
    challenge:
      "High-fidelity creative work can be hard to present online without losing impact or slowing down the browsing experience.",
    solution:
      "We built a lightweight, image-forward portfolio with thoughtful spacing, smooth transitions, and contact paths tailored for agency and brand leads.",
    results: [
      "Portfolio presentation that does justice to 3D work",
      "Improved clarity around services and capabilities",
      "Professional site experience that supports new business",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
