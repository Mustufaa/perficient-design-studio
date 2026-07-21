import Image from "next/image";

export function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-10 text-center">
        <p className="section-eyebrow">The Studio</p>
        <h2 className="font-display text-[clamp(32px,4.6vw,58px)] font-light italic leading-tight text-[var(--color-ink)]">
          An atelier for thoughtful living.
        </h2>
      </div>

      <div className="space-y-10 lg:space-y-16">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="relative h-[320px] overflow-hidden rounded-2xl sm:h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
                alt="Warm architecture facade"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="section-eyebrow">Our Philosophy</span>
            <h3 className="mt-4 font-display text-[clamp(28px,3.4vw,40px)] font-medium italic leading-tight text-[var(--color-ink)]">
              Every space should have a clear purpose.
            </h3>
            <p className="mt-4 max-w-xl text-base leading-8 text-[var(--color-muted)]">
              We believe in strong functionality and a timeless design approach — combining creativity with practical planning to create environments that are comfortable, efficient, and aesthetically balanced.
            </p>
          </div>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">Our Approach</span>
            <h3 className="mt-4 font-display text-[clamp(28px,3.4vw,40px)] font-medium italic leading-tight text-[var(--color-ink)]">
              From concept, to occupancy.
            </h3>
            <p className="mt-4 max-w-xl text-base leading-8 text-[var(--color-muted)]">
              From residential and commercial projects to interior and landscape design, we provide complete design solutions with attention to detail, proper space utilization, and execution support — working closely with clients to transform ideas into well-designed spaces.
            </p>
          </div>

          <div className="relative h-[320px] overflow-hidden rounded-2xl sm:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
              alt="Elegant living room"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
