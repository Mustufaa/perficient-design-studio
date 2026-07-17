import { LdaFaq } from "@/components/lda/LdaFaq";
import { LdaProcessStepper } from "@/components/lda/LdaProcessStepper";

export default function LdaApprovalPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="section-eyebrow">LDA Approval</p>
        <h1 className="section-title-line mt-3 text-5xl">LDA Map Approval & Building Sanction Assistance</h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-[var(--color-muted)]">
          End-to-end support for Lucknow Development Authority (LDA) building plan approval, map sanction, and compliance — handled by our in-house COA-registered architects.
        </p>
      </div>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-[var(--color-line)] bg-white/60 p-6">
          <h2 className="text-3xl">Why LDA Approval Matters</h2>
          <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
            Any new construction, addition, or major renovation within LDA jurisdiction generally requires a sanctioned building map before construction begins. Unapproved construction can create compliance issues, penalties, or difficulty in resale and loan processes.
          </p>
        </div>
        <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-charcoal)] p-6 text-white">
          <h2 className="text-3xl">Why Work With Us</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-white/80">
            <li>COA-registered architects</li>
            <li>End-to-end liaison so clients do not need to visit LDA offices repeatedly</li>
            <li>Approval handled alongside design so drawings are sanction-ready from day one</li>
            <li>Transparent timeline updates</li>
          </ul>
        </div>
      </section>

      <LdaProcessStepper />
      <LdaFaq />
    </main>
  );
}
