import Slider from "./commons/slider/Slider";
import TitleSection from "./commons/TitleSection";

import { contacts } from "../data/sliderImages";


const Contact = () => {
    return <div className="sectionSite">
        <TitleSection title="Find me online" description="Feel free to reach out to me here!" />
        <Slider items={contacts} />
    </div>;
};

export default Contact; 