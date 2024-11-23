import TitleSection from "./commons/TitleSection";
import Slider from "./commons/slider/Slider";
import { skills } from "../data/skills";


import { textDescriptionSkills } from "../data/general";

const Skills = () => {
  return <div className="sectionSite">
    <TitleSection title="Skills" description={textDescriptionSkills} />
    <Slider items={skills} />

  </div>;
};

export default Skills;
