'use client';
import React from 'react';
import Image from 'next/image';


type LogoProps = {
    width?: number;
    height?: number;
    alt?: string;
};

const Logo: React.FC<LogoProps> = ({ width = 48, height = 48, alt = 'Logo' }) => (
    <div className="flex items-center space-x-3">
        <Image
            src="/images/old.png"
            width={width}
            height={height}
            alt={alt}
        />
        <div className="flex flex-col lea">
            <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                CRISTHIAN TOMBE
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-sm text-gray-500">
                SOFTWARE DEVELOPER
            </span>
        </div>
    </div>
);

export default Logo;