import BenefitSection from "./components/BenefitSection";
import FeatureListSection from "./components/FeatureListSection";
import Footer from "./components/Footer";
import HeroHeaderSection from "./components/HeroHeaderSection";
import Navbar from "./components/Navbar";

import WhatsappButton from "./components/oldComponents/WhatsappButton";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <>
      <WhatsappButton />
      <Navbar />
      <HeroHeaderSection />
      <FeatureListSection />
      <BenefitSection />
      <Portfolio />
      <Footer />
    </>
  );
}