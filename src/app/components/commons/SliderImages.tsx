import Image from 'next/image';
  
const SliderImages = () => {
  return <div>
    <Image 
        src="/images/product1.png" // Ruta de la imagen
        alt="Descripción de la imagen" // Texto alternativo
        width={600} // Ancho de la imagen
        height={400} // Alto de la imagen
      />
  </div>;
};

export default SliderImages;
