export const RATES = {
  turnkey: { standard: 1550, premium: 1950, luxury: 2650 },
  interior: { standard: 1250, premium: 1650, luxury: 2350 },
  architecture: { standard: 45, premium: 65, luxury: 85 },
} as const;

export const pricingRows = [
  { category: "Architecture Design", packageTier: "Standard", rate: "₹ 45 / sq.ft" },
  { category: "Architecture Design", packageTier: "Premium", rate: "₹ 65 / sq.ft" },
  { category: "Architecture Design", packageTier: "Luxury", rate: "₹ 85 / sq.ft" },
  { category: "Interior Design & Execution", packageTier: "Standard", rate: "₹ 1,250 / sq.ft" },
  { category: "Interior Design & Execution", packageTier: "Premium", rate: "₹ 1,650 / sq.ft" },
  { category: "Interior Design & Execution", packageTier: "Luxury", rate: "₹ 2,350 / sq.ft" },
  { category: "Turnkey Construction", packageTier: "Standard", rate: "₹ 1,550 / sq.ft" },
  { category: "Turnkey Construction", packageTier: "Premium", rate: "₹ 1,950 / sq.ft" },
  { category: "Turnkey Construction", packageTier: "Luxury", rate: "₹ 2,650 / sq.ft" },
];
