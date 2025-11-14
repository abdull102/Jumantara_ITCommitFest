import Footer from "./components/Footer";
import HeroAbout from "./components/HeroAbout";
import Navbar from "./components/Navbar";
import TotalAbout from "./components/TotalAbout";
import Faq from "./components/Faq";

export default function AboutPage() {
  return (
    <main className="bg-zinc-950 text-zinc-50 h-full">
      <Navbar />
      <HeroAbout />
      <TotalAbout />
      <Faq />
      <div className="flex flex-col justify-center items-center text-center gap-3 py-32 lg:py-52">
        <h1 className="font-light text-2xl lg:text-4xl capitalize">
          If you're not paying for the product, then you are the product
        </h1>
        <p className="font-light italic text-zinc-300">
          The Social Dilemma - 2020
        </p>
      </div>
      <Footer />
    </main>
  );
}
