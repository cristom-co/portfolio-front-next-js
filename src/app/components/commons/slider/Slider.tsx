'use client'
import Image from 'next/image';

//types
import { ItemSlider } from '../../../types';

//slider plugin
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = ({ items }: { items: ItemSlider[] }) => {

    const handleSliderChange = (swiper: { activeIndex: number }) => {

        const activeSlideIndex = swiper.activeIndex % items.length;
        const slideData = items[activeSlideIndex];

        console.log(slideData)

        // todo: add zustand to manage the popup
    }

    return <div className='flex items-center relative '>
        <Image className='rotate-90' src="/icons/arrow-down.png" alt="arrow-left" width={15} height={15} />
        <Swiper
            onSlideChange={handleSliderChange}
            spaceBetween={5}
            slidesPerView={1}
            loop
            style={{ width: '100%', height: '40vh' }} // Ajusta la altura completa de la pantalla

        >
            {items.map((item, index) => (
                <SwiperSlide
                    key={index}>
                    {item.type === 'image' ? (
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <Image
                                src={item.image ?? ''} // Ruta de la imagen
                                alt={item.description} // Texto alternativo
                                fill={true}
                                className='rounded-xl'
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                    ) : (
                        <div className='p-4 rounded-xl bg-gray-200'>
                            <h3 className=' font-bold'>{item.title}</h3>
                            <p>{item.description.substring(0, 300)}...</p>
                        </div>)}
                </SwiperSlide>
            ))}

        </Swiper>
        <Image className='-rotate-90' src="/icons/arrow-down.png" alt="arrow-right" width={15} height={15} />
    </div>;
};

export default Slider;
