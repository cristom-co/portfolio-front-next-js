import TitleSection from "./commons/TitleSection";
import Image from "next/image";
const Skills = () => {
  return <div   className="sectionSite">
    <TitleSection title="Skills" description="Skilled in React Native, Redux, Jest, Cypress, Next.js, and Git Flow. English proficiency at B2 level for international collaboration." />      
    <div className="grid grid-cols-3 gap-4 pt-2">
        <Image src="/icons/imagen.png" alt="React" width={80} height={80} />
        <Image src="/icons/imagen 21.png" alt="React" width={80} height={80} />  
        <Image src="/icons/imagen 22.png" alt="React" width={80} height={80} />
        <Image src="/icons/imagen 23.png" alt="React" width={80} height={80} />
        <Image src="/icons/imagen 24.png" alt="React" width={80} height={80} />
        <Image src="/icons/imagen 25.png" alt="React" width={80} height={80} />
        <Image src="/icons/imagen 26.png" alt="React" width={80} height={80} />  
        <Image src="/icons/imagen 27.png" alt="React" width={80} height={80} />  
        <Image src="/icons/imagen 28.png" alt="React" width={80} height={80} />  
    </div>
  </div>;
};

export default Skills;
