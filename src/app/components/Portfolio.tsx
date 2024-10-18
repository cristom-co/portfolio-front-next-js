
import Slider from "./commons/slider/Slider";
import TitleSection from "./commons/TitleSection";
import { portafolio } from "../data/portafolio";

const Portfolio = () => {
  return <div className="sectionSite ">
    <TitleSection title="Portfolio" description="I have successfully collaborated with diverse industries, including advertising, finance, education, and travel." />
    <Slider items={portafolio} />
  </div>
};

export default Portfolio;
