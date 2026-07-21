import { Eye, Handshake, Goal } from "lucide-react";

const items = [
  {
    title: "Our Vision",
    description:
      "To build a design practice recognized for thoughtful architecture, refined interiors, and professional execution.",
    icon: Eye,
  },
  {
    title: "Our Values",
    description:
      "Client-focused. We work closely with clients to understand their ideas, needs, and expectations.",
    icon: Handshake,
  },
  {
    title: "Our Mission",
    description:
      "To create meaningful and functional spaces that balance design, comfort, quality, and long-term value.",
    icon: Goal,
  },
];

export function VisionValuesMission() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="card-surface rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-gold)]">
                <Icon className="h-7 w-7 stroke-[1.8]" />
              </div>

              <h3 className="mb-3 text-2xl font-serif">
                {item.title}
              </h3>

              <p className="text-sm leading-7 text-[var(--color-muted)]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}