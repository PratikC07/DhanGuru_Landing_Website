import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import GuruAiSection from "../components/GuruAiSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <GuruAiSection />
      <ContactSection />
    </main>
  );
}
