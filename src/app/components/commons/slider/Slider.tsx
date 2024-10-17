import Image from 'next/image';
import Popup from '../popup/Popup';

import './Slider.css';

import { ItemSlider } from '../../../types';

const Slider = ({ items }: { items: ItemSlider[] }) => {

    return <div className='slider-wrapper'>
        <Image className='rotate-90' src="/icons/arrow-down.png" alt="arrow-left" width={15} height={15} />
        <div className="slider-container">
            {items.map((item, index) => (
                <div className="slider-item" key={index}>

                    <Popup>
                        {item.type === 'image' ? (
                            <div className='relative w-full h-80' >
                                <Image
                                    src={item.image} // Ruta de la imagen
                                    alt={item.description} // Texto alternativo
                                    fill={true}
                                    className='rounded-xl'
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>   
                        ) : (<div className='p-4 slider-item-text rounded-xl'>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>)}

                        <div>
                            <h3 className='text-xl font-bold my-5'>{item.title}</h3>
                            <p className='text-sm my-5'>{item.description}</p>

                            {item.type === 'image' && (
                                    <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                                    <Image
                                        className='rounded-xl'
                                        src={item.image} // Ruta de la imagen
                                        alt={item.description} // Texto alternativo
                                        fill={true}
                                        style={{
                                            objectFit: 'cover',
                                        }}
                                    />
                                </div>
                           
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
