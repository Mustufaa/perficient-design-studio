const brands = [
  { name: "Tata Motors", type: "Automotive" },
  { name: "Shree Dev Wheels", type: "Automotive" },
  { name: "The Chocolate Room", type: "Food & Beverage" },
  { name: "Mr. Sandwich", type: "Food & Beverage" },
  { name: "Lakme Salon", type: "Beauty & Lifestyle" },
];

export function TrustedBrands() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl">Trusted By Leading Brands</h2>
        <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-[var(--color-muted)]">
          Delivering thoughtful architectural and interior solutions for commercial, retail, and hospitality spaces.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {brands.map((brand) => (
          <div key={brand.name} className="rounded-full border border-[var(--color-line)] bg-white/50 px-4 py-2 text-sm font-medium text-[var(--color-muted)]">
            {brand.name} <span className="ml-2 text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)]">{brand.type}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
