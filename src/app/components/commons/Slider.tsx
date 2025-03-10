'use client'

import Image from 'next/image';

//types
import { ItemSlider } from '../../types';

//slider plugin
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = ({ items }: { items: ItemSlider[] }) => {

    const handleSliderChange = (swiper: { activeIndex: number }) => {
        const activeSlideIndex = swiper.activeIndex % items.length;
        const slideData = items[activeSlideIndex];
        // todo: add zustand to manage the popup
    }

    const onClickImage = (item: ItemSlider) => {
        if (item.type === "link" && item.link) {
            window.open(item.link, '_blank'); // '_blank' abre el enlace en una nueva pestaña

        }
    }

    const SliderWithImage = (typeItem: string) => ["image", "link"].includes(typeItem);

    return <div className='flex items-center relative '>
        <Image className='rotate-90' src="/icons/arrow-down.png" alt="arrow-left" width={15} height={15} />
        <Swiper
            onSlideChange={handleSliderChange}
            spaceBetween={5}
            slidesPerView={1}
            loop

            style={{ width: '100%', height: 300 }}
        >
            {items.map((item, index) => (
                <SwiperSlide
                    key={index}
                    className='bg-slate-100 rounded-xl border border-slate-200'>
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
                                    }}
                                />
                            </div>
                            {item.description && (
                                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
                                    <h3 className='font-bold'>{item.title}</h3>
                                    <p>{item.description}</p>
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
        <Image className='-rotate-90' src="/icons/arrow-down.png" alt="arrow-right" width={15} height={15} />
    </div>;
};

export default Slider;
