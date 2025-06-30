"use client"

import Image from 'next/image'
import Link from 'next/link'
import {useTranslations} from 'next-intl';


const HeroHeaderSection = () => {
    const t = useTranslations('heroHeaderSection');
    
    return (
        <section className="relative h-screen flex items-center justify-center mt-10 md:mt-0">
            <div className="w-[95%] md:w-[73%] mx-auto pt-5">
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-2 items-center align-middle'>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl text-gray-900 mb-10">
                            {t('title')}
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto pb-5">{t('description')} </p>
                        <div className="flex gap-4">
                            <a href="https://wa.me/573015567050" target="_blank">
                                <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition duration-300">
                                    {t('buttonGetStared')}
                                </button>
                            </a>
                            <Link href="#portfolio" scroll={false} onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-300">
                                    {}{t('buttonLearnMore')}
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='hidden md:block align-middle items-center'>
                        <Image
                            className='pl-4 rounded-md'
                            src="/images/hero-image.jpg"
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

export default HeroHeaderSection;
