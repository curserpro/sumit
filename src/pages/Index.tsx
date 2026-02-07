import NoiseOverlay from "@/components/NoiseOverlay";
import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <NoiseOverlay />
      <FloatingNav />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
};

export default Index;
