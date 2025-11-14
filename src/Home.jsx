import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import SectionDasar from "./components/SectionDasar";
import SectionAncaman from "./components/SectionAncaman";
import HeroSection from "./components/HeroSection";
import SectionKebiasaan from "./components/SectionKebiasaan";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-zinc-50">
      <Navbar />
      <HeroSection />
      <SectionDasar />
      <SectionAncaman />
      <SectionKebiasaan />
      <Footer />
    </main>
  );
}
