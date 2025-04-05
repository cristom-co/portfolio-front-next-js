"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const Footer = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  const handleScroll = () => {
    const isBottom = window.innerHeight + window.scrollY >= (document.body.scrollHeight - 200);

    if (imageRef.current) {
      if (isBottom) {
        imageRef.current.classList.remove("rotate-0");
        imageRef.current.classList.add("rotate-180", "transition", "duration-300", "ease-in-out");
      } else {

        imageRef.current.classList.remove("rotate-180");
        imageRef.current.classList.add("rotate-0", "transition", "duration-300", "ease-in-out");
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <>
    <div className="fixed bottom-5 left-0 w-full hidden md:block">
      <div className="flex flex-col items-center">
        <Image ref={imageRef} src="/icons/arrow-down.png" alt="flecha abajo" width={40} height={40} />
      </div>
    </div>
  </>
};

export default Footer;