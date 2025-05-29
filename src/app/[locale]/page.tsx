
import { Metadata } from 'next';

import BenefitSection from "./components/BenefitSection";
import FeatureListSection from "./components/FeatureListSection";
import Footer from "./components/Footer";
import HeroHeaderSection from "./components/HeroHeaderSection";

import Portfolio from "./components/Portfolio";


export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Cristian Tombe\'s portfolio. Full Stack Developer with expertise in modern web technologies, creating innovative digital solutions.',
  openGraph: {
    title: 'Cristian Tombe - Full Stack Developer Portfolio',
    description: 'Explore my portfolio showcasing modern web applications built with React, Next.js, and cutting-edge technologies.',
    images: [''], // todo: image not found
  },
}


export default function Home() {
  return (
    <>
      <HeroHeaderSection />
      <FeatureListSection />
      <BenefitSection />
      <Portfolio />
      <Footer />
    </>
  );
}