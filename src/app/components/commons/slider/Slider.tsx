'use client'

import Image from 'next/image';
import Popup from '../popup/Popup';

import './Slider.css';

import { ItemSlider } from '../../../types';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = ({ items }: { items: ItemSlider[] }) => {

    return <div className='slider-wrapper'>
        <Image className='rotate-90' src="/icons/arrow-down.png" alt="arrow-left" width={15} height={15} />
        <Swiper
            modules={[Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={1}
            loop
            style={{ width: '100%', height: '40vh' }} // Ajusta la altura completa de la pantalla

        >
            {items.map((item, index) => (
                <SwiperSlide
                    key={index}>
                    {/* <Popup> */}
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
                    ) : (<div className='p-4 rounded-xl'>
                        <h3 className=' font-bold'>{item.title}</h3>
                        <p>{item.description.substring(0, 300)}...</p>
                    </div>)}

                    {/* <div>
                            {item.type == "text" && <h3 className='font-bold'>{item.title}</h3>}
                            <p className="my-5 text-lg">{item.description}</p>
                            {item.type === 'image' && (
                                <Image
                                    className='rounded-xl'
                                    src={item.imageComplete ?? ''} // Ruta de la imagen
                                    alt={item.description} // Texto alternativo
                                    width={800} // Ancho base de la imagen
                                    height={600} // Alto base de la imagen
                                    layout="responsive" // Hace que la imagen sea responsive
                                />
                            )}
                        </div>
                    </Popup> */}
                </SwiperSlide>
            ))}

        </Swiper>
        <Image className='-rotate-90' src="/icons/arrow-down.png" alt="arrow-right" width={15} height={15} />
    </div>;
};

export default Slider;
