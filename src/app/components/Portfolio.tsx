
import Slider from "./commons/slider/Slider";
import TitleSection from "./commons/TitleSection";
import { portafolio, textDescription } from "../data/portafolio";

const Portfolio = () => {
  return <div className="sectionSite ">
    <TitleSection title="Portfolio" description={textDescription} />
    <Slider items={portafolio} />
  </div>
};

export default Portfolio;
