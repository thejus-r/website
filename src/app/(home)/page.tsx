import ClientsSection from "./ClientSection";
import HeroSection from "./HeroSection";
import PhilosophySection from "./PhilosophySection";
import ProjectSection from "./ProjectSection";
import TestimonialSection from "./TestimonialSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <ProjectSection />
      <ClientsSection />
      <PhilosophySection />
      <TestimonialSection />
    </main>
  );
};

export default HomePage;
