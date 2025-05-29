import { experience } from "@/app/[locale]/data/sliderImages";
import { textDescripionResume } from "@/app/[locale]/data/general";

import Slider from "./commons/Slider";
import TitleSection from "./commons/TitleSection";

const Resume = () => {
  return <div className="sectionSite">
    <TitleSection title="Resume" description={textDescripionResume} />
    <Slider items={experience} />
  </div>;
};

export default Resume;