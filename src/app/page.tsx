import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/commons/Footer";

export default function Home() {
  return (
    <>
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