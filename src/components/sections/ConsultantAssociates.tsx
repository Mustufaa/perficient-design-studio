const associates = [
  {
    name: "Gharwala Constructions",
    specialty: "Civil & Structural Execution",
    description: "Base structure & quality construction management and site coordination.",
  },
  {
    name: "AP Interiors",
    specialty: "Interior Fit-Out & Detailing",
    description: "Interior detailing and modern space styling focused on functionality and aesthetics.",
  },
  {
    name: "GP Architects",
    specialty: "Architectural Planning & Design Consultancy",
    description: "Architectural planning consultants specializing in delivering innovative and practical design solutions.",
  },
];

export function ConsultantAssociates() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="section-eyebrow">Consultant Associates</p>
      <h2 className="section-title-line mt-3 text-4xl">Integrated delivery partners</h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-muted)]">
        We collaborate with experienced consultants, contractors, and creative professionals to deliver integrated architectural and interior solutions with precision, efficiency, and attention to detail.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {associates.map((associate) => (
          <div key={associate.name} className="card-surface rounded-3xl p-6">
            <h3 className="text-2xl">{associate.name}</h3>
            <p className="mt-2 text-sm font-semibold text-[var(--color-gold)]">{associate.specialty}</p>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{associate.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
