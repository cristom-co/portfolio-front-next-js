import Slider from "./commons/Slider";
import TitleSection from "./commons/TitleSection";

import { contacts } from "@/app/data/sliderImages";
// import CalendlyLink from "./CalendlyLink";
import ConstructionLink from "./ConstructionLink";
import FreelanceLink from "./FreelanceLink";

const Contact = () => {
    return <div className="sectionSite">
        <TitleSection title="Find me online" description="Feel free to reach out to me here!" />
        {/* <CalendlyLink /> */}
        <Slider items={contacts} />
        <FreelanceLink />
        {/* <ConstructionLink /> */}

    </div>;
};

export default Contact; 