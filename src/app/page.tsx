import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/commons/Footer";

import Image from 'next/image';


export default function Home() {
  return (
    <>

      <a
        href="https://wa.me/573015567050"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white py-3 px-5 rounded-full shadow-lg flex items-center gap-2 hover:scale-110 transition-transform z-50"
      >
        <Image
          src="icons/220236.png"
          alt="WhatsApp"

          width={20}
          height={20}
        />
        <span className="font-medium">Contact me</span>
      </a>


      <Header />
      <div className="sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 mx-auto">
        <Portfolio />
        <Skills />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </>
  );
}