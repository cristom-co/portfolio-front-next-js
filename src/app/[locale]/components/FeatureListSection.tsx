
const FeatureListSection = () => {
    return (
        <section className="  bg-gray-900 text-white pt-28 pb-32 ">
            <div className="flex justify-center pb-16">
                <h2 className="text-3xl sm:text-3xl md:text-5xl text-center text-white w-11/12 md:w-1/2">
                    Transform Your Ideas into Reality with Our Web Development Services</h2>
            </div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col md:flex-row justify-between gap-8'>
                    <div className="p-6 text-center">
                        <div className="flex justify-center mb-4">
                            <svg className="w-12 h-12 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Expert Development in React, Vue, and React Native for Your Projects</h3>
                        <p >Our team specializes in creating dynamic web and mobile applications tailored to your needs.</p>
                    </div>
                    <div className="p-6 text-center">
                        <div className="flex justify-center mb-4">
                            <svg className="w-12 h-12 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Seamless User Experiences with Our Cutting-Edge Frontend Solutions</h3>
                        <p>We utilize the latest technologies to ensure your applications are engaging and user-friendly.</p>
                    </div>
                    <div className="p-6 text-center">
                        <div className="flex justify-center mb-4">
                            <svg className="w-12 h-12 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Robust Backend Solutions to Support Your Growing Business Needs</h3>
                        <p >Our backend development services ensure your applications run smoothly and efficiently.</p>
                    </div>
                
                </div>
            </div>
            
        </section>
    );
};

export default FeatureListSection;
