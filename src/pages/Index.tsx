import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatisticsSection from "@/components/StatisticsSection";
import EditionsSection from "@/components/EditionsSection";
import ChallengesSection from "@/components/ChallengesSection";
import SponsorPacksSection from "@/components/SponsorPacksSection";
import WhySponsorSection from "@/components/WhySponsorSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatisticsSection />
      <EditionsSection />
      <ChallengesSection />
      <SponsorPacksSection />
      <WhySponsorSection />
      <PartnersSection />
      <ContactSection />
      <footer className="py-8 text-center border-t border-border">
        <p className="font-display text-sm text-muted-foreground tracking-wider">
          © 2026 Club Robotek ISET Radès
        </p>
      </footer>
    </div>
  );
};

export default Index;
