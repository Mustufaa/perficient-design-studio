const faqs = [
  {
    question: "How long does LDA approval take?",
    answer: "Timelines vary according to the project type, documentation completeness, and the current review queue at the authority. We help keep the process organised and responsive, but exact timing is determined by LDA processing.",
  },
  {
    question: "Can Perficient Design Studio handle the LDA liaison for me?",
    answer: "Yes. Our team can coordinate drawings, submission follow-up, and query responses as part of the approval support process.",
  },
  {
    question: "What happens if I build without LDA approval?",
    answer: "Building without required sanctioned permissions can lead to compliance issues, penalties, and difficulty related to future resale or loan processing. For the latest guidance, consult the relevant local authority requirements.",
  },
  {
    question: "Do you help with revised or updated maps for existing structures?",
    answer: "Yes, we can support revised or updated plan submissions where the project scope or approved drawing set needs to be aligned with current requirements.",
  },
];

export function LdaFaq() {
  return (
    <section className="mt-12 rounded-3xl border border-[var(--color-line)] bg-white/60 p-6">
      <h2 className="text-3xl">Frequently Asked Questions</h2>
      <div className="mt-5 space-y-3">
        {faqs.map((item) => (
          <details key={item.question} className="rounded-2xl border border-[var(--color-line)] p-4">
            <summary className="cursor-pointer font-semibold">{item.question}</summary>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
