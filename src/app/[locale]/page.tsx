
import BenefitSection from "./components/BenefitSection";
import FeatureListSection from "./components/FeatureListSection";
import Footer from "./components/Footer";
import HeroHeaderSection from "./components/HeroHeaderSection";

import Portfolio from "./components/Portfolio";


export default function Home() {
  return (
    <>
      <HeroHeaderSection />
      <Portfolio />
      <Footer />
    </>
  );
}