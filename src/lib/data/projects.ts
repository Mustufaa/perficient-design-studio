export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  overview: string;
  status?: string;
  plotArea?: string;
  builtUpArea?: string;
  style?: string;
  seatingCapacity?: string;
  tagline?: string;
  images: string[];
  details: string[];
  keyFeatures: string[];
  steps?: string[];
};

export const projects: Project[] = [
  {
    slug: "residence-amar-yadav",
    title: "Residence for Mr. Amar Yadav",
    location: "Pant Nagar, Gonda, Uttar Pradesh",
    category: "Residential",
    plotArea: "Approx. as per PDF",
    builtUpArea: "~9,200 sq.ft",
    status: "Proposed",
    overview:
      "A timeless residential project designed with a balance of classical elegance and modern comfort. The architecture focuses on symmetry, spacious balconies, grand entrance detailing, and luxurious living spaces that create a refined and welcoming environment.",
    images: [
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    ],
    details: [
      "Grand symmetrical facade with classical architectural elements",
      "Large arched openings for natural light and ventilation",
      "Elegant balconies with decorative railings",
      "Spacious interiors with functional planning",
      "Private garden and landscape enhancing the overall ambience",
    ],
    keyFeatures: [
      "Grand symmetrical facade with classical architectural elements",
      "Large arched openings for natural light and ventilation",
      "Elegant balconies with decorative railings",
      "Spacious interiors with functional planning",
      "Private garden and landscape enhancing the overall ambience",
    ],
  },
  {
    slug: "residence-javed-gomtinagar",
    title: "Proposed Residence for Mr. Javed",
    location: "Vijay Khand, Gomti Nagar, Lucknow",
    category: "Residential",
    plotArea: "~9,400 sq.ft",
    builtUpArea: "~5,400 sq.ft",
    style: "Contemporary Modern",
    status: "Under construction, 2024–25",
    overview:
      "A contemporary residence designed with a modern architectural language, blending aesthetics, functionality, and sustainability to create a luxurious yet comfortable living experience.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    ],
    details: [
      "Modern Architectural Facade",
      "Double Height Entrance",
      "Vertical Greenery",
      "Natural Light & Ventilation",
      "Premium Material Selection",
    ],
    keyFeatures: [
      "Modern Architectural Facade (bold geometric composition, premium facade treatment)",
      "Double Height Entrance (enhancing openness, luxury, visual scale)",
      "Vertical Greenery (green walls & planter systems for aesthetics + thermal comfort)",
      "Natural Light & Ventilation (large glass openings, open planning)",
      "Premium Material Selection (wood finish, textured surfaces, glass, metal detailing)",
    ],
  },
  {
    slug: "the-chocolate-room-cafe",
    title: "The Chocolate Room (Bakery & Café)",
    location: "Lajpat Nagar, Kanpur",
    category: "Commercial / Hospitality",
    seatingCapacity: "28–36 people",
    overview:
      "The Chocolate Room project was developed as a premium bakery and café experience focused on creating a visually engaging, warm, and luxurious ambience.",
    images: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
    ],
    details: [
      "Warm and welcoming",
      "Instagram-worthy and visually engaging",
      "Modern yet soft and elegant",
      "Functional for both customers and staff",
      "Strong brand identity",
    ],
    keyFeatures: [
      "Premium hospitality design language",
      "Modern luxury café ambience",
      "Strong brand-oriented interior identity",
      "Elegant facade with statement architectural elements",
      "Warm and visually engaging lighting design",
    ],
  },
  {
    slug: "kiosk-mr-sandwich-eva-bags",
    title: "Kiosk Design & Execution: Mr. Sandwich & EVA Bags",
    location: "Lulu Mall, Lucknow, Uttar Pradesh",
    category: "Retail & Food Kiosk",
    builtUpArea: "120–160 sq.ft each",
    status: "Completed 2024–25",
    tagline: "Compact Spaces. Strong Impact.",
    overview:
      "A modern kiosk design and execution project developed for retail and food brands within a commercial shopping environment.",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    ],
    details: [
      "Illuminated Signage",
      "Pendant Lighting",
      "Display Shelving",
      "Premium Counter Finish",
    ],
    keyFeatures: [
      "Illuminated Signage (high-visibility branding)",
      "Pendant Lighting (decorative ambience)",
      "Display Shelving (integrated, improves merchandising)",
      "Premium Counter Finish (durable, elegant, commercial-grade)",
    ],
    steps: ["Concept", "Design", "Execution"],
  },
  {
    slug: "marriage-hall-sultanpur",
    title: "Proposed Marriage Hall for Mr. A.K. Sinha",
    location: "Sultanpur, Uttar Pradesh",
    category: "Hospitality / Event Space",
    plotArea: "~1.25 Acres",
    builtUpArea: "~28,500 sq.ft",
    status: "Proposed Year 2024",
    overview:
      "A timeless celebration space designed with elegance, comfort, and functionality in mind. The architecture reflects classical proportions, premium detailing, and a welcoming ambience for unforgettable moments and grand social gatherings.",
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    ],
    details: [
      "Grand and elegant architectural design",
      "Ample natural light",
      "Premium materials and finest detailing",
      "Well-planned spaces with spacious circulation",
      "Safe, comfortable, and accessible planning",
    ],
    keyFeatures: [
      "Timeless Elegance",
      "Grand columns and arched openings",
      "Premium materials and finest detailing",
      "Well-planned circulation and guest comfort",
      "Landscaped surroundings for pleasant ambience",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
