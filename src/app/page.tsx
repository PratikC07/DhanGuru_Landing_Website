import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import GuruAiSection from "../components/GuruAiSection";
import ContactSection from "../components/ContactSection";
import ScrollRestoration from "../components/ScrollRestoration";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <ScrollRestoration />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <GuruAiSection />
      <ContactSection />
    </main>
  );
}
