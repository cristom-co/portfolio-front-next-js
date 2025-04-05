import Image from 'next/image'


const HeroHeaderSection = () => {
    return (
        
        <section className="relative h-screen flex items-center justify-center mt-10 md:mt-0">
            <div className="w-[73%] mx-auto pt-5">
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-2 items-center align-middle'>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className=" text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-10">
                            Transform Your Ideas into Stunning Digital Solutions
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto pb-5">
                            At our company, we specialize in creating dynamic web and mobile applications using the latest technologies like React and Vue. Let us help you elevate your online presence and engage your audience effectively.        </p>
                        <div className="flex gap-4">
                            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition duration-300">
                                Get Started
                            </button>
                            <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-300">
                                Learn more
                            </button>
                        </div>
                    </div>
                    <div className='hidden md:block align-middle items-center'>
                        <Image
                            className='pl-4'
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
