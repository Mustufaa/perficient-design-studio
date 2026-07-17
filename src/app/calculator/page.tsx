import { CostCalculator } from "@/components/calculator/CostCalculator";

export default function CalculatorPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-28 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="section-eyebrow">Project Cost Calculator</p>
        <h1 className="section-title-line mt-3 text-5xl">Estimate your project cost in two minutes</h1>
      </div>
      <CostCalculator />
    </main>
  );
}
