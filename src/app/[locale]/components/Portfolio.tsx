import Slider from './oldComponents/commons/slider/Slider';
import { portafolio } from "@/app/[locale]/data/sliderImages";
import {useTranslations} from 'next-intl';

const Portfolio = () => {

    const t = useTranslations('portfolio');
    return (
        <section id="portfolio" className=" bg-orange-600 relative h-fit py-20 md:py-0 md:h-screen flex items-center justify-center">
            <div className="w-[95%] md:w-[73%] mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 items-center align-middle'>
                    <div className="max-w-4xl ">
                        <h2 className=" text-4xl sm:text-5xl md:text-4xl text-white mb-5">
                            {t('title')}
                        </h2>
                    </div>
                </div>
                    <div className='align-middle items-center'>
                        <Slider items={portafolio} />
                    </div>

            </div>
        </section>
    );
};

export default Portfolio;
