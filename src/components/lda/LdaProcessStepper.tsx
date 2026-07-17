const steps = [
  "Site Assessment & Document Collection — plot documents, ownership papers, site survey, zoning check",
  "Architectural Drawing Preparation — building plans prepared per LDA building bye-laws and setback/FAR norms",
  "Map Submission — filing with the Lucknow Development Authority (online/offline as applicable)",
  "Liaison & Query Resolution — coordinating with LDA officials, responding to objections/queries",
  "Approval & Sanction Letter — receipt of the sanctioned map",
  "Post-Approval Support — completion certificate / occupancy certificate guidance",
];

export function LdaProcessStepper() {
  return (
    <section className="mt-12 rounded-3xl border border-[var(--color-line)] bg-white/60 p-6">
      <h2 className="text-3xl">Our LDA Approval Process</h2>
      <div className="mt-6 grid gap-4">
        {steps.map((step, index) => (
          <div key={step} className="flex gap-4 rounded-2xl border border-[var(--color-line)] p-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-gold)] text-sm font-semibold text-white">{index + 1}</div>
            <div className="text-sm leading-6 text-[var(--color-muted)]">{step}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
