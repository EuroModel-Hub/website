import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustEU } from "@/components/TrustEU";
import { Frameworks } from "@/components/Frameworks";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Features />
        <HowItWorks />
        <TrustEU />
        <Frameworks />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
