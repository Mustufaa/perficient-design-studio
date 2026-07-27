import { Services } from "@/components/sections/Services";
import { TrustedBrands } from "@/components/sections/TrustedBrands";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="section-eyebrow">Our Services</p>
        <h1 className="section-title-line mt-3 text-5xl">Design, build, and deliver with confidence.</h1>
      </div>
      <Services />
      <TrustedBrands />
    </main>
  );
}
