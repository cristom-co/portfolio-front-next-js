import Slider from './oldComponents/commons/Slider';
import { portafolio } from "@/app/data/sliderImages";



const Portfolio = () => {
    return (
        <section id="portfolio" className=" bg-orange-600 relative h-fit py-20 md:py-0 md:h-screen flex items-center justify-center">
            <div className="w-[95%] md:w-[73%] mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 items-center align-middle'>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className=" text-4xl sm:text-5xl md:text-4xl text-white mb-5">
                            Explore Our Portfolio: Showcasing Innovation and Excellence in Digital Solutions
                        </h2>
                        <p className="text-lg text-white mb-8 max-w-3xl mx-auto pb-5">
                            Dive into our diverse portfolio showcasing successful projects across various industries. From sleek e-commerce platforms to innovative mobile applications, each project demonstrates our commitment to delivering high-quality, user-centric solutions that drive real business results.
                        </p>
                    </div>
                    <div className='align-middle items-center pl-4'>
                        <Slider items={portafolio} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
