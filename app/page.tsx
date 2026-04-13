import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import TechStackSection from "@/components/portfolio/TechStackSection";
import FeaturedProjectSection from "@/components/portfolio/FeaturedProjectSection";
import ContactSection from "@/components/portfolio/ContactSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <PortfolioHeader />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <FeaturedProjectSection />
      <ContactSection />
    </main>
  );
}
