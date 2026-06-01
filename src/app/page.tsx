import UrgencyBanner from "@/components/common/UrgencyBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PartnerBanks from "@/components/sections/PartnerBanks";
import WhyChoose from "@/components/sections/WhyChoose";
import HowItWorks from "@/components/sections/HowItWorks";
import LeadForm from "@/components/sections/LeadForm";
import EligibilityCalculator from "@/components/sections/EligibilityCalculator";
import CreditReport from "@/components/sections/CreditReport";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import BlogSection from "@/components/sections/BlogSection";
import TrustSection from "@/components/sections/TrustSection";
import FinalCTA from "@/components/sections/FinalCTA";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import ExitIntentPopup from "@/components/common/ExitIntentPopup";

export default function Home() {
  return (
    <>
      {/* Fixed site header: urgency banner stacked above navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <UrgencyBanner />
        <Navbar showTagline={true} />
      </div>
      <main>
        <Hero />
        <TrustSection />
        <WhyChoose />
        <EligibilityCalculator />
        <HowItWorks />
        <LeadForm />
        <PartnerBanks />
        <CreditReport />
        <Testimonials />
        <BlogSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ExitIntentPopup />
    </>
  );
}
