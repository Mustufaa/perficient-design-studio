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
    slug: "classical-residence",
    title: "Classical Residence",
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
      "/residence-01.jpeg",
      "/residence-02.jpeg",
      "/residence-03.jpeg",
      "/residence-04.jpeg",
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
      "/modern-residential-project-01.jpeg",
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
    slug: "cafe-bakery-interior-design-kanpur",
    title: "Cafe & Bakery Interior Design",
    location: "Kanpur, Uttar Pradesh",
    category: "Cafe Interior Design",
    owner: "Private Cafe Client",
    review: "A warm cafe and bakery design with an inviting facade, premium lighting, efficient service counter, and customer-friendly seating.",
    seatingCapacity: "28-36 people",
    completionDate: "Completed in 2024",
    clientDetails: "Cafe and bakery outlet client",
    designHighlights: [
      "Cafe exterior elevation with strong street visibility and illuminated signage zones",
      "Bakery display counter planning with smooth customer circulation",
      "Instagram-friendly cafe interior styling with warm lighting and floral ceiling accents",
    ],
    materialsUsed: ["Leatherette upholstery", "Walnut finish", "Decorative lighting", "Textured wall finishes"],
    overview:
      "A premium cafe and bakery interior design project planned for a welcoming customer experience, strong frontage visibility, efficient counter movement, and a soft modern ambience suited for coffee, dessert, and casual dining spaces.",
    images: [
      "/cafe-bakery-design-01.jpeg",
      "/cafe-bakery-interior-design-02.jpeg",
    ],
    details: [
      "Cafe interior design with a warm and welcoming customer experience",
      "Bakery counter design with product display and service efficiency",
      "Cafe facade design with strong commercial visibility",
      "Modern cafe seating layout for comfort and smooth circulation",
      "Decorative lighting and floral ceiling details for a premium ambience",
    ],
    keyFeatures: [
      "Premium cafe interior design language",
      "Modern bakery and coffee shop ambience",
      "Commercial cafe facade and elevation design",
      "Efficient counter, display, and seating planning",
      "Warm and visually engaging hospitality lighting design",
    ],
  },
  {
    slug: "cafe-food-kiosk-design-lucknow",
    title: "Cafe Food Kiosk Design",
    location: "Lucknow, Uttar Pradesh",
    category: "Cafe Kiosk Design",
    owner: "Private Food Kiosk Client",
    review: "A compact cafe food kiosk design with high-visibility signage, efficient counter planning, warm lighting, and strong customer flow.",
    builtUpArea: "120-160 sq.ft",
    status: "Completed 2024-25",
    completionDate: "Completed in 2025",
    clientDetails: "Cafe and quick-service food kiosk client",
    designHighlights: [
      "High-visibility cafe kiosk signage for a busy commercial mall setting",
      "Compact food counter planning with display, billing, pickup, and service efficiency",
      "Warm wood, black fascia, pendant lighting, and digital menu display for premium visual recall",
    ],
    materialsUsed: ["Metal cladding", "LED signage", "Wood laminate", "Glass display counter", "Premium laminate surfaces"],
    tagline: "Compact Cafe Kiosk. Strong Commercial Impact.",
    overview:
      "A modern cafe food kiosk design project developed for a quick-service food outlet inside a commercial shopping environment. The design focuses on strong brand visibility, efficient customer movement, premium counter detailing, menu display planning, and a warm cafe-style retail experience.",
    images: [
      "/cafe-food-kiosk-design-01.jpeg",
      "/cafe-food-kiosk-design-02.jpeg",
    ],
    details: [
      "Cafe food kiosk design with illuminated commercial signage",
      "Quick-service counter layout for billing, pickup, and display",
      "Digital menu board planning for food and beverage visibility",
      "Warm pendant lighting and wood finish for a premium cafe ambience",
    ],
    keyFeatures: [
      "Cafe kiosk interior design for commercial malls",
      "Food counter and display planning",
      "High-impact LED signage and fascia design",
      "Efficient quick-service customer circulation",
      "Premium cafe-style material palette",
    ],
    steps: ["Concept", "Design", "Execution"],
  },
  {
    slug: "marriage-hall-sultanpur",
    title: "Commercial Property",
    location: "Sultanpur, Uttar Pradesh",
    category: "Commercial Property",
    owner: "Private Client",
    review: "A grand commercial property concept for a marriage hall with elegant proportions, high comfort, and memorable guest experience.",
    plotArea: "~1.25 Acres",
    builtUpArea: "~28,500 sq.ft",
    status: "Proposed Year 2024",
    completionDate: "Conceptual stage",
    clientDetails: "Commercial property and event venue client",
    designHighlights: [
      "Grand guest arrival with ceremonial scale and elegant proportions",
      "Comfort-led planning for large gatherings and smooth circulation",
      "Premium material language suited for high-visibility commercial property use",
    ],
    materialsUsed: ["Stone veneer", "Premium metalwork", "Decorative lighting", "Landscape elements"],
    overview:
      "A timeless commercial property designed as a marriage hall and event venue with elegance, comfort, and functionality in mind. The architecture reflects classical proportions, premium detailing, and a welcoming ambience for unforgettable moments and grand social gatherings.",
    images: [
      "/commercial-property-marriage-hall-01.png",
    ],
    details: [
      "Grand commercial property architectural design",
      "Ample natural light",
      "Premium materials and finest detailing",
      "Well-planned event spaces with spacious circulation",
      "Safe, comfortable, and accessible commercial planning",
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
      "/luxury-residential-project-01.jpeg",
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
