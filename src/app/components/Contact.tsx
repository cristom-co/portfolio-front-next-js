import TitleSection from "./commons/TitleSection";
import Image from "next/image";

const Contact = () => {
    return <div className="sectionSite">
        <TitleSection title="Contact" description={"Phone: +57 3015567050 <br/> Email: cristhiantombe@gmail.com"} />
        <div className="grid grid-cols-2 gap-4 mx-5">
            <div className="bg-gray-200 py-4  rounded-lg flex justify-center items-center">
                <a href="https://www.linkedin.com/in/cristombe/" target="_blank" rel="Linkedin">
                    <Image src="/icons/imagen 9.png" alt="icon 1" width={50} height={50} />
                </a>
            </div>
            <div className="bg-gray-200 py-4  rounded-lg flex justify-center items-center">
                <a href="https://github.com/cristom-co" target="_blank" rel="Github">
                    <Image src="/icons/imagen 10.png" alt="icon 2" width={60} height={60} />
                </a>
            </div>
            <div className="bg-gray-200 py-4  rounded-lg flex justify-center items-center">
                <a href="https://leetcode.com/u/cristombe/" target="_blank" rel="Leetcode">
                    <Image src="/icons/imagen 11.png" alt="icon 3" width={60} height={60} />
                </a>
            </div>
            <div className="bg-gray-200 py-4  rounded-lg flex justify-center items-center">
                <a href="https://www.upwork.com/freelancers/~010772ee5b4f404db9" target="_blank" rel="upwork">
                    <Image src="/icons/imagen 12.png" alt="icon 4" width={60} height={60} />
                </a>
            </div>
        </div>
    </div>;
};

export default Contact; 