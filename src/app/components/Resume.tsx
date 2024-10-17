import { experience } from "../data/experience";

import Slider from "./commons/slider/Slider";
import TitleSection from "./commons/TitleSection";

const Resume = () => {
  return <div className="sectionSite">
    <TitleSection title="Resume" description="Senior Frontend Developer with extensive experience in building responsive, high-performance web applications using modern JavaScript frameworks" />      
    <Slider items={experience} />
  </div>;
};

export default Resume;