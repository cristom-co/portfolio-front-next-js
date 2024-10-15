import SliderExperience from "./commons/SliderExperience";
import TitleSection from "./commons/titleSection";

const Resume = () => {
  return <div className="sectionSite">
    <TitleSection title="Resume" description="Senior Frontend Developer with extensive experience in building responsive, high-performance web applications using modern JavaScript frameworks" />      
    <SliderExperience />
  </div>;
};

export default Resume;