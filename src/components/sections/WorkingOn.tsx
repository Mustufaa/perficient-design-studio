import { HeartHandshake, Lightbulb, ShieldCheck, Sparkles, ScanSearch } from "lucide-react";

const pillars = [
  { title: "Client Focused", description: "We work closely with clients to understand their ideas, needs, and expectations.", icon: HeartHandshake },
  { title: "Creativity & Innovation", description: "We create modern and timeless solutions that respond to real-world needs.", icon: Lightbulb },
  { title: "Quality & Transparency", description: "We believe in professional communication, clear processes, and reliable execution.", icon: ShieldCheck },
  { title: "Thoughtful Design", description: "Every project is designed with clear purpose, clarity, and practical functionality.", icon: Sparkles },
  { title: "Attention to Detail", description: "We focus on precision, material understanding, and quality in every stage.", icon: ScanSearch },
];

export function WorkingOn() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="section-eyebrow">Working On</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div key={pillar.title} className="card-surface rounded-2xl p-5 text-center">
              <div className="mx-auto mb-4 inline-flex rounded-full border border-[var(--color-line)] p-3 text-[var(--color-gold)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{pillar.title}</h3>
              <p className="text-sm leading-6 text-[var(--color-muted)]">{pillar.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
