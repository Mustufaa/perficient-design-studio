export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  owner: string;
  review: string;
  overview: string;
  status?: string;
  completionDate?: string;
  clientDetails?: string;
  designHighlights?: string[];
  materialsUsed?: string[];
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
    title: "Residential Project",
    location: "Gonda, Uttar Pradesh",
    category: "Residential",
    owner: "Private Client",
    review: "A calm, elegant residence concept focused on comfort, natural light, and strong courtyard planning.",
    designHighlights: [
      "Symmetrical facade composition with elegant classical detailing",
      "Grand entrance experience with framed openings and landscaped frontage",
      "Functional family planning with spacious circulation and natural light",
    ],
    materialsUsed: ["Stone cladding", "Warm wood textures", "Brass accents", "Premium glazing"],
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
    title: "Modern Residential Project",
    location: "Lucknow, Uttar Pradesh",
    category: "Residential",
    owner: "Private Client",
    review: "A refined contemporary home with warm detailing, clean lines, and a premium lifestyle feel.",
    style: "Contemporary Modern",
    clientDetails: "Private family residence",
    designHighlights: [
      "Contemporary modern façade with a strong geometric rhythm",
      "Double-height entrance creating an inviting luxury arrival",
      "Vertical greenery and sustainable material approach",
    ],
    materialsUsed: ["Glass", "Textured plaster", "Wood cladding", "Natural stone"],
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
    location: "Kanpur, Uttar Pradesh",
    category: "Commercial / Hospitality",
    owner: "The Chocolate Room",
    review: "A warm hospitality setting with brand-forward styling, plush finish palette, and strong visual recall.",
    seatingCapacity: "28–36 people",
    completionDate: "Completed in 2024",
    clientDetails: "Hospitality brand client",
    designHighlights: [
      "Warm premium hospitality ambience with patient circulation planning",
      "Instagram-friendly interior styling with rich material layering",
      "Brand-led seating and display planning for customer engagement",
    ],
    materialsUsed: ["Leatherette upholstery", "Walnut finish", "Decorative lighting", "Textured wall finishes"],
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
    location: "Lucknow, Uttar Pradesh",
    category: "Retail & Food Kiosk",
    owner: "Mr. Sandwich & EVA Bags",
    review: "A compact commercial format that communicates visibility, product focus, and strong brand presence.",
    builtUpArea: "120–160 sq.ft each",
    status: "Completed 2024–25",
    completionDate: "Completed in 2025",
    clientDetails: "Retail & food kiosk client",
    designHighlights: [
      "High-visibility branding through illuminated signage",
      "Compact operational planning with premium counter detailing",
      "Efficient product display and customer-friendly circulation",
    ],
    materialsUsed: ["Metal cladding", "LED signage", "Acrylic finishes", "Premium laminate surfaces"],
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
    title: "Proposed Marriage Hall",
    location: "Sultanpur, Uttar Pradesh",
    category: "Hospitality / Event Space",
    owner: "Private Client",
    review: "A grand event venue concept with elegant proportions, high comfort, and memorable guest experience.",
    plotArea: "~1.25 Acres",
    builtUpArea: "~28,500 sq.ft",
    status: "Proposed Year 2024",
    completionDate: "Conceptual stage",
    clientDetails: "Private event venue client",
    designHighlights: [
      "Grand guest arrival with ceremonial scale and elegant proportions",
      "Comfort-led planning for large gatherings and smooth circulation",
      "Premium material language suited for high-visibility events",
    ],
    materialsUsed: ["Stone veneer", "Premium metalwork", "Decorative lighting", "Landscape elements"],
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
  {
    slug: "villa-heritage-portfolio",
    title: "Luxury Residential Project",
    location: "Lucknow, Uttar Pradesh",
    category: "Luxury Residential",
    owner: "Private Client",
    review: "A premium villa design concept centered on privacy, warm luxury, and expressive architectural identity.",
    plotArea: "~8,500 sq.ft",
    builtUpArea: "~6,200 sq.ft",
    status: "Concept Stage",
    completionDate: "Concept presentation stage",
    clientDetails: "Private villa client",
    designHighlights: [
      "Private courtyard concept ensuring tranquility and privacy",
      "Refined material palette with a timeless luxury aesthetic",
      "Lifestyle-friendly interior planning with seamless indoor-outdoor flow",
    ],
    materialsUsed: ["Travertine", "Oak wood", "Soft neutral stone", "Ambient layered lighting"],
    overview:
      "A private villa project developed around luxury living, elegant spatial flow, and a calm material palette that balances exclusivity with everyday comfort.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
    details: [
      "Private courtyard planning",
      "Luxury residence with layered material palette",
      "Indoor-outdoor spatial continuity",
      "Elegant feature lighting and textures",
      "Lifestyle-focused room arrangement",
    ],
    keyFeatures: [
      "Private courtyard planning",
      "Luxury residence with layered material palette",
      "Indoor-outdoor spatial continuity",
      "Elegant feature lighting and textures",
      "Lifestyle-focused room arrangement",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
