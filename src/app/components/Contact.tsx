import Slider from "./commons/slider/Slider";
import TitleSection from "./commons/TitleSection";

import { contacts } from "../data/sliderImages";
import CalendlyLink from "./CalendlyLink";
import ConstructionLink from "./ConstructionLink";

const Contact = () => {
    return <div className="sectionSite">
        <TitleSection title="Find me online" description="Feel free to reach out to me here!" />
        <CalendlyLink />
        <Slider items={contacts} />
        <ConstructionLink />

    </div>;
};

export default Contact; 