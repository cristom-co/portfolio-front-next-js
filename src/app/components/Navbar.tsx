'use client'

import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white z-50">
            <div className="mx-auto px-24">

                <div className="flex justify-between h-18 py-2">
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#" className="text-gray-700 hover:text-gray-900">Home Page</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">About Us</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Services</a>
                        {/* <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a> */}
                    </div>
                    <div className="w-[57%]">
                        <Image
                            src="/images/logo3.1.png"
                            width={170}
                            height={100}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Home</a>
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">About</a>
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Services</a>
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
