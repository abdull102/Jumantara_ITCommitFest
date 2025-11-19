import Container from "./components/Container";
import HeroPrevention from "./components/HeroPrevention";
import IntroductionCyber from "./components/IntroductionCyber";
import Navbar from "./components/Navbar";
import Shield from "../public/icons/Shield";
import ToolsSection from "./components/ToolsSection";
import Footer from "./components/Footer";
import CommitmentSection from "./components/Commitment";

export default function Prevention() {
  return (
    <main className="relative bg-zinc-950 text-zinc-50">
      <Navbar />
      <HeroPrevention />
      <IntroductionCyber />
      <ToolsSection />
      <CommitmentSection />
      <Footer />
    </main>
  );
}
