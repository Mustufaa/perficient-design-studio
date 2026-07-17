import { Compass, Handshake, Target } from "lucide-react";

const items = [
  {
    title: "Our Vision",
    description: "To build a design practice recognized for thoughtful architecture, refined interiors, and professional execution.",
    icon: Compass,
  },
  {
    title: "Our Values",
    description: "Client-focused. We work closely with clients to understand their ideas, needs, and expectations.",
    icon: Handshake,
  },
  {
    title: "Our Mission",
    description: "To create meaningful and functional spaces that balance design, comfort, quality, and long-term value.",
    icon: Target,
  },
];

export function VisionValuesMission() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="card-surface rounded-3xl p-6">
              <div className="mb-4 inline-flex rounded-full border border-[var(--color-line)] p-3 text-[var(--color-gold)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-2xl">{item.title}</h3>
              <p className="text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
