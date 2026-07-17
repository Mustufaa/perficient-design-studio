import { About } from "@/components/sections/About";
import { VisionValuesMission } from "@/components/sections/VisionValuesMission";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="section-eyebrow">About Us</p>
        <h1 className="section-title-line mt-3 text-5xl">Purposeful design, practical execution.</h1>
      </div>
      <About />
      <VisionValuesMission />
    </main>
  );
}
