import Image from 'next/image'
import {useTranslations} from 'next-intl';


const BenefitSection = () => {
    const t = useTranslations('benefitsSection');
    
    return (
        
        <section className="relative min-h-screen flex items-center justify-center">
            <div className="w-[95%] md:w-[73%] mx-auto">
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-2 items-center align-middle'>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className=" text-4xl sm:text-5xl md:text-4xl text-gray-900 mb-5">
                        {t('title')}
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto pb-5">
                        {t('description')}
                        </p>
                    </div>
                    <div className='hidden md:block align-middle items-center'>
                        <Image
                            className='pl-4 rounded-md'
                            src="/images/benefit.jpg"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>
    );
};

export default BenefitSection;
