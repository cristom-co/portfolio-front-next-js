'use client'

import Image from 'next/image';

//types
import { ItemSlider } from '@/app/[locale]/types';

//slider plugin
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.module.css'   // Custom styles for the slider  


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import {useTranslations} from 'next-intl';
import { useEffect } from 'react';


const Slider = ({ items }: { items: ItemSlider[] }) => {

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            .swiper-button-next,
            .swiper-button-prev {
                color: orange !important;
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);


    const t = useTranslations('slider');

    const onClickImage = (item: ItemSlider) => {
        if (item.type === "link" && item.link) {
            window.open(item.link, '_blank'); // '_blank' abre el enlace en una nueva pestaña
        }
    }

    const SliderWithImage = (typeItem: string) => ["image", "link"].includes(typeItem);

    return <div className='flex items-center relative '>
        <Swiper
            spaceBetween={10}
            slidesPerView={2}
            navigation
            style={{
            width: '100%',
            height: '70vh',
            }}
            modules={[Navigation]}
            breakpoints={{
            0: {
                slidesPerView: 1,
            },
            769: {
                slidesPerView: 2,
            },
            1440: {
                slidesPerView: 3,
            },
            }}
            className="responsive-slider-height"
        >
            {items.map((item, index) => (
            <SwiperSlide
                key={index}
                className='bg-black-100 '>
                {SliderWithImage(item.type) ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                        onClick={() => onClickImage(item)}
                        src={item.image ?? ''} // Ruta de la imagen
                        alt={item.description} // Texto alternativo
                        className='rounded-xl cursor-pointer'
                        fill={true}
                        style={{
                        objectFit: 'cover',
                        objectPosition: 'top',
                        }}
                    />
                    </div>
                    {item.description && (
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 rounded-lg w-full  text-lg ">
                        <h3 className=' text-3xl sm:text-4xl md:text-3xl text-white'>{item.title}</h3>
                        <p className='text-sm sm:text-lg '>
                        {t(item.title)}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {item.technologies?.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded mr-1 mb-1"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    )}
                </a>
                ) : (
                <div className='px-8 py-3 rounded-xl bg-slate-100 h-full flex flex-col items-center justify-center'>
                    <h3 className=' font-bold mb-1'>{item.title}</h3>
                    <p className='break-words overflow-y-auto max-h-50'>{item.description}</p>
                </div>
                )}

            </SwiperSlide>
            ))}

        </Swiper>
    </div>;
};

export default Slider;
