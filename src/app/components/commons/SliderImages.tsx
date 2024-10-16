import Image from 'next/image';

const SliderImages = () => {

  const portfolio = [
    {
      image: '/images/product1.png',
      description: 'Descripción de la imagen'
    },
    {
      image: '/images/product1.png',
      description: 'Descripción de la imagen'
    }
  ];

  return <div className='slider-wrapper'>
    <Image className='rotate-90' src="/icons/arrow-down.png" alt="arrow-left" width={15} height={15} />
    <div className="slider-container">
      {portfolio.map((item, index) => (
        <div className="slider-item" key={index}>
          <Image
            src={item.image} // Ruta de la imagen
            alt={item.description} // Texto alternativo
            width={300} // Ancho de la imagen
            height={400} // Alto de la imagen
          />
        </div>
      ))}
    </div>
    <Image className='-rotate-90' src="/icons/arrow-down.png" alt="arrow-right" width={15} height={15} />
  </div>;
};

export default SliderImages;
