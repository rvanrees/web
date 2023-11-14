import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Quote />
      <Footer />
    </>
  );
}
