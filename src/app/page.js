import Hero from "@/app/components/Hero";
import Capabilities from "./components/Capabilities";
import Features from "./components/Features";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Features />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
