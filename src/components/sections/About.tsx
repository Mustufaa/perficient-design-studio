import Image from "next/image";

const copy = [
  "Perficient Design Studio is a design practice focused on architecture, interiors, construction, and landscaping — delivering spaces that are thoughtfully planned, visually refined, and built around real human needs.",
  "We believe that every space should have a clear purpose, strong functionality, and a timeless design approach. Our work combines creativity with practical planning to create environments that are comfortable, efficient, and aesthetically balanced.",
  "From residential and commercial projects to interior and landscape design, we provide complete design solutions with attention to detail, proper space utilization, material understanding, and execution support. We work closely with clients to transform ideas into well-designed spaces that reflect identity, usability, and long-term value.",
  "At Perficient Design Studio, our goal is not simply to design spaces, but to create meaningful experiences through thoughtful and purposeful design.",
];

export function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div>
          <p className="section-eyebrow">About Us</p>
          <h2 className="section-title-line mt-3 text-4xl">Design with clarity and purpose</h2>
          <div className="mt-6 space-y-5 text-base leading-7 text-[var(--color-muted)]">
            {copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative h-72 overflow-hidden rounded-2xl sm:col-span-2">
            <Image src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80" alt="Architectural interior detail and drafting space" fill className="object-cover" />
          </div>
          <div className="relative h-56 overflow-hidden rounded-2xl">
            <Image src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80" alt="Modern lounge interior with elegant detailing" fill className="object-cover" />
          </div>
          <div className="relative h-56 overflow-hidden rounded-2xl">
            <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80" alt="Contemporary exterior facade and courtyard" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
