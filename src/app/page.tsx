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
      <Portfolio />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}