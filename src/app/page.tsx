import { About } from "@/components/sections/About";
import { ConsultantAssociates } from "@/components/sections/ConsultantAssociates";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { TrustedBrands } from "@/components/sections/TrustedBrands";
import { VisionValuesMission } from "@/components/sections/VisionValuesMission";
import { WorkingOn } from "@/components/sections/WorkingOn";
export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <VisionValuesMission />
      <WorkingOn />
      <Services />
      <ConsultantAssociates />
      <TrustedBrands />
      <FeaturedProjects />
    </main>
  );
}
