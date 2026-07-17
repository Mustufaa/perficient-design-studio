import { About } from "@/components/sections/About";
import { ConsultantAssociates } from "@/components/sections/ConsultantAssociates";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { TrustedBrands } from "@/components/sections/TrustedBrands";
import { VisionValuesMission } from "@/components/sections/VisionValuesMission";
import { WorkingOn } from "@/components/sections/WorkingOn";
import { CostCalculator } from "@/components/calculator/CostCalculator";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <VisionValuesMission />
      <WorkingOn />
      <Services />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-5">
          <p className="section-eyebrow">Estimate Your Project Cost in 2 Minutes</p>
          <h2 className="section-title-line mt-3 text-4xl">Quick cost estimator</h2>
        </div>
        <CostCalculator />
      </section>
      <ConsultantAssociates />
      <TrustedBrands />
      <FeaturedProjects />
    </main>
  );
}
