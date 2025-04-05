import Slider from "./commons/Slider";
import TitleSection from "./commons/TitleSection";
import { portafolio } from "@/app/data/sliderImages";
import { textDescription } from "@/app/data/general";

const Portfolio = () => {
  return <div className="sectionSite">
    <div className="w-[70%] mx-auto">
      <TitleSection title="Portfolio" description={textDescription} />
      <Slider items={portafolio} />
    </div>
  </div>
};

export default Portfolio;
