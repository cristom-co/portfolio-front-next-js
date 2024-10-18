import Image from 'next/image';
import Popup from '../popup/Popup';

import './Slider.css';

import { ItemSlider } from '../../../types';

const Slider = ({ items }: { items: ItemSlider[] }) => {

    return <div className='slider-wrapper'>
        <Image className='rotate-90' src="/icons/arrow-down.png" alt="arrow-left" width={15} height={15} />
        <div className="slider-container">
            {items.map((item, index) => (

                <div className={`slider-item ${item.type === 'image' ? 'slider-item-image' : 'slider-item-text'}`} key={index}>

                    <Popup>
                        {item.type === 'image' ? (
                            <div className='relative w-full h-80' >
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
                            <p>{item.description.substring(0, 300)}... <span className='text-sm text-gray-500'>See More</span></p>
                        </div>)}

                        <div className="max-h-[80vh] overflow-y-auto place-items-center">
                            {item.type == "text" && <h3 className='font-bold'>{item.title}</h3>}
                            <p className="my-5 text-lg sm:w-full md:w-1/2 lg:w-1/3">{item.description}</p>
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
                    </Popup>
                </div>
            ))}
        </div>
        <Image className='-rotate-90' src="/icons/arrow-down.png" alt="arrow-right" width={15} height={15} />
    </div>;
};

export default Slider;
