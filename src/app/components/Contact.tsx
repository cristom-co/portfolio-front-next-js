import Slider from "./commons/slider/Slider";
import TitleSection from "./commons/TitleSection";

import { contacts } from "../data/contact";


const Contact = () => {
    return <div className="sectionSite">
        <TitleSection title="Contact" description="Feel free to reach out to me here!" />
        <Slider items={contacts} />
    </div>;
};

export default Contact; 