import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BuildSection from "@/components/BuildSection";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Brands from "@/components/Brands";
import HelpSupport from "@/components/HelpSupport";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BuildSection />
        <Features />
        <Pricing />
        <Testimonials />
        <Brands />
        <HelpSupport />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
