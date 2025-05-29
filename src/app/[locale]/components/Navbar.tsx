'use client'

import { useState } from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';


import { localeLabels, routing } from "@/i18n/routing";
import { useRouter } from 'next/navigation'

const Navbar = ({ currentLocale }: { currentLocale: string }) => {

    const t = useTranslations('navbar');
    const [isOpen, setIsOpen] = useState(false);


    const router = useRouter()
    const handleChangeLocale = (locale: string) => {
      if (locale === currentLocale) return
      router.push(locale)
    }
  
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white z-50">
            <div className="mx-auto px-5 md:px-24">

                <div className="flex justify-between h-18 py-2">
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#" className="text-gray-700 hover:text-gray-900">{t('home')}</a>
                    </div>
                    
                    <div className="w-4/12 sm:w-5/12 md:w-[57%] lg:w-[60%] xl:w-[65%] 2xl:w-[70%]">
                    <Image
                            src="/images/logo3.1.png"
                            width={170}
                            height={100}
                            alt="Picture of the author"
                        />
                    </div>
                    
                    <div className="md:flex items-center space-x-1">
                        {routing.locales.map((locale: string) => (
                           <button
                           key={locale}
                           onClick={() => handleChangeLocale(locale)}
                           aria-label={localeLabels[locale].label}
                           className={`pt-1 text-lg md:text-2xl lg:text-2xl transition-opacity ${
                             locale === currentLocale ? 'opacity-100' : 'opacity-50 hover:opacity-80'
                           }`}
                         >
                           {localeLabels[locale].flag}
                         </button>
                        ))}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900"
                        >
                            <span className="sr-only">{t('openMenu')}</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">{t('home')}</a>
                    </div>
                </div>
            )}

            
        </nav>
    );
};

export default Navbar;
