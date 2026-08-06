const brands = [
  { name: "Tata Motors", type: "Automotive", logo: "/image-1784577549004.png" },
  { name: "Shree Dev Wheels", type: "Automotive", logo: "/image-1784577908443.png" },
  { name: "Cafe & Bakery Interior", type: "Food & Beverage", logo: "/image-1784576350994.png" },
  { name: "Cafe Food Kiosk", type: "Food & Beverage", logo: "/image-1784576758844.png" },
  { name: "Lakme Salon", type: "Beauty & Lifestyle", logo: "/image-1784577458458.png" },
];

export function TrustedBrands() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-4xl text-center">
        <p className="section-eyebrow">Trusted Brands</p>
        <h2 className="section-title-line mt-3 text-[clamp(28px,3.2vw,44px)]">Trusted by leading brands</h2>
        <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-[var(--color-muted)]">
          Delivering thoughtful architectural and interior solutions for commercial, retail, and hospitality spaces.
        </p>
      </div>

      <div className="mt-8 rounded-[24px] border border-[var(--color-line)] bg-[var(--color-beige)]/70 p-4 sm:p-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {brands.map((brand, idx) => (
            <div key={brand.name} className="rounded-[18px] border border-[var(--color-line)] bg-white/75 px-3 py-4 text-center flex flex-col items-center sm:px-4 sm:py-5">
              {brand.logo ? (
                <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-white p-2 shadow-sm">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={
                      idx === 0 || idx === brands.length - 1
                        ? "max-h-24 max-w-24 object-contain"
                        : "max-h-22 max-w-22 object-contain"
                    }
                  />
                </div>
              ) : (
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-gold)]/10 text-[12px] font-bold text-[var(--color-ink)]">
                  {brand.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </div>
              )}
              <div className="text-[14px] font-semibold text-[var(--color-ink)]">{brand.name}</div>
              <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-[var(--color-gold)]">{brand.type}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
